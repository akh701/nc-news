import React from "react"
import logo from "../logo.png"
import { Link } from "react-router-dom"

export default function Header() {
	return (
		<>
			<header className='full-screen-header'>
				<nav className='nav nav-top'>
					<Link to='/'>
						<img className='logo' src={logo} alt='nc-news-logo' />
					</Link>

					<ul className='nav-list'>
						<li>
							<Link to='login'>Login</Link>
						</li>
						<li>
							<Link to='sign-up'>SignUp</Link>
						</li>
					</ul>
				</nav>
				<div className='sub-nav'>
					<ul className='header-topics'>
						<li>Football</li>
						<li>Coding</li>
						<li>Cooking</li>
					</ul>
				</div>
			</header>
		</>
	)
}
