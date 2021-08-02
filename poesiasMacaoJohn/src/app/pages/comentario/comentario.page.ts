import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poesia } from 'src/app/domain/poesias';
import { PoesiasService } from 'src/app/services/poesias.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.page.html',
  styleUrls: ['./comentario.page.scss'],
})
export class ComentarioPage implements OnInit {

  poesia: Poesia = new Poesia();
  usuario: Poesia = new Poesia();

  constructor(private router: Router, private route: ActivatedRoute, private servicioPoesia: PoesiasService) {
    route.queryParams.subscribe(params => {console.log("parametros llegan a editar" , params)
      //this.contacto = new Contacto();
      this.poesia = params.poesia
      console.log("llega 2")
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.poesia = this.router.getCurrentNavigation().extras.queryParams.poesia
        
      }

    })
   }

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
