import '../db/moongose';
import { User } from '../models/user';

export function searchUser(user_email: string) {
  User.find({
    email: user_email,
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

searchUser('javi@javi.com');