type TextAreaProps = {
  label: string;
  defaultValue: string;
};

const TextArea = ({ label = '', defaultValue, ...rest }: TextAreaProps) => {
  return (
    <div>
      <label htmlFor='' className='block mb-4'>
        {label}
      </label>
      <textarea
        name='text'
        id=''
        className='w-full p-4 border border-gray-600'
        {...rest}
        defaultValue={defaultValue}
      ></textarea>
    </div>
  );
};

export default TextArea;
