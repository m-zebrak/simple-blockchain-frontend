import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


export interface ITransaction {
  amount: number,
  description: string,
  hash: string,
  sender: string,
  recipent: string,
  timestamp: string
  tx_type: string
}

interface IBlock {
  timestamp: string,
  hash: string,
  previous_hash: string,
  nonce: number,
  transactions: Transaction[]
}

export class Transaction implements ITransaction {
  amount: number;
  description: string;
  hash: string;
  recipent: string;
  sender: string;
  timestamp: string;
  tx_type: string
  valid!: boolean

  constructor(
    amount: number,
    description: string,
    hash: string,
    recipent: string,
    sender: string,
    timestamp: string,
    tx_type: string,
    private _service: BlockchainService
  ) {
    this.amount = amount;
    this.description = description;
    this.hash = hash;
    this.recipent = recipent;
    this.sender = sender;
    this.timestamp = timestamp;
    this.tx_type = tx_type;
    this._service.validate(this.hash).subscribe((response: boolean) => {
      this.valid = response;
      console.log(`TX VALIDATING {${this.valid}: ${this.hash}`);
    })

  }

  retStr() {
    return "string"
  }

}

export class Block implements IBlock {
  hash: string;
  nonce: number;
  previous_hash: string;
  timestamp: string;
  transactions: Transaction[];

  constructor(
    timestamp: string,
    hash: string,
    previous_hash: string,
    nonce: number,
    transactions: Transaction[],
    private _service: BlockchainService
  ) {
    this.timestamp = timestamp;
    this.hash = hash;
    this.previous_hash = previous_hash;
    this.nonce = nonce;
    this.transactions = transactions.map(item =>
      new Transaction(item.amount, item.description, item.hash, item.recipent, item.sender, item.timestamp, item.tx_type, _service));
  }
}

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(private http: HttpClient) {
  }

  getBlocks() {
    return this.http.get<Block[]>('/api/blocks');
  }

  find(hash: string) {
    return this.http.get<any>(`api/find/${hash}`);
  }

  validate(hash: string) {
    return this.http.get<boolean>(`/api/validate/${hash}`);
  }
}
