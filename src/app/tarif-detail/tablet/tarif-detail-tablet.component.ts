import { Component, OnInit } from '@angular/core';
import { Tarif } from '../../models/tarif';
import { TarifService } from '../../services/tarif.service';

@Component({
  selector: 'app-tarif-detail',
  templateUrl: './tarif-detail-tablet.component.html',
  styleUrls: ['./tarif-detail-tablet.component.scss']
})
export class TarifDetailTabletComponent implements OnInit {
  tarifs: Tarif[];
  constructor(private tarifService: TarifService) { }

  ngOnInit() {
    this.tarifService.getTarifInformation().subscribe( x => {
      this.tarifs = x;
      console.log('Total no of tarifs returned is ' + this.tarifs);
    });
  }
}
