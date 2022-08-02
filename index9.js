function isAlphabet(letters) {
  let alfabet = "abcdefghijklmnopqrstuvwxyz";
  if (letters.length === 0) {
    return false;
  }
  letters = letters.toLowerCase();
  console.log(alfabet.includes(letters));
  return alfabet.includes(letters);
}

isAlphabet("abc");
isAlphabet("aBc");
isAlphabet("abd");
isAlphabet("a");
isAlphabet("");
isAlphabet("abcdefghjiklmnopqrstuvwxyz");
isAlphabet("tuvwxyz");
isAlphabet("XYZ");
isAlphabet("mnoprqst");
