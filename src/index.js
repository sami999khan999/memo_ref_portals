// // Memo

// // React.memo is a higher-order component (HOC) in React that is used for optimizing functional components by preventing unnecessary re-renders. It's a way to implement memoization for React components. //

//============================================================================================================================================//

// // more details in ./component/memoComp.js

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Ref

// // In React, a ref is a special attribute that can be attached to React elements to get a reference to a DOM (Document Object Model) node or to a React component instance created in the render method. Refs are primarily used to interact with the DOM or to access methods and properties of a React component directly. //

//============================================================================================================================================//

// // more detaild in ./components/RefComp.js

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
