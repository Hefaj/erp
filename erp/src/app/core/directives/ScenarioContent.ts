import { HostListener } from "@angular/core";
import { PageService } from "../components/page/page.service";
import { Directive } from '@angular/core';
import { Inject } from '@angular/core';

@Directive({
  selector: '[ScenarioContent]'
})
export default abstract class ScenarioContent {
    private _target: any;

    public constructor(@Inject(String) public target: any, public _pageService: PageService) {
        this._target = target;
    }

    @HostListener("click") onClick(){
        this._pageService.setFocus(this._target);
    }
}