import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header >
      
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`David Ribeiro Info `}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={clsx('hero hero--primary', styles.heroBanner)}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
