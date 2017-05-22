import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    'selector': 'search-box',
    'template': `
        <div class="">
            <input type="text" #input (input)="update.emit(input)">
        </div>
        
    `
})

export class SearchBox implements OnInit{
    @Output() update = new EventEmitter<any>();

    ngOnInit() {
        this.update.emit('');
    }

}
