"use strict";
exports.__esModule = true;
exports.Partner = exports.Post = exports.Build = exports.Profile = exports.AuthModel = void 0;
var AuthModel = /** @class */ (function () {
    function AuthModel() {
        this.username = '';
        this.password = '';
    }
    return AuthModel;
}());
exports.AuthModel = AuthModel;
var Profile = /** @class */ (function () {
    function Profile() {
        this.username = '';
        this.access = {};
    }
    return Profile;
}());
exports.Profile = Profile;
var Build = /** @class */ (function () {
    function Build() {
        this.images = [];
        this.data = [
            {
                url: "",
                name: ""
            }
        ];
    }
    return Build;
}());
exports.Build = Build;
var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());
exports.Post = Post;
var Partner = /** @class */ (function () {
    function Partner() {
        this.name = '';
        this.description = '';
        this.location = '';
    }
    return Partner;
}());
exports.Partner = Partner;
