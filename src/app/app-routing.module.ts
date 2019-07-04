import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ResumeComponent } from './resume/resume.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Resume', component: ResumeComponent },
  { path: 'Works', component: WorksComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'article/:id', component: ArticleComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
