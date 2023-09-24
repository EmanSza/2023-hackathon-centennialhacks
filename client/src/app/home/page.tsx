'use client';
import React, { useState, useEffect } from 'react';
import TypingPage from '../components/TypingComponent';

const getRandomPosition = () => {
	const maxX = window.innerWidth - 100;
	const maxY = window.innerHeight - 100;
	const x = Math.floor(Math.random() * maxX);
	const y = Math.floor(Math.random() * maxY);
	return { x, y, startTime: null };
};

const HomePage = () => {
	const [squares, setSquares] = useState<any>([]);
	const [results, setResults] = useState<any>([]);

	const handleSquareClick = (e: any, square: any) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const timeToEnter = Number(Date.now()) - Number(square.startTime);
		const positionInSquare = {
			x: mouseX - square.x,
			y: mouseY - square.y,
		};

		setResults([...results, { timeToEnter, positionInSquare }]);
		setSquares([]);

		if (results.length < 3) {
			setTimeout(() => {
				setSquares([...squares, getRandomPosition()]);
			}, 1000);
		}
	};

	useEffect(() => {
		// Generate initial squares when the page loads
		setSquares([getRandomPosition()]);
	}, []);

	return (
		<>
			<div>
				{squares.map((square: any, index: number) => (
					<div
						key={index}
						onClick={e => handleSquareClick(e, square)}
						style={{
							position: 'absolute',
							top: `${square.y}px`,
							left: `${square.x}px`,
							width: '100px',
							height: '100px',
							backgroundColor: '#3085C3',
							color: 'white',
							padding: '6px 10px',
							borderRadius: 6,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
						}}
					>
						<p>Click on this box!</p>
					</div>
				))}
				<div>
					<h2>Results</h2>
					<ul>
						{results.map((result: any, index: number) => (
							<li key={index}>
								Time to Enter: {(result.timeToEnter / 1000).toFixed(3)}ms,
								Position in Square: x=
								{result.positionInSquare.x}, y={result.positionInSquare.y}
							</li>
						))}
					</ul>
					{results.length >= 3 && (
						<p>
							Average Time to Enter:{' '}
							{results.reduce(
								(acc: any, curr: any) => acc + curr.timeToEnter,
								0
							) / results.length}
							ms
						</p>
					)}
				</div>
			</div>
			{/* <TypingPage /> */}
		</>
	);
};

export default HomePage;
