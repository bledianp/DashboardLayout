import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import final from "./assets/screen.svg";
import Table from "./components/Table";
import SubNavBar from "./components/SubNavBar";
import MainBar from "./components/MainBar";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <Sidebar />

        <MainBar />
      </div>
    </div>
  );
}

export default App;
