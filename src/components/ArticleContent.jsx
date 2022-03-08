import React from "react"

export default function ArticleContent() {
	return (
		<section className='article-content'>
			<ul>
				<li className='article-title'>
					<h1>Article Title</h1>
				</li>
				<li>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eveniet
						necessitatibus ipsum blanditiis alias tenetur quam molestias
						voluptate voluptates deserunt, laudantium nihil quos odit aspernatur
						accusantium maiores! Illo, nihil, facilis iusto asperiores
						necessitatibus non ea, tempora laboriosam repellendus enim saepe
						odit doloremque eos vitae modi sint. Odio molestias eaque illum
						sequi nemo. Enim, id. Animi non officia repellat cum voluptate
						aspernatur dignissimos quia, odit sunt, voluptatem corporis
						laboriosam maiores similique ex atque tempore cumque, dicta culpa!
						Qui a facere praesentium facilis similique doloribus aspernatur
						possimus dolorem harum, veritatis adipisci eligendi error nobis quis
						repudiandae aliquid? Nostrum harum vel esse reprehenderit!
					</p>
				</li>
			</ul>
			<hr />
			<ul className='article-info'>
				<li>Author: Ahmed</li>
				<li>
					Votes: 111 <button className='btn vote decrement'>-</button>
					<button className='btn vote increment'>+</button>
				</li>

				<li>Published: 8/03/2022</li>
			</ul>
			<hr />
		</section>
	)
}
