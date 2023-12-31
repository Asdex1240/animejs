import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  divs = [
    { value: 200, corredor: 1, color: 'red'},
    { value: 100, corredor: 2, color: 'green'},
    { value: 50, corredor: 3, color: 'blue'},
    { value: 150, corredor: 4, color: 'yellow'},
    { value: 123, corredor: 5, color: 'white'},
  ]
  constructor(private router: Router) {}
  animation!: any
  ngAfterViewInit(): void {
    const value = [200,100,50,150,123]
    const elements = document.querySelectorAll('.miElemento')
    this.animation = anime({
      targets: elements,
      width: '100%',
      duration: function(el, i){
        return value[i] * 10
      },
      loop: false,
      autoplay: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    })
  }

  vertical(){
    this.router.navigateByUrl('/vertical')
  }
}
