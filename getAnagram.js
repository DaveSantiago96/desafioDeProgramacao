let getAnagrams = (word, n = null, anagram = '', anagrams =[]) => {
  word = word.toUpperCase();
  if (anagram) {
    anagrams.push(anagram);
  }
  if (!word) {
    return;
  }
  for (let i = 0; i < word.length; i++) {
    anagram += word[i];
    getAnagrams(word.slice(0, i) + word.slice(i + 1), n, anagram, anagrams);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  let uniq = [...new Set(anagrams)];
  let hash = {};
  for (let i = 0; i < uniq.length; i++) {
    anagram = uniq[i];
    let len = anagram.length;
    if (!(len in hash)) {
      hash[len] = [anagram];
    } else {
      hash[len].push(anagram);
    }
  }
  return n === null ? uniq : hash[n];
};

console.log(getAnagrams('ifai', 2)); // neste campo e possivel trocar o nome entre aspas 