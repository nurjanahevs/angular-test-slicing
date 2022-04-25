import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  // tiles: Tile[] = [
  //   {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
