import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Adi, a web developer with expertise in both front-end and back-end development. I have a passion for creating fast, responsive, and visually stunning websites and web applications.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p className={utilStyles.headingMd}>
        Read <Link href="/posts/first-post"> this page !</Link>
        </p>
      </section>
      <section className='${utilStyles.headingMd} ${utilStyles.padding1px}'>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id,date,title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}