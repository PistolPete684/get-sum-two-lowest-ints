function sumTwoSmallestNumbers(numbers) {  
  // Sort the numbers in incrimental order
  numbers.sort((a, b) => a - b);
  //return the the sum of the first two numbers (being the lowest two)
  return numbers[0] + numbers[1];
}