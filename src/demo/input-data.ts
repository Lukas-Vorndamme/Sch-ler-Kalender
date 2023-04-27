export class InputData {
  public text: string;

  isOpen: boolean = false;
}
class MyInputData extends InputData {
  isOpen = false;
}

function main() {
  const inputData = new MyInputData();
  inputData.isOpen = true;
  inputData.text = 'I am an input';

  console.log(inputData);
}