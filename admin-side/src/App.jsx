import { useState } from "react";
import NavbarGood from "./components/Navbar";
import { useEffect } from "react";
import Home from "./pages/Home";
import { BASE_URL } from "./config/api";
import useFetch from "./hooks/useFetch";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  return (
    <>
      {/* <NavbarGood /> */}

      {/* <Home posts={data} loading={loading}/> */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
