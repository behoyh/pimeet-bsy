"use strict";
(self["webpackChunkmeetingsdk_sample_angular"] = self["webpackChunkmeetingsdk_sample_angular"] || []).push([["main"],{

/***/ 8307:
/*!********************************************************!*\
  !*** ./src/app/analog-clock/analog-clock.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalogClockComponent": () => (/* binding */ AnalogClockComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var _common_timedate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/timedate */ 2515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _hand_arrow_hand_arrow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hand-arrow/hand-arrow.component */ 7513);





function AnalogClockComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hour_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("hour hour-", hour_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", hour_r1, " ");
} }
const DEGREES_PER_MINUTES_AND_SECONDS = 360 / 60;
const DEGREES_PER_HOURS = 360 / 12;
const TOTAL_HOURS = 12;
class AnalogClockComponent {
    constructor() {
        this.hoursArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this.currentTime$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => new Date()));
        const time$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => new _common_timedate__WEBPACK_IMPORTED_MODULE_0__.TimeDate(new Date())), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.shareReplay)());
        this.hourDegrees$ = time$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(time => time.hours * DEGREES_PER_HOURS + Math.round((time.minutes * DEGREES_PER_MINUTES_AND_SECONDS) / TOTAL_HOURS)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
        this.minuteDegrees$ = time$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(time => time.minutes * DEGREES_PER_MINUTES_AND_SECONDS), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
        this.secondDegrees$ = time$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(time => time.seconds * DEGREES_PER_MINUTES_AND_SECONDS), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)());
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
}
AnalogClockComponent.ɵfac = function AnalogClockComponent_Factory(t) { return new (t || AnalogClockComponent)(); };
AnalogClockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AnalogClockComponent, selectors: [["app-analog-clock"]], decls: 9, vars: 13, consts: [[1, "clock"], [1, "point"], [3, "class", 4, "ngFor", "ngForOf"], [3, "arrowType", "timeDegrees"]], template: function AnalogClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AnalogClockComponent_div_2_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-hand-arrow", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-hand-arrow", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-hand-arrow", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hoursArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("arrowType", "minute")("timeDegrees", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 7, ctx.minuteDegrees$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("arrowType", "hour")("timeDegrees", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 9, ctx.hourDegrees$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("arrowType", "second")("timeDegrees", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, ctx.secondDegrees$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _hand_arrow_hand_arrow_component__WEBPACK_IMPORTED_MODULE_1__.HandArrowComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: [".clock[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  border: 10px solid black;\n  background-color: rgb(246, 251, 251);\n  border-radius: 50%;\n  margin: 0 auto;\n  position: relative;\n  box-shadow: 5px 5px 15px gray;\n}\n\n.point[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border-radius: 30%;\n  position: absolute;\n  top: 245px;\n  left: 245px;\n}\n\n.hour[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  color:rgb(96, 2, 2);\n  position: absolute;\n}\n\n.hour-1[_ngcontent-%COMP%] {\n  top: 40px;\n  right: 130px;\n}\n\n.hour-2[_ngcontent-%COMP%] {\n  top: 125px;\n  right: 45px;\n}\n\n.hour-3[_ngcontent-%COMP%] {\n  top: 235px;\n  right: 10px;\n}\n\n.hour-4[_ngcontent-%COMP%] {\n  top: 345px;\n  right: 45px;\n}\n\n.hour-5[_ngcontent-%COMP%] {\n  top: 430px;\n  right: 130px;\n}\n\n.hour-6[_ngcontent-%COMP%] {\n  bottom: 10px;\n  left: 240px;\n}\n\n.hour-7[_ngcontent-%COMP%] {\n  top: 430px;\n  left: 130px;\n}\n\n.hour-8[_ngcontent-%COMP%] {\n  top: 345px;\n  left: 45px;\n}\n\n.hour-9[_ngcontent-%COMP%] {\n  top: 235px;\n  left: 10px;\n}\n\n.hour-10[_ngcontent-%COMP%] {\n  top: 125px;\n  left: 45px;\n}\n\n.hour-11[_ngcontent-%COMP%] {\n  top: 40px;\n  left: 130px;\n}\n\n.hour-12[_ngcontent-%COMP%] {\n  top: 10px;\n  left: 235px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWxvZy1jbG9jay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7QUFDYiIsImZpbGUiOiJhbmFsb2ctY2xvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9jayB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCAyNTEsIDI1MSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IGdyYXk7XG59XG5cbi5wb2ludCB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNDVweDtcbiAgbGVmdDogMjQ1cHg7XG59XG5cbi5ob3VyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6cmdiKDk2LCAyLCAyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaG91ci0xIHtcbiAgdG9wOiA0MHB4O1xuICByaWdodDogMTMwcHg7XG59XG5cbi5ob3VyLTIge1xuICB0b3A6IDEyNXB4O1xuICByaWdodDogNDVweDtcbn1cblxuLmhvdXItMyB7XG4gIHRvcDogMjM1cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uaG91ci00IHtcbiAgdG9wOiAzNDVweDtcbiAgcmlnaHQ6IDQ1cHg7XG59XG5cbi5ob3VyLTUge1xuICB0b3A6IDQzMHB4O1xuICByaWdodDogMTMwcHg7XG59XG5cbi5ob3VyLTYge1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDI0MHB4O1xufVxuXG4uaG91ci03IHtcbiAgdG9wOiA0MzBweDtcbiAgbGVmdDogMTMwcHg7XG59XG5cbi5ob3VyLTgge1xuICB0b3A6IDM0NXB4O1xuICBsZWZ0OiA0NXB4O1xufVxuXG4uaG91ci05IHtcbiAgdG9wOiAyMzVweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLmhvdXItMTAge1xuICB0b3A6IDEyNXB4O1xuICBsZWZ0OiA0NXB4O1xufVxuXG4uaG91ci0xMSB7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogMTMwcHg7XG59XG5cbi5ob3VyLTEyIHtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAyMzVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7513:
/*!*****************************************************************!*\
  !*** ./src/app/analog-clock/hand-arrow/hand-arrow.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HandArrowComponent": () => (/* binding */ HandArrowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


const _c0 = function (a0) { return { transform: a0 }; };
class HandArrowComponent {
    constructor() {
        this.arrowType = '';
        this.timeDegrees = 0;
    }
}
HandArrowComponent.ɵfac = function HandArrowComponent_Factory(t) { return new (t || HandArrowComponent)(); };
HandArrowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HandArrowComponent, selectors: [["app-hand-arrow"]], inputs: { arrowType: "arrowType", timeDegrees: "timeDegrees" }, decls: 3, vars: 9, consts: [[3, "ngStyle"], [1, "hand"]], template: function HandArrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.arrowType, "-arrow-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "rotate(" + ctx.timeDegrees + "deg)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx.arrowType, "-arrow");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".minute-arrow-wrapper[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  border-radius: 50%;\n}\n\n.minute-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.minute-arrow[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 200px;\n  background-color: black;\n  position: absolute;\n  left: 198px;\n}\n\n.minute-arrow[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  color: rgb(62, 57, 66);\n  transform: rotate(180deg);\n  position: absolute;\n  left: 190px;\n  top: -7px;\n}\n\n.hour-arrow-wrapper[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  top: 100px;\n  left: 100px;\n  border-radius: 50%;\n}\n\n.hour-arrow[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.hour-arrow[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 150px;\n  background-color: #000;\n  position: absolute;\n  left: 148px;\n}\n\n.hour-arrow[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  color:#000;\n  transform: rotate(180deg);\n  position: absolute;\n  top: -7px;\n}\n\n.second-arrow-wrapper[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  position: absolute;\n  top: 75px;\n  left: 75px;\n  border-radius: 50%;\n}\n\n.second-arrow[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.second-arrow[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 175px;\n  background-color: #000;\n  position: absolute;\n  left: 174px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmQtYXJyb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6ImhhbmQtYXJyb3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW51dGUtYXJyb3ctd3JhcHBlciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1pbnV0ZS1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1pbnV0ZS1hcnJvdyAuaGFuZCB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE5OHB4O1xufVxuXG4ubWludXRlLWFycm93IC5hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoNjIsIDU3LCA2Nik7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTkwcHg7XG4gIHRvcDogLTdweDtcbn1cblxuLmhvdXItYXJyb3ctd3JhcHBlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaG91ci1hcnJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhvdXItYXJyb3cgLmhhbmQge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE0OHB4O1xufVxuXG4uaG91ci1hcnJvdyAuYXJyb3cge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjojMDAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbn1cblxuLnNlY29uZC1hcnJvdy13cmFwcGVyIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzVweDtcbiAgbGVmdDogNzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2Vjb25kLWFycm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2Vjb25kLWFycm93IC5oYW5kIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNzRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zoomus/websdk */ 1856);
/* harmony import */ var _zoomus_websdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analog-clock/analog-clock.component */ 8307);






const _c0 = ["minutes"];
const _c1 = ["seconds"];
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.getSignature(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", m_r3.topic, " - ", m_r3.start_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Join ", m_r3.id, "");
} }
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__.ZoomMtg.setZoomJSLib('https://source.zoom.us/2.13.0/lib', '/av');
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__.ZoomMtg.preLoadWasm();
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__.ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__.ZoomMtg.i18n.load('en-US');
_zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__.ZoomMtg.i18n.reload('en-US');
class AppComponent {
    constructor(httpClient, document) {
        this.httpClient = httpClient;
        this.meetings = [];
        this.authEndpoint = 'https://pizookie.herokuapp.com/';
        this.sdkKey = 'Uaty1iKCQAyoJElAMLZhRQ';
        this.meetingNumber = '99878568299';
        this.passWord = 'MWUzaWhJKzZFbEdUWVFrWVpsNEFTUT09';
        this.role = 0;
        this.userName = 'beshoy';
        this.userEmail = '';
        this.registrantToken = '';
        this.zakToken = '';
        this.leaveUrl = 'http://localhost:4200';
        this.targetDate = new Date();
        this.targetTime = this.targetDate.getTime();
    }
    ngOnInit() {
        this.getCalendar();
    }
    getCalendar() {
        debugger;
        this.meetings.push("data.meetings[i]");
        this.httpClient.get("http://localhost:4000/meetings").toPromise().then((data) => {
            debugger;
            for (var i in data.meetings) {
                debugger;
                this.meetings.push(data.meetings[i]);
                //this.getSignature()
                //if meeting.
            }
        }, () => alert("please visit localhost:4000 to authenticate."));
    }
    getSignature() {
        this.httpClient.post(this.authEndpoint, {
            meetingNumber: this.meetingNumber,
            role: this.role
        }).toPromise().then((data) => {
            if (data.signature) {
                console.log(data.signature);
                this.startMeeting(data.signature);
            }
            else {
                console.log(data);
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    startMeeting(signature) {
        document.getElementById('zmmtg-root').style.display = 'block';
        _zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__.ZoomMtg.init({
            leaveUrl: this.leaveUrl,
            success: (success) => {
                console.log(success);
                _zoomus_websdk__WEBPACK_IMPORTED_MODULE_0__.ZoomMtg.join({
                    signature: signature,
                    sdkKey: this.sdkKey,
                    meetingNumber: this.meetingNumber,
                    passWord: this.passWord,
                    userName: this.userName,
                    userEmail: this.userEmail,
                    tk: this.registrantToken,
                    zak: this.zakToken,
                    success: (success) => {
                        console.log(success);
                    },
                    error: (error) => {
                        console.log(error);
                    }
                });
            },
            error: (error) => {
                console.log(error);
            }
        });
    }
    ngAfterViewInit() {
        setInterval(() => {
            this.tickTock();
            this.difference = this.targetTime - this.now;
            this.difference = this.difference / (1000 * 60 * 60 * 24);
        }, 1000);
    }
    tickTock() {
        this.date = new Date();
        this.now = this.date.getTime();
        this.minutes.nativeElement.innerText = this.date.getMinutes() - 9;
        this.seconds.nativeElement.innerText = 60 - this.date.getSeconds();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.minutes = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.seconds = _t.first);
    } }, decls: 20, vars: 1, consts: [["id", "meetingSDKElement"], [1, "count-down-timer"], [1, "wrapper"], [1, "description"], [1, "times"], ["minutes", ""], ["seconds", ""], [4, "ngFor", "ngForOf"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-analog-clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Joining Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "p", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "p", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AppComponent_div_19_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.meetings);
    } }, directives: [_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_1__.AnalogClockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["main[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background-color: #2D8CFF;\n  color: #ffffff;\n  text-decoration: none;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 40px;\n  padding-right: 40px;\n  display: inline-block;\n  border-radius: 10px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #2681F2;\n}\n\n.count-down-timer[_ngcontent-%COMP%] {\n  box-shadow: 2px 6px 9px 2px rgb(0 0 0 / 20%);\n  text-align: center;\n  background-color: #313b3f;\n  max-width: 400px;\n  margin: 20px auto;\n  color: #d9a74a;\n  border-radius: 6px;\n  padding: 10px;\n  font-family: sans-serif;\n\n  >p {\n    margin: 5px 0 15px 0;\n  }\n\n  .wrapper {\n\n    .description,\n    .times {\n      display: grid;\n      grid-template-columns: repeat(4, calc(25% - 8px));\n      grid-column-gap: 10px;\n    }\n\n    .description {\n      >p {\n        margin: 0;\n        font: normal 14px sans-serif;\n      }\n    }\n\n    .times {\n      p {\n        letter-spacing: -5px;\n        position: relative;\n        margin: 0;\n        font: normal 40px courier, sans-serif;\n\n        ::ng-deep img {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 30px;\n          display: block;\n          height: 30px;\n        }\n      }\n    }\n  }\n}\n\n@media screen and (max-width: 430px) {\n  .count-down-timer[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1Qjs7RUFFdkI7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7O0lBRUU7O01BRUUsYUFBYTtNQUNiLGlEQUFpRDtNQUNqRCxxQkFBcUI7SUFDdkI7O0lBRUE7TUFDRTtRQUNFLFNBQVM7UUFDVCw0QkFBNEI7TUFDOUI7SUFDRjs7SUFFQTtNQUNFO1FBQ0Usb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QscUNBQXFDOztRQUVyQztVQUNFLGtCQUFrQjtVQUNsQixRQUFRO1VBQ1IsU0FBUztVQUNULGdDQUFnQztVQUNoQyxXQUFXO1VBQ1gsY0FBYztVQUNkLFlBQVk7UUFDZDtNQUNGO0lBQ0Y7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJEOENGRjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjgxRjI7XG59XG5cbi5jb3VudC1kb3duLXRpbWVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDZweCA5cHggMnB4IHJnYigwIDAgMCAvIDIwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxM2IzZjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGNvbG9yOiAjZDlhNzRhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXG4gID5wIHtcbiAgICBtYXJnaW46IDVweCAwIDE1cHggMDtcbiAgfVxuXG4gIC53cmFwcGVyIHtcblxuICAgIC5kZXNjcmlwdGlvbixcbiAgICAudGltZXMge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGNhbGMoMjUlIC0gOHB4KSk7XG4gICAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgID5wIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiBub3JtYWwgMTRweCBzYW5zLXNlcmlmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aW1lcyB7XG4gICAgICBwIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC01cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiBub3JtYWwgNDBweCBjb3VyaWVyLCBzYW5zLXNlcmlmO1xuXG4gICAgICAgIDo6bmctZGVlcCBpbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XG4gIC5jb3VudC1kb3duLXRpbWVyIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analog-clock/analog-clock.component */ 8307);
/* harmony import */ var _analog_clock_hand_arrow_hand_arrow_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analog-clock/hand-arrow/hand-arrow.component */ 7513);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_0__.AnalogClockComponent,
        _analog_clock_hand_arrow_hand_arrow_component__WEBPACK_IMPORTED_MODULE_1__.HandArrowComponent,
        _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 2515:
/*!************************************!*\
  !*** ./src/app/common/timedate.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeDate": () => (/* binding */ TimeDate)
/* harmony export */ });
class TimeDate {
    constructor(date) {
        this.date = date;
    }
    get seconds() {
        return this.date.getSeconds();
    }
    get minutes() {
        return this.date.getMinutes();
    }
    get hours() {
        return this.date.getHours();
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map