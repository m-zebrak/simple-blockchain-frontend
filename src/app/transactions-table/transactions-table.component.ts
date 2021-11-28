import {Component, Input} from '@angular/core';
import {BlockchainService, Transaction} from "../services/blockchain.service";
import {firstValueFrom, map, Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent {

  @Input() public transactions: any = [];

  constructor(private _service: BlockchainService) {
  }

  isValid(hash:string){
    this._service.validate(hash).subscribe(response => console.log(response));
    console.log(true)
    return true;
  }
}
