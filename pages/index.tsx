import Link from 'next/link';
import { GetServerSideProps } from 'next';

import Layout from '~components/Layout';
import { PATHS } from '~constants/paths';
import { APP_NAME } from '~constants/general';

import styles from './styles.module.scss';

interface Props {
  foo: string;
}

function Home({ foo }: Props) {
  return (
    <Layout title={APP_NAME} className="column center middle">
      <main className="column center m-bottom-2">
        <h2 className={`m-bottom-2 ${styles.title}`}>Check next links</h2>
        <Link href={PATHS.example}>
          <span data-testid="example-link" className="link m-bottom-2">
            Simple {foo}
          </span>
        </Link>
        <Link href={`${PATHS.example}/1`}>
          <span className="link m-bottom-2">Dynamic {foo} 1</span>
        </Link>
        <Link href={`${PATHS.example}/2?foo=bar`}>
          <span className="link m-bottom-2">Dynamic {foo} 2 with query params!</span>
        </Link>
        <p className={`${styles.message} m-bottom-2`}>
          Get started by editing <code>pages/index.tsx</code>
        </p>
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link m-bottom-2">More examples</span>
        </a>
      </main>
      <footer className="row">
        <img src="/assets/wolox.svg" alt="Wolox Logo" className={`${styles.logo} m-right-2`} />
        <img src="/assets/fea.png" alt="Frontend Army Logo" className={`${styles.logo} m-right-2`} />
      </footer>
    </Layout>
  );
}

// Example pre-fetch request in page using SERVER-SIDE-RENDERING, this will be fetched in every request.
// If your data doesn't change constantly you should use `getStaticProps` to fetch data on BUILD time
// context argument of `getServerSideProps` contains utilities like getting the query params
export const getServerSideProps: GetServerSideProps = async () => {
  // replace promise for your service
  const foo = await new Promise(resolve => {
    resolve('Example');
  });
  return { props: { foo } };
};

export default Home;
