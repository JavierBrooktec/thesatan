import React from 'react';
import App from 'next/app';

import 'react-multi-carousel/lib/styles.css';
import 'react-datepicker/dist/react-datepicker.css';



class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
