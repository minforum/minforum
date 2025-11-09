import { useState, useEffect } from 'react';
import { Spacer, Text, Button, Input, Card } from '@geist-ui/core';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';
import { ChevronLeft } from '@geist-ui/icons';
import Navbar from 'components/navbar';
import SettingsStore from 'stores/settings';
import UserStore from 'stores/user';
import CategoryStore from 'stores/category';
import SetupVerify from 'components/admin/setup-verify';
import { Translation, translation } from 'components/intl/translation';

export async function getServerSideProps(context) {
  const { req } = context;
  const domain = req.headers.host;

  return {
    props: {
      domain
    }
  };
}

type pageProps = { domain: string };

const EmailSetup = observer((props: pageProps) => {
  const cookie = parseCookies();
  const router = useRouter();
  const [userStore] = useState(() => new UserStore());
  const [categoryStore] = useState(() => new CategoryStore());
  const [store] = useState(() => new SettingsStore());
  const { loading, admin, setAdmin, settings, setSettings, update } = store;
  const { email } = settings;

  useEffect(() => {
    let setup = cookie && cookie._w_setup ? JSON.parse(cookie._w_setup) : null;
    setup ? (setAdmin(setup.admin), setSettings(setup.settings)) : null;
  }, []);

  const lang = settings?.language ? settings?.language : 'en';

  const handleSettings = (val: any) => {
    setSettings({ ...settings, ...val });
  };

  const save = async () => {
    if (!email?.port) {
      toast.error('Please provide SMTP port');
    } else if (!email?.host) {
      toast.error('Please provide SMTP host');
    } else if (!email?.email) {
      toast.error('Invalid email address! Please provide SMTP email');
    } else if (!email.password) {
      toast.error('Please provide SMTP password.');
    } else {
      let website = router.basePath;

      //Default point settings
      const point = {
        login: 1,
        discussion: 2,
        comment: 1,
        bestAnswer: 5
      };

      const _settings = {
        ...settings,
        ...{ point },
        banWords: 'motherfucker, bullshit, fuck, shit',
        status: 'completed',
        theme: 'weiss',
        domain: website,
        welcomeEmail: `Thank you for joining ${settings?.siteName}`,
        homepage: {
          bgColor: '#2A222F',
          text: `<div style="text-align: center;"><h3>Welcome to the ${settings?.siteName}</h3><div>Please be mindful to respect everyone's contributions and maintain a civil and respectful tone in all your interactions.</div></div>`
        }
      };

      let body = { ...admin, ...{ point: 1, status: 'active', role: 'admin' } };

      await userStore.setup(body).then(async (res: any) => {
        await categoryStore.newCategory({
          title: 'General',
          description: 'General category for all discussions',
          color: '#000000',
          slug: 'general',
          icon: { icon: 'home', type: 'solid' }
        });

        if (res.success) {
          const { name, id, role, photo, username } = res.data;
          setCookie(
            null,
            '_w_auth',
            JSON.stringify({ name, id, role, photo, username }),
            {
              maxAge: 30 * 24 * 60 * 60,
              path: '/'
            }
          );

          await update(_settings).then((res) => {
            destroyCookie({}, '_w_setup');
            router.push('/');
          });
        }
      });
    }
  };

  return (
    <SetupVerify>
      <Navbar
        title="Email settings - Setup MinForum"
        description="Email settings - Setup MinForum"
        hide
        norobot
      />
      <Toaster />
      <div className="polkadot">
        <div className="page-container top-100">
          <div className="boxed">
            <div className="center">
              <img src="/images/logo-wordmark.svg" height={80} />
            </div>

            <Card shadow width="100%">
              <Text h3>
                <Translation lang={lang} value="Email settings" />
              </Text>
              <Spacer h={2} />

              <Input
                htmlType="url"
                placeholder={translation({
                  lang: lang,
                  value: 'SMTP port'
                })}
                width="100%"
                scale={4 / 3}
                value={email?.port}
                onChange={(e) =>
                  handleSettings({
                    email: {
                      ...email,
                      ...{ port: e.target.value }
                    }
                  })
                }
              />
              <Spacer h={1.5} />

              <Input
                htmlType="url"
                placeholder={translation({
                  lang: lang,
                  value: 'SMTP host'
                })}
                width="100%"
                scale={4 / 3}
                value={email?.host}
                onChange={(e) =>
                  handleSettings({
                    email: {
                      ...email,
                      ...{ host: e.target.value }
                    }
                  })
                }
              />
              <Spacer h={1.5} />
              <Input
                placeholder={translation({
                  lang: lang,
                  value: 'SMTP user/email'
                })}
                width="100%"
                scale={4 / 3}
                value={email?.email}
                onChange={(e) =>
                  handleSettings({
                    email: {
                      ...email,
                      ...{ email: e.target.value }
                    }
                  })
                }
              />
              <Spacer h={1.5} />
              <Input.Password
                placeholder={translation({
                  lang: lang,
                  value: 'SMTP password'
                })}
                width="100%"
                scale={4 / 3}
                value={email?.password}
                onChange={(e) =>
                  handleSettings({
                    email: {
                      ...email,
                      ...{ password: e.target.value }
                    }
                  })
                }
              />
              <Spacer h={1.5} />
              <Button
                onClick={() => router.back()}
                type="secondary"
                width="48%"
                icon={<ChevronLeft />}
              >
                <Translation lang={lang} value="Back" />
              </Button>
              <Button
                loading={loading}
                shadow
                type="secondary"
                width="50%"
                ml={'5px'}
                onClick={save}
              >
                <Translation lang={lang} value="Save & launch" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </SetupVerify>
  );
});

export default EmailSetup;
