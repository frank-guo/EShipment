export class OrderStatus {
  date: Date;
  description: string;
  constructor();
  constructor(date: Date, description: string);
  constructor(date?: Date, description?: string) {
    this.date = date;
    this.description = description;
  }
}
