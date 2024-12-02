import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync, validateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { Buffer } from "buffer";
import bs58 from "bs58";

// Ensure Buffer is globally available
(window as any).Buffer = Buffer;

export const getWallets = (mnemonic: string) => {
  try {
    // Ensure mnemonic is valid
    if (!mnemonic) {
      console.error("No mnemonic provided");
      return [];
    }
    let wallets =[] ;
    const seed = mnemonicToSeedSync(mnemonic);

    const path = `m/44'/501'/1'/0'`;

    const { key: derivedSeed } = derivePath(path, seed.toString("hex"));

    let publicKeyEncoded: string;
    let privateKeyEncoded: string;

    // Solana
    const { secretKey } = nacl.sign.keyPair.fromSeed(derivedSeed);
    const keypair = Keypair.fromSecretKey(secretKey);

    privateKeyEncoded = bs58.encode(secretKey);
    publicKeyEncoded = keypair.publicKey.toBase58();
    console.log(publicKeyEncoded);
    console.log(privateKeyEncoded)
    wallets.push({publicKeyEncoded,privateKeyEncoded})

    return wallets;
  } catch (error) {
    console.error("Error in getWallets:", error);
    return [];
  }
};
