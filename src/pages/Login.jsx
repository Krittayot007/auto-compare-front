import { useState } from "react";
import logo from "../assets/auto-compare.png";
import { useAuth } from "../hooks/useAuth";
import { login, getMe } from "../api/auth-api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChangeInout = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await login(input);
      localStorage.setItem("accessToken", loginResponse.data.accessToken);

      const meResponse = await getMe(loginResponse.data.accessToken);
      setUser(meResponse.data.user);
      navigate("/");
    } catch (err) {
      alert(err.response.data.error);
    }
  };
  // console.log(user);
  return (
    <div className="flex flex-col justify-center items-center gap-8 ">
      <div className="mt-8 text-[#24274C]">Welcome please Login</div>

      <div>
        <div className="grid grid-cols-2 h-[calc(100vh-20rem)] mt-16">
          <div>
            <img
              src={logo}
              alt="logo"
              className="rounded-full flex justify-center"
            />
          </div>
          <form
            className="flex flex-col w-72 gap-4 text-[#24274C]"
            onSubmit={handleSubmit}
          >
            <span>email </span>
            <input
              type="text"
              name="email"
              className="outline outline-slate-200 rounded p-2 fill-[#24274c] bg-[#F1EFDF]"
              placeholder="Insert your email here "
              onChange={handleChangeInout}
            />
            <span>password </span>
            <input
              type="password"
              name="password"
              className="outline outline-slate-200 rounded p-2 bg-[#F1EFDF]"
              placeholder="Insert your password"
              onChange={handleChangeInout}
            />
            <div className="flex gap-4 mt-6">
              <a
                class="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                href="register"
              >
                Register
              </a>
              <a
                class="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                href="/"
              >
                Cancel
              </a>
              <button
                class="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
