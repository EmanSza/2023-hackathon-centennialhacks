import React from 'react';

import RegularSignUp from './RegularSignUp/RegularSignUp';

const RegisterComponent = () => {
	return (
		<div className='w-full py-8'>
			<h1 className='text-[22px] smallLaptop:text-32 font-medium television:pt-[88px] pb-[40px] text-center'>
				Create an Account
			</h1>
			<p className='my-4 text-center'>OR</p>
			<RegularSignUp />
		</div>
	);
};

export default RegisterComponent;
