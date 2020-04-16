import React, { Component } from "react";
import SHOP_DATA from "./Shop.data.js";
import CollectionPreview from "../../components/preview-collection/CollectionPreview";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop">
        {collections.map(({ id, title, items }) => {
          return <CollectionPreview key={id} title={title} items={items} />;
        })}
      </div>
    );
  }
}

export default Shop;
