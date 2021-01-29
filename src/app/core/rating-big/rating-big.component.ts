import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ms-rating-big',
  templateUrl: './rating-big.component.html',
  styleUrls: ['./rating-big.component.scss']
})
export class RatingBigComponent implements OnInit {
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
