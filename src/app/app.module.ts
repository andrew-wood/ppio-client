import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './pages/home/home.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
