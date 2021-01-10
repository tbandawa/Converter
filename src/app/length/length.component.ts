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

  convertForm: FormGroup
  outputValue: number
  inputValue: number

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.convertForm = this.formBuilder.group({
      inputValue: [null, Validators.required],
      outputValue: [null, Validators.required],
      fromUnit: [null, Validators.required],
      toUnit: [null, Validators.required]
    });
  }

  onSelection(){
    this.inputChange()
    this.outputChange()
  }

  inputChange() {
    var inputValue = this.convertForm.value.inputValue
    var fromUnit = this.convertForm.value.fromUnit
    var toUnit = this.convertForm.value.toUnit
    if(inputValue != null && fromUnit != null && toUnit != null) {
      var inputUnit = this.lengths.filter(l => l.unit === fromUnit)
      var outputUnit = this.lengths.filter(l => l.unit === toUnit)
      var output = this.convertLength(inputUnit[0].value, outputUnit[0].value, inputValue)
      this.outputValue = output
    }
  }

  outputChange() {
    var outputValue = this.convertForm.value.outputValue
    var fromUnit = this.convertForm.value.fromUnit
    var toUnit = this.convertForm.value.toUnit
    if(outputValue != null && fromUnit != null && toUnit != null) {
      var inputUnit = this.lengths.filter(l => l.unit === fromUnit)
      var outputUnit = this.lengths.filter(l => l.unit === toUnit)
      var input = this.convertLength(outputUnit[0].value, inputUnit[0].value, outputValue)
      this.inputValue = input
    }
  }

  convertLength(inUnit: number, outUnit: number, value: number) : number {
    return ((value/inUnit)*outUnit)
  }

}
