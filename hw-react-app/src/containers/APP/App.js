import "./App.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="small-container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
