import React from "react"
import logo from "../logo.png"
import { Link, useSearchParams } from "react-router-dom"
import RegisteredUsers from "./RegisteredUsers"

export default function Header({ loggedInUser }) {
	const [setSearchParams] = useSearchParams({})
	const handleSortBy = e => {
		setSearchParams({
			sort_by: e.target.value.split(",")[0],
			order: e.target.value.split(",")[1],
		})
	}

	return (
		<>
			<header className='full-screen-header'>
				<nav className='nav nav-top'>
					<Link to='/'>
						<img className='logo' src={logo} alt='nc-news-logo' />
					</Link>

					<ul className='nav-list'>
						<li>
							{loggedInUser.username ? `Hello ${loggedInUser.username}` : ""}
						</li>
						<li>
							<RegisteredUsers />
						</li>
					</ul>
				</nav>
				<div className='sub-nav'>
					<ul className='header-topics'>
						<li>
							<Link to='articles/topic/football'>Football</Link>
						</li>
						<li>
							<Link to='articles/topic/coding'>Coding</Link>
						</li>
						<li>
							<Link to='articles/topic/cooking'>Cooking</Link>
						</li>
					</ul>

					<select onChange={handleSortBy} name='sort_by'>
						<option value={["created_at", "asc"]}>Earliest by Date</option>
						<option value={["created_at", "desc"]}>Latest by Date</option>
						<option value={["votes", "desc"]}>highest Votes</option>
						<option value={["votes", "asc"]}>lowest Votes</option>
					</select>
				</div>
			</header>
		</>
	)
}
