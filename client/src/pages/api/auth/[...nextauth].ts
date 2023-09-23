import fetchWrapper from '@/app/libs/fetchWrapper';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
	providers: [
		// To support Email & Password authentication
		CredentialsProvider({
			name: 'Password',
			credentials: {
				email: {
					label: 'Email Address',
					type: 'email',
				},
				password: {
					label: 'Account password',
					type: 'password',
				},
			},
			async authorize(credentials, req) {
				const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/consumer/auth/login`;

				const res = await fetchWrapper.post(baseUrl, {
					email: credentials?.email,
					password: credentials?.password,
				});

				const user = await res.json();

				console.log(user);

				if (user) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		jwt: async ({ token, user, trigger, session }) => {
			if (trigger === 'update') {
				return { ...token, ...session.user };
			}

			return { ...token, ...user };
		},
		session: async ({ session, token, user }) => {
			session.user = token;
			return session;
		},
		redirect: async ({ url, baseUrl }) => {
			return url;
		},
	},
	pages: {
		// Defining Custom Route For Auth Pages
		signIn: '/login',
		// error: '/error',
	},
};

export default NextAuth(authOptions);
