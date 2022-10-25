import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Outlet} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Music from './components/Music/Music'
import Donate from './components/Donate/Donate'
import About from './components/About/About'
import Gigs from './components/Gigs/Gigs'


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
				<Route path="/gigs" element={<Gigs/>} />
			</Routes>
			</div>
			<Outlet/>
		<Footer/>
		</main>
		</BrowserRouter>
	)
}

export default App
