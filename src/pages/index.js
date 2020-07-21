import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { LazyImage } from '../components/LazyImage';
import { H1, H2, H3 } from '../components/headings';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <H1>Hi people. This is leetfolio</H1>
    <H2>Hi people. This is leetfolio</H2>
    <H3>Hi people. This is leetfolio</H3>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <LazyImage src="gatsby-astronaut.png" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/using-typescript/">Go to Using TypeScript</Link>
  </Layout>
);

export default IndexPage;
