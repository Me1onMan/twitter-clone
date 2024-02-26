import { ref, uploadBytes } from "firebase/storage";

import { TFile } from "@/types";
import compressFile from "@/utils/compressImage";

import { firebaseStorage } from "..";

const getImageNameAndUploadFile = async (file: TFile, userId: string) => {
  if (!file) return null;

  const now = new Date();
  const imageId = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}-${userId}`;
  const imageName = `images/${imageId}.jpg`;
  const fileRef = ref(firebaseStorage, imageName);

  const compressedFile = await compressFile(file);

  try {
    await uploadBytes(fileRef, compressedFile);
  } catch (error) {
    throw new Error(error);
  }
  return imageName;
};

export default getImageNameAndUploadFile;
