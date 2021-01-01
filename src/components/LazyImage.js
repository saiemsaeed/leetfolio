/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const LazyImage = props => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(quality: 100, maxWidth: 1600) {
                ...GatsbyImageSharpFluid_tracedSVG
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === props.src
      );
      if (!image) {
        return null;
      }
      return <Img fluid={image.node.fluid} {...props} />;
    }}
  />
);

LazyImage.propTypes = {
  src: PropTypes.string,
};

LazyImage.defaultProps = {
  src: '',
};

export { LazyImage };
