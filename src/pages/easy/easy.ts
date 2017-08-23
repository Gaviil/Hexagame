import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EasyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-easy',
  templateUrl: 'easy.html',
})
export class EasyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


    possible: Array<any> = [
    "AliceBlue","Aqua","Aquamarine","Azure","Beige","Black","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Grey","Green","GreenYellow","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGrey","LightSteelBlue","LightYellow","LimeGreen","Magenta","Maroon","MidnightBlue","Olive","Orange","OrangeRed","Orchid","PaleGreen","PaleTurquoise","PaleVioletRed","Pink","Purple","Red","RoyalBlue","SaddleBrown","Salmon","SeaGreen","Silver","SkyBlue","Snow","SpringGreen","SteelBlue","Teal","Tomato","Turquoise","Violet","White","WhiteSmoke","Yellow","YellowGreen"
    ];
    point: number = 0;
    nbColors: number[] = [2, 4, 6, 8];
    difficulty: number = 0;
    hexa: string = "#";
    goodColor: string ="";
    color: string;
    colors: Array<any> = [];
    fail: number = 0;
    testcolor: boolean;


    i: number = 0;
    k: number = 1;


    generateColorCode(){
      this.color = this.possible[Math.floor(Math.random() * this.possible.length)];
      return this.color;
    }

    setDifficulty(){
      if (this.point == 0 && this.point < 5)    return this.difficulty = 0;
      if (this.point >= 5 && this.point < 10)   return this.difficulty = 1;
      if (this.point >= 10 && this.point < 15)  return this.difficulty = 2;
      if (this.point >= 15)                     return this.difficulty = 3;
    }

    checkResponse(userChoice){
      if(userChoice != this.goodColor) return this.fail = 1;
      this.point++;
      this.ngOnInit();
    }
    checkColorArray(obj){
      for(let i = 0; i<=this.colors.length; i++) {
          if (this.colors[i] == obj){
            this.color = this.generateColorCode();
            this.checkColorArray(this.color);
          }
       }
    }
    ngOnInit(){
      if(this.fail == 1){
        this.point = 0;
        this.fail = 0;
      }

      this.colors = [];
      this.setDifficulty();

      for(this.k=1 ; this.k <= this.nbColors[this.difficulty] ; this.k++){

        this.color = this.generateColorCode();
        this.checkColorArray(this.color);
        if(this.testcolor){
          this.color = this.generateColorCode();
        }
        this.colors.push(this.color);
      }
      this.goodColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

}
