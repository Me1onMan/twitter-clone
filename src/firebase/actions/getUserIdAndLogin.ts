import { collection, getDocs, query, where } from "firebase/firestore";

import { TUserState } from "@/store/slices/userSlice";
import isTelephone from "@/utils/validators";

import { USERS_COLLECTION } from "../collections";
import { firestore, signin } from "..";

const TELEPHONE = "telephone";
const EMAIL = "email";

const getUserIdAndLogin = async (phoneOrEmail: string, password: string) => {
  const isPhone = isTelephone(phoneOrEmail);
  const userCollection = collection(firestore, USERS_COLLECTION);
  const userQuery = query(
    userCollection,
    isPhone ? where(TELEPHONE, "==", phoneOrEmail) : where(EMAIL, "==", phoneOrEmail),
  );

  const querySnapshot = await getDocs(userQuery);

  if (querySnapshot.empty) return null;

  const userData = querySnapshot.docs[0].data();
  const userEmail = userData.email;

  const userCredentials = await signin(userEmail, password);
  const user: TUserState = {
    id: userCredentials.user.uid,
    name: userData.name,
    email: userEmail,
    birthdate: userData.birthdate,
    telephone: userData.telephone,
  };

  return user;
};

export default getUserIdAndLogin;
