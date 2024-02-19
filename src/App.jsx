import "./App.module.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div
      className=" flex  justify-center items-center min-h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="flex bg-[#E1ECEB] lg:my-5 lg:flex-row flex-col items-start lg:w-[95%] w-[98%] max-w-4xl lg:rounded-[17px]  lg:gap-5 justify-center  ">
        <Sidebar />
        {/* Main Content */}

        <div className="flex-grow py-5 lg:pr-4 lg:pl-0 pl-2 pr-2 lg:mt-0 mt-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
