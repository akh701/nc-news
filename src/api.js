import axios from "axios"

const ncNewsApi = axios.create({
	baseURL: "http://ahmed-nc-news.herokuapp.com/api",
})

export function fetchArticles() {
	return ncNewsApi.get("/articles").then(({ data: { articles } }) => {
		return articles
	})
}
