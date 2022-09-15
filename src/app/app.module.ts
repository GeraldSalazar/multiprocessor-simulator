import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProcessorComponent } from './home/components/processor/processor.component';
import { CacheMemoryTableComponent } from './home/components/processor/cache-memory-table/cache-memory-table.component';
import { MainMemoryTableComponent } from './home/components/main-memory-table/main-memory-table.component';
import { BusComponent } from './home/components/bus/bus.component';
import { ProcessorInstrucComponent } from './home/components/processor/processor-instruc/processor-instruc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProcessorComponent,
    CacheMemoryTableComponent,
    MainMemoryTableComponent,
    BusComponent,
    ProcessorInstrucComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
