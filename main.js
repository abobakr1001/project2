(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Beko\project-movie\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shows.service */ "QWaw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function HomeComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imgPrefix + movie_r3.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", movie_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.original_language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r3.release_date.split("-").slice(0, 1));
} }
function HomeComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tv_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imgPrefix + tv_r4.poster_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", tv_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tv_r4.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tv_r4.original_language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tv_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tv_r4.first_air_date.split("-").slice(0, 1));
} }
function HomeComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.imgPrefix + person_r5.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", person_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r5.known_for_department);
} }
class HomeComponent {
    constructor(ShowsService) {
        this.ShowsService = ShowsService;
        this.trendingMovies = [];
        this.trendingTv = [];
        this.trendingperson = [];
        this.imgPrefix = "https://image.tmdb.org/t/p/w500";
        this.ShowsService.getTrendingShows("movie").subscribe((e) => {
            this.trendingMovies = e.results.slice(2, 6);
        });
        this.ShowsService.getTrendingShows("tv").subscribe((e) => {
            this.trendingTv = e.results.slice(2, 6);
        });
        this.ShowsService.getTrendingShows("person").subscribe((e) => {
            this.trendingperson = e.results.slice(2, 6);
        });
    }
    ngOnInit() {
    }
    getStartedBtn() {
        var _a;
        (_a = document.querySelector('#trendingMovies')) === null || _a === void 0 ? void 0 : _a.scrollIntoView();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 45, vars: 3, consts: [[1, "container"], ["href", ""], [1, "header-btn", 3, "click"], [1, "fas", "fa-play", "mr-1"], ["id", "trendingMovies", 1, "trend"], [1, "movies"], [1, "row"], ["class", "col-md-6 col-lg-3", 4, "ngFor", "ngForOf"], ["id", "trendingTv", 1, "trend"], ["id", "trendingPerson", 1, "trend"], [1, "col-md-6", "col-lg-3"], [1, "movie"], [1, "movie-cover"], [1, "img-fluid", 3, "src", "alt"], [1, "movie-details"], [1, "movie-rate"], [1, "far", "fa-star"], [1, "movie-title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Flix Tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Trending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", TVs Shows, & More.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Drama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Romance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Comedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_21_listener() { return ctx.getStartedBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "Section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Top Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, HomeComponent_div_30_Template, 16, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "Section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Top Trending Tv Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomeComponent_div_37_Template, 16, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "Section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Top Trending Actors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HomeComponent_div_44_Template, 11, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendingMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendingTv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendingperson);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["header[_ngcontent-%COMP%] {\n  font-family: \"Rubik\";\n  padding: 20px 0;\n  height: 90vh;\n  background-image: url('header_logo.jpg');\n  background-size: cover;\n  background-position: center center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\nheader[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2f80ed;\n  font-size: 26px;\n  margin-bottom: 10px;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 60px;\n  font-weight: 700;\n  margin-bottom: 20px;\n  width: 55%;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2f80ed;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  color: #e3dfdf;\n  margin-right: 5px;\n  transition: 0.2s;\n}\nheader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #2f80ed;\n}\nheader[_ngcontent-%COMP%]   .header-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 16px 34px;\n  border: 2px solid #2f80ed;\n  border-radius: 50px;\n  text-decoration: none;\n  color: #2f80ed;\n  animation: upAndDown 1s infinite alternate;\n  position: relative;\n  font-size: 18px;\n  transition: 0.25s;\n}\nheader[_ngcontent-%COMP%]   .header-btn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #2f80ed;\n}\n@keyframes upAndDown {\n  0% {\n    top: 20px;\n  }\n  99% {\n    top: 0;\n  }\n}\n@media screen and (max-width: 575px) {\n  header[_ngcontent-%COMP%] {\n    height: calc(100vh - 105px);\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    width: 95%;\n    font-size: 45px;\n  }\n}\n@media screen and (min-width: 576px) and (max-width: 767px) {\n  header[_ngcontent-%COMP%] {\n    height: calc(100vh - 105px);\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    width: 95%;\n    font-size: 50px;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 991px) {\n  header[_ngcontent-%COMP%] {\n    height: calc(100vh - 105px);\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    width: 95%;\n    font-size: 50px;\n  }\n}\n@media screen and (min-width: 992px) and (max-width: 1199px) {\n  header[_ngcontent-%COMP%] {\n    height: calc(100vh - 105px);\n  }\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    width: 60%;\n    font-size: 50px;\n  }\n}\n\n\n.trend[_ngcontent-%COMP%] {\n  background-color: #131720;\n  color: white;\n  padding: 100px 0;\n}\n.trend[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 42px;\n  margin: 24px auto 48px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 15px 0;\n  transition: 0.3s;\n  position: relative;\n}\n.trend[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 50%;\n  height: 2px;\n  background-color: #2f80ed;\n  position: absolute;\n  bottom: 0;\n  left: 25%;\n  transition: 0.25s;\n}\n.trend[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover {\n  color: #2f80ed;\n}\n.trend[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover::before {\n  width: 75%;\n  left: 12.5%;\n}\n\n\n.movies[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  padding: 0 0 48px 0;\n}\n.movie[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 28px;\n  border-radius: 4px;\n}\n.movie[_ngcontent-%COMP%]   .movie-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  transition: 0.5s;\n}\n.movie[_ngcontent-%COMP%]   .movie-details[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  opacity: 1;\n  transition: 0.3s;\n}\n.movie[_ngcontent-%COMP%]   .movie-rate[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 12px;\n  font-size: 15px;\n  font-weight: 500;\n}\n.movie[_ngcontent-%COMP%]   .movie-rate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #151f30;\n  padding: 1px 5px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n.movie[_ngcontent-%COMP%]   .movie-rate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2f80ed;\n  margin-right: 4px;\n}\n.movie[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 12px;\n  color: #2f80ed;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n.movie[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  width: 75%;\n}\n.movie[_ngcontent-%COMP%]   .movie-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.movie[_ngcontent-%COMP%]:hover   .movie-details[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.movie[_ngcontent-%COMP%]:hover   .movie-cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU0NTU1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EscURBQUE7QUFDQTtFQUVJLG9CQ0ZTO0VER1QsZUFBQTtFQUNBLFlBQUE7RUFFSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFFSixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFISjtBQUtJO0VBRUksY0NuQks7RURvQkwsZUFBQTtFQUNBLG1CQUFBO0FBSlI7QUFNSTtFQUVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFMUjtBQU1RO0VBRUksY0NoQ0M7QUQyQmI7QUFRSTtFQUVJLG1CQUFBO0FBUFI7QUFRUTtFQUVJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFQWjtBQVFZO0VBRUksY0NoREg7QUR5Q2I7QUFXSTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNDM0RLO0VENERMLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWUjtBQVdRO0VBRUksWUFBQTtFQUNBLHlCQ25FQztBRHlEYjtBQWNBO0VBQ0k7SUFDSSxTQUFBO0VBWE47RUFhRTtJQUNJLE1BQUE7RUFYTjtBQUNGO0FBYUE7RUFDSTtJQUVJLDJCQUFBO0VBWk47RUFhTTtJQUVJLFVBQUE7SUFDQSxlQUFBO0VBWlY7QUFDRjtBQWVBO0VBQ0k7SUFFSSwyQkFBQTtFQWROO0VBZU07SUFFSSxVQUFBO0lBQ0EsZUFBQTtFQWRWO0FBQ0Y7QUFpQkE7RUFDSTtJQUVJLDJCQUFBO0VBaEJOO0VBaUJNO0lBRUksVUFBQTtJQUNBLGVBQUE7RUFoQlY7QUFDRjtBQW1CQTtFQUNJO0lBRUksMkJBQUE7RUFsQk47RUFtQk07SUFFSSxVQUFBO0lBQ0EsZUFBQTtFQWxCVjtBQUNGO0FBcUJBLG1EQUFBO0FBR0Esc0VBQUE7QUFDQTtFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBdEJKO0FBd0JJO0VBRUksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUF4QlI7QUF5QlE7RUFFSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkNuSkM7RURvSkQsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBeEJaO0FBNEJRO0VBRUksY0M3SkM7QURrSWI7QUE0Qlk7RUFFSSxVQUFBO0VBQ0EsV0FBQTtBQTNCaEI7QUFpQ0Esc0VBQUE7QUFFQSx5RUFBQTtBQUNBO0VBRUksaURBQUE7RUFDQSxtQkFBQTtBQWhDSjtBQWtDQTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBaENKO0FBbUNRO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFsQ1o7QUFzQ0k7RUFFSSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBckNSO0FBd0NJO0VBR0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXhDUjtBQXlDUTtFQUVJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQXhDWjtBQXlDWTtFQUVJLGNDaE9IO0VEaU9HLGlCQUFBO0FBeENoQjtBQTRDSTtFQUVJLG9DQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNDN09LO0VEOE9MLG1CQUFBO0VBQ0EsZ0JBQUE7QUE1Q1I7QUE2Q1E7RUFHSSxVQUFBO0FBN0NaO0FBK0NRO0VBRUksU0FBQTtBQTlDWjtBQW1EUTtFQUVJLFVBQUE7QUFsRFo7QUFzRFk7RUFFSSxxQkFBQTtBQXJEaEI7QUEyREEseUVBQUEiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvU0NTUy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4vKl9fX19fX19fX19fX19fX19fXyBzdGFydCBoZWFkZXIgX19fX19fX19fX19fX19fX19fKi9cclxuaGVhZGVyXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAkc2Vjb25kRm9udDtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBpbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyX2xvZ28uanBnKTtcclxuICAgICAgICBzaXplOiBjb3ZlcjtcclxuICAgICAgICBwb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIH07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGgzXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICBoMVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgc3BhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgYVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTNkZmRmO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW5Db2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5oZWFkZXItYnRuXHJcbiAgICB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMzRweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkbWFpbkNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gICAgICAgIGFuaW1hdGlvbjogdXBBbmREb3duIDFzIGluZmluaXRlICBhbHRlcm5hdGU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgdXBBbmREb3due1xyXG4gICAgMCV7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgOTkle1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgaGVhZGVyXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xyXG4gICAgICAgIGgxXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgaGVhZGVyXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xyXG4gICAgICAgIGgxXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTFweCApe1xyXG4gICAgaGVhZGVyXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xyXG4gICAgICAgIGgxXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDoxMTk5cHggKXtcclxuICAgIGhlYWRlclxyXG4gICAge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwNXB4KTtcclxuICAgICAgICBoMVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKl9fX19fX19fX19fX19fX19fXyBlbmQgaGVhZGVyIF9fX19fX19fX19fX19fX19fXyovXHJcblxyXG5cclxuLypfX19fX19fX19fX19fX19fX18gc3R5bGUgZm9yIGV2ZXJ5IHRyZW5kIHNlY3Rpb24gX19fX19fX19fX19fX19fX19fKi9cclxuLnRyZW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE3MjA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG5cclxuICAgIGgyXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgIG1hcmdpbjogMjRweCBhdXRvIDQ4cHggO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6OmJlZm9yZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gICAgICAgICAgICAmOjpiZWZvcmVcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEyLjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4vKl9fX19fX19fX19fX19fX19fXyBzdHlsZSBmb3IgZXZlcnkgdHJlbmQgc2VjdGlvbiBfX19fX19fX19fX19fX19fX18qL1xyXG5cclxuLypfX19fX19fX19fX19fX19fX18gc3R5bGUgZm9yIHRyZW5kaW5nIG1vdmllIHNlY3Rpb24gX19fX19fX19fX19fX19fX19fKi9cclxuLm1vdmllc1xyXG57XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IDAuMSk7XHJcbiAgICBwYWRkaW5nOiAwIDAgNDhweCAwO1xyXG59XHJcbi5tb3ZpZVxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC5tb3ZpZS1jb3ZlclxyXG4gICAge1xyXG4gICAgICAgIGltZ1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tb3ZpZS1kZXRhaWxzXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuMyk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG5cclxuICAgIH1cclxuICAgIC5tb3ZpZS1yYXRlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdHVycXVvaXNlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWYzMCA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFweCA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG1haW5Db2xvcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1vdmllLXRpdGxlXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IGJsYWNrLCAkYWxwaGE6IDAuNyk7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGg0XHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXJcclxuICAgIHtcclxuICAgICAgICAubW92aWUtZGV0YWlsc1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vdmllLWNvdmVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWdcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKl9fX19fX19fX19fX19fX19fXyBzdHlsZSBmb3IgdHJlbmRpbmcgbW92aWUgc2VjdGlvbiBfX19fX19fX19fX19fX19fX18qL1xyXG4iLCIkbWFpbkNvbG9yIDogIzJmODBlZDtcbiRtYWluRm9udDogJ0ludGVyJztcbiRzZWNvbmRGb250OiAnUnViaWsnOyJdfQ== */"] });


/***/ }),

/***/ "DREz":
/*!***********************************************************************!*\
  !*** ./src/app/components/scroll-top-btn/scroll-top-btn.component.ts ***!
  \***********************************************************************/
/*! exports provided: ScrollTopBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopBtnComponent", function() { return ScrollTopBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ScrollTopBtnComponent {
    constructor() { }
    ngOnInit() {
    }
    onWindowScroll() {
        let scrollBtn = document.querySelector(".scroll-btn");
        let showBtn = window.scrollY;
        if (showBtn > 1200) {
            scrollBtn === null || scrollBtn === void 0 ? void 0 : scrollBtn.classList.add("scroll-btn-show");
        }
        else {
            scrollBtn === null || scrollBtn === void 0 ? void 0 : scrollBtn.classList.remove("scroll-btn-show");
        }
    }
    scrollTop() {
        window.scrollTo(0, 0);
    }
}
ScrollTopBtnComponent.ɵfac = function ScrollTopBtnComponent_Factory(t) { return new (t || ScrollTopBtnComponent)(); };
ScrollTopBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollTopBtnComponent, selectors: [["app-scroll-top-btn"]], decls: 2, vars: 0, consts: [[1, "scroll-btn", 3, "click"], [1, "fas", "fa-angle-double-up"]], template: function ScrollTopBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopBtnComponent_Template_div_click_0_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".scroll-btn[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #2f80ed;\n  position: fixed;\n  right: 50px;\n  bottom: 50px;\n  opacity: 0;\n  transition: 0.25s;\n  cursor: pointer;\n}\n.scroll-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 28px;\n  color: white;\n}\n.scroll-btn-show[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: 0.25s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3JvbGwtdG9wLWJ0bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBQ0k7RUFFSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQVI7QUFJQTtFQUVJLFVBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6InNjcm9sbC10b3AtYnRuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1idG5cclxue1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmODBlZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaVxyXG4gICAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nyb2xsLWJ0bi1zaG93XHJcbntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 9, vars: 0, consts: [["id", "notfound"], [1, "container"], [1, "notfound-content"], ["routerLink", "/home"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The page you are looking for not available!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#notfound[_ngcontent-%COMP%] {\n  background-image: url('signbg.jpg');\n  background-size: cover;\n  background-position: center center;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n#notfound[_ngcontent-%COMP%]   .notfound-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 50px;\n  border-radius: 16px;\n  background-color: #131720;\n  border: 1px solid #151f30;\n  margin: auto;\n}\n#notfound[_ngcontent-%COMP%]   .notfound-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #2f80ed;\n  line-height: 100%;\n  margin-bottom: 14px;\n  font-size: 120px;\n  font-weight: 500;\n  font-family: \"Rubik\";\n}\n#notfound[_ngcontent-%COMP%]   .notfound-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 48px;\n}\n#notfound[_ngcontent-%COMP%]   .notfound-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 20px 60px;\n  border-radius: 18px;\n  background-color: #2f80ed;\n  font-size: 14px;\n  color: #e0e0e0;\n  text-transform: uppercase;\n  font-weight: 600;\n  text-decoration: none;\n  transition: 0.3s;\n}\n#notfound[_ngcontent-%COMP%]   .notfound-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTQ1NTXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdRLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUVKLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFJSTtFQUVJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSFI7QUFJUTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQzNCSDtBRHVCYjtBQU9RO0VBRUksV0FBQTtFQUNBLG1CQUFBO0FBTlo7QUFRUTtFQUVJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFQWjtBQVFZO0VBRUksdUJBQUE7RUFDQSxZQUFBO0FBUGhCIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvU0NTUy92YXJpYWJsZXMuc2Nzc1wiO1xyXG4jbm90Zm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIGltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zaWduYmcuanBnKTtcclxuICAgICAgICBzaXplOiBjb3ZlciA7XHJcbiAgICAgICAgcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICB9O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubm90Zm91bmQtY29udGVudFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTcyMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTUxZjMwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBoMVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICMyZjgwZWQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiAxMjBweDtcclxuICAgICAgICAgICAgICAgIHdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAkc2Vjb25kRm9udDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmODBlZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRtYWluQ29sb3IgOiAjMmY4MGVkO1xuJG1haW5Gb250OiAnSW50ZXInO1xuJHNlY29uZEZvbnQ6ICdSdWJpayc7Il19 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-media/social-media.component */ "TSr6");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 59, vars: 0, consts: [[1, "container"], [1, "footer-body"], [1, "row"], [1, "col-md-6", "col-lg-4", "footer-col"], ["src", "../../assets/images/logo.svg", "alt", "", 1, "footer-img", "img-fluid"], [1, "footer-p"], [1, "col-md-4", "col-lg-2", "footer-col"], [1, "footer-title"], [1, "footer-link"], [1, "col-6"], [1, "footer-copyright"], ["href", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Movies & TV Shows, actors of cinema,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Movie database HTML Template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-social-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " FlixTV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " About us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " My profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Pricing plans ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Browse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Live TV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Live News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Live Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Stream Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Kids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Collections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Account & Billing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Plans & Pricing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Supported devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Accessibility ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Copyright \u00A92021 All rights reserved YOUR NAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "ABOBakr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_1__["SocialMediaComponent"]], styles: ["footer[_ngcontent-%COMP%] {\n  background-color: #131924;\n  padding: 40px 0 0 0;\n  color: white;\n}\nfooter[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\nfooter[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-p[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  color: #e0e0e0;\n  font-size: 14px;\n  font-family: \"Inter\";\n}\nfooter[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-col[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\nfooter[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Rubik\";\n  font-weight: 500;\n  margin-bottom: 15px;\n}\nfooter[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"Inter\";\n  font-weight: 500;\n  margin-bottom: 10px;\n  transition: 0.35s;\n}\nfooter[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%]:hover {\n  color: #2f80ed;\n}\nfooter[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  text-align: center;\n  border-top: 1px solid rgba(47, 128, 237, 0.3);\n  color: #e0e0e0;\n  font-size: 16px;\n  font-weight: 300;\n  font-family: \"Courier New\";\n}\nfooter[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: dodgerblue;\n  transition: 0.2s;\n}\nfooter[_ngcontent-%COMP%]   .footer-copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTQ1NTXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRko7QUFHSTtFQUVJLGVBQUE7QUFGUjtBQUdRO0VBRUksY0FBQTtFQUNBLGNBQUE7RUFFSSxlQUFBO0VBQ0Esb0JDZkw7QURZWDtBQU1RO0VBRUksbUJBQUE7QUFMWjtBQVFRO0VBR1EsZUFBQTtFQUNBLG9CQzFCSDtFRDJCRyxnQkFBQTtFQUVKLG1CQUFBO0FBVFo7QUFXUTtFQUVJLGVBQUE7RUFFSSxlQUFBO0VBQ0Esb0JDckNMO0VEc0NLLGdCQUFBO0VBRUosbUJBQUE7RUFDQSxpQkFBQTtBQVpaO0FBYVk7RUFFSSxjQzdDSDtBRGlDYjtBQWdCSTtFQUdJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsY0FBQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBakJaO0FBbUJRO0VBRUkscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBbEJaO0FBbUJZO0VBRUksYUFBQTtBQWxCaEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9TQ1NTL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5mb290ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTkyNDtcclxuICAgIHBhZGRpbmc6IDQwcHggMCAwIDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAuZm9vdGVyLWJvZHlcclxuICAgIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICAgICAgLmZvb3Rlci1wXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICAgICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmYW1pbHk6ICRtYWluRm9udDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvb3Rlci1jb2xcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vc3R5bGUgZm9yIGZvb3RlciBoZWFkIGFuZCBsaW5rc1xyXG4gICAgICAgIC5mb290ZXItdGl0bGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmYW1pbHk6ICRzZWNvbmRGb250O1xyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXItbGlua1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZmFtaWx5OiAkbWFpbkZvbnQ7XHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zNXM7XHJcbiAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWNvcHlyaWdodFxyXG4gICAge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDQ3LDEyOCwyMzcsMC4zKTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgIHNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmYW1pbHk6IFwiQ291cmllciBOZXdcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHllbGxvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkbWFpbkNvbG9yIDogIzJmODBlZDtcbiRtYWluRm9udDogJ0ludGVyJztcbiRzZWNvbmRGb250OiAnUnViaWsnOyJdfQ== */"] });


/***/ }),

/***/ "QWaw":
/*!*******************************************!*\
  !*** ./src/app/services/shows.service.ts ***!
  \*******************************************/
/*! exports provided: ShowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsService", function() { return ShowsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ShowsService {
    constructor(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    getTrendingShows(trending) {
        return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${trending}/day?api_key=ae8bbbe4876db0a6fa719dfc3629fff4`);
    }
}
ShowsService.ɵfac = function ShowsService_Factory(t) { return new (t || ShowsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShowsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowsService, factory: ShowsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_scroll_top_btn_scroll_top_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scroll-top-btn/scroll-top-btn.component */ "DREz");





class AppComponent {
    constructor() {
        this.title = 'project-movie';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-scroll-top-btn");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _components_scroll_top_btn_scroll_top_btn_component__WEBPACK_IMPORTED_MODULE_4__["ScrollTopBtnComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TSr6":
/*!**************************************************************************!*\
  !*** ./src/app/components/footer/social-media/social-media.component.ts ***!
  \**************************************************************************/
/*! exports provided: SocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaComponent", function() { return SocialMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SocialMediaComponent {
    constructor() { }
    ngOnInit() {
    }
}
SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) { return new (t || SocialMediaComponent)(); };
SocialMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaComponent, selectors: [["app-social-media"]], decls: 11, vars: 0, consts: [[1, "social-media"], ["href", "https://www.facebook.com/", "target", "_blank"], ["src", "assets/images/vector6.svg", "alt", "facebook"], ["href", "https://vk.com/", "target", "_blank"], ["src", "assets/images/vector7.svg", "alt", "instagram"], ["href", "https://twitter.com/", "target", "_blank"], ["src", "assets/images/vector8.svg", "alt", "twitter"], ["href", "https://www.instagram.com/", "target", "_blank"], ["src", "assets/images/vector9.svg", "alt", "G"], ["href", "http://https://www.tiktok.com/", "target", "_blank"], ["src", "assets/images/vector5.svg", "alt", "youtube"]], template: function SocialMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".social-media[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 3px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: 0.3s;\n  max-width: 100%;\n}\n.social-media[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.social-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 25px;\n  transition: 0.3s;\n}\n.social-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc29jaWFsLW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBSVE7RUFFSSxZQUFBO0FBSFo7QUFNSTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9RO0VBRUksVUFBQTtBQU5aIiwiZmlsZSI6InNvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtbWVkaWFcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6aG92ZXJcclxuICAgIHtcclxuICAgICAgICBpbWdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWdcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_footer_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/social-media/social-media.component */ "TSr6");
/* harmony import */ var _components_scroll_top_btn_scroll_top_btn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scroll-top-btn/scroll-top-btn.component */ "DREz");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_footer_social_media_social_media_component__WEBPACK_IMPORTED_MODULE_6__["SocialMediaComponent"],
        _components_scroll_top_btn_scroll_top_btn_component__WEBPACK_IMPORTED_MODULE_7__["ScrollTopBtnComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    addActiveClass(event) {
        let navLinks = document.querySelectorAll(".nav-link");
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("active");
        }
        event.target.classList.add("active");
        window.scrollTo(0, 0);
    }
    scrollTop() {
        window.scrollTo(0, 0);
    }
    // navshow(){
    //   let navbar = document.querySelector("nav")
    //   let currentScrollPos = window.pageYOffset;
    //   if (currentScrollPos > 1200) {
    //     navbar?.classList.add("nav-show")
    //   }else{
    //     navbar?.classList.remove("nav-show")
    //   }
    // }
    navshow() {
        let navbar = document.querySelector("nav");
        let beko = window.pageYOffset;
        if (beko > 1200) {
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("nav-show");
        }
        else {
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("nav-show");
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler() { return ctx.navshow(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 29, vars: 0, consts: [[1, "navbar", "navbar-expand-lg"], [1, "container"], ["routerLink", "home", 1, "navbar-brand"], ["src", "assets/images/logo.svg", "alt", "FlixTvs", 1, "w-100"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "fas", "fa-bars", "text-white"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "d-flex", "justify-content-center", "align-items-center"], [1, "nav-item"], ["routerLink", "home", 1, "nav-link", "active", 3, "click"], ["routerLink", "about", 1, "nav-link", 3, "click"], [1, "nav-link"], [1, "navbar-activtes", "ml-auto", "d-flex", "justify-content-between", "align-items-center"], [1, "form-inline", "my-lg-0", "position-relative"], ["id", "navSearch", "type", "search", "placeholder", "I'm looking for...", "aria-label", "Search", 1, "form-control", "w-100"], ["for", "navSearch", 1, "position-absolute"], [1, "fas", "fa-search"], [1, "nav-signin"], ["id", "signIn", "routerLink", "authentication", 3, "click"], [1, "fas", "fa-sign-in-alt"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_9_listener($event) { return ctx.addActiveClass($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_12_listener($event) { return ctx.addActiveClass($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Booking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_26_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  background-color: #131720;\n  padding: 30px;\n  font-family: \"Inter\";\n  transition: 10s linear;\n}\nnav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  width: 60%;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-right: 24px;\n  transition: 0.5s;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #2f80ed;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #2f80ed;\n  transition: 0.5s;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%] {\n  width: 39%;\n  justify-content: center;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #151f30;\n  outline: none;\n  border: 0;\n  border-radius: 10px;\n  color: white;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #2f80ed;\n  cursor: pointer;\n  right: 5%;\n  transition: 0.2s;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  color: white;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%]   .nav-signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%]   .nav-signin[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #2f80ed;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%]   .nav-signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   .navbar-activtes[_ngcontent-%COMP%]   .nav-signin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #2f80ed;\n  font-size: 20px;\n  margin-left: 5px;\n}\n\n.nav-show[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 99999;\n}\n@media screen and (min-width: 992px) and (max-width: 1199px) {\n  .form-inline[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n@media screen and (max-width: 991px) {\n  .navbar-nav[_ngcontent-%COMP%] {\n    margin: 0px auto 15px;\n  }\n\n  .navbar-activtes[_ngcontent-%COMP%] {\n    width: 75% !important;\n    flex-direction: column;\n    margin: auto;\n  }\n  .navbar-activtes[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTQ1NTXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUdJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQ0xPO0VETVAsc0JBQUE7QUFGSjtBQU9RO0VBRUksZUFBQTtBQU5aO0FBU0k7RUFFSSxVQUFBO0FBUlI7QUFVUTtFQUVJLFlBQUE7RUFHSSxtQkFBQTtFQUNBLGdCQUFBO0VBRUosa0JBQUE7RUFDQSxnQkFBQTtBQVpaO0FBY1k7RUFFSSxjQ2xDSDtFRG1DRyxlQUFBO0FBYmhCO0FBZ0JRO0VBRUksY0FBQTtFQUNBLGdCQUFBO0FBZlo7QUFtQkk7RUFFSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWxCUjtBQXFCWTtFQUVJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFwQmhCO0FBcUJnQjtFQUVJLFlBQUE7RUFHSSxtQkFBQTtFQUNBLGdCQUFBO0FBdEJ4QjtBQTJCWTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBMUJoQjtBQTRCZ0I7RUFFSSxZQUFBO0FBM0JwQjtBQWlDWTtFQUVJLGdCQUFBO0FBaENoQjtBQXFDZ0I7RUFFSSxjQUFBO0FBcENwQjtBQXVDWTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtFQUVJLGlCQUFBO0VBQ0EsZ0JBQUE7QUF2Q3BCO0FBMENZO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXpDaEI7QUErQ0EsdUJBQUE7QUFDQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7QUE3Q0o7QUErQ0E7RUFDSTtJQUVJLFVBQUE7RUE3Q047QUFDRjtBQWdEQTtFQUNJO0lBRUkscUJBQUE7RUEvQ047O0VBaURFO0lBRUkscUJBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7RUEvQ047RUFnRE07SUFFSSxtQkFBQTtFQS9DVjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvU0NTUy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5uYXZcclxue1xyXG4gICAgLy8gc3R5bGUgZm9yIGFsbCBuYXZcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE3MjA7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRtYWluRm9udDtcclxuICAgIHRyYW5zaXRpb246IDEwcyBsaW5lYXIgO1xyXG5cclxuICAgIC8vc3R5bGUgZm9yIG5hdiB0b2dnbGVcclxuICAgIC5uYXZiYXItdG9nZ2xlclxyXG4gICAge1xyXG4gICAgICAgIGlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdlxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgLy9zdHlsZSBmb3IgbmF2IGFuY2hvcnNcclxuICAgICAgICAubmF2LWxpbmtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udDpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogMC44NzVyZW07XHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtbGluay5hY3RpdmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmY4MGVkO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWFjdGl2dGVzXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDM5JTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5mb3JtLWlubGluZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWYzMDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMmY4MGVkO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtc2lnbmluXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMmY4MGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMmY4MGVkIDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qIHN0eWxlIHdoaWxlIHNjcm9sbCAqL1xyXG4ubmF2LXNob3dcclxue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xyXG4gICAgLmZvcm0taW5saW5lXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpe1xyXG4gICAgLm5hdmJhci1uYXZcclxuICAgIHtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvIDE1cHggO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1hY3RpdnRlc1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAuZm9ybS1pbmxpbmVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRtYWluQ29sb3IgOiAjMmY4MGVkO1xuJG1haW5Gb250OiAnSW50ZXInO1xuJHNlY29uZEZvbnQ6ICdSdWJpayc7Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map