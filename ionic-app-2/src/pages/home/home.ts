import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';

/*import { NgForm } from '@angular/forms';*/

import { NavController } from 'ionic-angular';

import { ServiceProvider } from '../../providers/service-provider';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	cadastro: any= {}
  teste: any = {}
  	constructor(public navCtrl: NavController, public service : ServiceProvider, public formBuilder: FormBuilder) {
		this.cadastro = this.formBuilder.group({
			MAIL: ['', Validators.required],
			PASS: ['', Validators.required]
		})
    this.teste = this.formBuilder.group({
      POST_WEEAZY_TESTE: ['']
    })
  	}

  	postDados() {
            var data = JSON.stringify({MAIL: this.cadastro.value.MAIL, PASS: this.cadastro.value.PASS, PARTICIPANTE: 'teste@gmail.com'});
            this.teste.value = data;
            this.service.postData(this.teste.value)
                  .subscribe(
                        data=>{console.log(data.mensage);
                                
                        },
                        err=>console.log(err)
                  );
      }

}
