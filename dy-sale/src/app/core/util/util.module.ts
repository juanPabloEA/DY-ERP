import { NgModule } from "@angular/core";
import { NumbersPipe } from "./pipe/numbers.pipe";

@NgModule({
    declarations:[
        NumbersPipe
    ],
    exports: [
        NumbersPipe
    ]
})
export class UtilModule {

}