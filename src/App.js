import logo from './logo.svg';
import './App.css';
import { Banner } from './stories/Banner/Banner';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ItemsGrid } from './stories/ItemsGrid/ItemsGrid';
import 'bootstrap/dist/css/bootstrap.css';

const books = [{
  id: "623de5394aebb40517f35742",
  image: "https://images-na.ssl-images-amazon.com/images/I/51hb7s69wrL._SX355_BO1,204,203,200_.jpg",
  price: 20,
  title: "The Things You Can See Only When You Slow Down"
},
{
  id: "623de539a25cd86a11df7197",
  image: "https://images-eu.ssl-images-amazon.com/images/I/41yu2qXhXXL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
  price: 13,
  title: "Sapiens: A Brief History of Humankind"
},
{
  id: "623ab1335faf472s967fbwb2",
  image: "https://images-na.ssl-images-amazon.com/images/I/41RfHWoMEQS._SX308_BO1,204,203,200_.jpg",
  price: 20,
  title: "Beautiful World, Where Are You"
}
]

function App() {
  return (
    <div className="App">
      <Router>
        <Banner/>
        <Routes>
          <Route path='/' element={<ItemsGrid books={books}/>} />
          <Route path='/register' element={<App/>} />
          <Route path='/login' element={<App/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
