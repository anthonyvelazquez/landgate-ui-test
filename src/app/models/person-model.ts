export class PersonModel {

  public firstName: string;
  public lastName: string;
  public age: number;
  public jobTitle: string;

  constructor(dataIn: {firstName: string, lastName: string, age: string, workTitle: string}) {
    this.firstName = dataIn.firstName;
    this.lastName = dataIn.lastName;
    this.age = Number(dataIn.age);
    this.jobTitle = dataIn.workTitle;
  }
}
