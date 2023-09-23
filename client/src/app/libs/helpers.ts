import moment from 'moment';

/**
 * Button properties for the custom button
 */
export const ButtonProperties = {
	SIZES: {
		small: 'small',
		medium: 'medium',
		big: 'big',
		full: 'full',
	},
	ICON_POSITION: {
		start: 'start',
		end: 'end',
	},
	VARIANT: {
		primary: {
			name: 'primary',
		},
		secondary: {
			name: 'secondary',
		},
		custom: {
			name: 'custom',
		},
	},
};

export const CheckBoxProperties = {
	LABEL_POSITION: {
		start: 'start',
		end: 'end',
	},
	SHAPE: {
		square: 'square',
		rounded: 'rounded',
	},
	SIZES: {
		small: 'small',
		big: 'big',
	},
};

/**
 * Truncate text with ellipses method
 * This is used to cut short the length of a text and attach ellipses to the
 * end of the text to signify that some part of the text is missing.
 * @param {string} text
 * @param {number} limit
 * @return {string} truncated text
 */
export const truncateText = (text: string, limit: number = 20): string => {
	return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

/**
 * Separate classes with space between
 * This is used to separate a list of classes that are separated by commas to a list
 * classes that are separated by space
 * @param {string[]} classes
 * @return {string} classNames
 */
export const classNames = (...classes: string[]): string => {
	return classes.filter(Boolean).join(' ');
};

export const errorMessages = {
	email: 'Email is not valid',
	maxChar: (num: number) =>
		`This field cannot have more than ${num} characters`,
	minChar: (num: number) => `This field must be at least ${num} characters`,
	minLowerCase: (num: number) =>
		`This field must be at least ${num} lower case character`,
	minUpperCase: (num: number) =>
		`This field must be at least ${num} upper case character`,
	minNumber: (num: number) => `This field must be at least ${num} number`,
	minSymbol: (num: number) =>
		`This field must be at least ${num} special character`,
	required: (fieldName: string) => `${fieldName} is compulsory`,
	passwordMatch: 'Passwords dont match',
	positiveInteger: 'The number must be greater than 0',
	integer: 'No decimals allowed',
};

export const USER_TYPES = {
	USER: 'USER',
	RECRUITER: 'RECRUITER',
};

export const NotificationTypes = {
	SUCCESS: 'success',
	ERROR: 'error',
	INFO: 'info',
	WARN: 'warn',
};

export const LocalStorageKeys = {
	TOKEN: 'token',
	EXPIRATION_TIME: 'time',
	ONBOARDING_STEPPER: 'onboardingStepper',
	JOB_SEARCH_STATUS: 'jobSearchStatus',
	CURRENT_ALERT_TAB: 'currentAlertTab',
};

export const imageUploadLimit = 1000000;

export const getTokenExpirationTime = () => {
	return moment().add(24, 'h'); // 45 minutes from current time
};

export const getUrlQuery = (query: any) => {
	if (Object.keys(query).length > 0) {
		return `?${Object.entries(query).map(([key, value]) => `${key}=${value}&`)}`
			.replaceAll(',', '')
			.slice(0, -1);
	} else return '';
};

/**
 * Compose a number of styles together easily
 * @param {String} styles Classes/styles to be applied
 * @return {String} Combined classes
 */
export const composeClasses = (...styles: Array<any>) => {
	let classes = '';

	styles.forEach(arg => {
		if (arg) classes += `${arg} `;
	});

	return classes.trim();
};

export const alertFrequencyData = [
	{
		text: 'Daily',
		value: 'DAILY',
	},
	{
		text: 'Weekly',
		value: 'WEEKLY',
	},
	{
		text: 'Monthly',
		value: 'MONTHLY',
	},
];

export const locationData = [
	{
		text: 'Remote',
		value: 'remote',
	},
];

export const experienceData = [
	{
		text: '1-2',
		value: '1-2',
	},
	{
		text: '2-3',
		value: '2-3',
	},
	{
		text: '3-5',
		value: '3-5',
	},
	{
		text: '5 above',
		value: '5 above',
	},
];

export const commitmentData = [
	{
		text: 'Full time',
		value: 'FULL_TIME',
	},
	{
		text: 'Part time',
		value: 'PART_TIME',
	},
	{
		text: 'Contract',
		value: 'CONTRACT',
	},
];

/**
 * Change date format
 * @param {Date} date
 * @param {String} timeFormat
 * @return {Date}
 */
export const changeDateFormat = (date: any, timeFormat: string) => {
	if (date) {
		return moment(date).format(timeFormat);
	}
};

export const maskEmail = (email: string | null) => {
	if (email) {
		const atIndex = email.indexOf('@');
		const username = email.substring(0, atIndex);
		const domain = email.substring(atIndex + 1);
		const maskedUsername =
			username.charAt(0) +
			username.charAt(1) +
			'*'.repeat(username.length - 2) +
			username.charAt(username.length - 2) +
			username.charAt(username.length - 1);
		return maskedUsername + '@' + domain;
	}
};

export const verifyEmailStatus = {
	SUCCESS: 'success',
	FAILED: 'failed',
};

export const copyToClipboard = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch (_) {
		// Clipboard API is not supported
		const el = document.createElement('textarea');
		el.value = text;
		document.body.appendChild(el);
		el.select();
		const result = document.execCommand('copy'); // This is to accommodate for older browsers which don't have the clipboard api
		document.body.removeChild(el);
		return result;
	}
};

export const slideRight = (idOfElement: string, distance: number) => {
	const slider: any = document.getElementById(idOfElement);
	slider.scrollLeft = slider?.scrollLeft + distance;
};
export const slideLeft = (idOfElement: string, distance: number) => {
	const slider: any = document.getElementById(idOfElement);
	slider.scrollLeft = slider?.scrollLeft - distance;
};
