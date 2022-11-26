import { Component, Input, OnInit } from '@angular/core';

const DEFAULT_ICON = 'assets/icons/mytp_logo.svg';
const DEFAULT_COLOR = '#EDEAEF';
const DEFAULT_SIZE = 84;
const DEFAULT_ICON_SIZE = 56;

type NullishString = string | null | undefined;
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() icon: NullishString;
  @Input() bgBase: NullishString;
  @Input() bgAccent: NullishString;
  @Input() pinned?: number = 0;
  @Input() size: number = DEFAULT_SIZE;

  iconSize: number = DEFAULT_ICON_SIZE;
  colors: { [key: string]: string } = {};

  ngOnInit(): void {
    this.iconSize = this.size * 0.56;
    this.bgBase = this.bgBase ?? DEFAULT_COLOR;
    this.bgAccent = this.bgAccent ?? this.bgBase;
  }

  handleErrorImage() {
    this.icon = DEFAULT_ICON;
  }
}