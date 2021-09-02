import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PlatformDetectorService {

    constructor(@Inject(PLATFORM_ID) private platformId: string) { }

    isPlatformBrowser() {
        return isPlatformBrowser(this.platformId);//me retorna se eu estou no browser ou não
    }
}
