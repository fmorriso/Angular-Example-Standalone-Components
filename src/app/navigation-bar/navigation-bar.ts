import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
//
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
//
import {CustomLink} from './custom-link';
import {MatButton, MatIconButton} from '@angular/material/button';

@Component({
    selector: 'app-navigation-bar',
    imports: [MatGridListModule, MatToolbarModule, MatButton, RouterLink, RouterLinkActive],
    templateUrl: './navigation-bar.html',
    styleUrl: './navigation-bar.scss'
})
export class NavigationBar implements OnInit {
    links: CustomLink[] = [];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        // build the navigation links using the Angular route config that was defined in app.routes.ts
        // and dependency-injected into this component, which effectively shares that route information without
        // having to define a separate Angular service component.
        for (const route of this.router.config) {
            // we only care about the ones that have a title attribute,
            // since the others are not going to be rendered in our navigation bar
            if (route.title) {
                //WARNING: must use string interpolation to convert title from Resolve<string> to just string
                const link: CustomLink = {
                    path: `/${route.path}`,
                    label: `${route.title}`
                };
                this.links.push(link);
            }
        }
        console.log(JSON.stringify(this.links));
    }

}
