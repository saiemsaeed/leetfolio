import React from 'react';
import styled from 'styled-components';

const NavButton = styled.button`
  font-size: 16px;
  font-family: Roboto, sans-serif !important;
  background: transparent;
  border: none;
  color: #f7f7f7;
  padding: 5px 9px;
  outline: none;

  &:hover {
    /* border: 2px solid #f7f7f7; */
    background: #f7f7f7;
    color: #3e3e3e;
    border-radius: 2px;
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
      <a href={resumeLink} target="_blank">
        <NavButton>Resume</NavButton>
      </a>
    </nav>
  );
}
