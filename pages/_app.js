import React from 'react';
import App from 'next/app';

import 'react-multi-carousel/lib/styles.css';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
