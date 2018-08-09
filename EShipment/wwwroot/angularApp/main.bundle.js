webpackJsonp(["main"],{

/***/ "./client-src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./client-src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client-src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client-src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a href=\"/\" class=\"navbar-brand\">EShipment</a>\r\n      </div>\r\n      <div class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li><a href=\"/\">Home</a></li>\r\n          <li><a href=\"angularHome/\">Order</a></li>\r\n          <li><a href=\"home/about\">About</a></li>\r\n          <li><a href=\"home/contact\">Contact</a></li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li>\r\n            <a asp-area=\"\" title=\"Manage\">Hello {{userName}}!</a>\r\n          </li>\r\n          <li>\r\n            <button type=\"button\" class=\"btn btn-link navbar-btn navbar-link\" (click)=\"onLogoutClick()\">\r\n              Log out\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <br /><br />\r\n  <div class=\"container body-content\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./client-src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var authentication_service_1 = __webpack_require__("./client-src/app/service/authentication.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, route, location, cdRef) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.location = location;
        this.cdRef = cdRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        this.userName = user ? user.email : null;
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.authenticationService.logout().subscribe(function (resp) {
            document.open();
            document.write(resp);
            document.close();
        });
        //this.ordersService.getOrders().subscribe(resp => {
        //  console.log(resp)
        //});
        //localStorage.clear()
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./client-src/app/app.component.html"),
            styles: [__webpack_require__("./client-src/app/app.component.css")],
            providers: [authentication_service_1.AuthenticationService]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            router_1.ActivatedRoute,
            common_1.Location,
            core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./client-src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./client-src/app/app.component.ts");
var orders_component_1 = __webpack_require__("./client-src/app/order/orders.component.ts");
var order_component_1 = __webpack_require__("./client-src/app/order/order.component.ts");
var orderModal_component_1 = __webpack_require__("./client-src/app/order/orderModal.component.ts");
var OrderStatusesModal_component_1 = __webpack_require__("./client-src/app/order/OrderStatusesModal.component.ts");
var table_1 = __webpack_require__("./node_modules/primeng/table.js");
var calendar_1 = __webpack_require__("./node_modules/primeng/calendar.js");
var inputtext_1 = __webpack_require__("./node_modules/primeng/inputtext.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var dropdown_1 = __webpack_require__("./node_modules/primeng/dropdown.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var token_interceptor_1 = __webpack_require__("./client-src/app/token.interceptor.ts");
var http_3 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var auth_guard_service_1 = __webpack_require__("./client-src/app/service/auth-guard.service.ts");
var authentication_service_1 = __webpack_require__("./client-src/app/service/authentication.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                orders_component_1.OrdersComponent,
                order_component_1.OrderComponent,
                orderModal_component_1.OrderModalComponent,
                OrderStatusesModal_component_1.OrderStatusesModalComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                table_1.TableModule,
                calendar_1.CalendarModule,
                inputtext_1.InputTextModule,
                http_3.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                dropdown_1.DropdownModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'angularApp',
                        component: orders_component_1.OrdersComponent,
                        canActivate: [auth_guard_service_1.AuthGuardService]
                    }
                ])
            ],
            providers: [
                auth_guard_service_1.AuthGuardService,
                authentication_service_1.AuthenticationService, ,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_1.TokenInterceptor,
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./client-src/app/constant/user.key.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.idKey = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';
exports.roleKey = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';


/***/ }),

/***/ "./client-src/app/model/order.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(number, companyName, mark, containerNumber, destination, dischargedPort, BLNumber, ETD, ETA, numOfGoods, weight, measurement, productDescription, statuses, receiveOrderDate) {
        this.number = number;
        this.companyName = companyName;
        this.mark = mark;
        this.containerNumber = containerNumber;
        this.destination = destination;
        this.dischargedPort = dischargedPort;
        this.BLNumber = BLNumber;
        this.ETD = ETD;
        this.ETA = ETA;
        this.numOfGoods = numOfGoods;
        this.weight = weight;
        this.measurement = measurement;
        this.productDescription = productDescription;
        this.statuses = statuses;
        this.receiveOrderDate = receiveOrderDate;
    }
    return Order;
}());
exports.Order = Order;


/***/ }),

/***/ "./client-src/app/model/orderStatus.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus = /** @class */ (function () {
    function OrderStatus(id, date, description) {
        this.id = id;
        this.date = date;
        this.description = description;
    }
    return OrderStatus;
}());
exports.OrderStatus = OrderStatus;


/***/ }),

/***/ "./client-src/app/order/OrderStatusesModal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var orderStatus_1 = __webpack_require__("./client-src/app/model/orderStatus.ts");
var orders_service_1 = __webpack_require__("./client-src/app/service/orders.service.ts");
var OrderStatusesModalComponent = /** @class */ (function () {
    function OrderStatusesModalComponent(ordersService, cdRef) {
        this.ordersService = ordersService;
        this.cdRef = cdRef;
    }
    OrderStatusesModalComponent.prototype.ngOnInit = function () {
        this.addStatus = this.onAddStatusClick.bind(this);
        this.deleteStatus = this.onDeleteStatusClick.bind(this);
    };
    OrderStatusesModalComponent.prototype.ngOnChanges = function (changes) {
    };
    OrderStatusesModalComponent.prototype.ngAfterContentChecked = function () {
    };
    OrderStatusesModalComponent.prototype.ngAfterViewChecked = function () {
    };
    OrderStatusesModalComponent.prototype.onAddStatusClick = function () {
        this.orderStatuses.push(new orderStatus_1.OrderStatus(0, null, null));
    };
    OrderStatusesModalComponent.prototype.onDeleteStatusClick = function (i) {
        this.orderStatuses.splice(i, 1);
    };
    // This function is to fix the issue that the UI display doesn't correctly reflect orderStatuses
    // when deleting and then adding some statuses
    OrderStatusesModalComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrderStatusesModalComponent.prototype, "orderStatuses", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], OrderStatusesModalComponent.prototype, "showModal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], OrderStatusesModalComponent.prototype, "closeModal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], OrderStatusesModalComponent.prototype, "saveOrder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrderStatusesModalComponent.prototype, "orderStatusDates", void 0);
    OrderStatusesModalComponent = __decorate([
        core_1.Component({
            selector: 'orderStatusesModal',
            template: __webpack_require__("./client-src/app/order/orderStatusesModal.component.html")
        }),
        __metadata("design:paramtypes", [orders_service_1.OrdersService, core_1.ChangeDetectorRef])
    ], OrderStatusesModalComponent);
    return OrderStatusesModalComponent;
}());
exports.OrderStatusesModalComponent = OrderStatusesModalComponent;


/***/ }),

/***/ "./client-src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<tr *ngIf=\"model\">\r\n  <td>\r\n    {{model.number}}\r\n  </td>\r\n  <td>\r\n    {{model.companyName}}\r\n  </td>\r\n  <td>\r\n    {{model.mark}}\r\n  </td>\r\n  <td>\r\n    {{model.ETD}}\r\n  </td>\r\n  <td>\r\n    {{model.ETA}}\r\n  </td>\r\n  <td>\r\n    {{model.receiveOrderDate}}\r\n  </td>\r\n  <td>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onEditClick(index)\">\r\n      <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>&nbsp;\r\n      Edit\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onDeleteClick(index)\">\r\n      <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>&nbsp;\r\n      Delete\r\n    </button>\r\n  </td>\r\n</tr>\r\n\r\n"

/***/ }),

/***/ "./client-src/app/order/order.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
        this.submitted = false;
    }
    OrderComponent.prototype.onSubmit = function () { this.submitted = true; };
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.ngOnChanges = function (changes) {
    };
    OrderComponent.prototype.ngAfterContentChecked = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OrderComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], OrderComponent.prototype, "onDeleteClick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], OrderComponent.prototype, "onEditClick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], OrderComponent.prototype, "index", void 0);
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'order',
            template: __webpack_require__("./client-src/app/order/order.component.html")
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;


/***/ }),

/***/ "./client-src/app/order/orderModal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\"\r\n     aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" [style.display]=\"this.showModal ? 'block' : 'none'\">\r\n  <div class=\"modal-dialog\" role=\"document\" style=\"\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form *ngIf=\"order\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <label>\r\n                User Email\r\n              </label>\r\n              <br />\r\n              <p-dropdown [options]=\"userOptions\" [(ngModel)]=\"order.applicationUser_Id\" [filter]=\"true\"  name=\"userName\"\r\n                          filterBy=\"value\" placeholder=\"User Name\" showClear=\"true\" autoWidth=\"false\">\r\n\r\n              </p-dropdown>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Order Number\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.number\" name=\"number\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Company Name\r\n              </label>\r\n              <br />\r\n              {{order.companyName}}\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                mark\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.mark\" name=\"mark\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Container Number\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.containerNumber\" name=\"containerNumber\" />\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Destination\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.destination\" name=\"destination\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Discharged Port\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.dischargedPort\" name=\"dischargedPort\" />\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                BL Number\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.BLNumber\" name=\"BLNumber\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                ETD\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.ETD\" name=\"ETD\" />\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                ETA\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.ETA\" name=\"ETA\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Num Of Goods\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.numOfGoods\" name=\"numOfGoods\" />\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Weight\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.weight\" name=\"weight\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Measurement\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.measurement\" name=\"measurement\" />\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Product Description\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.productDescription\" name=\"productDescription\" />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label>\r\n                Receive Order Date\r\n              </label>\r\n              <br />\r\n              <input type=\"text\" pInputText [(ngModel)]=\"order.receiveOrderDate\" name=\"receiveOrderDate\" />\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveOrder()\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./client-src/app/order/orderModal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var order_1 = __webpack_require__("./client-src/app/model/order.ts");
var user_service_1 = __webpack_require__("./client-src/app/service/user.service.ts");
var OrderModalComponent = /** @class */ (function () {
    function OrderModalComponent(cdRef, userService) {
        this.cdRef = cdRef;
        this.userService = userService;
        this.submitted = false;
    }
    OrderModalComponent.prototype.onSubmit = function () { this.submitted = true; };
    OrderModalComponent.prototype.ngOnInit = function () {
    };
    OrderModalComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        console.log(changes);
        var userId = changes.userId;
        if (userId && userId.currentValue) {
            this.userService.getUser(userId.currentValue).subscribe(function (resp) {
                if (_this.order != null) {
                    _this.order.companyName = resp.companyName;
                }
            });
        }
        else {
            if (this.order != null) {
                this.order.companyName = null;
            }
        }
    };
    OrderModalComponent.prototype.ngAfterContentChecked = function () {
    };
    OrderModalComponent.prototype.ngAfterViewChecked = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", order_1.Order)
    ], OrderModalComponent.prototype, "order", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OrderModalComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], OrderModalComponent.prototype, "showModal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], OrderModalComponent.prototype, "closeModal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], OrderModalComponent.prototype, "saveOrder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], OrderModalComponent.prototype, "userOptions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OrderModalComponent.prototype, "title", void 0);
    OrderModalComponent = __decorate([
        core_1.Component({
            selector: 'orderModal',
            template: __webpack_require__("./client-src/app/order/orderModal.component.html"),
            styles: ['p-dropdown {width: 172px !important;} p-dropdown /deep/ div:first-child {width: 172px !important;}'],
            providers: [user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, user_service_1.UserService])
    ], OrderModalComponent);
    return OrderModalComponent;
}());
exports.OrderModalComponent = OrderModalComponent;


/***/ }),

/***/ "./client-src/app/order/orderStatusesModal.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"orderStatuses\" (ngSubmit)=\"saveOrder()\" #orderStatusesForm=\"ngForm\">\r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" [style.display]=\"this.showModal ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog\" role=\"document\" style=\"\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Order Status</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addStatus()\">\r\n                <i class=\"fa fa-plus\" aria-hidden=\"true\">&nbsp;</i>\r\n                Add\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\" *ngFor=\"let orderStatus of orderStatuses; let i=index; trackBy:customTrackBy\">\r\n            <div class=\"col-md-5\">\r\n              <p-calendar [(ngModel)]=\"orderStatusDates[i]\" [monthNavigator]=\"true\" [showIcon]=\"true\"\r\n                          [yearNavigator]=\"true\" yearRange=\"1950:2030\" name=\"statusDate{{i}}\">\r\n              </p-calendar>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"orderStatus.description\" name=\"statusDescritpion{{i}}\" />\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"deleteStatus(i)\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>&nbsp;\r\n                Delete\r\n              </button>\r\n            </div>\r\n            <br /><br />\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal()\">Close</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!orderStatusesForm.form.valid\">Save</button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./client-src/app/order/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<div>\r\n  <orderModal [showModal]=\"showOrderModal\" [closeModal]=\"closeModal\" [saveOrder]=\"saveOrder\" [order]=\"order\"\r\n              [userOptions]=\"userOptions\" [title]=\"orderModalTitle\" [userId]=\"order !=null ? order.applicationUser_Id : null\">\r\n  </orderModal>\r\n  <orderStatusesModal [showModal]=\"showOrderStatusesModal\" [closeModal]=\"closeStatusModal\"\r\n                      [orderStatuses]=\"order != null ? order.statuses : null\" [saveOrder]=\"saveOrder\"\r\n                      [orderStatusDates]=\"orderStatusDates\">\r\n  </orderStatusesModal>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <p-dropdown [options]=\"userOptions\" [(ngModel)]=\"selectedUser\" [filter]=\"true\"\r\n                  filterBy=\"value\" placeholder=\"User Name\" showClear=\"true\">\r\n\r\n      </p-dropdown>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h4 style=\"display: inline\">Orders:</h4>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" (click)=\"onAddClick()\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\">&nbsp;</i>\r\n        Add\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <p-table [value]=\"filteredOrders\" [scrollable]=\"true\" [style]=\"{width:'1140'}\" scrollHeight=\"900px\">\r\n    <ng-template pTemplate=\"colgroup\" let-filteredOrders>\r\n      <colgroup>\r\n        <col style=\"width:50px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n        <col style=\"width:150px\">\r\n      </colgroup>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-order>\r\n      <tr>\r\n        <th>No.</th>\r\n        <th>Company</th>\r\n        <th>Mark</th>\r\n        <th>Container</th>\r\n        <th>Destination</th>\r\n        <th>Discharged Port</th>\r\n        <th>BL</th>\r\n        <th>ETD</th>\r\n        <th>ETA</th>\r\n        <th>Num Of Goods</th>\r\n        <th>Weight</th>\r\n        <th>Measurement</th>\r\n        <th>Product Description</th>\r\n        <th>Status</th>\r\n        <th>Receive Order Date</th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-order let-columns=\"columns\" let-i=\"rowIndex\">\r\n      <tr>\r\n        <td>\r\n          {{order.number}}\r\n        </td>\r\n        <td>\r\n          {{order.companyName}}\r\n        </td>\r\n        <td>\r\n          {{order.mark}}\r\n        </td>\r\n        <td>\r\n          {{order.containerNumber}}\r\n        </td>\r\n        <td>\r\n          {{order.destination}}\r\n        </td>\r\n        <td>\r\n          {{order.BLNumber}}\r\n        </td>\r\n        <td>\r\n          {{order.ETD}}\r\n        </td>\r\n        <td>\r\n          {{order.ETA}}\r\n        </td>\r\n        <td>\r\n          {{order.numOfGoods}}\r\n        </td>\r\n        <td>\r\n          {{order.weight}}\r\n        </td>\r\n        <td>\r\n          {{order.measurement}}\r\n        </td>\r\n        <td>\r\n          {{order.productDescription}}\r\n        </td>\r\n        <td>\r\n          {{order.OrderStatus}}\r\n        </td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"openStatusesModal(i)\">\r\n            <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>&nbsp;\r\n            Open\r\n          </button>\r\n        </td>\r\n        <td>\r\n          {{order.receiveOrderDate}}\r\n        </td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onEditClick(i)\">\r\n            <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>&nbsp;\r\n            Edit\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"onDeleteClick(i)\">\r\n            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>&nbsp;\r\n            Delete\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./client-src/app/order/orders.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var order_1 = __webpack_require__("./client-src/app/model/order.ts");
var orders_service_1 = __webpack_require__("./client-src/app/service/orders.service.ts");
var user_service_1 = __webpack_require__("./client-src/app/service/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ordersService, userService, route, location, cdRef) {
        this.ordersService = ordersService;
        this.userService = userService;
        this.route = route;
        this.location = location;
        this.cdRef = cdRef;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordersService.getOrders().subscribe(function (resp) {
            _this.orders = resp;
        });
        this.userService.getUsers().subscribe(function (resp) {
            _this.users = resp;
            if (_this.users != null) {
                _this.users.filter(function (user) {
                    // Don't include the admin user in the dropdown options
                    var isAdmin = false;
                    user.roleNames.some(function (role) {
                        if (role === "admin") {
                            isAdmin = true;
                            return true;
                        }
                    });
                    return !isAdmin;
                }).map(function (user) {
                    if (_this.userOptions == null) {
                        _this.userOptions = new Array();
                    }
                    _this.userOptions.push({
                        label: user.email,
                        value: user.id
                    });
                });
            }
        });
        this.route.params.subscribe(function (params) {
        });
        this.closeModal = this.onColseModalClick.bind(this);
        this.saveOrder = this.onSaveChangeClick.bind(this);
        this.openStatusesModal = this.onOpenStatusesClick.bind(this);
        this.closeStatusModal = this.onCloseStatusClick.bind(this);
    };
    OrdersComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    OrdersComponent.prototype.ngDoCheck = function () {
        var _this = this;
        this.filteredOrders = this.orders != null ? this.orders.filter(function (order) {
            return _this.selectedUser != null ? order.applicationUser_Id === _this.selectedUser : true;
        }) : null;
    };
    OrdersComponent.prototype.onSaveChangeClick = function () {
        var _this = this;
        //Convert status Date to string
        if (this.orderStatusDates != null) {
            this.orderStatusDates.map(function (orderStatusDate, idx) {
                if (_this.order != null && _this.order.statuses != null) {
                    _this.order.statuses[idx].date = orderStatusDate.toDateString();
                }
            });
        }
        this.ordersService.saveOrder(this.order).subscribe(function (resp) {
            if (_this.order.id == null) {
                _this.order.id = resp;
                _this.orders.push(_this.order);
            }
            _this.showOrderModal = false;
            _this.showOrderStatusesModal = false;
        });
    };
    OrdersComponent.prototype.onAddClick = function () {
        this.showOrderModal = true;
        this.orderModalTitle = "Add Order";
        this.order = new order_1.Order();
        var user = JSON.parse(localStorage.getItem('user'));
        this.order.companyName = user.companyName;
    };
    OrdersComponent.prototype.onDeleteClick = function (index) {
        var _this = this;
        this.ordersService.deleteOrder(this.orders[index].id).subscribe(function (resp) {
            _this.orders.splice(index, 1);
        });
    };
    OrdersComponent.prototype.onEditClick = function (index) {
        this.showOrderModal = true;
        this.orderModalTitle = "Edit Order";
        this.order = this.orders[index];
        this.setOrderStatusDates();
    };
    OrdersComponent.prototype.onColseModalClick = function () {
        this.showOrderModal = false;
    };
    OrdersComponent.prototype.onOpenStatusesClick = function (index) {
        this.showOrderStatusesModal = true;
        this.order = this.orders[index];
        this.setOrderStatusDates();
    };
    OrdersComponent.prototype.setOrderStatusDates = function () {
        var _this = this;
        if (this.order != null && this.order.statuses != null) {
            this.orderStatusDates = [];
            this.order.statuses.map(function (orderStatus) {
                _this.orderStatusDates.push(new Date(orderStatus.date));
            });
        }
    };
    OrdersComponent.prototype.onCloseStatusClick = function () {
        this.showOrderStatusesModal = false;
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'orders',
            template: __webpack_require__("./client-src/app/order/orders.component.html"),
            providers: [orders_service_1.OrdersService, user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [orders_service_1.OrdersService,
            user_service_1.UserService,
            router_1.ActivatedRoute,
            common_1.Location,
            core_1.ChangeDetectorRef])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;


/***/ }),

/***/ "./client-src/app/service/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var authentication_service_1 = __webpack_require__("./client-src/app/service/authentication.service.ts");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            window.location.href = 'account/login';
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "./client-src/app/service/authentication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var throw_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/throw.js");
var angular_jwt_1 = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.logout = function () {
        var body = new http_1.HttpParams()
            .set('__RequestVerificationToken', localStorage.getItem('verificationToken'));
        var tokenJson = localStorage.getItem('user');
        var user = JSON.parse(tokenJson);
        var token = user.token;
        localStorage.clear();
        return this.http.post('/api/auth/logout', '', {
            headers: new http_1.HttpHeaders({
                'Authorization': "Bearer " + token,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
            }),
            responseType: 'text'
        });
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var jwtHelper = new angular_jwt_1.JwtHelperService();
        var userJson = localStorage.getItem('user');
        if (userJson != null) {
            var user = JSON.parse(userJson);
            var token = user.token;
            return !jwtHelper.isTokenExpired(token);
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return throw_1._throw('Something bad happened; please try again later.');
    };
    ;
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "./client-src/app/service/error.handler.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var throw_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/throw.js");
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error.error.message + " " + error.error.error.stack));
        }
        document.write(error.error.text);
        // return an observable with a user-facing error message
        return throw_1._throw('Something bad happened; please try again later.');
    };
    ;
    return ErrorHandler;
}());
exports.ErrorHandler = ErrorHandler;


/***/ }),

/***/ "./client-src/app/service/orders.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var http_3 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var error_handler_1 = __webpack_require__("./client-src/app/service/error.handler.ts");
var user_key_1 = __webpack_require__("./client-src/app/constant/user.key.ts");
var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
        this.baseUrl = '/api';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.idKey = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier';
    }
    OrdersService.prototype.getOrders = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return this.http.get(this.baseUrl + '/user/' + user[user_key_1.idKey] + '/orders').pipe(operators_1.catchError(error_handler_1.ErrorHandler.handleError));
    };
    OrdersService.prototype.saveOrder = function (order) {
        var httpOptions = {
            headers: new http_2.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var user = JSON.parse(localStorage.getItem('user'));
        return this.http.post(this.baseUrl + '/user/' + user[this.idKey] + '/order', order, httpOptions).pipe(operators_1.catchError(error_handler_1.ErrorHandler.handleError));
    };
    OrdersService.prototype.deleteOrder = function (id) {
        var user = JSON.parse(localStorage.getItem('user'));
        return this.http.delete(this.baseUrl + '/user/' + user[this.idKey] + '/order/' + id).pipe(operators_1.catchError(error_handler_1.ErrorHandler.handleError));
    };
    OrdersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_3.HttpClient])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;


/***/ }),

/***/ "./client-src/app/service/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var error_handler_1 = __webpack_require__("./client-src/app/service/error.handler.ts");
var user_key_1 = __webpack_require__("./client-src/app/constant/user.key.ts");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = '/api';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.getUsers = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        return this.http.get(this.baseUrl + '/user/' + user[user_key_1.idKey] + '/users').pipe(operators_1.catchError(error_handler_1.ErrorHandler.handleError));
    };
    UserService.prototype.getUser = function (userId) {
        var user = JSON.parse(localStorage.getItem('user'));
        return this.http.get(this.baseUrl + '/user/' + user[user_key_1.idKey] + '/userToGet/' + userId).pipe(operators_1.catchError(error_handler_1.ErrorHandler.handleError));
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_2.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./client-src/app/token.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var user = JSON.parse(localStorage.getItem('user'));
        request = user != null ? request.clone({
            setHeaders: {
                Authorization: "Bearer " + user.token
            }
        }) : request;
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());
exports.TokenInterceptor = TokenInterceptor;


/***/ }),

/***/ "./client-src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./client-src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./client-src/app/app.module.ts");
var environment_1 = __webpack_require__("./client-src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./client-src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map