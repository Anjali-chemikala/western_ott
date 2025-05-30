import React from 'react';
import './App.scss';
import {  Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Otp from './pages/Otp';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
import TrailMapNavigation from './pages/Replaceepisode';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import PlanSelection from './pages/Subscription';
import PaymentMethod from './pages/Payment';
import ProfileMenu from './pages/Profile';
import ShowdownPath from './pages/EpisodeTimeline';
import Ranking from './pages/Ranking';
import Video from './pages/Video';
import Footer from './pages/Footer';
import Downloads from './pages/Downloads';
import History from './pages/History';
import Savelater from './pages/Savelater';
import Viewall from './pages/Viewall';
import AccountSettings from './pages/Accountsettings';
import Westernmovies from './pages/Westernmovies';
import Activeplan from './pages/Activeplan';
import CategoriesPage from './pages/Category';
import CategoryDetails from "./pages/CategoryDetails";
const App = () => {
  return (
    <div>
       <Routes>
       <Route path="/" element={< Signup/>} />
       <Route path="/signin" element={< Signin/>} />
       <Route path="/otp" element={< Otp/>} />
       <Route path='/forgot' element={< Forgotpassword/>} />
       <Route path='/reset' element={< Resetpassword/>} />
       <Route path='/replace' element={< TrailMapNavigation/>} />
       <Route path='/navbar' element={< Navbar/>} />
       <Route path='/home' element={< Home/>} />
       <Route path='/subscription' element={< PlanSelection/>} />
       <Route path='/payment' element={< PaymentMethod/>} />
       <Route path='/profile' element={< ProfileMenu/>} />
       <Route path='/episodetimeline' element={< ShowdownPath/>} />
       <Route path='/ranking' element={< Ranking/>} />
       <Route path='/video' element={< Video/>} />
       <Route path='/footer' element={< Footer/>} />
       <Route path='/downloads' element={< Downloads/>} />
       <Route path='/history' element={< History/>} />
       <Route path='/savelater' element={< Savelater/>} />
       <Route path='/viewall' element={< Viewall/>} />
        <Route path='/westernmovies' element={< Westernmovies/>} />
        <Route path='/accountsettings' element={< AccountSettings/>} />
        <Route path='/activeplan' element={< Activeplan/>} />
        <Route path='/category' element={<CategoriesPage/>} />
        <Route path="/category/:categoryName" element={<CategoryDetails/>} />





       </Routes>
    </div>
  )
}


export default App;
