interface CustomSelectOptionProps {
  value: string;
  text: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  // selected?: boolean;
  // key?: string | number;
}
const CustomSelectOption = ({ value, disabled = false, text, className = "", id = "" }: CustomSelectOptionProps) => {
  return (
    <option className={className} disabled={disabled} id={id} value={value}>
      {text}
    </option>
  );
};

export default CustomSelectOption;
