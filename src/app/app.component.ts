import {Component, OnInit} from '@angular/core';
import { SidebarService } from './sidebar/sidebar.service';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { map, filter } from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-pro-sidebar';
  subTitle = 'angular-pro-sidebar';
  subs: Array<Subscription> = [];
  constructor(public sidebarService: SidebarService, private activatedRoute: ActivatedRoute,
              private router: Router,
              private titleService: Title) { }
  toggleSidebar() {
    this.sidebarService.setSidebarState(!this.sidebarService.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarService.hasBackgroundImage = !this.sidebarService.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarService.getSidebarState();
  }

  hideSidebar() {
    this.sidebarService.setSidebarState(true);
  }

  ngOnInit() {
    this.subs[0] = this.router.events.pipe(filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute.snapshot),
      map( route => {
        return route.firstChild;
      })).subscribe((route: ActivatedRouteSnapshot) => {
        this.title = route.data.title;
        this.subTitle = route.data.subTitle;
    });
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}
