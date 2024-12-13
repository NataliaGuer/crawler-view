import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { PanelModule } from 'primeng/panel';
import { io } from 'socket.io-client';

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
      label: 'Abbab',
    },
    {
      id: '2',
      label: 'test',
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

  ngOnInit() {
    // const socket = io('ws://localhost:3004');
    // socket.on('new-node', (arg) => {
    //   this.nodes.push({
    //     id: arg.id,
    //     label: arg.label,
    //   });

    //   if (arg.parent) {
    //     this.links.push({
    //       id: `${arg.parent}-${arg.id}`,
    //       source: arg.parent,
    //       target: arg.id,
    //       label: ''
    //     })
    //   }
    // });
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
