import { useState } from "react";
import { register } from "../api/auth-api";
import logo from "../assets/auto-compare.png";

export default function Register() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    const { firstName, lastName, email, mobile, password, confirmPassword } =
      input;
    try {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert("Password not match");
      }

      await register({
        firstName,
        lastName,
        email,
        mobile,
        password,
        confirmPassword,
      });
      alert("Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="mt-8 text-[#24274C]">Welcome to join our website</div>
      <div className="grid grid-cols-2 h-[calc(100vh-20rem)] mt-16">
        <img src={logo} alt="logo" className="rounded-full" />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
              onChange={handleChangeInput}
              placeholder="firstname"
            />
            <input
              type="text"
              name="lastName"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
              onChange={handleChangeInput}
              placeholder="lastname"
            />
            <input
              type="text"
              name="email"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
              onChange={handleChangeInput}
              placeholder="email"
            />
            <input
              type="text"
              name="mobile"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
              onChange={handleChangeInput}
              placeholder="mobile"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="password"
              name="password"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] block p-2"
              onChange={handleChangeInput}
              placeholder="password"
            />
            <input
              type="password"
              name="confirmPassword"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] block p-2"
              onChange={handleChangeInput}
              placeholder="confirmpassword"
            />
          </div>
          <div className="flex gap-2 mt-4">
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
  );
}
