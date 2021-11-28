import {Component} from '@angular/core';
import {Block, BlockchainService} from "../services/blockchain.service";
import {map} from "rxjs";

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent {
  blocks: Block[] = [];
  selected: Block = this.blocks[0];

  constructor(private _service: BlockchainService) {
    // _service.getBlocks().subscribe(result => {
    //   this.blocks = result;
    //   this.selected = this.blocks[0];
    //   this.blocks[0].hash = 'asadassa'
    // });

    // _service.getBlocks().pipe(map(res => res.map(item => item as Block)))
    //   .subscribe(result => {
    //     this.blocks = result;
    //     this.selected = this.blocks[0];
    //   });

    _service.getBlocks().pipe(map(res => res.map(item => new Block(item.timestamp, item.hash, item.previous_hash, item.nonce, item.transactions, this._service))))
      .subscribe(result => {
        this.blocks = result;
        this.selected = this.blocks[0];
      });
  }

  showTransactions(block: Block) {
    this.selected = block
  }
}
