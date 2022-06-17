"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ContainersComponent = void 0;
var core_1 = require("@angular/core");
var app_models_1 = require("src/app/app.models");
var ContainersComponent = /** @class */ (function () {
    function ContainersComponent(http, storage, router) {
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.isBuild = false;
        this.book = true;
        this.blog = true;
        this.card = true;
        this.partner = true;
        this.indicator = 1;
    }
    ContainersComponent.prototype.ngOnInit = function () {
        if (this.storage.GetSession() !== null) {
            this.router.Location("/main/profile/dashboard");
        }
    };
    ContainersComponent.prototype.build = function () {
        var services = this.buildRequestBody();
        this.isBuild = true;
        this.http.ComposeImageRequest(services);
        this.printLoadBar();
        return false;
    };
    ContainersComponent.prototype.Logout = function () {
        this.storage.RemoveProfile();
        this.router.Location("/");
        return false;
    };
    ContainersComponent.prototype.buildRequestBody = function () {
        var build = new app_models_1.Build();
        build.data = [];
        if (this.book) {
            build.images.push("book-service");
            build.data.push({ url: "book", name: "Book service" });
        }
        if (this.blog) {
            build.images.push("blog-service");
            build.data.push({ url: "blog", name: "Blog service" });
        }
        if (this.card) {
            build.images.push("card-service");
            build.data.push({ url: "card", name: "Card service" });
        }
        if (this.partner) {
            build.images.push("partner-service");
            build.data.push({ url: "partner", name: "Partner service" });
        }
        return build;
    };
    ContainersComponent.prototype.printLoadBar = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.indicator <= 99)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sleep(50)];
                    case 1:
                        _a.sent();
                        this.indicator++;
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ContainersComponent.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    ContainersComponent = __decorate([
        core_1.Component({
            selector: 'app-containers',
            templateUrl: './containers.component.html',
            styleUrls: ['./containers.component.css']
        })
    ], ContainersComponent);
    return ContainersComponent;
}());
exports.ContainersComponent = ContainersComponent;
