import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import PageNotFound from '../page-not-found/page-not-found.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }
  
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
  }); 

    // Using promise to get the data
    //collectionRef.get().then(snapshot => {
    //  const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //  updateCollections(collectionsMap);
    //  this.setState({ loading: false });
    //});
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    if (process.env.NODE_ENV === 'development') console.log(match);

    return(
      <div className='shop-page'>
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={props => (
              <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={props => (
              <CollectionPageWithSpinner isLoading={loading} {...props} />
            )}
          />
          <Route component={PageNotFound} /> 
        </Switch>
      </div>
    );
  };
} 


const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
