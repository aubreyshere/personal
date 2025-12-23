import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface project {
  title: string;
  year: number;
  color: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  hovered: string | null = null;

  selectedProjects: Signal<project[]> = signal([
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
    {
      title: "SlugHub",
      year: 2025,
      color: "#BDBEA951",
      link: "https://github.com/aubreyshere/SlugHub",
    },
  ])

  async goToProject(url: string): Promise<void> {
    window.open(url, '_blank');
  }

}
