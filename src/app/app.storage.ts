import { Injectable } from "@angular/core"
import { Build, Profile } from "./app.models"

@Injectable({ providedIn: 'root' })

export class Storage {

    private profile: string = "broblogo-profile"
    private session: string = "build-session"

    public SaveProfile(profile: Profile): void {
        localStorage.setItem(this.profile, JSON.stringify(profile))
    }

    public GetProfile(): Profile | null {
        let profile = localStorage.getItem(this.profile)
        if (profile === null) {
            return null
        }
        let profileObj = Object.assign(new Profile(), JSON.parse(profile))

        return profileObj
    }

    public RemoveProfile(): void {
        localStorage.removeItem(this.profile)
    }

    public SaveSession(images: Build): void {
        localStorage.setItem(this.session, JSON.stringify(images))
    }

    public GetSession(): Build | null {
        let session = localStorage.getItem(this.session)
        if (session === null) {
            return null
        }
        let sessionObj = Object.assign(new Build(), JSON.parse(session))

        return sessionObj
    }

    public RemoveSession(): void {
        localStorage.removeItem(this.session)
    }
}