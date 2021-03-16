import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  
    var r = 0;
//variable para saber de cuantas imagenes sera cada renglon
const n=3;
var j = n;
var urls = ['../assets/img/chikorita3d.jpg','../assets/img/chikorita.jpg','../assets/img/terraria.png','../assets/img/hulk.png'
,'../assets/img/purpleDragon.jpg', '../assets/img/gtaicon.png','../assets/img/terraria1.png','../assets/img/chikorita3d.jpg','../assets/img/chikorita.jpg','../assets/img/terraria.png','../assets/img/hulk.png'
,'../assets/img/purpleDragon.jpg', '../assets/img/gtaicon.png','../assets/img/terraria1.png'];


urls.forEach(function(url){
			
  //verificamos si el numero de imagenes ya llego a n
  if(r==j){
    //getElementById llama a un objeto dentro de la pagina, mediante el id
    //.innertHTML sirve para insertar texto html directamente desde javascrip
  document.getElementById('galeria').innerHTML +='<div>';
      }
document.getElementById('galeria').innerHTML +='<img src='+url+' class=imagen>';
//contador de imagenes
r++;
//se cierra el renglon de las imagenes
if(r==(j+n)){
  document.getElementById('galeria').innerHTML +='</div>';
  j+=n;
      }
    }
);	
  }

};