import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='bgColor'>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>
    {children}
    <Footer />
  </div>
);

export default Layout;
