import React from 'react';

function App() {
  // return (
  //   <div>Welcome Brolly</div>
  // )

  return (
    // React.createElement(
    //   "h3",
    //   null,
    //   "Welcome React"
    // )
    // React.createElement(
    //   "h3",
    //   {
    //     id: 'h3Id'
    //   },
    //   "Welcome React"
    // )

    React.createElement(
      "p",
      {
        name: "pName",
      },
      React.createElement(
        "span",
        null,
        React.createElement(
          "b",
          {
            id: "bId"
          },
          "HTML"
        )
      )
    )

    // <p name="pName"> 
    //    <span> 
    //        <b id="bId">
    //            HTML
    //        </b> 
    //    </span> 
    // </p>

    // <h3>Welcome React</h3>
  )
}

export default App

/*
  React.createElement(
  element,
  attributes as object,
  child element  
  )
*/