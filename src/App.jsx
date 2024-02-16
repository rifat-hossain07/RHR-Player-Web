import { Outlet } from "react-router-dom";
import Navbars from "./Component/Navbar";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="text-center">
          <a
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover me-5"
            href="#"
          >
            Underline opacity 0
          </a>
          <a
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="#"
          >
            Underline opacity 0
          </a>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
