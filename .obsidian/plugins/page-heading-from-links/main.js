'use strict';

var obsidian = require('obsidian');

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var PageHeadingFromLinks = /** @class */ (function (_super) {
  __extends(PageHeadingFromLinks, _super);

  function PageHeadingFromLinks() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PageHeadingFromLinks.prototype.onload = function () {
    var _this = this;

    console.log("Loading PageHeadingFromLinks plugin");

    this.registerEvent(app.workspace.on('file-open', _this.insertHeadingFromBasename));
  };

  // When opening any blank file, insert a H1 tag into the page constructed
  // from its filename
  PageHeadingFromLinks.prototype.insertHeadingFromBasename = function(openedFile) {
    var activeLeaf = app.workspace.activeLeaf;
    var editor = activeLeaf.view.sourceMode.cmEditor
    var doc = editor.getDoc();
    var line = doc.getLine(0);

    if (line == "") {
      var basename = openedFile.basename;
      var heading = "# " + basename + "\n\n";
      var cursor = doc.getCursor();
      doc.replaceRange(heading, cursor);
    }
  }

  return PageHeadingFromLinks;
}(obsidian.Plugin));

module.exports = PageHeadingFromLinks;
