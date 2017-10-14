import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HardPage } from '../hard/hard';
import { NormalPage } from '../normal/normal';
import { EasyPage } from '../easy/easy';


@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.getBestScore();
  }
  helpEasy: boolean = false;
  helpNormal: boolean = false;
  helpHard: boolean = false;
  helpDoom: boolean = false;

  recordEasy: number;
  recordNormal: number;
  recordHard: number;

  toggleHelp(difficulty: string){
    switch(difficulty) {
      case "easy": {
        this.helpEasy = !this.helpEasy;
        break;
      }
      case "normal": {
        this.helpNormal = !this.helpNormal;
        break;
      }
      case "hard": {
        this.helpHard = !this.helpHard;
        break;
      }
      case "doom": {
        this.helpDoom = !this.helpDoom;
        break;
      }
    }
  }

  getBestScore(): void {
    this.storage.get('bestScoreEasy').then((val: number) => {
      this.recordEasy = val;
    });
    this.storage.get('bestScoreNormal').then((val: number) => {
      this.recordNormal = val;
    });
    this.storage.get('bestScoreHard').then((val: number) => {
      this.recordHard = val;
    });
  }

  @ViewChild(Slides) slides: Slides;
  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  goToEasyPage(): void {
    this.navCtrl.push(EasyPage, { "parentPage": this });
  }
  goToNormalPage(): void {
    this.navCtrl.push(NormalPage, { "parentPage": this });
  }
  goToHardPage(): void {
    this.navCtrl.push(HardPage, { "parentPage": this });
  }

  ngOnInit(): void {
    this.getBestScore();
  }
}
