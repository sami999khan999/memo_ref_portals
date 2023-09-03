// Memo -

// Ref -

// Portals -

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

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

// // Portals

// // In React, "portals" provide a way to render a component's content in a different part of the DOM hierarchy than where the component itself is rendered. Portals are useful when you want to render content outside the normal parent-child relationship in the component tree. They are typically used for scenarios like modals, tooltips, and popovers. //

//============================================================================================================================================//

// // more details in ./component/Portals.js

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
