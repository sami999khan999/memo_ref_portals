import React from "react";
import RefFunctionalComp from "./components/RefFunctionalComp";
// import RefClassComp from "./components/RefClassComp";
// import ParentComp from "./components/ParentComp";

const App = () => {
  return (
    <div>
      {/* <ParentComp /> */}
      {/* <RefClassComp /> */}
      <RefFunctionalComp pirate="Zoro" />
    </div>
  );
};

export default App;
