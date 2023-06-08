import logo from "../assets/auto-compare.png";

export default function Login() {
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
          <div className="flex flex-col w-72 gap-4 text-[#24274C]">
            <span>email </span>
            <input
              type="text"
              className="outline outline-slate-200 rounded p-2 fill-[#24274c] bg-[#F1EFDF]"
              placeholder="Insert your email here "
            />
            <span>password </span>
            <input
              type="password"
              className="outline outline-slate-200 rounded p-2 bg-[#F1EFDF]"
              placeholder="Insert your password"
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
              <a
                class="inline-block rounded border border-current px-4 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
