export class Tarif {
    name: string;
    downloadSpeed: number;
    uploadSpeed: number;
    talkTime: number;
    contractLength: number;
    benefits: string[];
    price: number;

    constructor(name: string, downloadSpeed: number, uploadSpeed: number,
        talkTime: number, contractLength: number, benefits: string[], price: number) {
            this.name = name;
            this.downloadSpeed = downloadSpeed;
            this.uploadSpeed = uploadSpeed;
            this.talkTime = talkTime;
            this.contractLength = contractLength;
            this.benefits = benefits;
            this.price = price;
    }
}