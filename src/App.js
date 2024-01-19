import './App.css';
import NewArrival from './Components/New Arrival/NewArrival';
import ProductLists from './Components/Product list/ProductLists';

import Menubar from './Components/ReuseComponents/Menubar'
import Slider from './Components/ReuseComponents/Slider';
// import Footer from './Components/ReuseComponents/Footer'
function App() {
  return (
    <div className="App">
      <Menubar />
      {/* <Footer /> */}
      <Slider />
      <NewArrival />
      <ProductLists />
    </div>
  );
}

export default App;
