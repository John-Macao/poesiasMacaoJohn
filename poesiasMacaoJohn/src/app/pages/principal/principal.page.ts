import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PoesiasService } from 'src/app/services/poesias.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  poesias: any;

  constructor(private router: Router, private route: ActivatedRoute, private servicioPoesia: PoesiasService ) { }

  ngOnInit() {
    console.log("llega 1");
    this.poesias = this.servicioPoesia.getContactos();
    console.log(this.poesias);
    
  }

  crear(){
    this.router.navigate(['/registro'])
  }

  comentar(comentario: any){
    console.log("llega metodo comentar")
    let params: NavigationExtras = {
      queryParams: {
        poesias: comentario
      }
    }
  
    this.router.navigate(['/comentario'], params)
    console.log("termina paso parametros", params);
    
  }

}
