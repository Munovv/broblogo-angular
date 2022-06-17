"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var auth_component_1 = require("./auth/auth.component");
var main_component_1 = require("./main/main.component");
var partners_component_1 = require("./main/profile/partners/partners.component");
var blog_component_1 = require("./main/blog/blog.component");
var containers_component_1 = require("./main/containers/containers.component");
var not_found_component_1 = require("./not-found/not-found.component");
var http_1 = require("@angular/common/http");
var app_http_1 = require("./app.http");
var ngx_sweetalert2_1 = require("@sweetalert2/ngx-sweetalert2");
var app_navigate_1 = require("./app.navigate");
var app_message_1 = require("./app.message");
var profile_component_1 = require("./main/profile/profile.component");
var dashboard_component_1 = require("./main/profile/dashboard/dashboard.component");
var one_partner_component_1 = require("./main/profile/partners/one-partner/one-partner.component");
var add_partner_component_1 = require("./main/profile/partners/add-partner/add-partner.component");
var all_partner_component_1 = require("./main/profile/partners/all-partner/all-partner.component");
var appRoutes = [
    { path: '', component: auth_component_1.AuthComponent },
    {
        path: 'main', component: main_component_1.MainComponent, children: [
            {
                path: 'profile', component: profile_component_1.ProfileComponent, children: [
                    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                    {
                        path: 'partner', component: partners_component_1.PartnersComponent, children: [
                            { path: 'all', component: all_partner_component_1.AllPartnerComponent },
                            { path: 'add', component: add_partner_component_1.AddPartnerComponent },
                            { path: 'one/:id', component: one_partner_component_1.OnePartnerComponent },
                        ]
                    },
                    { path: 'blog', component: blog_component_1.BlogComponent },
                ]
            },
            { path: 'build', component: containers_component_1.ContainersComponent }
        ]
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                auth_component_1.AuthComponent,
                main_component_1.MainComponent,
                partners_component_1.PartnersComponent,
                blog_component_1.BlogComponent,
                containers_component_1.ContainersComponent,
                not_found_component_1.NotFoundComponent,
                profile_component_1.ProfileComponent,
                dashboard_component_1.DashboardComponent,
                one_partner_component_1.OnePartnerComponent,
                add_partner_component_1.AddPartnerComponent,
                all_partner_component_1.AllPartnerComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes),
                http_1.HttpClientModule,
                ngx_sweetalert2_1.SweetAlert2Module,
            ],
            providers: [app_http_1.AppHttpClient, Storage, app_message_1.Message, app_navigate_1.Navigate],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
