export class Student {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dob: string;
  gender: string;
  qualification: string;
  language: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
