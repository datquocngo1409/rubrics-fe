import {Component, Optional, ViewEncapsulation} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'gene-app',
    template: `<router-outlet></router-outlet>
   			<ngx-loading-bar></ngx-loading-bar>`,
    encapsulation: ViewEncapsulation.None
})

export class GeneAppComponent {
    constructor(translate: TranslateService) {
        translate.addLangs(['en', 'fr', 'vi', 'he', 'ru', 'ar', 'zh', 'de', 'es', 'ja', 'ko', 'it', 'hu']);
        translate.setDefaultLang('en');

        let language: string = translate.getBrowserLang();
        if (localStorage.getItem('language') !== null) {
            language = localStorage.getItem('language').substring(0, 2);
        }
        translate.use(language.match(/en|fr/) ? language : 'en');
    }
}
