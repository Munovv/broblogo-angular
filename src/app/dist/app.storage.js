"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Storage = void 0;
var core_1 = require("@angular/core");
var app_models_1 = require("./app.models");
var Storage = /** @class */ (function () {
    function Storage() {
        this.profile = "broblogo-profile";
        this.session = "build-session";
    }
    Storage.prototype.SaveProfile = function (profile) {
        localStorage.setItem(this.profile, JSON.stringify(profile));
    };
    Storage.prototype.GetProfile = function () {
        var profile = localStorage.getItem(this.profile);
        if (profile === null) {
            return null;
        }
        var profileObj = Object.assign(new app_models_1.Profile(), JSON.parse(profile));
        return profileObj;
    };
    Storage.prototype.RemoveProfile = function () {
        localStorage.removeItem(this.profile);
    };
    Storage.prototype.SaveSession = function (images) {
        localStorage.setItem(this.session, JSON.stringify(images));
    };
    Storage.prototype.GetSession = function () {
        var session = localStorage.getItem(this.session);
        if (session === null) {
            return null;
        }
        var sessionObj = Object.assign(new app_models_1.Build(), JSON.parse(session));
        return sessionObj;
    };
    Storage.prototype.RemoveSession = function () {
        localStorage.removeItem(this.session);
    };
    Storage = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], Storage);
    return Storage;
}());
exports.Storage = Storage;
