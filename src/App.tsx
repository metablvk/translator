import translateStr from './utils/translate/translate';
import TextArea from './components/textarea/textarea.component';
import './App.css';
import { ChangeEvent, MouseEvent, useState } from 'react';
import Select from './components/select/select.component';

const defaultFormFields = {
  text: '',
  langCode: '',
};
function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [translatedText, setTranslatedText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const text = await translateStr(formFields.text, formFields.langCode);
    setTranslatedText(text);
  };

  return (
    <div className='container mx-auto xl:px-24 mt-8'>
      <h1 className='font-bold text-xl'>Text Translator</h1>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div>
          <TextArea
            label='Text to translate'
            // @ts-ignore FIX Later
            onChange={handleChange}
            formFields={formFields.text}
          />
        </div>
        <div>
          <Select
            label='Translate to'
            // @ts-ignore FIX Later
            onChange={handleChange}
          />
          <TextArea
            // @ts-ignore FIX Later
            onChange={handleChange}
            formFields={formFields}
            disabled
            className='w-full p-4 border border-gray-600'
            defaultValue={translatedText}
          />
        </div>
      </div>
      <button
        onClick={handleClick}
        className='ml-auto block bg-green-500 text-white px-6 py-2'
      >
        Translate
      </button>
    </div>
  );
}

export default App;
