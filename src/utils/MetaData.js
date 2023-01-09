import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title, link_title, description, thumbnail, website }) => {
  return (
    <Helmet>
      <title>{`${title} - Travellers Choice Travel and Tourism LLC`} </title>
      <meta property={`og:title`} content={`${link_title} - Travellers Choice`} />
      <meta property={`og:description`} content={description} />
      <meta property={`og:image:secure_url`} itemprop="image" content={process.env.REACT_APP_SERVER_URL + thumbnail} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default MetaData;
