import React from 'react';
import styled from 'styled-components';

const NavButtonLink = styled.a`
  margin: 0 10px;
`;

const NavButton = styled.button`
  font-size: 16px;
  font-family: Roboto, sans-serif !important;
  background: transparent;
  border: none;
  color: #f7f7f7;
  padding: 5px 9px;
  outline: none;
  transition: linear 0.1s;

  &:hover {
    /* border: 2px solid #f7f7f7; */
    background: #f7f7f7;
    color: #3e3e3e;
    border-radius: 3px;
    transition: linear 0.2s;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export default function NavBar({ resumeLink }) {
  return (
    <nav>
      <NavButtonLink href="https://calendly.com/saiemsaeed" target="_blank">
        <NavButton>Book Meeting</NavButton>
      </NavButtonLink>
      <NavButtonLink href={resumeLink} target="_blank">
        <NavButton>Resume</NavButton>
      </NavButtonLink>
    </nav>
  );
}
