import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TopicBanner from "./TopicBanner"
import * as api from "../api"
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
