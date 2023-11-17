//  by javascript

// const heading=document.createElement("h1");
// heading.innerHTML="Hello Everyone from Javascript";
// const root=document.getElementById("root");
// root.appendChild(heading);

// by react js

// const heading= React.createElement("h1",{},"Hello Everyone from React js");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// More elements added

const heading1=React.createElement(
    "h1",
    {
        id:"title1"
    },
    "Heading 1"
);

const heading2=React.createElement(
    "h2",
    {
        id:"title2"
    },
    "Heading 2"
);

const container=React.createElement(
    "div",
    {
        id:"container"
    },
    [heading1,heading2]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);