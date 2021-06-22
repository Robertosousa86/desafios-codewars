function getCount(str) {
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const strArray = str.split('');
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (strArray[i] === vowels[j]) {
        vowelCount++;
      }
    }
  }
  return vowelCount;
}

module.exports = getCount;
