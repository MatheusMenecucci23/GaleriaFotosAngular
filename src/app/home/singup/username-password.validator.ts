import { ValidatorFn, FormGroup } from "@angular/forms";

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
    const userName = formGroup.get('userName').value;
    const password = formGroup.get('password').value;
    if(userName.trim() + password.trim()) {//se os dois campos somados estiverem em branco  então não faça a validação
      return userName != password
      ? null
      : { userNamePassword: true };
    } else {
      return null;
     }
};
