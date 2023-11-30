import React from "react";

const Map = () => {
  return (
    <div style={{ width: "100%" ,marginTop:"1rem"}}>
      <iframe
        width="100%"
        height="600"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=istanbul/taksim+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
      </iframe>
    </div>
  );
};

export default Map;
