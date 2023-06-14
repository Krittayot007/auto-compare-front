export default function Dropdown({
  name,
  value1,
  value2,
  value3,
  value4,
  valueName1,
  valueName2,
  valueName3,
  valueName4,
  onChange,
  input,
  renderName,
}) {
  return (
    <div className="dropdown dropdown-bottom">
      <label tabIndex={0} className="btn m-1">
        {input[name] ?? renderName}
      </label>
      <ul
        name={name}
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {/* {brand.map((list)=>{

          <li>
            <a value={list.name}>{list.name}</a>
          </li>
        })} */}
        <li>
          <button value={value1} onClick={onChange} name={name} type="button">
            {valueName1}
          </button>
        </li>
        <li>
          <button value={value2} onClick={onChange} name={name} type="button">
            {valueName2}
          </button>
        </li>
        <li>
          <button value={value3} onClick={onChange} name={name} type="button">
            {valueName3}
          </button>
        </li>
        <li>
          <button value={value4} onClick={onChange} name={name} type="button">
            {valueName4}
          </button>
        </li>
      </ul>
    </div>
  );
}
