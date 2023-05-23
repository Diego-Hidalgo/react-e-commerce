import './App.css';
import { Banner } from './stories/Banner/Banner';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ItemsGrid } from './stories/ItemsGrid/ItemsGrid';
import 'bootstrap/dist/css/bootstrap.css';
import { Register } from './stories/Register/Register';
import { Login } from './stories/Login/Login';
import { useEffect, useState } from 'react';
import {signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './config/firebase';
import { Cart } from './stories/Cart/Cart';

const booko = [{
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

  const [user, setUser] = useState(null);

  const checkForUser = () => {
    onAuthStateChanged(auth, (user) => {
      
      if (!user) setUser(null);
      if (user) setUser(user);
    });
  }

  useEffect(() => {
    checkForUser();
  }, []);

  const [cart, setCart] = useState([]);

  const [books, setBooks] = useState([]);

  const onAddToCart = (book) => {
    if(cart.some(i => i.id === book.id))
      return;
    setCart([
      ...cart,
      book
    ]
    );
  };

  const onAddBook = (book) => {
    setBooks([
      ...books,
      book
    ]);
  };

  const onRegister = (user) => {
    try {
      const { res } = createUserWithEmailAndPassword(auth, user.email, user.password);
      onLogin(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogin = (user) => {
    try {
      const { res } = signInWithEmailAndPassword(auth, user.email, user.password);
      setUser(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onRemoveFromCart = (id) => {
    setCart(cart.filter(i => {
      return i.id != id;
    }));
  };

  const onBuyCart = () => {
    if(!user) {
      alert('Debe estar loggeado para poder comprar el carrito');
    } else {
      alert("Se ha comprado el carrito :)");
      setCart([]); 
    }
  };

  return (
    <div className="App">
      <Router>
        <Banner user={user} onLogOut={onLogOut} cartLength={cart.length}/>
        <Routes>
          <Route path='/' element={ <ItemsGrid books={booko} onAddToCart={onAddToCart}/> } />
          <Route path='/register' element={ user? < Navigate to='/' /> : <Register onRegister={onRegister}/> } />
          <Route path='/login' element={ user? < Navigate to='/' /> : <Login onLogin={onLogin}/> } />
          <Route path='/cart' element={ <Cart items={cart} onRemoveFromCart={onRemoveFromCart} onBuyCart={onBuyCart}/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
