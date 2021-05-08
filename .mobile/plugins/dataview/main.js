'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var luxon = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  var minus = input < 0 ? "-" : "";
  var target = minus ? input * -1 : input;
  var result;

  if (target.toString().length < n) {
    result = ("0".repeat(n) + target).slice(-n);
  } else {
    result = target.toString();
  }

  return "" + minus + result;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(Math.abs(offset / 60)),
      minutes = Math.trunc(Math.abs(offset % 60)),
      sign = offset >= 0 ? "+" : "-";

  switch (format) {
    case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

    case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_MED_WITH_WEEKDAY):
      return "EEE, LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this JavaScript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts;
      _opts.base;
      var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
      // That is why fixed-offset TZ is set to that unless it is:
      // 1. Outside of the supported range Etc/GMT-14 to Etc/GMT+12.
      // 2. Not a whole hour, e.g. UTC+4:30.
      var gmtOffset = -1 * (dt.offset / 60);

      if (gmtOffset >= -14 && gmtOffset <= 12 && gmtOffset % 1 === 0) {
        z = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
        this.dt = dt;
      } else {
        // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
        // So we have to make do. Two cases:
        // 1. The format options tell us to show the zone. We can't do that, so the best
        // we can do is format the date in UTC.
        // 2. The format options don't tell us to show the zone. Then we can adjust them
        // the time and tell the formatter to show it to us in UTC, so that the time is right
        // and the bad zone doesn't show up.
        z = "UTC";

        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
        }
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hours: int(match, cursor, 0),
    minutes: int(match, cursor + 1, 0),
    seconds: int(match, cursor + 2, 0),
    milliseconds: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO time parsing


var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing

var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";

  var maybeNegate = function maybeNegate(num) {
    return num && hasNegativePrefix ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr)),
    milliseconds: maybeNegate(parseMillis(millisecondsStr))
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s) {
  return parse(s, [isoTimeOnly, extractISOTimeOnly]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  ;

  Duration.fromISOTime = function fromISOTime(text, opts) {
    var _parseISOTimeOnly = parseISOTimeOnly(text),
        parsed = _parseISOTimeOnly[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return null;
    var millis = this.toMillis();
    if (millis < 0 || millis >= 86400000) return null;
    opts = Object.assign({
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended"
    }, opts);
    var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";

      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }

    var str = value.toFormat(fmt);

    if (opts.includePrefix) {
      str = "T" + str;
    }

    return str;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    function eq(v1, v2) {
      // Consider 0 and undefined as equal
      if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
      return v1 === v2;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}.
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start, startIsValid;

      try {
        start = DateTime.fromISO(s, opts);
        startIsValid = start.isValid;
      } catch (e) {
        startIsValid = false;
      }

      var end, endIsValid;

      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e) {
        endIsValid = false;
      }

      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (startIsValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.now().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["quarters", function (a, b) {
    return b.quarter - a.quarter;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

var NBSP = String.fromCharCode(160);
var spaceOrNBSP = "( |" + NBSP + ")";
var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

function fixListRegex(s) {
  // make dots optional and also make them literal
  // make space and non breakable space characters interchangeable
  return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}

function stripInsensitivities(s) {
  return s.replace(/\./g, "") // ignore dots that were made optional
  .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
  .toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + Math.trunc(dur.years),
      month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }),
      millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includePrefix = _ref.includePrefix,
      includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  var str = toTechFormat(dt, fmt);

  if (includePrefix) {
    str = "T" + str;
  }

  return str;
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
    var u = _step.value;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */


  DateTime.now = function now() {
    return new DateTime({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  ;

  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({});
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$includePrefix = _ref6.includePrefix,
        includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      includePrefix: includePrefix,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.now(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    var inputMs = otherDateTime.valueOf();
    var otherZoneDateTime = this.setZone(otherDateTime.zone, {
      keepLocalTime: true
    });
    return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function get() {
      return DATE_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

var VERSION = "1.26.0";

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.VERSION = VERSION;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map
});

/** Normalize a duration to all of the proper units. */
function normalizeDuration(dur) {
    return dur.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds").normalize();
}
/** Get the folder containing the given path (i.e., like computing 'path/..') */
function getParentFolder(path) {
    return path.split("/").slice(0, -1).join("/");
}
/** Get the file name for the file, without any parent directories. */
function getFileName(path) {
    if (path.includes("/"))
        path = path.substring(path.lastIndexOf("/") + 1);
    if (path.endsWith(".md"))
        path = path.substring(0, path.length - 3);
    return path;
}
const ALLOWABLE_VAR_CHARACTERS = /[0-9\w\p{Letter}\p{Emoji_Presentation}\-]/;
const WHITESPACE = /\s/;
/** Convert an arbitrary variable name into something JS/query friendly. */
function canonicalizeVarName(name) {
    // Strip down to purely alphanumeric + spaces.
    let result = "";
    for (let index = 0; index < name.length; index++) {
        let ch = name[index];
        if (ch.match(WHITESPACE)) {
            result += "-";
            continue;
        }
        if (!ch.match(ALLOWABLE_VAR_CHARACTERS))
            continue;
        result += ch.toLocaleLowerCase();
    }
    return result;
}
/** Try calling the given function; on failure, return the error message.  */
function tryOrPropogate(func) {
    try {
        return func();
    }
    catch (error) {
        return "" + error + "\n\n" + error.stack;
    }
}

/** Provides an AST for complex queries. */
/** An Obsidian link with all associated metadata. */
class Link {
    constructor(fields) {
        Object.assign(this, fields);
    }
    static file(path, embed, display) {
        return new Link({
            path,
            embed,
            display,
            type: 'file'
        });
    }
    static header(path, header, embed, display) {
        return new Link({
            path,
            embed,
            display,
            subpath: header,
            type: 'header'
        });
    }
    static block(path, blockId, embed, display) {
        return new Link({
            path,
            embed,
            display,
            subpath: blockId,
            type: 'block'
        });
    }
    equals(other) {
        return this.path == other.path
            && this.type == other.type
            && this.subpath == other.subpath;
    }
    /** Return a new link which points to the same location but with a new display value. */
    withDisplay(display) {
        return new Link(Object.assign({}, this, { display }));
    }
    markdown() {
        let result = (this.embed ? "!" : "") + "[[" + this.path;
        if (this.type == 'header')
            result += '#' + this.subpath;
        else if (this.type == 'block')
            result += '^' + this.subpath;
        if (this.display && !this.embed)
            result += '|' + this.display;
        else if (!this.embed)
            result += '|' + getFileName(this.path).replace(".md", "");
        result += ']]';
        return result;
    }
}
/** Utility functions for quickly creating fields. */
var Fields;
(function (Fields) {
    function variable(name) {
        return { type: 'variable', name };
    }
    Fields.variable = variable;
    function literal(vtype, val) {
        return { type: 'literal', valueType: vtype, value: val };
    }
    Fields.literal = literal;
    function bool(value) {
        return Fields.literal('boolean', value);
    }
    Fields.bool = bool;
    function string(value) {
        return Fields.literal('string', value);
    }
    Fields.string = string;
    function number(value) {
        return Fields.literal('number', value);
    }
    Fields.number = number;
    function date(value) {
        return Fields.literal('date', value);
    }
    Fields.date = date;
    function duration(value) {
        return Fields.literal('duration', value);
    }
    Fields.duration = duration;
    function link(target) {
        return Fields.literal('link', target);
    }
    Fields.link = link;
    function fileLink(target) {
        return link(Link.file(target, false));
    }
    Fields.fileLink = fileLink;
    function array(target) {
        return Fields.literal('array', target);
    }
    Fields.array = array;
    function object(value) {
        return Fields.literal('object', value);
    }
    Fields.object = object;
    function emptyObject() {
        return object(new Map());
    }
    Fields.emptyObject = emptyObject;
    function html(elem) {
        return Fields.literal('html', elem);
    }
    Fields.html = html;
    /** Convert a field to a raw JavaScript-friendly value. */
    function fieldToValue(val) {
        switch (val.valueType) {
            case "array":
                return val.value.map(f => fieldToValue(f));
            case "object":
                let result = {};
                for (let [key, value] of val.value.entries())
                    result[key] = fieldToValue(value);
                console.log(result);
                return result;
            default:
                return val.value;
        }
    }
    Fields.fieldToValue = fieldToValue;
    /** Wrap a literal value so you can switch on it easily. */
    function wrapValue(val) {
        if (Fields.isNull(val))
            return { type: 'null', value: val };
        else if (isNumber(val))
            return { type: 'number', value: val };
        else if (isString(val))
            return { type: 'string', value: val };
        else if (isBoolean(val))
            return { type: 'boolean', value: val };
        else if (isDuration(val))
            return { type: 'duration', value: val };
        else if (isDate(val))
            return { type: 'date', value: val };
        else if (isHtml(val))
            return { type: 'html', value: val };
        else if (isArray(val))
            return { type: 'array', value: val };
        else if (isLink(val))
            return { type: 'link', value: val };
        else if (typeof val === "object")
            return { type: 'object', value: val };
        else
            return undefined;
    }
    Fields.wrapValue = wrapValue;
    /** Convert an arbitrary javascript value into a Dataview field. */
    function asField(val) {
        if (val === null || val === undefined)
            return Fields.NULL;
        if (val instanceof luxon.Duration)
            return Fields.duration(val);
        else if (val instanceof luxon.DateTime)
            return Fields.date(val);
        else if (val instanceof HTMLElement)
            return Fields.html(val);
        else if (val instanceof Map)
            return Fields.object(val);
        else if (val instanceof Link)
            return Fields.link(val);
        else if (Array.isArray(val)) {
            let result = [];
            for (let v of val) {
                let converted = asField(v);
                if (converted)
                    result.push(converted);
            }
            return Fields.array(result);
        }
        else if (typeof val == "number")
            return Fields.number(val);
        else if (typeof val == "boolean")
            return Fields.bool(val);
        else if (typeof val == "object") {
            let result = new Map();
            for (let key of Object.keys(val)) {
                let converted = asField(val[key]);
                if (converted)
                    result.set(key, converted);
            }
            return Fields.object(result);
        }
        else if (typeof val == "string") {
            // TODO: Add parsing functionality here. For now, just return a string.
            return Fields.string(val);
        }
        else
            return undefined;
    }
    Fields.asField = asField;
    /** Compare two arbitrary JavaScript values. Produces a total ordering over ANY possible dataview value. */
    function compareValue(val1, val2) {
        // Handle undefined/nulls first.
        if (val1 === undefined)
            val1 = null;
        if (val2 === undefined)
            val2 = null;
        if (val1 === null && val2 === null)
            return 0;
        else if (val1 === null)
            return -1;
        else if (val2 === null)
            return 1;
        // A non-null value now which we can wrap & compare on.
        let wrap1 = wrapValue(val1);
        let wrap2 = wrapValue(val2);
        if (wrap1 === undefined && wrap2 === undefined)
            return 0;
        else if (wrap1 === undefined)
            return -1;
        else if (wrap2 === undefined)
            return 1;
        if (wrap1.type != wrap2.type)
            return wrap1.type.localeCompare(wrap2.type);
        switch (wrap1.type) {
            case "string":
                return wrap1.value.localeCompare(wrap2.value);
            case "number":
                if (wrap1.value < wrap2.value)
                    return -1;
                else if (wrap1.value == wrap2.value)
                    return 0;
                return 1;
            case "null":
                return 0;
            case "boolean":
                if (wrap1.value == wrap2.value)
                    return 0;
                else
                    return wrap1.value ? 1 : -1;
            case "link":
                return wrap1.value.path.localeCompare(wrap2.value.path);
            case "date":
                return (wrap1.value < wrap2.value) ? -1 : (wrap1.value.equals(wrap2.value) ? 0 : 1);
            case "duration":
                return wrap1.value < wrap2.value ? -1 : (wrap1.value.equals(wrap2.value) ? 0 : 1);
            case "array":
                let f1 = wrap1.value;
                let f2 = wrap2.value;
                for (let index = 0; index < Math.min(f1.length, f2.length); index++) {
                    let comp = compareValue(f1[index], f2[index]);
                    if (comp != 0)
                        return comp;
                }
                return f1.length - f2.length;
            case "object":
                let o1 = wrap1.value;
                let o2 = wrap2.value;
                let k1 = Array.from(Object.keys(o1));
                let k2 = Array.from(Object.keys(o2));
                k1.sort();
                k2.sort();
                let keyCompare = compareValue(k1, k2);
                if (keyCompare != 0)
                    return keyCompare;
                for (let key of k1) {
                    let comp = compareValue(o1[key], o2[key]);
                    if (comp != 0)
                        return comp;
                }
                return 0;
            case "html":
                return 0;
        }
    }
    Fields.compareValue = compareValue;
    /** Find the corresponding Dataveiw type for an arbitrary value. */
    function typeOf(val) {
        var _a;
        return (_a = wrapValue(val)) === null || _a === void 0 ? void 0 : _a.type;
    }
    Fields.typeOf = typeOf;
    function binaryOp(left, op, right) {
        return { type: 'binaryop', left, op, right };
    }
    Fields.binaryOp = binaryOp;
    function index(obj, index) {
        return { type: 'index', object: obj, index };
    }
    Fields.index = index;
    /** Converts a string in dot-notation-format into a variable which indexes. */
    function indexVariable(name) {
        let parts = name.split(".");
        let result = Fields.variable(parts[0]);
        for (let index = 1; index < parts.length; index++) {
            result = Fields.index(result, Fields.string(parts[index]));
        }
        return result;
    }
    Fields.indexVariable = indexVariable;
    function func(func, args) {
        return { type: 'function', func, arguments: args };
    }
    Fields.func = func;
    function negate(child) {
        return { type: 'negated', child };
    }
    Fields.negate = negate;
    function named(name, field) {
        return { name, field };
    }
    Fields.named = named;
    function sortBy(field, dir) {
        return { field, direction: dir };
    }
    Fields.sortBy = sortBy;
    function isTruthy(field) {
        switch (field.valueType) {
            case "number":
                return field.value != 0;
            case "string":
                return field.value.length > 0;
            case "boolean":
                return field.value;
            case "link":
                return !!field.value.path;
            case "date":
                return field.value.toMillis() != 0;
            case "duration":
                return field.value.as("seconds") != 0;
            case "object":
                return field.value.size > 0;
            case "array":
                return field.value.length > 0;
            case "null":
                return false;
            case "html":
                return true;
        }
    }
    Fields.isTruthy = isTruthy;
    /** Deep copy a field. */
    function deepCopy(field) {
        switch (field.type) {
            case "literal":
                if (field.valueType == 'array') {
                    return Fields.array(field.value.map(deepCopy));
                }
                else if (field.valueType == 'object') {
                    let newMap = new Map();
                    for (let [key, value] of field.value.entries()) {
                        newMap.set(key, deepCopy(value));
                    }
                    return Fields.object(newMap);
                }
                else {
                    return field;
                }
            case "variable": return field;
            case "binaryop": return Fields.binaryOp(deepCopy(field.left), field.op, deepCopy(field.right));
            case "negated": return Fields.negate(deepCopy(field.child));
            case "index": return Fields.index(deepCopy(field.object), deepCopy(field.index));
            case "function": return Fields.func(field.func, field.arguments.map(deepCopy));
        }
    }
    Fields.deepCopy = deepCopy;
    /** Renders an object as a string. */
    function toLiteralKey(field) {
        switch (field.valueType) {
            case "string":
            case "number":
            case "null":
            case "date":
            case "boolean":
                return `${field.valueType}:${field.value}`;
            case "duration":
                return `${field.valueType}:${field.value.toISO()}`;
            case "array":
                return `array:[${field.value.map(toLiteralKey).join(", ")}]`;
            case "object":
                return `object:[${Object.entries(field.value).map(val => `${val[0]}:${toLiteralKey(val[1])}`).join(", ")}]`;
            case "html":
                return "" + field.value;
            case "link":
                return `${field.valueType}:${field.value.path}`;
        }
    }
    Fields.toLiteralKey = toLiteralKey;
    function isString(val) {
        return typeof val == "string";
    }
    Fields.isString = isString;
    function isNumber(val) {
        return typeof val == "number";
    }
    Fields.isNumber = isNumber;
    function isDate(val) {
        return val instanceof luxon.DateTime;
    }
    Fields.isDate = isDate;
    function isDuration(val) {
        return val instanceof luxon.Duration;
    }
    Fields.isDuration = isDuration;
    function isNull(val) {
        return val === null || val === undefined;
    }
    Fields.isNull = isNull;
    function isArray(val) {
        return Array.isArray(val);
    }
    Fields.isArray = isArray;
    function isBoolean(val) {
        return typeof val === "boolean";
    }
    Fields.isBoolean = isBoolean;
    function isLink(val) {
        return val instanceof Link;
    }
    Fields.isLink = isLink;
    function isHtml(val) {
        return val instanceof HTMLElement;
    }
    Fields.isHtml = isHtml;
    function isObject(val) {
        return val instanceof Map;
    }
    Fields.isObject = isObject;
    Fields.NULL = Fields.literal('null', null);
})(Fields || (Fields = {}));
var Sources;
(function (Sources) {
    function tag(tag) {
        return { type: 'tag', tag };
    }
    Sources.tag = tag;
    function folder(prefix) {
        return { type: 'folder', folder: prefix };
    }
    Sources.folder = folder;
    function link(file, incoming) {
        return { type: 'link', file, direction: incoming ? 'incoming' : 'outgoing' };
    }
    Sources.link = link;
    function binaryOp(left, op, right) {
        return { type: 'binaryop', left, op, right };
    }
    Sources.binaryOp = binaryOp;
    function negate(child) {
        return { type: 'negate', child };
    }
    Sources.negate = negate;
    function empty() {
        return { type: 'empty' };
    }
    Sources.empty = empty;
})(Sources || (Sources = {}));
const DEFAULT_QUERY_SETTINGS = {
    renderNullAs: "-",
    warnOnEmptyResult: true,
    refreshInterval: 5000
};

/** Make an Obsidian-friendly internal link. */
function createAnchor(text, target, internal) {
    let a = document.createElement("a");
    a.dataset.href = target;
    a.href = target;
    a.text = text;
    a.target = "_blank";
    a.rel = "noopener";
    if (internal)
        a.addClass("internal-link");
    return a;
}
/** Render simple fields compactly, removing wrapping content like '<p>'. */
function renderCompactMarkdown(markdown, container, sourcePath, component) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let subcontainer = container.createSpan();
        yield obsidian.MarkdownRenderer.renderMarkdown(markdown, subcontainer, sourcePath, component);
        if (subcontainer.children.length == 1 && subcontainer.querySelector("p")) {
            subcontainer.innerHTML = (_b = (_a = subcontainer.querySelector("p")) === null || _a === void 0 ? void 0 : _a.innerHTML) !== null && _b !== void 0 ? _b : "";
        }
    });
}
/** Create a list inside the given container, with the given data. */
function renderList(container, elements, component, originFile, nullField) {
    return __awaiter(this, void 0, void 0, function* () {
        let listEl = container.createEl('ul', { cls: ['dataview', 'list-view-ul'] });
        for (let elem of elements) {
            let li = listEl.createEl('li');
            yield renderValue(elem, li, originFile, component, nullField, true);
        }
    });
}
/** Create a table inside the given container, with the given data. */
function renderTable(container, headers, values, component, originFile, nullField) {
    return __awaiter(this, void 0, void 0, function* () {
        let tableEl = container.createEl('table', { cls: ['dataview', 'table-view-table'] });
        let theadEl = tableEl.createEl('thead', { cls: 'table-view-thead' });
        let headerEl = theadEl.createEl('tr', { cls: 'table-view-tr-header' });
        for (let header of headers) {
            headerEl.createEl('th', { text: header, cls: 'table-view-th' });
        }
        let tbodyEl = tableEl.createEl('tbody', { cls: 'table-view-tbody' });
        for (let row of values) {
            let rowEl = tbodyEl.createEl('tr');
            for (let value of row) {
                let td = rowEl.createEl('td');
                yield renderValue(value, td, originFile, component, nullField, true);
            }
        }
    });
}
/** Render a pre block with an error in it; returns the element to allow for dynamic updating. */
function renderErrorPre(container, error) {
    let pre = container.createEl('pre', { cls: ["dataview", "dataview-error"] });
    pre.appendText(error);
    return pre;
}
/** Render a DateTime in a minimal format to save space. */
function renderMinimalDate(time) {
    // If there is no relevant time specified, fall back to just rendering the date.
    if (time.second == 0 && time.minute == 0 && time.hour == 0) {
        return time.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY);
    }
    return time.toLocaleString(luxon.DateTime.DATETIME_MED);
}
/** Render a duration in a minimal format to save space. */
function renderMinimalDuration(dur) {
    dur = normalizeDuration(dur);
    let result = "";
    if (dur.years)
        result += `${dur.years} years, `;
    if (dur.months)
        result += `${dur.months} months, `;
    if (dur.weeks)
        result += `${dur.weeks} weeks, `;
    if (dur.days)
        result += `${dur.days} days, `;
    if (dur.hours)
        result += `${dur.hours} hours, `;
    if (dur.minutes)
        result += `${dur.minutes} minutes, `;
    if (dur.seconds)
        result += `${Math.round(dur.seconds)} seconds, `;
    if (dur.milliseconds)
        result += `${Math.round(dur.milliseconds)} ms, `;
    if (result.endsWith(", "))
        result = result.substring(0, result.length - 2);
    return result;
}
/** Prettily render a value into a container with the given settings. */
function renderValue(field, container, originFile, component, nullField, expandList = false) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Fields.isNull(field)) {
            yield renderCompactMarkdown(nullField, container, originFile, component);
        }
        else if (Fields.isDate(field)) {
            container.appendText(renderMinimalDate(field));
        }
        else if (Fields.isDuration(field)) {
            container.appendText(renderMinimalDuration(field));
        }
        else if (Fields.isString(field) || Fields.isBoolean(field) || Fields.isNumber(field)) {
            yield renderCompactMarkdown("" + field, container, originFile, component);
        }
        else if (Fields.isArray(field)) {
            if (expandList) {
                if (field.length == 0)
                    return;
                else if (field.length == 1) {
                    yield renderValue(field[0], container, originFile, component, nullField, expandList);
                    return;
                }
                let list = container.createEl('ul', { cls: ['dataview', 'dataview-ul', 'dataview-result-list-ul'] });
                for (let child of field) {
                    let li = list.createEl('li', { cls: 'dataview-result-list-li' });
                    yield renderValue(child, li, originFile, component, nullField, expandList);
                }
            }
            else {
                if (field.length == 0) {
                    container.appendText("<empty list>");
                    return;
                }
                let span = container.createEl('span', { cls: ['dataview', 'dataview-result-list-span'] });
                let first = true;
                for (let val of field) {
                    if (first)
                        first = false;
                    else
                        span.appendText(", ");
                    yield renderValue(val, span, originFile, component, nullField, expandList);
                }
            }
        }
        else if (Fields.isObject(field)) {
            if (expandList) {
                if (field.size == 0) {
                    container.appendText("<empty object>");
                    return;
                }
                else if (field.size == 1) {
                    container.appendText(field.keys().next().value + ": ");
                    yield renderValue(field.values().next().value, container, originFile, component, nullField, expandList);
                    return;
                }
                let list = container.createEl('ul', { cls: ['dataview', 'dataview-ul', 'dataview-result-object-ul'] });
                for (let entry of field) {
                    let li = list.createEl('li', { cls: ['dataview', 'dataview-li', 'dataview-result-object-li'] });
                    li.appendText(entry[0] + ": ");
                    yield renderValue(entry[1], li, originFile, component, nullField, expandList);
                }
            }
            else {
                let span = container.createEl("span", { cls: ['dataview', 'dataview-result-object-span'] });
                let first = true;
                for (let entry of field) {
                    if (first)
                        first = false;
                    else
                        span.appendText(", ");
                    span.appendText(entry[0] + ": ");
                    yield renderValue(entry[1], span, originFile, component, nullField, expandList);
                }
            }
        }
        else if (Fields.isLink(field)) {
            yield renderCompactMarkdown(field.markdown(), container, originFile, component);
        }
        else if (Fields.isHtml(field)) {
            container.appendChild(field);
        }
        else {
            container.appendText("Unrecognized: " + JSON.stringify(field));
        }
    });
}

var parsimmon_umd_min = createCommonjsModule(function (module, exports) {
!function(n,t){module.exports=t();}("undefined"!=typeof self?self:commonjsGlobal,function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var u=t[e]={i:e,l:!1,exports:{}};return n[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:e});},r.r=function(n){Object.defineProperty(n,"__esModule",{value:!0});},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=0)}([function(n,t,r){function e(n){if(!(this instanceof e))return new e(n);this._=n;}var u=e.prototype;function o(n,t){for(var r=0;r<n;r++)t(r);}function i(n,t,r){return function(n,t){o(t.length,function(r){n(t[r],r,t);});}(function(r,e,u){t=n(t,r,e,u);},r),t}function f(n,t){return i(function(t,r,e,u){return t.concat([n(r,e,u)])},[],t)}function a(n,t){var r={v:0,buf:t};return o(n,function(){var n;r={v:r.v<<1|(n=r.buf,n[0]>>7),buf:function(n){var t=i(function(n,t,r,e){return n.concat(r===e.length-1?Buffer.from([t,0]).readUInt16BE(0):e.readUInt16BE(r))},[],n);return Buffer.from(f(function(n){return (n<<1&65535)>>8},t))}(r.buf)};}),r}function c(){return "undefined"!=typeof Buffer}function s(){if(!c())throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.")}function l(n){s();var t=i(function(n,t){return n+t},0,n);if(t%8!=0)throw new Error("The bits ["+n.join(", ")+"] add up to "+t+" which is not an even number of bytes; the total should be divisible by 8");var r,u=t/8,o=(r=function(n){return n>48},i(function(n,t){return n||(r(t)?t:n)},null,n));if(o)throw new Error(o+" bit range requested exceeds 48 bit (6 byte) Number max.");return new e(function(t,r){var e=u+r;return e>t.length?x(r,u.toString()+" bytes"):b(e,i(function(n,t){var r=a(t,n.buf);return {coll:n.coll.concat(r.v),buf:r.buf}},{coll:[],buf:t.slice(r,e)},n).coll)})}function p(n,t){return new e(function(r,e){return s(),e+t>r.length?x(e,t+" bytes for "+n):b(e+t,r.slice(e,e+t))})}function h(n,t){if("number"!=typeof(r=t)||Math.floor(r)!==r||t<0||t>6)throw new Error(n+" requires integer length in range [0, 6].");var r;}function d(n){return h("uintBE",n),p("uintBE("+n+")",n).map(function(t){return t.readUIntBE(0,n)})}function v(n){return h("uintLE",n),p("uintLE("+n+")",n).map(function(t){return t.readUIntLE(0,n)})}function g(n){return h("intBE",n),p("intBE("+n+")",n).map(function(t){return t.readIntBE(0,n)})}function m(n){return h("intLE",n),p("intLE("+n+")",n).map(function(t){return t.readIntLE(0,n)})}function y(n){return n instanceof e}function E(n){return "[object Array]"==={}.toString.call(n)}function w(n){return c()&&Buffer.isBuffer(n)}function b(n,t){return {status:!0,index:n,value:t,furthest:-1,expected:[]}}function x(n,t){return E(t)||(t=[t]),{status:!1,index:-1,value:null,furthest:n,expected:t}}function B(n,t){if(!t)return n;if(n.furthest>t.furthest)return n;var r=n.furthest===t.furthest?function(n,t){if(function(){if(void 0!==e._supportsSet)return e._supportsSet;var n="undefined"!=typeof Set;return e._supportsSet=n,n}()&&Array.from){for(var r=new Set(n),u=0;u<t.length;u++)r.add(t[u]);var o=Array.from(r);return o.sort(),o}for(var i={},f=0;f<n.length;f++)i[n[f]]=!0;for(var a=0;a<t.length;a++)i[t[a]]=!0;var c=[];for(var s in i)({}).hasOwnProperty.call(i,s)&&c.push(s);return c.sort(),c}(n.expected,t.expected):t.expected;return {status:n.status,index:n.index,value:n.value,furthest:t.furthest,expected:r}}var j={};function S(n,t){if(w(n))return {offset:t,line:-1,column:-1};n in j||(j[n]={});for(var r=j[n],e=0,u=0,o=0,i=t;i>=0;){if("\n"===n.charAt(i)&&(u++,0===o&&(o=i+1)),i in r){e=r[i].line,0===o&&(o=r[i].lineStart);break}i--;}var f=e+u,a=t-o;return r[t]={line:f,lineStart:o},{offset:t,line:f+1,column:a+1}}function _(n){if(!y(n))throw new Error("not a parser: "+n)}function L(n,t){return "string"==typeof n?n.charAt(t):n[t]}function O(n){if("number"!=typeof n)throw new Error("not a number: "+n)}function k(n){if("function"!=typeof n)throw new Error("not a function: "+n)}function P(n){if("string"!=typeof n)throw new Error("not a string: "+n)}var q=2,A=3,I=8,F=5*I,M=4*I,z="  ";function R(n,t){return new Array(t+1).join(n)}function U(n,t,r){var e=t-n.length;return e<=0?n:R(r,e)+n}function W(n,t,r,e){return {from:n-t>0?n-t:0,to:n+r>e?e:n+r}}function D(n,t){var r,e,u,o,a,c=t.index,s=c.offset,l=1;if(s===n.length)return "Got the end of the input";if(w(n)){var p=s-s%I,h=s-p,d=W(p,F,M+I,n.length),v=f(function(n){return f(function(n){return U(n.toString(16),2,"0")},n)},function(n,t){var r=n.length,e=[],u=0;if(r<=t)return [n.slice()];for(var o=0;o<r;o++)e[u]||e.push([]),e[u].push(n[o]),(o+1)%t==0&&u++;return e}(n.slice(d.from,d.to).toJSON().data,I));o=function(n){return 0===n.from&&1===n.to?{from:n.from,to:n.to}:{from:n.from/I,to:Math.floor(n.to/I)}}(d),e=p/I,r=3*h,h>=4&&(r+=1),l=2,u=f(function(n){return n.length<=4?n.join(" "):n.slice(0,4).join(" ")+"  "+n.slice(4).join(" ")},v),(a=(8*(o.to>0?o.to-1:o.to)).toString(16).length)<2&&(a=2);}else {var g=n.split(/\r\n|[\n\r\u2028\u2029]/);r=c.column-1,e=c.line-1,o=W(e,q,A,g.length),u=g.slice(o.from,o.to),a=o.to.toString().length;}var m=e-o.from;return w(n)&&(a=(8*(o.to>0?o.to-1:o.to)).toString(16).length)<2&&(a=2),i(function(t,e,u){var i,f=u===m,c=f?"> ":z;return i=w(n)?U((8*(o.from+u)).toString(16),a,"0"):U((o.from+u+1).toString(),a," "),[].concat(t,[c+i+" | "+e],f?[z+R(" ",a)+" | "+U("",r," ")+R("^",l)]:[])},[],u).join("\n")}function N(n,t){return ["\n","-- PARSING FAILED "+R("-",50),"\n\n",D(n,t),"\n\n",(r=t.expected,1===r.length?"Expected:\n\n"+r[0]:"Expected one of the following: \n\n"+r.join(", ")),"\n"].join("");var r;}function G(n){return void 0!==n.flags?n.flags:[n.global?"g":"",n.ignoreCase?"i":"",n.multiline?"m":"",n.unicode?"u":"",n.sticky?"y":""].join("")}function C(){for(var n=[].slice.call(arguments),t=n.length,r=0;r<t;r+=1)_(n[r]);return e(function(r,e){for(var u,o=new Array(t),i=0;i<t;i+=1){if(!(u=B(n[i]._(r,e),u)).status)return u;o[i]=u.value,e=u.index;}return B(b(e,o),u)})}function J(){var n=[].slice.call(arguments);if(0===n.length)throw new Error("seqMap needs at least one argument");var t=n.pop();return k(t),C.apply(null,n).map(function(n){return t.apply(null,n)})}function T(){var n=[].slice.call(arguments),t=n.length;if(0===t)return Y("zero alternates");for(var r=0;r<t;r+=1)_(n[r]);return e(function(t,r){for(var e,u=0;u<n.length;u+=1)if((e=B(n[u]._(t,r),e)).status)return e;return e})}function V(n,t){return H(n,t).or(X([]))}function H(n,t){return _(n),_(t),J(n,t.then(n).many(),function(n,t){return [n].concat(t)})}function K(n){P(n);var t="'"+n+"'";return e(function(r,e){var u=e+n.length,o=r.slice(e,u);return o===n?b(u,o):x(e,t)})}function Q(n,t){!function(n){if(!(n instanceof RegExp))throw new Error("not a regexp: "+n);for(var t=G(n),r=0;r<t.length;r++){var e=t.charAt(r);if("i"!==e&&"m"!==e&&"u"!==e&&"s"!==e)throw new Error('unsupported regexp flag "'+e+'": '+n)}}(n),arguments.length>=2?O(t):t=0;var r=function(n){return RegExp("^(?:"+n.source+")",G(n))}(n),u=""+n;return e(function(n,e){var o=r.exec(n.slice(e));if(o){if(0<=t&&t<=o.length){var i=o[0],f=o[t];return b(e+i.length,f)}return x(e,"valid match group (0 to "+o.length+") in "+u)}return x(e,u)})}function X(n){return e(function(t,r){return b(r,n)})}function Y(n){return e(function(t,r){return x(r,n)})}function Z(n){if(y(n))return e(function(t,r){var e=n._(t,r);return e.index=r,e.value="",e});if("string"==typeof n)return Z(K(n));if(n instanceof RegExp)return Z(Q(n));throw new Error("not a string, regexp, or parser: "+n)}function $(n){return _(n),e(function(t,r){var e=n._(t,r),u=t.slice(r,e.index);return e.status?x(r,'not "'+u+'"'):b(r,null)})}function nn(n){return k(n),e(function(t,r){var e=L(t,r);return r<t.length&&n(e)?b(r+1,e):x(r,"a character/byte matching "+n)})}function tn(n,t){arguments.length<2&&(t=n,n=void 0);var r=e(function(n,e){return r._=t()._,r._(n,e)});return n?r.desc(n):r}function rn(){return Y("fantasy-land/empty")}u.parse=function(n){if("string"!=typeof n&&!w(n))throw new Error(".parse must be called with a string or Buffer as its argument");var t,r=this.skip(fn)._(n,0);return t=r.status?{status:!0,value:r.value}:{status:!1,index:S(n,r.furthest),expected:r.expected},delete j[n],t},u.tryParse=function(n){var t=this.parse(n);if(t.status)return t.value;var r=N(n,t),e=new Error(r);throw e.type="ParsimmonError",e.result=t,e},u.assert=function(n,t){return this.chain(function(r){return n(r)?X(r):Y(t)})},u.or=function(n){return T(this,n)},u.trim=function(n){return this.wrap(n,n)},u.wrap=function(n,t){return J(n,this,t,function(n,t){return t})},u.thru=function(n){return n(this)},u.then=function(n){return _(n),C(this,n).map(function(n){return n[1]})},u.many=function(){var n=this;return e(function(t,r){for(var e=[],u=void 0;;){if(!(u=B(n._(t,r),u)).status)return B(b(r,e),u);if(r===u.index)throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");r=u.index,e.push(u.value);}})},u.tieWith=function(n){return P(n),this.map(function(t){if(function(n){if(!E(n))throw new Error("not an array: "+n)}(t),t.length){P(t[0]);for(var r=t[0],e=1;e<t.length;e++)P(t[e]),r+=n+t[e];return r}return ""})},u.tie=function(){return this.tieWith("")},u.times=function(n,t){var r=this;return arguments.length<2&&(t=n),O(n),O(t),e(function(e,u){for(var o=[],i=void 0,f=void 0,a=0;a<n;a+=1){if(f=B(i=r._(e,u),f),!i.status)return f;u=i.index,o.push(i.value);}for(;a<t&&(f=B(i=r._(e,u),f),i.status);a+=1)u=i.index,o.push(i.value);return B(b(u,o),f)})},u.result=function(n){return this.map(function(){return n})},u.atMost=function(n){return this.times(0,n)},u.atLeast=function(n){return J(this.times(n),this.many(),function(n,t){return n.concat(t)})},u.map=function(n){k(n);var t=this;return e(function(r,e){var u=t._(r,e);return u.status?B(b(u.index,n(u.value)),u):u})},u.contramap=function(n){k(n);var t=this;return e(function(r,e){var u=t.parse(n(r.slice(e)));return u.status?b(e+r.length,u.value):u})},u.promap=function(n,t){return k(n),k(t),this.contramap(n).map(t)},u.skip=function(n){return C(this,n).map(function(n){return n[0]})},u.mark=function(){return J(en,this,en,function(n,t,r){return {start:n,value:t,end:r}})},u.node=function(n){return J(en,this,en,function(t,r,e){return {name:n,value:r,start:t,end:e}})},u.sepBy=function(n){return V(this,n)},u.sepBy1=function(n){return H(this,n)},u.lookahead=function(n){return this.skip(Z(n))},u.notFollowedBy=function(n){return this.skip($(n))},u.desc=function(n){E(n)||(n=[n]);var t=this;return e(function(r,e){var u=t._(r,e);return u.status||(u.expected=n),u})},u.fallback=function(n){return this.or(X(n))},u.ap=function(n){return J(n,this,function(n,t){return n(t)})},u.chain=function(n){var t=this;return e(function(r,e){var u=t._(r,e);return u.status?B(n(u.value)._(r,u.index),u):u})},u.concat=u.or,u.empty=rn,u.of=X,u["fantasy-land/ap"]=u.ap,u["fantasy-land/chain"]=u.chain,u["fantasy-land/concat"]=u.concat,u["fantasy-land/empty"]=u.empty,u["fantasy-land/of"]=u.of,u["fantasy-land/map"]=u.map;var en=e(function(n,t){return b(t,S(n,t))}),un=e(function(n,t){return t>=n.length?x(t,"any character/byte"):b(t+1,L(n,t))}),on=e(function(n,t){return b(n.length,n.slice(t))}),fn=e(function(n,t){return t<n.length?x(t,"EOF"):b(t,null)}),an=Q(/[0-9]/).desc("a digit"),cn=Q(/[0-9]*/).desc("optional digits"),sn=Q(/[a-z]/i).desc("a letter"),ln=Q(/[a-z]*/i).desc("optional letters"),pn=Q(/\s*/).desc("optional whitespace"),hn=Q(/\s+/).desc("whitespace"),dn=K("\r"),vn=K("\n"),gn=K("\r\n"),mn=T(gn,vn,dn).desc("newline"),yn=T(mn,fn);e.all=on,e.alt=T,e.any=un,e.cr=dn,e.createLanguage=function(n){var t={};for(var r in n)({}).hasOwnProperty.call(n,r)&&function(r){t[r]=tn(function(){return n[r](t)});}(r);return t},e.crlf=gn,e.custom=function(n){return e(n(b,x))},e.digit=an,e.digits=cn,e.empty=rn,e.end=yn,e.eof=fn,e.fail=Y,e.formatError=N,e.index=en,e.isParser=y,e.lazy=tn,e.letter=sn,e.letters=ln,e.lf=vn,e.lookahead=Z,e.makeFailure=x,e.makeSuccess=b,e.newline=mn,e.noneOf=function(n){return nn(function(t){return n.indexOf(t)<0}).desc("none of '"+n+"'")},e.notFollowedBy=$,e.of=X,e.oneOf=function(n){for(var t=n.split(""),r=0;r<t.length;r++)t[r]="'"+t[r]+"'";return nn(function(t){return n.indexOf(t)>=0}).desc(t)},e.optWhitespace=pn,e.Parser=e,e.range=function(n,t){return nn(function(r){return n<=r&&r<=t}).desc(n+"-"+t)},e.regex=Q,e.regexp=Q,e.sepBy=V,e.sepBy1=H,e.seq=C,e.seqMap=J,e.seqObj=function(){for(var n,t={},r=0,u=(n=arguments,Array.prototype.slice.call(n)),o=u.length,i=0;i<o;i+=1){var f=u[i];if(!y(f)){if(E(f)&&2===f.length&&"string"==typeof f[0]&&y(f[1])){var a=f[0];if(Object.prototype.hasOwnProperty.call(t,a))throw new Error("seqObj: duplicate key "+a);t[a]=!0,r++;continue}throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.")}}if(0===r)throw new Error("seqObj expects at least one named parser, found zero");return e(function(n,t){for(var r,e={},i=0;i<o;i+=1){var f,a;if(E(u[i])?(f=u[i][0],a=u[i][1]):(f=null,a=u[i]),!(r=B(a._(n,t),r)).status)return r;f&&(e[f]=r.value),t=r.index;}return B(b(t,e),r)})},e.string=K,e.succeed=X,e.takeWhile=function(n){return k(n),e(function(t,r){for(var e=r;e<t.length&&n(L(t,e));)e++;return b(e,t.slice(r,e))})},e.test=nn,e.whitespace=hn,e["fantasy-land/empty"]=rn,e["fantasy-land/of"]=X,e.Binary={bitSeq:l,bitSeqObj:function(n){s();var t={},r=0,e=f(function(n){if(E(n)){var e=n;if(2!==e.length)throw new Error("["+e.join(", ")+"] should be length 2, got length "+e.length);if(P(e[0]),O(e[1]),Object.prototype.hasOwnProperty.call(t,e[0]))throw new Error("duplicate key in bitSeqObj: "+e[0]);return t[e[0]]=!0,r++,e}return O(n),[null,n]},n);if(r<1)throw new Error("bitSeqObj expects at least one named pair, got ["+n.join(", ")+"]");var u=f(function(n){return n[0]},e);return l(f(function(n){return n[1]},e)).map(function(n){return i(function(n,t){return null!==t[0]&&(n[t[0]]=t[1]),n},{},f(function(t,r){return [t,n[r]]},u))})},byte:function(n){if(s(),O(n),n>255)throw new Error("Value specified to byte constructor ("+n+"=0x"+n.toString(16)+") is larger in value than a single byte.");var t=(n>15?"0x":"0x0")+n.toString(16);return e(function(r,e){var u=L(r,e);return u===n?b(e+1,u):x(e,t)})},buffer:function(n){return p("buffer",n).map(function(n){return Buffer.from(n)})},encodedString:function(n,t){return p("string",t).map(function(t){return t.toString(n)})},uintBE:d,uint8BE:d(1),uint16BE:d(2),uint32BE:d(4),uintLE:v,uint8LE:v(1),uint16LE:v(2),uint32LE:v(4),intBE:g,int8BE:g(1),int16BE:g(2),int32BE:g(4),intLE:m,int8LE:m(1),int16LE:m(2),int32LE:m(4),floatBE:p("floatBE",4).map(function(n){return n.readFloatBE(0)}),floatLE:p("floatLE",4).map(function(n){return n.readFloatLE(0)}),doubleBE:p("doubleBE",8).map(function(n){return n.readDoubleBE(0)}),doubleLE:p("doubleLE",8).map(function(n){return n.readDoubleLE(0)})},n.exports=e;}])});
});

///////////
// TYPES //
///////////
/** Provides a lookup table for unit durations of the given type. */
const DURATION_TYPES = {
    "year": luxon.Duration.fromObject({ years: 1 }),
    "yr": luxon.Duration.fromObject({ years: 1 }),
    "month": luxon.Duration.fromObject({ months: 1 }),
    "mo": luxon.Duration.fromObject({ months: 1 }),
    "week": luxon.Duration.fromObject({ weeks: 1 }),
    "wk": luxon.Duration.fromObject({ weeks: 1 }),
    "w": luxon.Duration.fromObject({ weeks: 1 }),
    "day": luxon.Duration.fromObject({ days: 1 }),
    "d": luxon.Duration.fromObject({ days: 1 }),
    "hour": luxon.Duration.fromObject({ hours: 1 }),
    "hr": luxon.Duration.fromObject({ hours: 1 }),
    "h": luxon.Duration.fromObject({ hours: 1 }),
    "minute": luxon.Duration.fromObject({ minute: 1 }),
    "min": luxon.Duration.fromObject({ minute: 1 }),
    "m": luxon.Duration.fromObject({ minute: 1 }),
    "second": luxon.Duration.fromObject({ seconds: 1 }),
    "sec": luxon.Duration.fromObject({ seconds: 1 }),
    "s": luxon.Duration.fromObject({ seconds: 1 })
};
/**
 * Keywords which cannot be used as variables directly. Use `row.<thing>` if it is a variable you have defined and want
 * to access.
 */
const KEYWORDS = ["FROM", "WHERE", "LIMIT", "GROUP", "FLATTEN"];
///////////////
// Utilities //
///////////////
/** Attempt to parse the inside of a link to pull out display name, subpath, etc. */
function parseInnerLink(link) {
    let display = undefined;
    if (link.includes('|')) {
        let split = link.split("|");
        link = split[0];
        display = split[1];
    }
    if (link.includes('#')) {
        let split = link.split('#');
        return Link.header(split[0], split[1], false, display);
    }
    else if (link.includes('^')) {
        let split = link.split('^');
        return Link.block(split[0], split[1], false, display);
    }
    return Link.file(link, false, display);
}
/** Create a left-associative binary parser which parses the given sub-element and separator. Handles whitespace. */
function createBinaryParser(child, sep, combine) {
    return parsimmon_umd_min.seqMap(child, parsimmon_umd_min.seq(parsimmon_umd_min.optWhitespace, sep, parsimmon_umd_min.optWhitespace, child).many(), (first, rest) => {
        if (rest.length == 0)
            return first;
        let node = combine(first, rest[0][1], rest[0][3]);
        for (let index = 1; index < rest.length; index++) {
            node = combine(node, rest[index][1], rest[index][3]);
        }
        return node;
    });
}
function chainOpt(base, ...funcs) {
    return parsimmon_umd_min.custom((success, failure) => {
        return (input, i) => {
            let result = base._(input, i);
            if (!result.status)
                return result;
            for (let func of funcs) {
                let next = func(result.value)._(input, result.index);
                if (!next.status)
                    return result;
                result = next;
            }
            return result;
        };
    });
}
const EXPRESSION = parsimmon_umd_min.createLanguage({
    // A floating point number; the decimal point is optional.
    number: q => parsimmon_umd_min.regexp(/[0-9]+(.[0-9]+)?/).map(str => Number.parseFloat(str)).desc("number"),
    // A quote-surrounded string which supports escape characters ('\').
    string: q => parsimmon_umd_min.string('"')
        .then(parsimmon_umd_min.alt(q.escapeCharacter, parsimmon_umd_min.noneOf('"\\')).atLeast(0).map(chars => chars.join('')))
        .skip(parsimmon_umd_min.string('"'))
        .desc("string"),
    escapeCharacter: q => parsimmon_umd_min.string('\\').then(parsimmon_umd_min.any).map(escaped => {
        // If we are escaping a backslash or a quote, pass in on in escaped form
        if (escaped === '"')
            return '\"';
        if (escaped === '\\')
            return '\\';
        else
            return '\\' + escaped;
    }),
    // A boolean true/false value.
    bool: q => parsimmon_umd_min.regexp(/true|false|True|False/).map(str => str.toLowerCase() == "true")
        .desc("boolean ('true' or 'false')"),
    // A tag of the form '#stuff/hello-there'.
    tag: q => parsimmon_umd_min.regexp(/#[\p{Letter}\p{Emoji_Presentation}\w/-]+/u).desc("tag ('#hello/stuff')"),
    // A variable identifier, which is alphanumeric and must start with a letter.
    identifier: q => parsimmon_umd_min.regexp(/[\p{Letter}\p{Emoji_Presentation}][\p{Letter}\p{Emoji_Presentation}\w_-]*/u).desc("variable identifier"),
    // A variable identifier, which is alphanumeric and must start with a letter. Can include dots.
    identifierDot: q => parsimmon_umd_min.regexp(/[\p{Letter}\p{Emoji_Presentation}][\p{Letter}\p{Emoji_Presentation}\.\w_-]*/u).desc("variable identifier"),
    // An Obsidian link of the form [[<link>]].
    link: q => parsimmon_umd_min.regexp(/\[\[([^\[\]]*?)\]\]/u, 1).map(linkInner => parseInnerLink(linkInner)).desc("file link"),
    embedLink: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("!").atMost(1), q.link, (p, l) => {
        if (p.length > 0)
            l.embed = true;
        return l;
    }),
    // Binary plus or minus operator.
    binaryPlusMinus: q => parsimmon_umd_min.regexp(/\+|-/).map(str => str).desc("'+' or '-'"),
    // Binary times or divide operator.
    binaryMulDiv: q => parsimmon_umd_min.regexp(/\*|\//).map(str => str).desc("'*' or '/'"),
    // Binary comparison operator.
    binaryCompareOp: q => parsimmon_umd_min.regexp(/>=|<=|!=|>|<|=/).map(str => str).desc("'>=' or '<=' or '!=' or '=' or '>' or '<'"),
    // Binary boolean combination operator.
    binaryBooleanOp: q => parsimmon_umd_min.regexp(/and|or|&|\|/i).map(str => {
        if (str.toLowerCase() == 'and')
            return '&';
        else if (str.toLowerCase() == 'or')
            return '|';
        else
            return str;
    }).desc("'and' or 'or'"),
    // A date which can be YYYY-MM[-DDTHH:mm:ss].
    // TODO: Add time-zone support.
    // TODO: Will probably want a custom combinator for optional parsing.
    rootDate: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/\d{4}/), parsimmon_umd_min.string("-"), parsimmon_umd_min.regexp(/\d{2}/), (year, _, month) => {
        return luxon.DateTime.fromObject({ year: Number.parseInt(year), month: Number.parseInt(month) });
    }).desc("date in format YYYY-MM[-DDTHH-MM-SS]"),
    date: q => chainOpt(q.rootDate, (ym) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("-"), parsimmon_umd_min.regexp(/\d{2}/), (_, day) => ym.set({ day: Number.parseInt(day) })), (ymd) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("T"), parsimmon_umd_min.regexp(/\d{2}/), (_, hour) => ymd.set({ hour: Number.parseInt(hour) })), (ymdh) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string(":"), parsimmon_umd_min.regexp(/\d{2}/), (_, minute) => ymdh.set({ minute: Number.parseInt(minute) })), (ymdhm) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string(":"), parsimmon_umd_min.regexp(/\d{2}/), (_, second) => ymdhm.set({ second: Number.parseInt(second) })), (ymdhms) => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("."), parsimmon_umd_min.regexp(/\d{3}/), (_, millisecond) => ymdhms.set({ millisecond: Number.parseInt(millisecond) }))),
    // A date, plus various shorthand times of day it could be.
    datePlus: q => parsimmon_umd_min.alt(parsimmon_umd_min.string("now").map(_ => luxon.DateTime.local()), parsimmon_umd_min.string("today").map(_ => luxon.DateTime.local().startOf("day")), parsimmon_umd_min.string("tomorrow").map(_ => luxon.DateTime.local().startOf("day").plus(luxon.Duration.fromObject({ day: 1 }))), parsimmon_umd_min.string("som").map(_ => luxon.DateTime.local().startOf("month")), parsimmon_umd_min.string("soy").map(_ => luxon.DateTime.local().startOf("year")), parsimmon_umd_min.string("eom").map(_ => luxon.DateTime.local().endOf("month")), parsimmon_umd_min.string("eoy").map(_ => luxon.DateTime.local().endOf("year")), q.date),
    // A duration of time.
    durationType: q => parsimmon_umd_min.alt(...Object.keys(DURATION_TYPES).map(parsimmon_umd_min.string)),
    duration: q => parsimmon_umd_min.seqMap(q.number, parsimmon_umd_min.optWhitespace, q.durationType, parsimmon_umd_min.string("s").atMost(1), (count, _, t, _2) => DURATION_TYPES[t].mapUnits(x => x * count)),
    // Source parsing.
    tagSource: q => q.tag.map(tag => Sources.tag(tag)),
    linkIncomingSource: q => q.link.map(link => Sources.link(link.path, true)),
    linkOutgoingSource: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("outgoing(").skip(parsimmon_umd_min.optWhitespace), q.link, parsimmon_umd_min.string(")"), (_1, link, _2) => Sources.link(link.path, false)),
    folderSource: q => q.string.map(str => Sources.folder(str)),
    parensSource: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("("), parsimmon_umd_min.optWhitespace, q.source, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (_1, _2, field, _3, _4) => field),
    negateSource: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.alt(parsimmon_umd_min.string("-"), parsimmon_umd_min.string("!")), q.atomSource, (_, source) => Sources.negate(source)),
    atomSource: q => parsimmon_umd_min.alt(q.parensSource, q.negateSource, q.linkOutgoingSource, q.linkIncomingSource, q.folderSource, q.tagSource),
    binaryOpSource: q => createBinaryParser(q.atomSource, q.binaryBooleanOp, Sources.binaryOp),
    source: q => q.binaryOpSource,
    // Field parsing.
    variableField: q => q.identifier.chain(r => {
        if (KEYWORDS.includes(r.toUpperCase())) {
            return parsimmon_umd_min.fail("Variable fields cannot be a keyword (" + KEYWORDS.join(" or ") + ")");
        }
        else {
            return parsimmon_umd_min.succeed(Fields.variable(r));
        }
    }).desc("variable"),
    numberField: q => q.number.map(val => Fields.literal('number', val)).desc("number"),
    stringField: q => q.string.map(val => Fields.literal('string', val)).desc("string"),
    boolField: q => q.bool.map(val => Fields.literal('boolean', val)).desc("boolean"),
    dateField: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("date("), parsimmon_umd_min.optWhitespace, q.datePlus, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (prefix, _1, date, _2, postfix) => Fields.literal('date', date))
        .desc("date"),
    durationField: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("dur("), parsimmon_umd_min.optWhitespace, q.duration, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (prefix, _1, dur, _2, postfix) => Fields.literal('duration', dur))
        .desc("duration"),
    nullField: q => parsimmon_umd_min.string("null").map(_ => Fields.NULL),
    linkField: q => q.link.map(f => Fields.link(f)),
    literalField: q => parsimmon_umd_min.alt(q.nullField, q.numberField, q.stringField, q.boolField, q.dateField, q.durationField),
    atomInlineField: q => parsimmon_umd_min.alt(q.date.map(d => Fields.literal('date', d)), q.duration.map(d => Fields.literal('duration', normalizeDuration(d))), q.stringField, q.linkField, q.boolField, q.numberField, q.nullField),
    inlineFieldList: q => q.atomInlineField.sepBy(parsimmon_umd_min.string(",").trim(parsimmon_umd_min.optWhitespace).lookahead(q.atomInlineField)),
    inlineField: q => parsimmon_umd_min.alt(parsimmon_umd_min.seqMap(q.atomInlineField, parsimmon_umd_min.string(",").trim(parsimmon_umd_min.optWhitespace), q.inlineFieldList, (f, s, l) => Fields.array([f].concat(l))), q.atomInlineField),
    atomField: q => parsimmon_umd_min.alt(q.negatedField, q.parensField, q.boolField, q.numberField, q.stringField, q.linkField, q.dateField, q.durationField, q.nullField, q.variableField),
    indexField: q => parsimmon_umd_min.seqMap(q.atomField, parsimmon_umd_min.alt(q.dotPostfix, q.indexPostfix, q.functionPostfix).many(), (obj, postfixes) => {
        let result = obj;
        for (let post of postfixes) {
            switch (post.type) {
                case "dot":
                case "index":
                    result = Fields.index(result, post.field);
                    break;
                case "function":
                    result = Fields.func(result, post.fields);
                    break;
            }
        }
        return result;
    }),
    negatedField: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("!"), q.indexField, (_, field) => Fields.negate(field)).desc("negated field"),
    parensField: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("("), parsimmon_umd_min.optWhitespace, q.field, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (_1, _2, field, _3, _4) => field),
    dotPostfix: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("."), q.identifier, (_, field) => { return { type: 'dot', field: Fields.string(field) }; }),
    indexPostfix: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("["), parsimmon_umd_min.optWhitespace, q.field, parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string("]"), (_, _2, field, _3, _4) => { return { type: 'index', field }; }),
    functionPostfix: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.string("("), parsimmon_umd_min.optWhitespace, q.field.sepBy(parsimmon_umd_min.string(",").trim(parsimmon_umd_min.optWhitespace)), parsimmon_umd_min.optWhitespace, parsimmon_umd_min.string(")"), (_, _1, fields, _2, _3) => { return { type: 'function', fields }; }),
    // The precedence hierarchy of operators - multiply/divide, add/subtract, compare, and then boolean operations.
    binaryMulDivField: q => createBinaryParser(q.indexField, q.binaryMulDiv, Fields.binaryOp),
    binaryPlusMinusField: q => createBinaryParser(q.binaryMulDivField, q.binaryPlusMinus, Fields.binaryOp),
    binaryCompareField: q => createBinaryParser(q.binaryPlusMinusField, q.binaryCompareOp, Fields.binaryOp),
    binaryBooleanField: q => createBinaryParser(q.binaryCompareField, q.binaryBooleanOp, Fields.binaryOp),
    binaryOpField: q => q.binaryBooleanField,
    field: q => q.binaryOpField
});
/** A parsimmon-powered parser-combinator implementation of the query language. */
const QUERY_LANGUAGE = parsimmon_umd_min.createLanguage({
    // Simple atom parsing, like words, identifiers, numbers.
    queryType: q => parsimmon_umd_min.alt(parsimmon_umd_min.regexp(/TABLE|LIST|TASK/i)).map(str => str.toLowerCase())
        .desc("query type ('TABLE', 'LIST', or 'TASK')"),
    explicitNamedField: q => parsimmon_umd_min.seqMap(EXPRESSION.field.skip(parsimmon_umd_min.whitespace), parsimmon_umd_min.regexp(/AS/i).skip(parsimmon_umd_min.whitespace), EXPRESSION.identifier.or(EXPRESSION.string), (field, as, ident) => Fields.named(ident, field)),
    namedField: q => parsimmon_umd_min.alt(q.explicitNamedField, EXPRESSION.identifierDot.map(ident => Fields.named(ident, Fields.indexVariable(ident)))),
    sortField: q => parsimmon_umd_min.seqMap(EXPRESSION.field.skip(parsimmon_umd_min.optWhitespace), parsimmon_umd_min.regexp(/ASCENDING|DESCENDING|ASC|DESC/i).atMost(1), (field, dir) => {
        let direction = dir.length == 0 ? 'ascending' : dir[0].toLowerCase();
        if (direction == 'desc')
            direction = 'descending';
        if (direction == 'asc')
            direction = 'ascending';
        return {
            field: field,
            direction: direction
        };
    }),
    headerClause: q => q.queryType.skip(parsimmon_umd_min.whitespace).chain(qtype => {
        switch (qtype) {
            case "table":
                return parsimmon_umd_min.sepBy(q.namedField, parsimmon_umd_min.string(',').trim(parsimmon_umd_min.optWhitespace))
                    .map(fields => { return { type: 'table', fields }; });
            case "list":
                return EXPRESSION.field.atMost(1)
                    .map(format => { return { type: 'list', format: format.length == 1 ? format[0] : undefined }; });
            case "task":
                return parsimmon_umd_min.succeed({ type: 'task' });
            default:
                return parsimmon_umd_min.fail(`Unrecognized query type '${qtype}'`);
        }
    }),
    fromClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/FROM/i), parsimmon_umd_min.whitespace, EXPRESSION.source, (_1, _2, source) => source),
    whereClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/WHERE/i), parsimmon_umd_min.whitespace, EXPRESSION.field, (where, _, field) => { return { type: 'where', clause: field }; }),
    sortByClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/SORT/i), parsimmon_umd_min.whitespace, q.sortField.sepBy1(parsimmon_umd_min.string(',').trim(parsimmon_umd_min.optWhitespace)), (sort, _1, fields) => { return { type: 'sort', fields }; }),
    limitClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/LIMIT/i), parsimmon_umd_min.whitespace, EXPRESSION.field, (limit, _1, field) => { return { type: 'limit', amount: field }; }),
    flattenClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/FLATTEN/i).skip(parsimmon_umd_min.whitespace), q.namedField, (_, field) => { return { type: 'flatten', field }; }),
    groupByClause: q => parsimmon_umd_min.seqMap(parsimmon_umd_min.regexp(/GROUP BY/i).skip(parsimmon_umd_min.whitespace), q.namedField, (_, field) => { return { type: 'group', field }; }),
    // Full query parsing.
    clause: q => parsimmon_umd_min.alt(q.fromClause, q.whereClause, q.sortByClause, q.limitClause, q.groupByClause, q.flattenClause),
    query: q => parsimmon_umd_min.seqMap(q.headerClause.trim(parsimmon_umd_min.optWhitespace), q.fromClause.trim(parsimmon_umd_min.optWhitespace).atMost(1), q.clause.trim(parsimmon_umd_min.optWhitespace).many(), (header, from, clauses) => {
        return {
            header,
            source: from.length == 0 ? Sources.folder("") : from[0],
            operations: clauses,
            settings: DEFAULT_QUERY_SETTINGS
        };
    })
});
/**
 * Attempt to parse a query from the given query text, returning a string error
 * if the parse failed.
 */
function parseQuery(text, settings) {
    try {
        let query = QUERY_LANGUAGE.query.tryParse(text);
        if (settings)
            query.settings = Object.assign(query.settings, settings);
        return query;
    }
    catch (error) {
        return "" + error;
    }
}
/**
 * Attempt to parse a field from the given text, returning a string error if the
 * parse failed.
 */
function parseField(text) {
    try {
        return EXPRESSION.field.tryParse(text);
    }
    catch (error) {
        return "" + error;
    }
}

/** All extracted markdown file metadata obtained from a file. */
class PageMetadata {
    constructor(path, init) {
        this.path = path;
        this.fields = new Map();
        this.tags = new Set();
        this.aliases = new Set();
        this.links = [];
        this.tasks = [];
        Object.assign(this, init);
    }
    /** Parse all subtags out of the given tag. I.e., #hello/i/am would yield [#hello/i/am, #hello/i, #hello]. */
    static parseSubtags(tag) {
        let result = [tag];
        while (tag.contains("/")) {
            tag = tag.substring(0, tag.lastIndexOf("/"));
            result.push(tag);
        }
        return result;
    }
    /** The name (based on path) of this file. */
    name() { return getFileName(this.path); }
    /** The containing folder (based on path) of this file. */
    folder() { return getParentFolder(this.path); }
    /** Return a set of tags AND all of their parent tags (so #hello/yes would become #hello, #hello/yes). */
    fullTags() {
        // TODO: Memoize this, probably.
        let result = new Set();
        for (let tag of this.tags) {
            for (let subtag of PageMetadata.parseSubtags(tag))
                result.add(subtag);
        }
        return result;
    }
    /** Convert all links in this file to file links. */
    fileLinks() {
        return this.links.map(link => {
            switch (link.type) {
                case "file": return link;
                case "block": return {
                    type: 'file',
                    path: link.path,
                    display: link.display,
                    embed: link.embed
                };
                case "header": return {
                    type: 'file',
                    path: link.path,
                    display: link.display,
                    embed: link.embed
                };
            }
        });
    }
}
/** Try to extract a YYYYMMDD date from a string. */
function extractDate(str) {
    let dateMatch = /(\d{4})-(\d{2})-(\d{2})/.exec(str);
    if (!dateMatch)
        dateMatch = /(\d{4})(\d{2})(\d{2})/.exec(str);
    if (dateMatch) {
        let year = Number.parseInt(dateMatch[1]);
        let month = Number.parseInt(dateMatch[2]);
        let day = Number.parseInt(dateMatch[3]);
        return luxon.DateTime.fromObject({ year, month, day });
    }
    return undefined;
}
/** Attempt to find a date associated with the given page from metadata or filenames. */
function findDate(file, fields) {
    var _a, _b;
    for (let key of fields.keys()) {
        if (!(key.toLocaleLowerCase() == "date"))
            continue;
        let value = fields.get(key);
        if (value.valueType == "date")
            return value.value;
        else if (value.valueType == "link") {
            let date = extractDate(value.value.path);
            if (date)
                return date;
            date = extractDate((_a = value.value.subpath) !== null && _a !== void 0 ? _a : "");
            if (date)
                return date;
            date = extractDate((_b = value.value.display) !== null && _b !== void 0 ? _b : "");
            if (date)
                return date;
        }
    }
    return extractDate(getFileName(file));
}
/** Recursively convert frontmatter into fields. We have to dance around YAML structure. */
function parseFrontmatter(value) {
    if (value == null) {
        return Fields.NULL;
    }
    else if (typeof value === 'object') {
        if (Array.isArray(value)) {
            let object = value;
            // Special case for link syntax, which shows up as double-nested arrays.
            if (object.length == 1 && Array.isArray(object[0]) && object[0].every(v => typeof v === 'string')) {
                return Fields.link(parseInnerLink(object[0].join(", ")));
            }
            let result = [];
            for (let child of object) {
                result.push(parseFrontmatter(child));
            }
            return Fields.array(result);
        }
        else {
            let object = value;
            let result = new Map();
            for (let key in object) {
                result.set(key, parseFrontmatter(object[key]));
            }
            return Fields.object(result);
        }
    }
    else if (typeof value === 'number') {
        return Fields.number(value);
    }
    else if (typeof value === 'string') {
        let dateParse = EXPRESSION.date.parse(value);
        if (dateParse.status) {
            return Fields.literal('date', dateParse.value);
        }
        let durationParse = EXPRESSION.duration.parse(value);
        if (durationParse.status) {
            return Fields.literal('duration', durationParse.value);
        }
        let linkParse = EXPRESSION.embedLink.parse(value);
        if (linkParse.status) {
            return Fields.literal('link', linkParse.value);
        }
        return Fields.literal('string', value);
    }
    // Backup if we don't understand the type.
    return Fields.NULL;
}
/** Parse a textual inline field value into something we can work with. */
function parseInlineField(value) {
    // The stripped literal field parser understands all of the non-array/non-object fields and can parse them for us.
    // Inline field objects are not currently supported; inline array objects have to be handled by the parser
    // separately.
    let inline = EXPRESSION.inlineField.parse(value);
    if (inline.status)
        return inline.value;
    else
        return Fields.string(value);
}
/** Matches lines of the form "- [ ] <task thing>". */
const TASK_REGEX = /(\s*)[-*]\s*\[([ Xx\.]?)\]\s*(.+)/i;
/**
 * A hacky approach to scanning for all tasks using regex. Does not support multiline
 * tasks yet (though can probably be retro-fitted to do so).
*/
function findTasksInFile(path, file) {
    var _a, _b, _c;
    // Dummy top of the stack that we'll just never get rid of.
    let stack = [];
    stack.push([{ text: "Root", line: -1, path, completed: false, subtasks: [] }, -4]);
    let lineno = 0;
    for (let line of file.replace("\r", "").split("\n")) {
        lineno += 1;
        let match = TASK_REGEX.exec(line);
        if (!match)
            continue;
        let indent = match[1].replace("\t", "    ").length;
        let task = {
            text: match[3],
            completed: match[2] == 'X' || match[2] == 'x',
            path,
            line: lineno,
            subtasks: []
        };
        while (indent <= ((_b = (_a = stack.last()) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : -4))
            stack.pop();
        (_c = stack.last()) === null || _c === void 0 ? void 0 : _c[0].subtasks.push(task);
        stack.push([task, indent]);
    }
    // Return everything under the root, which should be all tasks.
    return stack[0][0].subtasks;
}
/** Extract markdown metadata from the given Obsidian markdown file. */
function extractMarkdownMetadata(file, vault, cache, inlineRegex) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let tags = new Set();
        let aliases = new Set();
        let fields = new Map();
        // Pull out the easy-to-extract information from the cache first...
        let fileCache = cache.getFileCache(file);
        if (fileCache) {
            // File tags, including front-matter and in-file tags.
            (_a = obsidian.getAllTags(fileCache)) === null || _a === void 0 ? void 0 : _a.forEach(t => tags.add(t));
            // Front-matter file tags, aliases, AND frontmatter properties.
            if (fileCache.frontmatter) {
                let frontTags = obsidian.parseFrontMatterTags(fileCache.frontmatter);
                if (frontTags) {
                    for (let tag of frontTags) {
                        if (!tag.startsWith("#"))
                            tag = "#" + tag;
                        tags.add(tag);
                    }
                }
                let frontAliases = obsidian.parseFrontMatterAliases(fileCache.frontmatter);
                if (frontAliases) {
                    for (let alias of frontAliases)
                        aliases.add(alias);
                }
                let frontFields = parseFrontmatter(fileCache.frontmatter);
                for (let [key, value] of frontFields.value)
                    fields.set(key, value);
            }
        }
        // Grab links from the frontmatter cache.
        let links = [];
        if (file.path in cache.resolvedLinks) {
            for (let resolved in cache.resolvedLinks[file.path]) {
                links.push({
                    type: 'file',
                    path: resolved,
                    display: resolved,
                    embed: false
                });
            }
        }
        // Trawl through file contents to locate custom inline file content...
        let fileContents = yield vault.read(file);
        for (let line of fileContents.split("\n")) {
            line = line.trim();
            let match = inlineRegex.exec(line);
            if (!match)
                continue;
            let inlineField = parseInlineField(match[2]);
            fields.set(match[1].trim(), inlineField);
            fields.set(canonicalizeVarName(match[1].trim()), inlineField);
        }
        // And extract tasks...
        let tasks = findTasksInFile(file.path, fileContents);
        return new PageMetadata(file.path, {
            fields, tags, aliases, links, tasks,
            ctime: luxon.DateTime.fromMillis(file.stat.ctime),
            mtime: luxon.DateTime.fromMillis(file.stat.mtime),
            size: file.stat.size,
            day: findDate(file.path, fields)
        });
    });
}

/** A generic index which indexes variables of the form key -> value[], allowing both forward and reverse lookups. */
class IndexMap {
    /** Create a new, empty index map. */
    constructor() {
        this.map = new Map();
        this.invMap = new Map();
    }
    /** Returns all values for the given key. */
    get(key) {
        let result = this.map.get(key);
        if (result) {
            return new Set(result);
        }
        else {
            return new Set();
        }
    }
    /** Returns all keys that reference the given key. */
    getInverse(value) {
        let result = this.invMap.get(value);
        if (result) {
            return new Set(result);
        }
        else {
            return new Set();
        }
    }
    set(key, values) {
        var _a;
        if (this.map.has(key))
            this.delete(key);
        this.map.set(key, values);
        for (let value of values) {
            if (!this.invMap.has(value))
                this.invMap.set(value, new Set());
            (_a = this.invMap.get(value)) === null || _a === void 0 ? void 0 : _a.add(key);
        }
        return this;
    }
    /** Clears all values for the given key so they can be re-added. */
    delete(key) {
        var _a;
        let oldValues = this.map.get(key);
        if (!oldValues)
            return false;
        this.map.delete(key);
        for (let value of oldValues) {
            (_a = this.invMap.get(value)) === null || _a === void 0 ? void 0 : _a.delete(key);
        }
        return true;
    }
    /** Rename all references to the given key to a new value. */
    rename(oldKey, newKey) {
        let oldValues = this.map.get(oldKey);
        if (!oldValues)
            return false;
        this.delete(oldKey);
        this.set(newKey, oldValues);
        return true;
    }
    /** Clear the entire index. */
    clear() {
        this.map.clear();
        this.invMap.clear();
    }
}
/** Aggregate index which has several sub-indices and will initialize all of them. */
class FullIndex {
    constructor(vault, metadataCache) {
        this.vault = vault;
        this.metadataCache = metadataCache;
        this.pages = new Map();
        this.tags = new IndexMap();
        this.etags = new IndexMap();
        this.links = new IndexMap();
        this.reloadQueue = [];
        this.reloadSet = new Set();
        // Background task which regularly checks for reloads (with debouncing).
        this.reloadHandle = window.setInterval(() => this.reloadInternal(), FullIndex.RELOAD_INTERVAL);
        // The metadatda cache is updated on file changes.
        metadataCache.on("changed", file => this.queueReload(file));
        // Renames do not set off the metadata cache; catch these explicitly.
        vault.on("rename", (file, oldPath) => {
            let oldPage = this.pages.get(oldPath);
            if (oldPage) {
                this.pages.delete(oldPath);
                this.pages.set(file.path, oldPage);
            }
            this.tags.rename(oldPath, file.path);
            this.etags.rename(oldPath, file.path);
            this.links.rename(oldPath, file.path);
        });
        // File creation does cause a metadata change, but deletes do not. Clear the caches for this.
        vault.on("delete", file => {
            if (!(file instanceof obsidian.TFile))
                return;
            file = file;
            this.pages.delete(file.path);
            this.tags.delete(file.path);
            this.etags.delete(file.path);
            this.links.delete(file.path);
        });
    }
    /** Generate a full index from the given vault. */
    static generate(vault, cache) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = new FullIndex(vault, cache);
            yield index.initialize();
            return Promise.resolve(index);
        });
    }
    /** I am not a fan of a separate "construct/initialize" step, but constructors cannot be async. */
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            // Prefix listens to file creation/deletion/rename, and not modifies, so we let it set up it's own listeners.
            this.prefix = yield PrefixIndex.generate(this.vault);
            // Traverse all markdown files & fill in initial data.
            let start = new Date().getTime();
            for (let file of this.vault.getMarkdownFiles())
                this.reloadInternalFile(file);
            console.log("Dataview task & metadata indices prepared in %.3fs.", (new Date().getTime() - start) / 1000.0);
        });
    }
    /** Queue the file for reloading; several fast reloads in a row will be debounced. */
    queueReload(file) {
        if (this.reloadSet.has(file.path))
            return;
        this.reloadSet.add(file.path);
        this.reloadQueue.push(file);
    }
    /** Utility method which regularly checks the reload queue. */
    reloadInternal() {
        return __awaiter(this, void 0, void 0, function* () {
            let copy = Array.from(this.reloadQueue);
            this.reloadSet.clear();
            this.reloadQueue = [];
            for (let file of copy)
                this.reloadInternalFile(file);
        });
    }
    reloadInternalFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Hard-coding the inline field syntax here LMAO >.>
            let newPageMeta = yield extractMarkdownMetadata(file, this.vault, this.metadataCache, /[_\*~`]*([0-9\w\p{Letter}\p{Emoji_Presentation}][-0-9\w\p{Letter}\p{Emoji_Presentation}\s]*)[_\*~`]*\s*::\s*(.+)/);
            this.pages.set(file.path, newPageMeta);
            this.tags.set(file.path, newPageMeta.fullTags());
            this.etags.set(file.path, newPageMeta.tags);
            this.links.set(file.path, new Set(newPageMeta.links.map(l => l.path)));
        });
    }
}
/** How often the reload queue is checked for reloads. */
FullIndex.RELOAD_INTERVAL = 2000;
/** A node in the prefix tree. */
class PrefixIndexNode {
    constructor(element) {
        this.element = element;
        this.files = new Set();
        this.totalCount = 0;
        this.children = new Map();
    }
    static add(root, path) {
        let parts = path.split("/");
        let node = root;
        for (let index = 0; index < parts.length - 1; index++) {
            if (!node.children.has(parts[index]))
                node.children.set(parts[index], new PrefixIndexNode(parts[index]));
            node.totalCount += 1;
            node = node.children.get(parts[index]);
        }
        node.totalCount += 1;
        node.files.add(path);
    }
    static remove(root, path) {
        let parts = path.split("/");
        let node = root;
        let nodes = [];
        for (let index = 0; index < parts.length - 1; index++) {
            if (!node.children.has(parts[index]))
                return;
            nodes.push(node);
            node = node.children.get(parts[index]);
        }
        if (!node.files.has(path))
            return;
        node.files.delete(path);
        node.totalCount -= 1;
        for (let p of nodes)
            p.totalCount -= 1;
    }
    static find(root, prefix) {
        if (prefix.length == 0 || prefix == '/')
            return root;
        let parts = prefix.split("/");
        let node = root;
        for (let index = 0; index < parts.length; index++) {
            if (!node.children.has(parts[index]))
                return null;
            node = node.children.get(parts[index]);
        }
        return node;
    }
    static gather(root) {
        let result = new Set();
        PrefixIndexNode.gatherRec(root, result);
        return result;
    }
    static gatherRec(root, output) {
        for (let file of root.files)
            output.add(file);
        for (let child of root.children.values())
            this.gatherRec(child, output);
    }
}
/** Indexes files by their full prefix - essentially a simple prefix tree. */
class PrefixIndex {
    constructor(vault, root) {
        this.vault = vault;
        this.root = root;
        // TODO: I'm not sure if there is an event for all files in a folder, or just the folder.
        // I'm assuming the former naively for now until I inevitably fix it.
        this.vault.on("delete", file => {
            PrefixIndexNode.remove(this.root, file.path);
        });
        this.vault.on("create", file => {
            PrefixIndexNode.add(this.root, file.path);
        });
        this.vault.on("rename", (file, old) => {
            PrefixIndexNode.remove(this.root, old);
            PrefixIndexNode.add(this.root, file.path);
        });
    }
    static generate(vault) {
        return __awaiter(this, void 0, void 0, function* () {
            let root = new PrefixIndexNode("");
            let timeStart = new Date().getTime();
            // First time load...
            for (let file of vault.getMarkdownFiles()) {
                PrefixIndexNode.add(root, file.path);
            }
            let totalTimeMs = new Date().getTime() - timeStart;
            console.log(`Dataview: Parsed all file prefixes (${totalTimeMs / 1000.0}s)`);
            return Promise.resolve(new PrefixIndex(vault, root));
        });
    }
    get(prefix) {
        let node = PrefixIndexNode.find(this.root, prefix);
        if (node == null || node == undefined)
            return new Set();
        return PrefixIndexNode.gather(node);
    }
}

/** Holds DOM events for a rendered task view, including check functionality. */
class TaskViewLifecycle extends obsidian.MarkdownRenderChild {
    constructor(vault, container) {
        super(container);
        this.vault = vault;
        this.containerEl = container;
    }
    onload() {
        let checkboxes = this.containerEl.querySelectorAll("input");
        for (let index = 0; index < checkboxes.length; index++) {
            const checkbox = checkboxes.item(index);
            this.registerHandler(checkbox);
        }
    }
    registerHandler(checkbox) {
        this.registerDomEvent(checkbox, "click", event => {
            var _a, _b, _c, _d;
            let file = checkbox.dataset["file"];
            let lineno = checkbox.dataset["lineno"];
            let text = checkbox.dataset["text"];
            if (!file || !lineno || !text)
                return;
            if (!checkbox.hasAttribute('checked')) {
                let newCheckbox = createCheckbox(file, parseInt(lineno), text, true);
                (_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.addClass('is-checked');
                (_b = checkbox.parentElement) === null || _b === void 0 ? void 0 : _b.replaceChild(newCheckbox, checkbox);
                this.registerHandler(newCheckbox);
                setTaskCheckedInFile(this.vault, file, parseInt(lineno), text, false, true);
            }
            else {
                let newCheckbox = createCheckbox(file, parseInt(lineno), text, false);
                (_c = checkbox.parentElement) === null || _c === void 0 ? void 0 : _c.removeClass('is-checked');
                (_d = checkbox.parentElement) === null || _d === void 0 ? void 0 : _d.replaceChild(newCheckbox, checkbox);
                this.registerHandler(newCheckbox);
                setTaskCheckedInFile(this.vault, file, parseInt(lineno), text, true, false);
            }
        });
    }
}
/** Render tasks from multiple files. */
function renderFileTasks(container, tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let [path, list] of tasks.entries()) {
            let basepath = path.replace(".md", "");
            let header = container.createEl('h4');
            header.appendChild(createAnchor(getFileName(basepath), basepath, true));
            let div = container.createDiv();
            yield renderTasks(div, list);
        }
    });
}
/** Render a list of tasks as a single list. */
function renderTasks(container, tasks) {
    return __awaiter(this, void 0, void 0, function* () {
        let ul = container.createEl('ul', { cls: 'contains-task-list' });
        for (let task of tasks) {
            let li = ul.createEl('li', { cls: 'task-list-item' });
            if (task.completed) {
                li.addClass('is-checked');
            }
            // Render the text as markdown so that bolds, links, and other things work properly.
            yield obsidian.MarkdownRenderer.renderMarkdown(task.text, li, task.path, new obsidian.Component());
            // Unwrap the paragraph element that is created.
            let paragraph = li.querySelector("p");
            if (paragraph) {
                li.innerHTML = paragraph.innerHTML;
                paragraph.remove();
            }
            let check = createCheckbox(task.path, task.line, task.text, task.completed);
            li.prepend(check);
            if (task.subtasks.length > 0) {
                renderTasks(li, task.subtasks);
            }
        }
    });
}
function createCheckbox(file, line, text, checked) {
    let check = document.createElement("input");
    check.addClass('task-list-item-checkbox');
    check.type = 'checkbox';
    check.dataset["file"] = file;
    check.dataset["lineno"] = "" + line;
    // This field is technically optional, but is provided to double-check
    // we are editing the right line!
    check.dataset["text"] = text;
    if (checked) {
        check.setAttribute('checked', '');
    }
    return check;
}
/** Check a task in a file by rewriting it. */
function setTaskCheckedInFile(vault, path, taskLine, taskText, wasChecked, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (check == wasChecked)
            return;
        let text = yield vault.adapter.read(path);
        let splitText = text.replace("\r", "").split("\n");
        if (splitText.length < taskLine)
            return;
        let match = TASK_REGEX.exec(splitText[taskLine - 1]);
        if (!match)
            return;
        let foundText = match[3];
        let foundCompleted = match[2] == 'X' || match[2] == 'x';
        if (taskText.trim() != foundText.trim())
            return;
        if (wasChecked != foundCompleted)
            return;
        if (check) {
            splitText[taskLine - 1] = splitText[taskLine - 1]
                .replace("- [ ]", "- [X]")
                .replace("- []", "- [X]")
                .replace("-[]", "- [X]");
        }
        else {
            splitText[taskLine - 1] = splitText[taskLine - 1]
                .replace("- [X]", "- [ ]")
                .replace("-[X]", "- [ ]")
                .replace("- [x]", "- [ ]")
                .replace("-[x]", "- [ ]");
        }
        let hasRn = text.contains("\r");
        if (hasRn) {
            let final = splitText.join("\r\n");
            yield vault.adapter.write(path, final);
        }
        else {
            let final = splitText.join("\n");
            yield vault.adapter.write(path, final);
        }
    });
}

/** Evaluates fields in the expression language. */
/** The context in which expressions are evaluated in. */
class Context {
    constructor(linkHandler, parent = undefined, namespace = Fields.emptyObject(), binaryOps = BINARY_OPS, functions = FUNCTIONS) {
        this.namespace = namespace;
        this.parent = parent;
        this.binaryOps = binaryOps;
        this.functions = functions;
        this.linkHandler = linkHandler;
    }
    /** Add a field to the context. */
    set(name, value) {
        this.namespace.value.set(name, value);
        return this;
    }
    /** Attempts to resolve a variable name in the context. */
    get(name) {
        var _a;
        if (!this.namespace.value.has(name) && this.parent != undefined)
            return this.parent.get(name);
        return (_a = this.namespace.value.get(name)) !== null && _a !== void 0 ? _a : Fields.NULL;
    }
    /** Evaluate a field in this context, returning the final resolved value. */
    evaluate(field) {
        var _a, _b;
        switch (field.type) {
            case "literal": return field;
            case "variable": return this.get(field.name);
            case "binaryop":
                let left = this.evaluate(field.left);
                if (typeof left === 'string')
                    return left;
                let right = this.evaluate(field.right);
                if (typeof right === 'string')
                    return right;
                return this.binaryOps.evaluate(field.op, left, right, this);
            case "negated":
                let child = this.evaluate(field.child);
                if (typeof child === 'string')
                    return child;
                return Fields.bool(!Fields.isTruthy(child));
            case "function":
                let args = [];
                for (let arg of field.arguments) {
                    let resolved = this.evaluate(arg);
                    if (typeof resolved === 'string')
                        return resolved;
                    args.push(resolved);
                }
                // TODO: Add later support for lambdas as an additional thing you can call.
                switch (field.func.type) {
                    case "variable":
                        return this.functions.evaluate(field.func.name, args, this);
                    default:
                        return `Cannot call field type '${field.func}' as a function`;
                }
            case "index":
                // Special-case "row" to refer to the namespace itself, to bypass keyword restrictions.
                let obj = field.object.type == "variable" && field.object.name == "row" ? this.namespace : this.evaluate(field.object);
                if (typeof obj === 'string')
                    return obj;
                let index = this.evaluate(field.index);
                if (typeof index === 'string')
                    return index;
                switch (obj.valueType) {
                    case "object":
                        if (index.valueType != 'string')
                            return "can only index into objects with strings (a.b or a[\"b\"])";
                        return (_a = obj.value.get(index.value)) !== null && _a !== void 0 ? _a : Fields.NULL;
                    case "link":
                        if (index.valueType != 'string')
                            return "can only index into links with strings (a.b or a[\"b\"])";
                        let linkValue = this.linkHandler.resolve(obj.value.path);
                        if (linkValue.valueType == 'null')
                            return Fields.NULL;
                        return (_b = linkValue.value.get(index.value)) !== null && _b !== void 0 ? _b : Fields.NULL;
                    case "array":
                        if (index.valueType == 'number') {
                            if (index.value >= obj.value.length || index.value < 0)
                                return Fields.NULL;
                            return obj.value[index.value];
                        }
                        else if (index.valueType == 'string') {
                            let result = [];
                            for (let value of obj.value) {
                                let next = this.evaluate(Fields.index(value, index));
                                if (typeof next == "string")
                                    continue;
                                result.push(next);
                            }
                            return Fields.array(result);
                        }
                        else {
                            return "Array indexing requires either a number (to get a specific element), or a string (to map all elements inside the array)";
                        }
                    case "string":
                        if (index.valueType != 'number')
                            return "string indexing requires a numeric index (string[index])";
                        if (index.value >= obj.value.length || index.value < 0)
                            return Fields.NULL;
                        return Fields.string(obj.value[index.value]);
                    case "date":
                        if (index.valueType != 'string')
                            return "date indexing requires a string representing the unit";
                        switch (index.value) {
                            case "year": return Fields.number(obj.value.year);
                            case "month": return Fields.number(obj.value.month);
                            case "weekyear": return Fields.number(obj.value.weekNumber);
                            case "week": return Fields.number(Math.floor(obj.value.day / 7) + 1);
                            case "weekday": return Fields.number(obj.value.weekday);
                            case "day": return Fields.number(obj.value.day);
                            case "hour": return Fields.number(obj.value.hour);
                            case "minute": return Fields.number(obj.value.minute);
                            case "second": return Fields.number(obj.value.second);
                            case "millisecond": return Fields.number(obj.value.millisecond);
                            default: return Fields.NULL;
                        }
                    case "duration":
                        if (index.valueType != 'string')
                            return "duration indexing requires a string representing the unit";
                        switch (index.value) {
                            case "year":
                            case "years": return Fields.number(obj.value.years);
                            case "month":
                            case "months": return Fields.number(obj.value.months);
                            case "weeks": return Fields.number(obj.value.weeks);
                            case "day":
                            case "days": return Fields.number(obj.value.days);
                            case "hour":
                            case "hours": return Fields.number(obj.value.hours);
                            case "minute":
                            case "minutes": return Fields.number(obj.value.minutes);
                            case "second":
                            case "seconds": return Fields.number(obj.value.seconds);
                            case "millisecond":
                            case "milliseconds": return Fields.number(obj.value.milliseconds);
                            default: return Fields.NULL;
                        }
                    default:
                        return Fields.NULL;
                }
        }
    }
    /** Deep copy a context. */
    copy() {
        return new Context(this.linkHandler, this.parent, Fields.deepCopy(this.namespace), this.binaryOps, this.functions);
    }
}
/** Negate a binary operation; i.e., if op(a, b) = true, then negateOp(op)(a, b) = false. */
function negateOp(op) {
    return (a, b) => {
        let res = op(a, b);
        if (typeof res == 'string')
            return res;
        return Fields.bool(!Fields.isTruthy(res));
    };
}
function negateOpContext(op) {
    return (a, b, c) => {
        let res = op(a, b, c);
        if (typeof res == 'string')
            return res;
        return Fields.bool(!Fields.isTruthy(res));
    };
}
/** Class which allows for type-safe implementation of binary ops. */
class BinaryOpHandler {
    constructor() {
        this.map = new Map();
    }
    static create() {
        return new BinaryOpHandler();
    }
    /** Add a new handler for the specified types to this handler. */
    add(op, first, second, func) {
        return this.addContext(op, first, second, (a, b, _c) => func(a, b));
    }
    addContext(op, first, second, func) {
        if (this.map.has(BinaryOpHandler.repr(op, first, second)))
            throw Error(`Encountered duplicate handler for ${first} ${op} ${second}; remove one of them`);
        // How's this for some gnarly type-check hackery.
        this.map.set(BinaryOpHandler.repr(op, first, second), func);
        return this;
    }
    addComparison(type, ops) {
        this.add('=', type, type, ops.equals);
        this.add('!=', type, type, negateOp(ops.equals));
        this.add('<', type, type, ops.le);
        this.add('<=', type, type, negateOp((a, b) => ops.le(b, a)));
        this.add('>', type, type, (a, b) => ops.le(b, a));
        this.add('>=', type, type, negateOp(ops.le));
        return this;
    }
    addComparisonContext(type, ops) {
        this.addContext('=', type, type, ops.equals);
        this.addContext('!=', type, type, negateOpContext(ops.equals));
        this.addContext('<', type, type, ops.le);
        this.addContext('<=', type, type, negateOpContext((a, b, c) => ops.le(b, a, c)));
        this.addContext('>', type, type, (a, b, c) => ops.le(b, a, c));
        this.addContext('>=', type, type, negateOpContext(ops.le));
        return this;
    }
    /**
     * Add a commutative operator for the specified types to this handler; in addition to adding the normal
     * (op, T1, T2) mapping, it additionally adds (op, T2, T1). Only needed if T1 and T2 are different types.
     */
    addComm(op, first, second, func) {
        this.add(op, first, second, func);
        this.add(op, second, first, (a, b) => func(b, a));
        return this;
    }
    /** Attempt to evaluate the given binary operator on the two literal fields. */
    evaluate(op, left, right, context) {
        let handler = this.map.get(BinaryOpHandler.repr(op, left.valueType, right.valueType));
        if (handler)
            return handler(left, right, context);
        // Right-'*' fallback:
        let handler2 = this.map.get(BinaryOpHandler.repr(op, left.valueType, '*'));
        if (handler2)
            return handler2(left, right, context);
        // Left-'*' fallback:
        let handler3 = this.map.get(BinaryOpHandler.repr(op, '*', right.valueType));
        if (handler3)
            return handler3(left, right, context);
        // Double '*' fallback.
        let handler4 = this.map.get(BinaryOpHandler.repr(op, '*', '*'));
        if (handler4)
            return handler4(left, right, context);
        return `Operator '${op}' is not supported for '${left.valueType}' and '${right.valueType}`;
    }
    static repr(op, left, right) {
        return `${op},${left},${right}`;
    }
}
/** The default binary operator implementations. */
const BINARY_OPS = BinaryOpHandler.create()
    // Numeric operations.
    .add('+', 'number', 'number', (a, b) => Fields.number(a.value + b.value))
    .add('-', 'number', 'number', (a, b) => Fields.number(a.value - b.value))
    .add('*', 'number', 'number', (a, b) => Fields.number(a.value * b.value))
    .add('/', 'number', 'number', (a, b) => Fields.number(a.value / b.value))
    .addComparison('number', {
    equals: (a, b) => Fields.bool(a.value == b.value),
    le: (a, b) => Fields.bool(a.value < b.value)
})
    // String operations.
    .add('+', 'string', '*', (a, b) => Fields.literal('string', a.value + b.value))
    .add('+', '*', 'string', (a, b) => Fields.literal('string', a.value + b.value))
    .addComm("*", 'string', 'number', (a, b) => Fields.literal('string', a.value.repeat(Math.abs(b.value))))
    .addComparison('string', {
    equals: (a, b) => Fields.bool(a.value.localeCompare(b.value) == 0),
    le: (a, b) => Fields.bool(a.value.localeCompare(b.value) < 0)
})
    // Date Operations.
    .add("-", 'date', 'date', (a, b) => {
    return Fields.literal('duration', normalizeDuration(a.value.diff(b.value, ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'])));
})
    .addComparison('date', {
    equals: (a, b) => Fields.bool(a.value.equals(b.value)),
    le: (a, b) => Fields.bool(a.value < b.value)
})
    // Duration operations.
    .add('+', 'duration', 'duration', (a, b) => Fields.literal('duration', normalizeDuration(a.value.plus(b.value))))
    .add('-', 'duration', 'duration', (a, b) => Fields.literal('duration', normalizeDuration(a.value.minus(b.value))))
    .addComparison('duration', {
    equals: (a, b) => Fields.bool(a.value.equals(b.value)),
    le: (a, b) => Fields.bool(a.value < b.value)
})
    // Date-Duration operations.
    .addComm('+', 'date', 'duration', (a, b) => Fields.literal('date', a.value.plus(b.value)))
    .add('-', 'date', 'duration', (a, b) => Fields.literal('date', a.value.minus(b.value)))
    // Array operations.
    .add('+', 'array', 'array', (a, b) => Fields.array([].concat(a.value).concat(b.value)))
    // Object operations.
    .add('+', 'object', 'object', (a, b) => {
    let result = new Map();
    for (let [key, value] of a.value) {
        result.set(key, value);
    }
    for (let [key, value] of b.value) {
        result.set(key, value);
    }
    return Fields.object(result);
})
    // Link operations.
    .addComparisonContext('link', {
    equals: (a, b, c) => Fields.bool(c.linkHandler.normalize(a.value.path) == c.linkHandler.normalize(b.value.path)),
    le: (a, b, c) => Fields.bool(c.linkHandler.normalize(a.value.path) < c.linkHandler.normalize(b.value.path))
})
    // Boolean operations.
    .add('&', '*', '*', (a, b) => Fields.literal('boolean', Fields.isTruthy(a) && Fields.isTruthy(b)))
    .add('|', '*', '*', (a, b) => Fields.literal('boolean', Fields.isTruthy(a) || Fields.isTruthy(b)))
    .addComparison('*', {
    equals: (a, b) => Fields.bool(false),
    le: (a, b) => Fields.bool(a.valueType < b.valueType)
})
    // Null comparisons.
    .addComparison('null', {
    equals: (a, b) => Fields.bool(true),
    le: (a, b) => Fields.bool(false)
})
    // Fall-back comparisons-to-null (assumes null is less than anything else).
    .add('<', 'null', '*', (a, b) => Fields.literal('boolean', true))
    .add('<', '*', 'null', (a, b) => Fields.literal('boolean', false))
    .add('>', 'null', '*', (a, b) => Fields.literal('boolean', false))
    .add('>', '*', 'null', (a, b) => Fields.literal('boolean', true))
    .add('>=', 'null', '*', (a, b) => Fields.literal('boolean', false))
    .add('>=', '*', 'null', (a, b) => Fields.literal('boolean', true))
    .add('<=', 'null', '*', (a, b) => Fields.literal('boolean', true))
    .add('<=', '*', 'null', (a, b) => Fields.literal('boolean', false));
class FunctionHandler {
    constructor() {
        this.map = new Map();
        this.vectorized = new Map();
    }
    addFunction(func) {
        var _a;
        if (!this.map.has(func.name))
            this.map.set(func.name, []);
        (_a = this.map.get(func.name)) === null || _a === void 0 ? void 0 : _a.push(func);
        return this;
    }
    add1(name, arg, impl) {
        return this.addFunction({
            name,
            args: [arg],
            impl: (args, context) => impl(args[0], context)
        });
    }
    add2(name, arg1, arg2, impl) {
        return this.addFunction({
            name,
            args: [arg1, arg2],
            impl: (args, context) => impl(args[0], args[1], context)
        });
    }
    add3(name, arg1, arg2, arg3, impl) {
        return this.addFunction({
            name,
            args: [arg1, arg2, arg3],
            impl: (args, context) => impl(args[0], args[1], args[2], context)
        });
    }
    addVararg(name, impl) {
        return this.addFunction({ name, impl });
    }
    vectorize(name, positions) {
        this.vectorized.set(name, positions);
        return this;
    }
    evaluate(name, args, context) {
        var _a, _b;
        if (!this.map.has(name))
            return `Unrecognized function '${name}'`;
        let vectorize = (_a = this.vectorized.get(name)) !== null && _a !== void 0 ? _a : [];
        // Check for lists in vectorize positions.
        for (let pos of vectorize) {
            if (pos >= args.length)
                continue;
            let value = args[pos];
            if (value.valueType != "array")
                continue;
            let array = [];
            let copy = [].concat(args);
            for (let val of value.value) {
                copy[pos] = val;
                let result = this.evaluate(name, copy, context);
                if (typeof result == "string")
                    return result;
                array.push(result);
            }
            return Fields.array(array);
        }
        // Vectorizing is done, we can just typecheck now.
        outer: for (let func of (_b = this.map.get(name)) !== null && _b !== void 0 ? _b : []) {
            if (!func.args)
                return func.impl(args, context);
            if (args.length != func.args.length)
                continue;
            for (let index = 0; index < args.length; index++) {
                if (func.args[index] == '*')
                    continue;
                if (func.args[index] != args[index].valueType)
                    continue outer;
            }
            return func.impl(args, context);
        }
        return `Failed to find implementation of '${name}' for arguments: ${args.map(e => e.valueType).join(", ")}`;
    }
}
const FUNCTIONS = new FunctionHandler()
    .add1("length", "array", (field, _context) => Fields.number(field.value.length))
    .add1("length", "object", (field, _context) => Fields.number(field.value.size))
    .add1("length", "string", (field, _context) => Fields.number(field.value.length))
    .add1("length", "*", (field, _context) => Fields.number(0))
    .addVararg("list", (args, _context) => Fields.array(args))
    .addVararg("array", (args, _context) => Fields.array(args))
    .addVararg("object", (args, _context) => {
    if (args.length % 2 != 0)
        return "object(key1, value1, ...) requires an even number of arguments";
    let result = new Map();
    for (let index = 0; index < args.length; index += 2) {
        let key = args[index];
        if (key.valueType != "string")
            return "keys should be of type string for object(key1, value1, ...)";
        result.set(key.value, args[index + 1]);
    }
    return Fields.object(result);
})
    .add1("link", "string", (field, context) => Fields.link(Link.file(context.linkHandler.normalize(field.value), false)))
    .add1("link", "link", (field, _context) => field)
    .add1("link", "null", (_field, _context) => Fields.NULL)
    .add2("link", "string", "string", (field, display, context) => {
    return Fields.link(Link.file(context.linkHandler.normalize(field.value), false, display.value));
})
    .add2("link", "link", "string", (field, display, _context) => {
    return Fields.link(field.value.withDisplay(display.value));
})
    .vectorize("link", [0])
    .add1("elink", "string", (field, context) => {
    let elem = document.createElement('a');
    elem.textContent = field.value;
    elem.rel = "noopener";
    elem.target = "_blank";
    elem.classList.add("external-link");
    elem.href = field.value;
    return Fields.html(elem);
})
    .add2("elink", "string", "string", (url, name, context) => {
    let elem = document.createElement('a');
    elem.textContent = name.value;
    elem.rel = "noopener";
    elem.target = "_blank";
    elem.classList.add("external-link");
    elem.href = url.value;
    return Fields.html(elem);
})
    .vectorize("elink", [0])
    .add1("date", "string", (obj, context) => {
    let parsedDate = EXPRESSION.date.parse(obj.value);
    if (parsedDate.status)
        return Fields.literal('date', parsedDate.value);
    else
        return Fields.NULL;
})
    .add1("date", "date", (obj, context) => obj)
    .add1("date", "link", (obj, context) => {
    // Try to parse from the display...
    if (obj.value.display) {
        let parsedDate = EXPRESSION.date.parse(obj.value.display);
        if (parsedDate.status)
            return Fields.date(parsedDate.value);
    }
    // Then try to parse from the path...
    let parsedDate = EXPRESSION.date.parse(obj.value.path);
    if (parsedDate.status)
        return Fields.date(parsedDate.value);
    // Then pull it from the file.
    let resolved = context.linkHandler.resolve(obj.value.path);
    if (resolved.valueType != "null") {
        let maybeDay = context.evaluate(Fields.index(resolved, Fields.indexVariable("file.day")));
        if (typeof maybeDay != "string")
            return maybeDay;
    }
    return Fields.NULL;
})
    .vectorize("date", [0])
    .add1("number", "string", (obj, context) => {
    let numMatch = /(-?[0-9]+(\.[0-9]+)?)/.exec(obj.value.trim());
    if (numMatch) {
        let parsed = parseFloat(numMatch[1]);
        if (!isNaN(parsed))
            return Fields.number(parsed);
    }
    return Fields.NULL;
})
    .add1("number", "number", (obj, context) => obj)
    .vectorize("number", [0])
    .add1("round", "number", (obj, context) => {
    return Fields.number(Math.round(obj.value));
})
    .add2("round", "number", "number", (obj, decimals, context) => {
    if (decimals.value <= 0)
        return Fields.number(Math.round(obj.value));
    return Fields.number(parseFloat(obj.value.toFixed(decimals.value)));
})
    .add1("striptime", "date", (obj, context) => Fields.literal('date', luxon.DateTime.fromObject({ year: obj.value.year, month: obj.value.month, day: obj.value.day })))
    .vectorize("striptime", [0])
    .add2("contains", "object", "string", (obj, key, context) => Fields.bool(obj.value.has(key.value)))
    .add2("contains", "link", "string", (link, key, context) => {
    let linkValue = context.linkHandler.resolve(link.value.path);
    if (linkValue.valueType == 'null')
        return Fields.bool(false);
    return Fields.bool(linkValue.value.has(key.value));
})
    .add2("contains", "array", "*", (array, value, context) => {
    for (let entry of array.value) {
        let matches = context.evaluate(Fields.binaryOp(entry, "=", value));
        if (typeof matches == 'string')
            continue;
        if (Fields.isTruthy(matches))
            return Fields.bool(true);
    }
    return Fields.bool(false);
})
    .add2("contains", "string", "string", (haystack, needle, context) => {
    return Fields.bool(haystack.value.includes(needle.value));
})
    .add2("contains", "*", "*", (a, b, context) => Fields.bool(false))
    .addVararg("extract", (args, context) => {
    var _a;
    if (args.length == 0)
        return "extract(object, key1, ...) requires at least 1 argument";
    let object = args[0];
    switch (object.valueType) {
        case "link":
            object = context.linkHandler.resolve(object.value.path);
            if (object.valueType == 'null')
                return Fields.NULL;
        case "object":
            let result = new Map();
            for (let index = 1; index < args.length; index++) {
                let key = args[index];
                if (key.valueType != "string")
                    return "extract(object, key1, ...) requires string arguments";
                result.set(key.value, (_a = object.value.get(key.value)) !== null && _a !== void 0 ? _a : Fields.NULL);
            }
            return Fields.object(result);
        default:
            return "extract(object, key1, ...) must be called on an object";
    }
})
    .vectorize("extract", [0])
    .add1("reverse", "array", (list, context) => {
    let array = list.value;
    let result = [];
    for (let index = array.length - 1; index >= 0; index--) {
        result.push(array[index]);
    }
    return Fields.array(result);
})
    .add1("reverse", "null", (a, context) => Fields.NULL)
    .add1("sort", "array", (list, context) => {
    let result = [].concat(list.value);
    result.sort((a, b) => {
        let le = context.evaluate(Fields.binaryOp(a, "<", b));
        if (typeof le == "string")
            return 0;
        if (Fields.isTruthy(le))
            return -1;
        let eq = context.evaluate(Fields.binaryOp(a, "=", b));
        if (typeof eq == "string")
            return 0;
        if (Fields.isTruthy(eq))
            return 0;
        return 1;
    });
    return Fields.array(result);
})
    .add1("sort", "null", (a, context) => Fields.NULL)
    .add2("regexmatch", "string", "string", (patternf, fieldf, context) => {
    let pattern = patternf.value, field = fieldf.value;
    if (!pattern.startsWith("^") && !pattern.endsWith("$"))
        pattern = "^" + pattern + "$";
    return Fields.bool(!!field.match(pattern));
})
    .add2("regexmatch", "null", "*", (a, b, context) => Fields.bool(false))
    .add2("regexmatch", "*", "null", (a, b, context) => Fields.bool(false))
    .vectorize("regexmatch", [0, 1])
    .add3("regexreplace", "string", "string", "string", (field, pat, rep, context) => {
    try {
        let reg = new RegExp(pat.value, "g");
        return Fields.string(field.value.replace(reg, rep.value));
    }
    catch (ex) {
        return `Invalid regexp '${pat}' in regexreplace`;
    }
})
    .vectorize("regexreplace", [1, 2])
    .add1("lower", "string", (str, context) => Fields.string(str.value.toLocaleLowerCase())).vectorize("lower", [0])
    .add1("lower", "null", (str, context) => Fields.NULL)
    .add1("upper", "string", (str, context) => Fields.string(str.value.toLocaleUpperCase())).vectorize("upper", [0])
    .add1("upper", "null", (str, context) => Fields.NULL)
    .add3("replace", "string", "string", "string", (str, pat, repr) => {
    return Fields.string(str.value.replace(pat.value, repr.value));
})
    .add3("replace", "null", "*", "*", (a, b, c, context) => Fields.NULL)
    .add3("replace", "*", "null", "*", (a, b, c, context) => Fields.NULL)
    .add3("replace", "*", "*", "null", (a, b, c, context) => Fields.NULL)
    .vectorize("replace", [0, 1, 2])
    // default being vectorized is nice, but maybe you want to use it on a list to default it... in that case use ldefault().
    .add2("default", "*", "*", (f, d, context) => f.valueType == 'null' ? d : f).vectorize("default", [0])
    .add2("ldefault", "*", "*", (f, d, context) => f.valueType == 'null' ? d : f)
    .add3("choice", "*", "*", "*", (b, left, right, context) => {
    if (Fields.isTruthy(b))
        return left;
    else
        return right;
}).vectorize("choice", [0])
    // reduction operators.
    .add2("reduce", "array", "string", (list, opf, context) => {
    if (list.value.length == 0)
        return Fields.NULL;
    let op = opf.value;
    if (op != '+' && op != '-' && op != '*' && op != '/' && op != '&' && op != '|')
        return "reduce(array, op) supports '+', '-', '/', '*', '&', and '|'";
    let value = list.value[0];
    for (let index = 1; index < list.value.length; index++) {
        // Skip null values to reduce the pain of summing over fields that may or may not exist.
        if (list.value[index].valueType == "null")
            continue;
        let next = context.evaluate(Fields.binaryOp(value, op, list.value[index]));
        if (typeof next == "string")
            return next;
        value = next;
    }
    return value;
})
    .add2("reduce", "null", "*", (a, b, context) => Fields.NULL)
    .add2("reduce", "*", "null", (a, b, context) => Fields.NULL)
    .vectorize("reduce", [1])
    .add1("sum", "array", (list, context) => {
    return context.evaluate(Fields.func(Fields.variable("reduce"), [list, Fields.string("+")]));
})
    .add1("sum", "null", (a, context) => Fields.NULL)
    .add1("product", "array", (list, context) => {
    return context.evaluate(Fields.func(Fields.variable("reduce"), [list, Fields.string("*")]));
})
    .add1("product", "null", (a, context) => Fields.NULL)
    .add1("any", "array", (list, context) => Fields.bool(list.value.some(v => Fields.isTruthy(v))))
    .addVararg("any", (args, context) => Fields.bool(args.some(v => Fields.isTruthy(v))))
    .add1("all", "array", (list, context) => Fields.bool(list.value.every(v => Fields.isTruthy(v))))
    .addVararg("all", (args, context) => Fields.bool(args.every(v => Fields.isTruthy(v))))
    .add1("none", "array", (list, context) => Fields.bool(!list.value.some(v => Fields.isTruthy(v))))
    .addVararg("none", (args, context) => Fields.bool(!args.some(v => Fields.isTruthy(v))));

/**
 * Takes a full query and a set of indices, and (hopefully quickly) returns all relevant files.
 */
/** Recursively collect target files from the given source. */
function collectFromSource(source, index, origin) {
    var _a;
    switch (source.type) {
        case "empty": return new Set();
        case "tag": return index.tags.getInverse(source.tag);
        case "folder": return index.prefix.get(source.folder);
        case "link":
            let fullPath = (_a = index.metadataCache.getFirstLinkpathDest(source.file, origin)) === null || _a === void 0 ? void 0 : _a.path;
            if (!fullPath)
                return `Could not resolve link "${source.file}" during link lookup - does it exist?`;
            if (source.direction === 'incoming') {
                // To find all incoming links (i.e., things that link to this), use the index that Obsidian provides.
                // TODO: Use an actual index so this isn't a fullscan.
                let resolved = index.metadataCache.resolvedLinks;
                let incoming = new Set();
                for (let [key, value] of Object.entries(resolved)) {
                    if (fullPath in value)
                        incoming.add(key);
                }
                return incoming;
            }
            else {
                let resolved = index.metadataCache.resolvedLinks;
                if (!(fullPath in resolved))
                    return `Could not find file "${source.file}" during link lookup - does it exist?`;
                return new Set(Object.keys(index.metadataCache.resolvedLinks[fullPath]));
            }
        case "binaryop":
            let left = collectFromSource(source.left, index, origin);
            if (typeof left === 'string')
                return left;
            let right = collectFromSource(source.right, index, origin);
            if (typeof right === 'string')
                return right;
            if (source.op == '&') {
                let result = new Set();
                for (let elem of right) {
                    if (left.has(elem))
                        result.add(elem);
                }
                return result;
            }
            else if (source.op == '|') {
                let result = new Set(left);
                for (let elem of right)
                    result.add(elem);
                return result;
            }
            else {
                return `Unrecognized operator '${source.op}'.`;
            }
        case "negate":
            let child = collectFromSource(source.child, index, origin);
            if (typeof child === 'string')
                return child;
            // TODO: This is obviously very inefficient.
            let allFiles = new Set(index.vault.getMarkdownFiles().map(f => f.path));
            for (let file of child) {
                allFiles.delete(file);
            }
            return allFiles;
    }
}
/** The default link resolver used when creating contexts. */
function defaultLinkHandler(index, origin) {
    return {
        resolve: (link) => {
            let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
            if (!realFile)
                return Fields.NULL;
            let context = createContext(realFile.path, index);
            if (context)
                return context.namespace;
            else
                return Fields.NULL;
        },
        normalize: (link) => {
            var _a;
            let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
            return (_a = realFile === null || realFile === void 0 ? void 0 : realFile.path) !== null && _a !== void 0 ? _a : link;
        },
        exists: (link) => {
            let realFile = index.metadataCache.getFirstLinkpathDest(link, origin);
            return !!realFile;
        }
    };
}
/** Create a fully-filled context representing the given file. */
function createContext(file, index, rootContext = undefined) {
    var _a;
    let page = index.pages.get(file);
    if (!page)
        return undefined;
    // Create a context which uses the cache to look up link info.
    let context = new Context(defaultLinkHandler(index, file), rootContext, Fields.object(page.fields));
    // Fill out per-file metadata.
    let fileMeta = new Map();
    fileMeta.set("path", Fields.string(file));
    fileMeta.set("folder", Fields.string(page.folder()));
    fileMeta.set("name", Fields.string(page.name()));
    fileMeta.set("link", Fields.link(Link.file(file, false)));
    fileMeta.set("outlinks", Fields.array(page.fileLinks().map(l => Fields.link(Link.file(l.path, false)))));
    fileMeta.set("inlinks", Fields.array(Array.from(index.links.getInverse(page.path)).map(l => Fields.link(Link.file(l, false)))));
    fileMeta.set("tags", Fields.array(Array.from(page.fullTags()).map(l => Fields.string(l))));
    fileMeta.set("etags", Fields.array(Array.from(page.tags).map(l => Fields.string(l))));
    fileMeta.set("aliases", Fields.array(Array.from(page.aliases).map(l => Fields.string(l))));
    fileMeta.set("tasks", (_a = Fields.asField(page.tasks)) !== null && _a !== void 0 ? _a : Fields.array([]));
    if (page.day)
        fileMeta.set("day", Fields.date(page.day));
    // Populate file metadata.
    let afile = index.vault.getAbstractFileByPath(file);
    if (afile && afile instanceof obsidian.TFile) {
        let ctime = luxon.DateTime.fromMillis(afile.stat.ctime);
        let mtime = luxon.DateTime.fromMillis(afile.stat.mtime);
        fileMeta.set('ctime', Fields.date(ctime));
        fileMeta.set('cday', Fields.date(luxon.DateTime.fromObject({ year: ctime.year, month: ctime.month, day: ctime.day })));
        fileMeta.set('mtime', Fields.date(mtime));
        fileMeta.set('mday', Fields.date(luxon.DateTime.fromObject({ year: mtime.year, month: mtime.month, day: mtime.day })));
        fileMeta.set('size', Fields.number(afile.stat.size));
        fileMeta.set('ext', Fields.string(afile.extension));
    }
    context.set("file", Fields.object(fileMeta));
    return context;
}
/** Execute a query over the given index, returning all matching rows. */
function execute(query, index, origin) {
    var _a;
    // Start by collecting all of the files that match the 'from' queries.
    let fileset = collectFromSource(query.source, index, origin);
    if (typeof fileset === 'string')
        return fileset;
    let rootContext = new Context(defaultLinkHandler(index, origin));
    // Collect file metadata about the file this query is running in.
    if (origin) {
        let context = createContext(origin, index);
        if (context)
            rootContext.set("this", context.namespace);
    }
    // Then, map all of the files to their corresponding contexts.
    let rows = [];
    for (let file of fileset) {
        let context = createContext(file, index, rootContext);
        if (context)
            rows.push(context);
    }
    for (let operation of query.operations) {
        switch (operation.type) {
            case "limit":
                let amount = rootContext.evaluate(operation.amount);
                if (typeof amount == 'string')
                    return amount;
                if (amount.valueType != 'number')
                    return `LIMIT clauses requires a number - got ${amount.valueType} (value ${amount.value})`;
                if (rows.length > amount.value)
                    rows = rows.slice(0, amount.value);
                break;
            case "where":
                let predicate = operation.clause;
                rows = rows.filter(row => {
                    let value = row.evaluate(predicate);
                    if (typeof value == 'string')
                        return false;
                    return Fields.isTruthy(value);
                });
                break;
            case "sort":
                let sortFields = operation.fields;
                // Sort rows by the sort fields, and then return the finished result.
                rows.sort((a, b) => {
                    for (let index = 0; index < sortFields.length; index++) {
                        let factor = sortFields[index].direction === 'ascending' ? 1 : -1;
                        let aValue = a.evaluate(sortFields[index].field);
                        if (typeof aValue == 'string')
                            return 1;
                        let bValue = b.evaluate(sortFields[index].field);
                        if (typeof bValue == 'string')
                            return -1;
                        let le = BINARY_OPS.evaluate('<', aValue, bValue, a);
                        if (le.value)
                            return factor * -1;
                        let ge = BINARY_OPS.evaluate('>', aValue, bValue, a);
                        if (ge.value)
                            return factor * 1;
                    }
                    return 0;
                });
                break;
            case "flatten":
                let flattenField = operation.field;
                let newRows = [];
                for (let row of rows) {
                    let value = row.evaluate(flattenField.field);
                    if (typeof value == "string")
                        continue;
                    if (value.valueType == "array") {
                        for (let newValue of value.value) {
                            newRows.push(row.copy().set(flattenField.name, newValue));
                        }
                    }
                    else {
                        newRows.push(row);
                        continue;
                    }
                }
                rows = newRows;
                break;
            case "group":
                let groupField = operation.field;
                let groupIndex = new Map();
                for (let row of rows) {
                    let value = row.evaluate(groupField.field);
                    if (typeof value == 'string')
                        continue; // TODO: Maybe put in an '<error>' group?
                    let key = Fields.toLiteralKey(value);
                    if (!groupIndex.has(key))
                        groupIndex.set(key, [value, []]);
                    (_a = groupIndex.get(key)) === null || _a === void 0 ? void 0 : _a[1].push(row);
                }
                let groupedRows = [];
                for (let [_, value] of groupIndex.entries()) {
                    // We are gaurunteed to have at least 1 object since the key was created.
                    let dummyFile = value[1][0].evaluate(Fields.indexVariable("file.path"));
                    // Create a context, assign the grouped field and the 'rows'.
                    let context = new Context(defaultLinkHandler(index, dummyFile.value), rootContext);
                    context.set(groupField.name, value[0]);
                    context.set("rows", Fields.array(value[1].map(c => c.namespace)));
                    // This is a hack because I have a file association per-row, which breaks down in group queries.
                    context.set("file", Fields.object(new Map().set("path", dummyFile)));
                    groupedRows.push(context);
                }
                rows = groupedRows;
                break;
        }
    }
    let hasFileLinks = rows.some(ctx => {
        let field = ctx.evaluate(Fields.indexVariable("file.link"));
        if (typeof field == "string")
            return false;
        return field.valueType == "link";
    });
    switch (query.header.type) {
        case "table":
            let tableFields = [].concat(query.header.fields);
            if (hasFileLinks)
                tableFields.unshift(Fields.named("File", Fields.indexVariable("file.link")));
            return {
                names: tableFields.map(v => v.name),
                data: rows.map(row => {
                    return tableFields.map(f => {
                        let value = row.evaluate(f.field);
                        if (typeof value == "string")
                            return Fields.NULL;
                        return value;
                    });
                })
            };
        case "list":
            let format = query.header.format;
            let listFields = [];
            if (hasFileLinks)
                listFields.push(Fields.named("File", Fields.indexVariable("file.link")));
            if (format)
                listFields.push(Fields.named("Value", format));
            return {
                names: listFields.map(v => v.name),
                data: rows.map(row => {
                    return listFields.map(f => {
                        let value = row.evaluate(f.field);
                        if (typeof value == "string")
                            return Fields.NULL;
                        return value;
                    });
                })
            };
        case "task":
            let filtered = [];
            for (let row of rows) {
                let file = row.evaluate(Fields.indexVariable("file.path"));
                if (typeof file == "string")
                    continue;
                filtered.push([file]);
            }
            return {
                names: ["file"],
                data: filtered
            };
    }
}
/** Execute a single field inline a file, returning the evaluated result. */
function executeInline(field, origin, index) {
    let rootContext = new Context(defaultLinkHandler(index, origin));
    // Collect file metadata about the file this query is running in.
    if (origin) {
        let context = createContext(origin, index);
        if (context)
            rootContext.set("this", context.namespace);
    }
    return rootContext.evaluate(field);
}
function executeTask(query, origin, index) {
    var _a;
    // This is a somewhat silly way to do this for now; call into regular execute on the full query,
    // yielding a list of files. Then map the files to their tasks.
    // TODO: Consider per-task or per-task-block filtering via a more nuanced algorithm.
    let result = execute(query, index, origin);
    if (typeof result === 'string')
        return result;
    let realResult = new Map();
    for (let row of result.data) {
        let file = row[0].value;
        let tasks = (_a = index.pages.get(file)) === null || _a === void 0 ? void 0 : _a.tasks;
        if (tasks == undefined || tasks.length == 0)
            continue;
        realResult.set(file, tasks);
    }
    return realResult;
}

/** Wait for a given predicate (querying at the given interval). */
function waitFor(interval, predicate, cancel) {
    return __awaiter(this, void 0, void 0, function* () {
        if (cancel())
            return false;
        const wait = (ms) => new Promise((re, rj) => setTimeout(re, ms));
        while (!predicate()) {
            if (cancel())
                return false;
            yield wait(interval);
        }
        return true;
    });
}

/** Fancy wrappers for the JavaScript API, used both by external plugins AND by the dataview javascript view. */
/** Implementation of DataArray, minus the dynamic variable access, which is implemented via proxy. */
class DataArrayImpl {
    constructor(values, defaultComparator = Fields.compareValue) {
        this.values = values;
        this.defaultComparator = defaultComparator;
        this.length = values.length;
    }
    static wrap(arr, defaultComparator = Fields.compareValue) {
        return new Proxy(new DataArrayImpl(arr, defaultComparator), DataArrayImpl.ARRAY_PROXY);
    }
    where(predicate) {
        return DataArrayImpl.wrap(this.values.filter(predicate), this.defaultComparator);
    }
    filter(predicate) {
        return this.where(predicate);
    }
    map(f) {
        return DataArrayImpl.wrap(this.values.map(f), this.defaultComparator);
    }
    flatMap(f) {
        let result = [];
        for (let index = 0; index < this.length; index++) {
            let value = f(this.values[index], index, this.values);
            if (!value || value.length == 0)
                continue;
            for (let r of value)
                result.push(r);
        }
        return DataArrayImpl.wrap(result, this.defaultComparator);
    }
    mutate(f) {
        this.values.forEach(f);
        return this;
    }
    limit(count) {
        return DataArrayImpl.wrap(this.values.slice(0, count), this.defaultComparator);
    }
    slice(start, end) {
        return DataArrayImpl.wrap(this.values.slice(start, end), this.defaultComparator);
    }
    sort(key, direction, comparator) {
        if (this.values.length == 0)
            return this;
        let realComparator = comparator !== null && comparator !== void 0 ? comparator : this.defaultComparator;
        // Associate each entry with it's index for the key function, and then do a normal sort.
        let copy = [].concat(this.array()).map((elem, index) => { return { index: index, value: elem }; });
        copy.sort((a, b) => {
            let aKey = key(a.value, a.index, this.values);
            let bKey = key(b.value, b.index, this.values);
            return direction === 'desc' ? -realComparator(aKey, bKey) : realComparator(aKey, bKey);
        });
        return DataArrayImpl.wrap(copy.map(e => e.value), this.defaultComparator);
    }
    groupBy(key, comparator) {
        if (this.values.length == 0)
            return DataArrayImpl.wrap([], this.defaultComparator);
        // JavaScript sucks and we can't make hash maps over arbitrary types (only strings/ints), so
        // we do a poor man algorithm where we SORT, followed by grouping.
        let intermediate = this.sort(key, "asc", comparator);
        comparator = comparator !== null && comparator !== void 0 ? comparator : this.defaultComparator;
        let result = [];
        let currentRow = [intermediate[0]];
        let current = key(intermediate[0], 0, intermediate.values);
        for (let index = 1; index < intermediate.length; index++) {
            let newKey = key(intermediate[index], index, intermediate.values);
            if (comparator(current, newKey) != 0) {
                result.push({ key: current, rows: DataArrayImpl.wrap(currentRow, this.defaultComparator) });
                current = newKey;
                currentRow = [intermediate[index]];
            }
            else {
                currentRow.push(intermediate[index]);
            }
        }
        result.push({ key: current, rows: DataArrayImpl.wrap(currentRow, this.defaultComparator) });
        return DataArrayImpl.wrap(result, this.defaultComparator);
    }
    distinct(key, comparator) {
        if (this.values.length == 0)
            return this;
        let realKey = key !== null && key !== void 0 ? key : (x => x);
        // For similar reasons to groupBy, do a sort and take the first element of each block.
        let intermediate = this
            .map((x, index) => { return { key: realKey(x, index, this.values), value: x }; })
            .sort(x => x.key, "asc", comparator);
        comparator = comparator !== null && comparator !== void 0 ? comparator : this.defaultComparator;
        let result = [intermediate[0].value];
        for (let index = 1; index < intermediate.length; index++) {
            if (comparator(intermediate[index - 1].key, intermediate[index].key) != 0) {
                result.push(intermediate[index].value);
            }
        }
        return DataArrayImpl.wrap(result, this.defaultComparator);
    }
    every(f) { return this.values.every(f); }
    some(f) { return this.values.some(f); }
    none(f) { return this.values.every((v, i, a) => !f(v, i, a)); }
    first() { return this.values.length > 0 ? this.values[0] : undefined; }
    last() { return this.values.length > 0 ? this.values[this.values.length - 1] : undefined; }
    to(key) {
        let result = [];
        for (let child of this.values) {
            let value = child[key];
            if (value === undefined || value === null)
                continue;
            if (Array.isArray(value))
                value.forEach(v => result.push(v));
            else
                result.push(value);
        }
        return DataArrayImpl.wrap(result, this.defaultComparator);
    }
    expand(key) {
        let result = [];
        let queue = [].concat(this.values);
        while (queue.length > 0) {
            let next = queue.pop();
            let value = next[key];
            if (value === undefined || value === null)
                continue;
            if (Array.isArray(value))
                value.forEach(v => queue.push(v));
            else if (value instanceof DataArrayImpl)
                value.forEach(v => queue.push(v));
            else
                queue.push(value);
            result.push(next);
        }
        return Data.array(result);
    }
    forEach(f) {
        for (let index = 0; index < this.values.length; index++) {
            f(this.values[index], index, this.values);
        }
    }
    array() { return [].concat(this.values); }
    [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }
}
DataArrayImpl.ARRAY_FUNCTIONS = new Set([
    "where", "filter", "map", "flatMap", "slice", "sort", "groupBy", "distinct", "every", "some", "none", "first", "last", "to",
    "expand", "forEach", "length", "values", "array", "defaultComparator"
]);
DataArrayImpl.ARRAY_PROXY = {
    get: function (target, prop, reciever) {
        if (typeof prop === "symbol")
            return target[prop];
        else if (typeof prop === "number")
            return target.values[prop];
        else if (!isNaN(parseInt(prop)))
            return target.values[parseInt(prop)];
        else if (DataArrayImpl.ARRAY_FUNCTIONS.has(prop.toString()))
            return target[prop.toString()];
        return target.to(prop);
    }
};
/** Provides utility functions for generating data arrays. */
var Data;
(function (Data) {
    /** Create a new Dataview data array. */
    function array(raw) {
        return DataArrayImpl.wrap(raw);
    }
    Data.array = array;
})(Data || (Data = {}));
class DataviewInlineApi {
    constructor(index, component, container, app, currentFilePath) {
        this.index = index;
        this.component = component;
        this.container = container;
        this.app = app;
        this.currentFilePath = currentFilePath;
    }
    /////////////////////////////
    // Index + Data Collection //
    /////////////////////////////
    /** Return an array of paths (as strings) corresponding to pages which match the query. */
    pagePaths(query) {
        try {
            let source;
            if (!query || query.trim() === "")
                source = Sources.folder("");
            else
                source = EXPRESSION.source.tryParse(query);
            return Data.array(Array.from(collectFromSource(source, this.index, this.currentFilePath)));
        }
        catch (ex) {
            throw new Error(`Failed to parse query in 'pagePaths': ${ex}`);
        }
    }
    /** Map a page path to the actual data contained within that page. */
    page(path) {
        var _a;
        let rawPath = (path instanceof Link) ? path.path : path;
        let rawData = (_a = createContext(rawPath, this.index, undefined)) === null || _a === void 0 ? void 0 : _a.namespace;
        if (rawData === undefined)
            return undefined;
        return Fields.fieldToValue(rawData);
    }
    /** Return an array of page objects corresponding to pages which match the query. */
    pages(query) {
        return this.pagePaths(query).flatMap(p => {
            let res = this.page(p);
            return res ? [res] : [];
        });
    }
    /** Return the information about the current page. */
    current() {
        return this.page(this.currentFilePath);
    }
    /////////////////////////
    // Rendering Functions //
    /////////////////////////
    /** Render an HTML header; the level can be anything from 1 - 6. */
    header(level, text) {
        var _a;
        let headerType;
        switch (level) {
            case 1:
                headerType = 'h1';
                break;
            case 2:
                headerType = 'h2';
                break;
            case 3:
                headerType = 'h3';
                break;
            case 4:
                headerType = 'h4';
                break;
            case 5:
                headerType = 'h5';
                break;
            case 6:
                headerType = 'h6';
                break;
            default: throw new Error(`Invalid header level ${level}`);
        }
        let wrapped = Fields.wrapValue(text);
        if (wrapped === null || wrapped === undefined)
            this.container.createEl(headerType, { text });
        let header = this.container.createEl(headerType);
        renderValue((_a = wrapped === null || wrapped === void 0 ? void 0 : wrapped.value) !== null && _a !== void 0 ? _a : null, header, this.currentFilePath, this.component, "\-", false);
    }
    /** Render an HTML paragraph, containing arbitrary text. */
    paragraph(text) {
        var _a;
        let wrapped = Fields.wrapValue(text);
        if (wrapped === null || wrapped === undefined)
            this.container.createEl('p', { text });
        renderValue((_a = wrapped === null || wrapped === void 0 ? void 0 : wrapped.value) !== null && _a !== void 0 ? _a : null, this.container, this.currentFilePath, this.component, "\-", true);
    }
    /** Render a dataview list of the given values. */
    list(values) {
        if (!values)
            return;
        if (values instanceof DataArrayImpl)
            values = values.array();
        renderList(this.container, values, this.component, this.currentFilePath, "\-");
    }
    /** Render a dataview table with the given headers, and the 2D array of values. */
    table(headers, values) {
        if (!values)
            values = [];
        if (values instanceof DataArrayImpl)
            values = values.array();
        renderTable(this.container, headers, values, this.component, this.currentFilePath, "\-");
    }
    /** Render a dataview task view with the given tasks. */
    taskList(tasks, groupByFile = false) {
        var _a;
        if (tasks instanceof DataArrayImpl)
            tasks = tasks.array();
        if (groupByFile) {
            let byFile = new Map();
            for (let task of tasks) {
                if (!byFile.has(task.path))
                    byFile.set(task.path, []);
                (_a = byFile.get(task.path)) === null || _a === void 0 ? void 0 : _a.push(task);
            }
            let subcontainer = this.container.createDiv();
            (() => __awaiter(this, void 0, void 0, function* () {
                yield renderFileTasks(subcontainer, byFile);
                this.component.addChild(new TaskViewLifecycle(this.app.vault, subcontainer));
            }))();
        }
        else {
            let subcontainer = this.container.createDiv();
            (() => __awaiter(this, void 0, void 0, function* () {
                yield renderTasks(subcontainer, tasks);
                this.component.addChild(new TaskViewLifecycle(this.app.vault, subcontainer));
            }))();
        }
    }
}
/** Evaluate a script where 'this' for the script is set to the given context. Allows you to define global variables. */
function evalInContext(script, context) {
    return function () { return eval(script); }.call(context);
}
/** Make a full API context which a script can be evaluted in. */
function makeApiContext(index, component, app, container, originFile) {
    return new DataviewInlineApi(index, component, container, app, originFile);
}

/** Default settings for dataview on install. */
const DEFAULT_SETTINGS = {
    renderNullAs: "\\-",
    warnOnEmptyResult: true,
    inlineQueryPrefix: "=",
    refreshInterval: 5000,
    schemaVersion: 1
};
class DataviewPlugin extends obsidian.Plugin {
    onload() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // Settings initialization; write defaults first time around.
            this.settings = Object.assign(DEFAULT_SETTINGS, (_a = yield this.loadData()) !== null && _a !== void 0 ? _a : {});
            this.workspace = this.app.workspace;
            this.addSettingTab(new DataviewSettingsTab(this.app, this));
            console.log("Dataview Plugin - Version 0.2.x Loaded");
            if (!this.workspace.layoutReady) {
                this.workspace.on("layout-ready", () => __awaiter(this, void 0, void 0, function* () { return this.prepareIndexes(); }));
            }
            else {
                yield this.prepareIndexes();
            }
            // Main entry point for dataview. Runs at a very high priority before other tasks.
            this.registerMarkdownCodeBlockProcessor("dataview", (source, el, ctx) => __awaiter(this, void 0, void 0, function* () {
                let query = tryOrPropogate(() => parseQuery(source, this.settings));
                // In case of parse error, just render the error.
                if (typeof query === 'string') {
                    renderErrorPre(el, "Dataview: " + query);
                    return;
                }
                switch (query.header.type) {
                    case 'task':
                        ctx.addChild(this.wrapWithEnsureIndex(ctx, el, () => new DataviewTaskRenderer(query, el, this.index, ctx.sourcePath, this.app.vault, this.settings)));
                        break;
                    case 'list':
                        ctx.addChild(this.wrapWithEnsureIndex(ctx, el, () => new DataviewListRenderer(query, el, this.index, ctx.sourcePath, this.settings)));
                        break;
                    case 'table':
                        ctx.addChild(this.wrapWithEnsureIndex(ctx, el, () => new DataviewTableRenderer(query, el, this.index, ctx.sourcePath, this.settings)));
                        break;
                }
            }));
            // Main entry point for Dataview.
            this.registerMarkdownCodeBlockProcessor("dataviewjs", (source, el, ctx) => __awaiter(this, void 0, void 0, function* () {
                ctx.addChild(this.wrapWithEnsureIndex(ctx, el, () => new DataviewJSRenderer(source, el, this.app, this.index, ctx.sourcePath, this.settings)));
            }));
            // Dataview inline queries.
            this.registerMarkdownPostProcessor((el, ctx) => __awaiter(this, void 0, void 0, function* () {
                // Search for <code> blocks inside this element; for each one, look for things of the form `
                let codeblocks = el.querySelectorAll("code");
                for (let index = 0; index < codeblocks.length; index++) {
                    let codeblock = codeblocks.item(index);
                    let text = codeblock.innerText.trim();
                    if (!text.startsWith(this.settings.inlineQueryPrefix))
                        continue;
                    let potentialField = text.substring(this.settings.inlineQueryPrefix.length).trim();
                    let field = tryOrPropogate(() => parseField(potentialField));
                    if (typeof field === "string") {
                        let errorBlock = el.createEl('div');
                        renderErrorPre(errorBlock, `Dataview (inline field '${potentialField}'): ${field}`);
                    }
                    else {
                        ctx.addChild(this.wrapInlineWithEnsureIndex(ctx, codeblock, () => new DataviewInlineRenderer(field, text, el, codeblock, this.index, ctx.sourcePath, this.settings)));
                    }
                }
            }));
        });
    }
    onunload() { }
    /** Prepare all dataview indices. */
    prepareIndexes() {
        return __awaiter(this, void 0, void 0, function* () {
            let index = yield FullIndex.generate(this.app.vault, this.app.metadataCache);
            this.index = index;
        });
    }
    /** Update plugin settings. */
    updateSettings(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign(this.settings, settings);
            yield this.saveData(this.settings);
        });
    }
    wrapWithEnsureIndex(ctx, container, success) {
        return new EnsurePredicateRenderer(ctx, container, () => this.index != undefined && this.index.pages && this.index.pages.size > 0, success);
    }
    wrapInlineWithEnsureIndex(ctx, container, success) {
        return new EnsureInlinePredicateRenderer(ctx, container, () => this.index != undefined && this.index.pages && this.index.pages.size > 0, success);
    }
}
/** All of the dataview settings in a single, nice tab. */
class DataviewSettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        this.containerEl.empty();
        this.containerEl.createEl("h2", { text: "Dataview Settings" });
        new obsidian.Setting(this.containerEl)
            .setName("Render Null As")
            .setDesc("What null/non-existent should show up as in tables, by default.")
            .addText(text => text.setPlaceholder("-")
            .setValue(this.plugin.settings.renderNullAs)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () { return yield this.plugin.updateSettings({ renderNullAs: value }); })));
        new obsidian.Setting(this.containerEl)
            .setName("Warn on Empty Result")
            .setDesc("If set, queries which return 0 results will render a warning message.")
            .addToggle(toggle => toggle.setValue(this.plugin.settings.warnOnEmptyResult)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () { return yield this.plugin.updateSettings({ warnOnEmptyResult: value }); })));
        new obsidian.Setting(this.containerEl)
            .setName("Inline Query Prefix")
            .setDesc("The prefix to inline queries (to mark them as Dataview queries). Defaults to '='.")
            .addText(text => text.setPlaceholder("=")
            .setValue(this.plugin.settings.inlineQueryPrefix)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () { return yield this.plugin.updateSettings({ inlineQueryPrefix: value }); })));
        new obsidian.Setting(this.containerEl)
            .setName("Dataview Refresh Interval (milliseconds)")
            .setDesc("How frequently dataviews are updated in preview mode when files are changing.")
            .addText(text => text.setPlaceholder("5000")
            .setValue("" + this.plugin.settings.refreshInterval)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            let parsed = parseInt(value);
            if (isNaN(parsed))
                return;
            parsed = (parsed < 100) ? 100 : parsed;
            yield this.plugin.updateSettings({ refreshInterval: parsed });
        })));
    }
}
/** A generic renderer which waits for a predicate, only continuing on success. */
class EnsurePredicateRenderer extends obsidian.MarkdownRenderChild {
    constructor(ctx, container, update, success) {
        super(container);
        this.ctx = ctx;
        this.container = container;
        this.update = update;
        this.success = success;
        this.ctx = ctx;
        this.container = container;
        this.update = update;
        this.success = success;
        this.dead = false;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            let loadContainer = renderErrorPre(this.container, "Dataview indices are loading");
            // Wait for the given predicate to finally pass...
            yield waitFor(EnsurePredicateRenderer.CHECK_INTERVAL_MS, () => { loadContainer.innerText += "."; return this.update(); }, () => this.dead);
            // Clear the container before passing it off to the child.
            this.container.innerHTML = "";
            // And then pass off rendering to a child context.
            this.ctx.addChild(this.success());
        });
    }
    onunload() {
        this.dead = true;
    }
}
EnsurePredicateRenderer.CHECK_INTERVAL_MS = 1000;
/** Inline version of EnsurePredicateRenderer; renders it's loading message differently. */
class EnsureInlinePredicateRenderer extends obsidian.MarkdownRenderChild {
    constructor(ctx, container, update, success) {
        super(container);
        this.ctx = ctx;
        this.container = container;
        this.update = update;
        this.success = success;
        this.ctx = ctx;
        this.container = container;
        this.update = update;
        this.success = success;
        this.dead = false;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.container.innerHTML = "<Indices loading>";
            // Wait for the given predicate to finally pass...
            yield waitFor(EnsurePredicateRenderer.CHECK_INTERVAL_MS, () => { return this.update(); }, () => this.dead);
            // Clear the container before passing it off to the child.
            this.container.innerHTML = "";
            // And then pass off rendering to a child context.
            this.ctx.addChild(this.success());
        });
    }
    onunload() {
        this.dead = true;
    }
}
EnsureInlinePredicateRenderer.CHECK_INTERVAL_MS = 1000;
/** Renders a list dataview for the given query. */
class DataviewListRenderer extends obsidian.MarkdownRenderChild {
    constructor(query, container, index, origin, settings) {
        super(container);
        this.query = query;
        this.container = container;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            this.registerInterval(window.setInterval(() => __awaiter(this, void 0, void 0, function* () {
                this.container.innerHTML = "";
                yield this.render();
            }), this.query.settings.refreshInterval));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = tryOrPropogate(() => execute(this.query, this.index, this.origin));
            if (typeof result === 'string') {
                renderErrorPre(this.container, "Dataview: " + result);
            }
            else if (result.data.length == 0 && this.settings.warnOnEmptyResult) {
                renderErrorPre(this.container, "Dataview: Query returned 0 results.");
            }
            else {
                if (result.names.length == 2) {
                    let rendered = [];
                    for (let [file, value] of result.data) {
                        let span = document.createElement('span');
                        yield renderValue(Fields.fieldToValue(file), span, this.origin, this, this.settings.renderNullAs, true);
                        span.appendText(": ");
                        yield renderValue(Fields.fieldToValue(value), span, this.origin, this, this.settings.renderNullAs, true);
                        rendered.push(span);
                    }
                    yield renderList(this.container, rendered, this, this.origin, this.settings.renderNullAs);
                }
                else {
                    yield renderList(this.container, result.data.map(v => v.length == 0 ? null : Fields.fieldToValue(v[0])), this, this.origin, this.settings.renderNullAs);
                }
            }
        });
    }
}
class DataviewTableRenderer extends obsidian.MarkdownRenderChild {
    constructor(query, container, index, origin, settings) {
        super(container);
        this.query = query;
        this.container = container;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            this.registerInterval(window.setInterval(() => __awaiter(this, void 0, void 0, function* () {
                this.container.innerHTML = "";
                yield this.render();
            }), this.query.settings.refreshInterval));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = tryOrPropogate(() => execute(this.query, this.index, this.origin));
            if (typeof result === 'string') {
                renderErrorPre(this.container, "Dataview: " + result);
                return;
            }
            yield renderTable(this.container, result.names, result.data.map(l => l.map(Fields.fieldToValue)), this, this.origin, this.settings.renderNullAs);
            // Render after the empty table, so the table header still renders.
            if (result.data.length == 0 && this.settings.warnOnEmptyResult) {
                renderErrorPre(this.container, "Dataview: Query returned 0 results.");
            }
        });
    }
}
class DataviewTaskRenderer extends obsidian.MarkdownRenderChild {
    constructor(query, container, index, origin, vault, settings) {
        super(container);
        this.query = query;
        this.container = container;
        this.index = index;
        this.origin = origin;
        this.vault = vault;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            this.registerInterval(window.setInterval(() => __awaiter(this, void 0, void 0, function* () {
                if (this.taskView)
                    this.removeChild(this.taskView);
                this.container.innerHTML = "";
                yield this.render();
            }), this.query.settings.refreshInterval));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = tryOrPropogate(() => executeTask(this.query, this.origin, this.index));
            if (typeof result === 'string') {
                renderErrorPre(this.container, "Dataview: " + result);
            }
            else if (result.size == 0 && this.settings.warnOnEmptyResult) {
                renderErrorPre(this.container, "Query returned 0 results.");
            }
            else {
                yield renderFileTasks(this.container, result);
                // TODO: Merge this into this renderer.
                this.addChild(this.taskView = new TaskViewLifecycle(this.vault, this.container));
            }
        });
    }
}
/** Renders inline query results. */
class DataviewInlineRenderer extends obsidian.MarkdownRenderChild {
    constructor(field, fieldText, container, target, index, origin, settings) {
        super(container);
        this.field = field;
        this.fieldText = fieldText;
        this.container = container;
        this.target = target;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.render();
            this.registerInterval(window.setInterval(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                (_a = this.errorbox) === null || _a === void 0 ? void 0 : _a.remove();
                yield this.render();
            }), this.settings.refreshInterval));
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = tryOrPropogate(() => executeInline(this.field, this.origin, this.index));
            if (typeof result === 'string') {
                this.errorbox = this.container.createEl('div');
                renderErrorPre(this.errorbox, "Dataview (for inline query '" + this.fieldText + "'): " + result);
            }
            else {
                let temp = document.createElement("span");
                yield renderValue(Fields.fieldToValue(result), temp, this.origin, this, this.settings.renderNullAs, false);
                this.target.replaceWith(temp);
            }
        });
    }
}
class DataviewJSRenderer extends obsidian.MarkdownRenderChild {
    constructor(script, container, app, index, origin, settings) {
        super(container);
        this.script = script;
        this.container = container;
        this.app = app;
        this.index = index;
        this.origin = origin;
        this.settings = settings;
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            // Assume that the code is javascript, and try to eval it.
            try {
                evalInContext(DataviewJSRenderer.PREAMBLE + this.script, makeApiContext(this.index, this, this.app, this.container, this.origin));
            }
            catch (e) {
                this.containerEl.innerHTML = "";
                renderErrorPre(this.container, "Evaluation Error: " + e.stack);
            }
        });
    }
}
DataviewJSRenderer.PREAMBLE = "const dataview = this;const dv = this;";

module.exports = DataviewPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sdXhvbi9idWlsZC9janMtYnJvd3Nlci9sdXhvbi5qcyIsIi4uL3NyYy91dGlsL25vcm1hbGl6ZS50cyIsIi4uL3NyYy9xdWVyeS50cyIsIi4uL3NyYy9yZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvcGFyc2ltbW9uL2J1aWxkL3BhcnNpbW1vbi51bWQubWluLmpzIiwiLi4vc3JjL3BhcnNlLnRzIiwiLi4vc3JjL2ZpbGUudHMiLCIuLi9zcmMvaW5kZXgudHMiLCIuLi9zcmMvdGFza3MudHMiLCIuLi9zcmMvZXZhbC50cyIsIi4uL3NyYy9lbmdpbmUudHMiLCIuLi9zcmMvdXRpbC9jb25jdXJyZW5jeS50cyIsIi4uL3NyYy9hcGkudHMiLCIuLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiRHVyYXRpb24iLCJEYXRlVGltZSIsIk1hcmtkb3duUmVuZGVyZXIiLCJ0aGlzIiwiUC5zZXFNYXAiLCJQLnNlcSIsIlAub3B0V2hpdGVzcGFjZSIsIlAuY3VzdG9tIiwiUC5jcmVhdGVMYW5ndWFnZSIsIlAucmVnZXhwIiwiUC5zdHJpbmciLCJQLmFsdCIsIlAubm9uZU9mIiwiUC5hbnkiLCJQLmZhaWwiLCJQLnN1Y2NlZWQiLCJQLndoaXRlc3BhY2UiLCJQLnNlcEJ5IiwiZ2V0QWxsVGFncyIsInBhcnNlRnJvbnRNYXR0ZXJUYWdzIiwicGFyc2VGcm9udE1hdHRlckFsaWFzZXMiLCJURmlsZSIsIk1hcmtkb3duUmVuZGVyQ2hpbGQiLCJDb21wb25lbnQiLCJQbHVnaW4iLCJQbHVnaW5TZXR0aW5nVGFiIiwiU2V0dGluZyIsIlRhc2tzLnJlbmRlckZpbGVUYXNrcyIsIlRhc2tzLlRhc2tWaWV3TGlmZWN5Y2xlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVEQTtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUss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QUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QztBQUNBO0FBQ0EsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDO0FBQ0EsUUFBUSxLQUFLLElBQUk7QUFDakIsVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QztBQUNBO0FBQ0EsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDO0FBQ0EsUUFBUSxLQUFLLElBQUk7QUFDakIsVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QztBQUNBO0FBQ0EsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ25FO0FBQ0EsUUFBUSxLQUFLLElBQUk7QUFDakIsVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0RTtBQUNBLFFBQVEsS0FBSyxHQUFHO0FBQ2hCLFVBQVUsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQztBQUNBLFFBQVEsS0FBSyxJQUFJO0FBQ2pCLFVBQVUsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxD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LEVBQUU7QUFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEtBQUssQ0FBQztBQUNwQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsTUFBTSxDQUFDLFFBQVEsR0FBRyxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEtBQUssQ0FBQztBQUNwQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEtBQUssQ0FBQztBQUNwQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNsRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDekMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDekMsTUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElB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QUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUN4RyxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUMsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDbkUsTUFBTSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQzNCLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0IsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsU0FBUyxRQUFRLEdBQUc7QUFDeEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLFNBQVMsQ0FBQztBQUN4QyxJQUFJLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3BFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3RDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxTQUFTLENBQUM7QUFDeEMsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMs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LENBQUMsQ0FBQyxDQUFDO0FBQzFEO0FBQ0E7QUFDQSxNQUFNLEtBQUssR0FBRztBQUNkLFFBQVEsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakM7QUFDQSxNQUFNLEtBQUssSUFBSTtBQUNmLFFBQVEsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUI7QUFDQTtBQUNBLE1BQU0sS0FBSyxHQUFHO0FBQ2QsUUFBUSxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQztBQUNBLE1BQU0sS0FBSyxLQUFLO0FBQ2hCLFFBQVEsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUI7QUFDQTtBQUNBLE1BQU0sS0FBSyxJQUFJO0FBQ2YsUUFBUSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QjtBQUNBLE1BQU0sS0FBSyxHQUFHO0FBQ2QsUUFBUSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQztBQUNBLE1BQU0sS0FBSyxJQUFJO0FBQ2YsUUFBUSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QjtBQUNBLE1BQU0sS0FBSyxHQUFHO0FBQ2QsUUFBUSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQztBQUNBLE1BQU0sS0FBSyxJQUFJO0FBQ2YsUUFBUSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QjtBQUNBLE1BQU0sS0FBSyxHQUFHO0FBQ2QsUUFBUSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQztBQUNBLE1BQU0sS0FBSyxHQUFHO0FBQ2QsUUFBUSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQztBQUNBLE1BQU0sS0FBSyxJQUFJO0FBQ2YsUUFBUSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QjtBQUNBLE1BQU0sS0FBSyxHQUFHO0FBQ2QsUUFBUSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQztBQUNB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LEVBQUUsQ0FBQztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsU0FBUyxRQUFRLEdBQUc7QUFDeEMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDeEMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQzFDLElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUMvQyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLEdBQUc7QUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLEdBQUc7QUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMzQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQzVDLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDekIsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDakMsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxD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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxTQUFTO0FBQ2xCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzlELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxPQUFPO0FBQ2hCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUMvQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsS0FBSztBQUNkLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsTUFBTTtBQUNmLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUM5QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsUUFBUTtBQUNqQixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDaEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLFFBQVE7QUFDakIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2hELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxhQUFhO0FBQ3RCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUNyRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxVQUFVO0FBQ25CLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDeEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsWUFBWTtBQUNyQixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQzFFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsU0FBUztBQUNsQixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQ3ZFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxTQUFTO0FBQ2xCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQ3JFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLFlBQVk7QUFDckIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDakQsUUFBUSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDM0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsV0FBVztBQUNwQixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUNoRCxRQUFRLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUMzQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNoQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxjQUFjO0FBQ3ZCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO0FBQ25ELFFBQVEsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO0FBQzNCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLGFBQWE7QUFDdEIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDbEQsUUFBUSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDM0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDbEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsUUFBUTtBQUNqQixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzFDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxpQkFBaUI7QUFDMUIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDeEIsUUFBUSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBVSxNQUFNLEVBQUUsT0FBTztBQUN6QixVQUFVLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUM3QixTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU8sTUFBTTtBQUNiLFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxnQkFBZ0I7QUFDekIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDeEIsUUFBUSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBVSxNQUFNLEVBQUUsTUFBTTtBQUN4QixVQUFVLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtBQUM3QixTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU8sTUFBTTtBQUNiLFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsZUFBZTtBQUN4QixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDdkQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxTQUFTO0FBQ2xCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQzlCLFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDckIsT0FBTyxNQUFNO0FBQ2IsUUFBUSxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN0QyxVQUFVLEtBQUssRUFBRSxDQUFDO0FBQ2xCLFNBQVMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDNUMsVUFBVSxLQUFLLEVBQUUsQ0FBQztBQUNsQixTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDbEIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLGNBQWM7QUFDdkIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsYUFBYTtBQUN0QixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLFlBQVk7QUFDckIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDeEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxpQkFBaUI7QUFDMUIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDakUsS0FBSztBQUNMLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDUCxJQUFJLEdBQUcsRUFBRSxZQUFZO0FBQ3JCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxVQUFVLENBQUM7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxVQUFVO0FBQ25CLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxRQUFRLENBQUM7QUFDdEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSx1QkFBdUI7QUFDaEMsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLHFCQUFxQixDQUFDO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsV0FBVztBQUNwQixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sU0FBUyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsV0FBVztBQUNwQixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sU0FBUyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsYUFBYTtBQUN0QixJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sV0FBVyxDQUFDO0FBQ3pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsbUJBQW1CO0FBQzVCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxpQkFBaUIsQ0FBQztBQUMvQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLHdCQUF3QjtBQUNqQyxJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sc0JBQXNCLENBQUM7QUFDcEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSx1QkFBdUI7QUFDaEMsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLHFCQUFxQixDQUFDO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsZ0JBQWdCO0FBQ3pCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxjQUFjLENBQUM7QUFDNUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxzQkFBc0I7QUFDL0IsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLG9CQUFvQixDQUFDO0FBQ2xDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsMkJBQTJCO0FBQ3BDLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyx5QkFBeUIsQ0FBQztBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLDBCQUEwQjtBQUNuQyxJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sd0JBQXdCLENBQUM7QUFDdEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxnQkFBZ0I7QUFDekIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLGNBQWMsQ0FBQztBQUM1QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLDZCQUE2QjtBQUN0QyxJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sMkJBQTJCLENBQUM7QUFDekMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxjQUFjO0FBQ3ZCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxZQUFZLENBQUM7QUFDMUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSwyQkFBMkI7QUFDcEMsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLHlCQUF5QixDQUFDO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFO0FBQ0wsSUFBSSxHQUFHLEVBQUUsMkJBQTJCO0FBQ3BDLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyx5QkFBeUIsQ0FBQztBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLGVBQWU7QUFDeEIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLGFBQWEsQ0FBQztBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLDRCQUE0QjtBQUNyQyxJQUFJLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUN4QixNQUFNLE9BQU8sMEJBQTBCLENBQUM7QUFDeEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxlQUFlO0FBQ3hCLElBQUksR0FBRyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ3hCLE1BQU0sT0FBTyxhQUFhLENBQUM7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSw0QkFBNEI7QUFDckMsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLDBCQUEwQixDQUFDO0FBQ3hDLEtBQUs7QUFDTCxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ047QUFDQSxFQUFFLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsRUFBRSxDQUFDO0FBQ0osU0FBUyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7QUFDdkMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDeEMsSUFBSSxPQUFPLFdBQVcsQ0FBQztBQUN2QixHQUFHLE1BQU0sSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7QUFDcEYsSUFBSSxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDNUMsR0FBRyxNQUFNLElBQUksV0FBVyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtBQUM3RCxJQUFJLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM1QyxHQUFHLE1BQU07QUFDVCxJQUFJLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyw2QkFBNkIsR0FBRyxXQUFXLEdBQUcsWUFBWSxHQUFHLE9BQU8sV0FBVyxDQUFDLENBQUM7QUFDcEgsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQztBQUN2QjtBQUNBLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztBQUM1QixnQkFBZ0IsR0FBRyxRQUFRLENBQUM7QUFDNUIsdUJBQXVCLEdBQUcsZUFBZSxDQUFDO0FBQzFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztBQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztBQUM1QixtQkFBbUIsR0FBRyxXQUFXLENBQUM7QUFDbEMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBQzlCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztBQUM1QixlQUFlLEdBQUcsT0FBTyxDQUFDO0FBQzFCLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDcEI7OztBQ252UUE7U0FDZ0IsaUJBQWlCLENBQUMsR0FBYTtJQUM5QyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ25ILENBQUM7QUFFRDtTQUNnQixlQUFlLENBQUMsSUFBWTtJQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQ7U0FDZ0IsV0FBVyxDQUFDLElBQVk7SUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUFFLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekUsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUFFLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sSUFBSSxDQUFDO0FBQ2IsQ0FBQztBQUVELE1BQU0sd0JBQXdCLEdBQUcsMkNBQTJDLENBQUM7QUFDN0UsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBRXhCO1NBQ2dCLG1CQUFtQixDQUFDLElBQVk7O0lBRS9DLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNqRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDZCxTQUFTO1NBQ1Q7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztZQUFFLFNBQVM7UUFDbEQsTUFBTSxJQUFJLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ2pDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDZixDQUFDO0FBRUQ7U0FDZ0IsY0FBYyxDQUFJLElBQWE7SUFDOUMsSUFBSTtRQUNILE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0tBQ3pDO0FBQ0Y7O0FDL0NBO0FBSUE7TUFDYSxJQUFJO0lBeUNiLFlBQW9CLE1BQXFCO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBL0JNLE9BQU8sSUFBSSxDQUFDLElBQVksRUFBRSxLQUFjLEVBQUUsT0FBZ0I7UUFDN0QsT0FBTyxJQUFJLElBQUksQ0FBQztZQUNaLElBQUk7WUFDSixLQUFLO1lBQ0wsT0FBTztZQUNQLElBQUksRUFBRSxNQUFNO1NBQ2YsQ0FBQyxDQUFDO0tBQ047SUFFTSxPQUFPLE1BQU0sQ0FBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLEtBQWMsRUFBRSxPQUFnQjtRQUMvRSxPQUFPLElBQUksSUFBSSxDQUFDO1lBQ1osSUFBSTtZQUNKLEtBQUs7WUFDTCxPQUFPO1lBQ1AsT0FBTyxFQUFFLE1BQU07WUFDZixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUM7S0FDTjtJQUVNLE9BQU8sS0FBSyxDQUFDLElBQVksRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLE9BQWdCO1FBQy9FLE9BQU8sSUFBSSxJQUFJLENBQUM7WUFDWixJQUFJO1lBQ0osS0FBSztZQUNMLE9BQU87WUFDUCxPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUM7S0FDTjtJQU1NLE1BQU0sQ0FBQyxLQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSTtlQUN2QixJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJO2VBQ3ZCLElBQUksQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4Qzs7SUFHTSxXQUFXLENBQUMsT0FBZ0I7UUFDL0IsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekQ7SUFFTSxRQUFRO1FBQ1gsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVE7WUFBRSxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDbkQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU87WUFBRSxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFNUQsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsTUFBTSxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFaEYsTUFBTSxJQUFJLElBQUksQ0FBQztRQUNmLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7QUFtTUQ7SUFDaUIsTUFBTSxDQTRVdEI7QUE1VUQsV0FBaUIsTUFBTTtJQUNuQixTQUFnQixRQUFRLENBQUMsSUFBWTtRQUNqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQztLQUNyQztJQUZlLGVBQVEsV0FFdkIsQ0FBQTtJQUVELFNBQWdCLE9BQU8sQ0FBd0IsS0FBUSxFQUFFLEdBQXVCO1FBQzVFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO0tBQzVEO0lBRmUsY0FBTyxVQUV0QixDQUFBO0lBRUQsU0FBZ0IsSUFBSSxDQUFDLEtBQWM7UUFDL0IsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMzQztJQUZlLFdBQUksT0FFbkIsQ0FBQTtJQUVELFNBQWdCLE1BQU0sQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDMUM7SUFGZSxhQUFNLFNBRXJCLENBQUE7SUFFRCxTQUFnQixNQUFNLENBQUMsS0FBYTtRQUNoQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFDO0lBRmUsYUFBTSxTQUVyQixDQUFBO0lBRUQsU0FBZ0IsSUFBSSxDQUFDLEtBQWU7UUFDaEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN4QztJQUZlLFdBQUksT0FFbkIsQ0FBQTtJQUVELFNBQWdCLFFBQVEsQ0FBQyxLQUFlO1FBQ3BDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDNUM7SUFGZSxlQUFRLFdBRXZCLENBQUE7SUFFRCxTQUFnQixJQUFJLENBQUMsTUFBWTtRQUM3QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3pDO0lBRmUsV0FBSSxPQUVuQixDQUFBO0lBRUQsU0FBZ0IsUUFBUSxDQUFDLE1BQWM7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN6QztJQUZlLGVBQVEsV0FFdkIsQ0FBQTtJQUVELFNBQWdCLEtBQUssQ0FBQyxNQUFzQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzFDO0lBRmUsWUFBSyxRQUVwQixDQUFBO0lBRUQsU0FBZ0IsTUFBTSxDQUFDLEtBQWdDO1FBQ25ELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDMUM7SUFGZSxhQUFNLFNBRXJCLENBQUE7SUFFRCxTQUFnQixXQUFXO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztLQUM1QjtJQUZlLGtCQUFXLGNBRTFCLENBQUE7SUFFRCxTQUFnQixJQUFJLENBQUMsSUFBaUI7UUFDbEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN2QztJQUZlLFdBQUksT0FFbkIsQ0FBQTs7SUFHRCxTQUFnQixZQUFZLENBQUMsR0FBaUI7UUFDMUMsUUFBUSxHQUFHLENBQUMsU0FBUztZQUNqQixLQUFLLE9BQU87Z0JBQ1IsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxRQUFRO2dCQUNULElBQUksTUFBTSxHQUF3QixFQUFFLENBQUM7Z0JBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLE1BQU0sQ0FBQztZQUNsQjtnQkFDSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDeEI7S0FDSjtJQVplLG1CQUFZLGVBWTNCLENBQUE7O0lBR0QsU0FBZ0IsU0FBUyxDQUFDLEdBQWlCO1FBQ3ZDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDdkQsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3pELElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN6RCxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDM0QsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQzdELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUNyRCxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDckQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3ZELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUNyRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7O1lBQ25FLE9BQU8sU0FBUyxDQUFDO0tBQ3pCO0lBWmUsZ0JBQVMsWUFZeEIsQ0FBQTs7SUFHRCxTQUFnQixPQUFPLENBQUMsR0FBaUI7UUFDckMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTO1lBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFELElBQUksR0FBRyxZQUFZQSxjQUFRO1lBQUUsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BELElBQUksR0FBRyxZQUFZQyxjQUFRO1lBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JELElBQUksR0FBRyxZQUFZLFdBQVc7WUFBRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDeEQsSUFBSSxHQUFHLFlBQVksR0FBRztZQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsRCxJQUFJLEdBQUcsWUFBWSxJQUFJO1lBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLE1BQU0sR0FBbUIsRUFBRSxDQUFDO1lBQ2hDLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNmLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxTQUFTO29CQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekM7WUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVE7WUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxTQUFTO1lBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JELElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxFQUFFO1lBQzdCLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO1lBQzdDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLFNBQVM7b0JBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDN0M7WUFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7YUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVEsRUFBRTs7WUFFN0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCOztZQUNJLE9BQU8sU0FBUyxDQUFDO0tBQ3pCO0lBOUJlLGNBQU8sVUE4QnRCLENBQUE7O0lBR0QsU0FBZ0IsWUFBWSxDQUFDLElBQWtCLEVBQUUsSUFBa0I7O1FBRS9ELElBQUksSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSTtZQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3hDLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQzdCLElBQUksSUFBSSxLQUFLLElBQUk7WUFBRSxPQUFPLENBQUMsQ0FBQzs7UUFHakMsSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLFNBQVM7WUFBRSxPQUFPLENBQUMsQ0FBQzthQUNwRCxJQUFJLEtBQUssS0FBSyxTQUFTO1lBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNuQyxJQUFJLEtBQUssS0FBSyxTQUFTO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFFdkMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUUsUUFBUSxLQUFLLENBQUMsSUFBSTtZQUNkLEtBQUssUUFBUTtnQkFDVCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFlLENBQUMsQ0FBQztZQUM1RCxLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFJLEtBQUssQ0FBQyxLQUFnQjtvQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUNoRCxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUssS0FBSyxDQUFDLEtBQWdCO29CQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMxRCxPQUFPLENBQUMsQ0FBQztZQUNiLEtBQUssTUFBTTtnQkFDUCxPQUFPLENBQUMsQ0FBQztZQUNiLEtBQUssU0FBUztnQkFDVixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUs7b0JBQUUsT0FBTyxDQUFDLENBQUM7O29CQUNwQyxPQUFPLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEtBQUssTUFBTTtnQkFDUCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxLQUFLLENBQUMsS0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RFLEtBQUssTUFBTTtnQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBSSxLQUFLLENBQUMsS0FBa0IsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsSCxLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxLQUFLLENBQUMsS0FBSyxHQUFJLEtBQUssQ0FBQyxLQUFrQixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hILEtBQUssT0FBTztnQkFDUixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNyQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBYyxDQUFDO2dCQUM5QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDakUsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDOUMsSUFBSSxJQUFJLElBQUksQ0FBQzt3QkFBRSxPQUFPLElBQUksQ0FBQztpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakMsS0FBSyxRQUFRO2dCQUNULElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUE0QixDQUFDO2dCQUM1QyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRXJCLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksVUFBVSxJQUFJLENBQUM7b0JBQUUsT0FBTyxVQUFVLENBQUM7Z0JBRXZDLEtBQUssSUFBSSxHQUFHLElBQUksRUFBRSxFQUFFO29CQUNoQixJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLElBQUksSUFBSSxDQUFDO3dCQUFFLE9BQU8sSUFBSSxDQUFDO2lCQUM5QjtnQkFDRCxPQUFPLENBQUMsQ0FBQztZQUNiLEtBQUssTUFBTTtnQkFDUCxPQUFPLENBQUMsQ0FBQztTQUNoQjtLQUNKO0lBOURlLG1CQUFZLGVBOEQzQixDQUFBOztJQUdELFNBQWdCLE1BQU0sQ0FBQyxHQUFROztRQUMzQixPQUFPLE1BQUEsU0FBUyxDQUFDLEdBQUcsQ0FBQywwQ0FBRSxJQUFJLENBQUM7S0FDL0I7SUFGZSxhQUFNLFNBRXJCLENBQUE7SUFFRCxTQUFnQixRQUFRLENBQUMsSUFBVyxFQUFFLEVBQVksRUFBRSxLQUFZO1FBQzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFtQixDQUFDO0tBQ2pFO0lBRmUsZUFBUSxXQUV2QixDQUFBO0lBRUQsU0FBZ0IsS0FBSyxDQUFDLEdBQVUsRUFBRSxLQUFZO1FBQzFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7S0FDaEQ7SUFGZSxZQUFLLFFBRXBCLENBQUE7O0lBR0QsU0FBZ0IsYUFBYSxDQUFDLElBQVk7UUFDdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLE1BQU0sR0FBVSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQy9DLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNqQjtJQVJlLG9CQUFhLGdCQVE1QixDQUFBO0lBRUQsU0FBZ0IsSUFBSSxDQUFDLElBQVcsRUFBRSxJQUFhO1FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDdEQ7SUFGZSxXQUFJLE9BRW5CLENBQUE7SUFFRCxTQUFnQixNQUFNLENBQUMsS0FBWTtRQUMvQixPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQztLQUNyQztJQUZlLGFBQU0sU0FFckIsQ0FBQTtJQUVELFNBQWdCLEtBQUssQ0FBQyxJQUFZLEVBQUUsS0FBWTtRQUM1QyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBZ0IsQ0FBQztLQUN4QztJQUZlLFlBQUssUUFFcEIsQ0FBQTtJQUVELFNBQWdCLE1BQU0sQ0FBQyxLQUFZLEVBQUUsR0FBK0I7UUFDaEUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUM7S0FDcEM7SUFGZSxhQUFNLFNBRXJCLENBQUE7SUFFRCxTQUFnQixRQUFRLENBQUMsS0FBbUI7UUFDeEMsUUFBUSxLQUFLLENBQUMsU0FBUztZQUNuQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUM1QixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbEMsS0FBSyxTQUFTO2dCQUNWLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDOUIsS0FBSyxNQUFNO2dCQUNQLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkMsS0FBSyxVQUFVO2dCQUNYLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLEtBQUssUUFBUTtnQkFDVCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNoQyxLQUFLLE9BQU87Z0JBQ1IsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDbEMsS0FBSyxNQUFNO2dCQUNQLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLEtBQUssTUFBTTtnQkFDUCxPQUFPLElBQUksQ0FBQztTQUNuQjtLQUNKO0lBdkJlLGVBQVEsV0F1QnZCLENBQUE7O0lBR0QsU0FBZ0IsUUFBUSxDQUFDLEtBQVk7UUFDakMsUUFBUSxLQUFLLENBQUMsSUFBSTtZQUNkLEtBQUssU0FBUztnQkFDVixJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFO29CQUM1QixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFtQixDQUFDLENBQUM7aUJBQ3BFO3FCQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxRQUFRLEVBQUU7b0JBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO29CQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRTt3QkFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBaUIsQ0FBQyxDQUFDO3FCQUNwRDtvQkFDRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2hDO3FCQUFNO29CQUNILE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtZQUNMLEtBQUssVUFBVSxFQUFFLE9BQU8sS0FBSyxDQUFDO1lBQzlCLEtBQUssVUFBVSxFQUFFLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9GLEtBQUssU0FBUyxFQUFFLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUQsS0FBSyxPQUFPLEVBQUUsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLEtBQUssVUFBVSxFQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDbEY7S0FDSjtJQXBCZSxlQUFRLFdBb0J2QixDQUFBOztJQUdELFNBQWdCLFlBQVksQ0FBQyxLQUFtQjtRQUM1QyxRQUFRLEtBQUssQ0FBQyxTQUFTO1lBQ25CLEtBQUssUUFBUSxDQUFDO1lBQ2QsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssTUFBTSxDQUFDO1lBQ1osS0FBSyxTQUFTO2dCQUNWLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQyxLQUFLLFVBQVU7Z0JBQ1gsT0FBTyxHQUFHLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFBO1lBQ3RELEtBQUssT0FBTztnQkFDUixPQUFPLFVBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDakUsS0FBSyxRQUFRO2dCQUNULE9BQU8sV0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUE7WUFDL0csS0FBSyxNQUFNO2dCQUNQLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDNUIsS0FBSyxNQUFNO2dCQUNQLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkQ7S0FDSjtJQW5CZSxtQkFBWSxlQW1CM0IsQ0FBQTtJQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE9BQU8sT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDO0tBQ2pDO0lBRmUsZUFBUSxXQUV2QixDQUFBO0lBRUQsU0FBZ0IsUUFBUSxDQUFDLEdBQVE7UUFDN0IsT0FBTyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUM7S0FDakM7SUFGZSxlQUFRLFdBRXZCLENBQUE7SUFFRCxTQUFnQixNQUFNLENBQUMsR0FBUTtRQUMzQixPQUFPLEdBQUcsWUFBWUEsY0FBUSxDQUFDO0tBQ2xDO0lBRmUsYUFBTSxTQUVyQixDQUFBO0lBRUQsU0FBZ0IsVUFBVSxDQUFDLEdBQVE7UUFDL0IsT0FBTyxHQUFHLFlBQVlELGNBQVEsQ0FBQztLQUNsQztJQUZlLGlCQUFVLGFBRXpCLENBQUE7SUFFRCxTQUFnQixNQUFNLENBQUMsR0FBUTtRQUMzQixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsQ0FBQztLQUM1QztJQUZlLGFBQU0sU0FFckIsQ0FBQTtJQUVELFNBQWdCLE9BQU8sQ0FBQyxHQUFRO1FBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3QjtJQUZlLGNBQU8sVUFFdEIsQ0FBQTtJQUVELFNBQWdCLFNBQVMsQ0FBQyxHQUFRO1FBQzlCLE9BQU8sT0FBTyxHQUFHLEtBQUssU0FBUyxDQUFDO0tBQ25DO0lBRmUsZ0JBQVMsWUFFeEIsQ0FBQTtJQUVELFNBQWdCLE1BQU0sQ0FBQyxHQUFRO1FBQzNCLE9BQU8sR0FBRyxZQUFZLElBQUksQ0FBQztLQUM5QjtJQUZlLGFBQU0sU0FFckIsQ0FBQTtJQUVELFNBQWdCLE1BQU0sQ0FBQyxHQUFRO1FBQzNCLE9BQU8sR0FBRyxZQUFZLFdBQVcsQ0FBQztLQUNyQztJQUZlLGFBQU0sU0FFckIsQ0FBQTtJQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE9BQU8sR0FBRyxZQUFZLEdBQUcsQ0FBQztLQUM3QjtJQUZlLGVBQVEsV0FFdkIsQ0FBQTtJQUVZLFdBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRCxDQUFDLEVBNVVnQixNQUFNLEtBQU4sTUFBTSxRQTRVdEI7SUFFZ0IsT0FBTyxDQXdCdkI7QUF4QkQsV0FBaUIsT0FBTztJQUNwQixTQUFnQixHQUFHLENBQUMsR0FBVztRQUMzQixPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQztLQUMvQjtJQUZlLFdBQUcsTUFFbEIsQ0FBQTtJQUVELFNBQWdCLE1BQU0sQ0FBQyxNQUFjO1FBQ2pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQztLQUM3QztJQUZlLGNBQU0sU0FFckIsQ0FBQTtJQUVELFNBQWdCLElBQUksQ0FBQyxJQUFZLEVBQUUsUUFBaUI7UUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEdBQUcsVUFBVSxHQUFHLFVBQVUsRUFBRSxDQUFDO0tBQ2hGO0lBRmUsWUFBSSxPQUVuQixDQUFBO0lBRUQsU0FBZ0IsUUFBUSxDQUFDLElBQVksRUFBRSxFQUFZLEVBQUUsS0FBYTtRQUM5RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ2hEO0lBRmUsZ0JBQVEsV0FFdkIsQ0FBQTtJQUVELFNBQWdCLE1BQU0sQ0FBQyxLQUFhO1FBQ2hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ3BDO0lBRmUsY0FBTSxTQUVyQixDQUFBO0lBRUQsU0FBZ0IsS0FBSztRQUNqQixPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0tBQzVCO0lBRmUsYUFBSyxRQUVwQixDQUFBO0FBQ0wsQ0FBQyxFQXhCZ0IsT0FBTyxLQUFQLE9BQU8sUUF3QnZCO0FBWU0sTUFBTSxzQkFBc0IsR0FBa0I7SUFDakQsWUFBWSxFQUFFLEdBQUc7SUFDakIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixlQUFlLEVBQUUsSUFBSTtDQUN4Qjs7QUM5bkJEO1NBQ2dCLFlBQVksQ0FBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLFFBQWlCO0lBQzNFLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDcEIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7SUFDbkIsSUFBSSxRQUFRO1FBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUUxQyxPQUFPLENBQUMsQ0FBQztBQUNWLENBQUM7QUFFRDtTQUNzQixxQkFBcUIsQ0FBQyxRQUFnQixFQUFFLFNBQXNCLEVBQUUsVUFBa0IsRUFBRSxTQUFvQjs7O1FBQzdILElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxNQUFNRSx5QkFBZ0IsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFckYsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6RSxZQUFZLENBQUMsU0FBUyxHQUFHLE1BQUEsTUFBQSxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQywwQ0FBRSxTQUFTLG1DQUFJLEVBQUUsQ0FBQztTQUMxRTs7Q0FDRDtBQUVEO1NBQ3NCLFVBQVUsQ0FBQyxTQUFzQixFQUFFLFFBQXdCLEVBQUUsU0FBb0IsRUFBRSxVQUFrQixFQUMxSCxTQUFpQjs7UUFDakIsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLEtBQUssSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQzFCLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNwRTtLQUNEO0NBQUE7QUFFRDtTQUNzQixXQUFXLENBQUMsU0FBc0IsRUFBRSxPQUFpQixFQUFFLE1BQXdCLEVBQUUsU0FBb0IsRUFDMUgsVUFBa0IsRUFBRSxTQUFpQjs7UUFDckMsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFckYsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztRQUN2RSxLQUFLLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUMzQixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDckUsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDdkIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFLLElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNyRTtTQUNEO0tBQ0Q7Q0FBQTtBQUVEO1NBQ2dCLGNBQWMsQ0FBQyxTQUFzQixFQUFFLEtBQWE7SUFDbkUsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0UsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFTRDtTQUNnQixpQkFBaUIsQ0FBQyxJQUFjOztJQUUvQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQzNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQ0QsY0FBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7S0FDM0Q7SUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUNBLGNBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQ7U0FDZ0IscUJBQXFCLENBQUMsR0FBYTtJQUNsRCxHQUFHLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFN0IsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQUksR0FBRyxDQUFDLEtBQUs7UUFBRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxVQUFVLENBQUM7SUFDaEQsSUFBSSxHQUFHLENBQUMsTUFBTTtRQUFFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLFdBQVcsQ0FBQztJQUNuRCxJQUFJLEdBQUcsQ0FBQyxLQUFLO1FBQUUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssVUFBVSxDQUFDO0lBQ2hELElBQUksR0FBRyxDQUFDLElBQUk7UUFBRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUM7SUFDN0MsSUFBSSxHQUFHLENBQUMsS0FBSztRQUFFLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLFVBQVUsQ0FBQztJQUNoRCxJQUFJLEdBQUcsQ0FBQyxPQUFPO1FBQUUsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sWUFBWSxDQUFDO0lBQ3RELElBQUksR0FBRyxDQUFDLE9BQU87UUFBRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ2xFLElBQUksR0FBRyxDQUFDLFlBQVk7UUFBRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBRXZFLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRSxPQUFPLE1BQU0sQ0FBQztBQUNmLENBQUM7QUFFRDtTQUNzQixXQUFXLENBQUMsS0FBbUIsRUFBRSxTQUFzQixFQUFFLFVBQWtCLEVBQUUsU0FBb0IsRUFDdEgsU0FBaUIsRUFBRSxhQUFzQixLQUFLOztRQUU5QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsTUFBTSxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN6RTthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDL0M7YUFBTSxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO2FBQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2RixNQUFNLHFCQUFxQixDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMxRTthQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLFVBQVUsRUFBRTtnQkFDZixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztvQkFBRSxPQUFPO3FCQUN6QixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUMzQixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNyRixPQUFPO2lCQUNQO2dCQUVELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDckcsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7b0JBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztvQkFDakUsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDM0U7YUFDRDtpQkFBTTtnQkFDTixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN0QixTQUFTLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNyQyxPQUFPO2lCQUNQO2dCQUVELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLDJCQUEyQixDQUFFLEVBQUMsQ0FBQyxDQUFDO2dCQUMxRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO29CQUN0QixJQUFJLEtBQUs7d0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQzs7d0JBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRTNCLE1BQU0sV0FBVyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7aUJBQzNFO2FBQ0Q7U0FDRDthQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxJQUFJLFVBQVUsRUFBRTtnQkFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO29CQUNwQixTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ3ZDLE9BQU87aUJBQ1A7cUJBQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDM0IsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUN2RCxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDeEcsT0FBTztpQkFDUDtnQkFFRCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLENBQUUsRUFBQyxDQUFDLENBQUM7Z0JBQ3ZHLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO29CQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2hHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUMvQixNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUM5RTthQUNEO2lCQUFNO2dCQUNOLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxFQUFFO29CQUN4QixJQUFJLEtBQUs7d0JBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQzs7d0JBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRTNCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO29CQUNqQyxNQUFNLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUNoRjthQUNEO1NBQ0Q7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsTUFBTSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNoRjthQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTixTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMvRDtLQUNEOzs7O0FDaExELENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQW1ELGNBQWMsQ0FBQyxDQUFDLEdBQW9ILENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDRSxjQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBYyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFNLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLCtGQUErRixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLDBEQUEwRCxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU0sMEJBQTBCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0lBQWdJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7QUNNaDBk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QVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7S0FDN0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztJQUMvQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLFFBQVEsQ0FBVyxDQUFDLENBQUMsUUFBUSxFQUNwQyxDQUFDLEVBQVksS0FBS0csd0JBQVEsQ0FBQ00sd0JBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRUQsd0JBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMvRyxDQUFDLEdBQWEsS0FBS0wsd0JBQVEsQ0FBQ00sd0JBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRUQsd0JBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNwSCxDQUFDLElBQWMsS0FBS0wsd0JBQVEsQ0FBQ00sd0JBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRUQsd0JBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM1SCxDQUFDLEtBQWUsS0FBS0wsd0JBQVEsQ0FBQ00sd0JBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRUQsd0JBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEtBQUss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QUNPLE1BQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUU7O0tBRTdDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RSxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEUsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RSxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQ3JCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakQsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztDQUMvQyxDQUFDOztLQUVELEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxD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RyxDQUFDLENBQUMsS0FBSyxDQUFDO0NBQy9DLENBQUM7O0tBRUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN6RixHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztLQUV0RixHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUUsRUFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7S0FFMUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDMUI7SUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtRQUM5QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUMxQjtJQUNELE9BQU8sTUFB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SUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoSSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNGLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNGLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG1DQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV0RSxJQUFJLElBQUksQ0FBQyxHQUFHO1FBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFHekQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxJQUFJLEtBQUssSUFBSSxLQUFLLFlBQVlvQixjQUFLLEVBQUU7UUFDakMsSUFBSSxLQUFLLEdBQUdwQixjQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxLQUFLLEdBQUdBLGNBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRCxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQ0EsY0FBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakgsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUNBLGNBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pILFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDdkQ7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFN0MsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVEO1NBQ2dCLE9BQU8sQ0FBQyxLQUFZLEVBQUUsS0FBZ0IsRUFBRSxNQUFjOzs7SUFFbEUsSUFBSSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO1FBQUUsT0FBTyxPQUFPLENBQUM7SUFFaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0lBR2pFLElBQUksTUFBTSxFQUFFO1FBQ1IsSUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLE9BQU87WUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDM0Q7O0lBR0QsSUFBSSxJQUFJLEdBQWMsRUFBRSxDQUFDO0lBQ3pCLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO1FBQ3RCLElBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbkM7SUFFRCxLQUFLLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxVQUFVLEVBQUU7UUFDcEMsUUFBUSxTQUFTLENBQUMsSUFBSTtZQUNsQixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELElBQUksT0FBTyxNQUFNLElBQUksUUFBUTtvQkFBRSxPQUFPLE1BQU0sQ0FBQztnQkFDN0MsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLFFBQVE7b0JBQUUsT0FBTyx5Q0FBeUMsTUFBTSxDQUFDLFNBQVMsV0FBVyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUM7Z0JBRTdILElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSztvQkFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuRSxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7b0JBQ2xCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxLQUFLLElBQUksUUFBUTt3QkFBRSxPQUFPLEtBQUssQ0FBQztvQkFDM0MsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDOztnQkFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNYLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO3dCQUNwRCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxLQUFLLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBRWxFLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqRCxJQUFJLE9BQU8sTUFBTSxJQUFJLFFBQVE7NEJBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3hDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNqRCxJQUFJLE9BQU8sTUFBTSxJQUFJLFFBQVE7NEJBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFFekMsSUFBSSxFQUFFLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQWdDLENBQUM7d0JBQ3BGLElBQUksRUFBRSxDQUFDLEtBQUs7NEJBQUUsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBRWpDLElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFnQyxDQUFDO3dCQUNwRixJQUFJLEVBQUUsQ0FBQyxLQUFLOzRCQUFFLE9BQU8sTUFBTSxHQUFHLENBQUMsQ0FBQztxQkFDbkM7b0JBRUQsT0FBTyxDQUFDLENBQUM7aUJBQ1osQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxPQUFPLEdBQWMsRUFBRSxDQUFDO2dCQUM1QixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtvQkFDbEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzdDLElBQUksT0FBTyxLQUFLLElBQUksUUFBUTt3QkFBRSxTQUFTO29CQUV2QyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFO3dCQUM1QixLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7NEJBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7eUJBQzdEO3FCQUNKO3lCQUFNO3dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2xCLFNBQVM7cUJBQ1o7aUJBQ0o7Z0JBRUQsSUFBSSxHQUFHLE9BQU8sQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLElBQUksVUFBVSxHQUEyQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNuRSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtvQkFDbEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNDLElBQUksT0FBTyxLQUFLLElBQUksUUFBUTt3QkFBRSxTQUFTO29CQUV2QyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFM0QsTUFBQSxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQywwQ0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QztnQkFFRCxJQUFJLFdBQVcsR0FBYyxFQUFFLENBQUM7Z0JBQ2hDLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUU7O29CQUV6QyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQStCLENBQUM7O29CQUd0RyxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUNuRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7b0JBR2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQXdCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzdCO2dCQUVELElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ25CLE1BQU07U0FDYjtLQUNKO0lBRUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQzVCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQzNELElBQUksT0FBTyxLQUFLLElBQUksUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNDLE9BQU8sS0FBSyxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUM7S0FDcEMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDckIsS0FBSyxPQUFPO1lBQ1IsSUFBSSxXQUFXLEdBQUksRUFBbUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRSxJQUFJLFlBQVk7Z0JBQUUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvRixPQUFPO2dCQUNILEtBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO29CQUNkLE9BQU8sV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNwQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFROzRCQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDakQsT0FBTyxLQUFLLENBQUM7cUJBQ2hCLENBQUMsQ0FBQTtpQkFDTCxDQUFDO2FBQ0wsQ0FBQztRQUNOLEtBQUssTUFBTTtZQUNQLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRWpDLElBQUksVUFBVSxHQUFpQixFQUFFLENBQUM7WUFDbEMsSUFBSSxZQUFZO2dCQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsSUFBSSxNQUFNO2dCQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUUzRCxPQUFPO2dCQUNILEtBQUssRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHO29CQUNkLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFROzRCQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDakQsT0FBTyxLQUFLLENBQUM7cUJBQ2hCLENBQUMsQ0FBQTtpQkFDTCxDQUFDO2FBQ0wsQ0FBQztRQUNOLEtBQUssTUFBTTtZQUNQLElBQUksUUFBUSxHQUFxQixFQUFFLENBQUM7WUFDcEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLE9BQU8sSUFBSSxJQUFJLFFBQVE7b0JBQUUsU0FBUztnQkFDdEMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDekI7WUFFRCxPQUFPO2dCQUNILEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQztnQkFDZixJQUFJLEVBQUUsUUFBUTthQUNqQixDQUFBO0tBQ1I7QUFDTCxDQUFDO0FBRUQ7U0FDZ0IsYUFBYSxDQUFDLEtBQVksRUFBRSxNQUFjLEVBQUUsS0FBZ0I7SUFDeEUsSUFBSSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0lBR2pFLElBQUksTUFBTSxFQUFFO1FBQ1IsSUFBSSxPQUFPLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLE9BQU87WUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDM0Q7SUFFRCxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQztTQUVlLFdBQVcsQ0FBQyxLQUFZLEVBQUUsTUFBYyxFQUFFLEtBQWdCOzs7OztJQUl0RSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVE7UUFBRSxPQUFPLE1BQU0sQ0FBQztJQUU5QyxJQUFJLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUMzQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDekIsSUFBSSxJQUFJLEdBQUksR0FBRyxDQUFDLENBQUMsQ0FBZ0MsQ0FBQyxLQUFLLENBQUM7UUFFeEQsSUFBSSxLQUFLLEdBQUcsTUFBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMENBQUUsS0FBSyxDQUFDO1FBQ3pDLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxTQUFTO1FBRXRELFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQy9CO0lBRUQsT0FBTyxVQUFVLENBQUM7QUFDdEI7O0FDOVRBO1NBQ3NCLE9BQU8sQ0FBQyxRQUFnQixFQUFFLFNBQXdCLEVBQUUsTUFBcUI7O1FBQzlGLElBQUksTUFBTSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFM0IsTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFVLEtBQUssSUFBSSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDcEIsSUFBSSxNQUFNLEVBQUU7Z0JBQUUsT0FBTyxLQUFLLENBQUM7WUFDM0IsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckI7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNaOzs7QUNqQ0Q7QUFpR0E7QUFDQSxNQUFNLGFBQWE7SUF3QmYsWUFBMkIsTUFBYSxFQUFTLG9CQUEwQyxNQUFNLENBQUMsWUFBWTtRQUFuRixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QztRQUMxRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDL0I7SUFUTSxPQUFPLElBQUksQ0FBSSxHQUFRLEVBQUUsb0JBQTBDLE1BQU0sQ0FBQyxZQUFZO1FBQ3pGLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzFGO0lBU00sS0FBSyxDQUFDLFNBQWdDO1FBQ3pDLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNwRjtJQUVNLE1BQU0sQ0FBQyxTQUFnQztRQUMxQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDaEM7SUFFTSxHQUFHLENBQUksQ0FBa0I7UUFDNUIsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ3pFO0lBRU0sT0FBTyxDQUFJLENBQW9CO1FBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDO2dCQUFFLFNBQVM7WUFFMUMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLO2dCQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFFRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQzdEO0lBRU0sTUFBTSxDQUFDLENBQW9CO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFTSxLQUFLLENBQUMsS0FBYTtRQUN0QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ2xGO0lBRU0sS0FBSyxDQUFDLEtBQWMsRUFBRSxHQUFZO1FBQ3JDLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDcEY7SUFFTSxJQUFJLENBQUksR0FBb0IsRUFBRSxTQUEwQixFQUFFLFVBQStCO1FBQzVGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3pDLElBQUksY0FBYyxHQUFHLFVBQVUsYUFBVixVQUFVLGNBQVYsVUFBVSxHQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs7UUFHMUQsSUFBSSxJQUFJLEdBQUksRUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxPQUFPLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQSxFQUFFLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxPQUFPLFNBQVMsS0FBSyxNQUFNLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUYsQ0FBQyxDQUFDO1FBRUgsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUM3RTtJQUVNLE9BQU8sQ0FBSSxHQUFvQixFQUFFLFVBQStCO1FBQ25FLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7OztRQUluRixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckQsVUFBVSxHQUFHLFVBQVUsYUFBVixVQUFVLGNBQVYsVUFBVSxHQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUVsRCxJQUFJLE1BQU0sR0FBcUMsRUFBRSxDQUFDO1FBQ2xELElBQUksVUFBVSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3RELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RixPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUNqQixVQUFVLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0o7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVGLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDN0Q7SUFFTSxRQUFRLENBQUksR0FBcUIsRUFBRSxVQUErQjtRQUNyRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztRQUN6QyxJQUFJLE9BQU8sR0FBRyxHQUFHLGFBQUgsR0FBRyxjQUFILEdBQUcsSUFBSyxDQUFDLElBQUksQ0FBYSxDQUFDLENBQUM7O1FBRzFDLElBQUksWUFBWSxHQUFHLElBQUk7YUFDbEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssT0FBTyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUEsRUFBRSxDQUFDO2FBQy9FLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekMsVUFBVSxHQUFHLFVBQVUsYUFBVixVQUFVLGNBQVYsVUFBVSxHQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUVsRCxJQUFJLE1BQU0sR0FBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN0RCxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztTQUNKO1FBRUQsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUM3RDtJQUVNLEtBQUssQ0FBQyxDQUF3QixJQUFhLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUV6RSxJQUFJLENBQUMsQ0FBd0IsSUFBYSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFFdkUsSUFBSSxDQUFDLENBQXdCLElBQWEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBRS9GLEtBQUssS0FBUSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFO0lBQzFFLElBQUksS0FBUSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFO0lBRTlGLEVBQUUsQ0FBQyxHQUFXO1FBQ2pCLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN2QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSTtnQkFBRSxTQUFTO1lBRXBELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUVELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7S0FDN0Q7SUFFTSxNQUFNLENBQUMsR0FBVztRQUNyQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxLQUFLLEdBQVcsRUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXRCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSTtnQkFBRSxTQUFTO1lBQ3BELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2RCxJQUFJLEtBQUssWUFBWSxhQUFhO2dCQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQ3RFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QjtJQUVNLE9BQU8sQ0FBQyxDQUFxQjtRQUNoQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckQsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QztLQUNKO0lBRU0sS0FBSyxLQUFVLE9BQVEsRUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtJQUUxRCxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0tBQ3pDOztBQWhMYyw2QkFBZSxHQUFnQixJQUFJLEdBQUcsQ0FBQztJQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSTtJQUMzSCxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLG1CQUFtQjtDQUN4RSxDQUFDLENBQUM7QUFFWSx5QkFBVyxHQUFxQztJQUMzRCxHQUFHLEVBQUUsVUFBVSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVE7UUFDakMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1lBQUUsT0FBUSxNQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1lBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2pFLElBQUksYUFBYSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFNUYsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCO0NBQ0osQ0FBQztBQXFLTjtJQUNpQixJQUFJLENBS3BCO0FBTEQsV0FBaUIsSUFBSTs7SUFFakIsU0FBZ0IsS0FBSyxDQUFJLEdBQVE7UUFDN0IsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDO0lBRmUsVUFBSyxRQUVwQixDQUFBO0FBQ0wsQ0FBQyxFQUxnQixJQUFJLEtBQUosSUFBSSxRQUtwQjtNQUVZLGlCQUFpQjtJQXNCMUIsWUFBWSxLQUFnQixFQUFFLFNBQW9CLEVBQUUsU0FBc0IsRUFBRSxHQUFRLEVBQUUsZUFBdUI7UUFDekcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztLQUMxQzs7Ozs7SUFPTSxTQUFTLENBQUMsS0FBYztRQUMzQixJQUFJO1lBQ0EsSUFBSSxNQUFNLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUFFLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztnQkFDMUQsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWhELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUY7UUFBQyxPQUFPLEVBQUUsRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbEU7S0FDSjs7SUFHTSxJQUFJLENBQUMsSUFBbUI7O1FBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4RCxJQUFJLE9BQU8sR0FBRyxNQUFBLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsMENBQUUsU0FBUyxDQUFDO1FBQ3ZFLElBQUksT0FBTyxLQUFLLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQztRQUU1QyxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUF3QixDQUFDO0tBQzlEOztJQUdNLEtBQUssQ0FBQyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzNCLENBQUMsQ0FBQztLQUNOOztJQUdNLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzFDOzs7OztJQU9NLE1BQU0sQ0FBQyxLQUFhLEVBQUUsSUFBUzs7UUFDbEMsSUFBSSxVQUFtRCxDQUFDO1FBQ3hELFFBQVEsS0FBSztZQUNULEtBQUssQ0FBQztnQkFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUFDLE1BQU07WUFDakMsS0FBSyxDQUFDO2dCQUFFLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQUMsTUFBTTtZQUNqQyxLQUFLLENBQUM7Z0JBQUUsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQ2pDLEtBQUssQ0FBQztnQkFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUFDLE1BQU07WUFDakMsS0FBSyxDQUFDO2dCQUFFLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQUMsTUFBTTtZQUNqQyxLQUFLLENBQUM7Z0JBQUUsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFBQyxNQUFNO1lBQ2pDLFNBQVMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU3RixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxXQUFXLENBQUMsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBSyxtQ0FBSSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDbEc7O0lBR00sU0FBUyxDQUFDLElBQVM7O1FBQ3RCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV0RixXQUFXLENBQUMsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBSyxtQ0FBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3pHOztJQUdNLElBQUksQ0FBQyxNQUErQjtRQUN2QyxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDcEIsSUFBSSxNQUFNLFlBQVksYUFBYTtZQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMzRjs7SUFHTSxLQUFLLENBQUMsT0FBaUIsRUFBRSxNQUFpQztRQUM3RCxJQUFJLENBQUMsTUFBTTtZQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxNQUFNLFlBQVksYUFBYTtZQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0QsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3ZHOztJQUdNLFFBQVEsQ0FBQyxLQUE4QixFQUFFLGNBQXVCLEtBQUs7O1FBQ3hFLElBQUksS0FBSyxZQUFZLGFBQWE7WUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTFELElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7WUFDdkMsS0FBSyxJQUFJLElBQUksSUFBSyxLQUFnQixFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdEQsTUFBQSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1lBRUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM5QyxDQUFDO2dCQUNHLE1BQU0sZUFBZSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQ2hGLENBQUEsR0FBRyxDQUFDO1NBQ1I7YUFBTTtZQUNILElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDOUMsQ0FBQztnQkFDRyxNQUFNLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBZSxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQzthQUNoRixDQUFBLEdBQUcsQ0FBQztTQUNSO0tBQ0o7Q0FDSjtBQUVEO1NBQ2dCLGFBQWEsQ0FBQyxNQUFjLEVBQUUsT0FBWTtJQUN0RCxPQUFPLGNBQWMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQ7U0FDZ0IsY0FBYyxDQUFDLEtBQWdCLEVBQUUsU0FBb0IsRUFBRSxHQUFRLEVBQUUsU0FBc0IsRUFBRSxVQUFrQjtJQUN2SCxPQUFPLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9FOztBQ3paQTtBQUNBLE1BQU0sZ0JBQWdCLEdBQXFCO0lBQzFDLFlBQVksRUFBRSxLQUFLO0lBQ25CLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsaUJBQWlCLEVBQUUsR0FBRztJQUN0QixlQUFlLEVBQUUsSUFBSTtJQUNyQixhQUFhLEVBQUUsQ0FBQztDQUNoQixDQUFBO01BRW9CLGNBQWUsU0FBUXVCLGVBQU07SUFNM0MsTUFBTTs7OztZQUVYLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxNQUFBLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxtQ0FBSSxFQUFFLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBRXBDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLHFEQUFZLE9BQUEsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBLEdBQUEsQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNOLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzVCOztZQUdELElBQUksQ0FBQyxrQ0FBa0MsQ0FBQyxVQUFVLEVBQUUsQ0FBTyxNQUFjLEVBQUUsRUFBRSxFQUFFLEdBQUc7Z0JBQ2pGLElBQUksS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O2dCQUdwRSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtvQkFDOUIsY0FBYyxDQUFDLEVBQUUsRUFBRSxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7b0JBQ3pDLE9BQU87aUJBQ1A7Z0JBRUQsUUFBUSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUk7b0JBQ3hCLEtBQUssTUFBTTt3QkFDVixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUM1QyxNQUFNLElBQUksb0JBQW9CLENBQUMsS0FBYyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakgsTUFBTTtvQkFDUCxLQUFLLE1BQU07d0JBQ1YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFDNUMsTUFBTSxJQUFJLG9CQUFvQixDQUFDLEtBQWMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pHLE1BQU07b0JBQ1AsS0FBSyxPQUFPO3dCQUNYLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQzVDLE1BQU0sSUFBSSxxQkFBcUIsQ0FBQyxLQUFjLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsRyxNQUFNO2lCQUNQO2FBQ0QsQ0FBQSxDQUFDLENBQUM7O1lBR0gsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLFlBQVksRUFBRSxDQUFPLE1BQWMsRUFBRSxFQUFFLEVBQUUsR0FBRztnQkFDbkYsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFDNUMsTUFBTSxJQUFJLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRyxDQUFBLENBQUMsQ0FBQzs7WUFHSCxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBTyxFQUFFLEVBQUUsR0FBRzs7Z0JBRWhELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0MsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3ZELElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXZDLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7d0JBQUUsU0FBUztvQkFFaEUsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUVuRixJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7d0JBQzlCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3BDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsMkJBQTJCLGNBQWMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUNwRjt5QkFBTTt3QkFDTixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUN6RCxNQUFNLElBQUksc0JBQXNCLENBQUMsS0FBYyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNwSDtpQkFDRDthQUNELENBQUEsQ0FBQyxDQUFDOztLQUNIO0lBRUQsUUFBUSxNQUFNOztJQUdSLGNBQWM7O1lBQ25CLElBQUksS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ25CO0tBQUE7O0lBR0ssY0FBYyxDQUFDLFFBQW1DOztZQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN2RCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25DO0tBQUE7SUFFTyxtQkFBbUIsQ0FBQyxHQUFpQyxFQUFFLFNBQXNCLEVBQUUsT0FBa0M7UUFDeEgsT0FBTyxJQUFJLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzVJO0lBRU8seUJBQXlCLENBQUMsR0FBaUMsRUFBRSxTQUFzQixFQUFFLE9BQWtDO1FBQzlILE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sSUFBSSxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNsSjtDQUNEO0FBRUQ7QUFDQSxNQUFNLG1CQUFvQixTQUFRQyx5QkFBZ0I7SUFDakQsWUFBWSxHQUFRLEVBQVUsTUFBc0I7UUFDbkQsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQURVLFdBQU0sR0FBTixNQUFNLENBQWdCO0tBRW5EO0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUUvRCxJQUFJQyxnQkFBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDM0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDO2FBQ3pCLE9BQU8sQ0FBQyxpRUFBaUUsQ0FBQzthQUMxRSxPQUFPLENBQUMsSUFBSSxJQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2FBQ3RCLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7YUFDM0MsUUFBUSxDQUFDLENBQU8sS0FBSyxvREFBSyxPQUFBLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBRTFGLElBQUlBLGdCQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMzQixPQUFPLENBQUMsc0JBQXNCLENBQUM7YUFDL0IsT0FBTyxDQUFDLHVFQUF1RSxDQUFDO2FBQ2hGLFNBQVMsQ0FBQyxNQUFNLElBQ2hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7YUFDckQsUUFBUSxDQUFDLENBQU8sS0FBSyxvREFBSyxPQUFBLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFFL0YsSUFBSUEsZ0JBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzNCLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQzthQUM5QixPQUFPLENBQUMsbUZBQW1GLENBQUM7YUFDNUYsT0FBTyxDQUFDLElBQUksSUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzthQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7YUFDaEQsUUFBUSxDQUFDLENBQU8sS0FBSyxvREFBSyxPQUFBLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBLEdBQUEsQ0FBQyxDQUFDLENBQUE7UUFFN0YsSUFBSUEsZ0JBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzNCLE9BQU8sQ0FBQywwQ0FBMEMsQ0FBQzthQUNuRCxPQUFPLENBQUMsK0VBQStFLENBQUM7YUFDeEYsT0FBTyxDQUFDLElBQUksSUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzthQUMxQixRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQzthQUNuRCxRQUFRLENBQUMsQ0FBTyxLQUFLO1lBQ3JCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQUUsT0FBTztZQUMxQixNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDdkMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzlELENBQUEsQ0FBQyxDQUFDLENBQUM7S0FDTjtDQUNEO0FBRUQ7QUFDQSxNQUFNLHVCQUF3QixTQUFRSiw0QkFBbUI7SUFLeEQsWUFBbUIsR0FBaUMsRUFDNUMsU0FBc0IsRUFDdEIsTUFBcUIsRUFDckIsT0FBa0M7UUFDekMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBSkMsUUFBRyxHQUFILEdBQUcsQ0FBOEI7UUFDNUMsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQTJCO1FBR3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDbEI7SUFFSyxNQUFNOztZQUNYLElBQUksYUFBYSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLDhCQUE4QixDQUFDLENBQUM7O1lBR25GLE1BQU0sT0FBTyxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixFQUN0RCxRQUFRLGFBQWEsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUMvRCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFHbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztZQUc5QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNsQztLQUFBO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2pCOztBQWxDTSx5Q0FBaUIsR0FBRyxJQUFLLENBQUM7QUFxQ2xDO0FBQ0EsTUFBTSw2QkFBOEIsU0FBUUEsNEJBQW1CO0lBSzlELFlBQW1CLEdBQWlDLEVBQzVDLFNBQXNCLEVBQ3RCLE1BQXFCLEVBQ3JCLE9BQWtDO1FBQ3pDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUpDLFFBQUcsR0FBSCxHQUFHLENBQThCO1FBQzVDLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUEyQjtRQUd6QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQ2xCO0lBRUssTUFBTTs7WUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQzs7WUFHL0MsTUFBTSxPQUFPLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLEVBQ3RELFFBQVEsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUMvQixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFHbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztZQUc5QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNsQztLQUFBO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2pCOztBQWxDTSwrQ0FBaUIsR0FBRyxJQUFLLENBQUM7QUFxQ2xDO0FBQ0EsTUFBTSxvQkFBcUIsU0FBUUEsNEJBQW1CO0lBQ3JELFlBQW1CLEtBQVksRUFDdkIsU0FBc0IsRUFDdEIsS0FBZ0IsRUFDaEIsTUFBYyxFQUNkLFFBQTBCO1FBQ2pDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUxDLFVBQUssR0FBTCxLQUFLLENBQU87UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUVqQztJQUVLLE1BQU07O1lBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDcEIsQ0FBQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FBQTtJQUVLLE1BQU07O1lBQ1gsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDO2FBQ3REO2lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3RFLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHFDQUFxQyxDQUFDLENBQUM7YUFDdEU7aUJBQU07Z0JBQ04sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQzdCLElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7b0JBQ2pDLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO3dCQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMxQyxNQUFNLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDeEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdEIsTUFBTSxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBRXpHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3BCO29CQUVELE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzFGO3FCQUFNO29CQUNOLE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3RHLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2hEO2FBQ0Q7U0FDRDtLQUFBO0NBQ0Q7QUFFRCxNQUFNLHFCQUFzQixTQUFRQSw0QkFBbUI7SUFDdEQsWUFDUSxLQUFZLEVBQ1osU0FBc0IsRUFDdEIsS0FBZ0IsRUFDaEIsTUFBYyxFQUNkLFFBQTBCO1FBQ2pDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUxWLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQVc7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQWtCO0tBRWpDO0lBRUssTUFBTTs7WUFDWCxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNwQixDQUFBLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztTQUN6QztLQUFBO0lBRUssTUFBTTs7WUFDWCxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUMvQixjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ3RELE9BQU87YUFDUDtZQUVELE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFDL0YsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7WUFHaEQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDL0QsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUscUNBQXFDLENBQUMsQ0FBQzthQUN0RTtTQUNEO0tBQUE7Q0FDRDtBQUVELE1BQU0sb0JBQXFCLFNBQVFBLDRCQUFtQjtJQUlyRCxZQUFtQixLQUFZLEVBQ3ZCLFNBQXNCLEVBQ3RCLEtBQWdCLEVBQ2hCLE1BQWMsRUFDZCxLQUFZLEVBQ1osUUFBMEI7UUFDakMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBTkMsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQVc7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFrQjtLQUVqQztJQUVLLE1BQU07O1lBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQ3hDLElBQUksSUFBSSxDQUFDLFFBQVE7b0JBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRW5ELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDcEIsQ0FBQSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FBQTtJQUVLLE1BQU07O1lBQ1gsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwRixJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDO2FBQ3REO2lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDL0QsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsMkJBQTJCLENBQUMsQ0FBQzthQUM1RDtpQkFBTTtnQkFDTixNQUFNSyxlQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7O2dCQUVwRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSUMsaUJBQXVCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUN2RjtTQUNEO0tBQUE7Q0FDRDtBQUVEO0FBQ0EsTUFBTSxzQkFBdUIsU0FBUU4sNEJBQW1CO0lBS3ZELFlBQ1EsS0FBWSxFQUNOLFNBQWlCLEVBQ3ZCLFNBQXNCLEVBQ3RCLE1BQW1CLEVBQ25CLEtBQWdCLEVBQ2hCLE1BQWMsRUFDZCxRQUEwQjtRQUNqQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFQVixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ04sY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBVztRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FFakM7SUFFSyxNQUFNOztZQUNYLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXBCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztnQkFDeEMsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxNQUFNLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDcEIsQ0FBQSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztTQUNuQztLQUFBO0lBRUssTUFBTTs7WUFDWCxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSw4QkFBOEIsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQzthQUNqRztpQkFBTTtnQkFDRyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRCxNQUFNLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFFbEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7U0FDRDtLQUFBO0NBQ0Q7QUFFRCxNQUFNLGtCQUFtQixTQUFRQSw0QkFBbUI7SUFHbkQsWUFDUSxNQUFjLEVBQ2QsU0FBc0IsRUFDdEIsR0FBUSxFQUNSLEtBQWdCLEVBQ2hCLE1BQWMsRUFDZCxRQUEwQjtRQUNqQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFOVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQ1IsVUFBSyxHQUFMLEtBQUssQ0FBVztRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7S0FFakM7SUFFSyxNQUFNOzs7WUFFWCxJQUFJO2dCQUNILGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFDdEQsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMxRTtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDaEMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9EO1NBQ0Q7S0FBQTs7QUFyQk0sMkJBQVEsR0FBVyx3Q0FBd0M7Ozs7In0=
