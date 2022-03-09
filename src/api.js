import axios from "axios"

const ncNewsApi = axios.create({
	baseURL: "http://ahmed-nc-news.herokuapp.com/api",
})

export function fetchArticles(topic) {
	return ncNewsApi
		.get("/articles", { params: { topic } })
		.then(({ data: { articles } }) => {
			return articles
		})
}

export function fetchUsers() {
	return ncNewsApi.get("/users").then(({ data: { users } }) => {
		return users
	})
}
