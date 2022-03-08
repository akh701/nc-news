import React from "react"

export default function TopicBanner({ topic }) {
	return <div className={`topic-header ${topic}`}>Topic{topic}</div>
}
