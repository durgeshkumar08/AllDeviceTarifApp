import { FakeDataService } from './fake-data-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarif } from '../models/tarif';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  constructor(private fakeDataService: FakeDataService) { }

  public getTarifInformation(): Observable<Tarif[]> {
    // Return stub data as Observable to stub a service call
    return of(this.fakeDataService.getFakeTarifData());
  }
}
