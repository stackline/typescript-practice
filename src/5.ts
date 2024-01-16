{
  class User {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
      if (name === '') {
        throw new Error("Don't empty the name!");
      }
      this.name = name;
      this.age = age;
    }

    getMessage(message: string): string {
      return `${this.name} (${this.age}) [${message}]`;
    }
  }

  const uhyo = new User('uhyo', 26);
  console.log(uhyo.getMessage('Hello'));
}
{
  function createUser(name: string, age: number) {
    if (name === '') {
      throw new Error("Don't empty the name!");
    }
    return (message: string) => {
      return `${name} (${age}) [${message}]`;
    };
  }

  const getMessage = createUser('uhyo', 26);
  console.log(getMessage('hello'));
}
