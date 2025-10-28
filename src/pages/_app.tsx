import 'styles/custom.scss';

import { useEffect, useState, useMemo, Suspense } from 'react';
import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline, Loading, Themes } from '@geist-ui/core';
import trackPageview from 'components/analytics';
import { defaultTheme } from 'themes';
import { useRouter } from 'next/router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SettingsStore from 'stores/settings';
import ThemeStore from 'stores/theme';
import { themeProp } from 'interfaces/theme';
import { Extension } from 'interfaces/extension';
import loadExtensions from 'extensions';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [theme, setTheme] = useState<any>(null);
  const [themeSlug, setThemeSlug] = useState<any>('');
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const themeStore = useMemo(() => new ThemeStore(), []);
  const settingsStore = useMemo(() => new SettingsStore(), []);

  useEffect(() => {
    const initializeExtensions = async () => {
      const extensions: Extension[] = await loadExtensions();
      extensions.forEach((extension: Extension) => extension.initialize?.());
    };

    initializeExtensions();
  }, []);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const settings: any = await settingsStore?.getSettings();
        const themeSlug = settings?.data?.theme;
        setThemeSlug(themeSlug);

        if (themeSlug) {
          const fetchedTheme: themeProp = await themeStore?.getTheme(themeSlug);
          let _theme =
            fetchedTheme && fetchedTheme?.code
              ? JSON.parse(fetchedTheme?.code)
              : {};
          _theme && setTheme(_theme);
        }
      } catch (error) {
        console.error('Failed to fetch theme:', error);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setLoaded(true);
        }, 2000);
      }
    };

    fetchTheme();
  }, [settingsStore, themeStore]);

  if (loading && theme === null) {
    return <Suspense fallback={<Loading />}></Suspense>;
  } else if (theme?.palette) {
    const { palette, expressiveness, font } = theme;
    const customTheme = palette
      ? Themes.createFromLight({
          type: themeSlug,
          palette,
          expressiveness,
          font: { sans: font }
        })
      : defaultTheme;

    return (
      <GeistProvider
        themes={[customTheme, defaultTheme]}
        themeType={customTheme ? themeSlug : 'weiss'}
      >
        <CssBaseline />
        {trackPageview()}
        <GoogleOAuthProvider
          clientId={
            settingsStore?.settings?.socialAccount?.google || 'no-client-id'
          }
        >
          <Component {...pageProps} key={router.asPath} />
        </GoogleOAuthProvider>
      </GeistProvider>
    );
  }

  return null;
};

export default App;
