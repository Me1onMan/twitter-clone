import { TEL_REGEXP } from "@/constants/regexp";

const isTelephone = (telOrAnother: string): boolean => {
  return TEL_REGEXP.test(telOrAnother);
};

export default isTelephone;
