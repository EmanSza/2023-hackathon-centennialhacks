'use client';
import CustomButton from '@/app/components/atoms/CustomButton/CustomButton';
import FormikCustomInput from '@/app/components/atoms/FormikCustomInput/FormikCustomInput';
import { showToast } from '@/app/components/atoms/ShowToast/showToast';
import fetchWrapper from '@/app/libs/fetchWrapper';
import {
	ButtonProperties,
	NotificationTypes,
	errorMessages,
} from '@/app/libs/helpers';
import { Form, Formik, FormikProps } from 'formik';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import yupPassword from 'yup-password';
yupPassword(yup); // extend yup

const RegularSignIn = () => {
	// const { login, isLoading } = useLoginMutation();
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const initialState = {
		email: '',
		password: '',
	};

	interface Values {
		email: string;
		password: string;
	}

	const LoginSchema = yup.object().shape({
		email: yup
			.string()
			.email('Invalid email')
			.required(errorMessages.required('Email')),
		password: yup
			.string()
			.required(errorMessages.required('Password'))
			.min(8, errorMessages.minChar(8))
			.minLowercase(1, errorMessages.minLowerCase(1))
			.minUppercase(1, errorMessages.minUpperCase(1))
			.minNumbers(1, errorMessages.minNumber(1))
			.minSymbols(1, errorMessages.minSymbol(1)),
	});

	const signInUser = async (values: Values) => {
		setLoading(true);
		try {
			// const res = await fetchWrapper.post(
			// 	`${process.env.NEXT_PUBLIC_BACKEND_URL}/consumer/auth/login`,
			// 	{
			// 		email: values.email,
			// 		password: values.password,
			// 	}
			// );

			const requestOptions = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: values.email,
					password: values.password,
				}),
			};

			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_URL}/consumer/auth/login`,
				requestOptions
			);
			const responseJson = await res.json(); // Server response
			if (responseJson.success) {
				showToast(
					'Login successful...You will be redirecetd shortly',
					NotificationTypes.SUCCESS
				);
				setTimeout(() => {
					router.push('/home');
				}, 1500);
			} else {
				showToast('An error occurred', NotificationTypes.ERROR);
			}
			setLoading(false);
		} catch (error) {
			showToast('An error occurred', NotificationTypes.ERROR);
		}
		setLoading(false);
		``;
	};

	return (
		<div>
			<ToastContainer
				autoClose={5000}
				closeOnClick
				draggable
				hideProgressBar={false}
				newestOnTop={false}
				pauseOnFocusLoss
				pauseOnHover
				position='top-right'
				rtl={false}
				theme='dark'
			/>
			<Formik
				enableReinitialize
				initialValues={initialState}
				onSubmit={signInUser}
				validationSchema={LoginSchema}
			>
				{(props: FormikProps<Values>) => (
					<Form>
						<div className='relative'>
							<div className=''>
								<div className='mb-4'>
									<FormikCustomInput
										className='border border-bell-gray-200 rounded-[6px]'
										container='tablet:px-6'
										inputClassName='placeholder:text-14 placeholder:text-bell-ink-blue-500 border-black'
										name='email'
										placeholder='Enter Your Email Address'
										type='email'
									/>
								</div>
							</div>

							<div className=''>
								<div className='mb-4'>
									<FormikCustomInput
										className='border border-bell-gray-200 rounded-[6px]'
										container='px-6'
										iconPosition='end'
										inputClassName='placeholder:text-14 placeholder:text-bell-ink-blue-500 mobileBelow:ml-4 border-black'
										name='password'
										placeholder='Enter Password'
										type='password'
									/>
								</div>
							</div>
						</div>
						<div className='flex flex-col justify-center items-center mt-[40px]'>
							<CustomButton
								customClass='w-full'
								handleClick={() => {}}
								// isDisabled={isLoading}
								// isSubmitting={isLoading}
								size={ButtonProperties.SIZES.big}
								title='Login'
								type='submit'
								variant={ButtonProperties.VARIANT.primary.name}
							/>
							<p className='text-14 pb-auto pt-[14px]'>
								Dont have an account ?&nbsp;
								<Link className='text-bell-blue-500' href='/auth/register'>
									Sign up here
								</Link>
							</p>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegularSignIn;
