// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Angular Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";

// Components
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
