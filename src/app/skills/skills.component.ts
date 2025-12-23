import { Component, Signal, signal } from '@angular/core';

export interface skillSet {
  language: string,
  image: string,
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  frontendSkills: Signal<skillSet[]> = signal([
    {
      language: "HTML",
      image: "assets/images/HTML5_logo_and_wordmark-svg_10.png",
    },
    {
      language: "CSS",
      image: "assets/images/logo-css-3-20480.png",
    },
    {
      language: "JavaScript",
      image: "assets/images/js0.png",
    },
    {
      language: "TypeScript",
      image: "assets/images/ts0.png",
    },
    {
      language: "Angular",
      image: "assets/images/ang0.png",
    },
    {
      language: "React",
      image: "assets/images/react0.png",
    },
  ])
  backendSkills: Signal<skillSet[]> = signal([ 
    {
      language: "Python",
      image: "assets/images/python0.png",
    },
    {
      language: "NgRX",
      image: "assets/images/ngrx0.png",
    },
    {
      language: "Node.js",
      image: "assets/images/node0.png",
    },
    
  ])
  databaseSkills: Signal<skillSet[]> = signal([
    {
      language: "Firebase",
      image: "assets/images/firebase0.png",
    },
    {
      language: "MySQL",
      image: "assets/images/sql0.png",
    },
  ])

}
