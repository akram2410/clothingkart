import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionOverView from "../../components/collections-overview/collection-overview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionOverView />
  </div>
);

export default ShopPage;
