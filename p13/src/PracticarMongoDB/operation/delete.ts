import '../db/moongose';
import { User } from '../models/user';

export function deleteUser(user_email: string) {
  User.deleteOne({
    email: user_email,
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

deleteUser('javi@javi.com');