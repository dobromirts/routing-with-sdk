import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { AppBuilderComponent1 } from './app-builder/app-builder.component';
import { workspaceRoutes, styleguideRoutes, surveyRoutes, welcomeRoutes, openIdConnectRoutes, gitHubRoutes, creationRoutes, devToolsRoutes, AppBuilderComponent } from '@infragistics/appbuilder-sdk';
import { HomeComponent } from './home-component/home.component';

// Main application routes
export const routes: Routes = [
  { path: '', redirectTo: 'app-builder', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'app-builder', component: AppBuilderComponent1,
    children: [...workspaceRoutes(), ...styleguideRoutes(), ...surveyRoutes(), ...welcomeRoutes(), ...openIdConnectRoutes(), ...gitHubRoutes(), ...creationRoutes(), ...devToolsRoutes()]
  },  // Workspace routes from SDK
  { path: 'error', component: UncaughtErrorComponent },  // Main app error handling route
  { path: '**', component: PageNotFoundComponent }       // Catch-all 404 route for main app
];