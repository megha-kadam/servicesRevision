import { NgModule } from "@angular/core";
import { PassengerCardComponent } from "./passenger-card/passenger-card.component";
import { PassengerDashboardComponent } from "./passenger-dashboard/passenger-dashboard.component";
import { PassesngerCountComponent } from "./passesnger-count/passesnger-count.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations : [
        PassengerDashboardComponent,
        PassesngerCountComponent,
        PassengerCardComponent,
    ],
    imports : [
        CommonModule
    ],
    exports : [PassengerDashboardComponent],
    providers : []
})
export class PassengerModule{

}