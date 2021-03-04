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

function getElement(MultiList, d1, d2, d3) {
    if (MultiList[d1][d2][d3]) {
        return MultiList[d1][d2][d3];
    }
    return "";
}
function FilterMDFiles(file, tagList, metadataCache) {
    var fileCache = metadataCache.getFileCache(file);
    var tags = [];
    if (fileCache && fileCache.tags) {
        tags = fileCache.tags.map(function (i) { return i.tag.substring(1); });
    }
    if (fileCache.frontmatter && fileCache.frontmatter.tags) {
        return tagList.every(function (val) { return fileCache.frontmatter.tags.concat(tags).indexOf(val) >= 0; });
    }
    return false;
}

var TimelineProcessor = /** @class */ (function () {
    function TimelineProcessor() {
    }
    TimelineProcessor.prototype.run = function (source, el, settings, vaultFiles, fileCache, appVault) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var lines, tagList, fileList, timeline, timelineNotes, timelineDates, i, domparser, doc, _c, _d, timelineData, j, element, noteId, noteTitle, noteClass, notePath, i, noteContainer, noteHeader, j_1, noteCard;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        lines = source.trim();
                        el.createDiv({ cls: 'timeline' });
                        if (!lines)
                            return [2 /*return*/];
                        tagList = lines.split(";");
                        tagList.push(settings.timelineTag);
                        fileList = vaultFiles.filter(function (file) { return FilterMDFiles(file, tagList, fileCache); });
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
                        return [4 /*yield*/, appVault.read(fileList[i])];
                    case 2:
                        doc = _d.apply(_c, [_e.sent(), 'text/html']);
                        timelineData = doc.getElementsByClassName('ob-timelines');
                        for (j = 0; j < timelineData.length; j++) {
                            element = timelineData[j];
                            if (!(element instanceof HTMLElement)) {
                                continue;
                            }
                            noteId = void 0;
                            // check if a valid date is specified
                            if (element.dataset.date[0] == '-') {
                                // if it is a negative year
                                noteId = +element.dataset.date.substring(1, element.dataset.date.length).split('-').join('') * -1;
                            }
                            else {
                                noteId = +element.dataset.date.split('-').join('');
                            }
                            if (!Number.isInteger(noteId)) {
                                continue;
                            }
                            noteTitle = (_a = element.dataset.title) !== null && _a !== void 0 ? _a : fileList[i].name;
                            noteClass = (_b = element.dataset["class"]) !== null && _b !== void 0 ? _b : "";
                            notePath = '/' + fileList[i].path;
                            if (!timelineNotes[noteId]) {
                                timelineNotes[noteId] = [];
                                timelineNotes[noteId][0] = [element.dataset.date, noteTitle, element.dataset.img, element.innerHTML, notePath, noteClass];
                                timelineDates.push(noteId);
                            }
                            else {
                                // if note_id already present append to it
                                timelineNotes[noteId][timelineNotes[noteId].length] = [element.dataset.date, noteTitle, element.dataset.img, element.innerHTML, notePath, noteClass];
                            }
                        }
                        _e.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        // Sort events based on setting
                        if (settings.sortDirection) {
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
                            for (j_1 = 0; j_1 < timelineNotes[timelineDates[i]].length; j_1++) {
                                noteCard = noteContainer.createDiv({ cls: 'timeline-card' });
                                // add an image only if available
                                if (getElement(timelineNotes, timelineDates[i], j_1, 2)) {
                                    noteCard.createDiv({ cls: 'thumb', attr: { style: "background-image: url(" + getElement(timelineNotes, timelineDates[i], j_1, 2) + ");" } });
                                }
                                if (getElement(timelineNotes, timelineDates[i], j_1, 5)) {
                                    noteCard.addClass(getElement(timelineNotes, timelineDates[i], j_1, 5));
                                }
                                noteCard.createEl('article').createEl('h3').createEl('a', { cls: 'internal-link', attr: { href: "" + getElement(timelineNotes, timelineDates[i], j_1, 4) }, text: getElement(timelineNotes, timelineDates[i], j_1, 1) });
                                noteCard.createEl('p', { text: getElement(timelineNotes, timelineDates[i], j_1, 3) });
                            }
                        }
                        // Replace the selected tags with the timeline html
                        el.appendChild(timeline);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TimelineProcessor;
}());

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
                        // Register timeline block renderer
                        this.registerMarkdownCodeBlockProcessor('timeline', function (source, el, ctx) { return __awaiter(_this, void 0, void 0, function () {
                            var proc;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        proc = new TimelineProcessor();
                                        source.split("\n");
                                        return [4 /*yield*/, proc.run(source, el, this.settings, this.app.vault.getMarkdownFiles(), this.app.metadataCache, this.app.vault)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.addSettingTab(new TimelinesSettingTab(this.app, this));
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
    return TimelinesPlugin;
}(obsidian.Plugin));

module.exports = TimelinesPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9jb25zdGFudHMudHMiLCJzcmMvc2V0dGluZ3MudHMiLCJzcmMvdXRpbHMudHMiLCJzcmMvYmxvY2sudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IFRpbWVsaW5lc1NldHRpbmdzIH0gZnJvbSAnLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFRpbWVsaW5lc1NldHRpbmdzID0ge1xuICAgIHRpbWVsaW5lVGFnOiAndGltZWxpbmUnLFxuICAgIHNvcnREaXJlY3Rpb246IHRydWVcbn0iLCJpbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tICdvYnNpZGlhbidcbmltcG9ydCBUaW1lbGluZXNQbHVnaW4gZnJvbSAnLi9tYWluJ1xuXG5leHBvcnQgY2xhc3MgVGltZWxpbmVzU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuXHRwbHVnaW46IFRpbWVsaW5lc1BsdWdpbjtcblxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBUaW1lbGluZXNQbHVnaW4pIHtcblx0XHRzdXBlcihhcHAsIHBsdWdpbik7XG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XG5cdH1cblxuXHRkaXNwbGF5KCk6IHZvaWQge1xuXHRcdGxldCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuXG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcblx0XHRjb250YWluZXJFbC5jcmVhdGVFbCgnaDInLCB7IHRleHQ6ICdPYnNpZGlhbiBUaW1lbGluZXMgU2V0dGluZ3MnIH0pO1xuXG5cdFx0bmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG5cdFx0XHQuc2V0TmFtZSgnRGVmYXVsdCB0aW1lbGluZSB0YWcnKVxuXHRcdFx0LnNldERlc2MoXCJUYWcgdG8gc3BlY2lmeSB3aGljaCBub3RlcyB0byBpbmNsdWRlIGluIGNyZWF0ZWQgdGltZWxpbmVzIGUuZy4gdGltZWxpbmUgZm9yICN0aW1lbGluZSB0YWdcIilcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIodGhpcy5wbHVnaW4uc2V0dGluZ3MudGltZWxpbmVUYWcpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy50aW1lbGluZVRhZyA9IHZhbHVlO1xuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHR9KSk7XG5cblxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuXHRcdFx0LnNldE5hbWUoJ0Nocm9ub2xvZ2ljYWwgRGlyZWN0aW9uJylcblx0XHRcdC5zZXREZXNjKCdEZWZhdWx0OiBPTEQgLT4gTkVXLiBUdXJuIHRoaXMgc2V0dGluZyBvZmY6IE5FVyAtPiBPTEQnKVxuXHRcdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB7XG5cdFx0XHRcdHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zb3J0RGlyZWN0aW9uKTtcblx0XHRcdFx0dG9nZ2xlLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLnNvcnREaXJlY3Rpb24gPSB2YWx1ZTtcblx0XHRcdFx0XHRhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KVxuXHR9XG59XG4iLCJpbXBvcnQgdHlwZSB7IEFsbE5vdGVzRGF0YSB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgdHlwZSB7IFRGaWxlLCBNZXRhZGF0YUNhY2hlIH0gZnJvbSAnb2JzaWRpYW4nXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KE11bHRpTGlzdDogQWxsTm90ZXNEYXRhLCBkMTogbnVtYmVyLCBkMjogbnVtYmVyLCBkMzogbnVtYmVyKSB7XG4gICAgaWYgKE11bHRpTGlzdFtkMV1bZDJdW2QzXSkge1xuICAgICAgICByZXR1cm4gTXVsdGlMaXN0W2QxXVtkMl1bZDNdO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWx0ZXJNREZpbGVzKGZpbGU6IFRGaWxlLCB0YWdMaXN0OiBTdHJpbmdbXSwgbWV0YWRhdGFDYWNoZTogTWV0YWRhdGFDYWNoZSkge1xuICAgIHZhciBmaWxlQ2FjaGUgPSBtZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBsZXQgdGFncyA9IFtdO1xuXG4gICAgaWYgKGZpbGVDYWNoZSAmJiBmaWxlQ2FjaGUudGFncykge1xuICAgICAgICB0YWdzID0gZmlsZUNhY2hlLnRhZ3MubWFwKGkgPT4gaS50YWcuc3Vic3RyaW5nKDEsKSlcbiAgICB9XG5cbiAgICBpZiAoZmlsZUNhY2hlLmZyb250bWF0dGVyICYmIGZpbGVDYWNoZS5mcm9udG1hdHRlci50YWdzKSB7XG4gICAgICAgIHJldHVybiB0YWdMaXN0LmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIGZpbGVDYWNoZS5mcm9udG1hdHRlci50YWdzLmNvbmNhdCh0YWdzKS5pbmRleE9mKHZhbCkgPj0gMDsgfSlcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufSIsIi8vaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9zdmVsdGUvR2FsbGVyeS5zdmVsdGUnXG5pbXBvcnQgdHlwZSB7IFRpbWVsaW5lc1NldHRpbmdzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFRGaWxlLCBNZXRhZGF0YUNhY2hlLCBWYXVsdCB9IGZyb20gJ29ic2lkaWFuJ1xuaW1wb3J0IHsgRmlsdGVyTURGaWxlcywgZ2V0RWxlbWVudCB9IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBjbGFzcyBUaW1lbGluZVByb2Nlc3NvciB7XG5cblx0YXN5bmMgcnVuKHNvdXJjZTogc3RyaW5nLCBlbDogSFRNTEVsZW1lbnQsIHNldHRpbmdzOiBUaW1lbGluZXNTZXR0aW5ncywgdmF1bHRGaWxlczogVEZpbGVbXSwgZmlsZUNhY2hlOiBNZXRhZGF0YUNhY2hlLCBhcHBWYXVsdDogVmF1bHQpIHtcblxuXHRcdGxldCBsaW5lcyA9IHNvdXJjZS50cmltKClcblx0XHRsZXQgZWxDYW52YXMgPSBlbC5jcmVhdGVEaXYoeyBjbHM6ICd0aW1lbGluZScgfSk7XG5cblx0XHRpZiAoIWxpbmVzKSByZXR1cm47XG5cdFx0Ly8gUGFyc2UgdGhlIHRhZ3MgdG8gc2VhcmNoIGZvciB0aGUgcHJvcGVyIGZpbGVzXG5cdFx0bGV0IHRhZ0xpc3QgPSBsaW5lcy5zcGxpdChcIjtcIik7XG5cdFx0dGFnTGlzdC5wdXNoKHNldHRpbmdzLnRpbWVsaW5lVGFnKVxuXHRcdC8vIEZpbHRlciBhbGwgbWFya2Rvd24gZmlsZXMgdG8gb25seSB0aG9zZSBjb250YWluaW5nIHRoZSB0YWcgbGlzdFxuXHRcdGxldCBmaWxlTGlzdCA9IHZhdWx0RmlsZXMuZmlsdGVyKGZpbGUgPT4gRmlsdGVyTURGaWxlcyhmaWxlLCB0YWdMaXN0LCBmaWxlQ2FjaGUpKTtcblx0XHRpZiAoIWZpbGVMaXN0KSB7XG5cdFx0XHQvLyBpZiBubyBmaWxlcyB2YWxpZCBmb3IgdGltZWxpbmVcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gS2VlcCBvbmx5IHRoZSBmaWxlcyB0aGF0IGhhdmUgdGhlIHRpbWUgaW5mb1xuXHRcdGxldCB0aW1lbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRpbWVsaW5lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGltZWxpbmUnKVxuXHRcdGxldCB0aW1lbGluZU5vdGVzID0gW107XG5cdFx0bGV0IHRpbWVsaW5lRGF0ZXMgPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIENyZWF0ZSBhIERPTSBQYXJzZXJcblx0XHRcdGNvbnN0IGRvbXBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxuXHRcdFx0Y29uc3QgZG9jID0gZG9tcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhhd2FpdCBhcHBWYXVsdC5yZWFkKGZpbGVMaXN0W2ldKSwgJ3RleHQvaHRtbCcpXG5cdFx0XHRsZXQgdGltZWxpbmVEYXRhID0gZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29iLXRpbWVsaW5lcycpXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgdGltZWxpbmVEYXRhLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGxldCBlbGVtZW50ID0gdGltZWxpbmVEYXRhW2pdO1xuXHRcdFx0XHRpZiAoICEgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgbm90ZUlkO1xuXHRcdFx0XHQvLyBjaGVjayBpZiBhIHZhbGlkIGRhdGUgaXMgc3BlY2lmaWVkXG5cdFx0XHRcdGlmIChlbGVtZW50LmRhdGFzZXQuZGF0ZVswXSA9PSAnLScpIHtcblx0XHRcdFx0XHQvLyBpZiBpdCBpcyBhIG5lZ2F0aXZlIHllYXJcblx0XHRcdFx0XHRub3RlSWQgPSArZWxlbWVudC5kYXRhc2V0LmRhdGUuc3Vic3RyaW5nKDEsIGVsZW1lbnQuZGF0YXNldC5kYXRlLmxlbmd0aCkuc3BsaXQoJy0nKS5qb2luKCcnKSAqIC0xO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5vdGVJZCA9ICtlbGVtZW50LmRhdGFzZXQuZGF0ZS5zcGxpdCgnLScpLmpvaW4oJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghTnVtYmVyLmlzSW50ZWdlcihub3RlSWQpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaWYgbm90IHRpdGxlIGlzIHNwZWNpZmllZCB1c2Ugbm90ZSBuYW1lXG5cdFx0XHRcdGxldCBub3RlVGl0bGUgPSBlbGVtZW50LmRhdGFzZXQudGl0bGUgPz8gZmlsZUxpc3RbaV0ubmFtZTtcblx0XHRcdFx0bGV0IG5vdGVDbGFzcyA9IGVsZW1lbnQuZGF0YXNldC5jbGFzcyA/PyBcIlwiO1xuXHRcdFx0XHRsZXQgbm90ZVBhdGggPSAnLycgKyBmaWxlTGlzdFtpXS5wYXRoO1xuXG5cdFx0XHRcdGlmICghdGltZWxpbmVOb3Rlc1tub3RlSWRdKSB7XG5cdFx0XHRcdFx0dGltZWxpbmVOb3Rlc1tub3RlSWRdID0gW107XG5cdFx0XHRcdFx0dGltZWxpbmVOb3Rlc1tub3RlSWRdWzBdID0gW2VsZW1lbnQuZGF0YXNldC5kYXRlLCBub3RlVGl0bGUsIGVsZW1lbnQuZGF0YXNldC5pbWcsIGVsZW1lbnQuaW5uZXJIVE1MLCBub3RlUGF0aCwgbm90ZUNsYXNzXTtcblx0XHRcdFx0XHR0aW1lbGluZURhdGVzLnB1c2gobm90ZUlkKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBpZiBub3RlX2lkIGFscmVhZHkgcHJlc2VudCBhcHBlbmQgdG8gaXRcblx0XHRcdFx0XHR0aW1lbGluZU5vdGVzW25vdGVJZF1bdGltZWxpbmVOb3Rlc1tub3RlSWRdLmxlbmd0aF0gPSBbZWxlbWVudC5kYXRhc2V0LmRhdGUsIG5vdGVUaXRsZSwgZWxlbWVudC5kYXRhc2V0LmltZywgZWxlbWVudC5pbm5lckhUTUwsIG5vdGVQYXRoLCBub3RlQ2xhc3NdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU29ydCBldmVudHMgYmFzZWQgb24gc2V0dGluZ1xuXHRcdGlmIChzZXR0aW5ncy5zb3J0RGlyZWN0aW9uKSB7XG5cdFx0XHQvLyBkZWZhdWx0IGlzIGFzY2VuZGluZ1xuXHRcdFx0dGltZWxpbmVEYXRlcyA9IHRpbWVsaW5lRGF0ZXMuc29ydCgoZDEsIGQyKSA9PiBkMSAtIGQyKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBlbHNlIGl0IGlzIGRlc2NlbmRpbmdcblx0XHRcdHRpbWVsaW5lRGF0ZXMgPSB0aW1lbGluZURhdGVzLnNvcnQoKGQxLCBkMikgPT4gZDIgLSBkMSlcblx0XHR9XG5cblx0XHQvLyBCdWlsZCB0aGUgdGltZWxpbmUgaHRtbCBlbGVtZW50XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lbGluZURhdGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm90ZUNvbnRhaW5lciA9IHRpbWVsaW5lLmNyZWF0ZURpdih7IGNsczogJ3RpbWVsaW5lLWNvbnRhaW5lcicgfSk7XG5cdFx0XHRsZXQgbm90ZUhlYWRlciA9IG5vdGVDb250YWluZXIuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiBnZXRFbGVtZW50KHRpbWVsaW5lTm90ZXMsIHRpbWVsaW5lRGF0ZXNbaV0sIDAsIDApLnJlcGxhY2UoLy0wKiQvZywgJycpLnJlcGxhY2UoLy0wKiQvZywgJycpLnJlcGxhY2UoLy0wKiQvZywgJycpIH0pXG5cdFx0XHRpZiAoaSAlIDIgPT0gMCkge1xuXHRcdFx0XHQvLyBpZiBpdHMgZXZlbiBhZGQgaXQgdG8gdGhlIGxlZnRcblx0XHRcdFx0bm90ZUNvbnRhaW5lci5hZGRDbGFzcygndGltZWxpbmUtbGVmdCcpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBlbHNlIGFkZCBpdCB0byB0aGUgcmlnaHRcblx0XHRcdFx0bm90ZUNvbnRhaW5lci5hZGRDbGFzcygndGltZWxpbmUtcmlnaHQnKTtcblx0XHRcdFx0bm90ZUhlYWRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RleHQtYWxpZ246IHJpZ2h0OycpXG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGltZWxpbmVOb3Rlc1t0aW1lbGluZURhdGVzW2ldXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aW1lbGluZU5vdGVzW3RpbWVsaW5lRGF0ZXNbaV1dLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGxldCBub3RlQ2FyZCA9IG5vdGVDb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiAndGltZWxpbmUtY2FyZCcgfSlcblx0XHRcdFx0Ly8gYWRkIGFuIGltYWdlIG9ubHkgaWYgYXZhaWxhYmxlXG5cdFx0XHRcdGlmIChnZXRFbGVtZW50KHRpbWVsaW5lTm90ZXMsIHRpbWVsaW5lRGF0ZXNbaV0sIGosIDIpKSB7XG5cdFx0XHRcdFx0bm90ZUNhcmQuY3JlYXRlRGl2KHsgY2xzOiAndGh1bWInLCBhdHRyOiB7IHN0eWxlOiBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Z2V0RWxlbWVudCh0aW1lbGluZU5vdGVzLCB0aW1lbGluZURhdGVzW2ldLCBqLCAyKX0pO2AgfSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZ2V0RWxlbWVudCh0aW1lbGluZU5vdGVzLCB0aW1lbGluZURhdGVzW2ldLCBqLCA1KSkge1xuXHRcdFx0XHRcdG5vdGVDYXJkLmFkZENsYXNzKGdldEVsZW1lbnQodGltZWxpbmVOb3RlcywgdGltZWxpbmVEYXRlc1tpXSwgaiwgNSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bm90ZUNhcmQuY3JlYXRlRWwoJ2FydGljbGUnKS5jcmVhdGVFbCgnaDMnKS5jcmVhdGVFbCgnYScsIHsgY2xzOiAnaW50ZXJuYWwtbGluaycsIGF0dHI6IHsgaHJlZjogYCR7Z2V0RWxlbWVudCh0aW1lbGluZU5vdGVzLCB0aW1lbGluZURhdGVzW2ldLCBqLCA0KX1gIH0sIHRleHQ6IGdldEVsZW1lbnQodGltZWxpbmVOb3RlcywgdGltZWxpbmVEYXRlc1tpXSwgaiwgMSkgfSlcblx0XHRcdFx0bm90ZUNhcmQuY3JlYXRlRWwoJ3AnLCB7IHRleHQ6IGdldEVsZW1lbnQodGltZWxpbmVOb3RlcywgdGltZWxpbmVEYXRlc1tpXSwgaiwgMykgfSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXBsYWNlIHRoZSBzZWxlY3RlZCB0YWdzIHdpdGggdGhlIHRpbWVsaW5lIGh0bWxcblx0XHRlbC5hcHBlbmRDaGlsZCh0aW1lbGluZSk7XG5cdH1cbn1cbiIsImltcG9ydCB0eXBlIHsgVGltZWxpbmVzU2V0dGluZ3MgfSBmcm9tICcuL3R5cGVzJ1xyXG5pbXBvcnQgeyBERUZBVUxUX1NFVFRJTkdTIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IFRpbWVsaW5lc1NldHRpbmdUYWIgfSBmcm9tICcuL3NldHRpbmdzJ1xyXG5pbXBvcnQgeyBUaW1lbGluZVByb2Nlc3NvciB9IGZyb20gJy4vYmxvY2snXHJcbmltcG9ydCB7IFBsdWdpbiB9IGZyb20gJ29ic2lkaWFuJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lc1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IFRpbWVsaW5lc1NldHRpbmdzO1xyXG5cclxuXHRhc3luYyBvbmxvYWQoKSB7XHJcblx0XHQvLyBMb2FkIG1lc3NhZ2VcclxuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XHJcblx0XHRjb25zb2xlLmxvZygnTG9hZGVkIFRpbWVsaW5lcyBQbHVnaW4nKTtcclxuXHJcblx0XHQvLyBSZWdpc3RlciB0aW1lbGluZSBibG9jayByZW5kZXJlclxyXG5cdFx0dGhpcy5yZWdpc3Rlck1hcmtkb3duQ29kZUJsb2NrUHJvY2Vzc29yKCd0aW1lbGluZScsIGFzeW5jIChzb3VyY2UsIGVsLCBjdHgpID0+IHtcclxuXHRcdFx0Y29uc3QgcHJvYyA9IG5ldyBUaW1lbGluZVByb2Nlc3NvcigpO1xyXG5cdFx0XHRsZXQgYXJncyA9IHNvdXJjZS5zcGxpdChcIlxcblwiKVxyXG5cdFx0XHRhd2FpdCBwcm9jLnJ1bihzb3VyY2UsIGVsLCB0aGlzLnNldHRpbmdzLCB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCksIHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUsIHRoaXMuYXBwLnZhdWx0KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgVGltZWxpbmVzU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG5cdH1cclxuXHJcblx0b251bmxvYWQoKSB7XHJcblx0XHRjb25zb2xlLmxvZygndW5sb2FkaW5nIHBsdWdpbicpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xyXG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XHJcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xyXG5cdH1cclxufSJdLCJuYW1lcyI6WyJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0FBQ3ZGLG9CQUFvQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUMzQyxhQUFhO0FBQ2IsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2xFLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN6RixLQUFLO0FBQ0w7O0FDdkdPLElBQU0sZ0JBQWdCLEdBQXNCO0lBQy9DLFdBQVcsRUFBRSxVQUFVO0lBQ3ZCLGFBQWEsRUFBRSxJQUFJO0NBQ3RCOztBQ0ZEO0lBQXlDLHVDQUFnQjtJQUd4RCw2QkFBWSxHQUFRLEVBQUUsTUFBdUI7UUFBN0MsWUFDQyxrQkFBTSxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBRWxCO1FBREEsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0tBQ3JCO0lBRUQscUNBQU8sR0FBUDtRQUFBLGlCQTJCQztRQTFCTSxJQUFBLFdBQVcsR0FBSyxJQUFJLFlBQVQsQ0FBVTtRQUUzQixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLElBQUlBLGdCQUFPLENBQUMsV0FBVyxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQzthQUMvQixPQUFPLENBQUMsNEZBQTRGLENBQUM7YUFDckcsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSTthQUNuQixjQUFjLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2FBQ2hELFFBQVEsQ0FBQyxVQUFPLEtBQUs7Ozs7d0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7d0JBQ3pDLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDOzs7O2FBQ2pDLENBQUMsR0FBQSxDQUFDLENBQUM7UUFHTixJQUFJQSxnQkFBTyxDQUFDLFdBQVcsQ0FBQzthQUN0QixPQUFPLENBQUMseUJBQXlCLENBQUM7YUFDbEMsT0FBTyxDQUFDLHdEQUF3RCxDQUFDO2FBQ2pFLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDakIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQU8sS0FBSzs7Ozs0QkFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs0QkFDM0MscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBQTs7NEJBQWhDLFNBQWdDLENBQUM7Ozs7aUJBQ2pDLENBQUMsQ0FBQztTQUNILENBQUMsQ0FBQTtLQUNIO0lBQ0YsMEJBQUM7QUFBRCxDQXBDQSxDQUF5Q0MseUJBQWdCOztTQ0F6QyxVQUFVLENBQUMsU0FBdUIsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVU7SUFDbEYsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkIsT0FBTyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDaEM7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUM7U0FFZSxhQUFhLENBQUMsSUFBVyxFQUFFLE9BQWlCLEVBQUUsYUFBNEI7SUFDdEYsSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFFZCxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFO1FBQzdCLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRSxHQUFBLENBQUMsQ0FBQTtLQUN0RDtJQUVELElBQUksU0FBUyxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtRQUNyRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksT0FBTyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtLQUM3RztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCOztBQ2pCQTtJQUFBO0tBMEdDO0lBeEdNLCtCQUFHLEdBQVQsVUFBVSxNQUFjLEVBQUUsRUFBZSxFQUFFLFFBQTJCLEVBQUUsVUFBbUIsRUFBRSxTQUF3QixFQUFFLFFBQWU7Ozs7Ozs7d0JBRWpJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7d0JBQ1YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO3dCQUVqRCxJQUFJLENBQUMsS0FBSzs0QkFBRSxzQkFBTzt3QkFFZixPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7d0JBRTlCLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLEdBQUEsQ0FBQyxDQUFDO3dCQUNsRixJQUFJLENBQUMsUUFBUSxFQUFFOzs0QkFFZCxzQkFBTzt5QkFDUDt3QkFFRyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDN0MsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUE7d0JBQ3RDLGFBQWEsR0FBRyxFQUFFLENBQUM7d0JBQ25CLGFBQWEsR0FBRyxFQUFFLENBQUM7d0JBRWQsQ0FBQyxHQUFHLENBQUM7Ozs4QkFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQTt3QkFFNUIsU0FBUyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUE7d0JBQ3JCLEtBQUEsQ0FBQSxLQUFBLFNBQVMsRUFBQyxlQUFlLENBQUE7d0JBQUMscUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQTs7d0JBQWhFLEdBQUcsR0FBRyxjQUEwQixTQUFnQyxFQUFFLFdBQVcsRUFBQzt3QkFDaEYsWUFBWSxHQUFHLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTt3QkFDN0QsS0FBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN4QyxPQUFPLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixJQUFLLEVBQUcsT0FBTyxZQUFZLFdBQVcsQ0FBQyxFQUFHO2dDQUN6QyxTQUFTOzZCQUNUOzRCQUVHLE1BQU0sU0FBQSxDQUFDOzs0QkFFWCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTs7Z0NBRW5DLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDbEc7aUNBQU07Z0NBQ04sTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDbkQ7NEJBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0NBQzlCLFNBQVM7NkJBQ1Q7NEJBRUcsU0FBUyxTQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxtQ0FBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUN0RCxTQUFTLFNBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFLLENBQUEsbUNBQUksRUFBRSxDQUFDOzRCQUN4QyxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBRXRDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0NBQzNCLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Z0NBQzNCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQ0FDMUgsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFDM0I7aUNBQU07O2dDQUVOLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7NkJBQ3JKO3lCQUNEOzs7d0JBbkNtQyxDQUFDLEVBQUUsQ0FBQTs7Ozt3QkF1Q3hDLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTs7NEJBRTNCLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSyxPQUFBLEVBQUUsR0FBRyxFQUFFLEdBQUEsQ0FBQyxDQUFBO3lCQUN2RDs2QkFBTTs7NEJBRU4sYUFBYSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFFLEVBQUUsRUFBRSxJQUFLLE9BQUEsRUFBRSxHQUFHLEVBQUUsR0FBQSxDQUFDLENBQUE7eUJBQ3ZEOzt3QkFHRCxLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQzFDLGFBQWEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQzs0QkFDbEUsVUFBVSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7NEJBQ3pLLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dDQUVmLGFBQWEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7NkJBRXhDO2lDQUFNOztnQ0FFTixhQUFhLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0NBQ3pDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUE7NkJBQ3REOzRCQUVELElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQ3JDLFNBQVM7NkJBQ1Q7NEJBRUQsS0FBUyxNQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFDLEVBQUUsRUFBRTtnQ0FDNUQsUUFBUSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQTs7Z0NBRWhFLElBQUksVUFBVSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO29DQUN0RCxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsMkJBQXlCLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsT0FBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lDQUN0STtnQ0FDRCxJQUFJLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtvQ0FDdEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQ0FDckU7Z0NBRUQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUcsVUFBVSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUMsQ0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7Z0NBQ3BOLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7NkJBQ25GO3lCQUNEOzt3QkFHRCxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OztLQUN6QjtJQUNGLHdCQUFDO0FBQUQsQ0FBQzs7O0lDekc0QyxtQ0FBTTtJQUFuRDs7S0E2QkM7SUExQk0sZ0NBQU0sR0FBWjs7Ozs7OztvQkFFQyxxQkFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUE7Ozt3QkFBekIsU0FBeUIsQ0FBQzt3QkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOzt3QkFHdkMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLFVBQVUsRUFBRSxVQUFPLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRzs7Ozs7d0NBQ25FLElBQUksR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7d0NBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7d0NBQzdCLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0NBQXBILFNBQW9ILENBQUM7Ozs7NkJBQ3JILENBQUMsQ0FBQzt3QkFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztLQUM1RDtJQUVELGtDQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDaEM7SUFFSyxzQ0FBWSxHQUFsQjs7Ozs7O3dCQUNDLEtBQUEsSUFBSSxDQUFBO3dCQUFZLEtBQUEsQ0FBQSxLQUFBLE1BQU0sRUFBQyxNQUFNLENBQUE7OEJBQUMsRUFBRSxFQUFFLGdCQUFnQjt3QkFBRSxxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7O3dCQUF6RSxHQUFLLFFBQVEsR0FBRyx3QkFBb0MsU0FBcUIsR0FBQyxDQUFDOzs7OztLQUMzRTtJQUVLLHNDQUFZLEdBQWxCOzs7OzRCQUNDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBbEMsU0FBa0MsQ0FBQzs7Ozs7S0FDbkM7SUFDRixzQkFBQztBQUFELENBN0JBLENBQTZDQyxlQUFNOzs7OyJ9
