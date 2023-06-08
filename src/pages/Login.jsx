import logo from "../assets/auto-compare.png";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center gap-8 mb-20">
      <div className="mt-8">Welcome please Login</div>

      <div>
        <div className="flex gap-16">
          <img src={logo} alt="logo" className="rounded-full" />
          <div className="flex flex-col w-72 gap-4">
            <span>email </span>
            <input
              type="text"
              className="outline outline-slate-200 rounded p-2"
              placeholder="Insert your email here "
            />
            <span>password </span>
            <input
              type="password"
              className="outline outline-slate-200 rounded p-2"
              placeholder="Insert your password"
            />
            <div className="flex gap-4 mt-6">
              <button className="outline rounded p-1">Register</button>
              <button className="outline rounded p-1">Cancel</button>
              <button className="outline rounded p-1">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
