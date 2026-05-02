import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaunrantMenu from "./components/RestaurantMenu.jsx";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaunrantMenu></RestaunrantMenu>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
