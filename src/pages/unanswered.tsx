import { useEffect, useState, useCallback } from 'react';
import NextLink from 'next/link';
import { Spacer, Link, Button, Loading, Popover } from '@geist-ui/core';
import { Toaster } from 'react-hot-toast';
import { observer } from 'mobx-react-lite';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import useToken from 'components/token';
import DiscussionStore from 'stores/discussion';
import Contributors from 'components/contributors';
import { Translation } from 'components/intl/translation';
import Footer from 'components/footer';
import { DefaultUI, ClassicUI, SocialUI } from 'components/ui';
import SettingsStore from 'stores/settings';
import { Sliders } from '@geist-ui/icons';

const Home = observer(() => {
  const token = useToken();
  const [
    { loading, page, nomore, discussions, setPage, getUnansweredDiscussions }
  ] = useState(() => new DiscussionStore());
  const [modal, toggleModal] = useState(false);
  const [{ settings, update, setSettings, getSettings }] = useState(
    () => new SettingsStore()
  );

  useEffect(() => {
    getSettings();
    getUnansweredDiscussions(false);
  }, [token?.id, settings?.ui]);

  const changeUI = async (value: any) => {
    await update({ ...settings, ui: value }).then(() => {
      setSettings({ ...settings, ui: value });
    });
  };

  const handleScroll = useCallback(() => {
    const offset = 50;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - offset
    ) {
      if (nomore === false) {
        setPage(page + 1);
        getUnansweredDiscussions(true);
      }
    }
  }, [discussions, nomore, page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const removeBanWords = (data: string) => {
    let banWords: any = settings && settings.banWords ? settings.banWords : '';
    banWords = banWords.replace(/\s/gi, '');
    banWords = banWords.split(',');

    data
      ? banWords.forEach((item: string) => {
          let regEx: any = `${item}`;
          regEx = new RegExp(regEx, 'gi');
          data = data.replace(regEx, '*****');
        })
      : '';

    return data;
  };

  const UI =
    settings.ui === 'social'
      ? SocialUI
      : settings.ui === 'classic'
        ? ClassicUI
        : DefaultUI;

  return (
    <div>
      <Navbar
        title="Home"
        description="Home"
        startConversation={() => toggleModal(!modal)}
      />
      <Toaster />
      <div className="page-container top-100">
        <Sidebar
          active="home"
          button={
            <NextLink href={'/start-discussion'}>
              <Button type="secondary" style={{ textTransform: 'unset' }}>
                <Translation
                  lang={settings?.language}
                  value="Start a discussion"
                />
              </Button>
            </NextLink>
          }
          advert={
            settings.advert?.left ? (
              <div
                style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  paddingTop: 20,
                  paddingRight: 20
                }}
                dangerouslySetInnerHTML={{ __html: settings.advert?.left! }}
              ></div>
            ) : (
              ''
            )
          }
        />
        <main className="main with-right">
          <div
            style={{ marginBottom: 10, width: '100%' }}
            dangerouslySetInnerHTML={{ __html: settings.advert?.top! }}
          ></div>

          {token.id ? (
            <div className="mobile">
              <NextLink href={'/start-discussion'}>
                <Button type="secondary" style={{ textTransform: 'unset' }}>
                  <Translation
                    lang={settings?.language}
                    value="Start a discussion"
                  />
                </Button>
              </NextLink>
              <Spacer />
            </div>
          ) : (
            ''
          )}

          <div className="column ui">
            <div>
              <div className="custom-tab">
                <NextLink href="/popular">
                  <Link>
                    <Translation lang={settings?.language} value="Popular" />
                  </Link>
                </NextLink>
                <NextLink href="/">
                  <Link>
                    <Translation lang={settings?.language} value="Recent" />
                  </Link>
                </NextLink>
                <NextLink href="/unanswered">
                  <Link className="active">
                    <Translation lang={settings?.language} value="Unanswered" />
                  </Link>
                </NextLink>
                <NextLink href="/category">
                  <Link>
                    <Translation lang={settings?.language} value="Categories" />
                  </Link>
                </NextLink>
              </div>
            </div>
            <div className="hidden">
              <div>
                <Popover
                  placement="leftStart"
                  content={
                    <div style={{ width: 130 }}>
                      <Popover.Item title>
                        <Translation
                          lang={settings?.language}
                          value="Discussion UI"
                        />
                      </Popover.Item>
                      <Popover.Item
                        className="pointer"
                        onClick={() => changeUI('default')}
                      >
                        <Translation
                          lang={settings?.language}
                          value="Default"
                        />
                      </Popover.Item>
                      <Popover.Item
                        className="pointer"
                        onClick={() => changeUI('classic')}
                      >
                        <Translation
                          lang={settings?.language}
                          value="Classic"
                        />
                      </Popover.Item>
                      <Popover.Item
                        className="pointer"
                        onClick={() => changeUI('social')}
                      >
                        <Translation lang={settings?.language} value="Social" />
                      </Popover.Item>
                    </div>
                  }
                >
                  <span
                    className="pointer"
                    style={{ position: 'relative', top: 5 }}
                  >
                    <Sliders size={20} />
                  </span>
                </Popover>
              </div>
            </div>
          </div>

          {discussions.map((item) => (
            <UI
              key={item.id}
              lang={settings?.language}
              category={item.category?.title}
              color={item.category?.color}
              slug={item.slug}
              data={item.content}
              avatar={
                item.profile && item.profile.photo
                  ? `/static/${item.profile.photo}`
                  : '/images/avatar.png'
              }
              active={item.activeUsers}
              author={item.profile?.name}
              authorRole={item.profile?.role}
              authorUsername={item.profile?.username}
              title={removeBanWords(item.title)}
              comment={item.comment}
              premium={item.premium}
              pinned={item.isPinned}
              view={item.view}
              date={item.createdAt}
            />
          ))}

          {loading ? (
            <div>
              <Spacer h={3} />
              <Loading>
                <Translation lang={settings?.language} value="Loading" />
                &nbsp;
                <Translation lang={settings?.language} value="Discussions" />
              </Loading>
            </div>
          ) : (
            ''
          )}

          {!loading && discussions.length === 0 ? (
            <div className="center">
              <Spacer h={3} />
              <p>
                <Translation
                  lang={settings?.language}
                  value={`No Discussion`}
                />
              </p>
            </div>
          ) : (
            ''
          )}
        </main>

        <aside>
          <div className="sidenav">
            <Contributors lang={settings?.language} />
            {settings.advert?.right ? (
              <div
                style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  paddingLeft: 10
                }}
                dangerouslySetInnerHTML={{
                  __html: settings.advert?.right!
                }}
              ></div>
            ) : (
              ''
            )}
            <Footer siteName={settings?.siteName} />
          </div>
        </aside>
      </div>
    </div>
  );
});

export default Home;
