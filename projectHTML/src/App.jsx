import "./App.scss";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Employee from "./components/Employee";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <Employee />
      </main>
    </div>
  );
}

export default App;
