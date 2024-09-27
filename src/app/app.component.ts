import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { AppBuilderComponent } from '@infragistics/appbuilder-sdk';
import { AppBuilderComponent1 } from "./app-builder/app-builder.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, IGX_NAVBAR_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink, RouterOutlet, AppBuilderComponent1],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
}
