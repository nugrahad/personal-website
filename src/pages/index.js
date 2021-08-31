import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from '../theme';
import Banner from '../sections/banner';
import Layout from '../components/layout';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
        <Banner />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}