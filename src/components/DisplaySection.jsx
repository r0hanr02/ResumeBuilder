/* eslint-disable react/prop-types */
// import React from "react";

function DisplaySection({ array, InfoComponent, title }) {
  return (
    <>
      {
        // Show resume header if at least one item in array is not hidden.
        !array.every((obj) => obj.isHidden) && (
          <h3 className="header-text">{title}</h3>
        )
      }

      {array.map(
        (info) => !info.isHidden && <InfoComponent info={info} key={info.id} />
      )}
    </>
  );
}

export default DisplaySection;
