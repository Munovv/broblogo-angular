"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddPartnerComponent = void 0;
var core_1 = require("@angular/core");
var app_models_1 = require("src/app/app.models");
var AddPartnerComponent = /** @class */ (function () {
    function AddPartnerComponent(router, http) {
        this.router = router;
        this.http = http;
        this.partner = new app_models_1.Partner();
    }
    AddPartnerComponent.prototype.ngOnInit = function () {
    };
    AddPartnerComponent.prototype.AddPartner = function () {
        this.http.CreatePartnerRequest(this.partner);
        this.partner = new app_models_1.Partner();
        return false;
    };
    AddPartnerComponent = __decorate([
        core_1.Component({
            selector: 'app-add-partner',
            templateUrl: './add-partner.component.html',
            styleUrls: ['./add-partner.component.css']
        })
    ], AddPartnerComponent);
    return AddPartnerComponent;
}());
exports.AddPartnerComponent = AddPartnerComponent;
