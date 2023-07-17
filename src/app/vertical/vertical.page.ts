import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.page.html',
  styleUrls: ['./vertical.page.scss'],
})
export class VerticalPage implements AfterViewInit {

  constructor(private router: Router) { }
  divs = [
    { value: 200, corredor: 1, color: 'red'},
    { value: 100, corredor: 2, color: 'green'},
    { value: 50, corredor: 3, color: 'blue'},
    { value: 150, corredor: 4, color: 'yellow'},
    { value: 123, corredor: 5, color: 'white'},
  ]
  animation!: any
  ngAfterViewInit(): void {
    const value = [200,100,50,150,123]
    const elements = document.querySelectorAll('.miElemento')
    this.animation = anime({
      targets: elements,
      translateY: (el: any, i: number) => 300 - value[i],
      duration: 1000,
      loop: false,
      autoplay: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    })
  }

  horizontal(){
    this.router.navigateByUrl('home')
  }

  

}
