import React from "react"

export default function TopicBanner({ topic }) {
	return (
		<div className={`topic-banner ${topic}`}>
			{topic.charAt(0).toUpperCase() + topic.slice(1)}
		</div>
	)
}
