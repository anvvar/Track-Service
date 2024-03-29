import Home from "./Home";
import Nav from "./Nav";
import CreateService from "./components/CreateServiceRecord"
import { Routes ,Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
        <Nav/>
      
        <div className="main">
        <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/create' element={<CreateService/>} exact/>
       </Routes>
       </div>
     
    </div>
  );
}

export default App;
