interface CustomLabelProps {
  title: string;
  id?: string;
  className?: string;
}

const CustomLabel = ({ title, id = "", className = "" }: CustomLabelProps) => {
  return (
    <label className={`${className} !mt-6`} id={id}>
      {title}
    </label>
  );
};

export default CustomLabel;
