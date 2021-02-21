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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var DEFAULT_SETTINGS = {
    timelineTag: 'timeline',
    sortDirection: true
};
function getElement(MultiList, d1, d2, d3) {
    if (MultiList[d1][d2][d3]) {
        return MultiList[d1][d2][d3];
    }
    return "";
}
var TimelinesPlugin = /** @class */ (function (_super) {
    __extends(TimelinesPlugin, _super);
    function TimelinesPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelinesPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Load message
                    return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        // Load message
                        _a.sent();
                        console.log('Loaded Timelines Plugin');
                        this.addSettingTab(new TimelinesSettingTab(this.app, this));
                        this.addCommand({
                            id: "create-timeline",
                            name: "Create Timeline",
                            callback: function () { return _this.addTimeline(); }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelinesPlugin.prototype.onunload = function () {
        console.log('unloading plugin');
    };
    TimelinesPlugin.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelinesPlugin.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelinesPlugin.prototype.FilterMDFiles = function (file, tagList) {
        var fileCache = this.app.metadataCache.getFileCache(file);
        if (fileCache.frontmatter && fileCache.frontmatter.tags) {
            return tagList.every(function (val) { return fileCache.frontmatter.tags.indexOf(val) >= 0; });
        }
        return false;
    };
    TimelinesPlugin.prototype.addTimeline = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var lines, tagList, fileList, timeline, timelineNotes, timelineDates, i, domparser, doc, _c, _d, timelineData, noteId, noteTitle, noteClass, i, noteContainer, noteHeader, j, noteCard;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        lines = this.getLines(this.getEditor());
                        if (!lines)
                            return [2 /*return*/];
                        tagList = lines.split(";");
                        tagList.push(this.settings.timelineTag);
                        fileList = this.app.vault.getMarkdownFiles().filter(function (file) { return _this.FilterMDFiles(file, tagList); });
                        if (!fileList) {
                            // if no files valid for timeline
                            return [2 /*return*/];
                        }
                        timeline = document.createElement('div');
                        timeline.setAttribute('class', 'timeline');
                        timelineNotes = [];
                        timelineDates = [];
                        i = 0;
                        _e.label = 1;
                    case 1:
                        if (!(i < fileList.length)) return [3 /*break*/, 4];
                        domparser = new DOMParser();
                        _d = (_c = domparser).parseFromString;
                        return [4 /*yield*/, this.app.vault.read(fileList[i])];
                    case 2:
                        doc = _d.apply(_c, [_e.sent(), 'text/html']);
                        timelineData = doc.getElementsByClassName('ob-timelines');
                        if (!(timelineData[0] instanceof HTMLElement)) {
                            return [3 /*break*/, 3];
                        }
                        noteId = void 0;
                        // check if a valid date is specified
                        if (timelineData[0].dataset.date[0] == '-') {
                            // if it is a negative year
                            noteId = +timelineData[0].dataset.date.substring(1, timelineData[0].dataset.date.length).split('-').join('') * -1;
                        }
                        else {
                            noteId = +timelineData[0].dataset.date.split('-').join('');
                        }
                        if (!Number.isInteger(noteId)) {
                            return [3 /*break*/, 3];
                        }
                        noteTitle = (_a = timelineData[0].dataset.title) !== null && _a !== void 0 ? _a : fileList[i].name;
                        noteClass = (_b = timelineData[0].dataset["class"]) !== null && _b !== void 0 ? _b : "";
                        if (!timelineNotes[noteId]) {
                            timelineNotes[noteId] = [];
                            timelineNotes[noteId][0] = [timelineData[0].dataset.date, noteTitle, timelineData[0].dataset.img, timelineData[0].innerHTML, fileList[i].path, noteClass];
                            timelineDates.push(noteId);
                        }
                        else {
                            // if note_id already present append to it
                            timelineNotes[noteId][timelineNotes[noteId].length] = [timelineData[0].dataset.date, noteTitle, timelineData[0].dataset.img, timelineData[0].innerHTML, fileList[i].path, noteClass];
                        }
                        _e.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        // Sort events based on setting
                        if (this.settings.sortDirection) {
                            // default is ascending
                            timelineDates = timelineDates.sort(function (d1, d2) { return d1 - d2; });
                        }
                        else {
                            // else it is descending
                            timelineDates = timelineDates.sort(function (d1, d2) { return d2 - d1; });
                        }
                        // Build the timeline html element
                        for (i = 0; i < timelineDates.length; i++) {
                            noteContainer = timeline.createDiv({ cls: 'timeline-container' });
                            noteHeader = noteContainer.createEl('h2', { text: getElement(timelineNotes, timelineDates[i], 0, 0).replace(/-0*$/g, '').replace(/-0*$/g, '').replace(/-0*$/g, '') });
                            if (i % 2 == 0) {
                                // if its even add it to the left
                                noteContainer.addClass('timeline-left');
                            }
                            else {
                                // else add it to the right
                                noteContainer.addClass('timeline-right');
                                noteHeader.setAttribute('style', 'text-align: right;');
                            }
                            if (!timelineNotes[timelineDates[i]]) {
                                continue;
                            }
                            for (j = 0; j < timelineNotes[timelineDates[i]].length; j++) {
                                noteCard = noteContainer.createDiv({ cls: 'timeline-card' });
                                // add an image only if available
                                if (getElement(timelineNotes, timelineDates[i], j, 2)) {
                                    noteCard.createDiv({ cls: 'thumb', attr: { style: "background-image: url(" + getElement(timelineNotes, timelineDates[i], j, 2) + ");" } });
                                }
                                if (getElement(timelineNotes, timelineDates[i], j, 5)) {
                                    noteCard.addClass(getElement(timelineNotes, timelineDates[i], j, 5));
                                }
                                noteCard.createEl('article').createEl('h3').createEl('a', { cls: 'internal-link', attr: { href: "" + getElement(timelineNotes, timelineDates[i], j, 4) }, text: getElement(timelineNotes, timelineDates[i], j, 1) });
                                noteCard.createEl('p', { text: getElement(timelineNotes, timelineDates[i], j, 3) });
                            }
                        }
                        // Replace the selected tags with the timeline html
                        this.setLines(this.getEditor(), [timeline.outerHTML]);
                        return [2 /*return*/];
                }
            });
        });
    };
    TimelinesPlugin.prototype.getEditor = function () {
        var view = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
        if (!view)
            return;
        var cm = view.sourceMode.cmEditor;
        return cm;
    };
    TimelinesPlugin.prototype.getLines = function (editor) {
        if (!editor)
            return;
        var selection = editor.getSelection();
        return selection;
    };
    TimelinesPlugin.prototype.setLines = function (editor, lines) {
        var selection = editor.getSelection();
        if (selection != "") {
            editor.replaceSelection(lines.join("\n"));
        }
        else {
            editor.setValue(lines.join("\n"));
        }
    };
    return TimelinesPlugin;
}(obsidian.Plugin));
var TimelinesSettingTab = /** @class */ (function (_super) {
    __extends(TimelinesSettingTab, _super);
    function TimelinesSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    TimelinesSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Obsidian Timelines Settings' });
        new obsidian.Setting(containerEl)
            .setName('Default timeline tag')
            .setDesc("Tag to specify which notes to include in created timelines e.g. timeline for #timeline tag")
            .addText(function (text) { return text
            .setPlaceholder(_this.plugin.settings.timelineTag)
            .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plugin.settings.timelineTag = value;
                        return [4 /*yield*/, this.plugin.saveSettings()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }); });
        new obsidian.Setting(containerEl)
            .setName('Chronological Direction')
            .setDesc('Default: OLD -> NEW. Turn this setting off: NEW -> OLD')
            .addToggle(function (toggle) {
            toggle.setValue(_this.plugin.settings.sortDirection);
            toggle.onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.sortDirection = value;
                            return [4 /*yield*/, this.plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    return TimelinesSettingTab;
}(obsidian.PluginSettingTab));

module.exports = TimelinesPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgdGltZSB9IGZyb20gJ2NvbnNvbGUnO1xuaW1wb3J0IHsgSXRlbVZpZXcsIE1hcmtkb3duVmlldywgV29ya3NwYWNlTGVhZiwgVEZpbGUsIFRhZ0NhY2hlLCBMaW5rQ2FjaGUsIE1ldGFkYXRhQ2FjaGUsIEFwcCwgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBWYXVsdCB9IGZyb20gJ29ic2lkaWFuJztcblxuaW50ZXJmYWNlIFRpbWVsaW5lc1NldHRpbmdzIHtcblx0dGltZWxpbmVUYWc6IHN0cmluZztcblx0c29ydERpcmVjdGlvbjogYm9vbGVhbjtcbn1cblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogVGltZWxpbmVzU2V0dGluZ3MgPSB7XG5cdHRpbWVsaW5lVGFnOiAndGltZWxpbmUnLFxuXHRzb3J0RGlyZWN0aW9uOiB0cnVlXG59XG5cbmludGVyZmFjZSBDYXJkQ29udGFpbmVyIHtcblx0ZGF0ZTogc3RyaW5nO1xuXHR0aXRsZTogc3RyaW5nO1xuXHRpbWc6IHN0cmluZztcblx0aW5uZXJIVE1MOiBzdHJpbmc7XG5cdHBhdGg6IHN0cmluZztcbn1cblxudHlwZSBOb3RlRGF0YSA9IENhcmRDb250YWluZXJbXTtcbnR5cGUgQWxsTm90ZXNEYXRhID0gTm90ZURhdGFbXTtcblxuZnVuY3Rpb24gZ2V0RWxlbWVudChNdWx0aUxpc3Q6IEFsbE5vdGVzRGF0YSwgZDE6IG51bWJlciwgZDI6IG51bWJlciwgZDM6IG51bWJlcikge1xuXHRpZiAoTXVsdGlMaXN0W2QxXVtkMl1bZDNdKSB7XG5cdFx0cmV0dXJuIE11bHRpTGlzdFtkMV1bZDJdW2QzXTtcblx0fVxuXHRyZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lc1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG5cdHNldHRpbmdzOiBUaW1lbGluZXNTZXR0aW5ncztcblxuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0Ly8gTG9hZCBtZXNzYWdlXG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblx0XHRjb25zb2xlLmxvZygnTG9hZGVkIFRpbWVsaW5lcyBQbHVnaW4nKTtcblxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgVGltZWxpbmVzU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcblx0XHRcdGlkOiBcImNyZWF0ZS10aW1lbGluZVwiLFxuXHRcdFx0bmFtZTogXCJDcmVhdGUgVGltZWxpbmVcIixcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLmFkZFRpbWVsaW5lKClcblx0XHR9KTtcblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXHRcdGNvbnNvbGUubG9nKCd1bmxvYWRpbmcgcGx1Z2luJyk7XG5cdH1cblxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG5cdH1cblxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcblx0fVxuXG5cdEZpbHRlck1ERmlsZXMoZmlsZTogVEZpbGUsIHRhZ0xpc3Q6IFN0cmluZ1tdKSB7XG5cdFx0dmFyIGZpbGVDYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuXHRcdGlmIChmaWxlQ2FjaGUuZnJvbnRtYXR0ZXIgJiYgZmlsZUNhY2hlLmZyb250bWF0dGVyLnRhZ3MpIHtcblx0XHRcdHJldHVybiB0YWdMaXN0LmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGZpbGVDYWNoZS5mcm9udG1hdHRlci50YWdzLmluZGV4T2YodmFsKSA+PSAwOyB9KVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRhc3luYyBhZGRUaW1lbGluZSgpIHtcblxuXHRcdGNvbnN0IGxpbmVzID0gdGhpcy5nZXRMaW5lcyh0aGlzLmdldEVkaXRvcigpKTtcblx0XHRpZiAoIWxpbmVzKSByZXR1cm47XG5cdFx0Ly8gUGFyc2UgdGhlIHRhZ3MgdG8gc2VhcmNoIGZvciB0aGUgcHJvcGVyIGZpbGVzXG5cdFx0Y29uc3QgdGFnTGlzdCA9IGxpbmVzLnNwbGl0KFwiO1wiKTtcblx0XHR0YWdMaXN0LnB1c2godGhpcy5zZXR0aW5ncy50aW1lbGluZVRhZylcblx0XHQvLyBGaWx0ZXIgYWxsIG1hcmtkb3duIGZpbGVzIHRvIG9ubHkgdGhvc2UgY29udGFpbmluZyB0aGUgdGFnIGxpc3Rcblx0XHRsZXQgZmlsZUxpc3QgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKGZpbGUgPT4gdGhpcy5GaWx0ZXJNREZpbGVzKGZpbGUsIHRhZ0xpc3QpKTtcblx0XHRpZiAoIWZpbGVMaXN0KSB7XG5cdFx0XHQvLyBpZiBubyBmaWxlcyB2YWxpZCBmb3IgdGltZWxpbmVcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gS2VlcCBvbmx5IHRoZSBmaWxlcyB0aGF0IGhhdmUgdGhlIHRpbWUgaW5mb1xuXHRcdGxldCB0aW1lbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRpbWVsaW5lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGltZWxpbmUnKVxuXHRcdGxldCB0aW1lbGluZU5vdGVzID0gW107XG5cdFx0bGV0IHRpbWVsaW5lRGF0ZXMgPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIENyZWF0ZSBhIERPTSBQYXJzZXJcblx0XHRcdGNvbnN0IGRvbXBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxuXHRcdFx0Y29uc3QgZG9jID0gZG9tcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGVMaXN0W2ldKSwgJ3RleHQvaHRtbCcpXG5cdFx0XHRsZXQgdGltZWxpbmVEYXRhID0gZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29iLXRpbWVsaW5lcycpXG5cdFx0XHRpZiAoISh0aW1lbGluZURhdGFbMF0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBub3RlSWQ7XG5cdFx0XHQvLyBjaGVjayBpZiBhIHZhbGlkIGRhdGUgaXMgc3BlY2lmaWVkXG5cdFx0XHRpZih0aW1lbGluZURhdGFbMF0uZGF0YXNldC5kYXRlWzBdID09ICctJyl7XG5cdFx0XHRcdC8vIGlmIGl0IGlzIGEgbmVnYXRpdmUgeWVhclxuXHRcdFx0XHRub3RlSWQgPSArdGltZWxpbmVEYXRhWzBdLmRhdGFzZXQuZGF0ZS5zdWJzdHJpbmcoMSwgdGltZWxpbmVEYXRhWzBdLmRhdGFzZXQuZGF0ZS5sZW5ndGgpLnNwbGl0KCctJykuam9pbignJykgKiAtMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vdGVJZCA9ICt0aW1lbGluZURhdGFbMF0uZGF0YXNldC5kYXRlLnNwbGl0KCctJykuam9pbignJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIU51bWJlci5pc0ludGVnZXIobm90ZUlkKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIGlmIG5vdCB0aXRsZSBpcyBzcGVjaWZpZWQgdXNlIG5vdGUgbmFtZVxuXHRcdFx0bGV0IG5vdGVUaXRsZSA9IHRpbWVsaW5lRGF0YVswXS5kYXRhc2V0LnRpdGxlID8/IGZpbGVMaXN0W2ldLm5hbWU7XG4gICAgICBsZXQgbm90ZUNsYXNzID0gdGltZWxpbmVEYXRhWzBdLmRhdGFzZXQuY2xhc3MgPz8gXCJcIjtcblxuXHRcdFx0aWYgKCF0aW1lbGluZU5vdGVzW25vdGVJZF0pIHtcblx0XHRcdFx0dGltZWxpbmVOb3Rlc1tub3RlSWRdID0gW107XG5cdFx0XHRcdHRpbWVsaW5lTm90ZXNbbm90ZUlkXVswXSA9IFt0aW1lbGluZURhdGFbMF0uZGF0YXNldC5kYXRlLCBub3RlVGl0bGUsIHRpbWVsaW5lRGF0YVswXS5kYXRhc2V0LmltZywgdGltZWxpbmVEYXRhWzBdLmlubmVySFRNTCwgZmlsZUxpc3RbaV0ucGF0aCwgbm90ZUNsYXNzXTtcblx0XHRcdFx0dGltZWxpbmVEYXRlcy5wdXNoKG5vdGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpZiBub3RlX2lkIGFscmVhZHkgcHJlc2VudCBhcHBlbmQgdG8gaXRcblx0XHRcdFx0dGltZWxpbmVOb3Rlc1tub3RlSWRdW3RpbWVsaW5lTm90ZXNbbm90ZUlkXS5sZW5ndGhdID0gW3RpbWVsaW5lRGF0YVswXS5kYXRhc2V0LmRhdGUsIG5vdGVUaXRsZSwgdGltZWxpbmVEYXRhWzBdLmRhdGFzZXQuaW1nLCB0aW1lbGluZURhdGFbMF0uaW5uZXJIVE1MLCBmaWxlTGlzdFtpXS5wYXRoLCBub3RlQ2xhc3NdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNvcnQgZXZlbnRzIGJhc2VkIG9uIHNldHRpbmdcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5zb3J0RGlyZWN0aW9uKSB7XG5cdFx0XHQvLyBkZWZhdWx0IGlzIGFzY2VuZGluZ1xuXHRcdFx0dGltZWxpbmVEYXRlcyA9IHRpbWVsaW5lRGF0ZXMuc29ydCgoZDEsIGQyKSA9PiBkMSAtIGQyKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBlbHNlIGl0IGlzIGRlc2NlbmRpbmdcblx0XHRcdHRpbWVsaW5lRGF0ZXMgPSB0aW1lbGluZURhdGVzLnNvcnQoKGQxLCBkMikgPT4gZDIgLSBkMSlcblx0XHR9XG5cblx0XHQvLyBCdWlsZCB0aGUgdGltZWxpbmUgaHRtbCBlbGVtZW50XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lbGluZURhdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm90ZUNvbnRhaW5lciA9IHRpbWVsaW5lLmNyZWF0ZURpdih7IGNsczogJ3RpbWVsaW5lLWNvbnRhaW5lcicgfSk7XG5cdFx0XHRsZXQgbm90ZUhlYWRlciA9IG5vdGVDb250YWluZXIuY3JlYXRlRWwoJ2gyJywge3RleHQ6IGdldEVsZW1lbnQodGltZWxpbmVOb3RlcywgdGltZWxpbmVEYXRlc1tpXSwgMCwgMCkucmVwbGFjZSgvLTAqJC9nLCAnJykucmVwbGFjZSgvLTAqJC9nLCAnJykucmVwbGFjZSgvLTAqJC9nLCAnJyl9KVxuXHRcdFx0aWYgKGkgJSAyID09IDApIHtcblx0XHRcdFx0Ly8gaWYgaXRzIGV2ZW4gYWRkIGl0IHRvIHRoZSBsZWZ0XG5cdFx0XHRcdG5vdGVDb250YWluZXIuYWRkQ2xhc3MoJ3RpbWVsaW5lLWxlZnQnKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gZWxzZSBhZGQgaXQgdG8gdGhlIHJpZ2h0XG5cdFx0XHRcdG5vdGVDb250YWluZXIuYWRkQ2xhc3MoJ3RpbWVsaW5lLXJpZ2h0Jyk7XG5cdFx0XHRcdG5vdGVIZWFkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICd0ZXh0LWFsaWduOiByaWdodDsnKVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIXRpbWVsaW5lTm90ZXNbdGltZWxpbmVEYXRlc1tpXV0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGltZWxpbmVOb3Rlc1t0aW1lbGluZURhdGVzW2ldXS5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRsZXQgbm90ZUNhcmQgPSBub3RlQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogJ3RpbWVsaW5lLWNhcmQnIH0pXG5cdFx0XHRcdC8vIGFkZCBhbiBpbWFnZSBvbmx5IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRpZiAoZ2V0RWxlbWVudCh0aW1lbGluZU5vdGVzLCB0aW1lbGluZURhdGVzW2ldLCBqLCAyKSkge1xuXHRcdFx0XHRcdG5vdGVDYXJkLmNyZWF0ZURpdih7IGNsczogJ3RodW1iJywgYXR0cjogeyBzdHlsZTogYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2dldEVsZW1lbnQodGltZWxpbmVOb3RlcywgdGltZWxpbmVEYXRlc1tpXSwgaiwgMil9KTtgIH0gfSk7XG5cdFx0XHRcdH1cbiAgICAgICAgaWYgKGdldEVsZW1lbnQodGltZWxpbmVOb3RlcywgdGltZWxpbmVEYXRlc1tpXSwgaiwgNSkpIHtcbiAgICAgICAgICBub3RlQ2FyZC5hZGRDbGFzcyhnZXRFbGVtZW50KHRpbWVsaW5lTm90ZXMsIHRpbWVsaW5lRGF0ZXNbaV0sIGosIDUpKTtcbiAgICAgICAgfVxuXG5cdFx0XHRcdG5vdGVDYXJkLmNyZWF0ZUVsKCdhcnRpY2xlJykuY3JlYXRlRWwoJ2gzJykuY3JlYXRlRWwoJ2EnLCB7IGNsczogJ2ludGVybmFsLWxpbmsnLCBhdHRyOiB7IGhyZWY6IGAke2dldEVsZW1lbnQodGltZWxpbmVOb3RlcywgdGltZWxpbmVEYXRlc1tpXSwgaiwgNCl9YH0sIHRleHQ6IGdldEVsZW1lbnQodGltZWxpbmVOb3RlcywgdGltZWxpbmVEYXRlc1tpXSwgaiwgMSl9KVxuXHRcdFx0XHRub3RlQ2FyZC5jcmVhdGVFbCgncCcsIHt0ZXh0OiBnZXRFbGVtZW50KHRpbWVsaW5lTm90ZXMsIHRpbWVsaW5lRGF0ZXNbaV0sIGosIDMpfSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXBsYWNlIHRoZSBzZWxlY3RlZCB0YWdzIHdpdGggdGhlIHRpbWVsaW5lIGh0bWxcblx0XHR0aGlzLnNldExpbmVzKHRoaXMuZ2V0RWRpdG9yKCksIFt0aW1lbGluZS5vdXRlckhUTUxdKTtcblx0fVxuXG5cdGdldEVkaXRvcigpOiBDb2RlTWlycm9yLkVkaXRvciB7XG5cdFx0bGV0IHZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xuXHRcdGlmICghdmlldykgcmV0dXJuO1xuXG5cdFx0bGV0IGNtID0gdmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xuXHRcdHJldHVybiBjbTtcblx0fVxuXG5cdGdldExpbmVzKGVkaXRvcjogQ29kZU1pcnJvci5FZGl0b3IpOiBzdHJpbmcge1xuXHRcdGlmICghZWRpdG9yKSByZXR1cm47XG5cdFx0Y29uc3Qgc2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xuXHRcdHJldHVybiBzZWxlY3Rpb247XG5cdH1cblxuXHRzZXRMaW5lcyhlZGl0b3I6IENvZGVNaXJyb3IuRWRpdG9yLCBsaW5lczogc3RyaW5nW10pIHtcblx0XHRjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0aWYgKHNlbGVjdGlvbiAhPSBcIlwiKSB7XG5cdFx0XHRlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihsaW5lcy5qb2luKFwiXFxuXCIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWRpdG9yLnNldFZhbHVlKGxpbmVzLmpvaW4oXCJcXG5cIikpO1xuXHRcdH1cblx0fVxufVxuXG5jbGFzcyBUaW1lbGluZXNTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cdHBsdWdpbjogVGltZWxpbmVzUGx1Z2luO1xuXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IFRpbWVsaW5lc1BsdWdpbikge1xuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcblx0fVxuXG5cdGRpc3BsYXkoKTogdm9pZCB7XG5cdFx0bGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG5cblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xuXHRcdGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ09ic2lkaWFuIFRpbWVsaW5lcyBTZXR0aW5ncycgfSk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKCdEZWZhdWx0IHRpbWVsaW5lIHRhZycpXG5cdFx0XHQuc2V0RGVzYyhcIlRhZyB0byBzcGVjaWZ5IHdoaWNoIG5vdGVzIHRvIGluY2x1ZGUgaW4gY3JlYXRlZCB0aW1lbGluZXMgZS5nLiB0aW1lbGluZSBmb3IgI3RpbWVsaW5lIHRhZ1wiKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcih0aGlzLnBsdWdpbi5zZXR0aW5ncy50aW1lbGluZVRhZylcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnRpbWVsaW5lVGFnID0gdmFsdWU7XG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cdFx0XHRcdH0pKTtcblxuXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG5cdFx0XHQuc2V0TmFtZSgnQ2hyb25vbG9naWNhbCBEaXJlY3Rpb24nKVxuXHRcdFx0LnNldERlc2MoJ0RlZmF1bHQ6IE9MRCAtPiBORVcuIFR1cm4gdGhpcyBzZXR0aW5nIG9mZjogTkVXIC0+IE9MRCcpXG5cdFx0XHQuYWRkVG9nZ2xlKCh0b2dnbGUpID0+IHtcblx0XHRcdFx0dG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNvcnREaXJlY3Rpb24pO1xuXHRcdFx0XHR0b2dnbGUub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3Muc29ydERpcmVjdGlvbiA9IHZhbHVlO1xuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrZG93blZpZXciLCJQbHVnaW4iLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFH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
