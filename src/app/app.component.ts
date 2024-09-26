import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { AppBuilderComponent } from '@infragistics/appbuilder-sdk';
import { AppBuilderComponent1 } from "./app-builder/app-builder.component";
// import { TranslatePipe } from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IGX_NAVBAR_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink, RouterOutlet, AppBuilderComponent1],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [TranslatePipe],
})
export class AppComponent {
  // private cdr: ChangeDetectorRef;
  
  // constructor(cdr: ChangeDetectorRef) {
  //   this.cdr = cdr;
  // }

  // ngOnInit() {
  //   this.cdr.detectChanges();
  // }
  
  //  ngOnInit() {
  //   // Pass the ChangeDetectorRef to the SDK service when the component initializes
  //   this.sdkService.setChangeDetectorRef(this.cdr);

  //   // Use the SDK in your component logic
  //   this.sdkService.updateDataFromSdk();
  // }
}
