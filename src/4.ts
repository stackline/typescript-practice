{
  const getFizzBuzzString = (i: number): string => {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    if (isMultipleOf3 && isMultipleOf5) {
      return 'FizzBuzz';
    } else if (isMultipleOf3) {
      return 'Fizz';
    } else if (isMultipleOf5) {
      return 'Buzz';
    } else {
      return String(i);
    }
  };

  const sequence = (start: number, end: number): number[] => {
    // const ary = [];
    const ary: number[] = [];
    for (let i = start; i <= end; i++) {
      ary.push(i);
    }
    return ary;
  };

  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
}
{
  const map = <T>(array: T[], callback: (arg: T) => T): T[] => {
    const result: T[] = [];
    for (const elem of array) {
      result.push(callback(elem));
    }
    return result;
  };
  const data = [1, 1, 2, 3, 5, 8, 13];
  const result = map(data, (x) => x * 10);
  console.log(result);
}
{
  const map = <T, U>(array: T[], callback: (arg: T) => U): U[] => {
    const result: U[] = [];
    for (const elem of array) {
      result.push(callback(elem));
    }
    return result;
  };
  const data = [1, -3, -2, 8, 0, -1];
  const result: boolean[] = map(data, (x) => x >= 0);
  console.log(result);
}
