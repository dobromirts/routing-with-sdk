import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBuilderComponent } from '@infragistics/appbuilder-sdk';

import { IgxAvatarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-app-builder',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppBuilderComponent, IgxAvatarComponent],
  templateUrl: './app-builder.component.html',
  styleUrls: ['./app-builder.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,

})
export class AppBuilderComponent1 {}
