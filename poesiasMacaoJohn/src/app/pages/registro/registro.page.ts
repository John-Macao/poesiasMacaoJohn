import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poesia } from 'src/app/domain/poesias';
import { PoesiasService } from 'src/app/services/poesias.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Poesia = new Poesia();

  constructor(private router: Router, private servicioPoesia: PoesiasService ) { }

  ngOnInit() {
  }

  regresarP(){
    this.router.navigate(['/principal'])
  }

  guardar(){
    console.log("llega medtodo guardar");
    this.servicioPoesia.save(this.usuario);
    console.log("Finaliza metodo guardar");
    this.router.navigate(['/principal'])
  }

}
