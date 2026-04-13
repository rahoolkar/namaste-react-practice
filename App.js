import ReactDOM from "react-dom/client";

//getting started with react components

//functional components is a js function that returns a piece of jsx/react element

function Heading() {
  return <h1>Hello Heading in JSX</h1>;
}

function Comp() {
  return (
    <div>
      {/* this is component recomposition  */}
      <Heading></Heading>
      <p>This is a para in comp component</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Comp></Comp>);
