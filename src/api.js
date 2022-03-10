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

export function fetchArticleById(article_id) {
	return ncNewsApi
		.get(`/articles/${article_id}`)
		.then(({ data: { article } }) => {
			return article
		})
}
export function fetchUsers() {
	return ncNewsApi.get("/users").then(({ data: { users } }) => {
		return users
	})
}

export function fetchComments(article_id) {
	return ncNewsApi
		.get(`/articles/${article_id}/comments`)
		.then(({ data: { comments } }) => {
			return comments
		})
}

export function patchArticleVote(article_id, votes) {
	return ncNewsApi.patch(`/articles/${article_id}`, { inc_votes: votes }).then(
		({
			data: {
				article: { votes },
			},
		}) => {
			return votes
		}
	)
}

export function postNewComment(article_id, newComment) {
	return ncNewsApi
		.post(`/articles/${article_id}/comments`, newComment)
		.then(({ data: { comment } }) => {
			return comment
		})
}

export function deleteComment(comment_id) {
	return ncNewsApi.delete(`/comments/${comment_id}`).catch(err => {
		return err
	})
}
