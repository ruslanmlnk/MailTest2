export const capitalize = (str: string, lower = false) =>
	(lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
		match.toUpperCase()
	);

export const unslugify = (str: string) => {
  let text = capitalize(str.replace(/-/g, ' '))

  const t = text.split(' ').map((word, i)=> {
    if(word.length == 2 && i > 0 && word.toLowerCase() != 'fe' && word.toLowerCase() !== 'dc') {
      return ", " + word.toUpperCase()
    }
    return word
  })

  t[1] && t[1].includes(',') ? text = t.join('') : text = t.join(' ');

	return text;
};
