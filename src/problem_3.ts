// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

type sentence = string;
type word = string;

function countWordOccurrences(sentence:string, word: string) : number {
    const lowerCaseSentence = sentence.toLocaleLowerCase();
    const loweCaseWord = word.toLocaleLowerCase();

    const wordsOfSentence = lowerCaseSentence.split(" ");

    const countWord = wordsOfSentence.filter(w => w === loweCaseWord).length;

    return countWord;

    }

    console.log(countWordOccurrences("I love typescript", "typescript"));
    