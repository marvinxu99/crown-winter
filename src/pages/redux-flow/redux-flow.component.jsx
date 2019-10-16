import React from 'react';

import {
  ReduxFlowContainer, 
  WinterImageContainer, 
  WinterImageSmall,
} from './redux-flow.styles';

import winter1 from '../../assets/images/winter-winter.jpeg';
import reduxflow from '../../assets/images/redux-flow.jpg';

const ReduxFlowPage = () => (
  <ReduxFlowContainer>
    <h2>The follwing graph is from Andrei Neagoie & Yihua zhang's lecture re: redux</h2>
    <a style={{textDecoration: 'underline', marginBottom: '20px'}} href = 'https://www.npmjs.com/package/redux-thunk'>Link to Redux Thunk</a>
    <img src = { reduxflow } alt='redux flow' />

    <WinterImageContainer>
      <WinterImageSmall style={{ backgroundImage: `url(${winter1})` }}></WinterImageSmall>
    </WinterImageContainer>

  </ReduxFlowContainer>
);

export default ReduxFlowPage;