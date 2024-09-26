import { Injectable, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationService } from '@infragistics/appbuilder-sdk';

/**
 * Hopefully, a soon-to-be central point for managing
 * routing/navigation state in the application.
 *
 * @export
 * @class NavigationService
 */
@Injectable({
    providedIn: 'root',
})
export class MyNavigationService extends NavigationService implements OnDestroy  {
    constructor(router: Router) {
        super(router);
    }

    public override getDesignNavigation(applicationId: string) {
        return ['/app-builder/app', applicationId];
    }


    public override navigateToDesign(applicationId: string, replaceUrl = false) {
        this.router.navigate(this.getDesignNavigation(applicationId), { replaceUrl });
    }

    public override getPreviewNavigation(applicationId: string, viewId = '') {
        return ['/app-builder/app', applicationId, 'preview', viewId];
    }

    public override getPreviewUrl(applicationId: string, viewId = '') {
        return `${window.location.origin}/app-builder/app/${applicationId}/preview${viewId ? `/${viewId}` : ''}`;
    }
}
