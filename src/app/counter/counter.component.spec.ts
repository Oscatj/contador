import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonDisComponent } from './button-dis/button-dis.component';
import { CouterComponent } from './counter.component';
//Estas son pruebas Unitarias: prueban un componente de forma aislada
describe ("CounterComponent Unit", () => {
    beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CouterComponent,
      ],
    }).compileComponents();
    })
//Estructura para crear una prueba
    it ("Se debe crear el componente counter", ()=> {
        const fixture = TestBed.createComponent(CouterComponent)
//Confirma que se instacie/ cree el componente
        expect(fixture.componentInstance).toBeTruthy();
    })

    it ("Debe crear el counter: 23", ()=> {
        const fixture = TestBed.createComponent(CouterComponent)
        
        fixture.detectChanges() //Detecta y renderiza los cambios 

        const compiled: HTMLUnknownElement = fixture.nativeElement;

// console.log(compiled);

        expect(compiled.querySelector("h1")?.textContent).toEqual("Contador: 23");
    })

    it ("El valor inicial del contador es 23", () => {

        const coutre = new CouterComponent()

        expect (coutre.contador).toBe(23);
    })
})
describe("Integrated Testing del Addbutton", ()=> {

    let component: CouterComponent;
    let fixture: ComponentFixture<CouterComponent>;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [
            CouterComponent, ButtonAddComponent
          ],
        }).compileComponents();
        });

    beforeEach(()=>{
        fixture = TestBed.createComponent(CouterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it ('evento click Add', () =>{
        const compiled: HTMLElement = fixture.nativeElement;

        const counterValue = compiled.querySelector('h1')!;

        const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector('#add');

        btnAdd.click();

        fixture.detectChanges();

        expect (counterValue.textContent).toEqual('Contador: 25');
    });

  }); 

    describe("Integrated Testing del Disbutton", ()=> {

      let component: CouterComponent;
      let fixture: ComponentFixture<CouterComponent>;
  
  
      beforeEach(async () => {
          await TestBed.configureTestingModule({
            declarations: [
              CouterComponent, ButtonDisComponent
            ],
          }).compileComponents();
          });
  
      beforeEach(()=>{
          fixture = TestBed.createComponent(CouterComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
      }); 

    it ('evento click Dis', () =>{
      const compiled: HTMLElement = fixture.nativeElement;

      const counterValue = compiled.querySelector('h1')!;

      const btnDis: HTMLElement = fixture.debugElement.nativeElement.querySelector('#dis');

      btnDis.click();

      fixture.detectChanges();

      expect (counterValue.textContent).toEqual('Contador: 23');
  }); 

});