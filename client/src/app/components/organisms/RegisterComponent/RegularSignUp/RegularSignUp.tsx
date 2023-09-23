'use client';
import CustomButton from '@/app/components/atoms/CustomButton/CustomButton';
import FormikCustomInput from '@/app/components/atoms/FormikCustomInput/FormikCustomInput';
import { showToast } from '@/app/components/atoms/ShowToast/showToast';
import { ButtonProperties, errorMessages } from '@/app/libs/helpers';
import { Form, Formik, FormikProps } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useMutation } from 'react-query';
import { ToastContainer } from 'react-toastify';
import * as yup from 'yup';
import yupPassword from 'yup-password';
yupPassword(yup); // extend yup

const RegularSignUp = () => {
	// const { mutateAsync: createUser, isLoading } = useMutation({
	// 	mutationFn: createUserAccount,
	// 	mutationKey: ['create-user'],
	// });

	// const { login, isLoading: loader } = useLoginMutation();

	const router = useRouter();

	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirm_password: '',
	};

	interface Values {
		firstName: string;
		lastName: string;
		email: string;
		password: string;
		confirm_password: string;
	}

	const RegisterSchema = yup.object().shape({
		firstName: yup
			.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required(errorMessages.required('First Name')),
		lastName: yup
			.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required(errorMessages.required('Last Name')),
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
		confirm_password: yup
			.string()
			.required(errorMessages.required('Password confirmation'))
			.oneOf([yup.ref('password'), ''], errorMessages.passwordMatch),
	});

	const registerUser = async (values: Values) => {};

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
				onSubmit={registerUser}
				validationSchema={RegisterSchema}
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
										name='firstName'
										placeholder='Enter Your First Name'
										type='text'
									/>
								</div>
								<div className='mb-4'>
									<FormikCustomInput
										className='border border-bell-gray-200 rounded-[6px]'
										container='tablet:px-6'
										inputClassName='placeholder:text-14 placeholder:text-bell-ink-blue-500 border-black'
										name='lastName'
										placeholder='Enter Your Last Name'
										type='text'
									/>
								</div>
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
								<div className=''>
									<FormikCustomInput
										className='border border-bell-gray-200 rounded-[6px]'
										container='px-6'
										iconPosition='end'
										inputClassName='placeholder:text-14 placeholder:text-bell-ink-blue-500 mobileBelow:ml-4 border-black'
										name='confirm_password'
										placeholder='Confirm Password'
										type='password'
									/>
								</div>
							</div>
						</div>
						<div className='flex flex-col justify-center items-center mt-[40px]'>
							<CustomButton
								customClass='w-full'
								handleClick={() => {}}
								// isDisabled={isLoading || loader}
								// isSubmitting={isLoading || loader}
								size={ButtonProperties.SIZES.big}
								title='Create Account'
								type='submit'
								variant={ButtonProperties.VARIANT.primary.name}
							/>
							<p className='text-14 pb-auto pt-[14px]'>
								Already have an account ?&nbsp;
								<Link className='text-bell-green-500' href='/auth/login'>
									Sign in here
								</Link>
							</p>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegularSignUp;
