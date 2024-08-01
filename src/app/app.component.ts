import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MatIcon, MatDrawerContainer, MatDrawer ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent implements OnInit {
  data = [
    {
      name: 'Контейнер таъмир холати',
      count: 1,
      price: 15000
    },
    {
      name: 'Диван',
      count: 4,
      price: 2000
    },{
      name: 'Гилам 2 та (3×2)',
      count: 1,
      price: 1500
    },{
      name: 'Стол, стул (4 кишилик)',
      count: 1,
      price: 2500
    },{
      name: 'Шкаф',
      count: 1,
      price: 1500
    },{
      name: 'Шкаф (кухонный)',
      count: 1,
      price: 1500
    },{
      name: 'Сув иситиш мосламаси (50 л)',
      count: 1,
      price: 2000
    },{
      name: 'Микропеч',
      count: 1,
      price: 2000
    },{
      name: 'Телевизор (32)',
      count: 1,
      price: 1500
    },{
      name: 'Холодилник',
      count: 1,
      price: 2000
    },{
      name: 'Сув насоси',
      count: 1,
      price: 1000
    },{
      name: 'Сув саклашга идиш (200 л)',
      count: 1,
      price: 150
    },{
      name: 'Кодиционер (12)',
      count: 1,
      price: 4200
    },{
      name: 'Бошка харажатлар',
      count: 1,
      price: 3000
    },
  ]
  ngOnInit() {
  }
}
