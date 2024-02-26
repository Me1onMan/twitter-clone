import { Dispatch, SetStateAction } from "react";
import { addDoc, collection } from "firebase/firestore";

import { TFile } from "@/types";

import { TWEETS_COLLECTION } from "../collections";
import { firestore } from "..";

import getImageNameAndUploadFile from "./getImageNameAndUploadFile";

type TTweetProps = {
  authorId: string;
  text: string;
  file: TFile;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const addTweet = async ({ authorId, text, file, setIsLoading }: TTweetProps) => {
  try {
    setIsLoading(true);
    const fileName = await getImageNameAndUploadFile(file, authorId);

    await addDoc(collection(firestore, TWEETS_COLLECTION), {
      authorId,
      text,
      fileName,
      likedBy: [],
      createdAt: new Date(),
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    setIsLoading(false);
  }
};

export default addTweet;
