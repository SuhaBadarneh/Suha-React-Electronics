import Landing from "./Homepage";
import Header from "./header";
import Categories from "./Categories";
import Phones from "./Phones";
import Footer from "./Footer";
import PhoneDetails from "./PhoneDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact Component={Landing} />
        <Route path="/Products" exact Component={Categories} />
        <Route path="/Phones" exact Component={Phones} />
        <Route path="/PhoneDetails/:id" exact Component={PhoneDetails} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
