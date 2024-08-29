import React from "react";

const ListPicker = ({ values }) => {
  return (
    <div>
      <p>The List of values: {values.map((value) => value + ",")}</p>
    </div>
  );
};

export default ListPicker;
