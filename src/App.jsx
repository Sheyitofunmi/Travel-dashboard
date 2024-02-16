import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div
      className=" flex justify-center items-center min-h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="flex bg-[#E1ECEB]  items-start w-[95%] max-w-4xl lg:rounded-[17px]  gap-5 justify-center  ">
        <Sidebar />
        {/* Main Content */}

        <div className="flex-grow py-5 pr-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
