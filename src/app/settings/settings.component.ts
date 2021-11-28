import {Component, DoCheck, KeyValueDiffer, KeyValueDiffers} from '@angular/core';
import {BlockchainViewerComponent} from "../blockchain-viewer/blockchain-viewer.component";
import {Block, BlockchainService} from "../services/blockchain.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements DoCheck {
  value: any
  found: any
  differ: KeyValueDiffer<string, any>;

  constructor(private _service: BlockchainService, private differs: KeyValueDiffers) {
    this.differ = this.differs.find({}).create();
  }

  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        console.log('item changed', item);
        this.find(this.value);
      });
    }
  }

  find(hash: string) {
    this._service.find(hash).subscribe(result=> console.log(result))
  }
}
