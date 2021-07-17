"use strict";
var fs = require("fs");

var fileStream = {
  /* Read from file */
  _read_from_file: function (path) {
    fs.readFile(path, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      console.log(data.toString());
    });
  },
  get read_from_file() {
    return this._read_from_file;
  },
  set read_from_file(value) {
    this._read_from_file = value;
  },

  /* Read from file sync */
  _read_from_file_sync: function (path) {
    var data = fs.readFileSync(path);
    console.log(data.toString());
  },
  get read_from_file_sync() {
    return this._read_from_file_sync;
  },
  set read_from_file_sync(value) {
    this._read_from_file_sync = value;
  },

  /* Write to file */
  _write_to_file: function (path, data) {
    fs.writeFile(path, data, function (err) {
      if (err) {
        throw err;
      }
      console.log("wrote ...");
    });
  },
  get write_to_file() {
    return this._write_to_file;
  },
  set write_to_file(value) {
    this._write_to_file = value;
  },

  /* Append to file */
  _append_to_file: function (path, data) {
    fs.appendFile(path, data, function (err) {
      if (err) {
        throw err;
      }
      console.log("append ...");
    });
  },
  get append_to_file() {
    return this._append_to_file;
  },
  set append_to_file(value) {
    this._append_to_file = value;
  },

  /* Delete file */
  _delete_file: function (path) {
    fs.unlink(path, function (err) {
      if (err) {
        throw err;
      }
      console.log("deleted ...");
    });
  },
  get delete_file() {
    return this._delete_file;
  },
  set delete_file(value) {
    this._delete_file = value;
  },
};

module.exports = fileStream;
