import { useState } from "react";
import NavScrollExample from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect } from "react";
import { BASE_URL } from "./config/api";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

      {/* <NavScrollExample />
      <Home  posts={posts} /> */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* <h1>Halo Dunia</h1> */}
    </>
  );
}

export default App;
