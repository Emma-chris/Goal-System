import { Outlet } from "react-router-dom";

import SliderScreen from "../static/SliderScreen";
const MainLayout = () => {
  return (
    <div>
      <div className="fixed w-[250px] bg-slate-50 border-r h-screen">
        <SliderScreen />
      </div>

      <div className="flex w-full justify-end">
        <div
          className={`w-[calc(100vw-300px)] m-4 rounded-md p-4 min-h-[96vh]`}
        >
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
