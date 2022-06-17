"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppHttpClient = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var app_models_1 = require("./app.models");
var AppHttpClient = /** @class */ (function () {
    function AppHttpClient(http, message, storage, router) {
        this.http = http;
        this.message = message;
        this.storage = storage;
        this.router = router;
        this.hostname = "localhost";
        this.authPort = "8001";
        this.partnerPort = "8004";
        this.containerPort = "8080";
        this.apiName = "/api";
        this.apiPartners = "/partner/";
        this.authEndpoint = "/auth/sign-in";
        this.upEndpoint = "/container/compose";
        this.downEndpoint = "/container/stop";
    }
    AppHttpClient.prototype.UseMiddleware = function (header) {
        return this;
    };
    AppHttpClient.prototype.AuthorizeRequest = function (model) {
        var _this = this;
        this.http.post(this.getURL(this.authEndpoint, this.authPort), model)
            .subscribe(function (res) {
            var profile = new app_models_1.Profile();
            profile.username = model.username;
            profile.access = res;
            _this.storage.SaveProfile(profile);
            _this.router.Location("/main/build");
        }, function (err) {
            _this.message.ShowError("Пользователя с такими данными не существует");
        });
        return this;
    };
    AppHttpClient.prototype.ComposeImageRequest = function (model) {
        var _this = this;
        this.http.post(this.getURL(this.upEndpoint, this.containerPort), model).subscribe(function (res) {
            _this.storage.SaveSession(model);
            _this.router.Location("/main/profile/dashboard");
        }, function (err) {
            _this.router.Location("/main/build");
            _this.message.ShowError("Ошибка создания системы");
        });
        return this;
    };
    AppHttpClient.prototype.DownImageRequest = function (model) {
        var _this = this;
        this.http.post(this.getURL(this.downEndpoint, this.containerPort), model).subscribe(function (res) {
            _this.storage.RemoveSession();
            _this.router.Location("/main/build");
        }, function (err) {
            _this.message.ShowError("Ошибка остановки системы");
        });
        return this;
    };
    AppHttpClient.prototype.CreatePartnerRequest = function (model) {
        var _this = this;
        this.http.post(this.getURL(this.apiPartners, this.partnerPort), model).subscribe(function (res) {
            _this.message.ShowSuccess("Partner has been created successfully!");
            console.log(res);
        }, function (err) {
            _this.message.ShowError("Internal error");
        });
        return this;
    };
    AppHttpClient.prototype.GetAllPartnersRequest = function () {
        return this.http.get(this.getURL(this.apiPartners, this.partnerPort)).toPromise();
    };
    AppHttpClient.prototype.DeletePartnerRequest = function (id) {
        var _this = this;
        var options = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: {
                id: id
            }
        };
        this.http["delete"](this.getURL(this.apiPartners, this.partnerPort), options).subscribe(function (res) {
            console.log(res);
            _this.message.ShowSuccess("Partner with id " + id + "has been deleted successfully");
        }, function (err) {
            console.log(err);
            _this.message.ShowError("Internal error");
        });
        return this;
    };
    AppHttpClient.prototype.getURL = function (endpoint, port) {
        return "http://" + this.hostname + ":" + port + this.apiName + endpoint;
    };
    AppHttpClient = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AppHttpClient);
    return AppHttpClient;
}());
exports.AppHttpClient = AppHttpClient;
