import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Steps from "./components/Steps"
import Destinations from "./components/Destinations"

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F2]">
      <Navbar />
      <Hero />
      <Features />
      <Steps />
      <Destinations />  
    </div>
  );
}

export default App;