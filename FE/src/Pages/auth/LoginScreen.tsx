import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/globalProvider";
import { FaSpinner } from "react-icons/fa";
import { loginAccount } from "../../Api/userAPI";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { setUser }: any = useContext(GlobalContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleSumbit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await loginAccount({ email, password })
      .then((res) => {
        if (res.status === 200) {
          setUser(localStorage.setItem("auth", JSON.stringify(res.data)));
          navigate("/dashboard");
        } else {
          alert("Error login account");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="w-[500px] border rounded-md bg-white text-neutral-900 min-h-[300px] p-4">
        <p className="text-[50px] font-semibold">Login User</p>
        <form onSubmit={handleSumbit}>
          <div className="flex flex-col mb-2 ">
            <label className="text-[20px] font-light">Email</label>
            <input
              type="email"
              className="border-2 border-gray-300 py-3 px-2 rounded-md outline-none"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2 ">
            <label className="text-[20px] font-light">Password</label>
            <input
              type="email"
              className="border-2 border-gray-300 py-3 px-2 rounded-md outline-none"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-neutral-900 text-white py-4 px-4 rounded-md hover:bg-neutral-950 transition-all duration-500 mt-5"
            type="submit"
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <FaSpinner className="animate-spin" /> Loading...
              </div>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-center mt-4">
            Don't have an account?
            <Link to="/auth">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
