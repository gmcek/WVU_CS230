import { Component, OnInit } from '@angular/core';
import { mock_lists } from './mock-lists';
import { listService } from './list.service';
import { Card } from './list.model';

@Component({
    selector: 'app-etsy-list',
    templateUrl: './list-test.component.html'
})

export class TestListComponent implements OnInit {
    cards:Card[] = [];

    constructor (private ListService: listService){

    }

    ngOnInit(): void {
        this.ListService.getList().subscribe(data => {
            console.log(data);
            for (var item in data){
                console.log(data[item]);
                this.cards.push(new Card(data[item]))
              }
        })
    }
}