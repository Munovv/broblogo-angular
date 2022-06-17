import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Self } from "@angular/core";
import { Injectable } from "@angular/core";

import Swal from "sweetalert2";

import { AuthModel, Build, Partner, Profile } from "./app.models";
import { Message } from "./app.message";
import { Navigate } from "./app.navigate";
import { Storage } from "./app.storage";

@Injectable({ providedIn: 'root' })

export class AppHttpClient {
    constructor(
        private http: HttpClient,
        private message: Message,
        private storage: Storage,
        private router: Navigate
    ) { }

    public UseMiddleware(header: HttpHeaders): Self {
        return this
    }

    public AuthorizeRequest(model: AuthModel): Self {
        this.http.post(this.getURL(this.authEndpoint, this.authPort), model)
            .subscribe(
                res => {
                    let profile = new Profile()
                    profile.username = model.username
                    profile.access = res

                    this.storage.SaveProfile(profile)

                    this.router.Location("/main/build")
                },
                err => {
                    this.message.ShowError("Пользователя с такими данными не существует")
                }
            )

        return this
    }

    public ComposeImageRequest(model: Build): Self {
        this.http.post(
            this.getURL(this.upEndpoint, this.containerPort),
            model
        ).subscribe(
            res => {
                this.storage.SaveSession(model)
                this.router.Location("/main/profile/dashboard")
            },
            err => {
                this.router.Location("/main/build")
                this.message.ShowError("Ошибка создания системы")
            }
        )

        return this
    }

    public DownImageRequest(model: Build): Self {
        this.http.post(
            this.getURL(this.downEndpoint, this.containerPort),
            model
        ).subscribe(
            res => {
                this.storage.RemoveSession()
                this.router.Location("/main/build")
            },
            err => {
                this.message.ShowError("Ошибка остановки системы")
            }
        )

        return this
    }

    public CreatePartnerRequest(model: Partner): Self {
        this.http.post(
            this.getURL(this.apiPartners, this.partnerPort),
            model
        ).subscribe(
            res => {
                this.message.ShowSuccess("Partner has been created successfully!")
                console.log(res)
            },
            err => {
                this.message.ShowError("Internal error")
            }
        )

        return this
    }

    public GetAllPartnersRequest(): Promise<any> {
        return this.http.get(
            this.getURL(this.apiPartners, this.partnerPort)
        ).toPromise()
    }

    public DeletePartnerRequest(id: string): Self {
        let options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: {
                id: id
            },
        }
        this.http.delete(
            this.getURL(this.apiPartners, this.partnerPort),
            options
        ).subscribe(
            res => {
                console.log(res)
                this.message.ShowSuccess("Partner with id " + id + "has been deleted successfully")
            },
            err => {
                console.log(err)
                this.message.ShowError("Internal error")
            }
        )

        return this
    }

    private getURL(endpoint: string, port: string): string {
        return "http://" + this.hostname + ":" + port + this.apiName + endpoint
    }

    private hostname = "localhost"

    private authPort = "8001"
    private partnerPort = "8004"
    private containerPort = "8080"

    private apiName = "/api"

    private apiPartners = "/partner/"

    private authEndpoint = "/auth/sign-in"

    private upEndpoint = "/container/compose"
    private downEndpoint = "/container/stop"
}