import { useState, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { parseCookies, destroyCookie } from 'nookies';
import {
  Text,
  Popover,
  Link,
  Button,
  Grid,
  Card,
  User,
  Spacer,
  Badge,
  Image
} from '@geist-ui/core';
import { Bell, Menu, ChevronDown } from '@geist-ui/icons';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import useToken from '../token';
import UserStore from 'stores/user';
import SettingsStore from 'stores/settings';
import NotificationStore from 'stores/notification';
import { Translation } from 'components/intl/translation';
import useSettings from 'components/settings';

type navbarProps = {
  title: string;
  description: string;
  hide?: boolean;
};

const Navbar = observer((props: navbarProps) => {
  const settings = useSettings();
  const token = useToken();
  const router = useRouter();
  const cookie = parseCookies();
  const [show, setMenu] = useState(false);
  const { title, description, hide } = props;
  const [{ unread, getUnreadNotification }] = useState(
    () => new NotificationStore()
  );
  const [{ getUser }] = useState(() => new UserStore());

  useEffect(() => {
    checkInvalidUser();
    token.id ? getUnreadNotification(token.id) : null;
  }, [token]);

  const checkInvalidUser = async () => {
    let user: any = cookie;
    user = user && user._w_auth ? JSON.parse(user._w_auth) : null;

    if (user.id) {
      try {
        let profile = await getUser(user.id);

        if (!profile.data.id) {
          destroyCookie({}, '_w_auth');
          router.reload();
        }
      } catch (error) {
        destroyCookie({}, '_w_auth');
        router.reload();
        console.error(error);
      }
    }
  };

  const getFirstName = (name: string) => {
    let first: any = name.split(' ');
    return first[0];
  };

  const logout = () => {
    destroyCookie({}, '_w_auth');
    router.push('/');
  };

  const menu = () => (
    <div>
      <Popover.Item>
        <NextLink href={`/u/${token.username}`}>
          <Link href={`/u/${token.username}`}>
            <Translation lang={settings?.language} value="Profile" />
          </Link>
        </NextLink>
      </Popover.Item>
      <Popover.Item line />
      {token.id ? (
        <>
          <Popover.Item>
            <NextLink href="/admin">
              <Link href="/admin">
                <Translation lang={settings?.language} value="Admin" />
              </Link>
            </NextLink>
          </Popover.Item>
          <Popover.Item line />
        </>
      ) : (
        ''
      )}
      <Popover.Item>
        <Link href="/settings">
          <Translation lang={settings?.language} value="Settings" />
        </Link>
      </Popover.Item>
      <Popover.Item line />
      <Popover.Item>
        <Link href="#" icon onClick={logout}>
          <Translation lang={settings?.language} value="Log out" />{' '}
          <Spacer w={0.5} inline />
        </Link>
      </Popover.Item>
    </div>
  );

  const MenuItem = () => (
    <div className="menu">
      <Spacer w={1} />
      <User
        className="pointer"
        src={token.photo ? `/static/${token.photo}` : '/images/avatar.png'}
        name={token.name}
      />

      <Text p>
        <NextLink href={`/u/${token.username}`}>
          <Link href={`/u/${token.username}`}>
            <Translation lang={settings?.language} value="Profile" />
          </Link>
        </NextLink>
      </Text>
      {token.role === 'admin' ? (
        <Text p>
          <NextLink href="/admin">
            <Link href="/admin">
              <Translation lang={settings?.language} value="Admin" />
            </Link>
          </NextLink>
        </Text>
      ) : (
        ''
      )}
      <Text p>
        <NextLink href="/settings">
          <Link href="/settings">
            <Translation lang={settings?.language} value="Settings" />
          </Link>
        </NextLink>
      </Text>
      <Text p>
        <Link href="#" icon onClick={logout}>
          <Translation lang={settings?.language} value="Log out" />{' '}
          <Spacer w={0.5} inline />
        </Link>
      </Text>
    </div>
  );

  return (
    <div className="navbar">
      <Head>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <title>{title}</title>
        <link rel="icon" href={`/static/${settings.siteFavicon}`} />
      </Head>

      <Card
        shadow
        width="100%"
        className="without-radius"
        style={{ display: hide ? 'none' : 'inherit' }}
      >
        <div className="inner">
          <Grid.Container gap={0}>
            <Grid xs={18} md={6}>
              <NextLink href="/">
                <Link href="/">
                  {settings.siteLogo ? (
                    <Image
                      className="site-logo"
                      src={`/static/${settings.siteLogo}`}
                      style={{ width: 'auto', height: 32 }}
                    />
                  ) : (
                    <Text b>{settings.siteName}</Text>
                  )}
                </Link>
              </NextLink>
              <Spacer inline />
              <NextLink href="/">
                <Link href="/">
                  <Translation
                    lang={settings?.language}
                    value="Go to Discussions"
                  />
                  &nbsp;&rarr;
                </Link>
              </NextLink>
            </Grid>
            <Grid xs={6} md={0}>
              <Badge.Anchor>
                {unread ? (
                  <Badge type="error" scale={0.5}>
                    {unread}
                  </Badge>
                ) : (
                  ''
                )}
                <NextLink href="/notifications">
                  <Link>
                    <Bell />
                  </Link>
                </NextLink>
              </Badge.Anchor>
              <Spacer w={3} inline />
              <Button
                icon={<Menu />}
                auto
                scale={2 / 3}
                onClick={() => setMenu(!show)}
              />
              <Spacer w={2} inline />
            </Grid>
            <Grid xs={0} md={12}>
              &nbsp;
            </Grid>
            <Grid xs={0} md={6}>
              {token.id ? (
                <>
                  <Spacer w={5} inline />
                  <Badge.Anchor>
                    {unread ? (
                      <Badge type="error" scale={0.5}>
                        {unread}
                      </Badge>
                    ) : (
                      ''
                    )}
                    <NextLink href="/notifications">
                      <Link href="/notifications">
                        <Bell />
                      </Link>
                    </NextLink>
                  </Badge.Anchor>
                  <Spacer w={2} inline />
                  <Popover content={menu}>
                    <User
                      className="pointer"
                      src={
                        token.photo
                          ? `/static/${token.photo}`
                          : '/images/avatar.png'
                      }
                      name={getFirstName(token.name!)}
                    />
                    <ChevronDown size={16} className="caret" />
                  </Popover>
                </>
              ) : (
                <></>
              )}
            </Grid>
          </Grid.Container>
        </div>
      </Card>
      {show ? <MenuItem /> : ''}
    </div>
  );
});

export default Navbar;
