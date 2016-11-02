import { User } from './user/userModel';

let newUser = new User("a", "b", 20);
console.log(newUser.age);
newUser.age = 8;
console.log(newUser.age);