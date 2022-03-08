import { useParams } from "react-router-dom"
import TopicBanner from "./TopicBanner"

import ArticlesList from "./ArticlesList"

export default function ArticlesByTopic() {
	const { topic } = useParams()
	return (
		<main>
			<TopicBanner topic={topic} />
			<ArticlesList />
		</main>
	)
}
