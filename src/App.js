import './App.css'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { Outlet, Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import Navbar from './components/Navbar/Navbar'
// eslint-disable-next-line no-unused-vars
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Music from './components/Music/Music'
import Donate from './components/Donate/Donate'
import About from './components/About/About'



function App() {
	return (
		<BrowserRouter>
		<main>
			<div className='navAnimation'>
    		<Navbar/>
			</div>
			<div className='image'>
			<Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<Header />} />
				<Route path="/about" element={<About/>} />
				<Route path="/music" element={<Music/>} />
				<Route path="/donate" element={<Donate/>} />
			</Routes>
			</div>
			<Outlet/>
		<Footer/>
		</main>
		</BrowserRouter>
	)
}

export default App
