import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-isidata',
  templateUrl: './isidata.page.html',
  styleUrls: ['./isidata.page.scss'],
})
export class IsidataPage implements OnInit {
  dataPembeli = {
    nama: '',
    alamat: '',
    nohp: '',
    pos: '',
  };
  constructor(private router: Router,
              private utils: UtilsService
              ) { }

  ngOnInit() {
  }
  pembayaran(){
    console.log(this.dataPembeli);
    this.utils.showToast('Pesanan anda telah berhasil dipesan');
    this.router.navigate(['/booking']);

  }
}
