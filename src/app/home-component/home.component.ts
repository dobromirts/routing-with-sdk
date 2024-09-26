import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBuilderComponent } from '@infragistics/appbuilder-sdk';
import { IgxAvatarComponent } from 'igniteui-angular';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppBuilderComponent, IgxAvatarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {}
