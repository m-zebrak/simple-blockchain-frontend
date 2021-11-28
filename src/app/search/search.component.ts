import {Component} from '@angular/core';
import {Block, BlockchainService, Transaction} from "../services/blockchain.service";
import {map} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  hash: any
  found: any
  show: boolean = false;

  constructor(private _service: BlockchainService) {
  }

  find(hash: string) {
    this.found = undefined;
    this._service.find(hash)
      .pipe(map((item: any) => {
        if (item.nonce !== undefined)
          return new Block(item.timestamp, item.hash, item.previous_hash, item.nonce, item.transactions, this._service);
        if (item.recipent !== undefined)
          return new Transaction(item.amount, item.description, item.hash, item.recipent, item.sender, item.timestamp, item.tx_type, this._service);

        return undefined;
      }))
      .subscribe((result: any) =>
        this.found = result
      )
  }

  clicked() {
    this.show = true;
  }

  isBlock(object: any) {
    return (object instanceof Block);
  }

  isTransaction(object: any) {
    return (object instanceof Transaction);
  }
}
