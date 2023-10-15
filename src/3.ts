type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const rows = data.split('\n').filter((row) => row !== '');
const users: User[] = rows.map((row) => {
  const [name, age, premiumUser] = row.split(',');
  const user: User = {
    name: name,
    age: Number(age),
    premiumUser: Boolean(Number(premiumUser)),
  };
  return user;
});
console.log(users);
for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age}) is premium user.`);
  } else {
    console.log(`${user.name} (${user.age}) is not premium user.`);
  }
}
