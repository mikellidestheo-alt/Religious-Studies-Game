#!/usr/bin/env node
/*
 * validate.js - Run with:  node tools/validate.js
 *
 * Loads js/spec.js and every file in js/dilemmas/ the same way the browser
 * does, checks each dilemma, and prints coverage per spec topic.
 * Also checks that index.html and tools/validate.html load every dilemma file.
 * Exits with code 1 if there are errors.
 */
'use strict';

var fs = require('fs');
var path = require('path');
var vm = require('vm');
var core = require('./validate-core.js');

var root = path.join(__dirname, '..');
var dilemmaDir = path.join(root, 'js', 'dilemmas');

// A pretend browser "window" for the data files to write into.
var context = {};
context.window = context;
vm.createContext(context);

function load(file) {
  var code = fs.readFileSync(file, 'utf8');
  try {
    vm.runInContext(code, context, { filename: path.relative(root, file) });
  } catch (e) {
    console.error('Could not load ' + path.relative(root, file) + ':\n  ' + e.message);
    process.exit(1);
  }
}

load(path.join(root, 'js', 'spec.js'));
var files = fs.readdirSync(dilemmaDir).filter(function (f) { return /\.js$/.test(f); }).sort();
files.forEach(function (f) { load(path.join(dilemmaDir, f)); });

var result = core.validate(context.DILEMMAS || [], context.SPEC);

// Check the HTML pages include every dilemma file.
[['index.html', 'js/dilemmas/'], [path.join('tools', 'validate.html'), '../js/dilemmas/']].forEach(function (pair) {
  var html = fs.readFileSync(path.join(root, pair[0]), 'utf8');
  files.forEach(function (f) {
    if (html.indexOf('src="' + pair[1] + f + '"') === -1) {
      result.errors.push(pair[0] + ': does not load ' + pair[1] + f + ' (add a <script> tag)');
    }
  });
});

console.log('Files: ' + files.join(', '));
console.log(core.report(result, context.SPEC, 3));
process.exit(result.errors.length ? 1 : 0);
