import React from 'react';

//import './custom-button.styles.scss';
import { CustomButtonContainer } from './custom-button.styles.jsx';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;