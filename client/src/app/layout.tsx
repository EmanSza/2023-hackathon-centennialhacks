'use client'
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProviders from './libs/ReactQueryyProvider';
import NextTopLoader from 'nextjs-toploader';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main>
					<ReactQueryProviders>
						<SessionProvider>
							<NextTopLoader />
							{children}
						</SessionProvider>
					</ReactQueryProviders>
				</main>
			</body>
		</html>
	);
}
