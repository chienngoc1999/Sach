import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  ImagePath1: string;
  ImagePath2: string;
  ImagePath3: string;
  ImagePath4: string;
  items = Array.from({length: 10}).map((_, i) => `Tên sách review ${i}`);
  constructor() {
    this.ImagePath1 = 'assets/images/anh1.jpg';
    this.ImagePath2 = 'assets/images/anh2.jpg';
    this.ImagePath3 = 'assets/images/anh3.jpg';
    this.ImagePath4 = 'assets/images/anh4.jpg';

  }

  ngOnInit(): void {
  }

}
