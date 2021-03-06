import { Component, OnInit } from '@angular/core';
import { FirestorecrudService } from './firestorecrud.service';

@Component({
  selector: 'app-firestorecrud',
  templateUrl: './firestorecrud.component.html',
  styleUrls: ['./firestorecrud.component.scss'],
})

export class FirestorecrudComponent implements OnInit {
    public who = {
        titleID: '',
        title: '',
        description: '',
    }

    constructor (
        private firestorecrudService: FirestorecrudService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.firestorecrudService.GpCreate(this.who).subscribe(data => {
            this.who.titleID = ''
 	 	this.who.title = ''
 	 	this.who.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}