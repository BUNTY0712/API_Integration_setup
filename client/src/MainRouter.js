import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';

const MainRouter = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/blog' element={<Blogs />} />
			</Routes>
		</Router>
	);
};

export default MainRouter;
