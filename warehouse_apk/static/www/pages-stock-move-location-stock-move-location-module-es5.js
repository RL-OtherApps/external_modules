(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stock-move-location-stock-move-location-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/stock-move-location/stock-move-location.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/stock-move-location/stock-move-location.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <app-scanner-header slot=\"end\" (show_scan_form_changed)=\"onShowEmitted($event)\" [show_scan_form]=show_scan_form></app-scanner-header>\n    <ion-title>Nuevo movimiento de stock</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <ion-col [ngClass]=\"{'link': location_move_id}\" (click)=\"select_location('origin')\">\n          <strong>Origen: </strong> <span *ngIf=\"location_id; else noLocationSelected\">{{ location_id['name'] }}</span>\n        </ion-col>\n        <ion-col>\n          <ion-button size=\"small\" *ngIf=\"location_move_id && move_lines_info.length > 0\" class=\"button-text\" (click)=\"action_move_location()\">Enviar</ion-button>\n          <ion-button size=\"small\" *ngIf=\"location_move_id && move_lines_info.length > 0\" class=\"button-text\" (click)=\"force_set_reserved_qties()\">Disponible</ion-button>\n          <ion-button size=\"small\" *ngIf=\"location_move_id && move_lines_info.length > 0\" class=\"button-text\" (click)=\"force_reset_qties()\">Reset</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col [ngClass]=\"{'link': location_move_id}\" (click)=\"select_location('destination')\">\n          <strong>Destino: </strong> <span *ngIf=\"location_id; else noLocationSelected\">{{ location_dest_id['name'] }}</span>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n    <ng-template #noLocationSelected>\n      <span>Sin seleccionar</span>\n    </ng-template>\n  </ion-card>\n\n  <ion-card *ngIf=\"notification\">\n      <ion-card-content>\n        <ion-row>\n          {{ notification }}\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n        <ion-row>  \n          <ion-col>\n            <div><strong>Producto</strong></div>\n          </ion-col>\n          <ion-col>\n            <div><strong>Origen</strong></div>\n          </ion-col>\n        \n          <ion-col>\n            <div><strong>Destino</strong></div>\n          </ion-col>\n          \n          <ion-col>\n            <div><strong>Cantidad.</strong></div>\n          </ion-col>\n        \n          <ion-col>\n            <div><strong>Disponible</strong></div>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let line of move_lines_info\">\n          <ion-col>\n            <div class=\"link\" (click)=\"open_link(line.product_id['id'])\">{{line.product_id['name']}}</div>\n          </ion-col>\n        \n          <ion-col>\n            <div>{{line.origin_location_id['name']}}</div>\n          </ion-col>\n        \n          <ion-col>\n            <div>{{line.destination_location_id['name']}}</div>\n          </ion-col>\n          \n          <ion-col>\n            <div class=\"link\" (click)=\"edit_qty(line.id)\">{{line.move_quantity}}</div>\n          </ion-col>\n        \n          <ion-col>\n            <div class=\"link\" (click)=\"change_qty(line.id, line.max_quantity)\">{{line.max_quantity}}</div>\n          </ion-col>\n        </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<app-scanner-footer (scanner_reading_changed)=\"onReadingEmitted($event)\" [show_scan_form]=show_scan_form [scanner_reading]=\"scanner_reading\"></app-scanner-footer>"

/***/ }),

/***/ "./src/app/pages/stock-move-location/stock-move-location.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/stock-move-location/stock-move-location.module.ts ***!
  \*************************************************************************/
/*! exports provided: StockMoveLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMoveLocationPageModule", function() { return StockMoveLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stock_move_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock-move-location.page */ "./src/app/pages/stock-move-location/stock-move-location.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _stock_move_location_page__WEBPACK_IMPORTED_MODULE_6__["StockMoveLocationPage"]
    }
];
var StockMoveLocationPageModule = /** @class */ (function () {
    function StockMoveLocationPageModule() {
    }
    StockMoveLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_stock_move_location_page__WEBPACK_IMPORTED_MODULE_6__["StockMoveLocationPage"]]
        })
    ], StockMoveLocationPageModule);
    return StockMoveLocationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/stock-move-location/stock-move-location.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/stock-move-location/stock-move-location.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col.link, div.link {\n  color: blue;\n  -webkit-text-decoration: underline blue 1px;\n          text-decoration: underline blue 1px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tpa28vaW9uaWM0L3dhcmVob3VzZV9hcGsvc3JjL2FwcC9wYWdlcy9zdG9jay1tb3ZlLWxvY2F0aW9uL3N0b2NrLW1vdmUtbG9jYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdG9jay1tb3ZlLWxvY2F0aW9uL3N0b2NrLW1vdmUtbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdG9jay1tb3ZlLWxvY2F0aW9uL3N0b2NrLW1vdmUtbG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbC5saW5rLCBkaXYubGluayB7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgYmx1ZSAxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImlvbi1jb2wubGluaywgZGl2Lmxpbmsge1xuICBjb2xvcjogYmx1ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgYmx1ZSAxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/stock-move-location/stock-move-location.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/stock-move-location/stock-move-location.page.ts ***!
  \***********************************************************************/
/*! exports provided: StockMoveLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMoveLocationPage", function() { return StockMoveLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_odoo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/odoo.service */ "./src/app/services/odoo.service.ts");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/audio.service */ "./src/app/services/audio.service.ts");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/stock.service */ "./src/app/services/stock.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");








var StockMoveLocationPage = /** @class */ (function () {
    function StockMoveLocationPage(odoo, router, alertCtrl, audio, stock, storage) {
        this.odoo = odoo;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.audio = audio;
        this.stock = stock;
        this.storage = storage;
        this.scanner_options = { reader: true, microphone: false, sound: false };
        this.awaitting_origin = false;
        this.awaitting_destination = false;
        this.check_scanner_values();
        this.notification = undefined;
    }
    StockMoveLocationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.odoo.isLoggedIn().then(function (data) {
            if (data == false) {
                _this.router.navigateByUrl('/login');
            }
            _this.show_scan_form = _this.scanner_options['reader'];
        })
            .catch(function (error) {
            _this.presentAlert('Error al comprobar tu sesión:', error);
        });
    };
    StockMoveLocationPage.prototype.check_scanner_values = function () {
        var _this = this;
        this.storage.get('SCANNER').then(function (val) {
            if (val) {
                _this.scanner_options = val;
            }
        })
            .catch(function (error) {
            _this.presentAlert('Error al acceder a las opciones del scanner:', error);
        });
    };
    StockMoveLocationPage.prototype.open_link = function (product_id) {
        this.router.navigateByUrl('/product/' + product_id);
    };
    StockMoveLocationPage.prototype.onReadingEmitted = function (val) {
        this.scanner_reading = val;
        this.process_reading();
    };
    StockMoveLocationPage.prototype.onShowEmitted = function (val) {
        this.show_scan_form = val;
    };
    StockMoveLocationPage.prototype.presentAlert = function (titulo, texto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.audio.play('error');
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: titulo,
                                subHeader: texto,
                                buttons: ['Ok']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StockMoveLocationPage.prototype.edit_qty = function (line_id) {
        this.actual_line = line_id;
        this.awaitting_qty = true;
        this.notification = "Introduzca una cantidad para la línea";
    };
    StockMoveLocationPage.prototype.change_qty = function (line_id, qty) {
        var _this = this;
        this.stock.change_qty(line_id, qty).then(function (data) {
            _this.update_data(data);
            _this.notification = undefined;
        }).catch(function (error) {
            _this.presentAlert('No se ha podido modificar la ubicación:', error);
        });
    };
    StockMoveLocationPage.prototype.process_reading = function () {
        if (this.awaitting_destination == true) {
            this.change_location('destination', this.scanner_reading);
        }
        else if (this.awaitting_origin == true) {
            this.change_location('origin', this.scanner_reading);
        }
        else if (this.awaitting_qty) {
            this.change_qty(this.actual_line, this.scanner_reading);
        }
        else if (!this.location_id) {
            this.create_new_move_location();
        }
        else {
            this.create_new_move_location_line();
        }
    };
    StockMoveLocationPage.prototype.select_location = function (type) {
        if (type == 'origin' && this.location_move_id) {
            this.awaitting_origin = true;
            this.notification = "Introduzca una nueva ubitación de origen";
        }
        else if (type == 'destination' && this.location_move_id) {
            this.awaitting_destination = true;
            this.notification = "Introduzca una nueva ubitación de destino";
        }
    };
    StockMoveLocationPage.prototype.change_location = function (type, location_id) {
        var _this = this;
        this.stock.change_move_location(this.location_move_id, type, location_id).then(function (data) {
            _this.update_data(data);
            _this.awaitting_origin = false;
            _this.awaitting_destination = false;
            _this.notification = undefined;
        })
            .catch(function (error) {
            _this.presentAlert('No se ha podido modificar la ubicación:', error);
        });
    };
    StockMoveLocationPage.prototype.update_data = function (data) {
        if (data['err'] == true) {
            this.presentAlert('No se ha podido modificar la ubicación:', data['error']);
        }
        else {
            this.location_id = data['origin_location_id'];
            this.location_dest_id = data['destination_location_id'];
            this.location_move_id = data['id'];
            this.move_lines_info = data['stock_move_location_line_ids'];
        }
    };
    StockMoveLocationPage.prototype.create_new_move_location = function () {
        var _this = this;
        this.stock.create_new_move_location(this.scanner_reading).then(function (data) {
            _this.update_data(data);
            _this.audio.play('click');
        })
            .catch(function (error) {
            _this.presentAlert('Error al recuperar la ubicación:', error);
        });
    };
    StockMoveLocationPage.prototype.create_new_move_location_line = function () {
        var _this = this;
        this.stock.create_new_move_location_line(this.location_move_id, this.location_id['id'], this.location_dest_id['id'], this.scanner_reading).then(function (data) {
            _this.move_lines_info.push(data);
            _this.audio.play('click');
        })
            .catch(function (error) {
            _this.presentAlert('Error al recuperar el producto:', error);
        });
    };
    StockMoveLocationPage.prototype.force_reset_qties = function () {
        var _this = this;
        this.stock.set_multiple_move_location(this.location_move_id, 'reset').then(function (data) {
            _this.update_data(data);
        })
            .catch(function (error) {
            _this.presentAlert('Error al modificar las cantidades:', error);
        });
    };
    StockMoveLocationPage.prototype.force_set_reserved_qties = function () {
        var _this = this;
        this.stock.set_multiple_move_location(this.location_move_id, 'set').then(function (data) {
            _this.update_data(data);
        })
            .catch(function (error) {
            _this.presentAlert('Error al modificar las cantidades:', error);
        });
    };
    StockMoveLocationPage.prototype.action_move_location = function () {
        var _this = this;
        this.stock.action_move_location(this.location_move_id).then(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/stock-picking/' + data + '/internal');
        })
            .catch(function (error) {
            _this.presentAlert('Error al enviar el movimiento: ', error);
        });
    };
    StockMoveLocationPage.ctorParameters = function () { return [
        { type: _services_odoo_service__WEBPACK_IMPORTED_MODULE_4__["OdooService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_5__["AudioService"] },
        { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
    ]; };
    StockMoveLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-move-location',
            template: __webpack_require__(/*! raw-loader!./stock-move-location.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/stock-move-location/stock-move-location.page.html"),
            styles: [__webpack_require__(/*! ./stock-move-location.page.scss */ "./src/app/pages/stock-move-location/stock-move-location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_odoo_service__WEBPACK_IMPORTED_MODULE_4__["OdooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_audio_service__WEBPACK_IMPORTED_MODULE_5__["AudioService"],
            _services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], StockMoveLocationPage);
    return StockMoveLocationPage;
}());

/* producto 827702101 */
/* location 03445.19.01.01 */


/***/ })

}]);
//# sourceMappingURL=pages-stock-move-location-stock-move-location-module-es5.js.map