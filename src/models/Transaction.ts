export class Transaction {
    constructor(
      public id: number,
      public fromAddress: string | null,
      public toAddress: string,
      public amount: number
    ) {}
  }
  