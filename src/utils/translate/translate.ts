// @ts-nocheck
import translate from 'translate';

translate.engine = 'deepl';
translate.key = import.meta.env.VITE_DEEPL_KEY;

/**
 *
 * @param s - string to be translated
 * @param transTo - Translate to language
 */

const translateStr = async (s: String, transTo: string) => {
  const text = await translate(s, transTo);
  console.log(text);
  return text;
};

export default translateStr;
