import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Error from "./components/Error.jsx";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaunrantMenu from "./components/RestaurantMenu.jsx";
import Help from "./components/Help.jsx";
import useConnect from "./utils/hooks/useConnect.js";
import ShimmerContainer from "./components/ShimmerContainer.jsx";

const Offers = lazy(function () {
  return import("./components/Offers.jsx"); //import function returns a promise and the callback function also returns a promise.
});

const SignIn = lazy(function () {
  return import("./components/SignIn.jsx"); //lazy loading means the this part of code will only be loaded when it is needed and initially it wont be there
});

function App() {
  const networkStatus = useConnect();

  if (networkStatus === false) {
    return <h1>Oops! You are offline</h1>;
  }

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
      {
        path: "/help",
        element: <Help></Help>,
      },
    ],
    errorElement: <Error></Error>,
  },
  {
    path: "/offers",
    element: (
      <Suspense fallback={<ShimmerContainer></ShimmerContainer>}>
        <Offers></Offers>
      </Suspense>
    ),
    errorElement: <Error></Error>,
  },
  {
    path: "/signin",
    element: (
      <Suspense fallback={<ShimmerContainer></ShimmerContainer>}>
        <SignIn></SignIn>
      </Suspense>
    ),
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
