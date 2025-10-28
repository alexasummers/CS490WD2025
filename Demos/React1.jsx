import React from 'react';
import { useState } from 'react'

function Image() {
	return (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg"
			alt="cat"
			/>
			)
}

function Image2() {
	return (
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg"
			alt="cat"
			/>
			)
}

export default function Gallery() {
	return (
		<section>
		<h1> These are some cats! </h1>
		<p> Cats! </p>
			<Image />
			<Image2 />
			<Image2 />
		</section>
		);
}
