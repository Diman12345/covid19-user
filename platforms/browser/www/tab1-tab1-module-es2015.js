(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      My Finance\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar color=\"secondary\">\n      <ion-title size=\"large\">My Finance</ion-title>\n    </ion-toolbar>\n  </ion-header>  \n  <ion-row class=\"ion-text-center align-items-center\">\n    <ion-col size=\"12\">\n      <ion-text><h4>ADD RECORD</h4></ion-text>\n    </ion-col> \n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" >\n      <ion-select [(ngModel)]=\"addrecord.type\" placeholder=\"Select\">\n        <ion-select-option value=\"income\">Income</ion-select-option>\n        <ion-select-option value=\"expense\">Expense</ion-select-option>\n      </ion-select>\n    </ion-col>\n    <ion-col size=\"12\" >\n      <ion-item>\n        <ion-input [(ngModel)]=\"addrecord.description\" placeholder=\"Description\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-item>\n        <ion-input [(ngModel)]=\"addrecord.amount\" placeholder=\"Amount($)\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"10\" offset=\"1\">\n      <ion-button expand=\"block\" color=\"success\" (click)=\"AddRecord(addrecord.type, addrecord.description, addrecord.amount)\">Add</ion-button>\n    </ion-col>\n  </ion-row>  \n  <ion-row>    \n    <ion-col size=\"12\">        \n        <h4>\n          Your last records\n        </h4>\n        <ion-row  >       \n          <ion-col size=\"3\">\n            Amount\n          </ion-col>\n          <ion-col size=\"5\">\n            Description\n          </ion-col>\n          <ion-col size=\"4\" class=\"ion-text-center align-items-center\">\n            Action\n          </ion-col>\n        </ion-row>\n        <ion-row  class=\"align-items-center\" *ngFor=\"let record of records; let i = index\">\n          <ion-col  size=\"3\">             \n            <ion-note *ngIf=\"record.type == 'income'\" color=\"success\">$ {{record.amount}}</ion-note>\n            <ion-note *ngIf=\"record.type == 'expense'\" color=\"danger\">$ {{record.amount}}</ion-note>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-note>{{record.description}}</ion-note>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-button size=\"small\" color=\"primary\" (click)=\"UpdateRecord(record.id, record.type, record.description, record.amount)\"><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n            <ion-button size=\"small\" color=\"danger\" (click)=\"DeleteRecord(record.id)\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n          </ion-col>\n        </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "GxS6":
/*!*******************************************************************!*\
  !*** ./src/app/components/updaterecord/updaterecord.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpdaterecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdaterecordComponent", function() { return UpdaterecordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_updaterecord_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./updaterecord.component.html */ "pE6I");
/* harmony import */ var _updaterecord_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updaterecord.component.scss */ "sX3f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let UpdaterecordComponent = class UpdaterecordComponent {
    constructor(firestore, modalController) {
        this.firestore = firestore;
        this.modalController = modalController;
    }
    ngOnInit() { }
    UpdateRecord(type, description, amount) {
        let updaterecord = {};
        updaterecord['type'] = type,
            updaterecord['description'] = description,
            updaterecord['amount'] = amount,
            this.firestore.doc('/Records/' + this.id).update(updaterecord).then(() => {
                this.modalController.dismiss();
            });
    }
    CloseModal() {
        this.modalController.dismiss();
    }
};
UpdaterecordComponent.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
UpdaterecordComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UpdaterecordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-updaterecord',
        template: _raw_loader_updaterecord_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_updaterecord_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdaterecordComponent);



/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _components_updaterecord_updaterecord_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/updaterecord/updaterecord.component */ "GxS6");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera */ "c0I4");








let Tab1Page = class Tab1Page {
    constructor(firestore, modalCOntroller) {
        this.firestore = firestore;
        this.modalCOntroller = modalCOntroller;
        this.UserURI = true;
    }
    ngOnInit() {
        this.addrecord = { type: '', description: '', amount: null };
        this.firestore.collection('/Records/').snapshotChanges().subscribe(res => {
            if (res) {
                this.records = res.map(e => {
                    return {
                        id: e.payload.doc.id,
                        description: e.payload.doc.data()['description'],
                        amount: e.payload.doc.data()['amount'],
                        type: e.payload.doc.data()['type']
                    };
                });
            }
        });
    }
    getPicture(sourceType) {
        const cameraOptions = {
            quality: 50,
            destinationType: _ionic_native_camera__WEBPACK_IMPORTED_MODULE_7__["Camera"].DestinationType.DATA_URL,
            encodingType: _ionic_native_camera__WEBPACK_IMPORTED_MODULE_7__["Camera"].EncodingType.JPEG,
            mediaType: _ionic_native_camera__WEBPACK_IMPORTED_MODULE_7__["Camera"].MediaType.PICTURE,
            sourceType: sourceType
        };
        _ionic_native_camera__WEBPACK_IMPORTED_MODULE_7__["Camera"].getPicture(cameraOptions)
            .then((captureDataUrl) => {
            this.captureDataUrl = 'data:image/jpeg;base64' + captureDataUrl;
        }, (err) => {
            console.error();
        });
    }
    AddRecord(type, description, amount) {
        let addrecord = {};
        this.addrecord['type'] = type;
        this.addrecord['description'] = description;
        this.addrecord['amount'] = amount;
        console.log(this.addrecord);
        this.firestore.collection('/Records/').add(this.addrecord).then(() => {
            this.addrecord = { type: '', description: '', amount: null };
        });
    }
    UpdateRecord(id, type, description, amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCOntroller.create({
                component: _components_updaterecord_updaterecord_component__WEBPACK_IMPORTED_MODULE_5__["UpdaterecordComponent"],
                cssClass: 'my-custom-class',
                componentProps: {
                    'id': id,
                    'type': type,
                    'description': description,
                    'amount': amount,
                }
            });
            return yield modal.present();
        });
    }
    DeleteRecord(id) {
        this.firestore.doc('/Records/' + id).delete();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
Tab1Page.propDecorators = {
    UserURI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ["UserURI",] }]
};
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "c0I4":
/*!****************************************************!*\
  !*** ./node_modules/@ionic-native/camera/index.js ***!
  \****************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
var __extends = (undefined && undefined.__extends) || (function () {
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

var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var CameraOriginal = /** @class */ (function (_super) {
    __extends(CameraOriginal, _super);
    function CameraOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    CameraOriginal.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    CameraOriginal.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    CameraOriginal.pluginName = "Camera";
    CameraOriginal.plugin = "cordova-plugin-camera";
    CameraOriginal.pluginRef = "navigator.camera";
    CameraOriginal.repo = "https://github.com/apache/cordova-plugin-camera";
    CameraOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return CameraOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var Camera = new CameraOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFzRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7aUJBdlFUO0VBK0s0QixpQkFBaUI7U0FBaEMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuIERlZmF1bHQgaXMgRklMRV9VUkkuXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcbiAgICogICAgICBOQVRJVkVfVVJJIDogMiAgUmV0dXJuIGltYWdlIG5hdGl2ZSBVUklcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXG4gICAqL1xuICBkZXN0aW5hdGlvblR5cGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuIERlZmF1bHQgaXMgQ0FNRVJBLlxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXG4gICAqICAgICAgQ0FNRVJBIDogMSxcbiAgICogICAgICBTQVZFRFBIT1RPQUxCVU0gOiAyXG4gICAqL1xuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xuICAvKiogQWxsb3cgc2ltcGxlIGVkaXRpbmcgb2YgaW1hZ2UgYmVmb3JlIHNlbGVjdGlvbi4gKi9cbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgcmV0dXJuZWQgaW1hZ2UgZmlsZSdzIGVuY29kaW5nLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcbiAgICogICAgICBQTkcgOiAxICAgICBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2VcbiAgICovXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cbiAgICovXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogSGVpZ2h0IGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0V2lkdGguXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0SGVpZ2h0PzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcbiAgICogaXMgUEhPVE9MSUJSQVJZIG9yIFNBVkVEUEhPVE9BTEJVTS4gRGVmaW5lZCBpbiBDYW1lcmEuTWVkaWFUeXBlXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcbiAgICogICAgICBWSURFTzogMSAgICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIFdJTEwgQUxXQVlTIFJFVFVSTiBGSUxFX1VSSVxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcbiAgICovXG4gIG1lZGlhVHlwZT86IG51bWJlcjtcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XG4gIC8qKiBTYXZlIHRoZSBpbWFnZSB0byB0aGUgcGhvdG8gYWxidW0gb24gdGhlIGRldmljZSBhZnRlciBjYXB0dXJlLiAqL1xuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgY2FtZXJhIHRvIHVzZSAoZnJvbnQtIG9yIGJhY2stZmFjaW5nKS5cbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXG4gICAqICAgICAgQkFDSzogMFxuICAgKiAgICAgIEZST05UOiAxXG4gICAqL1xuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XG4gIC8qKiBpT1Mtb25seSBvcHRpb25zIHRoYXQgc3BlY2lmeSBwb3BvdmVyIGxvY2F0aW9uIGluIGlQYWQuIERlZmluZWQgaW4gQ2FtZXJhUG9wb3Zlck9wdGlvbnMuICovXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XG59XG5cbi8qKlxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cbiAqIG9mIHRoZSBwb3BvdmVyIHdoZW4gc2VsZWN0aW5nIGltYWdlcyBmcm9tIGFuIGlQYWQncyBsaWJyYXJ5IG9yIGFsYnVtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxuICAgKiBNYXRjaGVzIGlPUyBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbiBjb25zdGFudHMuXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxuICAgKiAgICAgIEFSUk9XX0xFRlQgOiA0LFxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxuICAgKi9cbiAgYXJyb3dEaXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcbiAgREFUQV9VUkwgPSAwLFxuICBGSUxFX1VSTCxcbiAgTkFUSVZFX1VSSSxcbn1cblxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcbiAgSlBFRyA9IDAsXG4gIFBORyxcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQSxcbn1cblxuZXhwb3J0IGVudW0gUGljdHVyZVNvdXJjZVR5cGUge1xuICBQSE9UT0xJQlJBUlkgPSAwLFxuICBDQU1FUkEsXG4gIFNBVkVEUEhPVE9BTEJVTSxcbn1cblxuZXhwb3J0IGVudW0gUG9wb3ZlckFycm93RGlyZWN0aW9uIHtcbiAgQVJST1dfVVAgPSAxLFxuICBBUlJPV19ET1dOLFxuICBBUlJPV19MRUZULFxuICBBUlJPV19SSUdIVCxcbiAgQVJST1dfQU5ZLFxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlQsXG59XG5cbi8qKlxuICogQG5hbWUgQ2FtZXJhXG4gKiBAcHJlbWllciBjYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIGRlc3RpbmF0aW9uIHR5cGVzXG4gICAqL1xuICBEZXN0aW5hdGlvblR5cGUgPSB7XG4gICAgLyoqIFJldHVybiBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSAqL1xuICAgIERBVEFfVVJMOiAwLFxuICAgIC8qKiBSZXR1cm4gZmlsZSB1cmkgKGNvbnRlbnQ6Ly9tZWRpYS9leHRlcm5hbC9pbWFnZXMvbWVkaWEvMiBmb3IgQW5kcm9pZCkgKi9cbiAgICBGSUxFX1VSSTogMSxcbiAgICAvKiogUmV0dXJuIG5hdGl2ZSB1cmkgKGVnLiBhc3NldC1saWJyYXJ5Oi8vLi4uIGZvciBpT1MpICovXG4gICAgTkFUSVZFX1VSSTogMixcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIEVuY29kaW5nVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIEpQRUc6IDAsXG4gICAgLyoqIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZSAqL1xuICAgIFBORzogMSxcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUGljdHVyZVNvdXJjZVR5cGUgPSB7XG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBQSE9UT0xJQlJBUlkgZm9yIEFuZHJvaWQpICovXG4gICAgUEhPVE9MSUJSQVJZOiAwLFxuICAgIC8qKiBUYWtlIHBpY3R1cmUgZnJvbSBjYW1lcmEgKi9cbiAgICBDQU1FUkE6IDEsXG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBTQVZFRFBIT1RPQUxCVU0gZm9yIEFuZHJvaWQpICovXG4gICAgU0FWRURQSE9UT0FMQlVNOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgUG9wb3ZlckFycm93RGlyZWN0aW9uID0ge1xuICAgIEFSUk9XX1VQOiAxLFxuICAgIEFSUk9XX0RPV046IDIsXG4gICAgQVJST1dfTEVGVDogNCxcbiAgICBBUlJPV19SSUdIVDogOCxcbiAgICBBUlJPV19BTlk6IDE1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBUYWtlIGEgcGljdHVyZSBvciB2aWRlbywgb3IgbG9hZCBvbmUgZnJvbSB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtDYW1lcmFPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IHlvdSB3YW50IHRvIHBhc3MgdG8gdGhlIGNhbWVyYS4gRW5jb2RpbmcgdHlwZSwgcXVhbGl0eSwgZXRjLiBQbGF0Zm9ybS1zcGVjaWZpYyBxdWlya3MgYXJlIGRlc2NyaWJlZCBpbiB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhI2NhbWVyYW9wdGlvbnMtZXJyYXRhLSkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEsIG9yIHRoZSBpbWFnZSBmaWxlIFVSSSwgZGVwZW5kaW5nIG9uIGNhbWVyYU9wdGlvbnMsIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBnZXRQaWN0dXJlKG9wdGlvbnM/OiBDYW1lcmFPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGludGVybWVkaWF0ZSBpbWFnZSBmaWxlcyB0aGF0IGFyZSBrZXB0IGluIHRlbXBvcmFyeSBzdG9yYWdlIGFmdGVyIGNhbGxpbmcgY2FtZXJhLmdldFBpY3R1cmUuXG4gICAqIEFwcGxpZXMgb25seSB3aGVuIHRoZSB2YWx1ZSBvZiBDYW1lcmEuc291cmNlVHlwZSBlcXVhbHMgQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQSBhbmQgdGhlIENhbWVyYS5kZXN0aW5hdGlvblR5cGUgZXF1YWxzIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "pE6I":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/updaterecord/updaterecord.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"ion-text-center align-items-center\">\n  <ion-col size=\"12\">\n    <ion-text><h4>UPDATE RECORD</h4></ion-text>\n  </ion-col>\n  <ion-col size=\"4\">\n    <ion-select [(ngModel)]=\"type\" placeholder=\"Select\">\n      <ion-select-option value=\"income\">Income</ion-select-option>\n      <ion-select-option value=\"expense\">Expense</ion-select-option>\n    </ion-select>\n  </ion-col>\n  <ion-col size=\"8\">\n    <ion-item>\n      <ion-input [(ngModel)]=\"description\" placeholder=\"Description\"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col size=\"10\" offset=\"1\">\n    <ion-item>\n      $<ion-input [(ngModel)]=\"amount\" placeholder=\"Amount($)\"></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col size=\"10\" offset=\"1\">\n    <ion-button expand=\"block\" color=\"success\" (click)=\"UpdateRecord(type, description, amount)\">Update</ion-button>\n  </ion-col>\n  <ion-col size=\"10\" offset=\"1\">\n    <ion-button expand=\"block\" color=\"danger\" (click)=\"CloseModal()\">Cancel</ion-button>\n  </ion-col>\n</ion-row>  \n<ion-row>   ");

/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "sX3f":
/*!*********************************************************************!*\
  !*** ./src/app/components/updaterecord/updaterecord.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlcmVjb3JkL3VwZGF0ZXJlY29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _components_updaterecord_updaterecord_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/updaterecord/updaterecord.component */ "GxS6");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        entryComponents: [_components_updaterecord_updaterecord_component__WEBPACK_IMPORTED_MODULE_8__["UpdaterecordComponent"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _components_updaterecord_updaterecord_component__WEBPACK_IMPORTED_MODULE_8__["UpdaterecordComponent"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map