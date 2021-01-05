import React from 'react';
import { Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { LazyImage } from '../components/LazyImage';
import {
  H1,
  H2,
  H3,
  PageTitle,
  Paragraph,
  Signature,
} from '../components/Typography';
import { Row, Col, Container } from 'react-bootstrap';
import Line from '../components/Line';
import styled from 'styled-components';

const FooterIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 10px;

  img {
    filter: invert(1);
  }
`;

const ContentContainer = styled(Container)`
  padding: 100px;
`;

const InnerContentContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;
`;

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            email
            phone
            designation
            social {
              instagram
              github
              linkedin
              reddit
              twitter
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="Home" />
      <Container fluid className="p-0 h-100">
        <Row noGutters>
          <Col xs={6}>
            <LazyImage src="saiem-saeed.jpeg" style={{ height: '100vh' }} />
          </Col>
          <Col xs={6}>
            <ContentContainer className="d-flex flex-column justify-content-between h-100">
              <div className="d-flex flex-column align-items-center">
                <PageTitle>I'm Saiem</PageTitle>
                <span>— {site.siteMetadata.designation}</span>
              </div>
              <div className="d-flex flex-column">
                <Line />
                <InnerContentContainer>
                  <Row>
                    <Col xs={6}>
                      <Paragraph>
                        I’m a Full stack developer. Who loves working with the
                        cutting edge tools and technologies. My current stack is
                        Angular, Node, GraphQL, Express and MongoDB.
                      </Paragraph>
                      <div className="p-3" />
                      <Signature>{site.siteMetadata.author}</Signature>
                    </Col>
                    <Col xs={6}>
                      <Paragraph className="d-flex justify-content-end">
                        And when I am not working I am part of the PC master
                        race. I play multiplayer games like CSGO, Dota, PubG and
                        Apex. And I also do Mixed Martial Arts.
                      </Paragraph>
                    </Col>
                  </Row>
                </InnerContentContainer>
                <Line />
              </div>
              <Container>
                <Row>
                  <Col xs={6}>
                    <Paragraph bold capitalized>
                      Get In Touch
                    </Paragraph>
                    <div className="p-1" />
                    <Paragraph>{site.siteMetadata.email}</Paragraph>
                    <Paragraph>{site.siteMetadata.phone}</Paragraph>
                  </Col>
                  <Col
                    xs={6}
                    className="d-flex align-items-center justify-content-end"
                  >
                    <FooterIcon>
                      <a
                        href={site.siteMetadata.social.twitter}
                        target="_blank"
                      >
                        <LazyImage src="twitter.png" />
                      </a>
                    </FooterIcon>
                    <FooterIcon>
                      <a href={site.siteMetadata.social.github} target="_blank">
                        <LazyImage src="github.png" />
                      </a>
                    </FooterIcon>
                    <FooterIcon>
                      <a
                        href={site.siteMetadata.social.instagram}
                        target="_blank"
                      >
                        <LazyImage src="instagram.png" />
                      </a>
                    </FooterIcon>
                    <FooterIcon>
                      <a href={site.siteMetadata.social.reddit} target="_blank">
                        <LazyImage src="reddit.png" />
                      </a>
                    </FooterIcon>
                    <FooterIcon>
                      <a
                        href={site.siteMetadata.social.linkedin}
                        target="_blank"
                      >
                        <LazyImage src="linkedin.png" />
                      </a>
                    </FooterIcon>
                  </Col>
                </Row>
              </Container>
            </ContentContainer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
