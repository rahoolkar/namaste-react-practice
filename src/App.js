import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./components/Error.jsx";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaunrantMenu from "./components/RestaurantMenu.jsx";
import useConnect from "./utils/hooks/useConnect.js";
import Search from "./components/Search.jsx";
import UserContext from "./utils/hooks/UserContext.js";

function App() {
  const networkStatus = useConnect();

  if (networkStatus === false) {
    return <h1>Oops! You are offline</h1>;
  }

  return (
    <div className="app">
      <UserContext.Provider value={{ loginuser: "rahulkar" }}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </UserContext.Provider>
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
