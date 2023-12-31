'use client';

import Icon from '@/app/components/atoms/Icons';
import { Inter as inter } from 'next/font/google';

import CustomButton from '../CustomButton/CustomButton';
import Link from 'next/link';

const interFont = inter({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

const Navigation = () => {
	return (
		<div className='flex sticky top-0 items-center justify-between font-circular_pro h-[88px] font-medium w-full bg-white text-left py-5 px-4 smallLaptop:px-16 z-50'>
			<div className='gap-8 w-full h-full justify-between flex'>
				<Link
					className={`items-center flex gap-1 ${interFont.className} !text-[36px] font-bold`}
					href='/'
				>
					{/* <Icon className='w-[38px] h-10' name='logo' /> */}
					Centennial Hacks
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
