import React from 'react';
import './App.css';
import {HashRouter, Route, Routes, Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

function App() {
  return (
    <div className="d-flex h-100 overflow-auto">
			<div className="d-flex w-100 h-100 mx-auto flex-column">
				<HashRouter basename="/portfolio">
					<Header />

					<Routes>
						<Route path="/" element={<Outlet />}>
							<Route index element={<Home/>} />
							<Route path="home" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route path="experience" element={<Experience />} />
							<Route path="education" element={<Education />} />
						</Route>
					</Routes>

					<Footer />
				</HashRouter>
	    	</div>
		</div>
  );
}

export default App;
