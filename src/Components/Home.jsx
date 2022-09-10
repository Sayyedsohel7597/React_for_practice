import React from "react";
// import Header from "./Header";  //dafault import
import Head from "./Header"; // ye bhi default import hi hai yaha nam change kar sakte aur usi nam se call bhi kar sakte
import { Navigation, Logo } from "./Navigation"; ///This is named import kyu k ise export bhi by named kareso hai
import { Counter } from "./Counter";
export const Home = () => {
  //This is named export matlab isko ab import bhi named import karna padega warna ye error dafault export batayega

  const tree1 = "aam";
  const tree2 = "jaam";
  const tree3 = "neem";
  const tree4 = "pipal";
  const tree5 = "jamun";
  const arr = [2, 43, 4, 554, 54];
  const copy = [...arr];
  const filtered = arr.shift();
  //   console.log({ filtered, arr });

  const obj = { name: "soheb", age: 23, address: "nanded" };
  const { name } = obj;
  const newObj = { ...obj, name: "sayyad" };
  console.log({ newObj });
  //   console.log({ name });
  //   console.log({ obj });

  return (
    <>
      <h1>This is Home{arr[0]}</h1>
      <Navigation />
      <Logo />
      {/* <Header /> */}
      <Head name={"sohel"} age={25} address={"badi"} />
      <Counter />
    </>
  );
};
