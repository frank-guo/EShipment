import { OrderStatus } from './orderStatus';

export class Order {
  id: number;
  applicationUser_Id: string;
  number: string;
  companyName: string;
  mark: string;
  containerNumber: string;
  destination: string;
  dischargedPort: string;
  blNumber: string;
  etd: Date;
  eta: Date;
  numOfGoods: number;
  weight: number;
  measurement: number;
  productDescription: string;
  statuses: OrderStatus[];
  receiveOrderDate: Date;
  constructor();
  constructor(number: string, companyName: string, mark: string, containerNumber: string, destination: string,
    dischargedPort: string, blNumber: string, etd: Date, ETA: Date, numOfGoods: number, weight: number,
    measurement: number, productDescription: string, statuses: OrderStatus[], receiveOrderDate: Date);
  constructor(number?: string, companyName?: string, mark?: string, containerNumber?: string, destination?: string,
    dischargedPort?: string, blNumber?: string, etd?: Date, eta?: Date, numOfGoods?: number, weight?: number,
    measurement?: number, productDescription?: string, statuses?: OrderStatus[], receiveOrderDate?: Date) {
    this.number = number;
    this.companyName = companyName;
    this.mark = mark;
    this.containerNumber = containerNumber;

    this.destination = destination;
    this.dischargedPort = dischargedPort;
    this.blNumber = blNumber;
    this.etd = etd;

    this.eta = eta;
    this.numOfGoods = numOfGoods;
    this.weight = weight;
    this.measurement = measurement;

    this.productDescription = productDescription;
    this.statuses = statuses;
    this.receiveOrderDate = receiveOrderDate;
  }
}
