import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Converter'
  page = 1

  constructor(private router: Router ) {  }
  
  handleChange() {
    if(this.page == 1) {
      this.router.navigate([''])
    } else {
      this.router.navigate(['length'])
    }
  }

}
