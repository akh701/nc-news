import { Route, Routes } from "react-router-dom"
import "./App.css"
import { useState } from "react"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ArticlesByTopic from "./components/ArticlesByTopic"
import ArticlePage from "./components/ArticlePage"
import { UserContext } from "./contexts/UserContext"
import LoginPage from "./components/LoginPage"

function App() {
	const [loggedInUser, setLoggedInUser] = useState({})
	return (
		<UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
			<Header loggedInUser={loggedInUser} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/articles/topic/:topic' element={<ArticlesByTopic />} />
				<Route path='/articles/:article_id' element={<ArticlePage />} />
			</Routes>
			<Footer />
		</UserContext.Provider>
	)
}

export default App
