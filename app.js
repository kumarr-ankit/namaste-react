console.log(React);
//Remove comments
let content = `
        I am bold tag
        `;
const heading = React.createElement("h1", { id: "heading" }, content); // here object : help to passs attributes like id , classes etc
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement(
    "p",
    {
      id: "para",
    },
    ["Ankit Is Nice Boy", heading,heading]
  )
);

//render
root.render(heading);

root.render(parent);
console.log(heading);
