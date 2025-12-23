import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavComponent } from './nav/nav.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FlowersComponent } from './flowers/flowers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    BioComponent, 
    ProjectsComponent,
    NavComponent, 
    SkillsComponent, 
    ContactComponent, 
    FlowersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'boring';
}
