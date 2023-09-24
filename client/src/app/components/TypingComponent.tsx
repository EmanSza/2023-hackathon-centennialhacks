'use client';
import React, { useState, useEffect } from 'react';

const TypingPage = () => {
	const [text, setText] = useState('');
	const [startTime, setStartTime] = useState<any>(null);
	const [wordsPerMinute, setWordsPerMinute] = useState(0);

	const handleInputChange = (e: any) => {
		const inputValue = e.target.value;
		setText(inputValue);
	};

	useEffect(() => {
		if (text && !startTime) {
			// Start the timer when the user begins typing
			setStartTime(Date.now());
		} else if (!text && startTime) {
			// Clear the timer when the user stops typing
			setStartTime(null);
			setWordsPerMinute(0);
		} else if (text && startTime) {
			// Calculate words per minute when the user is typing
			const currentTime = Date.now();
			const elapsedTimeInSeconds = (currentTime - startTime) / 1000;
			const words = text.split(' ').filter(word => word !== '').length;
			const wordsPerMinuteValue = (words / elapsedTimeInSeconds) * 60;
			setWordsPerMinute(wordsPerMinuteValue);
		}
	}, [text, startTime]);

	return (
		<div className='mt-16'>
			<h1>Typing Activity Tracker</h1>
			<textarea
				placeholder='Start typing...'
				value={text}
				onChange={handleInputChange}
				style={{ width: '100%', minHeight: '100px' }}
			/>
			<div>
				{startTime && <p>Words per Minute: {wordsPerMinute.toFixed(2)} WPM</p>}
			</div>
		</div>
	);
};

export default TypingPage;
