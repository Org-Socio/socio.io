// test-profanity.js
const textAnalysis = require('./text_analysis');

async function testProfanityDetection() {
  console.log("Testing profanity detection...");
  const testTexts = [
    "This is a normal sentence.",
    "This has the word fucker in it.",
    "Another profanity: f*ck this!",
    "More variations: fucking, fucked, f*cking"
  ];
  
  for (const text of testTexts) {
    console.log(`\nTesting: "${text}"`);
    const results = textAnalysis.regexPatternDetection(text);
    console.log(`Profanity detected: ${results.profanity}`);
    if (results.profanity) {
      console.log(`Flagged words: ${results.flagged_words.join(', ')}`);
    }
  }
}

testProfanityDetection();