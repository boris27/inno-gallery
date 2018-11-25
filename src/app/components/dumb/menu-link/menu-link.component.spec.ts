import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLinkComponent } from './menu-link.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MenuLinkComponent', () => {
    let component: MenuLinkComponent;
    let fixture: ComponentFixture<MenuLinkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
            ],
            declarations: [ MenuLinkComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
