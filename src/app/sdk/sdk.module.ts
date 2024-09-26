// // import { NgModule } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { RouterModule, Routes } from '@angular/router';
// // import { AppBuilderComponent } from '@infragistics/appbuilder-sdk'
// // // export declare const isOidcSilentCallback: boolean;
// // // export declare function workspaceRoutes(): Route[];
// // // export declare function styleguideRoutes(): Route[];
// // // export declare function surveyRoutes(): Route[];
// // // export declare function welcomeRoutes(): Route[];
// // // export declare function openIdConnectRoutes(): Route[];
// // // export declare function gitHubRoutes(): Route[];
// // // export declare function creationRoutes(): Route[];
// // // export declare function devToolsRoutes(): {
// import { workspaceRoutes, styleguideRoutes, surveyRoutes, welcomeRoutes, openIdConnectRoutes, gitHubRoutes, creationRoutes, devToolsRoutes } from '@infragistics/appbuilder-sdk';

// // // SDK routes that should remain isolated from the main application
// // const sdkRoutes: Routes = [
// //   { path: 'test', component: AppBuilderComponent },  // The root route of SDK
// // ];

// // @NgModule({
// //   imports: [
// //     CommonModule,
// //     RouterModule.forChild(sdkRoutes)  // Import SDK routes only within this module
// //   ]
// // })
// // export class SdkModule {}

// // import { RouterModule, Routes } from '@angular/router';
// // import { AppBuilderComponent } from '@infragistics/appbuilder-sdk';

// // // Define SDK-specific routes using the named outlet 'sdk'
// // const sdkRoutes: Routes = [
// //   { path: '', component: AppBuilderComponent, outlet: 'sdk' },
// // ];

// // @NgModule({
// //   imports: [RouterModule.forChild(sdkRoutes)],
// //   exports: [RouterModule]
// // })
// // export class SdkModule {}

// // import { Routes } from '@angular/router';
// // import { AppBuilderComponent } from '@infragistics/appbuilder-sdk';
// // import { AppBuilderComponent1 } from '../app-builder/app-builder.component';

// // In the SDK module (AppBuilderModule) or the module you create

// import { RouterModule } from '@angular/router';
// import { AppBuilderComponent } from '@infragistics/appbuilder-sdk'; // Import component
// import { NgModule } from '@angular/core';
// import { AppBuilderComponent1 } from '../app-builder/app-builder.component';

// @NgModule({
//   declarations: [],  // Declare the component
//   imports: [
//     RouterModule.forChild([
//       { path: '', component: AppBuilderComponent1 },
//       ...workspaceRoutes()  // Default route
//         // Add SDK routes (from workspaceRoutes)
//     ]),
    
//   ],
// })
// export class AppBuilderModule {}


// // import { PreviewAreaComponent } from './preview-area.component';

// // export const sdkRoutes: Routes = [
// //     {
// //         path: '',
// //         component: AppBuilderComponent,
// //     },
// //     {
// //         path: 'appbuilder',
// //         component: AppBuilderComponent1,
// //     },
// // ];

// // export const routes: Routes = [
// //     { path: '', component: AppComponent, pathMatch: 'full' },
// //     { path: 'app-builder', children: workspaceRoutes() },  // Workspace routes from SDK
// //     { path: 'styleguide', children: styleguideRoutes() },  // Styleguide routes from SDK
// //     { path: 'survey', children: surveyRoutes() },          // Survey routes from SDK
// //     { path: 'welcome', children: welcomeRoutes() },        // Welcome routes from SDK
// //     { path: 'oidc', children: openIdConnectRoutes() },     // OpenID Connect routes from SDK
// //     { path: 'oauth', children: gitHubRoutes() },           // GitHub OAuth routes from SDK
// //     { path: 'creation', children: creationRoutes() },      // Creation-related routes from SDK
// //     { path: 'dev-tools', children: devToolsRoutes() },     // Dev tools routes from SDK
// //     { path: 'error', component: UncaughtErrorComponent },  // Main app error handling route
// //     { path: '**', component: PageNotFoundComponent }       // Catch-all 404 route for main app
// // ];


