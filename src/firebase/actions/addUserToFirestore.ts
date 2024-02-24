import { addDoc, collection } from "firebase/firestore";

import { USERS_COLLECTION } from "../collections";
import { firestore } from "..";

type TUserDB = {
  name: string;
  email: string;
  telephone: string;
  birthdate: string;
  id: string;
};

const addUserToFirestore = async ({ name, email, telephone, birthdate, id }: TUserDB) => {
  try {
    addDoc(collection(firestore, USERS_COLLECTION), {
      name,
      email,
      telephone,
      birthdate,
      id,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default addUserToFirestore;
