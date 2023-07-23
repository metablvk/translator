import { defLangCodes } from '../../utils/lang-codes/lang-codes.utils';

type SelectProps = {
  label: string;
};

const Select = ({ label, ...rest }: SelectProps) => {
  return (
    <div className='flex mb-4'>
      <label htmlFor='' className='mr-2'>
        {label}
      </label>
      <select {...rest} name='langCode' className='border px-2' id=''>
        <option value=''></option>
        {defLangCodes.map((c, id) => (
          <option key={id} value={c.code}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
