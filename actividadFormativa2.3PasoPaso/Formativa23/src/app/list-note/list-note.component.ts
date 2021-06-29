import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent {

    resultado!: string;
    presentacion!:number;
    final!:number;

    formulario = new FormGroup({
      rut: new FormControl(''),
      nombre: new FormControl(''),
      notas: new FormGroup({
        nota1: new FormControl(''),
        nota2: new FormControl(''),
        nota3: new FormControl(''),
        nota4: new FormControl(''),
        examen: new FormControl('')
      })
    })

    enviar(){
      let nota1 = parseInt(this.formulario.value.notas.nota1);
      let nota2 = parseInt(this.formulario.value.notas.nota2);
      let nota3 = parseInt(this.formulario.value.notas.nota3);
      let nota4 = parseInt(this.formulario.value.notas.nota4);
      let examen = parseInt(this.formulario.value.notas.examen);
      this.presentacion = (nota1+nota2+nota3+nota4)/4
      this.final = this.presentacion*0.7 + examen*0.3

      console.log(nota1,nota2,nota3,nota4,examen)
      if(nota1 < 4 || nota2<4 || nota3<4 || nota4 <4 || examen<4 || this.presentacion<4 || this.final<4){
        this.resultado = "Reprobado"
      }
      else{
        this.resultado = "Aprobado"
      }
    }

}
