import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' }, // Redirige a la pantalla de inicio (splash)
  { path: 'splash', component: SplashComponent }, // Pantalla de inicio (splash)
  { path: 'chatbot', component: ChatbotComponent }, // Componente principal del chatbot
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
