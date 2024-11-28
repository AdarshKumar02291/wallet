import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath, getMasterKeyFromSeed, getPublicKey } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { Buffer } from "buffer";

if (typeof window !== "undefined") {
  window.Buffer = Buffer;
}

function Main() {
  const [wallet, setWallet] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setWallet(target.value);
  };
  const handleWallet = () => {
    const seed = mnemonicToSeedSync(
      "jealous marble decrease clump miracle exile patrol erase bag priority hollow club"
    );
    console.log(seed.toString("hex"))
    const seedHex = seed.toString("hex");
    const {key} = getMasterKeyFromSeed(seedHex);
    console.log(key)
    
    for (let i = 0; i < 2; i++) {
      const path = `m/44'/501'/${i}'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;
      console.log(derivedSeed);
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
    }
  };

  return (
    <div className="w-full h-screen text-[32px] px-8  ">
      <h1 className="font-bold">Kosh supports multiple blockchains</h1>
      <h4>Choose a blockchain to get started</h4>
      <Button variant="default">Solana</Button>
      <div className="mt-4 flex w-6/12 gap-x-4">
        <Input onChange={handleInput} />
        <Button type="submit" onClick={handleWallet}>
          Import/Generate
        </Button>
      </div>
    </div>
  );
}

export default Main;
