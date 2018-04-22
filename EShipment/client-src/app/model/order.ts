import { OrderStatus } from './orderStatus';

export class Order {
  number: string;
  companyName: string;
  mark: string;
  containerNumber: string;
  destination: string;
  dischargedPort: string;
  BLNumber: string;
  ETD: Date;
  ETA: Date;
  numOfGoods: number;
  weight: number;
  measurement: number;
  productDescription: string;
  statuses: OrderStatus[];
  receiveOrderDate: Date;
  constructor();
  constructor(number: string, companyName: string, mark: string, containerNumber: string, destination: string,
    dischargedPort: string, BLNumber: string, ETD: Date, ETA: Date, numOfGoods: number, weight: number,
    measurement: number, productDescription: string, statuses: OrderStatus[], receiveOrderDate: Date);
  constructor(number?: string, companyName?: string, mark?: string, containerNumber?: string, destination?: string,
    dischargedPort?: string, BLNumber?: string, ETD?: Date, ETA?: Date, numOfGoods?: number, weight?: number,
    measurement?: number, productDescription?: string, statuses?: OrderStatus[], receiveOrderDate?: Date) {
    this.number = number;
    this.companyName = companyName;
    this.mark = mark;
    this.containerNumber = containerNumber;

    this.destination = destination;
    this.dischargedPort = dischargedPort;
    this.BLNumber = BLNumber;
    this.ETD = ETD;

    this.ETA = ETA;
    this.numOfGoods = numOfGoods;
    this.weight = weight;
    this.measurement = measurement;

    this.productDescription = productDescription;
    this.statuses = statuses;
    this.receiveOrderDate = receiveOrderDate;
  }
}
