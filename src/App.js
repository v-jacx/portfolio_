import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <section>
        <Hero/>
      </section>
    </div>
  );
}

export default App;
