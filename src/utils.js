const makeTheNamePretty = ({ name }) => 
  name.replace(/[^a-zA-Z]+/g, ' ');

const makeTheNumberPretty = ({ phone }) => {
  const justNums = phone.replace(/\D/g, '');
  const splitNums = justNums.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (splitNums) {
    return `(${splitNums[1]}) ${splitNums[2]}-${splitNums[3]}`;
  }
  return '';
}

const makeTheContactPretty = contact => ({
  ...contact,
  id: parseInt(contact.id, 10),
  name: makeTheNamePretty(contact),
  phone: makeTheNumberPretty(contact),
})

module.exports = { makeTheContactPretty };
