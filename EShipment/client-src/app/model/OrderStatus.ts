export class OrderStatus {
  id: number;
  date: string;
  description: string;
  constructor();
  constructor(id: number, date: string, description: string);
  constructor(id?: number, date?: string, description?: string) {
    this.id = id;
    this.date = date;
    this.description = description;
  }
}
