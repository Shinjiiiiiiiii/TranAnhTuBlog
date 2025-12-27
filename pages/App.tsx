import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <Outlet />
      </main>
    </>
  );
}

export default App;
