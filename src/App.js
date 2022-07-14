import React, { Component }from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignIn, SignUp, FindPw, FindId, ProductList, ProductOverview, Mypage, Post } from './pages';
import Navbar from './components/Navbar';



class App extends Component {
  render() {
      return (
        <div className="h-screen overflow-hidden w-full flex flex-col">
          <Navbar />
          <div className="h-full overflow-hidden w-full">
          <Routes>
            <Route exact path="/" element={<ProductList />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/login" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/findpw" element={<FindPw />}/>
            <Route path="/findid" element={<FindId />}/>
            <Route path="/post" element={<Post />}/>
            <Route path="/list" element={<ProductList />}/>
            <Route path="/mypage" element={<Mypage />}/>
            <Route path="/product/:id" element={<ProductOverview />}/>
          </Routes>
          </div>
        </div>
      );
  }
}

export default App;
