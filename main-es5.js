function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation-bar/navigation-bar.component */
    "./src/app/navigation-bar/navigation-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'portfolio';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [["id", "terminal", 1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavigationBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["#terminal[_ngcontent-%COMP%]{\n  margin: auto;\n  display: flex;\n  padding: 1rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n@media screen and (max-width: 720px) {\n  #terminal[_ngcontent-%COMP%]{\n    border: none;\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0ZXJtaW5hbHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICN0ZXJtaW5hbHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navigation-bar/navigation-bar.component */
    "./src/app/navigation-bar/navigation-bar.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_2__["routes"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavigationBarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavigationBarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_2__["routes"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: router, routes */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "router", function () {
      return router;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var router = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }];

    var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router);
    /***/

  },

  /***/
  "./src/app/constants/constants.ts":
  /*!****************************************!*\
    !*** ./src/app/constants/constants.ts ***!
    \****************************************/

  /*! exports provided: Constants */

  /***/
  function srcAppConstantsConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants = function Constants() {
      _classCallCheck(this, Constants);
    };

    Constants.ABOUT_ME = 'info';
    Constants.EDUCATION = 'education';
    Constants.EXPERIENCE = 'experience';
    Constants.SKILLS = 'skills';
    Constants.PROJECTS = 'projects';
    Constants.CONTACTS = 'contacts';
    Constants.HELP = 'help';
    Constants.TIME = 'time';
    Constants.BANNER = 'banner';
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_output__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/output */
    "./src/app/models/output.ts");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["command"];

    function HomeComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "        ##    ## ####  ######  ##     ##    ###    ##    ## ########    ##    ## ##     ## ##     ##    ###    ########\n        ###   ##  ##  ##    ## ##     ##   ## ##   ###   ##    ##       ##   ##  ##     ## ###   ###   ## ##   ##     ##\n        ####  ##  ##  ##       ##     ##  ##   ##  ####  ##    ##       ##  ##   ##     ## #### ####  ##   ##  ##     ##\n        ## ## ##  ##   ######  ######### ##     ## ## ## ##    ##       #####    ##     ## ## ### ## ##     ## ########\n        ##  ####  ##        ## ##     ## ######### ##  ####    ##       ##  ##   ##     ## ##     ## ######### ##   ##\n        ##   ###  ##  ##    ## ##     ## ##     ## ##   ###    ##       ##   ##  ##     ## ##     ## ##     ## ##    ##\n        ##    ## ####  ######  ##     ## ##     ## ##    ##    ##       ##    ##  #######  ##     ## ##     ## ##     ##\n      ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This is where you will find more about me and my work. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "you can explore this website via these commands ( banner, info, experience, education, skills, projects, contacts)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(dataService, sanitizer, deviceService) {
        _classCallCheck(this, HomeComponent);

        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.deviceService = deviceService;
        this.show = true;
        this.activeElement = document.activeElement;
        this.outputContainer = new _models_output__WEBPACK_IMPORTED_MODULE_1__["Output"]();
      }

      _createClass(HomeComponent, [{
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          this.event = event;
          console.log('pressed key was ', this.event.key, this.event.code);

          if (this.event.code === 'Enter' && this.commandElement.nativeElement.value !== '') {
            this.runCommandAndDisplayOutput();
          }

          this.shiftFocusToInputBox(this.activeElement);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.dataService.subVar === undefined) {
            this.dataService.subVar = this.dataService.navigationEventEmitter.subscribe(function (value) {
              _this.commandElement.nativeElement.value = value.toLowerCase();
              _this.outputContainer = _this.getCommandOutput(value);

              _this.clearCommandValue();

              _this.shiftFocusToInputBox(_this.activeElement);

              _this.show = value === 'banner';
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.shiftFocusToInputBox(this.activeElement);
        }
      }, {
        key: "getCommandOutput",
        value: function getCommandOutput(command) {
          var output = new _models_output__WEBPACK_IMPORTED_MODULE_1__["Output"]();
          output.prompt = 'root@nishant ~ ';
          output.command = command;
          output.result = this.sanitizer.bypassSecurityTrustHtml(this.dataService.getCommandOutput(command));
          return output;
        }
      }, {
        key: "shiftFocusToInputBox",
        value: function shiftFocusToInputBox(activeElement) {
          console.log('Current Active element is ', activeElement);

          if (this.commandElement !== undefined) {
            console.log('command input box found');

            if (!this.deviceService.isMobile()) {
              this.commandElement.nativeElement.focus();
              this.activeElement = this.commandElement;
            }
          } else {
            console.log('command input box not found');
          }

          console.log('updated Active element to ', this.activeElement);
        }
      }, {
        key: "clearCommandValue",
        value: function clearCommandValue() {
          this.commandElement.nativeElement.value = '';
        }
      }, {
        key: "runCommandAndDisplayOutput",
        value: function runCommandAndDisplayOutput() {
          var value = this.commandElement.nativeElement.value.toLowerCase();
          console.log(value);

          if (value === 'banner') {
            this.outputContainer = new _models_output__WEBPACK_IMPORTED_MODULE_1__["Output"]();
            this.show = true;
            this.clearCommandValue();
          } else {
            this.show = false;
            this.outputContainer = this.getCommandOutput(value);
            this.clearCommandValue();
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.commandElement = _t.first);
        }
      },
      hostBindings: function HomeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function HomeComponent_keypress_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      decls: 15,
      vars: 4,
      consts: [[1, "container"], ["id", "outputContainer", 1, "row"], [1, "row", "input"], [1, "prompt"], [1, "row"], [1, "output", 3, "innerHTML"], ["class", "init", 4, "ngIf"], ["id", "commandWrapper", 1, "row"], ["id", "command"], ["command", ""], [1, "init"], [1, "help"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 9, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " root@nishant\xA0~\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.outputContainer.prompt, " ", ctx.outputContainer.command, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.outputContainer.result, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["*{\n  background: transparent;\n}\n\n.prompt{\n  color: greenyellow;\n}\n\npre{\n  background: black;\n  color: greenyellow;\n  border: 0;\n}\n\n.help{\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#outputContainer .output a, #outputContainer .output span {\n  color: greenyellow;\n}\n\n.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th{\n  border: none !important;\n}\n\n.skills-wrapper{\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n}\n\ntextarea{\n  height: auto;\n}\n\nhr{\n  width: 10rem;\n}\n\n.row{\n  margin: 0;\n}\n\napp-home{\n  width: 100%;\n}\n\n#commandWrapper{\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n}\n\n#commandWrapper > label {\n  float: left;\n}\n\n#commandWrapper > div {\n  width: -webkit-fill-available;\n  width: -moz-available;\n  overflow: hidden;\n}\n\n#command {\n  border: none;\n  width: 100%;\n}\n\n#command:focus{\n  outline: none;\n}\n\n.badge{\n  background: white;\n  color: black !important;\n  margin-left: 1rem;\n}\n\n#outputContainer > .input{\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n#outputContainer > .input > .command {\n  width: 100%;\n}\n\n.typewriter {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\n  border-right: none; /* The typwriter cursor */\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\n  -webkit-animation:\n    typing 3.5s steps(40, end),\n    blink-caret .75s step-end infinite;\n          animation:\n    typing 3.5s steps(40, end),\n    blink-caret .75s step-end infinite;\n}\n\n/* The typing effect */\n\n@-webkit-keyframes typing {\n  from { width: 0 }\n  to { width: 100% }\n}\n\n@keyframes typing {\n  from { width: 0 }\n  to { width: 100% }\n}\n\n/* The typewriter cursor effect */\n\n@-webkit-keyframes blink-caret {\n  from, to { border-color: transparent }\n  50% { border-color: orange; }\n}\n\n@keyframes blink-caret {\n  from, to { border-color: transparent }\n  50% { border-color: orange; }\n}\n\napp-home{\n  position: relative;\n}\n\n@media screen and (max-width: 720px){\n  *{\n    font-size: 12px;\n  }\n\n  .skills-wrapper{\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  pre{\n    display: none;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUUsNERBQTREO0VBQzlFLGtCQUFrQixFQUFFLHlCQUF5QjtFQUM3QyxjQUFjLEVBQUUsc0RBQXNEO0VBQ3RFOztzQ0FFb0M7VUFGcEM7O3NDQUVvQztBQUN0Qzs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsT0FBTyxTQUFTO0VBQ2hCLEtBQUssWUFBWTtBQUNuQjs7QUFIQTtFQUNFLE9BQU8sU0FBUztFQUNoQixLQUFLLFlBQVk7QUFDbkI7O0FBRUEsaUNBQWlDOztBQUNqQztFQUNFLFdBQVcsMEJBQTBCO0VBQ3JDLE1BQU0sb0JBQW9CLEVBQUU7QUFDOUI7O0FBSEE7RUFDRSxXQUFXLDBCQUEwQjtFQUNyQyxNQUFNLG9CQUFvQixFQUFFO0FBQzlCOztBQUlBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucHJvbXB0e1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbnByZXtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbiAgYm9yZGVyOiAwO1xufVxuXG4uaGVscHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNvdXRwdXRDb250YWluZXIgLm91dHB1dCBhLCAjb3V0cHV0Q29udGFpbmVyIC5vdXRwdXQgc3BhbiB7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLnRhYmxlPnRib2R5PnRyPnRkLCAudGFibGU+dGJvZHk+dHI+dGgsIC50YWJsZT50Zm9vdD50cj50ZCwgLnRhYmxlPnRmb290PnRyPnRoLCAudGFibGU+dGhlYWQ+dHI+dGQsIC50YWJsZT50aGVhZD50cj50aHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5za2lsbHMtd3JhcHBlcntcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbnRleHRhcmVhe1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmhye1xuICB3aWR0aDogMTByZW07XG59XG5cblxuLnJvd3tcbiAgbWFyZ2luOiAwO1xufVxuXG5hcHAtaG9tZXtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjb21tYW5kV3JhcHBlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuI2NvbW1hbmRXcmFwcGVyID4gbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbn1cblxuI2NvbW1hbmRXcmFwcGVyID4gZGl2IHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2NvbW1hbmQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2NvbW1hbmQ6Zm9jdXN7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5iYWRnZXtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuI291dHB1dENvbnRhaW5lciA+IC5pbnB1dHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuI291dHB1dENvbnRhaW5lciA+IC5pbnB1dCA+IC5jb21tYW5kIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udHlwZXdyaXRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuOyAvKiBFbnN1cmVzIHRoZSBjb250ZW50IGlzIG5vdCByZXZlYWxlZCB1bnRpbCB0aGUgYW5pbWF0aW9uICovXG4gIGJvcmRlci1yaWdodDogbm9uZTsgLyogVGhlIHR5cHdyaXRlciBjdXJzb3IgKi9cbiAgbWFyZ2luOiAwIGF1dG87IC8qIEdpdmVzIHRoYXQgc2Nyb2xsaW5nIGVmZmVjdCBhcyB0aGUgdHlwaW5nIGhhcHBlbnMgKi9cbiAgYW5pbWF0aW9uOlxuICAgIHR5cGluZyAzLjVzIHN0ZXBzKDQwLCBlbmQpLFxuICAgIGJsaW5rLWNhcmV0IC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XG59XG5cbi8qIFRoZSB0eXBpbmcgZWZmZWN0ICovXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XG4gIGZyb20geyB3aWR0aDogMCB9XG4gIHRvIHsgd2lkdGg6IDEwMCUgfVxufVxuXG4vKiBUaGUgdHlwZXdyaXRlciBjdXJzb3IgZWZmZWN0ICovXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcbiAgZnJvbSwgdG8geyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IH1cbiAgNTAlIHsgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7IH1cbn1cblxuXG5cbmFwcC1ob21le1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KXtcbiAgKntcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuc2tpbGxzLXdyYXBwZXJ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgcHJle1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxufVxuIl19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]
        }];
      }, {
        commandElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['command']
        }],
        handleKeyboardEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:keypress', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/output.ts":
  /*!**********************************!*\
    !*** ./src/app/models/output.ts ***!
    \**********************************/

  /*! exports provided: Output */

  /***/
  function srcAppModelsOutputTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Output", function () {
      return Output;
    });

    var Output = function Output() {
      _classCallCheck(this, Output);
    };
    /***/

  },

  /***/
  "./src/app/navigation-bar/navigation-bar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
    \************************************************************/

  /*! exports provided: NavigationBarComponent */

  /***/
  function srcAppNavigationBarNavigationBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
      return NavigationBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var NavigationBarComponent =
    /*#__PURE__*/
    function () {
      function NavigationBarComponent(dataService) {
        _classCallCheck(this, NavigationBarComponent);

        this.dataService = dataService;
        this.homeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
        this.educationIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.experienceIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBriefcase"];
        this.projectsIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArchive"];
        this.skillsIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBullseye"];
        this.contactsIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAddressCard"];
        this.hamburgerIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.isMenuCollapsed = true;
      }

      _createClass(NavigationBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateTerminalMessage",
        value: function updateTerminalMessage(param) {
          this.dataService.emitNavigationEvent(param);
        }
      }, {
        key: "toggleCollpsed",
        value: function toggleCollpsed() {
          this.isMenuCollapsed = !this.isMenuCollapsed;
          console.log(this.isMenuCollapsed);
        }
      }]);

      return NavigationBarComponent;
    }();

    NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
      return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationBarComponent,
      selectors: [["app-navigation-bar"]],
      decls: 29,
      vars: 7,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "justify-content-between", "navbar-fixed-top"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav"], [3, "click"], ["aria-hidden", "true", 3, "icon"]],
      template: function NavigationBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_button_click_1_listener() {
            return ctx.toggleCollpsed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u2630 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_li_click_5_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_6_listener() {
            return ctx.updateTerminalMessage("banner");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " HOME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_li_click_9_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_10_listener() {
            return ctx.updateTerminalMessage("info");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ABOUT ME ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_li_click_13_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_14_listener() {
            return ctx.updateTerminalMessage("experience");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " WORK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_li_click_17_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_18_listener() {
            return ctx.updateTerminalMessage("education");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " EDUCATION ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_li_click_21_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_22_listener() {
            return ctx.updateTerminalMessage("projects");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " PROJECTS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_li_click_25_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_26_listener() {
            return ctx.updateTerminalMessage("skills");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " SKILLS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.homeIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.homeIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.experienceIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.educationIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.projectsIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.skillsIcon);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
      styles: [".navbar-toggler[_ngcontent-%COMP%]{\n  float: right;\n  margin: 10px;\n  font-size: x-large;\n  display: none;\n  z-index: 2000;\n}\n\n.navbar[_ngcontent-%COMP%]{\n  z-index: 1000;\n  background: black;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.show[_ngcontent-%COMP%]{\n  display: flex !important;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.navbar-nav[_ngcontent-%COMP%]{\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: row;\n  margin: auto;\n  color: white;\n  width: 70%;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 2rem 1rem ;\n  cursor: pointer;\n}\n\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 720px){\n  .navbar-toggler[_ngcontent-%COMP%]{\n    display: block;\n  }\n\n  .navbar-collapse[_ngcontent-%COMP%]{\n    max-height: 100vh !important;\n  }\n\n  .navbar-nav[_ngcontent-%COMP%]{\n    flex-direction: column;\n    height: 100vh;\n    width: 100%;\n  }\n  .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    margin-top: 1rem;\n  }\n}\n\n@media screen and (min-width: 720px){\n  .navbar-collapse[_ngcontent-%COMP%]{\n    display: flex !important;\n    justify-content: space-evenly;\n    align-items: center;\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0VBQ2I7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLXRvZ2dsZXJ7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDIwMDA7XG59XG5cbi5uYXZiYXJ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uc2hvd3tcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdmJhci1uYXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLm5hdmJhci1uYXYgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDJyZW0gMXJlbSA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdmJhci1uYXYgbGkgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCl7XG4gIC5uYXZiYXItdG9nZ2xlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5uYXZiYXItY29sbGFwc2V7XG4gICAgbWF4LWhlaWdodDogMTAwdmggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5uYXZiYXItbmF2e1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubmF2YmFyLW5hdiBsaXtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KXtcbiAgLm5hdmJhci1jb2xsYXBzZXtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation-bar',
          templateUrl: './navigation-bar.component.html',
          styleUrls: ['./navigation-bar.component.css']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants/constants */
    "./src/app/constants/constants.ts");
    /* harmony import */


    var _util_formatOutput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util/formatOutput */
    "./src/app/util/formatOutput.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(httpClient) {
        var _this2 = this;

        _classCallCheck(this, DataService);

        this.httpClient = httpClient;
        this.navigationEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.getAboutMe = function () {
          return _this2.data.home;
        };

        this.getExperienceData = function () {
          return _this2.data.experience;
        };

        this.getEducationData = function () {
          return _this2.data.education;
        };

        this.getSkillsData = function () {
          return _this2.data.skills;
        };

        this.getProjectsData = function () {
          return _this2.data.projects;
        };

        this.getContactMeData = function () {
          return _this2.data.home;
        };

        this.getJSON().subscribe(function (res) {
          console.log(res);
          _this2.data = res;
        });
      }

      _createClass(DataService, [{
        key: "getJSON",
        value: function getJSON() {
          return this.httpClient.get('https://raw.githubusercontent.com/knp069/portfolio/master/src/assets/data.json');
        }
      }, {
        key: "emitNavigationEvent",
        value: function emitNavigationEvent(param) {
          this.navigationEventEmitter.emit(param);
        }
      }, {
        key: "getCommandOutput",
        value: function getCommandOutput(command) {
          switch (command) {
            case _constants_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ABOUT_ME:
              return _util_formatOutput__WEBPACK_IMPORTED_MODULE_2__["FormatOutput"].formatOutput(command, this.getAboutMe());

            case _constants_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].EXPERIENCE:
              return _util_formatOutput__WEBPACK_IMPORTED_MODULE_2__["FormatOutput"].formatOutput(command, this.getExperienceData());

            case _constants_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].EDUCATION:
              return _util_formatOutput__WEBPACK_IMPORTED_MODULE_2__["FormatOutput"].formatOutput(command, this.getEducationData());

            case _constants_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].SKILLS:
              return _util_formatOutput__WEBPACK_IMPORTED_MODULE_2__["FormatOutput"].formatOutput(command, this.getSkillsData());

            case _constants_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].PROJECTS:
              return _util_formatOutput__WEBPACK_IMPORTED_MODULE_2__["FormatOutput"].formatOutput(command, this.getProjectsData());

            case _constants_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].CONTACTS:
              return _util_formatOutput__WEBPACK_IMPORTED_MODULE_2__["FormatOutput"].formatOutput(command, this.getContactMeData());

            case _constants_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].TIME:
              return new Date();

            case _constants_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BANNER:
              return '';

            default:
              return command;
          }
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/util/formatOutput.ts":
  /*!**************************************!*\
    !*** ./src/app/util/formatOutput.ts ***!
    \**************************************/

  /*! exports provided: FormatOutput */

  /***/
  function srcAppUtilFormatOutputTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatOutput", function () {
      return FormatOutput;
    });
    /* harmony import */


    var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../constants/constants */
    "./src/app/constants/constants.ts");

    var FormatOutput =
    /*#__PURE__*/
    function () {
      function FormatOutput() {
        _classCallCheck(this, FormatOutput);
      }

      _createClass(FormatOutput, null, [{
        key: "formatOutput",
        value: function formatOutput(command, output) {
          switch (command) {
            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].ABOUT_ME:
              return this.formatHomeOutput(output);

            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].EDUCATION:
              return this.formatEducationOutput(output);

            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].EXPERIENCE:
              return this.formatExperienceOutput(output);

            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].SKILLS:
              return this.formatSkillsOutput(output);

            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].PROJECTS:
              return this.formatProjectsOutput(output);

            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].CONTACTS:
              return this.formatContactsOutput(output);

            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].HELP:
              return this.formatHelpOutput();

            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].TIME:
              return this.formatTimeOutput(output);

            case _constants_constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].BANNER:
              return '';

            default:
              return command;
          }
        }
      }, {
        key: "formatHomeOutput",
        value: function formatHomeOutput(output) {
          var response = '';

          if (output.about.name !== '') {
            response = response.concat('<div class="prompt"> Name  :  <span>' + output.about.name + '</span></div>');
          }

          if (output.about.phone !== '') {
            response = response.concat('<div class="prompt"> Phone  :  <span>' + output.about.phone + '</span></div>');
          }

          if (output.about.email !== '') {
            response = response.concat('<div class="prompt"> Email : ' + '<a  target="_blank"   href=mailto:' + output.about.email + '> ' + output.about.email + '</a></div>');
          }

          if (output.about.location != null) {
            response = response.concat('<div class="prompt"> <span> Where do i live :  </span>');

            if (output.about.location.address !== '') {
              response = response.concat('<span>' + output.about.location.address + ', </span>');
            }

            if (output.about.location.city !== '') {
              response = response.concat('<span>' + output.about.location.city + ', </span>');
            }

            if (output.about.location.state !== '') {
              response = response.concat('<span>' + output.about.location.state + ' </span></div>');
            }
          }

          response = response.concat('<hr>');

          if (output.about.github !== '') {
            response = response.concat('<div class="prompt"> Github : ' + '<a  target="_blank" href=' + output.about.github + '> ' + output.about.github + '</a></div>');
          }

          if (output.about.linkedin !== '') {
            response = response.concat('<div class="prompt"> LinkedIn : ' + '<a  target="_blank" href=' + output.about.linkedin + '> ' + output.about.linkedin + '</a></div>');
          }

          if (output.about.facebook !== '') {
            response = response.concat('<div class="prompt"> Facebook : ' + '<a  target="_blank" href=' + output.about.facebook + '> ' + output.about.facebook + '</a></div>');
          }

          response = response.concat('<hr>');

          if (output.about.languages !== null) {
            response = response.concat('<div class="prompt"> Languages I know : </div>');
            output.about.languages.forEach(function (language) {
              response = response.concat('<div class="prompt">' + language.name + ' : ' + language.proficiency + '</div>');
            });
          }

          if (output.about.interests !== null) {
            response = response.concat('<div class="prompt"> My hobbies include :');
            output.about.interests.forEach(function (interest) {
              response = response.concat('<span class="prompt badge">' + interest + ' </span>');
            });
            response = response.concat('</div>');
          }

          response = response.concat('<hr>');

          if (output.about.description !== '') {
            response = response.concat('<div class="prompt"> A little bit about myself : <span>' + output.about.description + '</span></div>');
          }

          console.log(response);
          return response;
        }
      }, {
        key: "formatEducationOutput",
        value: function formatEducationOutput(output) {
          var response = '';
          output.forEach(function (education) {
            if (education.institute !== '') {
              response = response.concat('<div class="prompt">  Name : <span> ' + education.institute + '</span></div>');
            }

            if (education.degree !== '') {
              response = response.concat('<div class="prompt">  Degree : <span> ' + education.degree + '</span></div>');
            }

            if (education.major !== '') {
              response = response.concat('<div class="prompt">  Major : <span> ' + education.major + '</span></div>');
            }

            if (education.minor !== '') {
              response = response.concat('<div class="prompt">  Minor : <span> ' + education.minor + '</span></div>');
            }

            response = response.concat('<div class="prompt">  Duration : <span> ' + education.start + ' - ' + education.end + '</span></div>');

            if (education.score !== '') {
              response = response.concat('<div class="prompt">  Score : <span> ' + education.score + '</span></div>');
            }

            response = response.concat('<div class="prompt"><hr></div>');
          });
          console.log(response);
          return response;
        }
      }, {
        key: "formatExperienceOutput",
        value: function formatExperienceOutput(output) {
          var response = '';
          output.forEach(function (experience) {
            if (experience.company !== '') {
              response = response.concat('<div class="prompt">  Name : <span> ' + experience.company + '</span></div>');
            }

            if (experience.role !== '') {
              response = response.concat('<div class="prompt">  Role : <span> ' + experience.role + '</span></div>');
            }

            response = response.concat('<div class="prompt">  Duration : <span> ' + experience.start + ' - ' + experience.end + '</span></div>');

            if (experience.description.length > 0) {
              response = response.concat('<div class="prompt">  Description : <ul>');
              experience.description.forEach(function (exp) {
                response = response.concat('<li> ' + exp + '</li>');
              });
              response = response.concat('</ul></div>');
            }

            response = response.concat('<div class="prompt"><hr></div>');
          });
          console.log(response);
          return response;
        }
      }, {
        key: "formatSkillsOutput",
        value: function formatSkillsOutput(output) {
          var response = '';
          response = response.concat('<div class="skills-wrapper">');

          if (output.programming.languages.length > 0) {
            response = response.concat('<div>');
            response = response.concat('<div class="heading"><samp>Languages</samp></div>');
            response = response.concat('<table class="table"><tbody>');
            output.programming.languages.forEach(function (language) {
              response = response.concat('<tr>');
              response = response.concat('<td>' + language.name + '</td>');
              response = response.concat('<td>' + '* '.repeat(language.level) + '</td>');
              response = response.concat('</tr>');
            });
            response = response.concat('</tbody></table>');
            response = response.concat('</div>');
          }

          if (output.programming.frameworks.length > 0) {
            response = response.concat('<div>');
            response = response.concat('<div class="heading"><samp>Frameworks</samp></div>');
            response = response.concat('<table class="table"><tbody>');
            output.programming.frameworks.forEach(function (framework) {
              response = response.concat('<tr>');
              response = response.concat('<td>' + framework.name + '</td>');
              response = response.concat('<td>' + '* '.repeat(framework.level) + '</td>');
              response = response.concat('</tr>');
            });
            response = response.concat('</tbody></table>');
            response = response.concat('</div>');
          }

          response = response.concat('</div>');
          console.log(response);
          return response;
        }
      }, {
        key: "formatProjectsOutput",
        value: function formatProjectsOutput(output) {
          var response = '';
          output.forEach(function (project) {
            if (project.name !== '') {
              response = response.concat('<div class="prompt">  Name : <span> ' + project.name + '</span></div>');
            }

            if (project.url !== '') {
              response = response.concat('<div class="prompt">  URL : <a  target="_blank" href=' + project.url + '> ' + project.url + '</a></div>');
            }

            if (project.description !== '') {
              response = response.concat('<div class="prompt">  Description : <span> ' + project.description + '</span></div>');
            }

            if (project.tags.length > 0) {
              response = response.concat('<div class="prompt"> Technology : ');
              project.tags.forEach(function (tag) {
                response = response.concat('<span>' + tag + ',&nbsp;' + '</span>');
              });
              response = response.concat('</div>');
              response = response.concat('<div class="prompt"></div>');
            }

            if (project.contributors.length > 0) {
              response = response.concat('<div class="prompt"> Contributors : ');
              project.contributors.forEach(function (contributor) {
                response = response.concat('<span>' + contributor + ',&nbsp;' + '</span>');
              });
              response = response.concat('</div>');
              response = response.concat('<div class="prompt"><hr></div>');
            }
          });
          console.log(response);
          return response;
        }
      }, {
        key: "formatContactsOutput",
        value: function formatContactsOutput(output) {
          var response = '';

          if (output.about.phone !== '') {
            response = response.concat('<span class="prompt"> You can ping me at ' + output.about.phone + ' or </span>');
          }

          if (output.about.email !== '') {
            response = response.concat('<span class="prompt"> can drop me an e-mail at <a href=mailto:' + output.about.email + '>' + output.about.email + '</a></span>');
          }

          console.log(response);
          return response;
        }
      }, {
        key: "formatHelpOutput",
        value: function formatHelpOutput() {
          return 'help';
        }
      }, {
        key: "formatTimeOutput",
        value: function formatTimeOutput(output) {
          return output.toString();
        }
      }]);

      return FormatOutput;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/nishant/code/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map