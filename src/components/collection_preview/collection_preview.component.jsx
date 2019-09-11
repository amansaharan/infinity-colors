import React from 'react';

import CollectionItem from '../collection_item/collection_item.component';

import './collection_preview.styles.scss';

const CollectionPreview = props => (
  <div className="collection-preview">
    <h1 className="title">{props.title}</h1>
    <div className="preview">
      {props.items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
