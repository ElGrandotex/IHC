export class User{
  id: number;
  name: String;
  creditNumber: number;
  cupo: number;
  pagoPendiente: number;
  beneficios: number

  constructor(id: number, name: String, creditNumber: number,cupo:number, pago: number, beneficios: number){
    this.id = id;
    this.name = name;
    this.creditNumber = creditNumber;
    this.cupo=cupo;
    this.pagoPendiente = pago
    this.beneficios = beneficios
  }
}
