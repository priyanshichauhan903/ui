import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AdminComponent } from "./admin/admin.component";
import { SalaryComponent } from "./salary/salary.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdminComponent,
    SalaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
