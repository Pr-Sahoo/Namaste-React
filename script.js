// let heading = React.createElement("h1", {id: "heading",style: {color: "greenyellow"}}, "homelander is great");
// let root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
// root.render(heading);
// // heading.style.backgroundColor = "blue";
// console.log(heading);

// let para = React.createElement("h1", {}, "this is a para");
// let prtdiv = React.createElement("div", {id: "prt"}, para);
// // root.render(prtdiv);
// let container = React.createElement("div", {style: {height: "300px", width: "300px", background: "aqua", color: "black"}}, prtdiv, heading);
// root.render(container);

//nested react element 
// let parent = React.createElement("div", { class: "prt" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "i am a nested para"), React.createElement("h2", {}, "i am the sibling1"), React.createElement("h3", {}, "i am the sibling3")]));
// let root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent);
// root.render(parent);

let parent = React.createElement("div", { class: "parent" },
    [React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "i am a nested heading"), React.createElement("h2", {}, "this is a nested heading2"), React.createElement("h3", {}, "this is a nested h3")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "i am a nested h1 in prt2"), React.createElement("h2", {}, "this is a h2 in child2"), React.createElement("h3", {}, "this is a h3 in child2")])]
);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);