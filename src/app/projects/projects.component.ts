import { Component, Signal, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface project {
  title: string;
  year: number;
  color: string;
  link: string;
  liveProject?: string;
}

@Component({
  selector: 'app-projects',
  imports: [
    MatIconModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {

  /** The link associated to the button the user is hovering. */
  hovered: string | null = null;

  /** Projects created by Aubrey. */
  selectedProjects: Signal<project[]> = signal([
    {
      title: "Poligraph",
      year: 2026,
      color: "#BDBEA951",
      link: "https://github.com/aubreyshere/gov_props",
      liveProject: "https://poli-graph.vercel.app/",
    },
    {
      title: "MuHSiC",
      year: 2025,
      color: "#add8e651",
      link: "https://github.com/julian-vargo/MuHSiC",
      liveProject: "https://muhsic.ucsc.edu/",
    },
    {
      title: "Portfolio",
      year: 2025,
      color: "#b1e1af51",
      link: "https://github.com/aubreyshere/boringWebsite",
    },
    {
      title: "IdealMeal",
      year: 2025,
      color: "#D2AB9951",
      link: "https://github.com/vineeshah/IdealMeal"
    },
  ])

  /**
   * Opens a window to the input url for the user. 
   * 
   * @param {string} url - Website link.
   */
  async goToProject(url: string): Promise<void> {
    window.open(url, '_blank');
  }
}
