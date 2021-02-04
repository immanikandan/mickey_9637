import { Component, OnInit } from '@angular/core';
import { GetallscreenService } from './getallscreen.service';

@Component({
  selector: 'app-getallscreen',
  templateUrl: './getallscreen.component.html',
  styleUrls: ['./getallscreen.component.scss'],
})

export class GetallscreenComponent implements OnInit {
    columnDefs: any = [{ headerName: 'titleID', field: 'titleID'  },{ headerName: 'title', field: 'title'  },{ headerName: 'description', field: 'description'  },];
    public who = {
        titleID: '',
        title: '',
        description: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private getallscreenService: GetallscreenService,
    ) { }

    ngOnInit() {
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}