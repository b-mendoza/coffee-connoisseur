import 'styles/main.css';

import type { AppProps as NextJSAppProps } from 'next/app';

import { CustomPageProps } from 'typings/shared';

type CustomAppProps<CPP = CustomPageProps> = Omit<
  NextJSAppProps<CPP>,
  keyof CPP
> & {
  pageProps: CPP;
};

function __NextApp(props: CustomAppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

export default __NextApp;
