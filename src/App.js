import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
