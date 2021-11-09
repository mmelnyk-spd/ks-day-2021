"use strict";
(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([[592],{

/***/ 3605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SharedDataAccessUserModule": () => (/* reexport */ SharedDataAccessUserModule),
  "UserService": () => (/* reexport */ UserService)
});

// EXTERNAL MODULE: consume shared module (default) @angular/common@^12.2.0 (strict) (singleton) (fallback: ./node_modules/@angular/common/fesm2015/common.js)
var common_js_ = __webpack_require__(1998);
// EXTERNAL MODULE: consume shared module (default) @angular/core@^12.2.0 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(3174);
;// CONCATENATED MODULE: ./libs/shared/data-access-user/src/lib/shared-data-access-user.module.ts


let SharedDataAccessUserModule = /*#__PURE__*/(() => {
  class SharedDataAccessUserModule {}

  SharedDataAccessUserModule.ɵfac = function SharedDataAccessUserModule_Factory(t) {
    return new (t || SharedDataAccessUserModule)();
  };

  SharedDataAccessUserModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: SharedDataAccessUserModule
  });
  SharedDataAccessUserModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[common_js_.CommonModule]]
  });
  return SharedDataAccessUserModule;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(6215);
;// CONCATENATED MODULE: ./libs/shared/data-access-user/src/lib/user.service.ts


let UserService = /*#__PURE__*/(() => {
  class UserService {
    constructor() {
      this.isUserLoggedIn = new BehaviorSubject/* BehaviorSubject */.X(false);
      this.isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
    }

    checkCredentials(username, password) {
      if (username === 'ks-day' && password === 'spd') {
        this.isUserLoggedIn.next(true);
      }
    }

    logout() {
      this.isUserLoggedIn.next(false);
    }

  }

  UserService.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)();
  };

  UserService.ɵprov = /*@__PURE__*/core_js_["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
  return UserService;
})();
;// CONCATENATED MODULE: ./libs/shared/data-access-user/src/index.ts



/***/ }),

/***/ 6490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2494);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4449);


const empty = {
  closed: true,

  next(value) {},

  error(err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__/* .config.useDeprecatedSynchronousErrorHandling */ .v.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__/* .hostReportError */ .z)(err);
    }
  },

  complete() {}

}; //# sourceMappingURL=Observer.js.map

/***/ }),

/***/ 7393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Subscriber)
/* harmony export */ });
/* unused harmony export SafeSubscriber */
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9105);
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6490);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5319);
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9181);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2494);
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4449);






class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__/* .Subscription */ .w {
  constructor(destinationOrNext, error, complete) {
    super();
    this.syncErrorValue = null;
    this.syncErrorThrown = false;
    this.syncErrorThrowable = false;
    this.isStopped = false;

    switch (arguments.length) {
      case 0:
        this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__/* .empty */ .c;
        break;

      case 1:
        if (!destinationOrNext) {
          this.destination = _Observer__WEBPACK_IMPORTED_MODULE_1__/* .empty */ .c;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            this.destination = destinationOrNext;
            destinationOrNext.add(this);
          } else {
            this.syncErrorThrowable = true;
            this.destination = new SafeSubscriber(this, destinationOrNext);
          }

          break;
        }

      default:
        this.syncErrorThrowable = true;
        this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
        break;
    }
  }

  [_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .rxSubscriber */ .b]() {
    return this;
  }

  static create(next, error, complete) {
    const subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  }

  next(value) {
    if (!this.isStopped) {
      this._next(value);
    }
  }

  error(err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  }

  complete() {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  }

  unsubscribe() {
    if (this.closed) {
      return;
    }

    this.isStopped = true;
    super.unsubscribe();
  }

  _next(value) {
    this.destination.next(value);
  }

  _error(err) {
    this.destination.error(err);
    this.unsubscribe();
  }

  _complete() {
    this.destination.complete();
    this.unsubscribe();
  }

  _unsubscribeAndRecycle() {
    const {
      _parentOrParents
    } = this;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  }

}
class SafeSubscriber extends Subscriber {
  constructor(_parentSubscriber, observerOrNext, error, complete) {
    super();
    this._parentSubscriber = _parentSubscriber;
    let next;
    let context = this;

    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .m)(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_1__/* .empty */ .c) {
        context = Object.create(observerOrNext);

        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__/* .isFunction */ .m)(context.unsubscribe)) {
          this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = this.unsubscribe.bind(this);
      }
    }

    this._context = context;
    this._next = next;
    this._error = error;
    this._complete = complete;
  }

  next(value) {
    if (!this.isStopped && this._next) {
      const {
        _parentSubscriber
      } = this;

      if (!_config__WEBPACK_IMPORTED_MODULE_4__/* .config.useDeprecatedSynchronousErrorHandling */ .v.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  }

  error(err) {
    if (!this.isStopped) {
      const {
        _parentSubscriber
      } = this;
      const {
        useDeprecatedSynchronousErrorHandling
      } = _config__WEBPACK_IMPORTED_MODULE_4__/* .config */ .v;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__/* .hostReportError */ .z)(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__/* .hostReportError */ .z)(err);
        }

        this.unsubscribe();
      }
    }
  }

  complete() {
    if (!this.isStopped) {
      const {
        _parentSubscriber
      } = this;

      if (this._complete) {
        const wrappedComplete = () => this._complete.call(this._context);

        if (!_config__WEBPACK_IMPORTED_MODULE_4__/* .config.useDeprecatedSynchronousErrorHandling */ .v.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  }

  __tryOrUnsub(fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (_config__WEBPACK_IMPORTED_MODULE_4__/* .config.useDeprecatedSynchronousErrorHandling */ .v.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__/* .hostReportError */ .z)(err);
      }
    }
  }

  __tryOrSetError(parent, fn, value) {
    if (!_config__WEBPACK_IMPORTED_MODULE_4__/* .config.useDeprecatedSynchronousErrorHandling */ .v.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (_config__WEBPACK_IMPORTED_MODULE_4__/* .config.useDeprecatedSynchronousErrorHandling */ .v.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        (0,_util_hostReportError__WEBPACK_IMPORTED_MODULE_5__/* .hostReportError */ .z)(err);
        return true;
      }
    }

    return false;
  }

  _unsubscribe() {
    const {
      _parentSubscriber
    } = this;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  }

} //# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ 5319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ Subscription)
});

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/util/isArray.js
var isArray = __webpack_require__(9796);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/util/isObject.js
var isObject = __webpack_require__(1555);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/util/isFunction.js
var isFunction = __webpack_require__(9105);
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/util/UnsubscriptionError.js
const UnsubscriptionErrorImpl = (() => {
  function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
  }

  UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
  return UnsubscriptionErrorImpl;
})();

const UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/Subscription.js




class Subscription {
  constructor(unsubscribe) {
    this.closed = false;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._ctorUnsubscribe = true;
      this._unsubscribe = unsubscribe;
    }
  }

  unsubscribe() {
    let errors;

    if (this.closed) {
      return;
    }

    let {
      _parentOrParents,
      _ctorUnsubscribe,
      _unsubscribe,
      _subscriptions
    } = this;
    this.closed = true;
    this._parentOrParents = null;
    this._subscriptions = null;

    if (_parentOrParents instanceof Subscription) {
      _parentOrParents.remove(this);
    } else if (_parentOrParents !== null) {
      for (let index = 0; index < _parentOrParents.length; ++index) {
        const parent = _parentOrParents[index];
        parent.remove(this);
      }
    }

    if ((0,isFunction/* isFunction */.m)(_unsubscribe)) {
      if (_ctorUnsubscribe) {
        this._unsubscribe = undefined;
      }

      try {
        _unsubscribe.call(this);
      } catch (e) {
        errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if ((0,isArray/* isArray */.k)(_subscriptions)) {
      let index = -1;
      let len = _subscriptions.length;

      while (++index < len) {
        const sub = _subscriptions[index];

        if ((0,isObject/* isObject */.K)(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            errors = errors || [];

            if (e instanceof UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (errors) {
      throw new UnsubscriptionError(errors);
    }
  }

  add(teardown) {
    let subscription = teardown;

    if (!teardown) {
      return Subscription.EMPTY;
    }

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          const tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    let {
      _parentOrParents
    } = subscription;

    if (_parentOrParents === null) {
      subscription._parentOrParents = this;
    } else if (_parentOrParents instanceof Subscription) {
      if (_parentOrParents === this) {
        return subscription;
      }

      subscription._parentOrParents = [_parentOrParents, this];
    } else if (_parentOrParents.indexOf(this) === -1) {
      _parentOrParents.push(this);
    } else {
      return subscription;
    }

    const subscriptions = this._subscriptions;

    if (subscriptions === null) {
      this._subscriptions = [subscription];
    } else {
      subscriptions.push(subscription);
    }

    return subscription;
  }

  remove(subscription) {
    const subscriptions = this._subscriptions;

    if (subscriptions) {
      const subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  }

}

Subscription.EMPTY = function (empty) {
  empty.closed = true;
  return empty;
}(new Subscription());

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce((errs, err) => errs.concat(err instanceof UnsubscriptionError ? err.errors : err), []);
} //# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ 2494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
let _enable_super_gross_mode_that_will_cause_bad_things = false;
const config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      const error = new Error();
      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

}; //# sourceMappingURL=config.js.map

/***/ }),

/***/ 9181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ rxSubscriber)
/* harmony export */ });
/* unused harmony export $$rxSubscriber */
const rxSubscriber = (() => typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random())();
const $$rxSubscriber = (/* unused pure expression or super */ null && (rxSubscriber)); //# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ 4449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ hostReportError)
/* harmony export */ });
function hostReportError(err) {
  setTimeout(() => {
    throw err;
  }, 0);
} //# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ 9796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ isArray)
/* harmony export */ });
const isArray = (() => Array.isArray || (x => x && typeof x.length === 'number'))(); //# sourceMappingURL=isArray.js.map

/***/ }),

/***/ 9105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(x) {
  return typeof x === 'function';
} //# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ 1555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ isObject)
/* harmony export */ });
function isObject(x) {
  return x !== null && typeof x === 'object';
} //# sourceMappingURL=isObject.js.map

/***/ })

}]);