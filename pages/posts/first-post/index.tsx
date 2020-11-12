/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import Layout from '~components/Layout';
import { foo } from '~constants/general';

console.log(foo);
export default function FirstPost() {
  const [test, setTest] = useState('hola');
  useEffect(() => {
    setTest('chao');
    console.log(test, foo);
  }, []);
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="column">
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </div>
    </Layout>
  );
}
