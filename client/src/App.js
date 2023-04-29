import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Loader from "./components/Loader";
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Admin/Login'
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, setPortfolioData, ShowLoading, ReloadData } from "./redux/rootSlice";

function App() {
  const {loading, portfolioData, reloadData} = useSelector(state => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async() => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(setPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading())
    } catch(err) {
      dispatch(HideLoading());
    }
  }

  useEffect(() => {
    if (!portfolioData)
      getPortfolioData();
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);
  
  return (
    <BrowserRouter>
    {loading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
