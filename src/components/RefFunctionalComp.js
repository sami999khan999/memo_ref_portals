import React from "react";

const RefFunctionalComp = ({ pirate }) => {
  const nameRef = React.createRef();

  function changeName() {
    nameRef.current.textContent = pirate;
    nameRef.current.style.color = "green";
  }

  return (
    <div>
      <h1 ref={nameRef}>Lulli</h1>
      <button onClick={() => changeName()}>Change Name</button>
    </div>
  );
};

export default RefFunctionalComp;
