import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  form= new FormGroup({
    nombre:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required])
    });

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  obtenerError(){
    var nom=this.form.get('nombre');
    var pass=this.form.get('password');
    if(nom?.hasError('required')){
      return 'El campo nombre es requerido'
    }
  }

  guardarUsuario(){
    console.log('Registro Guardado');
  }
}
