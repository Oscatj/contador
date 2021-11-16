import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CouterComponent } from "./counter.component";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonDisComponent } from "./button-dis/button-dis.component";


@NgModule({
declarations: [CouterComponent, ButtonAddComponent, ButtonDisComponent],
imports: [CommonModule], //El ConmmonModule es para indicar que es un modulo
exports: [CouterComponent] //Es para exportar al modulo el componente principal
})
export class counterModule{

}