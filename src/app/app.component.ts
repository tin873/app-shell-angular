import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleSpaService } from 'src/services/single-spa.service';
import { mountRootParcel, Parcel, ParcelConfig } from 'single-spa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Thời trang thế giới';
  name: string = "";
  @ViewChild('microfrontendContainer', { static: true }) microfrontendRef!: ElementRef;
  constructor(private singleSpaService: SingleSpaService) { }


  ngOnInit() {
    // this.mountReactMicroFE();
    // this.mountElement1().subscribe();
    this.mountMicrofrontend();
    // const script = document.createElement('script');
    // script.src = 'http://localhost:8080/org1-react-app.js';
    // document.head.appendChild(script);

  }

  @ViewChild('appContainer1', { static: true })
  appContainerRef1: ElementRef;
  mountElement1(): Observable<unknown> {
    return this.singleSpaService.mount('child1', this.appContainerRef1.nativeElement);
  }

  // private mountReactMicroFE(): void {
  //   const script = document.createElement('script');
  //   script.src = 'http://localhost:8080/org1-react-app.js'; // Path to the React micro-frontend bundle
  //   script.async = true;
  //   script.onload = () => {
  //     // The React micro-frontend bundle has been loaded, so you can mount it now
  //     if (typeof (window as any).mount === 'function') {
  //       (window as any).mount('reactTest');
  //     } else {
  //       console.error('Mount function not found in the React micro-frontend bundle.');
  //     }
  //   };
  //   document.body.appendChild(script);
  // }
  mountMicrofrontend() {
    // System.import('http://localhost:8080/org1-react-app.js')
    //   .then((app) => {
    //     const appReact = app;
    //     console.log(appReact)
    //     debugger;
    //     const parcelMountOptions = {
    //       domElement: this.microfrontendRef.nativeElement,
    //     };
    //     const angularLifecycles = mountRootParcel(app.default, parcelMountOptions);
    //     angularLifecycles.mountPromise.then(() => {
    //       console.log('Microfrontend React App mounted successfully');
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Failed to load microfrontend', error);
    //   });
    System.import('http://localhost:8080/org1-react-app.js')
      .then((appModule) => {
        // const app = appModule.default;
        // const parcelConfig = {
        //   bootstrap: app.bootstrap,
        //   mount: app.mount,
        //   unmount: app.unmount,
        // };

        // const parcelMountOptions = {
        //   domElement: this.microfrontendRef.nativeElement,
        // };

        // const angularLifecycles = mountRootParcel(parcelConfig, { ...parcelMountOptions });
        // angularLifecycles.mountPromise.then(() => {
        //   console.log('Microfrontend React App mounted successfully');
        // });
      })
      .catch((error) => {
        console.error('Failed to load microfrontend', error);
      });
  }
}
