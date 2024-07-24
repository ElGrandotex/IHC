export class User{
  id: number;
  name: String;
  creditNumber: number;
  pago: number;

  constructor(id: number, name: String, creditNumber: number, pago: number){
    this.id = id;
    this.name = name;
    this.creditNumber = creditNumber;
    this.pago = pago
  }
}
