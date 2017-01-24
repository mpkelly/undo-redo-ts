"use strict";
var UndoManager = (function () {
    function UndoManager(limit) {
        if (limit === void 0) { limit = 0; }
        this.commands = [];
        this.index = -1;
        this.limit = limit;
    }
    UndoManager.prototype.add = function (command) {
        this.commands = this.commands.slice(0, this.index + 1);
        this.commands.push(command);
        if (this.limit > 0 && this.commands.length > this.limit) {
            this.commands.shift();
        }
        else {
            this.index++;
        }
        return this;
    };
    UndoManager.prototype.redo = function () {
        if (this.index < this.commands.length - 1) {
            this.index++;
            this.commands[this.index].redo();
            return true;
        }
        return false;
    };
    UndoManager.prototype.undo = function () {
        if (this.index >= 0) {
            this.commands[this.index].undo();
            this.index--;
            return true;
        }
        return false;
    };
    UndoManager.prototype.commandStack = function () {
        return this.commands.slice(0);
    };
    return UndoManager;
}());
exports.UndoManager = UndoManager;
