import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamp';
  // tslint:disable-next-line: use-lifecycle-interface
  public ngOnInit()
  {
    $(document).ready(function(){
      var scrollLink = $('.scroll');
      scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
          scrollTop : $(this.hash).offset().top
        },2000)
      });
    });
  }
}

