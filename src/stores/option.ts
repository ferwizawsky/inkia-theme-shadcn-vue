import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

export const useOption = defineStore("option", () => {
  const url: Ref<string> = ref(process.env.VITE_API_URL ?? ""); // Explicitly define the type as Ref<string>
  const name: Ref<string> = ref(process.env.VITE_NAME ?? ""); // Explicitly define the type as Ref<string>
  const token: Ref<string> = ref("");
  const secretKey:string = process.env.VITE_SECRET ?? "secret_123"

  // Function to set the token in a cookie with encryption
  const setEncryptedTokenCookie = (tokenValue: string) => { 
    const encryptedToken = CryptoJS.AES.encrypt(tokenValue,secretKey).toString();
    Cookies.set("encryptedToken", encryptedToken, { expires: 7 }); // Set cookie with encrypted token
  };

  // Function to retrieve and decrypt the token from the cookie
  const getDecryptedTokenCookie = (): string | null => {
    const encryptedToken = Cookies.get("encryptedToken");
    if (encryptedToken) { 
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken,secretKey);
      const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return decryptedToken;
    }
    return null;
  };
 
  token.value = getDecryptedTokenCookie() || ""; 
  const updateToken = (newToken: string) => {
    token.value = newToken;
    setEncryptedTokenCookie(newToken);
  };

  return { url, name, token, updateToken };
});
