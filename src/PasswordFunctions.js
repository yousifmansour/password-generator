export default function getNewPassword(containedWord, length) {
  if (containedWord && length - containedWord.length < 4) {
    alert('To make sure that the password has an uppercase, lowercase, a digit and a symbol' +
        ', then length of the contained word must be less than the password\'s total leng' +
        'th by at least 4 characters. :)');
    return 'change options';
  }

  // Generate random password generate needed characters, numbers and upper and
  // lowercase letters add word if there is one.

  const alphanumeric_alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890';
  const symbols_alphabet = "!@#$%^&*()_+=|/\"`'~";

  let password = '';
  let randomIndex = 0;

  let alphabet = alphanumeric_alphabet + symbols_alphabet;

  for (let i = 0; i < length - 4; i++) {
    randomIndex = Math.random() * alphabet.length;
    password += alphabet.charAt(randomIndex);
  }
  password = addWordToPassword(containedWord, password);

  password = mutateWord(password);
  return password;
}

function addWordToPassword(insertedWord, password) {
  if (insertedWord) {
    const indexToAdd = Math.floor(Math.random() * (password.length - insertedWord.length - 1));
    // word can be inseted to password at indexToAdd

    password = [...password]; // string to array

    insertedWord = mutateWord(insertedWord);

    for (let i = indexToAdd; i < insertedWord.length + indexToAdd; i++) {
      password[i] = insertedWord.charAt(i - indexToAdd);
    }

    // array to string
    password = password.reduce((accum, next) => {
      accum += next;
      return accum;
    }, '');
  }

  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const symbols_alphabet = "!@#$%^&*()_+=|/\"`'~";

  password += upperCase.charAt([Math.random() * upperCase.length]);
  password += lowerCase.charAt([Math.random() * lowerCase.length]);
  password += digits.charAt([Math.random() * digits.length]);
  password += symbols_alphabet.charAt([Math.random() * symbols_alphabet.length]);

  return password;
}

function mutateWord(insertedWord) {
  insertedWord = [...insertedWord];
  insertedWord = insertedWord.map((a) => {
    let random = Math.random();
    if (random > 0.65) {
      return a.toLowerCase();
    } else if (random < 0.35) {
      return a.toUpperCase();
    } else 
      return a;
    }
  );

  return insertedWord.reduce((accum, next) => {
    accum += next;
    return accum;
  }, '');
}