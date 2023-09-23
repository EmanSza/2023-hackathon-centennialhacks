import Navigation from '@/app/components/atoms/Navigation/Navigation';
import Image from 'next/image';
import React from 'react';

interface AuthLayoutProps {
	children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<>
			<Navigation />
			<div className='flex flex-col h-screen w-full px-4 smallLaptop:px-0 smallLaptop:items-center overflow-y-auto bg-[#F5F7FF]'>
				<div className='bg-bell-light-blue-400 h-[90vh]'>
					{/* <div className="w-full h-[90vh] pl-44">{children}</div> */}
					<div className='w-full h-[90vh]'>{children}</div>
					<div className='hidden smallLaptop:block'>
						<div className='fixed bottom-0 left-0'>
							<Image
								alt=''
								height={385}
								priority
								src='/images/hacking1.jpeg'
								width={339}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthLayout;
