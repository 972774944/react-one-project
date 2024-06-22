import "./App.css";
import {
  Five,
  Footer,
  Four,
  One,
  Seven,
  Six,
  Three,
  Two,
} from "./compilator/one";

function App() {
  return (
    <div className="App">
      <header className="flex justify-between p-4 px-10">
        <div className="flex gap-3">
          <h6>SHOP</h6>
          <h6>Explore</h6>
        </div>
        <div>GROVEMADE</div>
        <div>MY CART</div>
      </header>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      <Footer />
    </div>
  );
}

export default App;
