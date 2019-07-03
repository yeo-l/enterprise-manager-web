import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Personnel',
      type: 'header'
    },
    {
      title: 'Embauche',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Personnel',
          route: 'staff/list',
          badge: {
            text: 'Pro ',
            class: 'badge-success'
          }
        },
        {
          title: 'Contrats',
          route: 'contract/list'
        },
        {
          title: 'Fonctions'
        },
        {
          title: 'Organigrammes',
          route: 'org-chart'
        },
        {
          title: 'Départs'
        }
      ]
    },
    {
      title: 'Congés',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',
      badge: {
        text: '3',
        class: 'badge-danger'
      },
      submenus: [
        {
          title: 'Demandes de congés',
        },
        {
          title: 'Gestion des congés'
        }
      ]
    },
    /*{
      title: '',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Pie chart',
        },
        {
          title: 'Line chart'
        },
        {
          title: 'Bar chart'
        },
        {
          title: 'Histogram'
        }
      ]
    },
    {
      title: 'Maps',
      icon: 'fa fa-globe',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Google maps',
        },
        {
          title: 'Open street map'
        }
      ]
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Documentation',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
    },
    {
      title: 'Calendar',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    },
    {
      title: 'Examples',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple'
    },*/
    {
      title: 'Paramètres',
      type: 'header'
    },
    {
      title: 'Gestion des Embauches',
      icon: 'fa fa-user',
      type: 'dropdown',
      submenus: [
        {
          title: 'Emplois',
          route: 'job/list',
        },
        {
          title: 'Fonctions',
          route: 'post/list',
        },
        {
          title: 'Niveau hiérarchique ',
          route: 'level/list'
        },
        {
          title: 'Hierarchie ',
          route: 'hierarchy/list'
        },
        {
          title: 'Grades',
          route: 'grade/list'
        },
        {
          title: 'Types d\'identification',
          route: 'identifier-type/list'
        },
        {
          title: 'Types de Contrat',
          route: 'contract-type/list'
        },
        {
          title: 'Types de Congé',
          route: 'leave-permission-type/list'
        },
        {
          title: 'Types de Départ',
          route: 'departure-type/list'
        }
      ]
    },
    {
      title: 'Gestion des utilisateurs',
      icon: 'fa fa-user',
      type: 'dropdown',
      submenus: [
        {
          title: 'Utilisateurs'
        },
        {
          title: 'Rôles',
        }
      ],
    },
    {
      title: 'Localisation',
      icon: 'fa fa-globe-africa',
      type: 'dropdown',
      submenus: [
        {
          title: 'Niveau'
        },
        {
          title: 'Types d\'Attribut',
        }
      ]
    },
    {
      title: 'Acitivités',
      icon: 'fa fa-globe',
      type: 'dropdown',
      submenus: [
        {
          title: 'Niveau'
        },
        {
          title: 'Types d\'Attribut',
        }
      ]
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
