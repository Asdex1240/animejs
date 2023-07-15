import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{
  divs = [
    { value: 200, corredor: 1},
    { value: 100, corredor: 2},
    { value: 50, corredor: 3},
    { value: 150, corredor: 4},
    { value: 123, corredor: 5},
  ]
  constructor() {}
  animation!: any
  ngAfterViewInit(): void {
    const value = [200,100,50,150,123]
    const elements = document.querySelectorAll('.miElemento')
    this.animation = anime({
      targets: elements,
      width: '100%',
      duration: 1000,
      loop: false,
      delay: function(el, i){
        return value[i]
      },
      autoplay: false,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    })
  }

}
