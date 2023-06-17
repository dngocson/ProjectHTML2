import "./App.scss";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
      </main>
    </div>
  );
}

export default App;
