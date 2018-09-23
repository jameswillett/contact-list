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

const randomPrettyBackgroundColor = () => '#' + Array(3).fill(0).map(_ => (Math.floor(Math.random() * 5) + 8).toString(16)).join('');

const makeTheContactPretty = contact => ({
  ...contact,
  background: randomPrettyBackgroundColor(),
  id: parseInt(contact.id, 10),
  name: makeTheNamePretty(contact),
  phone: makeTheNumberPretty(contact),
})

module.exports = { makeTheContactPretty };
