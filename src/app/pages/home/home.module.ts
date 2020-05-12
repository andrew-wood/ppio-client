import { HomeComponent } from './home.component'
import { NgModule } from '@angular/core';
import { PlayerFormComponent } from '../../player-form/player-form.component';

@NgModule({
    declarations: [HomeComponent, PlayerFormComponent],
    imports: [],
    providers: [],
    exports: [HomeComponent]
})
export class HomeModule {}
