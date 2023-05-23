import './App.css';
import { Banner } from './stories/Banner/Banner';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ItemsGrid } from './stories/ItemsGrid/ItemsGrid';
import 'bootstrap/dist/css/bootstrap.css';
import { Register } from './stories/Register/Register';
import { Login } from './stories/Login/Login';
import { useEffect, useState } from 'react';
import {signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './config/firebase';
import { Cart } from './stories/Cart/Cart';
import { BookDescription } from './stories/BookDescription/BookDescription';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Account } from './stories/Account/Account';

function App() {

  const [user, setUser] = useState(null);

  const [books, setBooks] = useState([]);

  const booksCollectionRef = collection(db, 'books');

  const usersCollectionRef = collection(db, 'users');

  const getBooks = async () => {
    try {
      const data = await getDocs(booksCollectionRef);
      const formattedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setBooks(formattedData);
    } catch(error) {
      console.error(error);
    }
  };

  const [selectedBook, setSelectedBook] = useState(null);

  const checkForUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) setUser(null);
      if (user) setUser(user);
    });
  }

  useEffect(() => {
    checkForUser();
  }, []);

  useEffect(() => {
    getBooks();
  }, []);

  const [cart, setCart] = useState([]);

  const onAddToCart = (book) => {
    if(cart.some(i => i.id === book.id))
      return;
    setCart([
      ...cart,
      book
    ]
    );
  };

  const onAddBook = async (book) => {
    try {
      const {res} = await addDoc(booksCollectionRef, {...book});
      alert("Se ha agregado el libro");
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteBook = async (books) => {
    for(var i = 0; i < books.length; i ++)
      await deleteDoc(doc(db, 'books', books[i]));
  };

  const onRegister = async (user) => {
    try {
      const { res } = await createUserWithEmailAndPassword(auth, user.email, user.password);
      if(res) await addDoc(usersCollectionRef, {userId: res.uid, name: user.name, type: false});
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogin = (user) => {
    try {
      const { res } = signInWithEmailAndPassword(auth, user.email, user.password);
      if(res) {
        setUser({
          id: res.uid,
          email: res.email
        });
      }
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
      return i.id !== id;
    }));
  };

  const calcCartTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseInt(item.price);
    })
    return total;
  }

  const onBuyCart = () => {
    if(!user) {
      alert('Debe estar loggeado para poder comprar el carrito');
    } else {
      alert("Se ha comprado el carrito :)");
      setCart([]); 
    }
  };

  const onSelectedBook = (book) => {
    setSelectedBook(book);
  }

  return (
    <div className="App">
      <Router>
        <Banner user={user} onLogOut={onLogOut} cartLength={cart.length}/>
        <Routes>
          <Route path='/' element={ <ItemsGrid books={books} onAddToCart={onAddToCart} onSelectedBook={onSelectedBook}/> } />
          <Route path='/register' element={ user? < Navigate to='/' /> : <Register onRegister={onRegister}/> } />
          <Route path='/login' element={ user? < Navigate to='/' /> : <Login onLogin={onLogin}/> } />
          <Route path='/cart' element={ <Cart items={cart} total={calcCartTotal()} onRemoveFromCart={onRemoveFromCart} onBuyCart={onBuyCart}/> } />
          <Route path='/book/:id' element= { <BookDescription book={selectedBook} /> } />
          <Route path='/account' element={ user? <Account username={user.email} onRegisterBook={onAddBook} onDeleteBooks={onDeleteBook} books={books}/> : <Navigate to='/' /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
