import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { AppRouter } from "./routers/AppRouter";

function App() {
  return (
    <>
      <Navbar/>
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
