import { ToastOptions, toast } from 'react-toastify';

import Icon from '../Icons';
import { NotificationTypes } from '@/app/libs/helpers';

export const showToast = (message: string, type: string) => {
	const options: ToastOptions<{}> | undefined = {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
	};

	switch (type) {
		case NotificationTypes.SUCCESS:
			toast.success(message, {
				...options,
				className:
					'bg-bell-light-green-100 text-black border border-bell-light-green-300 border-r-0 border-b-0 border-t-0 border-l-[0.438rem] text-center',
				closeButton: (
					<Icon className='w-[1.25rem] h-[1.25rem]' name='whiteClose' />
				),
				icon: false,
			});
			break;
		case NotificationTypes.ERROR:
			toast.error(message, options);
			break;
		case NotificationTypes.INFO:
			toast.info(message, options);
			break;
		case NotificationTypes.WARN:
			toast.warn(message, options);
			break;

		default:
			toast(message, options);
			break;
	}
};
