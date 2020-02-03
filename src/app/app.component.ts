import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Show, TvmazeService } from 'tvmaze';

//import { IonButton } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show$: Observable<Show>;

  constructor(
    private tvmaze: TvmazeService,
    //private ionButton: IonButton
  ) { }

  title = 'angular-libraries';
  //
  public innerWidth: any;

  ngOnInit() {
    this.show$ = this.tvmaze.getShow(336);

    this.innerWidth = window.innerWidth;
    console.log('ancho', this.innerWidth);
  }
}

/*
crear librerias

https://www.competa.com/blog/angular-6-create-a-module-that-can-be-installed-with-npm/
https://medium.com/@esanjiv/complete-beginner-guide-to-publish-an-angular-library-to-npm-d42343801660
https://github.com/mrsan22/NgxMatTypeahead
https://angular.io/guide/creating-libraries
https://blog.angulartraining.com/create-your-own-libraries-with-angular-cli-7b434600bbb7

https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11
https://github.com/sulco/angular-lib-demo

workspace
https://devdactic.com/ionic-multi-app-shared-library/

angular and ionic
https://stackoverflow.com/questions/55330085/create-ionic-4-app-inside-angular-cli-projects-structure

tamano de pantalla
https://stackoverflow.com/questions/45350716/detect-window-size-using-angular-4
https://scotch.io/tutorials/detect-responsive-screen-sizes-in-angular

routing condicional
https://stackoverflow.com/questions/34660263/angular2-conditional-routing
*/