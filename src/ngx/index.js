import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Naver = (function(_super) {
    __extends(Naver, _super);
    function Naver() {
      return (_super !== null && _super.apply(this, arguments)) || this;
    }
    Naver.prototype.login = function() {
      return cordova(this, "login", {}, arguments);
    };
    Naver.prototype.logout = function() {
      return cordova(this, "logout", {}, arguments);
    };
    Naver.prototype.logoutAndDeleteToken = function() {
      return cordova(this, "logoutAndDeleteToken", {}, arguments);
    };
    Naver.prototype.refreshAccessToken = function() {
      return cordova(this, "refreshAccessToken", {}, arguments);
    };
    Naver.prototype.getState = function() {
      return cordova(this, "getState", {}, arguments);
    };
    Naver.prototype.requestApi = function(url) {
        return cordova(this, "requestApi", {}, arguments);
      };
      Naver.prototype.requestMe = function() {
        return cordova(this, "requestMe", {}, arguments);
      };
    Naver.pluginName = "Naver";
    Naver.plugin = "cordova-plugin-naver";
    Naver.pluginRef = "Naver";
    Naver.platforms = ["Android", "iOS"];
    Naver = __decorate([
        Injectable()
    ], Naver);
    return Naver;
  })(IonicNativePlugin);
  export { Naver };
  