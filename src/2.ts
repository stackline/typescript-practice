{
  // vertical
  for (let i: number = 1; i <= 100; i++) {
    let isMultipleOf3: boolean = i % 3 === 0;
    let isMultipleOf5: boolean = i % 5 === 0;
    if (isMultipleOf3 && isMultipleOf5) {
      console.log('FizzBuzz');
    } else if (isMultipleOf3) {
      console.log('Fizz');
    } else if (isMultipleOf5) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
  // horizontal
  let str: string = '';
  for (let i: number = 1; i <= 100; i++) {
    let isMultipleOf3: boolean = i % 3 === 0;
    let isMultipleOf5: boolean = i % 5 === 0;
    if (isMultipleOf3 && isMultipleOf5) {
      str += 'FizzBuzz';
    } else if (isMultipleOf3) {
      str += 'Fizz';
    } else if (isMultipleOf5) {
      str += 'Buzz';
    } else {
      str += String(i);
    }
    if (i !== 100) {
      str += ' ';
    }
  }
  console.log(str);
}
