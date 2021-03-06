(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-md\">\r\n  <nav class=\"navbar navbar-light\" style=\"background-color: #fff;\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"/assets/img/D&Dlogo_stacked.jpg\" width=\"105\" height=\"30\" class=\"d-inline-block align-top\"\r\n        alt=\"Dungeons and Dragons Character Creator\">\r\n      Character Creator\r\n    </a>\r\n  </nav>\r\n  <header>\r\n    <h1>\r\n      Roll Initiative\r\n    </h1>\r\n  </header>\r\n  <router-outlet></router-outlet>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/character-sheet/character-sheet.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/character-sheet/character-sheet.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\" style=\"display:block;\">\r\n        <h2>Character Sheet</h2>\r\n        <div id=\"character_info\">\r\n            <p>Name: {{oneCharacter.name}}</p>\r\n            <p>Class: Level {{oneCharacter.character_class.length}} {{oneCharacter.character_class}}</p>\r\n            <p>Race: {{oneCharacter.race}}</p>\r\n            <p>Experience: {{oneCharacter.exp}}</p>\r\n            {{\"Skill: \"+ allSkills[2].name}}\r\n            {{oneCharacter.skills[1].name}}\r\n\r\n        </div>\r\n    </div>\r\n    <!--end of row-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col\" id=\"stats_and_skills\">\r\n            <div id=\"str\" class=\"stat_block\">\r\n                <h3>STR</h3>\r\n                <p>{{oneCharacter.stats[0].strength}}</p>\r\n                <h3>Mod</h3>\r\n                <p>\r\n                    {{(oneCharacter.stats[0].strength - 10.1) / 2 | number:'1.0-0'}}\r\n\r\n                </p>\r\n                <h4>Save: {{(oneCharacter.stats[0].strength - 10.1) / 2 | number:'1.0-0'}}</h4>\r\n                <h4>Skills</h4>\r\n                <ul>\r\n                    <li>Athletics:\r\n                        {{(listOfProf[3] * ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].strength - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div id=\"dex\" class=\"stat_block\">\r\n                <h3>DEX</h3>\r\n                <p>{{oneCharacter.stats[0].dexterity}}</p>\r\n                <h3>Mod</h3>\r\n                <p>\r\n                    {{(oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}\r\n\r\n                </p>\r\n                <h4>Save: {{(oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}</h4>\r\n                <h4>Skills</h4>\r\n                <ul>\r\n                    <li>Acrobatics:\r\n                        {{(listOfProf[0]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Sleight of Hand:\r\n                        {{(listOfProf[15]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Stealth:\r\n                        {{(listOfProf[16]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n            <div id=\"con\" class=\"stat_block\">\r\n                <h3>CON</h3>\r\n                <p>{{oneCharacter.stats[0].constitution}}</p>\r\n                <h3>Mod</h3>\r\n                <p>\r\n                    {{(oneCharacter.stats[0].constitution - 10.1) / 2 | number:'1.0-0'}}\r\n\r\n                </p>\r\n                <h4>Save: {{(oneCharacter.stats[0] - 10.1) / 2 | number:'1.0-0'}}</h4>\r\n            </div>\r\n            <div id=\"int\" class=\"stat_block\">\r\n                <h3>INT</h3>\r\n                <p>{{oneCharacter.stats[0].intelligence}}</p>\r\n                <h3>Mod</h3>\r\n                <p>\r\n                    {{(oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\r\n\r\n                </p>\r\n                <h4>Save: {{(oneCharacter.stats[0] - 10.1) / 2 | number:'1.0-0'}}</h4>\r\n                <h4>Skills</h4>\r\n                <ul>\r\n                    <li>Arcana:\r\n                        {{(listOfProf[2]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>History:\r\n                        {{(listOfProf[5]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Investigation:\r\n                        {{(listOfProf[8]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Nature:\r\n                        {{(listOfProf[10]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Religion:\r\n                        {{(listOfProf[14]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].intelligence - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div id=\"wis\" class=\"stat_block\">\r\n                <h3>WIS</h3>\r\n                <p>{{oneCharacter.stats[0].wisdom}}</p>\r\n                <h3>Mod</h3>\r\n                <p>\r\n                    {{(oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\r\n\r\n                </p>\r\n                <h4>Save: {{(oneCharacter.stats[0] - 10.1) / 2 | number:'1.0-0'}}</h4>\r\n                <h4>Skills</h4>\r\n                <ul>\r\n                    <li>Animal Handling:\r\n                        {{(listOfProf[1]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Insight:\r\n                        {{(listOfProf[6]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Medicine:\r\n                        {{(listOfProf[9]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Perception:\r\n                        {{(listOfProf[11]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Survival:\r\n                        {{(listOfProf[17]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].wisdom - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div id=\"cha\" class=\"stat_block\">\r\n                <h3>CHA</h3>\r\n                <p>{{oneCharacter.stats[0].charisma}}</p>\r\n                <h3>Mod</h3>\r\n                <p>\r\n                    {{(oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\r\n\r\n                </p>\r\n                <h4>Save: {{(oneCharacter.stats[0] - 10.1) / 2 | number:'1.0-0'}}</h4>\r\n                <h4>Skills</h4>\r\n                <ul>\r\n                    <li>Deception:\r\n                        {{(listOfProf[4]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Intimidation:\r\n                        {{(listOfProf[7]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Performance:\r\n                        {{(listOfProf[12] * ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n                    <li>Persuasion:\r\n                        {{(listOfProf[13]* ((oneCharacter.character_class.length)+7)/4)+ (oneCharacter.stats[0].charisma - 10.1) / 2 | number:'1.0-0'}}\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <!--end of stats_and_skills column-->\r\n\r\n        <div class=\"col\" id=\"combat\">\r\n            <div>\r\n                <h3>Proficiency Bonus </h3>\r\n                <p>{{ ((oneCharacter.character_class.length)+7)/4 | number:'1.0-0'}}</p>\r\n            </div>\r\n            <div>\r\n                <h3>Initiative</h3>\r\n                <p>{{ (oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}</p>\r\n            </div>\r\n            <div>\r\n                <h3>AC</h3>\r\n                <div>{{ 10+(oneCharacter.stats[0].dexterity - 10.1) / 2 | number:'1.0-0'}}</div>\r\n            </div>\r\n            <div>\r\n                <h3>Max Health</h3>\r\n                <p>{{ characterHP + (oneCharacter.stats[0].constitution - 10.1) / 2 | number:'1.0-0'}}</p>\r\n            </div>\r\n            <div>\r\n                <h3>Skill Proficiencies</h3>\r\n                <div *ngFor=\"let skill of oneCharacter.skills\">\r\n                    {{skill.name}}\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--end of combat column-->\r\n\r\n        <div class=\"col\" id=\"features_and_spells\">\r\n            <div id=\"features\">\r\n                <h3>Features</h3>\r\n                <ul *ngFor=\"let f of classFeatures\">\r\n                    <li>{{f.name}}</li>\r\n                </ul>\r\n            </div>\r\n            <!--end of features-->\r\n            <div id=\"spells\">\r\n                <h3>Spells</h3>\r\n                <div *ngFor=\"let level of oneCharacter.spells\">\r\n                    <div *ngFor=\"let spell of level\">\r\n                        <p>{{spell.name}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--end of spells-->\r\n        </div>\r\n        <!--end of features column-->\r\n\r\n    </div>\r\n    <!--end of row-->\r\n\r\n</div>\r\n<!--end of container-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<ng-sidebar-container style=\"height: 100vh; width: 100%; display: inline-block; vertical-align: top;\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Document</title>\r\n    <link rel=\"stylesheet\" href=\"create.component.css\">\r\n</head>\r\n    <ng-sidebar [(opened)]=\"_opened\" position=\"left\"\r\n        style=\"display: inline-block;width:100px; height: 100%; margin:20px;padding:5px; padding-top: 30%;\">\r\n        <ul>\r\n            <li style='margin-top: 50px;'>Name: {{newCharacter.name}}</li>\r\n            <li>Race: {{newCharacter.race}}</li>\r\n            <li>Class: {{newCharacter.character_class}}</li>\r\n        </ul>\r\n        <span>Skills:</span>\r\n        <ul *ngFor='let skill of newCharacter.skills'>\r\n            <li>{{skill.name}}</li>\r\n        </ul>\r\n        <span>Stats:</span>\r\n        <ul>\r\n            <li>Strength: {{newCharacter.stats.strength}}</li>\r\n            <li>Dexterity: {{newCharacter.stats.dexterity}}</li>\r\n            <li>Constitution: {{newCharacter.stats.constitution}}</li>\r\n            <li>Intelligence: {{newCharacter.stats.intelligence}}</li>\r\n            <li>Wisdom: {{newCharacter.stats.wisdom}}</li>\r\n            <li>Charisma: {{newCharacter.stats.charisma}}</li>\r\n\r\n        </ul>\r\n    </ng-sidebar>\r\n    <div ng-sidebar-content style='margin-left: 200px;'>\r\n\r\n        <body>\r\n            <div *ngFor='let err of errors'>\r\n                <p>{{err}}</p>\r\n            </div>\r\n            <form (submit)=\"createCharacter()\">\r\n                <label>Name: </label>\r\n                <input type=\"text\" name=\"newCharacter.name\" [(ngModel)]=\"newCharacter.name\" /><br>\r\n                <label>Bio/Description:</label><br>\r\n                <textarea type=\"textarea\" rows=\"4\" cols=\"50\" name=\"newCharacter.description\"\r\n                    [(ngModel)]=\"newCharacter.description\"></textarea><br>\r\n                <div *ngIf='newCharacter'>\r\n                    <h3>Chosen Race: {{newCharacter.race}}</h3>\r\n                    <img (click)=\"chooseRace('Dwarf', 1)\" src=\"../../assets/img/Dwarf.png\" alt=\"Dwarf\">\r\n                    <img (click)=\"chooseRace('Elf', 2)\" src=\"../../assets/img/Elf.png\" alt=\"Elf\">\r\n                    <img (click)=\"chooseRace('Halfling', 3)\" src=\"../../assets/img/Halfling.png\" alt=\"Halfling\">\r\n                    <img (click)=\"chooseRace('Human', 4)\" src=\"../../assets/img/human.png\" alt=\"human\">\r\n                    <img (click)=\"chooseRace('Dragonborn', 5)\" src=\"../../assets/img/Dragonborn.png\" alt=\"dragonborn\">\r\n                    <img (click)=\"chooseRace('Gnome', 6)\" src=\"../../assets/img/Gnome.png\" alt=\"Gnome\">\r\n                    <img (click)=\"chooseRace('Half-Elf', 7)\" src=\"../../assets/img/Half-elf.png\" alt=\"Half-elf\">\r\n                    <img (click)=\"chooseRace('Half-orc', 8)\" src=\"../../assets/img/Half-orc.png\" alt=\"Half-Orc\">\r\n                    <img (click)=\"chooseRace('Tiefling', 9)\" src=\"../../assets/img/Tiefling.png\" alt=\"Tiefling\">\r\n                    <div *ngIf='oneRace'>\r\n                        <b>Alignment:</b> {{this.oneRace.alignment}}<br>\r\n                        <b>Age:</b> {{this.oneRace.age}}<br>\r\n                        <b>Size:</b> {{this.oneRace.size}}, {{this.oneRace.size_description}}\r\n                    </div>\r\n                </div>\r\n                <div *ngIf='newCharacter.race'>\r\n                    <h3>Chosen Class: {{newCharacter.character_class}}</h3>\r\n                    <img (click)=\"chooseClass('Barbarian', 1)\" src=\"../../assets/img/Barbarian.png\" alt=\"Barbarian\">\r\n                    <img (click)=\"chooseClass('Bard', 2)\" src=\"../../assets/img/Bard.png\" alt=\"Bard\">\r\n                    <img (click)=\"chooseClass('Cleric', 3)\" src=\"../../assets/img/Cleric.png\" alt=\"Cleric\">\r\n                    <img (click)=\"chooseClass('Druid', 4)\" src=\"../../assets/img/Druid.png\" alt=\"Druid\">\r\n                    <img (click)=\"chooseClass('Fighter', 5)\" src=\"../../assets/img/Fighter.png\" alt=\"Fighter\">\r\n                    <img (click)=\"chooseClass('Monk', 6)\" src=\"../../assets/img/Monk.png\" alt=\"Monk\">\r\n                    <img (click)=\"chooseClass('Paladin', 7)\" src=\"../../assets/img/Paladin.png\" alt=\"Paladin\">\r\n                    <img (click)=\"chooseClass('Ranger', 8)\" src=\"../../assets/img/Ranger.png\" alt=\"Ranger\">\r\n                    <img (click)=\"chooseClass('Rogue', 9)\" src=\"../../assets/img/Rogue.png\" alt=\"Rogure\">\r\n                    <img (click)=\"chooseClass('Sorcerer', 10)\" src=\"../../assets/img/Sorcerer.png\" alt=\"Sorcerer\">\r\n                    <img (click)=\"chooseClass('Warlock', 11)\" src=\"../../assets/img/Warlock.png\" alt=\"Warlock\">\r\n                    <img (click)=\"chooseClass('Wizard', 12)\" src=\"../../assets/img/Wizard.png\" alt=\"Wizard\">\r\n                </div>\r\n            </form>\r\n            <div class=\"root\">\r\n                <app-pick-attributes *ngIf=\"classIndex\" [classIndex]=\"classIndex\" [newCharacter]='newCharacter'\r\n                    (add)=\"onUpdate($event)\"></app-pick-attributes>\r\n            </div>\r\n        </body>\r\n    </div>\r\n</ng-sidebar-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n<button [routerLink]=\"['/characters/create']\">Create a new Hero</button><br>\r\n\r\n<table class=\"table table-striped\">\r\n    <thead class=\"thead-dark\">\r\n    <tr>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Race</th>\r\n        <th scope=\"col\">Class</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Actions</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr scope=\"row\" *ngFor=\"let character of allCharacters\">\r\n        <td>{{character.name}}</td>\r\n        <td>{{character.race}}</td>\r\n        <td>{{character.character_class}}</td>\r\n        <td>{{character.description}}</td>\r\n        <td>\r\n            <button [routerLink]=\"['/character/show', character._id]\">View Sheet</button><br>\r\n            <button [routerLink]=\"['/character', character._id]\">Enhance a Hero</button><br>\r\n            <button (click) =\"destroyOneCharacter(character._id)\">Retire</button><br>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>\r\n\r\n</div><!--end of container-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pick-attributes/pick-attributes.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pick-attributes/pick-attributes.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf='characterClass'>\r\n    <h1>Class: {{characterClass.name}}</h1>\r\n    <div>\r\n        <h4>Hit-Die: {{characterClass['hit_die']}}</h4>\r\n        <h4>Saving-Throws</h4>\r\n        <div>\r\n            <ul *ngFor=\"let throw of characterClass['saving_throws']\">\r\n                <li>{{throw.name}}</li>\r\n            </ul>\r\n        </div>\r\n        <div *ngIf='classFeatures.length>0'>\r\n            <h4>Class Features:</h4>\r\n            <ul *ngFor='let f of classFeatures'>\r\n                <li>{{f.name}}</li>\r\n            </ul>\r\n        </div>\r\n        <div>\r\n            <h4>Class Proficiencies</h4>\r\n            <ul *ngFor=\" let pros of characterClass['proficiencies']\">\r\n                <li>{{pros.name}}</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <h2>Choose Your Attributes</h2>\r\n    <h3>Choose {{characterClass['proficiency_choices'][0]['choose']}} Skills:</h3>\r\n    <div style='vertical-align: top; display: inline-block' *ngFor=\"let skill of  classSkills\">\r\n        <button style='margin:3px' *ngIf='skill.added==false' (click)='addSkill(skill)'>{{skill.name}}</button>\r\n        <button style='background-color: red; margin:3px; color:white' *ngIf='skill.added==true'\r\n            (click)='cancelSkill(skill)'>{{skill.name}}</button>\r\n    </div>\r\n</div>\r\n<div *ngIf='classSpells'>\r\n    <div *ngFor=\"let level of classSpells; let i = index\" [attr.data-index]='i'>\r\n        <div *ngIf=\"level.length>0\">\r\n            <h3>Pick {{spellLimit}} Spells from level {{i}} spells</h3>\r\n            <div style='vertical-align: top; display: inline-block' *ngFor='let spell of level'>\r\n                <button style='margin:3px' *ngIf='spell.added==false'\r\n                    (click)='addSpell(spell, i)'>{{spell.name}}</button>\r\n                <button style='margin:3px; background-color: red; color: white' *ngIf='spell.added==true'\r\n                    (click)='cancelSpell(spell, i)'>{{spell.name}}</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div>\r\n    <h4>Choose Stats:</h4>\r\n    <div>\r\n        <span *ngIf= 'stats.strength == null'>Strength: </span>\r\n        <span *ngIf= 'stats.strength != null' style=\"color: red; text-decoration: underline;\">Strength: is {{stats.strength}}</span>\r\n\r\n        <button *ngIf= 'stats.strength!=8' style='margin:10px;' (click)='addStat(\"strength\", 8 )'>8</button>\r\n        <button *ngIf= 'stats.strength == 8' style='background-color: red; color:white;' (click)='addStat(\"strength\", 8)'>8</button>\r\n\r\n        <button *ngIf= 'stats.strength!=10' style='margin:10px;' (click)='addStat(\"strength\", 10 )'>10</button>\r\n        <button *ngIf= 'stats.strength == 10' style='background-color: red; color:white;' (click)='addStat(\"strength\", 10)'>10</button>\r\n\r\n        <button *ngIf= 'stats.strength!=12' style='margin:10px;' (click)='addStat(\"strength\", 12 )'>12</button>\r\n        <button *ngIf= 'stats.strength == 12' style='background-color: red; color:white;' (click)='addStat(\"strength\", 12)'>12</button>\r\n\r\n        <button *ngIf= 'stats.strength!=13' style='margin:10px;' (click)='addStat(\"strength\", 13 )'>13</button>\r\n        <button *ngIf= 'stats.strength == 13' style='background-color: red; color:white;' (click)='addStat(\"strength\", 13)'>13</button>\r\n\r\n        <button *ngIf= 'stats.strength!=14' style='margin:10px;' (click)='addStat(\"strength\", 14 )'>14</button>\r\n        <button *ngIf= 'stats.strength == 14' style='background-color: red; color:white;' (click)='addStat(\"strength\", 14)'>14</button>\r\n\r\n        <button *ngIf= 'stats.strength!=15' style='margin:10px;' (click)='addStat(\"strength\", 15 )'>15</button>\r\n        <button *ngIf= 'stats.strength == 15' style='background-color: red; color:white;' (click)='addStat(\"strength\", 15)'>15</button>\r\n    </div>\r\n    <div>\r\n        <span *ngIf= 'stats.dexterity == null'>Dexterity: </span>\r\n        <span *ngIf= 'stats.dexterity != null' style=\"color: red; text-decoration: underline;\">Dexterity: is {{stats.dexterity}}</span>\r\n\r\n        <button *ngIf= 'stats.dexterity!=8' style='margin:10px;' (click)='addStat(\"dexterity\", 8 )'>8</button>\r\n        <button *ngIf= 'stats.dexterity == 8' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 8)'>8</button>\r\n\r\n        <button *ngIf= 'stats.dexterity!=10' style='margin:10px;' (click)='addStat(\"dexterity\", 10 )'>10</button>\r\n        <button *ngIf= 'stats.dexterity == 10' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 10)'>10</button>\r\n\r\n        <button *ngIf= 'stats.dexterity!=12' style='margin:10px;' (click)='addStat(\"dexterity\", 12 )'>12</button>\r\n        <button *ngIf= 'stats.dexterity == 12' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 12)'>12</button>\r\n\r\n        <button *ngIf= 'stats.dexterity!=13' style='margin:10px;' (click)='addStat(\"dexterity\", 13 )'>13</button>\r\n        <button *ngIf= 'stats.dexterity == 13' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 13)'>13</button>\r\n\r\n        <button *ngIf= 'stats.dexterity!=14' style='margin:10px;' (click)='addStat(\"dexterity\", 14 )'>14</button>\r\n        <button *ngIf= 'stats.dexterity == 14' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 14)'>14</button>\r\n\r\n        <button *ngIf= 'stats.dexterity!=15' style='margin:10px;' (click)='addStat(\"dexterity\", 15 )'>15</button>\r\n        <button *ngIf= 'stats.dexterity == 15' style='background-color: red; color:white;' (click)='addStat(\"dexterity\", 15)'>15</button>\r\n        \r\n        \r\n    </div>\r\n    <div>\r\n        <span *ngIf= 'stats.constitution == null'>Constitution: </span>\r\n        <span *ngIf= 'stats.constitution != null' style=\"color: red; text-decoration: underline;\">Constitution: is {{stats.constitution}}</span>\r\n\r\n        <button *ngIf= 'stats.constitution!=8' style='margin:10px;' (click)='addStat(\"constitution\", 8 )'>8</button>\r\n        <button *ngIf= 'stats.constitution == 8' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 8)'>8</button>\r\n\r\n        <button *ngIf= 'stats.constitution!=10' style='margin:10px;' (click)='addStat(\"constitution\", 10 )'>10</button>\r\n        <button *ngIf= 'stats.constitution == 10' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 10)'>10</button>\r\n\r\n        <button *ngIf= 'stats.constitution!=12' style='margin:10px;' (click)='addStat(\"constitution\", 12 )'>12</button>\r\n        <button *ngIf= 'stats.constitution == 12' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 12)'>12</button>\r\n\r\n        <button *ngIf= 'stats.constitution!=13' style='margin:10px;' (click)='addStat(\"constitution\", 13 )'>13</button>\r\n        <button *ngIf= 'stats.constitution == 13' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 13)'>13</button>\r\n\r\n        <button *ngIf= 'stats.constitution!=14' style='margin:10px;' (click)='addStat(\"constitution\", 14 )'>14</button>\r\n        <button *ngIf= 'stats.constitution == 14' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 14)'>14</button>\r\n\r\n        <button *ngIf= 'stats.constitution!=15' style='margin:10px;' (click)='addStat(\"constitution\", 15 )'>15</button>\r\n        <button *ngIf= 'stats.constitution == 15' style='background-color: red; color:white;' (click)='addStat(\"constitution\", 15)'>15</button>\r\n        \r\n    </div>\r\n    <div>\r\n        <span *ngIf= 'stats.intelligence == null'>Intelligence: </span>\r\n        <span *ngIf= 'stats.intelligence != null' style=\"color: red; text-decoration: underline;\">Intelligence: is {{stats.intelligence}}</span>\r\n\r\n        <button *ngIf= 'stats.intelligence!=8' style='margin:10px;' (click)='addStat(\"intelligence\", 8 )'>8</button>\r\n        <button *ngIf= 'stats.intelligence == 8' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 8)'>8</button>\r\n\r\n        <button *ngIf= 'stats.intelligence!=10' style='margin:10px;' (click)='addStat(\"intelligence\", 10 )'>10</button>\r\n        <button *ngIf= 'stats.intelligence == 10' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 10)'>10</button>\r\n\r\n        <button *ngIf= 'stats.intelligence!=12' style='margin:10px;' (click)='addStat(\"intelligence\", 12 )'>12</button>\r\n        <button *ngIf= 'stats.intelligence == 12' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 12)'>12</button>\r\n\r\n        <button *ngIf= 'stats.intelligence!=13' style='margin:10px;' (click)='addStat(\"intelligence\", 13 )'>13</button>\r\n        <button *ngIf= 'stats.intelligence == 13' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 13)'>13</button>\r\n\r\n        <button *ngIf= 'stats.intelligence!=14'  style='margin:10px;' (click)='addStat(\"intelligence\", 14 )'>14</button>\r\n        <button *ngIf= 'stats.intelligence == 14' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 14)'>14</button>\r\n\r\n        <button *ngIf= 'stats.intelligence!=15' style='margin:10px;' (click)='addStat(\"intelligence\", 15 )'>15</button>\r\n        <button *ngIf= 'stats.intelligence == 15' style='background-color: red; color:white;' (click)='addStat(\"intelligence\", 15)'>15</button>\r\n        \r\n    </div>\r\n    <div>\r\n        <span *ngIf= 'stats.wisdom == null'>Wisdom: </span>\r\n        <span *ngIf= 'stats.wisdom != null' style=\"color: red; text-decoration: underline;\">Wisdom: is {{stats.wisdom}}</span>\r\n\r\n        <button *ngIf= 'stats.wisdom!=8' style='margin:10px;' (click)='addStat(\"wisdom\", 8 )'>8</button>\r\n        <button *ngIf= 'stats.wisdom == 8' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 8)'>8</button>\r\n\r\n        <button *ngIf= 'stats.wisdom!=10' style='margin:10px;' (click)='addStat(\"wisdom\", 10 )'>10</button>\r\n        <button *ngIf= 'stats.wisdom == 10' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 10)'>10</button>\r\n\r\n        <button *ngIf= 'stats.wisdom!=12'  style='margin:10px;' (click)='addStat(\"wisdom\", 12 )'>12</button>\r\n        <button *ngIf= 'stats.wisdom == 12' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 12)'>12</button>\r\n\r\n        <button *ngIf= 'stats.wisdom!=13' style='margin:10px;' (click)='addStat(\"wisdom\", 13 )'>13</button>\r\n        <button *ngIf= 'stats.wisdom == 13' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 13)'>13</button>\r\n\r\n        <button *ngIf= 'stats.wisdom!=14' style='margin:10px;' (click)='addStat(\"wisdom\", 14 )'>14</button>\r\n        <button *ngIf= 'stats.wisdom == 14' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 14)'>14</button>\r\n\r\n        <button *ngIf= 'stats.wisdom!=15' style='margin:10px;' (click)='addStat(\"wisdom\", 15 )'>15</button>\r\n        <button *ngIf= 'stats.wisdom == 15' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"wisdom\", 15)'>15</button>\r\n    </div>\r\n    <div>\r\n        <span *ngIf= 'stats.charisma == null'>Charisma: </span>\r\n        <span *ngIf= 'stats.charisma != null' style=\"color: red; text-decoration: underline;\">Charisma: is {{stats.charisma}}</span>\r\n\r\n        <button *ngIf= 'stats.charisma!=8' style='margin:10px;' (click)='addStat(\"charisma\", 8 )'>8</button>\r\n        <button *ngIf= 'stats.charisma == 8' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 8)'>8</button>\r\n\r\n        <button *ngIf= 'stats.charisma!=10' style='margin:10px;' (click)='addStat(\"charisma\", 10 )'>10</button>\r\n        <button *ngIf= 'stats.charisma == 10' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 10)'>10</button>\r\n\r\n        <button *ngIf= 'stats.charisma!=12' style='margin:10px;' (click)='addStat(\"charisma\", 12 )'>12</button>\r\n        <button *ngIf= 'stats.charisma == 12' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 12)'>12</button>\r\n\r\n        <button *ngIf= 'stats.charisma!=13' style='margin:10px;' (click)='addStat(\"charisma\", 13 )'>13</button>\r\n        <button *ngIf= 'stats.charisma == 13' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 13)'>13</button>\r\n\r\n        <button *ngIf= 'stats.charisma!=14' style='margin:10px;' (click)='addStat(\"charisma\", 14 )'>14</button>\r\n        <button *ngIf= 'stats.charisma == 14' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 14)'>14</button>\r\n\r\n        <button *ngIf= 'stats.charisma!=15' (click)='addStat(\"charisma\", 15 )'>15</button>\r\n        <button *ngIf= 'stats.charisma == 15' style='background-color: red; color:white; margin:10px;' (click)='addStat(\"charisma\", 15)'>15</button>\r\n    </div>\r\n</div>\r\n<div *ngIf= 'errors'>\r\n    <div *ngFor= 'let err of errors'>\r\n        <p style='color:red; font-size: large;'>{{err}}</p>\r\n    </div>\r\n</div>\r\n<button style='background-image: linear-gradient(rgb(235, 222, 153),gold,gold, rgb(235, 222, 153)); box-shadow: 5px 5px rgb(41, 36, 9); color: white; width:300px; height: 100px;margin-top:20px; margin-left: 30%; border-radius: 5px; ' (click)='createCharacter()'>Create Character</button>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stat/stat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stat/stat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div *ngFor=\"let err of errors\">\r\n    <p style=\"color:red;\">{{err}}</p>\r\n</div>\r\n<form (submit)=\"updateCharacter()\">\r\n    <label for=\"STR\">STR\r\n        <input type=\"radio\" name=\"STR\" value=\"9\"> 9\r\n        <input type=\"radio\" name=\"STR\" value=\"10\"> 10\r\n        <input type=\"radio\" name=\"STR\" value=\"12\"> 12\r\n        <input type=\"radio\" name=\"STR\" value=\"13\"> 13\r\n        <input type=\"radio\" name=\"STR\" value=\"14\"> 14\r\n        <input type=\"radio\" name=\"STR\" value=\"15\"> 15<br>\r\n    </label>\r\n    <label for=\"DEX\">DEX\r\n        <input type=\"radio\" name=\"DEX\" value=\"9\"> 9\r\n        <input type=\"radio\" name=\"DEX\" value=\"10\"> 10\r\n        <input type=\"radio\" name=\"DEX\" value=\"12\"> 12\r\n        <input type=\"radio\" name=\"DEX\" value=\"13\"> 13\r\n        <input type=\"radio\" name=\"DEX\" value=\"14\"> 14\r\n        <input type=\"radio\" name=\"DEX\" value=\"15\"> 15<br>\r\n    </label>\r\n    <label for=\"CON\">CON\r\n        <input type=\"radio\" name=\"CON\" value=\"9\"> 9\r\n        <input type=\"radio\" name=\"CON\" value=\"10\"> 10\r\n        <input type=\"radio\" name=\"CON\" value=\"12\"> 12\r\n        <input type=\"radio\" name=\"CON\" value=\"13\"> 13\r\n        <input type=\"radio\" name=\"CON\" value=\"14\"> 14\r\n        <input type=\"radio\" name=\"CON\" value=\"15\"> 15<br>\r\n    </label>\r\n    <label for=\"INT\">INT\r\n        <input type=\"radio\" name=\"INT\" value=\"9\"> 9\r\n        <input type=\"radio\" name=\"INT\" value=\"10\"> 10\r\n        <input type=\"radio\" name=\"INT\" value=\"12\"> 12\r\n        <input type=\"radio\" name=\"INT\" value=\"13\"> 13\r\n        <input type=\"radio\" name=\"INT\" value=\"14\"> 14\r\n        <input type=\"radio\" name=\"INT\" value=\"15\"> 15<br>\r\n    </label>\r\n    <label for=\"WIS\">WIS\r\n        <input type=\"radio\" name=\"WIS\" value=\"9\"> 9\r\n        <input type=\"radio\" name=\"WIS\" value=\"10\"> 10\r\n        <input type=\"radio\" name=\"WIS\" value=\"12\"> 12\r\n        <input type=\"radio\" name=\"WIS\" value=\"13\"> 13\r\n        <input type=\"radio\" name=\"WIS\" value=\"14\"> 14\r\n        <input type=\"radio\" name=\"WIS\" value=\"15\"> 15<br>\r\n    </label>\r\n    <label for=\"CHA\">CHA\r\n        <input type=\"radio\" name=\"CHA\" value=\"9\"> 9\r\n        <input type=\"radio\" name=\"CHA\" value=\"10\"> 10\r\n        <input type=\"radio\" name=\"CHA\" value=\"12\"> 12\r\n        <input type=\"radio\" name=\"CHA\" value=\"13\"> 13\r\n        <input type=\"radio\" name=\"CHA\" value=\"14\"> 14\r\n        <input type=\"radio\" name=\"CHA\" value=\"15\"> 15<br>\r\n    </label>\r\n    <input type=\"submit\">\r\n    </form> ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character-sheet/character-sheet.component */ "./src/app/character-sheet/character-sheet.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");







const routes = [
    { path: '', redirectTo: '/characters', pathMatch: "full" },
    { path: 'characters', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'character/show/:id', component: _character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_4__["CharacterSheetComponent"] },
    { path: 'characters/create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/characters/create' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'public';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-sheet/character-sheet.component */ "./src/app/character-sheet/character-sheet.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _stat_stat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stat/stat.component */ "./src/app/stat/stat.component.ts");
/* harmony import */ var _pick_attributes_pick_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pick-attributes/pick-attributes.component */ "./src/app/pick-attributes/pick-attributes.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _stat_stat_component__WEBPACK_IMPORTED_MODULE_13__["StatComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _character_sheet_character_sheet_component__WEBPACK_IMPORTED_MODULE_10__["CharacterSheetComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
            _create_create_component__WEBPACK_IMPORTED_MODULE_12__["CreateComponent"],
            _pick_attributes_pick_attributes_component__WEBPACK_IMPORTED_MODULE_14__["PickAttributesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"].forRoot()
        ],
        providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/character-sheet/character-sheet.component.css":
/*!***************************************************************!*\
  !*** ./src/app/character-sheet/character-sheet.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\r\n    margin-bottom: 10px;\r\n}\r\n#character_info{\r\n    border: 1px solid black;\r\n    padding: 20px;\r\n}\r\n#stats_and_skills{\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n#combat{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: center;\r\n    margin-left: 30px;\r\n}\r\n.stat_block{\r\n    padding: 20px;\r\n    border: 1px solid black;\r\n}\r\n#features_and_spells{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    text-align: center;\r\n    margin-left: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmFjdGVyLXNoZWV0L2NoYXJhY3Rlci1zaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jaGFyYWN0ZXItc2hlZXQvY2hhcmFjdGVyLXNoZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2NoYXJhY3Rlcl9pbmZve1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiNzdGF0c19hbmRfc2tpbGxze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNjb21iYXR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLnN0YXRfYmxvY2t7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuI2ZlYXR1cmVzX2FuZF9zcGVsbHN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/character-sheet/character-sheet.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/character-sheet/character-sheet.component.ts ***!
  \**************************************************************/
/*! exports provided: CharacterSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheetComponent", function() { return CharacterSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CharacterSheetComponent = class CharacterSheetComponent {
    constructor(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.allSkills = [];
        this.listOfProf = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.getOneCharacterFromService(params['id']);
            this.getAllSkillsFromService();
        });
        this.classFeatures = [];
        this.firstLevelClass = this.oneCharacter.character_class[0];
        this.totalLevel = this.oneCharacter.character_class.length;
    }
    getOneCharacterFromService(id) {
        let observable = this._httpService.getOneCharacter(id);
        observable.subscribe(data => {
            this.oneCharacter = data['results'];
            this.getAllFeatures();
            this.getAllSkillsFromService();
            console.log("I'm here now");
            this.getHpFromClass(this.oneCharacter.character_class[0]);
            console.log(this.listOfProf);
            this.profCheck();
        });
    }
    profCheck() {
        console.log(this.oneCharacter.skills[0].name);
        console.log("Skill: " + this.allSkills[2].name);
        for (var i = 0; i < this.oneCharacter.skills.length; i++) {
            for (var j = 0; j < this.allSkills.length; j++) {
                if (this.oneCharacter.skills[i].name == "Skill: " + this.allSkills[j].name) {
                    this.listOfProf[j] = 1;
                    console.log("We found a match!");
                }
            }
        }
    }
    getAllSkillsFromService() {
        let obs = this._httpService.getAllSkills();
        obs.subscribe(data => {
            if (data['results']) {
                this.allSkills = data['results'];
                console.log(this.allSkills);
            }
        });
    }
    getAllFeatures() {
        this.classFeatures = [];
        let character_class_name = this.oneCharacter.character_class[0];
        let character_level = this.oneCharacter.character_class.length;
        console.log(character_level);
        console.log(character_class_name);
        for (var i = character_level; i > 0; i--) {
            let obs = this._httpService.getAllFeaturesForClassAndLevel(character_class_name.toLowerCase(), character_level);
            obs.subscribe(data => {
                console.log(data);
                for (var feature of data['results']) {
                    var test = true;
                    for (var f of this.classFeatures) {
                        if (feature.name == f.name) {
                            test = false;
                        }
                    }
                    if (test == true)
                        this.classFeatures.push(feature);
                }
                console.log(data['results']);
                console.log(this.classFeatures);
            });
        }
    }
    getHpFromClass(x) {
        console.log(x);
        if (x == "Barbarian") {
            this.characterHP = 12;
        }
        else if (x == "Bard") {
            this.characterHP = 8;
        }
        else if (x == "Cleric") {
            this.characterHP = 8;
        }
        else if (x == "Druid") {
            this.characterHP = 8;
        }
        else if (x == "Fighter") {
            this.characterHP = 10;
        }
        else if (x == "Monk") {
            this.characterHP = 8;
        }
        else if (x == "Paladin") {
            this.characterHP = 10;
        }
        else if (x == "Ranger") {
            this.characterHP = 10;
        }
        else if (x == "Rogue") {
            this.characterHP = 8;
        }
        else if (x == "Sorcerer") {
            this.characterHP = 6;
        }
        else if (x == "Warlock") {
            this.characterHP = 8;
        }
        else if (x == "Wizard") {
            this.characterHP = 6;
        }
        else {
            this.characterHP = 0;
        }
        console.log(this.characterHP);
    }
    sumHp() {
        console.log();
        this.totalLevel = this.getHpFromClass(this.oneCharacter.character_class[0]);
    }
};
CharacterSheetComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CharacterSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-sheet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-sheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/character-sheet/character-sheet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-sheet.component.css */ "./src/app/character-sheet/character-sheet.component.css")).default]
    })
], CharacterSheetComponent);



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n    width: 150px;\r\n    height: 200px;\r\n    border: 1px solid slategray;\r\n    margin: 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyYXk7XHJcbiAgICBtYXJnaW46IDJweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreateComponent = class CreateComponent {
    constructor(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this._opened = true;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.errors = [];
    }
    ngOnInit() {
        this.getAllClasses();
        this.getAllRaces();
        this.newCharacter = {
            name: '',
            description: '',
            race: '',
            character_class: '',
            inventory: [],
            stats: []
        };
    }
    createCharacter() {
        this.errors = [];
        let obs = this._httpService.createCharacter(this.newCharacter);
        obs.subscribe(data => {
            if (data['results']) {
                this.newCharacter = {
                    name: '',
                    description: '',
                    race: '',
                    character_class: '',
                    inventory: [],
                    stats: []
                };
                console.log(data);
            }
            else if (data['errors']) {
                for (var key in data['errors']) {
                    this.errors.push(data['errors'][key]['message']);
                }
            }
        });
    }
    getAllRaces() {
        let obs = this._httpService.getAllRaces();
        obs.subscribe(data => {
            if (data['results']) {
                this.allRaces = data['results'];
            }
        });
    }
    getAllClasses() {
        let obs = this._httpService.getAllClasses();
        obs.subscribe(data => {
            if (data['results']) {
                this.allClasses = data['results'];
            }
        });
    }
    chooseRace(race, raceIndex) {
        this.race = null;
        this.newCharacter.race = race;
        this.race = race;
        this.raceIndex = raceIndex;
        this.getARace(raceIndex);
    }
    getARace(raceIndex) {
        let obs = this._httpService.getARace(raceIndex);
        obs.subscribe(data => {
            if (data) {
                this.oneRace = data;
            }
        });
    }
    chooseClass(character_class, classIndex) {
        this.playAudio(character_class);
        this.newCharacter.character_class = character_class;
        this.classIndex = classIndex;
    }
    playAudio(character_class) {
        let audio = new Audio();
        audio.src = `../../assets/audio/${character_class}.mp3`;
        audio.load();
        audio.play();
    }
    onUpdate(event) {
        console.log('newCharacter', event);
        this.newCharacter = event;
    }
};
CreateComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateComponent.prototype, "add", void 0);
CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create/create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")).default]
    })
], CreateComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
    }
    ngOnInit() {
        this.getAllCharactersFromService();
    }
    getAllCharactersFromService() {
        let observable = this._httpService.getAllCharacters();
        observable.subscribe(data => {
            if (data['results']) {
                this.allCharacters = data['results'];
            }
        });
    }
    destroyOneCharacter(id) {
        let observable = this._httpService.destroyCharacter(id);
        observable.subscribe(data => {
            if (data['results']) {
                this.getAllCharactersFromService();
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(_http) {
        this._http = _http;
    }
    getAllCharacters() {
        return this._http.get('/api/characters');
    }
    getOneCharacter(id) {
        return this._http.get(`/api/character/${id}`);
    }
    createCharacter(newCharacter) {
        return this._http.post('/api/character/create', newCharacter);
    }
    updateCharacter(updateCharacter) {
        return this._http.put(`/api/character/update/${updateCharacter._id}`, updateCharacter);
    }
    destroyCharacter(id) {
        return this._http.delete(`/api/character/destroy/${id}`);
    }
    getAllRaces() {
        return this._http.get('http://www.dnd5eapi.co/api/races');
    }
    getAllClasses() {
        return this._http.get('http://www.dnd5eapi.co/api/classes');
    }
    getOneClass(class_index) {
        return this._http.get(`http://www.dnd5eapi.co/api/classes/${class_index}`);
    }
    getOneRace(race_index) {
        return this._http.get(`http://www.dnd5eapi.co/api/classes/${race_index}`);
    }
    getAllSpellsForClassAndLevel(name, level) {
        return this._http.get(`http://www.dnd5eapi.co/api/spells/${name}/level/${level}`);
    }
    getAllFeaturesForClassAndLevel(name, level) {
        return this._http.get(`http://www.dnd5eapi.co/api/features/${name}/level/${level}`);
    }
    getARace(raceIndex) {
        return this._http.get(`http://www.dnd5eapi.co/api/races/${raceIndex}`);
    }
    getAllSkills() {
        return this._http.get('http://www.dnd5eapi.co/api/skills');
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/pick-attributes/pick-attributes.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pick-attributes/pick-attributes.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpY2stYXR0cmlidXRlcy9waWNrLWF0dHJpYnV0ZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pick-attributes/pick-attributes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pick-attributes/pick-attributes.component.ts ***!
  \**************************************************************/
/*! exports provided: PickAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickAttributesComponent", function() { return PickAttributesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PickAttributesComponent = class PickAttributesComponent {
    constructor(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.characterClassMap = {
            1: 'barbarian',
            2: 'bard',
            3: 'cleric',
            4: 'druid',
            5: 'fighter',
            6: 'monk',
            7: 'paladin',
            8: 'ranger',
            9: 'rogue',
            10: 'sorcerer',
            11: 'warlock',
            12: 'wizard'
        };
        this.stats = {
            'strength': null,
            'dexterity': null,
            'constitution': null,
            'intelligence': null,
            'wisdom': null,
            'charisma': null
        };
        this.characterSkills = [];
        this.classSkills = [];
        this.getOneClass(this.classIndex);
        this.classSpells = [];
        this.characterSpells = [];
        this.spellLimit = 4;
        this.characterLevel = 1;
        this.classFeatures = [];
        this.getAllFeatures();
        this.getAllSpells();
    }
    ngOnChanges() {
        this.getOneClass(this.classIndex);
        this.getAllSpells();
        this.getAllFeatures();
        this.stats = {
            'strength': null,
            'dexterity': null,
            'constitution': null,
            'intelligence': null,
            'wisdom': null,
            'charisma': null
        };
        this.errors = [];
    }
    getOneClass(classIndex) {
        this.classSpells = [];
        this.characterSkills = [];
        this.classSkills = [];
        let obs = this._httpService.getOneClass(classIndex);
        obs.subscribe(data => {
            console.log(data);
            this.characterClass = data;
            for (var skill of this.characterClass['proficiency_choices'][0]['from']) {
                this.classSkills.push({
                    name: skill.name,
                    added: false
                });
            }
            console.log(this.classSkills);
        });
    }
    addSkill(skill) {
        if (this.characterSkills.length < this.characterClass['proficiency_choices'][0]['choose']) {
            this.characterSkills.push(skill);
        }
        else {
            let canceled = this.characterSkills[this.characterSkills.length - 1];
            this.characterSkills.splice(this.characterSkills.length - 1, 1);
            this.characterSkills.push(skill);
            canceled.added = false;
        }
        this.newCharacter.skills = this.characterSkills;
        this.emitCharacter();
        console.log(this.characterSkills);
        skill.added = true;
    }
    cancelSkill(skill) {
        for (var i = 0; i < this.characterSkills.length; i++) {
            if (this.characterSkills[i] == skill) {
                this.characterSkills[i].added = false;
                this.characterSkills.splice(i, 1);
            }
            console.log(this.characterSkills);
            this.newCharacter.skills = this.characterSkills;
            this.emitCharacter();
        }
    }
    getAllSpells() {
        console.log('get all spells running');
        this.characterSpells = [];
        let character_class_name = (this.characterClassMap[this.classIndex]);
        console.log(character_class_name);
        for (let i = 0; i <= this.characterLevel; i++) {
            this.classSpells.push([]);
            let obs = this._httpService.getAllSpellsForClassAndLevel(character_class_name, i);
            obs.subscribe(data => {
                for (var spell of data['results']) {
                    this.classSpells[i].push({
                        name: spell['name'],
                        added: false
                    });
                }
            });
        }
        this.characterSpells = [];
        for (let i = 0; i <= this.characterLevel; i++) {
            this.characterSpells.push([]);
        }
        console.log("class spells:", this.classSpells);
    }
    getAllFeatures() {
        this.classFeatures = [];
        let character_class_name = (this.characterClassMap[this.classIndex]);
        console.log(character_class_name);
        let obs = this._httpService.getAllFeaturesForClassAndLevel(character_class_name, this.characterLevel);
        obs.subscribe(data => {
            for (var feature of data['results']) {
                var test = true;
                for (var f of this.classFeatures) {
                    if (feature.name == f.name) {
                        test = false;
                    }
                }
                if (test == true)
                    this.classFeatures.push(feature);
            }
            console.log(data['results']);
            console.log(this.classFeatures);
        });
    }
    addSpell(spell, level) {
        console.log(level);
        console.log(this.characterSpells);
        if (this.characterSpells[level].length < this.spellLimit) {
            this.characterSpells[level].push(spell);
        }
        else {
            let canceled = this.characterSpells[level][this.characterSpells[level].length - 1];
            this.characterSpells[level].splice(this.characterSpells[level].length - 1, 1);
            this.characterSpells[level].push(spell);
            canceled.added = false;
        }
        this.newCharacter.spells = this.characterSpells;
        this.emitCharacter();
        console.log(this.characterSpells);
        spell.added = true;
    }
    cancelSpell(spell, level) {
        for (let i = 0; i < this.characterSpells.length; i++) {
            if (this.characterSpells[level][i] == spell) {
                this.characterSpells[level][i].added = false;
                this.characterSpells[level].splice(i, 1);
            }
            console.log(this.characterSpells);
            this.newCharacter.spells = this.characterSpells;
            this.emitCharacter();
        }
    }
    addStat(stat, value) {
        console.log(stat);
        if (value == this.stats.strength) {
            this.stats.strength = null;
        }
        else if (value == this.stats.dexterity) {
            this.stats.dexterity = null;
        }
        else if (value == this.stats.constitution) {
            this.stats.constitution = null;
        }
        else if (value == this.stats.intelligence) {
            this.stats.intelligence = null;
        }
        else if (value == this.stats.wisdom) {
            this.stats.wisdom = null;
        }
        else if (value == this.stats.charisma) {
            this.stats.charisma = null;
        }
        this.stats[stat] = value;
        console.log(this.stats);
        this.characterSkills.stats = this.stats;
        this.newCharacter.stats = this.stats;
        this.emitCharacter();
    }
    createCharacter() {
        this.errors = [];
        this.newCharacter.spells = this.characterSpells;
        this.newCharacter.skills = this.characterSkills;
        this.newCharacter.stats = this.stats;
        console.log(this.newCharacter);
        if (this.newCharacter.name == '') {
            this.errors.push('You need a name');
        }
        if (this.newCharacter.description == '') {
            this.errors.push('You need a description');
        }
        if (this.newCharacter.race == '') {
            this.errors.push('You need a race');
        }
        if (this.newCharacter.skills.length != this.characterClass['proficiency_choices'][0]['choose']) {
            this.errors.push(`You can have ${this.characterClass['proficiency_choices'][0]['choose']} skills but you only have ${this.newCharacter.skills.length}`);
        }
        if (this.newCharacter.stats.strength == null || this.newCharacter.stats.dexterity == null || this.newCharacter.stats.constitution == null || this.newCharacter.stats.intelligence == null || this.newCharacter.stats.wisdom == null || this.newCharacter.stats.charisma == null) {
            this.errors.push("You are missing an input for your stats");
        }
        else {
            let obs = this._httpService.createCharacter(this.newCharacter);
            obs.subscribe(data => {
                if (data['results']) {
                    console.log(data);
                    this.newCharacter = {
                        name: '',
                        description: '',
                        race: '',
                        character_class: '',
                        inventory: [],
                        stats: {},
                        spells: [],
                        skills: []
                    };
                    console.log('character was created', data);
                    this._router.navigate(['/characters']);
                }
                else if (data['errors']) {
                    for (var key in data['errors']) {
                        this.errors.push(data['errors'][key]['message']);
                    }
                }
            });
        }
    }
    emitCharacter() {
        console.log('emitting', this.newCharacter);
        this.add.emit(this.newCharacter);
    }
};
PickAttributesComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PickAttributesComponent.prototype, "add", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PickAttributesComponent.prototype, "classIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PickAttributesComponent.prototype, "newCharacter", void 0);
PickAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pick-attributes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pick-attributes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pick-attributes/pick-attributes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pick-attributes.component.css */ "./src/app/pick-attributes/pick-attributes.component.css")).default]
    })
], PickAttributesComponent);



/***/ }),

/***/ "./src/app/stat/stat.component.css":
/*!*****************************************!*\
  !*** ./src/app/stat/stat.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXQvc3RhdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/stat/stat.component.ts":
/*!****************************************!*\
  !*** ./src/app/stat/stat.component.ts ***!
  \****************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let StatComponent = class StatComponent {
    constructor(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.errors = [];
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.getEditCharacter(params['id']);
        });
    }
    getEditCharacter(id) {
        let obs = this._httpService.getOneCharacter(id);
        obs.subscribe(data => {
            if (data['results']) {
                this.editCharacter = data['results'];
            }
        });
    }
    updateCharacter() {
        this.errors = [];
        let obs = this._httpService.updateCharacter(this.editCharacter);
        obs.subscribe(data => {
            if (data['results']) {
                this._router.navigate(['/']);
            }
            else if (data['errors']) {
                for (var key in data['errors']) {
                    this.errors.push(data['errors'][key]['message']);
                }
            }
        });
    }
};
StatComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
StatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stat/stat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stat.component.css */ "./src/app/stat/stat.component.css")).default]
    })
], StatComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Source\MEAN_Stack\mean_intro\rollinitiative-2\rollinitiative\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map