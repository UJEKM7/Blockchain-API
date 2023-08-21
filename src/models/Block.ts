import { Transaction } from "./Transaction";

export class Block {
    public nonce = Math.round(Math.random() * 999999999);
  
    constructor(
      public prevHash: string,
      public transaction: Transaction,
      public timestamp = Date.now()
    ) {}
  
     /**
     * Generates a simple hash for the block data.
     * In a real blockchain, a more secure method would be used.
     */
     get hash(): string {
        const str = JSON.stringify(this);
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          hash += str.charCodeAt(i);
        }
        return hash.toString();
      }
  }