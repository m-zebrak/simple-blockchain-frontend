import {Component, Input} from '@angular/core';
import {Block} from "../services/blockchain.service";

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent {

  @Input() public show: boolean = false;
  @Input() public block!: Block;

  constructor() {
  }

  blockHasTx() {
    return this.block.transactions.length !== 0;
  }

}
