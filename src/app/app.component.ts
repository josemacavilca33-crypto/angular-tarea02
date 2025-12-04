import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ListComponent } from "./pages/doctor/list/list.component";
import { HeaderComponent } from "./shared/header/header.component";
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tarea02';
   listPosts : any;
 
constructor(private service: PostService){
    console.log('Constructor ' + this.title)
  }

  ngOnInit(): void {
    console.log('OnInit');

    this.service.getPosts().subscribe(response => {
      console.log('response', response)
      this.listPosts = response;

    })





}

}
