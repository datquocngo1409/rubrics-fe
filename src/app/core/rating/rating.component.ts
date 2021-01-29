import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'ms-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
    @Input() rating: number;
    @Input() isReadonly: boolean;
    @Input() fontSize: number;
    @Input() itemId: number;
    @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

    inputName: string;

    constructor() {
    }

    ngOnInit(): void {
        if (this.fontSize === null) {
            this.fontSize = 14;
        }
        this.inputName = this.itemId + '_rating';
        this.rating = parseInt(String(this.rating), 10)
    }

    onClick(rating: number): void {
        if (this.isReadonly === false) {
            this.rating = rating;
            this.ratingClick.emit({
                itemId: this.itemId,
                rating: rating
            });
        }
    }

    getFontSize() {
        return 'font-size: ' + this.fontSize + 'px';
    }
}
