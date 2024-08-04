export class User{
  id: number;
  name: String;
  creditNumber: number;
  pago: number;
  beneficios: boolean

  constructor(id: number, name: String, creditNumber: number, pago: number, beneficios: boolean){
    this.id = id;
    this.name = name;
    this.creditNumber = creditNumber;
    this.pago = pago
    this.beneficios = beneficios
  }
}
