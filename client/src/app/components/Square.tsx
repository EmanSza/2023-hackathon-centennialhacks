// components/Square.js

import React from 'react';

const Square = ({ top, left, onMouseEnter }: any) => {
	return (
		<div
			className='square'
			style={{ top, left }}
			onMouseEnter={onMouseEnter}
		></div>
	);
};

export default Square;
