import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
  standalone: true,
  imports:[MatToolbarModule, MatButtonModule, MatIconModule],
})
export class TesteComponent {

 public nome: string = "McQueen";

}
