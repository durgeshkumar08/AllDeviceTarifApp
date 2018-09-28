import { Component, OnInit } from '@angular/core';
import { TarifService } from '../../services/tarif.service';
import { Tarif } from '../../models/tarif';

@Component({
  selector: 'app-tarif-detail',
  templateUrl: './tarif-detail-desktop.component.html',
  styleUrls: ['./tarif-detail-desktop.component.scss']
})
export class TarifDetailDesktopComponent implements OnInit {
  tarifs: Tarif[];
  constructor(private tarifService: TarifService) { }

  ngOnInit() {
    this.tarifService.getTarifInformation().subscribe( x => {
      this.tarifs = x;
      console.log('Total no of tarifs returned is ' + this.tarifs);
    });
  }

}
