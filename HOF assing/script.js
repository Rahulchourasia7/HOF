
// 11111111111111

function reverseStringWithDelay(input) {
    setTimeout(function() {
      const reversed = input.split('').reverse().join('');
      console.log(reversed);
    }, 2000); // 2000 milliseconds = 2 seconds
  }
  
  const input = "Hello, world!";
  reverseStringWithDelay(input);
   

//   222222222222
function generateRandomNumberWithDelay(delayInSeconds) {
    let remainingTime = delayInSeconds;
    const countdownInterval = setInterval(function() {
      console.log(`Time remaining: ${remainingTime} seconds`);
      remainingTime--;
  
      if (remainingTime < 0) {
        clearInterval(countdownInterval);
        const randomNumber = Math.floor(Math.random() * 100); // Adjust range as needed
        console.log(`Generated random number: ${randomNumber}`);
      }
    }, 1000);
  
    setTimeout(function() {
      clearInterval(countdownInterval);
      const randomNumber = Math.floor(Math.random() * 100); // Adjust range as needed
      console.log(`Generated random number: ${randomNumber}`);
    }, delayInSeconds * 1000);
  }
  
  const delayInSeconds = 3;
  generateRandomNumberWithDelay(delayInSeconds);
// 




// 3333333333
const exchangeRate = 80;

const items = [
  { name: 'Item 1', priceUSD: 10 },
  { name: 'Item 2', priceUSD: 25 },
  { name: 'Item 3', priceUSD: 50 }
];

const convertedItems = items.map(item => {
  const convertedPriceINR = item.priceUSD * exchangeRate;
  return {
    name: item.name,
    priceINR: convertedPriceINR
  };
});

console.log("Converted Prices in INR:");
console.log(convertedItems);
// 



// 4444444444
const books = [
    { title: 'Book 1', author: 'author 1', year: 2005 },
    { title: 'Book 2', author: 'author 2', year: 2012 },
    { title: 'Book 3', author: 'author 3', year: 2008 },
    { title: 'Book 4', author: 'author 4', year: 2015 },
  ];
  
  const filteredAndCapitalizedBooks = books
    .filter(book => book.year >= 2010)
    .map(book => {
      return {
        title: book.title,
        author: book.author.toUpperCase(),
      };
    });
  
  console.log("Filtered and Capitalized Books:");
  console.log(filteredAndCapitalizedBooks);

  
//   
// 5555
function validateURL(url) {
    const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
  
    if (urlPattern.test(url)) {
      console.log("Valid URL");
    } else {
      console.log("Invalid URL");
    }
  }
  
  const inputURL = "https://www.example.com";
  validateURL(inputURL);

  


//   /
// 66666666
function validateLinkedInURL(url) {
    const linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    if (linkedinPattern.test(url)) {
      console.log("Valid LinkedIn profile URL");
    } else {
      console.log("Invalid LinkedIn profile URL");
    }
  }
  
  const inputURL1  = "https://www.linkedin.com/in/johndoe123";
  validateLinkedInURL(inputURL1);
    

