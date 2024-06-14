function countVowels(str) {
  const formattedStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < formattedStr.length; i++) {
    const chat = formattedStr[i];
    if (
      chat === 'a' ||
      chat === 'e' ||
      chat === 'i' ||
      chat === 'o' ||
      chat === 'u'
    ) {
      count++;
    }

  }
  return count++;
}

module.exports = countVowels;
