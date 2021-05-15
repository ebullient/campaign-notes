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
        else if (isObject(val))
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
        return typeof val == "object";
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
        else if (Fields.isLink(field)) {
            yield renderCompactMarkdown(field.markdown(), container, originFile, component);
        }
        else if (Fields.isHtml(field)) {
            container.appendChild(field);
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
                for (let [key, value] of Object.entries(field)) {
                    let li = list.createEl('li', { cls: ['dataview', 'dataview-li', 'dataview-result-object-li'] });
                    li.appendText(key + ": ");
                    yield renderValue(value, li, originFile, component, nullField, expandList);
                }
            }
            else {
                let span = container.createEl("span", { cls: ['dataview', 'dataview-result-object-span'] });
                let first = true;
                for (let [key, value] of Object.entries(field)) {
                    if (first)
                        first = false;
                    else
                        span.appendText(", ");
                    span.appendText(key + ": ");
                    yield renderValue(value, span, originFile, component, nullField, expandList);
                }
            }
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
    concat(other) {
        return DataArrayImpl.wrap(this.values.concat(other.values), this.defaultComparator);
    }
    /** Return the first index of the given (optionally starting the search) */
    indexOf(element, fromIndex) {
        return this.findIndex(e => this.defaultComparator(e, element) == 0);
    }
    /** Return the first element that satisfies the given predicate. */
    find(pred) {
        let index = this.findIndex(pred);
        if (index == -1)
            return undefined;
        else
            return this.values[index];
    }
    findIndex(pred) {
        for (let index = 0; index < this.length; index++) {
            if (pred(this.values[index], index, this.values))
                return index;
        }
        return -1;
    }
    includes(element) {
        return this.indexOf(element, 0) != -1;
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
        return DataArray.wrap(result);
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
    "where", "filter", "map", "flatMap", "slice", "concat", "indexOf", "find", "findIndex", "includes",
    "sort", "groupBy", "distinct", "every", "some", "none", "first", "last", "to",
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
var DataArray;
(function (DataArray) {
    /** Create a new Dataview data array. */
    function wrap(raw) {
        return DataArrayImpl.wrap(raw);
    }
    DataArray.wrap = wrap;
    /** Return true if the given object is a data array. */
    function isDataArray(obj) {
        return obj instanceof DataArrayImpl;
    }
    DataArray.isDataArray = isDataArray;
})(DataArray || (DataArray = {}));

/** Fancy wrappers for the JavaScript API, used both by external plugins AND by the dataview javascript view. */
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
            return DataArray.wrap(Array.from(collectFromSource(source, this.index, this.currentFilePath)));
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
    /////////////
    // Utility //
    /////////////
    /**
     * Convert an input element or array into a Dataview data-array. If the input is already a data array,
     * it is returned unchanged.
     */
    array(raw) {
        if (DataArray.isDataArray(raw))
            return raw;
        if (Array.isArray(raw))
            return DataArray.wrap(raw);
        return DataArray.wrap([raw]);
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
        if (DataArray.isDataArray(values))
            values = values.array();
        renderList(this.container, values, this.component, this.currentFilePath, "\-");
    }
    /** Render a dataview table with the given headers, and the 2D array of values. */
    table(headers, values) {
        if (!values)
            values = [];
        if (DataArray.isDataArray(values))
            values = values.array();
        renderTable(this.container, headers, values, this.component, this.currentFilePath, "\-");
    }
    /** Render a dataview task view with the given tasks. */
    taskList(tasks, groupByFile = false) {
        var _a;
        if (DataArray.isDataArray(tasks))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sdXhvbi9idWlsZC9janMtYnJvd3Nlci9sdXhvbi5qcyIsIi4uL3NyYy91dGlsL25vcm1hbGl6ZS50cyIsIi4uL3NyYy9xdWVyeS50cyIsIi4uL3NyYy9yZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvcGFyc2ltbW9uL2J1aWxkL3BhcnNpbW1vbi51bWQubWluLmpzIiwiLi4vc3JjL3BhcnNlLnRzIiwiLi4vc3JjL2ZpbGUudHMiLCIuLi9zcmMvaW5kZXgudHMiLCIuLi9zcmMvdGFza3MudHMiLCIuLi9zcmMvZXZhbC50cyIsIi4uL3NyYy9lbmdpbmUudHMiLCIuLi9zcmMvdXRpbC9jb25jdXJyZW5jeS50cyIsIi4uL3NyYy9hcGkvZGF0YS1hcnJheS50cyIsIi4uL3NyYy9hcGkvaW5saW5lLWFwaS50cyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6WyJEdXJhdGlvbiIsIkRhdGVUaW1lIiwiTWFya2Rvd25SZW5kZXJlciIsInRoaXMiLCJQLnNlcU1hcCIsIlAuc2VxIiwiUC5vcHRXaGl0ZXNwYWNlIiwiUC5jdXN0b20iLCJQLmNyZWF0ZUxhbmd1YWdlIiwiUC5yZWdleHAiLCJQLnN0cmluZyIsIlAuYWx0IiwiUC5ub25lT2YiLCJQLmFueSIsIlAuZmFpbCIsIlAuc3VjY2VlZCIsIlAud2hpdGVzcGFjZSIsIlAuc2VwQnkiLCJnZXRBbGxUYWdzIiwicGFyc2VGcm9udE1hdHRlclRhZ3MiLCJwYXJzZUZyb250TWF0dGVyQWxpYXNlcyIsIlRGaWxlIiwiTWFya2Rvd25SZW5kZXJDaGlsZCIsIkNvbXBvbmVudCIsIlBsdWdpbiIsIlBsdWdpblNldHRpbmdUYWIiLCJTZXR0aW5nIiwiVGFza3MucmVuZGVyRmlsZVRhc2tzIiwiVGFza3MuVGFza1ZpZXdMaWZlY3ljbGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdURBO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElB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QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLENBQUM7QUFDRCxTQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ2xDLEVBQUUsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUM1QyxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQztBQUNBLEVBQUUsSUFBSSxRQUFRLEtBQUssQ0FBQyxFQUFFO0FBQ3RCLElBQUksT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUN6QyxHQUFHLE1BQU07QUFDVCxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0EsU0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFO0FBQzNCLEVBQUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hHO0FBQ0EsRUFBRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO0FBQ3ZDLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FB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S0FBSztBQUNsQixVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlDO0FBQ0E7QUFDQSxRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEM7QUFDQSxRQUFRLEtBQUssSUFBSTtBQUNqQixVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0E7QUFDQSxRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEM7QUFDQSxRQUFRLEtBQUssSUFBSTtBQUNqQixVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0E7QUFDQSxRQUFRLEtBQUssR0FBRztBQUNoQixVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDbkU7QUFDQSxRQUFRLEtBQUssSUFBSTtBQUNqQixVQUFVLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RFO0FBQ0EsUUFBUSxLQUFLLEdBQUc7QUFDaEIsVUFBVSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDO0FBQ0EsUUFBUSxLQUFLLElBQUk7QUFDakIsVUFBVSxPQUFPLEtBQUssQ0FB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TUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztBQUM3QixVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLFVBQVUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkIsVUFBVSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCO0FBQ0EsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQUUsVUFBVSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQyxHQUFHLENBQUM7QUFDSixDQUFDO0FBQ0Q7QUFDQSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDbEIsRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDakIsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hCLEdBQUc7QUFDSDtBQUNBLEVBQUUsS0FBSyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQ3pILElBQUksUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsR0FBRztBQUNIO0FBQ0EsRUFBRSxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsUUFBUSxFQUFFLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFF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U0FBUyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUMzRCxFQUFFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUk7QUFDcEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1RDtBQUNBLEVBQUUsS0FBSyxHQUFHLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDO0FBQ3pCLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDcEMsQ0FBQztBQUNEO0FBQ0E7QUFDQSxTQUFTLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDLEVBQUUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDbkQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQ3JDLE1BQU0sSUFBSSxRQUFRLEVBQUU7QUFDcEIsUUFBUSxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELE9BQU87QUFDUDtBQUNBLE1BQU0sT0FBTyxPQUFPLENBQUM7QUFDckIsS0FBSyxNQUFNO0FB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QUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRTtBQUNqRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ3BDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRTtBQUM3QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ3BDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ3BDLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ2xELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUN6QyxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFD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SyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQ3hHLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQyxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUNuRSxNQUFNLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDM0IsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsTUFBTSxDQUFDLFFBQVEsR0FBRyxTQUFTLFFBQVEsR0FBRztBQUN4QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sU0FBUyxDQUFDO0FBQ3hDLElBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDcEUsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLFNBQVMsQ0FBQztBQUN4QyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENB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QUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDOUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLFNBQVM7QUFDbEIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDOUQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLE9BQU87QUFDaEIsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQy9DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxLQUFLO0FBQ2QsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzdDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxNQUFNO0FBQ2YsSUFBSSxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQzlDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcs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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTSxXQUFXLEVBQUUsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQywrRkFBK0YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsMkVBQTJFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQywwREFBMEQsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFNLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLE1BQU0sQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGdJQUFnSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENB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RSxDQUFDLEVBQUUsS0FBSztRQUN4RixPQUFPUixjQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0tBQzdGLENBQUMsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUM7SUFDL0MsSUFBSSxFQUFFLENBQUMsSUFBSSxRQUFRLENBQVcsQ0FBQyxDQUFDLFFBQVEsRUFDcEMsQ0FBQyxFQUFZLEtBQUtHLHdCQUFRLENBQUNNLHdCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUVELHdCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDL0csQ0FBQyxHQUFhLEtBQUtMLHdCQUFRLENBQUNNLHdCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUVELHdCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDcEgsQ0FBQyxJQUFjLEtBQUtMLHdCQUFRLENBQUNNLHdCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUVELHdCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDNUgsQ0FBQyxLQUFlLEtBQUtMLHdCQUFRLENBQUNNLHdCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUVELHdCQUFRLENBQUMsT0FBTyxDQUFD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QUFLLEVBQUUsQ0FBQTtLQUNsQztDQUNKO0FBRUQ7QUFDTyxNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFOztLQUU3QyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEUsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RSxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEUsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUNyQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2pELEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7Q0FDL0MsQ0FBQzs7S0FFRCxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzlFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDdkcsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUNyQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNoRSxDQUFDOztLQUVELEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQzNKLENBQUMsQ0FBQztLQUNELGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFDbkIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0NBQy9DLENBQUM7O0tBRUQsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hILEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqSCxhQUFhLENBQUMsVUFBVSxFQUFFO0lBQ3ZCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztDQUMvQyxDQUFDOztLQUVELE9BQU8sQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDekYsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7S0FFdEYsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsS0FBSyxDQUFFLEVBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O0tBRTFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9CLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7UUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FB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LE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEksUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFN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
