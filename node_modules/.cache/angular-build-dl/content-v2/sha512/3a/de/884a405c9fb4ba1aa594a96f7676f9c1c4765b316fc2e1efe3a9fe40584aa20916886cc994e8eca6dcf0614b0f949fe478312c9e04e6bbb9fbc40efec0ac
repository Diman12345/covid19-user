(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "EGAO":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function EGAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "JZ9U":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function JZ9U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "e9nj");
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2.page.scss */
      "EGAO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "/sJY");
      /* harmony import */


      var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/File/ngx */
      "B7Vy");
      /* harmony import */


      var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/media/ngx */
      "9YJ4");
      /* harmony import */


      var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/streaming-media/ngx */
      "RU0F");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "U3FU");

      var MEDIA_FOLDER_NAME = 'my_media';

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(imagePicker, mediaCapture, file, media, streamingMedia, photoViewer, actionSheetController, plt) {
          _classCallCheck(this, Tab2Page);

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

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.plt.ready().then(function () {
              var path = _this.file.dataDirectory;

              _this.file.checkDir(path, MEDIA_FOLDER_NAME).then(function () {
                _this.loadFiles();
              }, function (err) {
                _this.file.createDir(path, MEDIA_FOLDER_NAME, false);
              });
            });
          }
        }, {
          key: "loadFiles",
          value: function loadFiles() {
            var _this2 = this;

            this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(function (res) {
              _this2.files = res;
            }, function (err) {
              return console.log('error loading files: ', err);
            });
          }
        }, {
          key: "selectMedia",
          value: function selectMedia() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'What would you like to add?',
                        buttons: [{
                          text: 'Capture Image',
                          handler: function handler() {
                            _this3.captureImage();
                          }
                        }, {
                          text: 'Record Video',
                          handler: function handler() {
                            _this3.recordVideo();
                          }
                        }, {
                          text: 'Record Audio',
                          handler: function handler() {
                            _this3.recordAudio();
                          }
                        }, {
                          text: 'Load multiple',
                          handler: function handler() {
                            _this3.pickImages();
                          }
                        }, {
                          text: 'Cancel',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "pickImages",
          value: function pickImages() {
            var _this4 = this;

            this.imagePicker.getPictures({}).then(function (results) {
              for (var i = 0; i < results.length; i++) {
                _this4.copyFileToLocalDir(results[i]);
              }
            }); // If you get problems on Android, try to ask for Permission first
            // this.imagePicker.requestReadPermission().then(result => {
            //   console.log('requestReadPermission: ', result);
            //   this.selectMultiple();
            // });
          }
        }, {
          key: "captureImage",
          value: function captureImage() {
            var _this5 = this;

            this.mediaCapture.captureImage().then(function (data) {
              if (data.length > 0) {
                _this5.copyFileToLocalDir(data[0].fullPath);
              }
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "recordAudio",
          value: function recordAudio() {
            var _this6 = this;

            this.mediaCapture.captureAudio().then(function (data) {
              if (data.length > 0) {
                _this6.copyFileToLocalDir(data[0].fullPath);
              }
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "recordVideo",
          value: function recordVideo() {
            var _this7 = this;

            this.mediaCapture.captureVideo().then(function (data) {
              if (data.length > 0) {
                _this7.copyFileToLocalDir(data[0].fullPath);
              }
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "copyFileToLocalDir",
          value: function copyFileToLocalDir(fullPath) {
            var _this8 = this;

            var myPath = fullPath; // Make sure we copy from the right location

            if (fullPath.indexOf('file://') < 0) {
              myPath = 'file://' + fullPath;
            }

            var ext = myPath.split('.').pop();
            var d = Date.now();
            var newName = "".concat(d, ".").concat(ext);
            var name = myPath.substr(myPath.lastIndexOf('/') + 1);
            var copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
            var copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
            this.file.copyFile(copyFrom, name, copyTo, newName).then(function (success) {
              _this8.loadFiles();
            }, function (error) {
              console.log('error: ', error);
            });
          }
        }, {
          key: "openFile",
          value: function openFile(f) {
            if (f.name.indexOf('.wav') > -1) {
              // We need to remove file:/// from the path for the audio plugin to work
              var path = f.nativeURL.replace(/^file:\/\//, '');
              var audioFile = this.media.create(path);
              audioFile.play();
            } else if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
              // E.g: Use the Streaming Media plugin to play a video
              this.streamingMedia.playVideo(f.nativeURL);
            } else if (f.name.indexOf('.jpg') > -1) {
              // E.g: Use the Photoviewer to present an Image
              this.photoViewer.show(f.nativeURL, 'MY awesome image');
            }
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(f) {
            var _this9 = this;

            var path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
            this.file.removeFile(path, f.name).then(function () {
              _this9.loadFiles();
            }, function (err) {
              return console.log('error remove: ', err);
            });
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["ImagePicker"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_6__["MediaCapture"]
        }, {
          type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
        }, {
          type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__["Media"]
        }, {
          type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_9__["StreamingMedia"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_10__["PhotoViewer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tag2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab2Page);
      /***/
    },

    /***/
    "TUkU":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function TUkU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "JZ9U");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "UDmF");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "UDmF":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function UDmF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "JZ9U");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "e9nj":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function e9nj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Ionic Media Capture\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let f of files\">\n      <ion-item (click)=\"openFile(f)\">\n        <ion-icon name=\"image\" slot=\"start\" *ngIf=\"f.name.endsWith('jpg')\"></ion-icon>\n        <ion-icon name=\"videocam\" slot=\"start\" *ngIf=\"f.name.endsWith('MOV') || f.name.endsWith('mp4')\"></ion-icon>\n        <ion-icon name=\"mic\" slot=\"start\" *ngIf=\"f.name.endsWith('wav')\"></ion-icon>\n \n        <ion-label class=\"ion-text-wrap\">\n          {{ f.name }}\n          <p>{{ f.fullPath }}</p>\n        </ion-label>\n      </ion-item>\n \n      <ion-item-options side=\"start\">\n        <ion-item-option (click)=\"deleteFile(f)\" color=\"danger\">\n          <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n \n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectMedia()\">\n      <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n      Select Media\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map