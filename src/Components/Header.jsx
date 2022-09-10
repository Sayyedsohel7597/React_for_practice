import React, { useState } from "react";
const Header = ({ name, ...rest }) => {
  const [show, setShow] = useState(false);
  //   console.log("props", props);
  const handleClick = () => {
    console.log("Fucntion is Called:::;");
    setShow(!show);
  };
  return (
    <div>
      <button onClick={() => handleClick()}>Submit</button>
      {show && <h1> {name}</h1>}
    </div>
  );
};
export default Header; // export as default hai matlab ise jis bhi component me import karna hai waha as a default import hi karna padega
