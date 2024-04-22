import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar li1="Torte" li2="Crostate" li3="Pasticcini" className="Navbar" />
      <ButtonComponent txt="Sono un bottone!" />
      <ImageComponent
        src="https://images.unsplash.com/photo-1602630209855-dceac223adfe?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="torta gnam gnam"
        className="ImgTorta"
      />
    </div>
  );
}

export default App;
