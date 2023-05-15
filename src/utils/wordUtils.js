export const countWordFrequency = (text) => {
  const words = text.split(/\s+/);
  const wordFrequencyMap = {};

  for (let word of words) {
    wordFrequencyMap[word] = (wordFrequencyMap[word] || 0) + 1;
  }

  return wordFrequencyMap;
};

export const getTopWords = (wordFrequencyMap, count) => {
  const sortedWords = Object.keys(wordFrequencyMap).sort(
    (a, b) => wordFrequencyMap[b] - wordFrequencyMap[a]
  );

  return sortedWords.slice(0, count).map((word) => ({
    word,
    frequency: wordFrequencyMap[word],
  }));
};
