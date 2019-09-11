import React from 'react';
import CollectionPreview from '../../components/collection_preview/collection_preview.component';

import SHOP_DATA from './shop.data.js';

import './shop.styles.scss';

export default class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
