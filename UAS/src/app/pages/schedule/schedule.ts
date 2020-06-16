import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { UtilsService } from '../services/utils.service';
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage {
  listProducts = [];

  constructor(private router: Router,
              private utils:UtilsService) {
    }

  ngOnInit(){

  }   
   
   pesan(data) {
     console.log('Anda Harus Login Terlebih Dahulu untuk Melanjutkan proses pemesanan' );
     this.utils.showToast('Anda Harus Login Terlebih Dahulu untuk Melanjutkan proses pemesanan');
      this.router.navigate(['/login']);
    }

  }
