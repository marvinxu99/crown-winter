import styled from 'styled-components';
//import winter1 from '../../assets/images/winter-winter.jpeg';

export const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const AdminPageWarning = styled.h2`
  color: red;
  margin: 20px 30px;
`;

export const WinterImageContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 60px;
  overflow: hidden;
  margin: 20px 30px;
`;

export const WinterImageSmall = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
    transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const LoadShopDataDiv = styled.div`
  margin-left: 30px 30px;
`;

