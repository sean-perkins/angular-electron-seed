import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the title', () => {
        component.title = 'Testing';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const title = fixture.debugElement.query(By.css('.heading')).nativeElement;
            expect(title.innerText).toEqual('Testing');
        });
    });

    it('should render the description', () => {
        component.description = 'Testing';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const desc = fixture.debugElement.query(By.css('p')).nativeElement;
            expect(desc.innerText).toEqual('Testing');
        });
    });

    it('should render the link text', () => {
        component.linkText = 'Testing';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const link = fixture.debugElement.query(By.css('footer a')).nativeElement;
            expect(link.innerText).toEqual('Testing');
        });
    });


});
