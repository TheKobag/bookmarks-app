// Angular
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// REDUX
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
// import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { appReducers } from "./store/reducers/app.reducers";

// APP
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";

// Components
import { DashboardComponent } from "./containers/dashboard/dashboard.component";
import { BookmarksListComponent } from "./components/bookmarks-list/bookmarks-list.component";
import { BookmarkEffects } from "./store/effects/bookmark.effects";
import { BookmarkModalComponent } from "./components/bookmark-modal/bookmark-modal.component";
import { BookmarkFormComponent } from "./components/bookmark-form/bookmark-form.component";

//  Services
import { BookmarkService } from "./services/bookmark.service";

// Angular Material
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookmarksListComponent,
    BookmarkModalComponent,
    BookmarkFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BookmarkEffects]),
    // StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [BookmarkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
