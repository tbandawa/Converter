import { Component, OnInit } from '@angular/core'
import { Length } from '../core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {

  lengths: Length[] = [
    {value: 0.001, unit: 'm'},
    {value: 0.0010936133333333334, unit: 'yd'},
    {value: 0.03937008, unit: 'in'}
  ];

  submitted = false
  addForm: FormGroup
  selectLengthOne: string
  inputLengthOne: number
  selectLengthTwo: string
  inputLengthTwo: number

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      mmValue: [null, Validators.required],
      unitValue: [null, Validators.required]
    });
  }

  get f() { 
    return this.addForm.controls 
  }

  onLengthOneSelection() {
    this.onLengthTwoInput()
  }

  onLengthTwoSelection() {
    this.onLengthOneInput()
  }

  onLengthOneInput() {
    if(this.inputLengthOne != null && this.selectLengthOne != null && this.selectLengthTwo != null) {
      var unitOne = this.lengths.filter(l => l.unit === this.selectLengthOne)
      var unitTwo = this.lengths.filter(l => l.unit === this.selectLengthTwo)
      var output = this.convertLength(unitOne[0].value, unitTwo[0].value, this.inputLengthOne)
      this.inputLengthTwo = Number(output.toFixed(3))
    }
  }

  onLengthTwoInput() {
   if(this.inputLengthTwo != null && this.selectLengthOne != null && this.selectLengthTwo != null) {
      var unitOne = this.lengths.filter(l => l.unit === this.selectLengthOne)
      var unitTwo = this.lengths.filter(l => l.unit === this.selectLengthTwo)
      var input = this.convertLength(unitTwo[0].value, unitOne[0].value, this.inputLengthTwo)
      this.inputLengthOne = Number(input.toFixed(3))
    }
  }

  convertLength(inUnit: number, outUnit: number, value: number) : number {
    return ((value/inUnit)*outUnit)
  }

  submit() {
    this.submitted = true;
    if (this.addForm.invalid)
      return
    var mm = this.addForm.value.mmValue
    var unit = this.addForm.value.unitValue
    this.lengths.push({value: mm, unit: unit})
  }

}
