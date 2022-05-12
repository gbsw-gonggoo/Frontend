import React, { Component }from 'react';
import { Route, Routes } from 'react-router-dom';
import {SignIn, ProductList, ProductOverview} from './pages';
import Navbar from './components/Navbar';



class App extends Component {
  render() {
      return (
        <div className="h-full">
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/" element={<ProductList />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/list" element={<ProductList />}/>
            <Route path="/product/:id" element={<ProductOverview />}/>
          </Routes>
        </div>
      );
  }
}

export default App;
