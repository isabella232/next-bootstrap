import Link from 'next/link';
import { useState, useEffect } from 'react';

import Layout from '~components/Layout';
import { PATHS } from '~constants/paths';

function Example() {
  const [foo, setFoo] = useState('');

  useEffect(() => {
    setFoo('Example Page');
  }, []);

  return (
    <Layout title="Example" className="column center middle">
      <span className="m-bottom-2">{foo}</span>
      <Link href={PATHS.home}>
        <span className="link">Back to home</span>
      </Link>
    </Layout>
  );
}

export default Example;
