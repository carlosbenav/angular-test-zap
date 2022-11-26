import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  default: any = {
    link: 'https://google.com',
    ColorBase: '#FF0082',
    marcado: 'fav',
  };

  @Input() isFavoriteCard = false;
  @Input() data: any = this.default;

  @Output() pinned = new EventEmitter<number>();
  @Output() checked = new EventEmitter<boolean>();
  @Output() clicked = new EventEmitter<any>();

  state = 0;
  isHovered = false;
  isMenuOpen = false;
  cardColors = {};

  ngOnInit(): void {
    const baseColor = this.data.ColorBase || this.default.ColorBase;
    
    this.cardColors = {
      '--app-color': baseColor,
      '--app-new-color': baseColor + '14',
      '--app-hov-color': baseColor + '33',
      '--app-ribbon-color': baseColor + '55',
    };
  }

  flipCard(): void {
    this.state = this.state === 0 ? 1 : 0;
  }

  setPin(pinned: number) {
    if (this.data.pinned !== pinned) {
      this.data.pinned = pinned;
      this.pinned.emit(pinned);
    }
  }

  setCheck() {
    this.data.isFavorite = !this.data.isFavorite;
    this.checked.emit(this.data.isFavorite);
  }
}