"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let url1 = 'https://api.wordnik.com/v4/word.json/';
let url3 = '/relatedWords?useCanonical=false&relationshipTypes=hypernym&limitPerRelationshipType=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
let hypernym;
var map = new Map;
var map2;
let assets = ['blue', 'pleas', 'human', 'savings'];
const fetch = require('node-fetch');
let settings = { method: "Get" };
assets.forEach(function (item) {
    let url = url1 + item + url3;
    fetch(url, settings)
        .then(function (res) {
        return res.json();
    })
        .then((json) => {
        if (typeof (json[0]) != 'undefined') {
            map.set(item, json[0].words[0]);
        }
        else
            map.set(item, 'null');
        console.log(map);
    });
});
console.log('shiowd');
map2 = map;
let AppService = class AppService {
    getNull() {
        return null;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map