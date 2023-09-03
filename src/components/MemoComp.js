import React from "react";

const MemoComp = ({ firstName }) => {
  console.log("Memo");
  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
};

export default React.memo(MemoComp);
