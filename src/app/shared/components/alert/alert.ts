
export class Alert{
  //com o readonly não é possível modificar o objeto
  constructor(public readonly alertType: AlertType, public readonly message: string){
  }
}
export enum AlertType{
  SUCCESS,
  WARNING,
  DANGER,
  INFO
}
