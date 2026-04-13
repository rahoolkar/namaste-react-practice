const heading = React.createElement("h1", {
    id: "heading",
    className: "head-text"
}, "Hello world from React");
//nested elements
const h1 = React.createElement("h1", {}, "I am a h1 tag");
const child = React.createElement("div", {
    id: "child"
}, h1);
// const parent = React.createElement("div",{id:"parent"},child);
//sibling elements
const sib1 = React.createElement("h1", {}, "Sibling-one");
const sib2 = React.createElement("h2", {}, "Sibling-two");
const parent = React.createElement("div", {
    id: "parent"
}, [
    sib1,
    sib2
]); //array of react elements for the siblings
//react.createElement method returns js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //render function takes the js object(react element) and converts it into html element and put it on the dom

//# sourceMappingURL=namaste-react.6bd02f5a.js.map
