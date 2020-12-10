"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutUsComponent = void 0;
var core_1 = require("@angular/core");
var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.serviceList = [
            { icon: 'assets/icons/car.png', title: 'Disk ração', description: 'Uma solução para a falta de tempo de quem tem animais e sabe que é importante não deixar faltar ração em casa.' },
            { icon: 'assets/icons/brush.png', title: 'Banho & tosa', description: 'Temos uma equipe de profissionais bem qualificados para deixar seu animal de estimação mais limpo, bonito e saudável.' },
            { icon: 'assets/icons/vet.png', title: 'Clínica Veterinária', description: 'Nossa equipe de médicos veterinários atua na prevenção e cura de doenças dos animais e na orientação para que os donos proporcionem o seu bem-estar.' },
            { icon: 'assets/icons/medicine.png', title: 'Farmácia', description: 'Aqui você encontra os medicamentos e insumos necessários para dar procedimento ao tratamento do seu pet.' },
            { icon: 'assets/icons/accessories.png', title: 'Acessórios Pet', description: 'Temos brinquedos, camas, casinhas, caixas de transporte, sanitários, comedouros, guias, coleiras, peitorais, produtos para higiene e muito mais' }
        ];
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        core_1.Component({
            selector: 'app-about-us',
            templateUrl: './about-us.component.html',
            styleUrls: ['./about-us.component.css']
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());
exports.AboutUsComponent = AboutUsComponent;
