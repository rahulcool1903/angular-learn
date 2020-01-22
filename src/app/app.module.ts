import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyContainer } from "./componentContainer/myContainer/mycontainer.component";
import { HeaderComponent } from "./componentContainer/header/header.component";
import { TopnavComponent } from "./componentContainer/topNav/topnav.component";
import { LeftContainerComponent } from "./componentContainer/leftContainer/leftcontainer.component";
import { RightContainerComponent } from "./componentContainer/rightContainer/rightcontainer.component";

@NgModule({
  declarations: [
    AppComponent,
    MyContainer,
    HeaderComponent,
    TopnavComponent,
    LeftContainerComponent,
    RightContainerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
