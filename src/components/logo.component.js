import * as React from 'react';
import styled from 'styled-components/native';

const TempJobLogo = styled.Image`
  height: 80px;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = ({style}) => {
  return (
    <TempJobLogo
      style={style}
      source={require('../assets/imgs/tempjoblogo.png')}></TempJobLogo>
  );
};

export default Logo;
