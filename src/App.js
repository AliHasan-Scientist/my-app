import "./App.css";
import Formtext from "./components/Formtext";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar title="Myapp" home="Home" />
      <div className="container	" mx-3>
        <Formtext heading="Enter Text Here for Formatting" />
      </div>
    </>
  );
}

export default App;
