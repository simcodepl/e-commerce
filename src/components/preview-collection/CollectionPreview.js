import React from "react";

import "./CollectionPreview.scss";

import CollectionItem from "../collection-item/CollectionItem";

const CollectonPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            //return <div key={item.id}>{item.name}</div>;
            return <CollectionItem key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default CollectonPreview;
