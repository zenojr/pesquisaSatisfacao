import { PesquisaReactiveServiceService } from './pesquisa-reactive-service.service';
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

  constructor(private formBuilder: FormBuilder, private pesqReacService: PesquisaReactiveServiceService) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      user: [''],
      resposta: ['']
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['']
    });

  }

  save() {
    const user = this.firstFormGroup.get('user').value;
    const resposta = this.firstFormGroup.get('resposta').value;
    this.pesqReacService.add({user, resposta});
  }


}
