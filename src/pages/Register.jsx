import logo from "../assets/auto-compare.png";

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="mt-8 text-[#24274C]">Welcome to join our website</div>
      <div className="grid grid-cols-2 h-[calc(100vh-20rem)] mt-16">
        <img src={logo} alt="logo" className="rounded-full" />
        <div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
              placeholder="firstname"
            />
            <input
              type="text"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
              placeholder="lastname"
            />
            <input
              type="text"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
              placeholder="email"
            />
            <input
              type="text"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] p-2"
              placeholder="mobile"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] block p-2"
              placeholder="password"
            />
            <input
              type="text"
              className="outline outline-slate-300 rounded bg-[#F1EFDF] block p-2"
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
  );
}
