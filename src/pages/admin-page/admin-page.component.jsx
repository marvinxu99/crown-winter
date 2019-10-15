import React from 'react';

import {
    AdminPageContainer, 
    AdminPageWarning, 
    WinterImageContainer, 
    WinterImageSmall} from './admin-page.styles';
import winter1 from '../../assets/images/winter-winter.jpeg';

const AdminPage = () => (
  <AdminPageContainer>
    <AdminPageWarning>
      This page is intended for supervisors to perform administrative tasks. <br />
      USE WITH CAUTION.
    </AdminPageWarning>
    <WinterImageContainer>
      <WinterImageSmall style={{ backgroundImage: `url(${winter1})` }}></WinterImageSmall>
    </WinterImageContainer>

  </AdminPageContainer>
);

export default AdminPage;