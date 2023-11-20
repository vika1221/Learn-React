
import React from "react";
import ReactDOM from "react-dom/client";

const heading1=React.createElement(
    "h1",
    {
        id:"title1"
    },
    "Heading 1 using react"
);

// Heading1 using jsx
const heading1usingjsx =(
    <h1>
        Heading 1 using Jsx
    </h1>
);

const heading2=React.createElement(
    "h2",
    {
        id:"title2"
    },
    "Heading 2"
);

const heading3=React.createElement(
    "h3",
    {
        id:"title3"
    },
    "Heading 3"
);

const container=React.createElement(
    "div",
    {
        id:"container",
        className:"title"
    },
    [heading1usingjsx,heading1,heading2,heading3]
);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);


// Above whole code using jsx

const heading=(
    <div>
        <h1>Heading 1 using jsx</h1>
        <h2>Heading 2 using jsx</h2>
        <h3>Heading 3 using jsx</h3>
    </div>
);

const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading);

// using functional component

const HeadingComponent=()=>{
    return(
        <div>
            {heading}
            <h1>Heading 1 using functional component</h1>
            <h2>Heading 2 using functional component</h2>
            <h3>Heading 3 using functional component</h3>
        </div>
    );
};

const root2=ReactDOM.createRoot(document.getElementById("root"));
root2.render(<HeadingComponent />);