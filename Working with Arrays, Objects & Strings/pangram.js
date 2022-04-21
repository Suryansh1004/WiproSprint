// Given a string check if it is Pangram or not
// A Pangram is a Sentence containing every letter in the English Alphabet
// Program
function find_Pangram(sentence){
    let str = sentence.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(str.indexOf(alphabet[i]) < 0){
        return 0;
      }
    }
    return 1;
  }

let sentence = 'The quick brown fox jumps over the lazy dog';

console.log(find_Pangram(sentence));