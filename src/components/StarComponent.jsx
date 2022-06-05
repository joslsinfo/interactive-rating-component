import React from "react";

const StarComponent = ({ src, alt, loading = "lazy" }) => {
  return <img className="image" src={src} alt={alt} loading={loading} />;
};

export default StarComponent;
