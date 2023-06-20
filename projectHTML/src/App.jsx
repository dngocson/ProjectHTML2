import "./App.scss";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Employee from "./components/Employee";
import Pricing from "./components/Pricing";
import Comment from "./components/Comment";
import Blog from "./components/Blog";

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
        <Comment />
        <Blog />
      </main>
    </div>
  );
}

export default App;
