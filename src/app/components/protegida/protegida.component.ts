import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) { // Verifica si existe el usuario
      this.profile = this.auth.userProfile; // Si existe lo setea a la variable
      console.log(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {  // Si no ejecuta el callback
        this.profile = profile;
        console.log(this.profile);
      });
    }

  }

}
