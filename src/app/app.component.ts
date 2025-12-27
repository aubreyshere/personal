import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavComponent } from './nav/nav.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BioComponent,
    ProjectsComponent,
    NavComponent,
    SkillsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
