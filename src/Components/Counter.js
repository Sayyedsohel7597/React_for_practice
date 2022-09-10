import React, { useState } from "react";

export const Counter = () => {
  const [data, setData] = useState(0);
  //   if (data >= 10) {
  //     setData(0);
  //   }
  return (
    <div>
      <button
        style={{ background: data === 10 ? "red" : "green" }}
        onClick={() => setData(data + 1)}
      >
        {" "}
        Increamnet{" "}
      </button>{" "}
      <button
        style={{ background: data === 0 ? "black" : "green" }}
        // disabled={data === 0}
        onClick={() => setData(data - 1)}
      >
        {" "}
        Decrement{" "}
      </button>{" "}
      {data > 0 && <label>{data}</label>}
    </div>
  );
};
