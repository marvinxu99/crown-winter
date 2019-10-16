import React from 'react';
import SHOP_DATA from './shop.data';
import CustomButton from '../custom-button/custom-button.component';
import { addCollectionAndDocuments } from '../../firebase/firebase.utils';

import { 
  LoadShopDataContainer, 
  SectionTitle,
  ButtonContainer
} from  './load-shop-data.styles';

class LoadShopData extends React.Component {
	state = {
		shopdata: SHOP_DATA 
  }
  
  handleLoadShopData = () => {
    const loadData = false;   /* change to true for loading data */
    if (loadData) {
      const { shopdata } = this.state;
      const collectionsMap = Object.keys(shopdata).map(key => shopdata[key])
      addCollectionAndDocuments('collections', collectionsMap);
    } else {
      alert('Error loading data. Contact system administrator for help.');
    }
  };

  render() {
    return(
      <LoadShopDataContainer>
        <SectionTitle>Load shop data into Firebase:</SectionTitle>
        <ButtonContainer>
          <CustomButton onClick={this.handleLoadShopData}>Load SHop Data Now</CustomButton>
        </ButtonContainer>
      </LoadShopDataContainer>
    ) 
  }
};

export default LoadShopData;