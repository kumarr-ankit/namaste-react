console.log(React);

let content = `
        I am bold tag
        `;
const heading = React.createElement("h1", { id: "heading" }, content); // here object : help to passs attributes like id , classes etc
const root = ReactDOM.createRoot(document.getElementById("root"));

//render
root.render(heading);
console.log(heading);
