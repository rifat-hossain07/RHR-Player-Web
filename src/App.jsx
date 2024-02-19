import { Outlet } from "react-router-dom";
import Navbars from "./Component/Navbar";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
