import { Component, OnInit, ViewChild } from '@angular/core';
import { RowDropSettingsModel, SelectionSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { dataGrid1, dataGrid2 } from './datasource';
import { DisplayOptionService } from '../service/DisplayOptionService';

@Component({
  selector: 'app-draganddrop',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.scss']
})
export class DraganddropComponent implements OnInit {

  public srcData: Object[] = [];
  public destData: Object[] = [];
  public pageOptions: Object;
  public selectionOptions: Object;
  public srcDropOptions: Object;
  public destDropOptions: Object;

  @ViewChild('grid')
  public grid: GridComponent;

  @ViewChild('destgrid')
  public destgrid: GridComponent;

  constructor(private displayOptionService: DisplayOptionService) {
  }

  ngOnInit() {
    this.srcData = [...dataGrid1];
    this.destData = [...dataGrid2];
    this.pageOptions = { pageCount: 2 };
    this.srcDropOptions = { targetID: 'DestGrid' };
    this.destDropOptions = { targetID: 'Grid' };
    this.selectionOptions = { type: 'Multiple' };
    // this.grid.allowSelection = true;

  }

  onRightArrowClick() {
    const selectedIds = this.getSelectedRow('Grid');
    for (let i = 0, len = selectedIds.length; i < len; i++) {
      this.destData.push({ 'interPreterName': selectedIds[i] });
      this.removeElemFromArray(this.srcData, selectedIds[i]);
    }
    this.grid.refresh();
    this.destgrid.refresh();
    // setTimeout(() => {
    //   console.log(this.getData());
    // }, 100);
  }

  onLeftArrowClick() {
    const selectedIds = this.getSelectedRow('DestGrid');
    for (let i = 0, len = selectedIds.length; i < len; i++) {
      this.srcData.push({ 'interPreterName': selectedIds[i] });
      this.removeElemFromArray(this.destData, selectedIds[i]);
    }
    this.grid.refresh();
    this.destgrid.refresh();
    // setTimeout(() => {
    //   console.log(this.getData());
    // }, 100);
  }

  onUpArrowClick() {
    const selectedIds = this.getSelectedRow('DestGrid');
    for (let i = 0, len = selectedIds.length; i < len; i++) {
      const pos = this.destData.map(function (e) { return e['interPreterName']; }).indexOf(selectedIds[i]);
      if (pos !== 0) {
        this.arrayMove(this.destData, pos, pos - 1);
      }
    }
    this.destgrid.refresh();
    // setTimeout(() => {
    //   console.log(this.getData());
    // }, 100);
  }

  onDownArrowClick() {
    const selectedIds = this.getSelectedRow('DestGrid');
    for (let i = 0, len = selectedIds.length; i < len; i++) {
      const pos = this.destData.map(function (e) { return e['interPreterName']; }).indexOf(selectedIds[i]);
      if (pos !== (this.destData.length - 1)) {
        this.arrayMove(this.destData, pos, pos + 1);
      }
    }
    this.destgrid.refresh();
    // setTimeout(() => {
    //   console.log(this.getData());
    // }, 100);
  }

  arrayMove(arr, oldIndex, newIndex) {
    if (newIndex >= arr.length) {
      var k = newIndex - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr; // for testing
  };

  removeElemFromArray(array, value) {
    for (var j = array.length - 1; j >= 0; j--) {
      if (array[j]['interPreterName'] === value) {
        array.splice(j, 1);
      }
    }
  }

  rowDropSrcHandler(event) {
    for (let i = 0, len = event.data.length; i < len; i++) {
      this.removeElemFromArray(this.srcData, event.data[i]['interPreterName']);
    }
    this.grid.refresh();
    // setTimeout(() => {
    //   console.log(this.getData());
    // }, 100);
  }

  rowDropDestHandler(event) {
    for (let i = 0, len = event.data.length; i < len; i++) {
      this.removeElemFromArray(this.destData, event.data[i]['interPreterName']);
    }
    this.destgrid.refresh();
    // setTimeout(() => {
    //   console.log(this.getData());
    // }, 100);
  }

  getSelectedRow(idName) {
    const selectedArr = document.querySelectorAll('#' + idName + ' .e-row>td.e-active');
    const tempArr = [];
    for (let i = 0, len = selectedArr.length; i < len; i++) {
      tempArr.push(selectedArr[i]['innerText']);
    }
    return tempArr;
  }

  getData() {
    const a = document.querySelectorAll('#DestGrid .e-row');
    const tempArr = [];
    for (let i = 0, len = a.length; i < len; i++) {
      tempArr.push(a[i]['innerText']);
    }
    return tempArr;
  }

}
