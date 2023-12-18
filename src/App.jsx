import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./Home";
import SignUp from "./components/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="/signup" element={<SignUp />}/>
    </Route>
  )
)

const App = () => {
  return (
   <RouterProvider router={router}/>
  );
};

export default App;
