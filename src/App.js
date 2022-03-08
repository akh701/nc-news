import { Route, Routes } from "react-router-dom"
import "./App.css"

import Home from "./components/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ArticlesByTopic from "./components/ArticlesByTopic"
import ArticlePage from "./components/ArticlePage"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/articles/topic/:topic' element={<ArticlesByTopic />} />
				<Route path='/articles/:article_id' element={<ArticlePage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
