import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-link-graph',
  standalone: true,
  imports: [NgxGraphModule, PanelModule],
  templateUrl: './link-graph.component.html',
  styleUrl: './link-graph.component.scss',
})
export class LinkGraphComponent {
  isServer: boolean = false;
  nodes: GraphNode[] = [
    {
      id: '1',
      label: 'Abbbbb',
    },
  ];

  links: GraphLink[] = [
    // {
    //   id: 'a',
    //   source: 'first',
    //   target: 'second',
    //   label: 'is parent of',
    // },
    // {
    //   id: 'b',
    //   source: 'first',
    //   target: 'third',
    //   label: 'custom label',
    // },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isServer = isPlatformServer(this.platformId);
  }
}

type GraphNode = {
  id: string;
  label: string;
};

type GraphLink = {
  id: string;
  source: string;
  target: string;
  label: string;
};

/**
 * risposta del servizio view-be
 * {
 *  url: "abc"
 *  parent: 123,
 * }
 *
 * per ogni risposta aggiungo un nodo e un link
 */
