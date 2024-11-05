import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen w-full justify-center items-center flex flex-col">
      <div className="h-[calc(100vh-200px)] flex justify-center items-center">
        <Outlet />

        <div className="flex-1" />
        <div className="flex mt-[500px]">Built with ❤️❤️</div>
      </div>
    </div>
  );
};

export default AuthLayout;
