import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sach';
  dataset: any = ['Sách nói', 'Sách chữ', 'Tác giả', 'Tên sách'];
}
