import styled from 'styled-components';

export default styled.p`
  font-size: 17px;
  font-weight: ${props => (props.bold ? 700 : 400)};
  text-transform: ${props => (props.capitalized ? 'uppercase' : 'inherit')};
  font-family: 'Roboto', sans-serif !important;
`;
