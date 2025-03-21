import React from 'react';
import './App.css';
import {Route, Routes, Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

function App() {
  return (
    <div className="d-flex h-100 overflow-auto">
			<div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
				<Header />

				<Routes>
					<Route path="/" element={<Outlet />}>
						<Route index element={<Home/>} />
						<Route path="/home" element={<Home />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/education" element={<Education />} />
					</Route>
				</Routes>

				<Footer />
	    	</div>
		</div>
  );
}

export default App;
