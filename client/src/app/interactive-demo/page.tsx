/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
	const [deltaTimes, setDeltaTimes] = useState<any>([]);
	const [lastDown, setLastDown] = useState(0);
	const [avgTime, setAvgTime] = useState<any>(0);
	const [deltaArray, setDeltaArray] = useState();
	const [avgKeyTime, setAvgKeyTime] = useState();
	const [text, setText] = useState('');

	const logKeyDown = () => {
		setLastDown(Date.now());
	};

	const logKeyUp = () => {
		const newDeltaTime = Date.now() - lastDown;
		setDeltaTimes((prevDeltaTimes: any) => [...prevDeltaTimes, newDeltaTime]);

		getAverageTime();
		setAvgKeyTime(avgTime.toFixed(3));
		setDeltaArray(deltaTimes);
	};

	const getAverageTime = () => {
		setAvgTime(
			deltaTimes.reduce((a: any, b: any) => {
				return a + b;
			}, 0) / deltaTimes.length
		);
	};

	const resetValues = () => {
		setDeltaArray(undefined);
		setAvgTime(0);
		setAvgKeyTime(undefined);
		setDeltaTimes([]);
		setLastDown(0);
		setText('');
	};

	return (
		<div className='p-32'>
			<h1 className='font-bold text-32'>
				Hi {localStorage.getItem('username')}
			</h1>
			<div className='mainGrid p-16'>
				<div className='gridLeft'>
					<textarea
						onKeyDown={logKeyDown}
						onKeyUp={logKeyUp}
						rows={10}
						cols={60}
						placeholder='type here'
						className='p-4 mr-8'
						value={text}
						onChange={e => setText(e.target.value)}
					></textarea>
					<p className='mt-8'>
						Please type: "We do these things, not because they are easy... but
						because we thought they would be easy"
					</p>
				</div>
				<div className='gridRight ml-16'>
					<p>
						<span className='font-bold text-18'>
							Average length of key press: {'  '}
						</span>
						<span id='avgKeyPress'> {avgKeyTime}</span>
					</p>
					<p>
						<span className='font-bold text-18'>Press Times:</span>{' '}
						<span id='deltaArray'>{deltaArray?.join(', ')}</span>
					</p>
				</div>
				<button
					className='bg-[#454545] text-white w-[100px] h-[48px] rounded-lg mt-4 hover:bg-black'
					onClick={resetValues}
				>
					RESET
				</button>
			</div>
		</div>
	);
};

export default HomePage;
