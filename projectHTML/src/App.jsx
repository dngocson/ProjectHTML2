import "./App.scss";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Employee from "./components/Employee";
import Pricing from "./components/Pricing";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <Employee />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
