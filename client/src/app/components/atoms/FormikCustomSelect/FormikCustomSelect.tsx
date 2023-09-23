import { useField } from 'formik';
import { v4 as uuidv4 } from 'uuid';

import CustomLabel from '../CustomLabel/CustomLabel';
import CustomSelectOption from '../CustomSelect/CustomSelectOption';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export interface OptionType {
	text: string;
	value: string;
	componentHandler?: Function;
}

const FormikCustomSelect = ({
	label,
	error,
	parentContainer,
	container,
	className,
	value,
	options,
	placeholder,
	componentHandler,
	...props
}: any) => {
	const [field, meta] = useField<{}>(props);
	let hasOptions = false;
	let selectOptions: any = [];
	if (placeholder) {
		hasOptions = true;
		selectOptions = [
			<CustomSelectOption
				disabled={true}
				key={uuidv4()}
				text={placeholder}
				value={''}
			/>,
		];
	}
	if (options && options.length > 0) {
		hasOptions = true;
		selectOptions = [
			...selectOptions,
			...options.map((option: OptionType, index: number) => (
				<CustomSelectOption
					key={index + 1}
					text={option.text}
					value={option.value}
				/>
			)),
		];
	}

	return (
		<div className='w-full min-h-[50px] h-[50px]'>
			<div
				className={`w-full h-full rounded-[0.313rem] border-[0.022rem] text-bell-ink-blue-500 border-bell-gray-200 ${parentContainer} ${
					meta.error && meta.touched ? '!border-red-500' : ''
				}`}
			>
				{label && <CustomLabel title={label} />}
				<div className={`h-full ${container ? container : ''}`}>
					{componentHandler ? (
						<select
							className={`text-black ml-2 w-[95%] bg-transparent  border-none focus:ring-0 px-4 h-full focus:outline-none ${className}`}
							onChange={e => componentHandler(e.target.value)}
							{...props}
						>
							{hasOptions && selectOptions}
						</select>
					) : (
						<select
							className={`text-black ml-2 w-[95%] bg-transparent border-none focus:ring-0 px-4 h-full focus:outline-none  ${className} `}
							{...field}
							{...props}
						>
							{hasOptions && selectOptions}
						</select>
					)}
				</div>
			</div>
			{meta.error && meta.touched && <ErrorMessage error={meta.error} />}
		</div>
	);
};

export default FormikCustomSelect;
