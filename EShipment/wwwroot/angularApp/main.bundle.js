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

module.exports = "<router-outlet></router-outlet>\n\n"

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./client-src/app/app.component.html"),
            styles: [__webpack_require__("./client-src/app/app.component.css")]
        })
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
var orders_component_1 = __webpack_require__("./client-src/app/orders.component.ts");
var order_component_1 = __webpack_require__("./client-src/app/order.component.ts");
var table_1 = __webpack_require__("./node_modules/primeng/table.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                orders_component_1.OrdersComponent,
                order_component_1.OrderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                table_1.TableModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'angularApp',
                        component: orders_component_1.OrdersComponent
                    }
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./client-src/app/model/order.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(number, companyName, mark, containerNumber, destination, dischargedPort, BLNumber, ETD, ETA, numOfGoods, weight, measurement, description, statuses, receiveOrderDate) {
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
        this.description = description;
        this.statuses = statuses;
        this.receiveOrderDate = receiveOrderDate;
    }
    return Order;
}());
exports.Order = Order;


/***/ }),

/***/ "./client-src/app/order.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<tr *ngIf=\"model\">\r\n  <td>\r\n    {{model.number}}\r\n  </td>\r\n  <td>\r\n    {{model.companyName}}\r\n  </td>\r\n  <td>\r\n    {{model.mark}}\r\n  </td>\r\n  <td>\r\n    {{model.ETD}}\r\n  </td>\r\n  <td>\r\n    {{model.ETA}}\r\n  </td>\r\n  <td>\r\n    {{model.receiveOrderDate}}\r\n  </td>\r\n  <td>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onEditClick(index)\">\r\n      <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>&nbsp;\r\n      Edit\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onDeleteClick(index)\">\r\n      <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>&nbsp;\r\n      Delete\r\n    </button>\r\n  </td>\r\n</tr>\r\n\r\n"

/***/ }),

/***/ "./client-src/app/order.component.ts":
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
            template: __webpack_require__("./client-src/app/order.component.html")
        })
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;


/***/ }),

/***/ "./client-src/app/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h4 style=\"display: inline\">Orders:&nbsp;&nbsp;&nbsp;</h4>\r\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onAddClick()\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\">&nbsp;</i>\r\n        Add\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <p-table [value]=\"orders\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>No.</th>\r\n        <th>Company</th>\r\n        <th>Mark</th>\r\n        <th>ETD</th>\r\n        <th>ETA</th>\r\n        <th>Receive Date</th>\r\n        <th></th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-order>\r\n      <tr>\r\n        <td>\r\n          {{order.number}}\r\n        </td>\r\n        <td>\r\n          {{order.companyName}}\r\n        </td>\r\n        <td>\r\n          {{order.mark}}\r\n        </td>\r\n        <td>\r\n          {{order.ETD}}\r\n        </td>\r\n        <td>\r\n          {{order.ETA}}\r\n        </td>\r\n        <td>\r\n          {{order.receiveOrderDate}}\r\n        </td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onEditClick(i)\">\r\n            <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\"></i>&nbsp;\r\n            Edit\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onDeleteClick(i)\">\r\n            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>&nbsp;\r\n            Delete\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./client-src/app/orders.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ordersService, route, location, cdRef) {
        this.ordersService = ordersService;
        this.route = route;
        this.location = location;
        this.cdRef = cdRef;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.ordersService.getOrders(); })
            .subscribe(function (orders) { return _this.orders = orders; });
        this.route.params.subscribe(function (params) {
        });
        this.onDelete = this.onDeleteClick.bind(this);
        this.onEdit = this.onEditClick.bind(this);
        this.orders = [
            {
                number: "tttiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                companyName: "hhhh",
                mark: "kkkk",
                containerNumber: "ccc",
                destination: "",
                dischargedPort: "",
                BLNumber: "",
                ETD: null,
                ETA: null,
                numOfGoods: 1,
                weight: 2,
                measurement: 4,
                description: "",
                statuses: null,
                receiveOrderDate: null
            },
            {
                number: "tttiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
                companyName: "hhhh",
                mark: "kkkk",
                containerNumber: "ccc",
                destination: "",
                dischargedPort: "",
                BLNumber: "",
                ETD: null,
                ETA: null,
                numOfGoods: 1,
                weight: 2,
                measurement: 4,
                description: "",
                statuses: null,
                receiveOrderDate: null
            }
        ];
    };
    OrdersComponent.prototype.ngAfterViewChecked = function () {
    };
    OrdersComponent.prototype.onSaveClick = function (customers) {
        this.ordersService.saveOrders(this.orders);
    };
    OrdersComponent.prototype.onAddClick = function () {
        this.orders.push(new order_1.Order());
    };
    OrdersComponent.prototype.onDeleteClick = function (index) {
        this.orders.splice(index, 1);
    };
    OrdersComponent.prototype.onEditClick = function (index) {
        this.orders.splice(index, 1);
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'orders',
            template: __webpack_require__("./client-src/app/orders.component.html"),
            providers: [orders_service_1.OrdersService]
        }),
        __metadata("design:paramtypes", [orders_service_1.OrdersService,
            router_1.ActivatedRoute,
            common_1.Location,
            core_1.ChangeDetectorRef])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;


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
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
        this.baseUrl = '/api';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.externalApi = '/api';
    }
    OrdersService.prototype.getOrders = function () {
        return this.http.get(this.baseUrl + '/orders').toPromise().then(function (response) {
            var json = response.json();
            return json;
        }).catch(this.handleError);
    };
    OrdersService.prototype.saveOrders = function (orders) {
        return this.http.post(this.baseUrl + '/orders', JSON.stringify(orders), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var json = response.json();
            return json;
        }).catch(this.handleError);
    };
    OrdersService.prototype.handleError = function (error) {
        console.error('An error occcured', error);
        return Promise.reject(error.message || error);
    };
    OrdersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;


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