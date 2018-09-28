import { Tarif } from "../models/tarif";

export class FakeDataService {
    benefits1 = ['Unlimited Incoming Calling', 'Auto renew option', 'Device Insurence'];
    benefits2 = ['Unlimited Incoming Calling', 'Auto renew option', 'Device Insurence', 'Free Device Upgrade']
    public getFakeTarifData(): Tarif[] {
        return new Array(
            new Tarif('Freedom Unlimited+', 50, 10, 4400, 12, this.benefits2, 55),
            new Tarif('Freedom Unlimited', 50, 10, 2200, 12, this.benefits2, 45),
            new Tarif('Everyday Value', 20, 5, 2200, 24, this.benefits1, 35),
            new Tarif('Unlimited Talktime', 10, 2, 5500, 24, this.benefits1, 33),
            new Tarif('Essentials', 10, 2, 1500, 15, this.benefits1, 25)
        )
    }
}