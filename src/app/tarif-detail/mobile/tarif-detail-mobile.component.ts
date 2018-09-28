import { Component, OnInit } from '@angular/core';
import { Tarif } from '../../models/tarif';
import { TarifService } from '../../services/tarif.service';

@Component({
  selector: 'app-tarif-detail',
  templateUrl: './tarif-detail-mobile.component.html',
  styleUrls: ['./tarif-detail-mobile.component.scss']
})
export class TarifDetailMobileComponent implements OnInit {
  tarifs: Tarif[];
  constructor(private tarifService: TarifService) { }

  ngOnInit() {
    this.tarifService.getTarifInformation().subscribe( x => {
      this.tarifs = x;
      console.log('Total no of tarifs returned is ' + this.tarifs);
    });
  }
}
