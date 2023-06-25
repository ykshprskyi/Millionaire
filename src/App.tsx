import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Game } from "./pages/Game/Game";
import { Result } from "./pages/Result/Result";
import "./styles/main.scss";
import { useDispatch } from "react-redux";
import { setScore } from "./actions/actions";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/Millionaire",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();
  dispatch(setScore());
  return <RouterProvider router={router} />;
}

export default App;
