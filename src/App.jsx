import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ShoppingBag from "./components/ShoppingBag";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/shopping-bag" element={<ShoppingBag />} />
    </Route>
  )
)

const App = () => {
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
