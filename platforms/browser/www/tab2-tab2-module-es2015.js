(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "EGAO":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "JZ9U":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "e9nj");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "EGAO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/File/ngx */ "B7Vy");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");











const MEDIA_FOLDER_NAME = 'my_media';
let Tab2Page = class Tab2Page {
    constructor(imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt) {
        this.imagePicker = imagePicker;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.media = media;
        this.streamingMedia = streamingMedia;
        this.photoViewer = photoViewer;
        this.actionSheetController = actionSheetController;
        this.plt = plt;
        this.files = [];
    }
    ngOnInit() {
        this.plt.ready().then(() => {
            let path = this.file.dataDirectory;
            this.file.checkDir(path, MEDIA_FOLDER_NAME).then(() => {
                this.loadFiles();
            }, err => {
                this.file.createDir(path, MEDIA_FOLDER_NAME, false);
            });
        });
    }
    loadFiles() {
        this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(res => {
            this.files = res;
        }, err => console.log('error loading files: ', err));
    }
    selectMedia() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'What would you like to add?',
                buttons: [
                    {
                        text: 'Capture Image',
                        handler: () => {
                            this.captureImage();
                        }
                    },
                    {
                        text: 'Record Video',
                        handler: () => {
                            this.recordVideo();
                        }
                    },
                    {
                        text: 'Record Audio',
                        handler: () => {
                            this.recordAudio();
                        }
                    },
                    {
                        text: 'Load multiple',
                        handler: () => {
                            this.pickImages();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImages() {
        this.imagePicker.getPictures({}).then(results => {
            for (var i = 0; i < results.length; i++) {
                this.copyFileToLocalDir(results[i]);
            }
        });
        // If you get problems on Android, try to ask for Permission first
        // this.imagePicker.requestReadPermission().then(result => {
        //   console.log('requestReadPermission: ', result);
        //   this.selectMultiple();
        // });
    }
    captureImage() {
        this.mediaCapture.captureImage().then((data) => {
            if (data.length > 0) {
                this.copyFileToLocalDir(data[0].fullPath);
            }
        }, (err) => console.error(err));
    }
    recordAudio() {
        this.mediaCapture.captureAudio().then((data) => {
            if (data.length > 0) {
                this.copyFileToLocalDir(data[0].fullPath);
            }
        }, (err) => console.error(err));
    }
    recordVideo() {
        this.mediaCapture.captureVideo().then((data) => {
            if (data.length > 0) {
                this.copyFileToLocalDir(data[0].fullPath);
            }
        }, (err) => console.error(err));
    }
    copyFileToLocalDir(fullPath) {
        let myPath = fullPath;
        // Make sure we copy from the right location
        if (fullPath.indexOf('file://') < 0) {
            myPath = 'file://' + fullPath;
        }
        const ext = myPath.split('.').pop();
        const d = Date.now();
        const newName = `${d}.${ext}`;
        const name = myPath.substr(myPath.lastIndexOf('/') + 1);
        const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
        const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
        this.file.copyFile(copyFrom, name, copyTo, newName).then(success => {
            this.loadFiles();
        }, error => {
            console.log('error: ', error);
        });
    }
    openFile(f) {
        if (f.name.indexOf('.wav') > -1) {
            // We need to remove file:/// from the path for the audio plugin to work
            const path = f.nativeURL.replace(/^file:\/\//, '');
            const audioFile = this.media.create(path);
            audioFile.play();
        }
        else if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
            // E.g: Use the Streaming Media plugin to play a video
            this.streamingMedia.playVideo(f.nativeURL);
        }
        else if (f.name.indexOf('.jpg') > -1) {
            // E.g: Use the Photoviewer to present an Image
            this.photoViewer.show(f.nativeURL, 'MY awesome image');
        }
    }
    deleteFile(f) {
        const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
        this.file.removeFile(path, f.name).then(() => {
            this.loadFiles();
        }, err => console.log('error remove: ', err));
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__["MediaCapture"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tag2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "TUkU":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "UDmF");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "UDmF":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "JZ9U");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "e9nj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Ionic Media Capture\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let f of files\">\n      <ion-item (click)=\"openFile(f)\">\n        <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\n        <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\n        <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\n \n        <ion-label class=\"ion-text-wrap\">\n          {{ f.name }}\n          <p>{{ f.fullPath }}</p>\n        </ion-label>\n      </ion-item>\n \n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"deleteFile(f)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n \n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectMedia()\">\n      <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n      Select Media\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map