import "./App.css";
import { Home as Ghar } from "./Components/Home"; //This is named import kyu k ise export bhi by named kareso hai
// yaha par home as Ghar matlan srk as raees in raees movie like

function App() {
  return (
    <div className="App">
      <>
        <h1> This is App.js </h1>
        {/* <Home /> */}
        <Ghar />
        {/*     <------------ye as function ko call kare jaisa hai  aur yahapar Home as Ghar ko bhi call kar sakte*/}
      </>
    </div>
  );
}

export default App;
