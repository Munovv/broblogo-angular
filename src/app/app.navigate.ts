import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })

export class Navigate {

    constructor(private router: Router) { }

    public Location(url: string): void {
        this.router.navigate([url]);
    }
}