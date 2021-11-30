const sentence = "hello there from lighthouse labs";
const newSentence = sentence + "\n";
let counter = 0;

for (const char of newSentence) {
  setTimeout( () => { 
    process.stdout.write(char);
  }, counter )
  counter += 50;
};