import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { getWallets } from "@/services/wallet";

function Main() {
  const [wallet, setWallet] = useState<string>("");
  const [generatedWallets, setGeneratedWallets] = useState<any>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setWallet(target.value);
  };

  const handleWallet =async () => {
    const wallets = await getWallets(wallet);
    setGeneratedWallets(wallets);
  };

  console.log(generatedWallets)

  return (
    <div className="w-full h-screen text-[32px] px-8">
      <h1 className="font-bold">Kosh supports multiple blockchains</h1>
      <h4>Choose a blockchain to get started</h4>
      <Button variant="default">Solana</Button>
      <div className="mt-4 flex w-6/12 gap-x-4">
        <Input
          onChange={handleInput}
          value={wallet}
          placeholder="Enter mnemonic phrase"
        />
        <Button type="submit" onClick={handleWallet}>
          Import/Generate
        </Button>
      </div>
      {generatedWallets?.length > 0 && (
        <div className="mt-4">
          <h3>Generated Wallets:</h3>
          {generatedWallets.map((item: any, index: number) => (
            <div key={index} className="text-sm">
              Wallet {index + 1}: {item.publicKeyEncoded}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
