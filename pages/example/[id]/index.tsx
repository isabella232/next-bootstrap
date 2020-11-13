import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '~components/Layout';
import { PATHS } from '~constants/paths';

interface Props {
  data: { id: string };
}

// Example dynamic route component
function ExampleDetail({ data }: Props) {
  const { query } = useRouter();
  const queryShow = query && Object.entries(query).find(key => key[0] === 'foo');

  return (
    <Layout title={`Example ${data.id}`} className="column center middle">
      <h1>Example: {data.id}</h1>
      {queryShow && (
        <h2>
          I have query params: {queryShow[0]}: {queryShow[1]}
        </h2>
      )}
      <Link href={PATHS.home}>
        <span className="link">Back to home</span>
      </Link>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Replace with your api call obtaining a /get list to know the possible ids
  const paths: { params: { id: string } }[] = await new Promise(resolve => {
    resolve(
      [1, 2].map(item => ({
        params: {
          id: `${item}`
        }
      }))
    );
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async context => {
  // Replace with your api call obtaining the possibly /get/{id} item
  const data = await new Promise(resolve => {
    resolve(context.params);
  });
  return {
    props: {
      data
    }
  };
};

export default ExampleDetail;
