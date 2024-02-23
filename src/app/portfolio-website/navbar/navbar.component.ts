import { Component } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 constructor(public router:Router){

 }
 onHome(){
this.router.navigate(['./portfolio-website/home'])
 }
 onContact(){
  this.router.navigate(['./portfolio-website/contact'])
 }
 onAbout(){
  this.router.navigate(['./portfolio-website/about'])
 }
 onSkills(){
const skillSelection=document.getElementById('skills-section')
if(skillSelection){
  skillSelection.scrollIntoView({behavior:'smooth',block:'start'})
}//btkhale yenze la tht lama e3ml click 3l navigation 
 }
}
