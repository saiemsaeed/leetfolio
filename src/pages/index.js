import React from 'react';
import { Link } from 'gatsby';

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid className="p-0 h-100">
      <Row noGutters>
        <Col xs={6}>
          <LazyImage src="saiem-saeed.jpeg" style={{ height: '100vh' }} />
        </Col>
        <Col xs={6} className="py-4">
          <div className="d-flex flex-column justify-content-between mx-4 px-4 h-100 py-4">
            <div className="d-flex flex-column align-items-center">
              <PageTitle>I'm Saiem</PageTitle>
              <span>— Full Stack Engineer</span>
            </div>
            <div className="d-flex flex-column">
              <Line />
              <Row className="px-4">
                <Col xs={6} className="px-4">
                  <Paragraph>
                    I’m a Full stack developer. Who loves working with the
                    cutting edge tools and technologies. My current stack is
                    Angular, Node, GraphQL, Express and MongoDB.
                  </Paragraph>
                  <div className="p-3" />
                  <Signature>Saiem Saeed</Signature>
                </Col>
                <Col xs={6} className="px-4">
                  <Paragraph>
                    And when I am not working I am part of the PC master race. I
                    play multiplayer games like CSGO, Dota, PubG and Apex. And I
                    also do Mixed Martial Arts.
                  </Paragraph>
                </Col>
              </Row>

              <Line />
            </div>
            <Row>
              <Col xs={6}>
                <Paragraph bold capitalized>
                  Get In Touch
                </Paragraph>
                <div className="p-1" />
                <Paragraph>hello@saiem.pro</Paragraph>
                <Paragraph>+92 313 5536246</Paragraph>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
