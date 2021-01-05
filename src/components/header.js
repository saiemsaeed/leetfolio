import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col } from 'react-bootstrap';
const Header = ({ siteTitle, resumeLink }) => (
  <header
    style={{
      position: 'fixed',
      width: '100%',
      padding: '30px 80px',
      zIndex: 1,
    }}
  >
    <div className="d-flex justify-content-end">
      <NavBar resumeLink={resumeLink} />
    </div>
    <div />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
