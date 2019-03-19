import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-pesquisa-reactive-form',
  templateUrl: './pesquisa-reactive-form.component.html',
  styleUrls: ['./pesquisa-reactive-form.component.css']
})
export class PesquisaReactiveFormComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      perguntas: this.formBuilder.array([
        this.formBuilder.control('')
      ])

    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  get perguntas() {
    return this.firstFormGroup.get('perguntas') as FormArray;
  }

  addPerguntas() {
    this.perguntas.push(this.formBuilder.control(''));
  }


}
