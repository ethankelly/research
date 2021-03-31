'use strict';

var obsidian = require('obsidian');
var path$1 = require('path');
var os = require('os');
var electron = require('electron');
var util = require('util');
var fs = require('fs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path$1);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

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

var bail_1 = bail;

function bail(err) {
  if (err) {
    throw err
  }
}

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

var isBuffer = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
};

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

var extend = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

var isPlainObj = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};

var slice = [].slice;

var wrap_1 = wrap;

// Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.
function wrap(fn, callback) {
  var invoked;

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0);
    var callback = fn.length > params.length;
    var result;

    if (callback) {
      params.push(done);
    }

    try {
      result = fn.apply(null, params);
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error
      }

      return done(error)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }

  // Invoke `next`, only once.
  function done() {
    if (!invoked) {
      invoked = true;

      callback.apply(null, arguments);
    }
  }

  // Invoke `done` with one value.
  // Tracks if an error is passed, too.
  function then(value) {
    done(null, value);
  }
}

var trough_1 = trough;

trough.wrap = wrap_1;

var slice$1 = [].slice;

// Create new middleware.
function trough() {
  var fns = [];
  var middleware = {};

  middleware.run = run;
  middleware.use = use;

  return middleware

  // Run `fns`.  Last argument must be a completion handler.
  function run() {
    var index = -1;
    var input = slice$1.call(arguments, 0, -1);
    var done = arguments[arguments.length - 1];

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input));

    // Run the next `fn`, if any.
    function next(err) {
      var fn = fns[++index];
      var params = slice$1.call(arguments, 0);
      var values = params.slice(1);
      var length = input.length;
      var pos = -1;

      if (err) {
        done(err);
        return
      }

      // Copy non-nully input into values.
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos];
        }
      }

      input = values;

      // Next or done.
      if (fn) {
        wrap_1(fn, next).apply(null, input);
      } else {
        done.apply(null, [null].concat(input));
      }
    }
  }

  // Add `fn` to the list.
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn);

    return middleware
  }
}

var own = {}.hasOwnProperty;

var unistUtilStringifyPosition = stringify;

function stringify(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  // Position.
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  // Point.
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  // ?
  return ''
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {};
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {};
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}

var vfileMessage = VMessage;

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype;
VMessage.prototype = new VMessagePrototype();

// Message properties.
var proto = VMessage.prototype;

proto.file = '';
proto.name = '';
proto.reason = '';
proto.message = '';
proto.stack = '';
proto.fatal = null;
proto.column = null;
proto.line = null;

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts;
  var range;
  var location;

  if (typeof position === 'string') {
    origin = position;
    position = null;
  }

  parts = parseOrigin(origin);
  range = unistUtilStringifyPosition(position) || '1:1';

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  };

  // Node.
  if (position && position.position) {
    position = position.position;
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position;
      position = position.start;
    } else {
      // Point.
      location.start = position;
    }
  }

  if (reason.stack) {
    this.stack = reason.stack;
    reason = reason.message;
  }

  this.message = reason;
  this.name = range;
  this.reason = reason;
  this.line = position ? position.line : null;
  this.column = position ? position.column : null;
  this.location = location;
  this.source = parts[0];
  this.ruleId = parts[1];
}

function parseOrigin(origin) {
  var result = [null, null];
  var index;

  if (typeof origin === 'string') {
    index = origin.indexOf(':');

    if (index === -1) {
      result[1] = origin;
    } else {
      result[0] = origin.slice(0, index);
      result[1] = origin.slice(index + 1);
    }
  }

  return result
}

var minpath = path__default['default'];

var minproc = process;

var core = VFile;

var own$1 = {}.hasOwnProperty;

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];

VFile.prototype.toString = toString;

// Access full path (`~/index.min.js`).
Object.defineProperty(VFile.prototype, 'path', {get: getPath, set: setPath});

// Access parent path (`~`).
Object.defineProperty(VFile.prototype, 'dirname', {
  get: getDirname,
  set: setDirname
});

// Access basename (`index.min.js`).
Object.defineProperty(VFile.prototype, 'basename', {
  get: getBasename,
  set: setBasename
});

// Access extname (`.js`).
Object.defineProperty(VFile.prototype, 'extname', {
  get: getExtname,
  set: setExtname
});

// Access stem (`index.min`).
Object.defineProperty(VFile.prototype, 'stem', {get: getStem, set: setStem});

// Construct a new file.
function VFile(options) {
  var prop;
  var index;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || isBuffer(options)) {
    options = {contents: options};
  } else if ('message' in options && 'messages' in options) {
    return options
  }

  if (!(this instanceof VFile)) {
    return new VFile(options)
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = minproc.cwd();

  // Set path related properties in the correct order.
  index = -1;

  while (++index < order.length) {
    prop = order[index];

    if (own$1.call(options, prop)) {
      this[prop] = options[prop];
    }
  }

  // Set non-path related properties.
  for (prop in options) {
    if (order.indexOf(prop) < 0) {
      this[prop] = options[prop];
    }
  }
}

function getPath() {
  return this.history[this.history.length - 1]
}

function setPath(path) {
  assertNonEmpty(path, 'path');

  if (this.path !== path) {
    this.history.push(path);
  }
}

function getDirname() {
  return typeof this.path === 'string' ? minpath.dirname(this.path) : undefined
}

function setDirname(dirname) {
  assertPath(this.path, 'dirname');
  this.path = minpath.join(dirname || '', this.basename);
}

function getBasename() {
  return typeof this.path === 'string' ? minpath.basename(this.path) : undefined
}

function setBasename(basename) {
  assertNonEmpty(basename, 'basename');
  assertPart(basename, 'basename');
  this.path = minpath.join(this.dirname || '', basename);
}

function getExtname() {
  return typeof this.path === 'string' ? minpath.extname(this.path) : undefined
}

function setExtname(extname) {
  assertPart(extname, 'extname');
  assertPath(this.path, 'extname');

  if (extname) {
    if (extname.charCodeAt(0) !== 46 /* `.` */) {
      throw new Error('`extname` must start with `.`')
    }

    if (extname.indexOf('.', 1) > -1) {
      throw new Error('`extname` cannot contain multiple dots')
    }
  }

  this.path = minpath.join(this.dirname, this.stem + (extname || ''));
}

function getStem() {
  return typeof this.path === 'string'
    ? minpath.basename(this.path, this.extname)
    : undefined
}

function setStem(stem) {
  assertNonEmpty(stem, 'stem');
  assertPart(stem, 'stem');
  this.path = minpath.join(this.dirname || '', stem + (this.extname || ''));
}

// Get the value of the file.
function toString(encoding) {
  return (this.contents || '').toString(encoding)
}

// Assert that `part` is not a path (i.e., does not contain `p.sep`).
function assertPart(part, name) {
  if (part && part.indexOf(minpath.sep) > -1) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + minpath.sep + '`'
    )
  }
}

// Assert that `part` is not empty.
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

// Assert `path` exists.
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}

var lib = core;

core.prototype.message = message;
core.prototype.info = info;
core.prototype.fail = fail;

// Create a message with `reason` at `position`.
// When an error is passed in as `reason`, copies the stack.
function message(reason, position, origin) {
  var message = new vfileMessage(reason, position, origin);

  if (this.path) {
    message.name = this.path + ':' + message.name;
    message.file = this.path;
  }

  message.fatal = false;

  this.messages.push(message);

  return message
}

// Fail: creates a vmessage, associates it with the file, and throws it.
function fail() {
  var message = this.message.apply(this, arguments);

  message.fatal = true;

  throw message
}

// Info: creates a vmessage, associates it with the file, and marks the fatality
// as null.
function info() {
  var message = this.message.apply(this, arguments);

  message.fatal = null;

  return message
}

var vfile = lib;

// Expose a frozen processor.
var unified_1 = unified().freeze();

var slice$2 = [].slice;
var own$2 = {}.hasOwnProperty;

// Process pipeline.
var pipeline = trough_1()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify);

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file);
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done);

  function done(err, tree, file) {
    if (err) {
      next(err);
    } else {
      ctx.tree = tree;
      ctx.file = file;
      next();
    }
  }
}

function pipelineStringify(p, ctx) {
  var result = p.stringify(ctx.tree, ctx.file);
  var file = ctx.file;

  if (result === undefined || result === null) ; else if (typeof result === 'string' || isBuffer(result)) {
    file.contents = result;
  } else {
    file.result = result;
  }
}

// Function to create the first processor.
function unified() {
  var attachers = [];
  var transformers = trough_1();
  var namespace = {};
  var frozen = false;
  var freezeIndex = -1;

  // Data management.
  processor.data = data;

  // Lock.
  processor.freeze = freeze;

  // Plugins.
  processor.attachers = attachers;
  processor.use = use;

  // API.
  processor.parse = parse;
  processor.stringify = stringify;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process;
  processor.processSync = processSync;

  // Expose.
  return processor

  // Create a new processor based on the processor in the current scope.
  function processor() {
    var destination = unified();
    var length = attachers.length;
    var index = -1;

    while (++index < length) {
      destination.use.apply(null, attachers[index]);
    }

    destination.data(extend(true, {}, namespace));

    return destination
  }

  // Freeze: used to signal a processor that has finished configuration.
  //
  // For example, take unified itself: it’s frozen.
  // Plugins should not be added to it.
  // Rather, it should be extended, by invoking it, before modifying it.
  //
  // In essence, always invoke this when exporting a processor.
  function freeze() {
    var values;
    var plugin;
    var options;
    var transformer;

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex];
      plugin = values[0];
      options = values[1];
      transformer = null;

      if (options === false) {
        continue
      }

      if (options === true) {
        values[1] = undefined;
      }

      transformer = plugin.apply(processor, values.slice(1));

      if (typeof transformer === 'function') {
        transformers.use(transformer);
      }
    }

    frozen = true;
    freezeIndex = Infinity;

    return processor
  }

  // Data management.
  // Getter / setter for processor-specific informtion.
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen);

        namespace[key] = value;

        return processor
      }

      // Get `key`.
      return (own$2.call(namespace, key) && namespace[key]) || null
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen);
      namespace = key;
      return processor
    }

    // Get space.
    return namespace
  }

  // Plugin management.
  //
  // Pass it:
  // *   an attacher and options,
  // *   a preset,
  // *   a list of presets, attachers, and arguments (list of attachers and
  //     options).
  function use(value) {
    var settings;

    assertUnfrozen('use', frozen);

    if (value === null || value === undefined) ; else if (typeof value === 'function') {
      addPlugin.apply(null, arguments);
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings);
    }

    return processor

    function addPreset(result) {
      addList(result.plugins);

      if (result.settings) {
        settings = extend(settings || {}, result.settings);
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value);
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value);
        } else {
          addPreset(value);
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var length;
      var index;

      if (plugins === null || plugins === undefined) ; else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length;
        index = -1;

        while (++index < length) {
          add(plugins[index]);
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin);

      if (entry) {
        if (isPlainObj(entry[1]) && isPlainObj(value)) {
          value = extend(entry[1], value);
        }

        entry[1] = value;
      } else {
        attachers.push(slice$2.call(arguments));
      }
    }
  }

  function find(plugin) {
    var length = attachers.length;
    var index = -1;
    var entry;

    while (++index < length) {
      entry = attachers[index];

      if (entry[0] === plugin) {
        return entry
      }
    }
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor.
  function parse(doc) {
    var file = vfile(doc);
    var Parser;

    freeze();
    Parser = processor.Parser;
    assertParser('parse', Parser);

    if (newable(Parser, 'parse')) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), async.
  function run(node, file, cb) {
    assertNode(node);
    freeze();

    if (!cb && typeof file === 'function') {
      cb = file;
      file = null;
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb);

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done);

      function done(err, tree, file) {
        tree = tree || node;
        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(tree);
        } else {
          cb(null, tree, file);
        }
      }
    }
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), sync.
  function runSync(node, file) {
    var complete = false;
    var result;

    run(node, file, done);

    assertDone('runSync', 'run', complete);

    return result

    function done(err, tree) {
      complete = true;
      bail_1(err);
      result = tree;
    }
  }

  // Stringify a unist node representation of a file (in string or vfile
  // representation) into a string using the `Compiler` on the processor.
  function stringify(node, doc) {
    var file = vfile(doc);
    var Compiler;

    freeze();
    Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);

    if (newable(Compiler, 'compile')) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor, then run transforms on that node, and
  // compile the resulting node using the `Compiler` on the processor, and
  // store that result on the vfile.
  function process(doc, cb) {
    freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb);

    function executor(resolve, reject) {
      var file = vfile(doc);

      pipeline.run(processor, {file: file}, done);

      function done(err) {
        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(file);
        } else {
          cb(null, file);
        }
      }
    }
  }

  // Process the given document (in string or vfile representation), sync.
  function processSync(doc) {
    var complete = false;
    var file;

    freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);
    file = vfile(doc);

    process(file, done);

    assertDone('processSync', 'process', complete);

    return file

    function done(err) {
      complete = true;
      bail_1(err);
    }
  }
}

// Check if `value` is a constructor.
function newable(value, name) {
  return (
    typeof value === 'function' &&
    value.prototype &&
    // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    (keys(value.prototype) || name in value.prototype)
  )
}

// Check if `value` is an object with keys.
function keys(value) {
  var key;
  for (key in value) {
    return true
  }

  return false
}

// Assert a parser is available.
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

// Assert a compiler is available.
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

// Assert the processor is not frozen.
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot invoke `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
    )
  }
}

// Assert `node` is a unist node.
function assertNode(node) {
  if (!node || typeof node.type !== 'string') {
    throw new Error('Expected node, got `' + node + '`')
  }
}

// Assert that `complete` is `true`.
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}

var mdastUtilToString = toString$1;

// Get the text content of a node.
// Prefer the node’s plain-text fields, otherwise serialize its children,
// and if the given value is an array, serialize the nodes in it.
function toString$1(node) {
  return (
    (node &&
      (node.value ||
        node.alt ||
        node.title ||
        ('children' in node && all(node.children)) ||
        ('length' in node && all(node)))) ||
    ''
  )
}

function all(values) {
  var result = [];
  var index = -1;

  while (++index < values.length) {
    result[index] = toString$1(values[index]);
  }

  return result.join('')
}

var assign = Object.assign;

var hasOwnProperty_1 = {}.hasOwnProperty;

var normalizeIdentifier_1 = normalizeIdentifier;

function normalizeIdentifier(value) {
  return (
    value
      // Collapse Markdown whitespace.
      .replace(/[\t\n\r ]+/g, ' ')
      // Trim.
      .replace(/^ | $/g, '')
      // Some characters are considered “uppercase”, but if their lowercase
      // counterpart is uppercased will result in a different uppercase
      // character.
      // Hence, to get that form, we perform both lower- and uppercase.
      // Upper case makes sure keys will not interact with default prototypal
      // methods: no object method is uppercase.
      .toLowerCase()
      .toUpperCase()
  )
}

var fromCharCode = String.fromCharCode;

var safeFromInt_1 = safeFromInt;



function safeFromInt(value, base) {
  var code = parseInt(value, base);

  if (
    // C0 except for HT, LF, FF, CR, space
    code < 9 ||
    code === 11 ||
    (code > 13 && code < 32) ||
    // Control character (DEL) of the basic block and C1 controls.
    (code > 126 && code < 160) ||
    // Lone high surrogates and low surrogates.
    (code > 55295 && code < 57344) ||
    // Noncharacters.
    (code > 64975 && code < 65008) ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 ||
    // Out of range
    code > 1114111
  ) {
    return '\uFFFD'
  }

  return fromCharCode(code)
}

var markdownLineEnding_1 = markdownLineEnding;

function markdownLineEnding(code) {
  return code < -2
}

var markdownSpace_1 = markdownSpace;

function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32
}

var factorySpace = createSpace;



function createSpace(effects, ok, type, max) {
  var limit = max ? max - 1 : Infinity;
  var size;

  return start

  function start(code) {
    if (markdownSpace_1(code)) {
      effects.enter(type);
      size = 0;
      return prefix(code)
    }

    return ok(code)
  }

  function prefix(code) {
    if (markdownSpace_1(code) && size++ < limit) {
      effects.consume(code);
      return prefix
    }

    effects.exit(type);
    return ok(code)
  }
}

var tokenize = initializeContent;





function initializeContent(effects) {
  var contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  );

  var previous;

  return contentStart

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, contentStart, 'linePrefix')
  }

  function paragraphInitial(code) {
    effects.enter('paragraph');
    return lineStart(code)
  }

  function lineStart(code) {
    var token = effects.enter('chunkText', {
      contentType: 'text',
      previous: previous
    });

    if (previous) {
      previous.next = token;
    }

    previous = token;

    return data(code)
  }

  function data(code) {
    if (code === null) {
      effects.exit('chunkText');
      effects.exit('paragraph');
      effects.consume(code);
      return
    }

    if (markdownLineEnding_1(code)) {
      effects.consume(code);
      effects.exit('chunkText');
      return lineStart
    }

    // Data.
    effects.consume(code);
    return data
  }
}

var content = {
	tokenize: tokenize
};

var tokenize$1 = tokenizeBlankLine;
var partial = true;





function tokenizeBlankLine(effects, ok, nok) {
  return factorySpace(effects, afterWhitespace, 'linePrefix')

  function afterWhitespace(code) {
    return code === null || markdownLineEnding_1(code) ? ok(code) : nok(code)
  }
}

var partialBlankLine = {
	tokenize: tokenize$1,
	partial: partial
};

var tokenize$2 = initializeDocument;






var container = {tokenize: tokenizeContainer};
var lazyFlow = {tokenize: tokenizeLazyFlow};

function initializeDocument(effects) {
  var self = this;
  var stack = [];
  var continued = 0;
  var inspectResult;
  var childFlow;
  var childToken;

  return start

  function start(code) {
    if (continued < stack.length) {
      self.containerState = stack[continued][1];
      return effects.attempt(
        stack[continued][0].continuation,
        documentContinue,
        documentContinued
      )(code)
    }

    return documentContinued(code)
  }

  function documentContinue(code) {
    continued++;
    return start(code)
  }

  function documentContinued(code) {
    // If we’re in a concrete construct (such as when expecting another line of
    // HTML, or we resulted in lazy content), we can immediately start flow.
    if (inspectResult && inspectResult.flowContinue) {
      return flowStart(code)
    }

    self.interrupt =
      childFlow &&
      childFlow.currentConstruct &&
      childFlow.currentConstruct.interruptible;
    self.containerState = {};
    return effects.attempt(container, containerContinue, flowStart)(code)
  }

  function containerContinue(code) {
    stack.push([self.currentConstruct, self.containerState]);
    self.containerState = undefined;
    return documentContinued(code)
  }

  function flowStart(code) {
    if (code === null) {
      exitContainers(0, true);
      effects.consume(code);
      return
    }

    childFlow = childFlow || self.parser.flow(self.now());

    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    });

    return flowContinue(code)
  }

  function flowContinue(code) {
    if (code === null) {
      continueFlow(effects.exit('chunkFlow'));
      return flowStart(code)
    }

    if (markdownLineEnding_1(code)) {
      effects.consume(code);
      continueFlow(effects.exit('chunkFlow'));
      return effects.check(
        {tokenize: tokenizeInspect, partial: true},
        documentAfterPeek
      )
    }

    effects.consume(code);
    return flowContinue
  }

  function documentAfterPeek(code) {
    exitContainers(
      inspectResult.continued,
      inspectResult && inspectResult.flowEnd
    );

    continued = 0;
    return start(code)
  }

  function continueFlow(token) {
    if (childToken) childToken.next = token;
    childToken = token;
    childFlow.lazy = inspectResult && inspectResult.lazy;
    childFlow.defineSkip(token.start);
    childFlow.write(self.sliceStream(token));
  }

  function exitContainers(size, end) {
    var index = stack.length;

    // Close the flow.
    if (childFlow && end) {
      childFlow.write([null]);
      childToken = childFlow = undefined;
    }

    // Exit open containers.
    while (index-- > size) {
      self.containerState = stack[index][1];
      stack[index][0].exit.call(self, effects);
    }

    stack.length = size;
  }

  function tokenizeInspect(effects, ok) {
    var subcontinued = 0;

    inspectResult = {};

    return inspectStart

    function inspectStart(code) {
      if (subcontinued < stack.length) {
        self.containerState = stack[subcontinued][1];
        return effects.attempt(
          stack[subcontinued][0].continuation,
          inspectContinue,
          inspectLess
        )(code)
      }

      // If we’re continued but in a concrete flow, we can’t have more
      // containers.
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        inspectResult.flowContinue = true;
        return inspectDone(code)
      }

      self.interrupt =
        childFlow.currentConstruct && childFlow.currentConstruct.interruptible;
      self.containerState = {};
      return effects.attempt(container, inspectFlowEnd, inspectDone)(code)
    }

    function inspectContinue(code) {
      subcontinued++;
      return self.containerState._closeFlow
        ? inspectFlowEnd(code)
        : inspectStart(code)
    }

    function inspectLess(code) {
      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
        // Maybe another container?
        self.containerState = {};
        return effects.attempt(
          container,
          inspectFlowEnd,
          // Maybe flow, or a blank line?
          effects.attempt(
            lazyFlow,
            inspectFlowEnd,
            effects.check(partialBlankLine, inspectFlowEnd, inspectLazy)
          )
        )(code)
      }

      // Otherwise we’re interrupting.
      return inspectFlowEnd(code)
    }

    function inspectLazy(code) {
      // Act as if all containers are continued.
      subcontinued = stack.length;
      inspectResult.lazy = true;
      inspectResult.flowContinue = true;
      return inspectDone(code)
    }

    // We’re done with flow if we have more containers, or an interruption.
    function inspectFlowEnd(code) {
      inspectResult.flowEnd = true;
      return inspectDone(code)
    }

    function inspectDone(code) {
      inspectResult.continued = subcontinued;
      self.interrupt = self.containerState = undefined;
      return ok(code)
    }
  }
}

function tokenizeContainer(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    'linePrefix',
    4
  )
}

function tokenizeLazyFlow(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.lazy(this.parser.constructs.flow, ok, nok),
    'linePrefix',
    4
  )
}

var document = {
	tokenize: tokenize$2
};

var chunkedSplice_1 = chunkedSplice;

var v8MaxSafeChunkSize = 10000;

// `Array#splice` takes all items to be inserted as individual argument which
// causes a stack overflow in V8 when trying to insert 100k items for instance.
function chunkedSplice(list, start, remove, items) {
  var end = list.length;
  var chunkStart = 0;
  var result;
  var parameters;

  // Make start between zero and `end` (included).
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }

  remove = remove > 0 ? remove : 0;

  // No need to chunk the items if there’s only a couple (10k) items.
  if (items.length < v8MaxSafeChunkSize) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    return [].splice.apply(list, parameters)
  }

  // Delete `remove` items starting from `start`
  result = [].splice.apply(list, [start, remove]);

  // Insert the items in chunks to not cause stack overflows.
  while (chunkStart < items.length) {
    parameters = items.slice(chunkStart, chunkStart + v8MaxSafeChunkSize);
    parameters.unshift(start, 0)
    ;[].splice.apply(list, parameters);

    chunkStart += v8MaxSafeChunkSize;
    start += v8MaxSafeChunkSize;
  }

  return result
}

var shallow_1 = shallow;



function shallow(object) {
  return assign({}, object)
}

var subtokenize_1 = subtokenize;






function subtokenize(events) {
  var jumps = {};
  var index = -1;
  var event;
  var lineIndex;
  var otherIndex;
  var otherEvent;
  var parameters;
  var subevents;
  var more;

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index];
    }

    event = events[index];

    // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.
    if (
      index &&
      event[1].type === 'chunkFlow' &&
      events[index - 1][1].type === 'listItemPrefix'
    ) {
      subevents = event[1]._tokenizer.events;
      otherIndex = 0;

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'lineEndingBlank'
      ) {
        otherIndex += 2;
      }

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'content'
      ) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break
          }

          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1].isInFirstContentOfListItem = true;
            otherIndex++;
          }
        }
      }
    }

    // Enter.
    if (event[0] === 'enter') {
      if (event[1].contentType) {
        assign(jumps, subcontent(events, index));
        index = jumps[index];
        more = true;
      }
    }
    // Exit.
    else if (event[1]._container || event[1]._movePreviousLineEndings) {
      otherIndex = index;
      lineIndex = undefined;

      while (otherIndex--) {
        otherEvent = events[otherIndex];

        if (
          otherEvent[1].type === 'lineEnding' ||
          otherEvent[1].type === 'lineEndingBlank'
        ) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank';
            }

            otherEvent[1].type = 'lineEnding';
            lineIndex = otherIndex;
          }
        } else {
          break
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = shallow_1(events[lineIndex][1].start);

        // Switch container exit w/ line endings.
        parameters = events.slice(lineIndex, index);
        parameters.unshift(event);
        chunkedSplice_1(events, lineIndex, index - lineIndex + 1, parameters);
      }
    }
  }

  return !more
}

function subcontent(events, eventIndex) {
  var token = events[eventIndex][1];
  var context = events[eventIndex][2];
  var startPosition = eventIndex - 1;
  var startPositions = [];
  var tokenizer =
    token._tokenizer || context.parser[token.contentType](token.start);
  var childEvents = tokenizer.events;
  var jumps = [];
  var gaps = {};
  var stream;
  var previous;
  var index;
  var entered;
  var end;
  var adjust;

  // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.
  while (token) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== token) {
      // Empty.
    }

    startPositions.push(startPosition);

    if (!token._tokenizer) {
      stream = context.sliceStream(token);

      if (!token.next) {
        stream.push(null);
      }

      if (previous) {
        tokenizer.defineSkip(token.start);
      }

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true;
      }

      tokenizer.write(stream);

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined;
      }
    }

    // Unravel the next token.
    previous = token;
    token = token.next;
  }

  // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.
  token = previous;
  index = childEvents.length;

  while (index--) {
    // Make sure we’ve at least seen something (final eol is part of the last
    // token).
    if (childEvents[index][0] === 'enter') {
      entered = true;
    } else if (
      // Find a void token that includes a break.
      entered &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      add(childEvents.slice(index + 1, end));

      // Help GC.
      token._tokenizer = token.next = undefined;
      token = token.previous;
      end = index + 1;
    }
  }

  // Help GC.
  tokenizer.events = token._tokenizer = token.next = undefined;

  // Do head:
  add(childEvents.slice(0, end));

  index = -1;
  adjust = 0;

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
    adjust += jumps[index][1] - jumps[index][0] - 1;
  }

  return gaps

  function add(slice) {
    var start = startPositions.pop();
    jumps.unshift([start, start + slice.length - 1]);
    chunkedSplice_1(events, start, 2, slice);
  }
}

var sizeChunks_1 = sizeChunks;

// Measure the number of character codes in chunks.
// Counts tabs based on their expanded size, and CR+LF as one character.
function sizeChunks(chunks) {
  var index = -1;
  var size = 0;

  while (++index < chunks.length) {
    size += typeof chunks[index] === 'string' ? chunks[index].length : 1;
  }

  return size
}

var prefixSize_1 = prefixSize;



function prefixSize(events, type) {
  var tail = events[events.length - 1];
  if (!tail || tail[1].type !== type) return 0
  return sizeChunks_1(tail[2].sliceStream(tail[1]))
}

var tokenize$3 = tokenizeContent;
var resolve = resolveContent;
var interruptible = true;
var lazy = true;







var lookaheadConstruct = {tokenize: tokenizeLookaheadConstruct, partial: true};

// Content is transparent: it’s parsed right now. That way, definitions are also
// parsed right now: before text in paragraphs (specifically, media) are parsed.
function resolveContent(events) {
  subtokenize_1(events);
  return events
}

function tokenizeContent(effects, ok) {
  var previous;

  return start

  function start(code) {
    effects.enter('content');
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    });

    return data(code)
  }

  function data(code) {
    if (code === null) {
      return contentEnd(code)
    }

    if (markdownLineEnding_1(code)) {
      return effects.check(
        lookaheadConstruct,
        contentContinue,
        contentEnd
      )(code)
    }

    // Data.
    effects.consume(code);
    return data
  }

  function contentEnd(code) {
    effects.exit('chunkContent');
    effects.exit('content');
    return ok(code)
  }

  function contentContinue(code) {
    effects.consume(code);
    effects.exit('chunkContent');
    previous = previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous: previous
    });

    return data
  }
}

function tokenizeLookaheadConstruct(effects, ok, nok) {
  var self = this;

  return startLookahead

  function startLookahead(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, prefixed, 'linePrefix')
  }

  function prefixed(code) {
    if (code === null || markdownLineEnding_1(code)) {
      return nok(code)
    }

    if (prefixSize_1(self.events, 'linePrefix') < 4) {
      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
    }

    return ok(code)
  }
}

var content$1 = {
	tokenize: tokenize$3,
	resolve: resolve,
	interruptible: interruptible,
	lazy: lazy
};

var tokenize$4 = initializeFlow;







function initializeFlow(effects) {
  var self = this;
  var initial = effects.attempt(
    // Try to parse a blank line.
    partialBlankLine,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content$1, afterConstruct)
        ),
        'linePrefix'
      )
    )
  );

  return initial

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    self.currentConstruct = undefined;
    return initial
  }

  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code);
      return
    }

    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    self.currentConstruct = undefined;
    return initial
  }
}

var flow = {
	tokenize: tokenize$4
};

var text_1 = initializeFactory('text');
var string = initializeFactory('string');
var resolver_1 = {resolveAll: resolver()};





function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: resolver(field === 'text' ? resolveAllLineSuffixes : undefined)
  }

  function initializeText(effects) {
    var self = this;
    var constructs = this.parser.constructs[field];
    var text = effects.attempt(constructs, start, notText);

    return start

    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }

    function notText(code) {
      if (code === null) {
        effects.consume(code);
        return
      }

      effects.enter('data');
      effects.consume(code);
      return data
    }

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data');
        return text(code)
      }

      // Data.
      effects.consume(code);
      return data
    }

    function atBreak(code) {
      var list = constructs[code];
      var index = -1;

      if (code === null) {
        return true
      }

      if (list) {
        while (++index < list.length) {
          if (
            !list[index].previous ||
            list[index].previous.call(self, self.previous)
          ) {
            return true
          }
        }
      }
    }
  }
}

function resolver(extraResolver) {
  return resolveAllText

  function resolveAllText(events, context) {
    var index = -1;
    var enter;

    // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.
    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index;
          index++;
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end;
          events.splice(enter + 2, index - enter - 2);
          index = enter + 2;
        }

        enter = undefined;
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
}

// A rather ugly set of instructions which again looks at chunks in the input
// stream.
// The reason to do this here is that it is *much* faster to parse in reverse.
// And that we can’t hook into `null` to split the line suffix before an EOF.
// To do: figure out if we can make this into a clean utility, or even in core.
// As it will be useful for GFMs literal autolink extension (and maybe even
// tables?)
function resolveAllLineSuffixes(events, context) {
  var eventIndex = -1;
  var chunks;
  var data;
  var chunk;
  var index;
  var bufferIndex;
  var size;
  var tabs;
  var token;

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === 'lineEnding') &&
      events[eventIndex - 1][1].type === 'data'
    ) {
      data = events[eventIndex - 1][1];
      chunks = context.sliceStream(data);
      index = chunks.length;
      bufferIndex = -1;
      size = 0;
      tabs = undefined;

      while (index--) {
        chunk = chunks[index];

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length;

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++;
            bufferIndex--;
          }

          if (bufferIndex) break
          bufferIndex = -1;
        }
        // Number
        else if (chunk === -2) {
          tabs = true;
          size++;
        } else if (chunk === -1) ; else {
          // Replacement character, exit.
          index++;
          break
        }
      }

      if (size) {
        token = {
          type:
            eventIndex === events.length || tabs || size < 2
              ? 'lineSuffix'
              : 'hardBreakTrailing',

          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },

          end: shallow_1(data.end)
        };

        data.end = shallow_1(token.start);

        if (data.start.offset === data.end.offset) {
          assign(data, token);
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          );

          eventIndex += 2;
        }
      }

      eventIndex++;
    }
  }

  return events
}

var text = {
	text: text_1,
	string: string,
	resolver: resolver_1
};

var markdownLineEndingOrSpace_1 = markdownLineEndingOrSpace;

function markdownLineEndingOrSpace(code) {
  return code < 0 || code === 32
}

// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
var unicodePunctuationRegex = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

var regexCheck_1 = regexCheck;



function regexCheck(regex) {
  return check
  function check(code) {
    return regex.test(fromCharCode(code))
  }
}

// Size note: removing ASCII from the regex and using `ascii-punctuation` here
// In fact adds to the bundle size.
var unicodePunctuation_1 = regexCheck_1(unicodePunctuationRegex);

var unicodeWhitespace = regexCheck_1(/\s/);

var classifyCharacter_1 = classifyCharacter;





// Classify whether a character is unicode whitespace, unicode punctuation, or
// anything else.
// Used for attention (emphasis, strong), whose sequences can open or close
// based on the class of surrounding characters.
function classifyCharacter(code) {
  if (
    code === null ||
    markdownLineEndingOrSpace_1(code) ||
    unicodeWhitespace(code)
  ) {
    return 1
  }

  if (unicodePunctuation_1(code)) {
    return 2
  }
}

var movePoint_1 = movePoint;

// Note! `move` only works inside lines! It’s not possible to move past other
// chunks (replacement characters, tabs, or line endings).
function movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
  return point
}

var resolveAll_1 = resolveAll;

function resolveAll(constructs, events, context) {
  var called = [];
  var index = -1;
  var resolve;

  while (++index < constructs.length) {
    resolve = constructs[index].resolveAll;

    if (resolve && called.indexOf(resolve) < 0) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }

  return events
}

var tokenize$5 = tokenizeAttention;
var resolveAll_1$1 = resolveAllAttention;







// Take all events and resolve attention to emphasis or strong.
function resolveAllAttention(events, context) {
  var index = -1;
  var open;
  var group;
  var text;
  var openingSequence;
  var closingSequence;
  var use;
  var nextEvents;
  var offset;

  // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.
  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index;

      // Now walk back to find an opener.
      while (open--) {
        // Find a token that can open the closer.
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open &&
          // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue
          }

          // Number of markers to use from the sequence.
          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1;

          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: movePoint_1(shallow_1(events[open][1].end), -use),
            end: shallow_1(events[open][1].end)
          };

          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: shallow_1(events[index][1].start),
            end: movePoint_1(shallow_1(events[index][1].start), use)
          };

          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: shallow_1(events[open][1].end),
            end: shallow_1(events[index][1].start)
          };

          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: shallow_1(openingSequence.start),
            end: shallow_1(closingSequence.end)
          };

          events[open][1].end = shallow_1(openingSequence.start);
          events[index][1].start = shallow_1(closingSequence.end);

          nextEvents = [];

          // If there are more markers in the opening, add them before.
          if (events[open][1].end.offset - events[open][1].start.offset) {
            chunkedSplice_1(nextEvents, nextEvents.length, 0, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ]);
          }

          // Opening.
          chunkedSplice_1(nextEvents, nextEvents.length, 0, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ]);

          // Between.
          chunkedSplice_1(
            nextEvents,
            nextEvents.length,
            0,
            resolveAll_1(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          );

          // Closing.
          chunkedSplice_1(nextEvents, nextEvents.length, 0, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ]);

          // If there are more markers in the closing, add them after.
          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            chunkedSplice_1(nextEvents, nextEvents.length, 0, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ]);
          } else {
            offset = 0;
          }

          chunkedSplice_1(events, open - 1, index - open + 3, nextEvents);

          index = open + nextEvents.length - offset - 2;
          break
        }
      }
    }
  }

  // Remove remaining sequences.
  index = -1;

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data';
    }
  }

  return events
}

function tokenizeAttention(effects, ok) {
  var before = classifyCharacter_1(this.previous);
  var marker;

  return start

  function start(code) {
    effects.enter('attentionSequence');
    marker = code;
    return sequence(code)
  }

  function sequence(code) {
    var token;
    var after;
    var open;
    var close;

    if (code === marker) {
      effects.consume(code);
      return sequence
    }

    token = effects.exit('attentionSequence');
    after = classifyCharacter_1(code);
    open = !after || (after === 2 && before);
    close = !before || (before === 2 && after);
    token._open = marker === 42 ? open : open && (before || !close);
    token._close = marker === 42 ? close : close && (after || !open);
    return ok(code)
  }
}

var attention = {
	tokenize: tokenize$5,
	resolveAll: resolveAll_1$1
};

var tokenize$6 = tokenizeAtxHeading;
var resolve$1 = resolveAtxHeading;








function resolveAtxHeading(events, context) {
  var contentEnd = events.length - 2;
  var contentStart = 3;
  var content;
  var text;

  // Prefix whitespace, part of the opening.
  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2;
  }

  // Suffix whitespace, part of the closing.
  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === 'whitespace'
  ) {
    contentEnd -= 2;
  }

  if (
    events[contentEnd][1].type === 'atxHeadingSequence' &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === 'whitespace'))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }

  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };

    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: 'text'
    };

    chunkedSplice_1(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ]);
  }

  return events
}

function tokenizeAtxHeading(effects, ok, nok) {
  var self = this;
  var size = 0;

  return start

  function start(code) {
    effects.enter('atxHeading');
    effects.enter('atxHeadingSequence');
    return fenceOpenInside(code)
  }

  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return fenceOpenInside
    }

    if (code === null || markdownLineEndingOrSpace_1(code)) {
      effects.exit('atxHeadingSequence');
      return self.interrupt ? ok(code) : headingBreak(code)
    }

    return nok(code)
  }

  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence');
      return sequence(code)
    }

    if (code === null || markdownLineEnding_1(code)) {
      effects.exit('atxHeading');
      return ok(code)
    }

    if (markdownSpace_1(code)) {
      return factorySpace(effects, headingBreak, 'whitespace')(code)
    }

    effects.enter('atxHeadingText');
    return data(code)
  }

  function sequence(code) {
    if (code === 35) {
      effects.consume(code);
      return sequence
    }

    effects.exit('atxHeadingSequence');
    return headingBreak(code)
  }

  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace_1(code)) {
      effects.exit('atxHeadingText');
      return headingBreak(code)
    }

    effects.consume(code);
    return data
  }
}

var headingAtx = {
	tokenize: tokenize$6,
	resolve: resolve$1
};

var asciiAlpha = regexCheck_1(/[A-Za-z]/);

var asciiAlphanumeric = regexCheck_1(/[\dA-Za-z]/);

var asciiAtext = regexCheck_1(/[#-'*+\--9=?A-Z^-~]/);

var asciiControl_1 = asciiControl;

// Note: EOF is seen as ASCII control here, because `null < 32 == true`.
function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code < 32 || code === 127
  )
}

var tokenize$7 = tokenizeAutolink;






function tokenizeAutolink(effects, ok, nok) {
  var size;

  return start

  function start(code) {
    effects.enter('autolink');
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.enter('autolinkProtocol');
    return open
  }

  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      size = 1;
      return schemeOrEmailAtext
    }

    return asciiAtext(code) ? emailAtext(code) : nok(code)
  }

  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)
      ? schemeInsideOrEmailAtext(code)
      : emailAtext(code)
  }

  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      return urlInside
    }

    if (
      (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
      size++ < 32
    ) {
      effects.consume(code);
      return schemeInsideOrEmailAtext
    }

    return emailAtext(code)
  }

  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol');
      return end(code)
    }

    if (code === 32 || code === 60 || asciiControl_1(code)) {
      return nok(code)
    }

    effects.consume(code);
    return urlInside
  }

  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot
    }

    if (asciiAtext(code)) {
      effects.consume(code);
      return emailAtext
    }

    return nok(code)
  }

  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }

  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot
    }

    if (code === 62) {
      // Exit, then change the type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail';
      return end(code)
    }

    return emailValue(code)
  }

  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code);
      return code === 45 ? emailValue : emailLabel
    }

    return nok(code)
  }

  function end(code) {
    effects.enter('autolinkMarker');
    effects.consume(code);
    effects.exit('autolinkMarker');
    effects.exit('autolink');
    return ok
  }
}

var autolink = {
	tokenize: tokenize$7
};

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

var asciiDigit = regexCheck_1(/\d/);

var tokenize$8 = tokenizeThematicBreak;






function tokenizeThematicBreak(effects, ok, nok) {
  var size = 0;
  var marker;

  return start

  function start(code) {
    effects.enter('thematicBreak');
    marker = code;
    return atBreak(code)
  }

  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence');
      return sequence(code)
    }

    if (markdownSpace_1(code)) {
      return factorySpace(effects, atBreak, 'whitespace')(code)
    }

    if (size < 3 || (code !== null && !markdownLineEnding_1(code))) {
      return nok(code)
    }

    effects.exit('thematicBreak');
    return ok(code)
  }

  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence
    }

    effects.exit('thematicBreakSequence');
    return atBreak(code)
  }
}

var thematicBreak = {
	tokenize: tokenize$8
};

var list = createCommonjsModule(function (module, exports) {
exports.tokenize = tokenizeListStart;
exports.continuation = {tokenize: tokenizeListContinuation};
exports.exit = tokenizeListEnd;










function tokenizeListStart(effects, ok, nok) {
  var self = this;
  var initialSize = prefixSize_1(self.events, 'linePrefix');
  var valueSize;

  return start

  function start(code) {
    if (
      (code === 42 || code === 43 || code === 45) &&
      (!self.containerState.marker || code === self.containerState.marker)
    ) {
      return code === 42 || code === 45
        ? effects.check(thematicBreak, nok, unordered)(code)
        : unordered(code)
    }

    if (
      asciiDigit(code) &&
      (!self.containerState.type || self.containerState.type === 'listOrdered')
    ) {
      return ordered(code)
    }

    return nok(code)
  }

  function unordered(code) {
    if (!self.containerState.type) {
      self.containerState.type = 'listUnordered';
      effects.enter(self.containerState.type, {_container: true});
    }

    effects.enter('listItemPrefix');
    return atMarker(code)
  }

  function ordered(code) {
    if (self.containerState.type || !self.interrupt || code === 49) {
      if (!self.containerState.type) {
        self.containerState.type = 'listOrdered';
        effects.enter(self.containerState.type, {_container: true});
      }

      effects.enter('listItemPrefix');
      effects.enter('listItemValue');
      effects.consume(code);
      valueSize = 1;
      return self.interrupt ? afterValue : inside
    }

    return nok(code)
  }

  function inside(code) {
    if (asciiDigit(code) && ++valueSize < 10) {
      effects.consume(code);
      return inside
    }

    return afterValue(code)
  }

  function afterValue(code) {
    effects.exit('listItemValue');

    return code === 41 || code === 46 ? atMarker(code) : nok(code)
  }

  function atMarker(code) {
    self.containerState.marker = self.containerState.marker || code;

    if (code === self.containerState.marker) {
      effects.enter('listItemMarker');
      effects.consume(code);
      effects.exit('listItemMarker');
      return effects.check(
        partialBlankLine,
        // Can’t be empty when interrupting.
        self.interrupt ? nok : onBlank,
        effects.attempt(
          {tokenize: tokenizeListItemPrefixWhitespace, partial: true},
          endOfPrefix,
          otherPrefix
        )
      )
    }

    return nok(code)
  }

  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code)
  }

  function otherPrefix(code) {
    if (markdownSpace_1(code)) {
      effects.enter('listItemPrefixWhitespace');
      effects.consume(code);
      effects.exit('listItemPrefixWhitespace');
      return endOfPrefix
    }

    return nok(code)
  }

  function endOfPrefix(code) {
    self.containerState.size =
      initialSize + sizeChunks_1(self.sliceStream(effects.exit('listItemPrefix')));
    return ok(code)
  }
}

function tokenizeListContinuation(effects, ok, nok) {
  var self = this;

  self.containerState._closeFlow = undefined;

  return effects.check(partialBlankLine, onBlank, notBlank)

  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine;
    return ok(code)
  }

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace_1(code)) {
      self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined;
    return effects.attempt(
      {tokenize: tokenizeIndent, partial: true},
      ok,
      notInCurrentItem
    )(code)
  }

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true;
    // As we’re closing flow, we’re no longer interrupting
    self.interrupt = undefined;
    return factorySpace(
      effects,
      effects.attempt(exports, ok, nok),
      'linePrefix',
      4
    )(code)
  }
}

function tokenizeIndent(effects, ok, nok) {
  var self = this;

  return factorySpace(
    effects,
    afterPrefix,
    'listItemIndent',

    self.containerState.size + 1
  )

  function afterPrefix(code) {
    return prefixSize_1(self.events, 'listItemIndent') ===
      self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}

function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this;

  return factorySpace(
    effects,
    afterPrefix,
    'listItemPrefixWhitespace',

    4 + 1
  )

  function afterPrefix(code) {
    return markdownSpace_1(code) ||
      !prefixSize_1(self.events, 'listItemPrefixWhitespace')
      ? nok(code)
      : ok(code)
  }
}
});

var blockQuote = createCommonjsModule(function (module, exports) {
exports.tokenize = tokenizeBlockQuoteStart;
exports.continuation = {tokenize: tokenizeBlockQuoteContinuation};
exports.exit = exit;





function tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this;

  return start

  function start(code) {
    if (code === 62) {
      if (!self.containerState.open) {
        effects.enter('blockQuote', {_container: true});
        self.containerState.open = true;
      }

      effects.enter('blockQuotePrefix');
      effects.enter('blockQuoteMarker');
      effects.consume(code);
      effects.exit('blockQuoteMarker');
      return after
    }

    return nok(code)
  }

  function after(code) {
    if (markdownSpace_1(code)) {
      effects.enter('blockQuotePrefixWhitespace');
      effects.consume(code);
      effects.exit('blockQuotePrefixWhitespace');
      effects.exit('blockQuotePrefix');
      return ok
    }

    effects.exit('blockQuotePrefix');
    return ok(code)
  }
}

function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return factorySpace(
    effects,
    effects.attempt(exports, ok, nok),
    'linePrefix',
    4
  )
}

function exit(effects) {
  effects.exit('blockQuote');
}
});

var asciiPunctuation = regexCheck_1(/[!-/:-@[-`{-~]/);

var tokenize$9 = tokenizeCharacterEscape;



function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('characterEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    effects.exit('escapeMarker');
    return open
  }

  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue');
      effects.consume(code);
      effects.exit('characterEscapeValue');
      effects.exit('characterEscape');
      return ok
    }

    return nok(code)
  }
}

var characterEscape = {
	tokenize: tokenize$9
};

var AEli = "Æ";
var AElig = "Æ";
var AM = "&";
var AMP = "&";
var Aacut = "Á";
var Aacute = "Á";
var Abreve = "Ă";
var Acir = "Â";
var Acirc = "Â";
var Acy = "А";
var Afr = "𝔄";
var Agrav = "À";
var Agrave = "À";
var Alpha = "Α";
var Amacr = "Ā";
var And = "⩓";
var Aogon = "Ą";
var Aopf = "𝔸";
var ApplyFunction = "⁡";
var Arin = "Å";
var Aring = "Å";
var Ascr = "𝒜";
var Assign = "≔";
var Atild = "Ã";
var Atilde = "Ã";
var Aum = "Ä";
var Auml = "Ä";
var Backslash = "∖";
var Barv = "⫧";
var Barwed = "⌆";
var Bcy = "Б";
var Because = "∵";
var Bernoullis = "ℬ";
var Beta = "Β";
var Bfr = "𝔅";
var Bopf = "𝔹";
var Breve = "˘";
var Bscr = "ℬ";
var Bumpeq = "≎";
var CHcy = "Ч";
var COP = "©";
var COPY = "©";
var Cacute = "Ć";
var Cap = "⋒";
var CapitalDifferentialD = "ⅅ";
var Cayleys = "ℭ";
var Ccaron = "Č";
var Ccedi = "Ç";
var Ccedil = "Ç";
var Ccirc = "Ĉ";
var Cconint = "∰";
var Cdot = "Ċ";
var Cedilla = "¸";
var CenterDot = "·";
var Cfr = "ℭ";
var Chi = "Χ";
var CircleDot = "⊙";
var CircleMinus = "⊖";
var CirclePlus = "⊕";
var CircleTimes = "⊗";
var ClockwiseContourIntegral = "∲";
var CloseCurlyDoubleQuote = "”";
var CloseCurlyQuote = "’";
var Colon = "∷";
var Colone = "⩴";
var Congruent = "≡";
var Conint = "∯";
var ContourIntegral = "∮";
var Copf = "ℂ";
var Coproduct = "∐";
var CounterClockwiseContourIntegral = "∳";
var Cross = "⨯";
var Cscr = "𝒞";
var Cup = "⋓";
var CupCap = "≍";
var DD = "ⅅ";
var DDotrahd = "⤑";
var DJcy = "Ђ";
var DScy = "Ѕ";
var DZcy = "Џ";
var Dagger = "‡";
var Darr = "↡";
var Dashv = "⫤";
var Dcaron = "Ď";
var Dcy = "Д";
var Del = "∇";
var Delta = "Δ";
var Dfr = "𝔇";
var DiacriticalAcute = "´";
var DiacriticalDot = "˙";
var DiacriticalDoubleAcute = "˝";
var DiacriticalGrave = "`";
var DiacriticalTilde = "˜";
var Diamond = "⋄";
var DifferentialD = "ⅆ";
var Dopf = "𝔻";
var Dot = "¨";
var DotDot = "⃜";
var DotEqual = "≐";
var DoubleContourIntegral = "∯";
var DoubleDot = "¨";
var DoubleDownArrow = "⇓";
var DoubleLeftArrow = "⇐";
var DoubleLeftRightArrow = "⇔";
var DoubleLeftTee = "⫤";
var DoubleLongLeftArrow = "⟸";
var DoubleLongLeftRightArrow = "⟺";
var DoubleLongRightArrow = "⟹";
var DoubleRightArrow = "⇒";
var DoubleRightTee = "⊨";
var DoubleUpArrow = "⇑";
var DoubleUpDownArrow = "⇕";
var DoubleVerticalBar = "∥";
var DownArrow = "↓";
var DownArrowBar = "⤓";
var DownArrowUpArrow = "⇵";
var DownBreve = "̑";
var DownLeftRightVector = "⥐";
var DownLeftTeeVector = "⥞";
var DownLeftVector = "↽";
var DownLeftVectorBar = "⥖";
var DownRightTeeVector = "⥟";
var DownRightVector = "⇁";
var DownRightVectorBar = "⥗";
var DownTee = "⊤";
var DownTeeArrow = "↧";
var Downarrow = "⇓";
var Dscr = "𝒟";
var Dstrok = "Đ";
var ENG = "Ŋ";
var ET = "Ð";
var ETH = "Ð";
var Eacut = "É";
var Eacute = "É";
var Ecaron = "Ě";
var Ecir = "Ê";
var Ecirc = "Ê";
var Ecy = "Э";
var Edot = "Ė";
var Efr = "𝔈";
var Egrav = "È";
var Egrave = "È";
var Element = "∈";
var Emacr = "Ē";
var EmptySmallSquare = "◻";
var EmptyVerySmallSquare = "▫";
var Eogon = "Ę";
var Eopf = "𝔼";
var Epsilon = "Ε";
var Equal = "⩵";
var EqualTilde = "≂";
var Equilibrium = "⇌";
var Escr = "ℰ";
var Esim = "⩳";
var Eta = "Η";
var Eum = "Ë";
var Euml = "Ë";
var Exists = "∃";
var ExponentialE = "ⅇ";
var Fcy = "Ф";
var Ffr = "𝔉";
var FilledSmallSquare = "◼";
var FilledVerySmallSquare = "▪";
var Fopf = "𝔽";
var ForAll = "∀";
var Fouriertrf = "ℱ";
var Fscr = "ℱ";
var GJcy = "Ѓ";
var G = ">";
var GT = ">";
var Gamma = "Γ";
var Gammad = "Ϝ";
var Gbreve = "Ğ";
var Gcedil = "Ģ";
var Gcirc = "Ĝ";
var Gcy = "Г";
var Gdot = "Ġ";
var Gfr = "𝔊";
var Gg = "⋙";
var Gopf = "𝔾";
var GreaterEqual = "≥";
var GreaterEqualLess = "⋛";
var GreaterFullEqual = "≧";
var GreaterGreater = "⪢";
var GreaterLess = "≷";
var GreaterSlantEqual = "⩾";
var GreaterTilde = "≳";
var Gscr = "𝒢";
var Gt = "≫";
var HARDcy = "Ъ";
var Hacek = "ˇ";
var Hat = "^";
var Hcirc = "Ĥ";
var Hfr = "ℌ";
var HilbertSpace = "ℋ";
var Hopf = "ℍ";
var HorizontalLine = "─";
var Hscr = "ℋ";
var Hstrok = "Ħ";
var HumpDownHump = "≎";
var HumpEqual = "≏";
var IEcy = "Е";
var IJlig = "Ĳ";
var IOcy = "Ё";
var Iacut = "Í";
var Iacute = "Í";
var Icir = "Î";
var Icirc = "Î";
var Icy = "И";
var Idot = "İ";
var Ifr = "ℑ";
var Igrav = "Ì";
var Igrave = "Ì";
var Im = "ℑ";
var Imacr = "Ī";
var ImaginaryI = "ⅈ";
var Implies = "⇒";
var Int = "∬";
var Integral = "∫";
var Intersection = "⋂";
var InvisibleComma = "⁣";
var InvisibleTimes = "⁢";
var Iogon = "Į";
var Iopf = "𝕀";
var Iota = "Ι";
var Iscr = "ℐ";
var Itilde = "Ĩ";
var Iukcy = "І";
var Ium = "Ï";
var Iuml = "Ï";
var Jcirc = "Ĵ";
var Jcy = "Й";
var Jfr = "𝔍";
var Jopf = "𝕁";
var Jscr = "𝒥";
var Jsercy = "Ј";
var Jukcy = "Є";
var KHcy = "Х";
var KJcy = "Ќ";
var Kappa = "Κ";
var Kcedil = "Ķ";
var Kcy = "К";
var Kfr = "𝔎";
var Kopf = "𝕂";
var Kscr = "𝒦";
var LJcy = "Љ";
var L = "<";
var LT = "<";
var Lacute = "Ĺ";
var Lambda = "Λ";
var Lang = "⟪";
var Laplacetrf = "ℒ";
var Larr = "↞";
var Lcaron = "Ľ";
var Lcedil = "Ļ";
var Lcy = "Л";
var LeftAngleBracket = "⟨";
var LeftArrow = "←";
var LeftArrowBar = "⇤";
var LeftArrowRightArrow = "⇆";
var LeftCeiling = "⌈";
var LeftDoubleBracket = "⟦";
var LeftDownTeeVector = "⥡";
var LeftDownVector = "⇃";
var LeftDownVectorBar = "⥙";
var LeftFloor = "⌊";
var LeftRightArrow = "↔";
var LeftRightVector = "⥎";
var LeftTee = "⊣";
var LeftTeeArrow = "↤";
var LeftTeeVector = "⥚";
var LeftTriangle = "⊲";
var LeftTriangleBar = "⧏";
var LeftTriangleEqual = "⊴";
var LeftUpDownVector = "⥑";
var LeftUpTeeVector = "⥠";
var LeftUpVector = "↿";
var LeftUpVectorBar = "⥘";
var LeftVector = "↼";
var LeftVectorBar = "⥒";
var Leftarrow = "⇐";
var Leftrightarrow = "⇔";
var LessEqualGreater = "⋚";
var LessFullEqual = "≦";
var LessGreater = "≶";
var LessLess = "⪡";
var LessSlantEqual = "⩽";
var LessTilde = "≲";
var Lfr = "𝔏";
var Ll = "⋘";
var Lleftarrow = "⇚";
var Lmidot = "Ŀ";
var LongLeftArrow = "⟵";
var LongLeftRightArrow = "⟷";
var LongRightArrow = "⟶";
var Longleftarrow = "⟸";
var Longleftrightarrow = "⟺";
var Longrightarrow = "⟹";
var Lopf = "𝕃";
var LowerLeftArrow = "↙";
var LowerRightArrow = "↘";
var Lscr = "ℒ";
var Lsh = "↰";
var Lstrok = "Ł";
var Lt = "≪";
var Mcy = "М";
var MediumSpace = " ";
var Mellintrf = "ℳ";
var Mfr = "𝔐";
var MinusPlus = "∓";
var Mopf = "𝕄";
var Mscr = "ℳ";
var Mu = "Μ";
var NJcy = "Њ";
var Nacute = "Ń";
var Ncaron = "Ň";
var Ncedil = "Ņ";
var Ncy = "Н";
var NegativeMediumSpace = "​";
var NegativeThickSpace = "​";
var NegativeThinSpace = "​";
var NegativeVeryThinSpace = "​";
var NestedGreaterGreater = "≫";
var NestedLessLess = "≪";
var NewLine = "\n";
var Nfr = "𝔑";
var NoBreak = "⁠";
var NonBreakingSpace = " ";
var Nopf = "ℕ";
var Not = "⫬";
var NotCongruent = "≢";
var NotCupCap = "≭";
var NotDoubleVerticalBar = "∦";
var NotElement = "∉";
var NotEqual = "≠";
var NotEqualTilde = "≂̸";
var NotExists = "∄";
var NotGreater = "≯";
var NotGreaterEqual = "≱";
var NotGreaterFullEqual = "≧̸";
var NotGreaterGreater = "≫̸";
var NotGreaterLess = "≹";
var NotGreaterSlantEqual = "⩾̸";
var NotGreaterTilde = "≵";
var NotHumpDownHump = "≎̸";
var NotHumpEqual = "≏̸";
var NotLeftTriangle = "⋪";
var NotLeftTriangleBar = "⧏̸";
var NotLeftTriangleEqual = "⋬";
var NotLess = "≮";
var NotLessEqual = "≰";
var NotLessGreater = "≸";
var NotLessLess = "≪̸";
var NotLessSlantEqual = "⩽̸";
var NotLessTilde = "≴";
var NotNestedGreaterGreater = "⪢̸";
var NotNestedLessLess = "⪡̸";
var NotPrecedes = "⊀";
var NotPrecedesEqual = "⪯̸";
var NotPrecedesSlantEqual = "⋠";
var NotReverseElement = "∌";
var NotRightTriangle = "⋫";
var NotRightTriangleBar = "⧐̸";
var NotRightTriangleEqual = "⋭";
var NotSquareSubset = "⊏̸";
var NotSquareSubsetEqual = "⋢";
var NotSquareSuperset = "⊐̸";
var NotSquareSupersetEqual = "⋣";
var NotSubset = "⊂⃒";
var NotSubsetEqual = "⊈";
var NotSucceeds = "⊁";
var NotSucceedsEqual = "⪰̸";
var NotSucceedsSlantEqual = "⋡";
var NotSucceedsTilde = "≿̸";
var NotSuperset = "⊃⃒";
var NotSupersetEqual = "⊉";
var NotTilde = "≁";
var NotTildeEqual = "≄";
var NotTildeFullEqual = "≇";
var NotTildeTilde = "≉";
var NotVerticalBar = "∤";
var Nscr = "𝒩";
var Ntild = "Ñ";
var Ntilde = "Ñ";
var Nu = "Ν";
var OElig = "Œ";
var Oacut = "Ó";
var Oacute = "Ó";
var Ocir = "Ô";
var Ocirc = "Ô";
var Ocy = "О";
var Odblac = "Ő";
var Ofr = "𝔒";
var Ograv = "Ò";
var Ograve = "Ò";
var Omacr = "Ō";
var Omega = "Ω";
var Omicron = "Ο";
var Oopf = "𝕆";
var OpenCurlyDoubleQuote = "“";
var OpenCurlyQuote = "‘";
var Or = "⩔";
var Oscr = "𝒪";
var Oslas = "Ø";
var Oslash = "Ø";
var Otild = "Õ";
var Otilde = "Õ";
var Otimes = "⨷";
var Oum = "Ö";
var Ouml = "Ö";
var OverBar = "‾";
var OverBrace = "⏞";
var OverBracket = "⎴";
var OverParenthesis = "⏜";
var PartialD = "∂";
var Pcy = "П";
var Pfr = "𝔓";
var Phi = "Φ";
var Pi = "Π";
var PlusMinus = "±";
var Poincareplane = "ℌ";
var Popf = "ℙ";
var Pr = "⪻";
var Precedes = "≺";
var PrecedesEqual = "⪯";
var PrecedesSlantEqual = "≼";
var PrecedesTilde = "≾";
var Prime = "″";
var Product = "∏";
var Proportion = "∷";
var Proportional = "∝";
var Pscr = "𝒫";
var Psi = "Ψ";
var QUO = "\"";
var QUOT = "\"";
var Qfr = "𝔔";
var Qopf = "ℚ";
var Qscr = "𝒬";
var RBarr = "⤐";
var RE = "®";
var REG = "®";
var Racute = "Ŕ";
var Rang = "⟫";
var Rarr = "↠";
var Rarrtl = "⤖";
var Rcaron = "Ř";
var Rcedil = "Ŗ";
var Rcy = "Р";
var Re = "ℜ";
var ReverseElement = "∋";
var ReverseEquilibrium = "⇋";
var ReverseUpEquilibrium = "⥯";
var Rfr = "ℜ";
var Rho = "Ρ";
var RightAngleBracket = "⟩";
var RightArrow = "→";
var RightArrowBar = "⇥";
var RightArrowLeftArrow = "⇄";
var RightCeiling = "⌉";
var RightDoubleBracket = "⟧";
var RightDownTeeVector = "⥝";
var RightDownVector = "⇂";
var RightDownVectorBar = "⥕";
var RightFloor = "⌋";
var RightTee = "⊢";
var RightTeeArrow = "↦";
var RightTeeVector = "⥛";
var RightTriangle = "⊳";
var RightTriangleBar = "⧐";
var RightTriangleEqual = "⊵";
var RightUpDownVector = "⥏";
var RightUpTeeVector = "⥜";
var RightUpVector = "↾";
var RightUpVectorBar = "⥔";
var RightVector = "⇀";
var RightVectorBar = "⥓";
var Rightarrow = "⇒";
var Ropf = "ℝ";
var RoundImplies = "⥰";
var Rrightarrow = "⇛";
var Rscr = "ℛ";
var Rsh = "↱";
var RuleDelayed = "⧴";
var SHCHcy = "Щ";
var SHcy = "Ш";
var SOFTcy = "Ь";
var Sacute = "Ś";
var Sc = "⪼";
var Scaron = "Š";
var Scedil = "Ş";
var Scirc = "Ŝ";
var Scy = "С";
var Sfr = "𝔖";
var ShortDownArrow = "↓";
var ShortLeftArrow = "←";
var ShortRightArrow = "→";
var ShortUpArrow = "↑";
var Sigma = "Σ";
var SmallCircle = "∘";
var Sopf = "𝕊";
var Sqrt = "√";
var Square = "□";
var SquareIntersection = "⊓";
var SquareSubset = "⊏";
var SquareSubsetEqual = "⊑";
var SquareSuperset = "⊐";
var SquareSupersetEqual = "⊒";
var SquareUnion = "⊔";
var Sscr = "𝒮";
var Star = "⋆";
var Sub = "⋐";
var Subset = "⋐";
var SubsetEqual = "⊆";
var Succeeds = "≻";
var SucceedsEqual = "⪰";
var SucceedsSlantEqual = "≽";
var SucceedsTilde = "≿";
var SuchThat = "∋";
var Sum = "∑";
var Sup = "⋑";
var Superset = "⊃";
var SupersetEqual = "⊇";
var Supset = "⋑";
var THOR = "Þ";
var THORN = "Þ";
var TRADE = "™";
var TSHcy = "Ћ";
var TScy = "Ц";
var Tab = "\t";
var Tau = "Τ";
var Tcaron = "Ť";
var Tcedil = "Ţ";
var Tcy = "Т";
var Tfr = "𝔗";
var Therefore = "∴";
var Theta = "Θ";
var ThickSpace = "  ";
var ThinSpace = " ";
var Tilde = "∼";
var TildeEqual = "≃";
var TildeFullEqual = "≅";
var TildeTilde = "≈";
var Topf = "𝕋";
var TripleDot = "⃛";
var Tscr = "𝒯";
var Tstrok = "Ŧ";
var Uacut = "Ú";
var Uacute = "Ú";
var Uarr = "↟";
var Uarrocir = "⥉";
var Ubrcy = "Ў";
var Ubreve = "Ŭ";
var Ucir = "Û";
var Ucirc = "Û";
var Ucy = "У";
var Udblac = "Ű";
var Ufr = "𝔘";
var Ugrav = "Ù";
var Ugrave = "Ù";
var Umacr = "Ū";
var UnderBar = "_";
var UnderBrace = "⏟";
var UnderBracket = "⎵";
var UnderParenthesis = "⏝";
var Union = "⋃";
var UnionPlus = "⊎";
var Uogon = "Ų";
var Uopf = "𝕌";
var UpArrow = "↑";
var UpArrowBar = "⤒";
var UpArrowDownArrow = "⇅";
var UpDownArrow = "↕";
var UpEquilibrium = "⥮";
var UpTee = "⊥";
var UpTeeArrow = "↥";
var Uparrow = "⇑";
var Updownarrow = "⇕";
var UpperLeftArrow = "↖";
var UpperRightArrow = "↗";
var Upsi = "ϒ";
var Upsilon = "Υ";
var Uring = "Ů";
var Uscr = "𝒰";
var Utilde = "Ũ";
var Uum = "Ü";
var Uuml = "Ü";
var VDash = "⊫";
var Vbar = "⫫";
var Vcy = "В";
var Vdash = "⊩";
var Vdashl = "⫦";
var Vee = "⋁";
var Verbar = "‖";
var Vert = "‖";
var VerticalBar = "∣";
var VerticalLine = "|";
var VerticalSeparator = "❘";
var VerticalTilde = "≀";
var VeryThinSpace = " ";
var Vfr = "𝔙";
var Vopf = "𝕍";
var Vscr = "𝒱";
var Vvdash = "⊪";
var Wcirc = "Ŵ";
var Wedge = "⋀";
var Wfr = "𝔚";
var Wopf = "𝕎";
var Wscr = "𝒲";
var Xfr = "𝔛";
var Xi = "Ξ";
var Xopf = "𝕏";
var Xscr = "𝒳";
var YAcy = "Я";
var YIcy = "Ї";
var YUcy = "Ю";
var Yacut = "Ý";
var Yacute = "Ý";
var Ycirc = "Ŷ";
var Ycy = "Ы";
var Yfr = "𝔜";
var Yopf = "𝕐";
var Yscr = "𝒴";
var Yuml = "Ÿ";
var ZHcy = "Ж";
var Zacute = "Ź";
var Zcaron = "Ž";
var Zcy = "З";
var Zdot = "Ż";
var ZeroWidthSpace = "​";
var Zeta = "Ζ";
var Zfr = "ℨ";
var Zopf = "ℤ";
var Zscr = "𝒵";
var aacut = "á";
var aacute = "á";
var abreve = "ă";
var ac = "∾";
var acE = "∾̳";
var acd = "∿";
var acir = "â";
var acirc = "â";
var acut = "´";
var acute = "´";
var acy = "а";
var aeli = "æ";
var aelig = "æ";
var af = "⁡";
var afr = "𝔞";
var agrav = "à";
var agrave = "à";
var alefsym = "ℵ";
var aleph = "ℵ";
var alpha = "α";
var amacr = "ā";
var amalg = "⨿";
var am = "&";
var amp = "&";
var and = "∧";
var andand = "⩕";
var andd = "⩜";
var andslope = "⩘";
var andv = "⩚";
var ang = "∠";
var ange = "⦤";
var angle = "∠";
var angmsd = "∡";
var angmsdaa = "⦨";
var angmsdab = "⦩";
var angmsdac = "⦪";
var angmsdad = "⦫";
var angmsdae = "⦬";
var angmsdaf = "⦭";
var angmsdag = "⦮";
var angmsdah = "⦯";
var angrt = "∟";
var angrtvb = "⊾";
var angrtvbd = "⦝";
var angsph = "∢";
var angst = "Å";
var angzarr = "⍼";
var aogon = "ą";
var aopf = "𝕒";
var ap = "≈";
var apE = "⩰";
var apacir = "⩯";
var ape = "≊";
var apid = "≋";
var apos = "'";
var approx = "≈";
var approxeq = "≊";
var arin = "å";
var aring = "å";
var ascr = "𝒶";
var ast = "*";
var asymp = "≈";
var asympeq = "≍";
var atild = "ã";
var atilde = "ã";
var aum = "ä";
var auml = "ä";
var awconint = "∳";
var awint = "⨑";
var bNot = "⫭";
var backcong = "≌";
var backepsilon = "϶";
var backprime = "‵";
var backsim = "∽";
var backsimeq = "⋍";
var barvee = "⊽";
var barwed = "⌅";
var barwedge = "⌅";
var bbrk = "⎵";
var bbrktbrk = "⎶";
var bcong = "≌";
var bcy = "б";
var bdquo = "„";
var becaus = "∵";
var because = "∵";
var bemptyv = "⦰";
var bepsi = "϶";
var bernou = "ℬ";
var beta = "β";
var beth = "ℶ";
var between = "≬";
var bfr = "𝔟";
var bigcap = "⋂";
var bigcirc = "◯";
var bigcup = "⋃";
var bigodot = "⨀";
var bigoplus = "⨁";
var bigotimes = "⨂";
var bigsqcup = "⨆";
var bigstar = "★";
var bigtriangledown = "▽";
var bigtriangleup = "△";
var biguplus = "⨄";
var bigvee = "⋁";
var bigwedge = "⋀";
var bkarow = "⤍";
var blacklozenge = "⧫";
var blacksquare = "▪";
var blacktriangle = "▴";
var blacktriangledown = "▾";
var blacktriangleleft = "◂";
var blacktriangleright = "▸";
var blank = "␣";
var blk12 = "▒";
var blk14 = "░";
var blk34 = "▓";
var block = "█";
var bne = "=⃥";
var bnequiv = "≡⃥";
var bnot = "⌐";
var bopf = "𝕓";
var bot = "⊥";
var bottom = "⊥";
var bowtie = "⋈";
var boxDL = "╗";
var boxDR = "╔";
var boxDl = "╖";
var boxDr = "╓";
var boxH = "═";
var boxHD = "╦";
var boxHU = "╩";
var boxHd = "╤";
var boxHu = "╧";
var boxUL = "╝";
var boxUR = "╚";
var boxUl = "╜";
var boxUr = "╙";
var boxV = "║";
var boxVH = "╬";
var boxVL = "╣";
var boxVR = "╠";
var boxVh = "╫";
var boxVl = "╢";
var boxVr = "╟";
var boxbox = "⧉";
var boxdL = "╕";
var boxdR = "╒";
var boxdl = "┐";
var boxdr = "┌";
var boxh = "─";
var boxhD = "╥";
var boxhU = "╨";
var boxhd = "┬";
var boxhu = "┴";
var boxminus = "⊟";
var boxplus = "⊞";
var boxtimes = "⊠";
var boxuL = "╛";
var boxuR = "╘";
var boxul = "┘";
var boxur = "└";
var boxv = "│";
var boxvH = "╪";
var boxvL = "╡";
var boxvR = "╞";
var boxvh = "┼";
var boxvl = "┤";
var boxvr = "├";
var bprime = "‵";
var breve = "˘";
var brvba = "¦";
var brvbar = "¦";
var bscr = "𝒷";
var bsemi = "⁏";
var bsim = "∽";
var bsime = "⋍";
var bsol = "\\";
var bsolb = "⧅";
var bsolhsub = "⟈";
var bull = "•";
var bullet = "•";
var bump = "≎";
var bumpE = "⪮";
var bumpe = "≏";
var bumpeq = "≏";
var cacute = "ć";
var cap = "∩";
var capand = "⩄";
var capbrcup = "⩉";
var capcap = "⩋";
var capcup = "⩇";
var capdot = "⩀";
var caps = "∩︀";
var caret = "⁁";
var caron = "ˇ";
var ccaps = "⩍";
var ccaron = "č";
var ccedi = "ç";
var ccedil = "ç";
var ccirc = "ĉ";
var ccups = "⩌";
var ccupssm = "⩐";
var cdot = "ċ";
var cedi = "¸";
var cedil = "¸";
var cemptyv = "⦲";
var cen = "¢";
var cent = "¢";
var centerdot = "·";
var cfr = "𝔠";
var chcy = "ч";
var check = "✓";
var checkmark = "✓";
var chi = "χ";
var cir = "○";
var cirE = "⧃";
var circ = "ˆ";
var circeq = "≗";
var circlearrowleft = "↺";
var circlearrowright = "↻";
var circledR = "®";
var circledS = "Ⓢ";
var circledast = "⊛";
var circledcirc = "⊚";
var circleddash = "⊝";
var cire = "≗";
var cirfnint = "⨐";
var cirmid = "⫯";
var cirscir = "⧂";
var clubs = "♣";
var clubsuit = "♣";
var colon = ":";
var colone = "≔";
var coloneq = "≔";
var comma = ",";
var commat = "@";
var comp = "∁";
var compfn = "∘";
var complement = "∁";
var complexes = "ℂ";
var cong = "≅";
var congdot = "⩭";
var conint = "∮";
var copf = "𝕔";
var coprod = "∐";
var cop = "©";
var copy = "©";
var copysr = "℗";
var crarr = "↵";
var cross = "✗";
var cscr = "𝒸";
var csub = "⫏";
var csube = "⫑";
var csup = "⫐";
var csupe = "⫒";
var ctdot = "⋯";
var cudarrl = "⤸";
var cudarrr = "⤵";
var cuepr = "⋞";
var cuesc = "⋟";
var cularr = "↶";
var cularrp = "⤽";
var cup = "∪";
var cupbrcap = "⩈";
var cupcap = "⩆";
var cupcup = "⩊";
var cupdot = "⊍";
var cupor = "⩅";
var cups = "∪︀";
var curarr = "↷";
var curarrm = "⤼";
var curlyeqprec = "⋞";
var curlyeqsucc = "⋟";
var curlyvee = "⋎";
var curlywedge = "⋏";
var curre = "¤";
var curren = "¤";
var curvearrowleft = "↶";
var curvearrowright = "↷";
var cuvee = "⋎";
var cuwed = "⋏";
var cwconint = "∲";
var cwint = "∱";
var cylcty = "⌭";
var dArr = "⇓";
var dHar = "⥥";
var dagger = "†";
var daleth = "ℸ";
var darr = "↓";
var dash = "‐";
var dashv = "⊣";
var dbkarow = "⤏";
var dblac = "˝";
var dcaron = "ď";
var dcy = "д";
var dd = "ⅆ";
var ddagger = "‡";
var ddarr = "⇊";
var ddotseq = "⩷";
var de = "°";
var deg = "°";
var delta = "δ";
var demptyv = "⦱";
var dfisht = "⥿";
var dfr = "𝔡";
var dharl = "⇃";
var dharr = "⇂";
var diam = "⋄";
var diamond = "⋄";
var diamondsuit = "♦";
var diams = "♦";
var die = "¨";
var digamma = "ϝ";
var disin = "⋲";
var div = "÷";
var divid = "÷";
var divide = "÷";
var divideontimes = "⋇";
var divonx = "⋇";
var djcy = "ђ";
var dlcorn = "⌞";
var dlcrop = "⌍";
var dollar = "$";
var dopf = "𝕕";
var dot = "˙";
var doteq = "≐";
var doteqdot = "≑";
var dotminus = "∸";
var dotplus = "∔";
var dotsquare = "⊡";
var doublebarwedge = "⌆";
var downarrow = "↓";
var downdownarrows = "⇊";
var downharpoonleft = "⇃";
var downharpoonright = "⇂";
var drbkarow = "⤐";
var drcorn = "⌟";
var drcrop = "⌌";
var dscr = "𝒹";
var dscy = "ѕ";
var dsol = "⧶";
var dstrok = "đ";
var dtdot = "⋱";
var dtri = "▿";
var dtrif = "▾";
var duarr = "⇵";
var duhar = "⥯";
var dwangle = "⦦";
var dzcy = "џ";
var dzigrarr = "⟿";
var eDDot = "⩷";
var eDot = "≑";
var eacut = "é";
var eacute = "é";
var easter = "⩮";
var ecaron = "ě";
var ecir = "ê";
var ecirc = "ê";
var ecolon = "≕";
var ecy = "э";
var edot = "ė";
var ee = "ⅇ";
var efDot = "≒";
var efr = "𝔢";
var eg = "⪚";
var egrav = "è";
var egrave = "è";
var egs = "⪖";
var egsdot = "⪘";
var el = "⪙";
var elinters = "⏧";
var ell = "ℓ";
var els = "⪕";
var elsdot = "⪗";
var emacr = "ē";
var empty = "∅";
var emptyset = "∅";
var emptyv = "∅";
var emsp13 = " ";
var emsp14 = " ";
var emsp = " ";
var eng = "ŋ";
var ensp = " ";
var eogon = "ę";
var eopf = "𝕖";
var epar = "⋕";
var eparsl = "⧣";
var eplus = "⩱";
var epsi = "ε";
var epsilon = "ε";
var epsiv = "ϵ";
var eqcirc = "≖";
var eqcolon = "≕";
var eqsim = "≂";
var eqslantgtr = "⪖";
var eqslantless = "⪕";
var equals = "=";
var equest = "≟";
var equiv = "≡";
var equivDD = "⩸";
var eqvparsl = "⧥";
var erDot = "≓";
var erarr = "⥱";
var escr = "ℯ";
var esdot = "≐";
var esim = "≂";
var eta = "η";
var et = "ð";
var eth = "ð";
var eum = "ë";
var euml = "ë";
var euro = "€";
var excl = "!";
var exist = "∃";
var expectation = "ℰ";
var exponentiale = "ⅇ";
var fallingdotseq = "≒";
var fcy = "ф";
var female = "♀";
var ffilig = "ﬃ";
var fflig = "ﬀ";
var ffllig = "ﬄ";
var ffr = "𝔣";
var filig = "ﬁ";
var fjlig = "fj";
var flat = "♭";
var fllig = "ﬂ";
var fltns = "▱";
var fnof = "ƒ";
var fopf = "𝕗";
var forall = "∀";
var fork = "⋔";
var forkv = "⫙";
var fpartint = "⨍";
var frac1 = "¼";
var frac12 = "½";
var frac13 = "⅓";
var frac14 = "¼";
var frac15 = "⅕";
var frac16 = "⅙";
var frac18 = "⅛";
var frac23 = "⅔";
var frac25 = "⅖";
var frac3 = "¾";
var frac34 = "¾";
var frac35 = "⅗";
var frac38 = "⅜";
var frac45 = "⅘";
var frac56 = "⅚";
var frac58 = "⅝";
var frac78 = "⅞";
var frasl = "⁄";
var frown = "⌢";
var fscr = "𝒻";
var gE = "≧";
var gEl = "⪌";
var gacute = "ǵ";
var gamma = "γ";
var gammad = "ϝ";
var gap = "⪆";
var gbreve = "ğ";
var gcirc = "ĝ";
var gcy = "г";
var gdot = "ġ";
var ge = "≥";
var gel = "⋛";
var geq = "≥";
var geqq = "≧";
var geqslant = "⩾";
var ges = "⩾";
var gescc = "⪩";
var gesdot = "⪀";
var gesdoto = "⪂";
var gesdotol = "⪄";
var gesl = "⋛︀";
var gesles = "⪔";
var gfr = "𝔤";
var gg = "≫";
var ggg = "⋙";
var gimel = "ℷ";
var gjcy = "ѓ";
var gl = "≷";
var glE = "⪒";
var gla = "⪥";
var glj = "⪤";
var gnE = "≩";
var gnap = "⪊";
var gnapprox = "⪊";
var gne = "⪈";
var gneq = "⪈";
var gneqq = "≩";
var gnsim = "⋧";
var gopf = "𝕘";
var grave = "`";
var gscr = "ℊ";
var gsim = "≳";
var gsime = "⪎";
var gsiml = "⪐";
var g = ">";
var gt = ">";
var gtcc = "⪧";
var gtcir = "⩺";
var gtdot = "⋗";
var gtlPar = "⦕";
var gtquest = "⩼";
var gtrapprox = "⪆";
var gtrarr = "⥸";
var gtrdot = "⋗";
var gtreqless = "⋛";
var gtreqqless = "⪌";
var gtrless = "≷";
var gtrsim = "≳";
var gvertneqq = "≩︀";
var gvnE = "≩︀";
var hArr = "⇔";
var hairsp = " ";
var half = "½";
var hamilt = "ℋ";
var hardcy = "ъ";
var harr = "↔";
var harrcir = "⥈";
var harrw = "↭";
var hbar = "ℏ";
var hcirc = "ĥ";
var hearts = "♥";
var heartsuit = "♥";
var hellip = "…";
var hercon = "⊹";
var hfr = "𝔥";
var hksearow = "⤥";
var hkswarow = "⤦";
var hoarr = "⇿";
var homtht = "∻";
var hookleftarrow = "↩";
var hookrightarrow = "↪";
var hopf = "𝕙";
var horbar = "―";
var hscr = "𝒽";
var hslash = "ℏ";
var hstrok = "ħ";
var hybull = "⁃";
var hyphen = "‐";
var iacut = "í";
var iacute = "í";
var ic = "⁣";
var icir = "î";
var icirc = "î";
var icy = "и";
var iecy = "е";
var iexc = "¡";
var iexcl = "¡";
var iff = "⇔";
var ifr = "𝔦";
var igrav = "ì";
var igrave = "ì";
var ii = "ⅈ";
var iiiint = "⨌";
var iiint = "∭";
var iinfin = "⧜";
var iiota = "℩";
var ijlig = "ĳ";
var imacr = "ī";
var image = "ℑ";
var imagline = "ℐ";
var imagpart = "ℑ";
var imath = "ı";
var imof = "⊷";
var imped = "Ƶ";
var incare = "℅";
var infin = "∞";
var infintie = "⧝";
var inodot = "ı";
var int = "∫";
var intcal = "⊺";
var integers = "ℤ";
var intercal = "⊺";
var intlarhk = "⨗";
var intprod = "⨼";
var iocy = "ё";
var iogon = "į";
var iopf = "𝕚";
var iota = "ι";
var iprod = "⨼";
var iques = "¿";
var iquest = "¿";
var iscr = "𝒾";
var isin = "∈";
var isinE = "⋹";
var isindot = "⋵";
var isins = "⋴";
var isinsv = "⋳";
var isinv = "∈";
var it = "⁢";
var itilde = "ĩ";
var iukcy = "і";
var ium = "ï";
var iuml = "ï";
var jcirc = "ĵ";
var jcy = "й";
var jfr = "𝔧";
var jmath = "ȷ";
var jopf = "𝕛";
var jscr = "𝒿";
var jsercy = "ј";
var jukcy = "є";
var kappa = "κ";
var kappav = "ϰ";
var kcedil = "ķ";
var kcy = "к";
var kfr = "𝔨";
var kgreen = "ĸ";
var khcy = "х";
var kjcy = "ќ";
var kopf = "𝕜";
var kscr = "𝓀";
var lAarr = "⇚";
var lArr = "⇐";
var lAtail = "⤛";
var lBarr = "⤎";
var lE = "≦";
var lEg = "⪋";
var lHar = "⥢";
var lacute = "ĺ";
var laemptyv = "⦴";
var lagran = "ℒ";
var lambda = "λ";
var lang = "⟨";
var langd = "⦑";
var langle = "⟨";
var lap = "⪅";
var laqu = "«";
var laquo = "«";
var larr = "←";
var larrb = "⇤";
var larrbfs = "⤟";
var larrfs = "⤝";
var larrhk = "↩";
var larrlp = "↫";
var larrpl = "⤹";
var larrsim = "⥳";
var larrtl = "↢";
var lat = "⪫";
var latail = "⤙";
var late = "⪭";
var lates = "⪭︀";
var lbarr = "⤌";
var lbbrk = "❲";
var lbrace = "{";
var lbrack = "[";
var lbrke = "⦋";
var lbrksld = "⦏";
var lbrkslu = "⦍";
var lcaron = "ľ";
var lcedil = "ļ";
var lceil = "⌈";
var lcub = "{";
var lcy = "л";
var ldca = "⤶";
var ldquo = "“";
var ldquor = "„";
var ldrdhar = "⥧";
var ldrushar = "⥋";
var ldsh = "↲";
var le = "≤";
var leftarrow = "←";
var leftarrowtail = "↢";
var leftharpoondown = "↽";
var leftharpoonup = "↼";
var leftleftarrows = "⇇";
var leftrightarrow = "↔";
var leftrightarrows = "⇆";
var leftrightharpoons = "⇋";
var leftrightsquigarrow = "↭";
var leftthreetimes = "⋋";
var leg = "⋚";
var leq = "≤";
var leqq = "≦";
var leqslant = "⩽";
var les = "⩽";
var lescc = "⪨";
var lesdot = "⩿";
var lesdoto = "⪁";
var lesdotor = "⪃";
var lesg = "⋚︀";
var lesges = "⪓";
var lessapprox = "⪅";
var lessdot = "⋖";
var lesseqgtr = "⋚";
var lesseqqgtr = "⪋";
var lessgtr = "≶";
var lesssim = "≲";
var lfisht = "⥼";
var lfloor = "⌊";
var lfr = "𝔩";
var lg = "≶";
var lgE = "⪑";
var lhard = "↽";
var lharu = "↼";
var lharul = "⥪";
var lhblk = "▄";
var ljcy = "љ";
var ll = "≪";
var llarr = "⇇";
var llcorner = "⌞";
var llhard = "⥫";
var lltri = "◺";
var lmidot = "ŀ";
var lmoust = "⎰";
var lmoustache = "⎰";
var lnE = "≨";
var lnap = "⪉";
var lnapprox = "⪉";
var lne = "⪇";
var lneq = "⪇";
var lneqq = "≨";
var lnsim = "⋦";
var loang = "⟬";
var loarr = "⇽";
var lobrk = "⟦";
var longleftarrow = "⟵";
var longleftrightarrow = "⟷";
var longmapsto = "⟼";
var longrightarrow = "⟶";
var looparrowleft = "↫";
var looparrowright = "↬";
var lopar = "⦅";
var lopf = "𝕝";
var loplus = "⨭";
var lotimes = "⨴";
var lowast = "∗";
var lowbar = "_";
var loz = "◊";
var lozenge = "◊";
var lozf = "⧫";
var lpar = "(";
var lparlt = "⦓";
var lrarr = "⇆";
var lrcorner = "⌟";
var lrhar = "⇋";
var lrhard = "⥭";
var lrm = "‎";
var lrtri = "⊿";
var lsaquo = "‹";
var lscr = "𝓁";
var lsh = "↰";
var lsim = "≲";
var lsime = "⪍";
var lsimg = "⪏";
var lsqb = "[";
var lsquo = "‘";
var lsquor = "‚";
var lstrok = "ł";
var l = "<";
var lt = "<";
var ltcc = "⪦";
var ltcir = "⩹";
var ltdot = "⋖";
var lthree = "⋋";
var ltimes = "⋉";
var ltlarr = "⥶";
var ltquest = "⩻";
var ltrPar = "⦖";
var ltri = "◃";
var ltrie = "⊴";
var ltrif = "◂";
var lurdshar = "⥊";
var luruhar = "⥦";
var lvertneqq = "≨︀";
var lvnE = "≨︀";
var mDDot = "∺";
var mac = "¯";
var macr = "¯";
var male = "♂";
var malt = "✠";
var maltese = "✠";
var map = "↦";
var mapsto = "↦";
var mapstodown = "↧";
var mapstoleft = "↤";
var mapstoup = "↥";
var marker = "▮";
var mcomma = "⨩";
var mcy = "м";
var mdash = "—";
var measuredangle = "∡";
var mfr = "𝔪";
var mho = "℧";
var micr = "µ";
var micro = "µ";
var mid = "∣";
var midast = "*";
var midcir = "⫰";
var middo = "·";
var middot = "·";
var minus = "−";
var minusb = "⊟";
var minusd = "∸";
var minusdu = "⨪";
var mlcp = "⫛";
var mldr = "…";
var mnplus = "∓";
var models = "⊧";
var mopf = "𝕞";
var mp = "∓";
var mscr = "𝓂";
var mstpos = "∾";
var mu = "μ";
var multimap = "⊸";
var mumap = "⊸";
var nGg = "⋙̸";
var nGt = "≫⃒";
var nGtv = "≫̸";
var nLeftarrow = "⇍";
var nLeftrightarrow = "⇎";
var nLl = "⋘̸";
var nLt = "≪⃒";
var nLtv = "≪̸";
var nRightarrow = "⇏";
var nVDash = "⊯";
var nVdash = "⊮";
var nabla = "∇";
var nacute = "ń";
var nang = "∠⃒";
var nap = "≉";
var napE = "⩰̸";
var napid = "≋̸";
var napos = "ŉ";
var napprox = "≉";
var natur = "♮";
var natural = "♮";
var naturals = "ℕ";
var nbs = " ";
var nbsp = " ";
var nbump = "≎̸";
var nbumpe = "≏̸";
var ncap = "⩃";
var ncaron = "ň";
var ncedil = "ņ";
var ncong = "≇";
var ncongdot = "⩭̸";
var ncup = "⩂";
var ncy = "н";
var ndash = "–";
var ne = "≠";
var neArr = "⇗";
var nearhk = "⤤";
var nearr = "↗";
var nearrow = "↗";
var nedot = "≐̸";
var nequiv = "≢";
var nesear = "⤨";
var nesim = "≂̸";
var nexist = "∄";
var nexists = "∄";
var nfr = "𝔫";
var ngE = "≧̸";
var nge = "≱";
var ngeq = "≱";
var ngeqq = "≧̸";
var ngeqslant = "⩾̸";
var nges = "⩾̸";
var ngsim = "≵";
var ngt = "≯";
var ngtr = "≯";
var nhArr = "⇎";
var nharr = "↮";
var nhpar = "⫲";
var ni = "∋";
var nis = "⋼";
var nisd = "⋺";
var niv = "∋";
var njcy = "њ";
var nlArr = "⇍";
var nlE = "≦̸";
var nlarr = "↚";
var nldr = "‥";
var nle = "≰";
var nleftarrow = "↚";
var nleftrightarrow = "↮";
var nleq = "≰";
var nleqq = "≦̸";
var nleqslant = "⩽̸";
var nles = "⩽̸";
var nless = "≮";
var nlsim = "≴";
var nlt = "≮";
var nltri = "⋪";
var nltrie = "⋬";
var nmid = "∤";
var nopf = "𝕟";
var no = "¬";
var not = "¬";
var notin = "∉";
var notinE = "⋹̸";
var notindot = "⋵̸";
var notinva = "∉";
var notinvb = "⋷";
var notinvc = "⋶";
var notni = "∌";
var notniva = "∌";
var notnivb = "⋾";
var notnivc = "⋽";
var npar = "∦";
var nparallel = "∦";
var nparsl = "⫽⃥";
var npart = "∂̸";
var npolint = "⨔";
var npr = "⊀";
var nprcue = "⋠";
var npre = "⪯̸";
var nprec = "⊀";
var npreceq = "⪯̸";
var nrArr = "⇏";
var nrarr = "↛";
var nrarrc = "⤳̸";
var nrarrw = "↝̸";
var nrightarrow = "↛";
var nrtri = "⋫";
var nrtrie = "⋭";
var nsc = "⊁";
var nsccue = "⋡";
var nsce = "⪰̸";
var nscr = "𝓃";
var nshortmid = "∤";
var nshortparallel = "∦";
var nsim = "≁";
var nsime = "≄";
var nsimeq = "≄";
var nsmid = "∤";
var nspar = "∦";
var nsqsube = "⋢";
var nsqsupe = "⋣";
var nsub = "⊄";
var nsubE = "⫅̸";
var nsube = "⊈";
var nsubset = "⊂⃒";
var nsubseteq = "⊈";
var nsubseteqq = "⫅̸";
var nsucc = "⊁";
var nsucceq = "⪰̸";
var nsup = "⊅";
var nsupE = "⫆̸";
var nsupe = "⊉";
var nsupset = "⊃⃒";
var nsupseteq = "⊉";
var nsupseteqq = "⫆̸";
var ntgl = "≹";
var ntild = "ñ";
var ntilde = "ñ";
var ntlg = "≸";
var ntriangleleft = "⋪";
var ntrianglelefteq = "⋬";
var ntriangleright = "⋫";
var ntrianglerighteq = "⋭";
var nu = "ν";
var num = "#";
var numero = "№";
var numsp = " ";
var nvDash = "⊭";
var nvHarr = "⤄";
var nvap = "≍⃒";
var nvdash = "⊬";
var nvge = "≥⃒";
var nvgt = ">⃒";
var nvinfin = "⧞";
var nvlArr = "⤂";
var nvle = "≤⃒";
var nvlt = "<⃒";
var nvltrie = "⊴⃒";
var nvrArr = "⤃";
var nvrtrie = "⊵⃒";
var nvsim = "∼⃒";
var nwArr = "⇖";
var nwarhk = "⤣";
var nwarr = "↖";
var nwarrow = "↖";
var nwnear = "⤧";
var oS = "Ⓢ";
var oacut = "ó";
var oacute = "ó";
var oast = "⊛";
var ocir = "ô";
var ocirc = "ô";
var ocy = "о";
var odash = "⊝";
var odblac = "ő";
var odiv = "⨸";
var odot = "⊙";
var odsold = "⦼";
var oelig = "œ";
var ofcir = "⦿";
var ofr = "𝔬";
var ogon = "˛";
var ograv = "ò";
var ograve = "ò";
var ogt = "⧁";
var ohbar = "⦵";
var ohm = "Ω";
var oint = "∮";
var olarr = "↺";
var olcir = "⦾";
var olcross = "⦻";
var oline = "‾";
var olt = "⧀";
var omacr = "ō";
var omega = "ω";
var omicron = "ο";
var omid = "⦶";
var ominus = "⊖";
var oopf = "𝕠";
var opar = "⦷";
var operp = "⦹";
var oplus = "⊕";
var or = "∨";
var orarr = "↻";
var ord = "º";
var order$1 = "ℴ";
var orderof = "ℴ";
var ordf = "ª";
var ordm = "º";
var origof = "⊶";
var oror = "⩖";
var orslope = "⩗";
var orv = "⩛";
var oscr = "ℴ";
var oslas = "ø";
var oslash = "ø";
var osol = "⊘";
var otild = "õ";
var otilde = "õ";
var otimes = "⊗";
var otimesas = "⨶";
var oum = "ö";
var ouml = "ö";
var ovbar = "⌽";
var par = "¶";
var para = "¶";
var parallel = "∥";
var parsim = "⫳";
var parsl = "⫽";
var part = "∂";
var pcy = "п";
var percnt = "%";
var period = ".";
var permil = "‰";
var perp = "⊥";
var pertenk = "‱";
var pfr = "𝔭";
var phi = "φ";
var phiv = "ϕ";
var phmmat = "ℳ";
var phone = "☎";
var pi = "π";
var pitchfork = "⋔";
var piv = "ϖ";
var planck = "ℏ";
var planckh = "ℎ";
var plankv = "ℏ";
var plus = "+";
var plusacir = "⨣";
var plusb = "⊞";
var pluscir = "⨢";
var plusdo = "∔";
var plusdu = "⨥";
var pluse = "⩲";
var plusm = "±";
var plusmn = "±";
var plussim = "⨦";
var plustwo = "⨧";
var pm = "±";
var pointint = "⨕";
var popf = "𝕡";
var poun = "£";
var pound = "£";
var pr = "≺";
var prE = "⪳";
var prap = "⪷";
var prcue = "≼";
var pre = "⪯";
var prec = "≺";
var precapprox = "⪷";
var preccurlyeq = "≼";
var preceq = "⪯";
var precnapprox = "⪹";
var precneqq = "⪵";
var precnsim = "⋨";
var precsim = "≾";
var prime = "′";
var primes = "ℙ";
var prnE = "⪵";
var prnap = "⪹";
var prnsim = "⋨";
var prod = "∏";
var profalar = "⌮";
var profline = "⌒";
var profsurf = "⌓";
var prop = "∝";
var propto = "∝";
var prsim = "≾";
var prurel = "⊰";
var pscr = "𝓅";
var psi = "ψ";
var puncsp = " ";
var qfr = "𝔮";
var qint = "⨌";
var qopf = "𝕢";
var qprime = "⁗";
var qscr = "𝓆";
var quaternions = "ℍ";
var quatint = "⨖";
var quest = "?";
var questeq = "≟";
var quo = "\"";
var quot = "\"";
var rAarr = "⇛";
var rArr = "⇒";
var rAtail = "⤜";
var rBarr = "⤏";
var rHar = "⥤";
var race = "∽̱";
var racute = "ŕ";
var radic = "√";
var raemptyv = "⦳";
var rang = "⟩";
var rangd = "⦒";
var range = "⦥";
var rangle = "⟩";
var raqu = "»";
var raquo = "»";
var rarr = "→";
var rarrap = "⥵";
var rarrb = "⇥";
var rarrbfs = "⤠";
var rarrc = "⤳";
var rarrfs = "⤞";
var rarrhk = "↪";
var rarrlp = "↬";
var rarrpl = "⥅";
var rarrsim = "⥴";
var rarrtl = "↣";
var rarrw = "↝";
var ratail = "⤚";
var ratio = "∶";
var rationals = "ℚ";
var rbarr = "⤍";
var rbbrk = "❳";
var rbrace = "}";
var rbrack = "]";
var rbrke = "⦌";
var rbrksld = "⦎";
var rbrkslu = "⦐";
var rcaron = "ř";
var rcedil = "ŗ";
var rceil = "⌉";
var rcub = "}";
var rcy = "р";
var rdca = "⤷";
var rdldhar = "⥩";
var rdquo = "”";
var rdquor = "”";
var rdsh = "↳";
var real = "ℜ";
var realine = "ℛ";
var realpart = "ℜ";
var reals = "ℝ";
var rect = "▭";
var re = "®";
var reg = "®";
var rfisht = "⥽";
var rfloor = "⌋";
var rfr = "𝔯";
var rhard = "⇁";
var rharu = "⇀";
var rharul = "⥬";
var rho = "ρ";
var rhov = "ϱ";
var rightarrow = "→";
var rightarrowtail = "↣";
var rightharpoondown = "⇁";
var rightharpoonup = "⇀";
var rightleftarrows = "⇄";
var rightleftharpoons = "⇌";
var rightrightarrows = "⇉";
var rightsquigarrow = "↝";
var rightthreetimes = "⋌";
var ring = "˚";
var risingdotseq = "≓";
var rlarr = "⇄";
var rlhar = "⇌";
var rlm = "‏";
var rmoust = "⎱";
var rmoustache = "⎱";
var rnmid = "⫮";
var roang = "⟭";
var roarr = "⇾";
var robrk = "⟧";
var ropar = "⦆";
var ropf = "𝕣";
var roplus = "⨮";
var rotimes = "⨵";
var rpar = ")";
var rpargt = "⦔";
var rppolint = "⨒";
var rrarr = "⇉";
var rsaquo = "›";
var rscr = "𝓇";
var rsh = "↱";
var rsqb = "]";
var rsquo = "’";
var rsquor = "’";
var rthree = "⋌";
var rtimes = "⋊";
var rtri = "▹";
var rtrie = "⊵";
var rtrif = "▸";
var rtriltri = "⧎";
var ruluhar = "⥨";
var rx = "℞";
var sacute = "ś";
var sbquo = "‚";
var sc = "≻";
var scE = "⪴";
var scap = "⪸";
var scaron = "š";
var sccue = "≽";
var sce = "⪰";
var scedil = "ş";
var scirc = "ŝ";
var scnE = "⪶";
var scnap = "⪺";
var scnsim = "⋩";
var scpolint = "⨓";
var scsim = "≿";
var scy = "с";
var sdot = "⋅";
var sdotb = "⊡";
var sdote = "⩦";
var seArr = "⇘";
var searhk = "⤥";
var searr = "↘";
var searrow = "↘";
var sec = "§";
var sect = "§";
var semi = ";";
var seswar = "⤩";
var setminus = "∖";
var setmn = "∖";
var sext = "✶";
var sfr = "𝔰";
var sfrown = "⌢";
var sharp = "♯";
var shchcy = "щ";
var shcy = "ш";
var shortmid = "∣";
var shortparallel = "∥";
var sh = "­";
var shy = "­";
var sigma = "σ";
var sigmaf = "ς";
var sigmav = "ς";
var sim = "∼";
var simdot = "⩪";
var sime = "≃";
var simeq = "≃";
var simg = "⪞";
var simgE = "⪠";
var siml = "⪝";
var simlE = "⪟";
var simne = "≆";
var simplus = "⨤";
var simrarr = "⥲";
var slarr = "←";
var smallsetminus = "∖";
var smashp = "⨳";
var smeparsl = "⧤";
var smid = "∣";
var smile = "⌣";
var smt = "⪪";
var smte = "⪬";
var smtes = "⪬︀";
var softcy = "ь";
var sol = "/";
var solb = "⧄";
var solbar = "⌿";
var sopf = "𝕤";
var spades = "♠";
var spadesuit = "♠";
var spar = "∥";
var sqcap = "⊓";
var sqcaps = "⊓︀";
var sqcup = "⊔";
var sqcups = "⊔︀";
var sqsub = "⊏";
var sqsube = "⊑";
var sqsubset = "⊏";
var sqsubseteq = "⊑";
var sqsup = "⊐";
var sqsupe = "⊒";
var sqsupset = "⊐";
var sqsupseteq = "⊒";
var squ = "□";
var square = "□";
var squarf = "▪";
var squf = "▪";
var srarr = "→";
var sscr = "𝓈";
var ssetmn = "∖";
var ssmile = "⌣";
var sstarf = "⋆";
var star = "☆";
var starf = "★";
var straightepsilon = "ϵ";
var straightphi = "ϕ";
var strns = "¯";
var sub = "⊂";
var subE = "⫅";
var subdot = "⪽";
var sube = "⊆";
var subedot = "⫃";
var submult = "⫁";
var subnE = "⫋";
var subne = "⊊";
var subplus = "⪿";
var subrarr = "⥹";
var subset = "⊂";
var subseteq = "⊆";
var subseteqq = "⫅";
var subsetneq = "⊊";
var subsetneqq = "⫋";
var subsim = "⫇";
var subsub = "⫕";
var subsup = "⫓";
var succ = "≻";
var succapprox = "⪸";
var succcurlyeq = "≽";
var succeq = "⪰";
var succnapprox = "⪺";
var succneqq = "⪶";
var succnsim = "⋩";
var succsim = "≿";
var sum = "∑";
var sung = "♪";
var sup = "⊃";
var sup1 = "¹";
var sup2 = "²";
var sup3 = "³";
var supE = "⫆";
var supdot = "⪾";
var supdsub = "⫘";
var supe = "⊇";
var supedot = "⫄";
var suphsol = "⟉";
var suphsub = "⫗";
var suplarr = "⥻";
var supmult = "⫂";
var supnE = "⫌";
var supne = "⊋";
var supplus = "⫀";
var supset = "⊃";
var supseteq = "⊇";
var supseteqq = "⫆";
var supsetneq = "⊋";
var supsetneqq = "⫌";
var supsim = "⫈";
var supsub = "⫔";
var supsup = "⫖";
var swArr = "⇙";
var swarhk = "⤦";
var swarr = "↙";
var swarrow = "↙";
var swnwar = "⤪";
var szli = "ß";
var szlig = "ß";
var target = "⌖";
var tau = "τ";
var tbrk = "⎴";
var tcaron = "ť";
var tcedil = "ţ";
var tcy = "т";
var tdot = "⃛";
var telrec = "⌕";
var tfr = "𝔱";
var there4 = "∴";
var therefore = "∴";
var theta = "θ";
var thetasym = "ϑ";
var thetav = "ϑ";
var thickapprox = "≈";
var thicksim = "∼";
var thinsp = " ";
var thkap = "≈";
var thksim = "∼";
var thor = "þ";
var thorn = "þ";
var tilde = "˜";
var time = "×";
var times = "×";
var timesb = "⊠";
var timesbar = "⨱";
var timesd = "⨰";
var tint = "∭";
var toea = "⤨";
var top = "⊤";
var topbot = "⌶";
var topcir = "⫱";
var topf = "𝕥";
var topfork = "⫚";
var tosa = "⤩";
var tprime = "‴";
var trade = "™";
var triangle = "▵";
var triangledown = "▿";
var triangleleft = "◃";
var trianglelefteq = "⊴";
var triangleq = "≜";
var triangleright = "▹";
var trianglerighteq = "⊵";
var tridot = "◬";
var trie = "≜";
var triminus = "⨺";
var triplus = "⨹";
var trisb = "⧍";
var tritime = "⨻";
var trpezium = "⏢";
var tscr = "𝓉";
var tscy = "ц";
var tshcy = "ћ";
var tstrok = "ŧ";
var twixt = "≬";
var twoheadleftarrow = "↞";
var twoheadrightarrow = "↠";
var uArr = "⇑";
var uHar = "⥣";
var uacut = "ú";
var uacute = "ú";
var uarr = "↑";
var ubrcy = "ў";
var ubreve = "ŭ";
var ucir = "û";
var ucirc = "û";
var ucy = "у";
var udarr = "⇅";
var udblac = "ű";
var udhar = "⥮";
var ufisht = "⥾";
var ufr = "𝔲";
var ugrav = "ù";
var ugrave = "ù";
var uharl = "↿";
var uharr = "↾";
var uhblk = "▀";
var ulcorn = "⌜";
var ulcorner = "⌜";
var ulcrop = "⌏";
var ultri = "◸";
var umacr = "ū";
var um = "¨";
var uml = "¨";
var uogon = "ų";
var uopf = "𝕦";
var uparrow = "↑";
var updownarrow = "↕";
var upharpoonleft = "↿";
var upharpoonright = "↾";
var uplus = "⊎";
var upsi = "υ";
var upsih = "ϒ";
var upsilon = "υ";
var upuparrows = "⇈";
var urcorn = "⌝";
var urcorner = "⌝";
var urcrop = "⌎";
var uring = "ů";
var urtri = "◹";
var uscr = "𝓊";
var utdot = "⋰";
var utilde = "ũ";
var utri = "▵";
var utrif = "▴";
var uuarr = "⇈";
var uum = "ü";
var uuml = "ü";
var uwangle = "⦧";
var vArr = "⇕";
var vBar = "⫨";
var vBarv = "⫩";
var vDash = "⊨";
var vangrt = "⦜";
var varepsilon = "ϵ";
var varkappa = "ϰ";
var varnothing = "∅";
var varphi = "ϕ";
var varpi = "ϖ";
var varpropto = "∝";
var varr = "↕";
var varrho = "ϱ";
var varsigma = "ς";
var varsubsetneq = "⊊︀";
var varsubsetneqq = "⫋︀";
var varsupsetneq = "⊋︀";
var varsupsetneqq = "⫌︀";
var vartheta = "ϑ";
var vartriangleleft = "⊲";
var vartriangleright = "⊳";
var vcy = "в";
var vdash = "⊢";
var vee = "∨";
var veebar = "⊻";
var veeeq = "≚";
var vellip = "⋮";
var verbar = "|";
var vert = "|";
var vfr = "𝔳";
var vltri = "⊲";
var vnsub = "⊂⃒";
var vnsup = "⊃⃒";
var vopf = "𝕧";
var vprop = "∝";
var vrtri = "⊳";
var vscr = "𝓋";
var vsubnE = "⫋︀";
var vsubne = "⊊︀";
var vsupnE = "⫌︀";
var vsupne = "⊋︀";
var vzigzag = "⦚";
var wcirc = "ŵ";
var wedbar = "⩟";
var wedge = "∧";
var wedgeq = "≙";
var weierp = "℘";
var wfr = "𝔴";
var wopf = "𝕨";
var wp = "℘";
var wr = "≀";
var wreath = "≀";
var wscr = "𝓌";
var xcap = "⋂";
var xcirc = "◯";
var xcup = "⋃";
var xdtri = "▽";
var xfr = "𝔵";
var xhArr = "⟺";
var xharr = "⟷";
var xi = "ξ";
var xlArr = "⟸";
var xlarr = "⟵";
var xmap = "⟼";
var xnis = "⋻";
var xodot = "⨀";
var xopf = "𝕩";
var xoplus = "⨁";
var xotime = "⨂";
var xrArr = "⟹";
var xrarr = "⟶";
var xscr = "𝓍";
var xsqcup = "⨆";
var xuplus = "⨄";
var xutri = "△";
var xvee = "⋁";
var xwedge = "⋀";
var yacut = "ý";
var yacute = "ý";
var yacy = "я";
var ycirc = "ŷ";
var ycy = "ы";
var ye = "¥";
var yen = "¥";
var yfr = "𝔶";
var yicy = "ї";
var yopf = "𝕪";
var yscr = "𝓎";
var yucy = "ю";
var yum = "ÿ";
var yuml = "ÿ";
var zacute = "ź";
var zcaron = "ž";
var zcy = "з";
var zdot = "ż";
var zeetrf = "ℨ";
var zeta = "ζ";
var zfr = "𝔷";
var zhcy = "ж";
var zigrarr = "⇝";
var zopf = "𝕫";
var zscr = "𝓏";
var zwj = "‍";
var zwnj = "‌";
var characterEntities = {
	AEli: AEli,
	AElig: AElig,
	AM: AM,
	AMP: AMP,
	Aacut: Aacut,
	Aacute: Aacute,
	Abreve: Abreve,
	Acir: Acir,
	Acirc: Acirc,
	Acy: Acy,
	Afr: Afr,
	Agrav: Agrav,
	Agrave: Agrave,
	Alpha: Alpha,
	Amacr: Amacr,
	And: And,
	Aogon: Aogon,
	Aopf: Aopf,
	ApplyFunction: ApplyFunction,
	Arin: Arin,
	Aring: Aring,
	Ascr: Ascr,
	Assign: Assign,
	Atild: Atild,
	Atilde: Atilde,
	Aum: Aum,
	Auml: Auml,
	Backslash: Backslash,
	Barv: Barv,
	Barwed: Barwed,
	Bcy: Bcy,
	Because: Because,
	Bernoullis: Bernoullis,
	Beta: Beta,
	Bfr: Bfr,
	Bopf: Bopf,
	Breve: Breve,
	Bscr: Bscr,
	Bumpeq: Bumpeq,
	CHcy: CHcy,
	COP: COP,
	COPY: COPY,
	Cacute: Cacute,
	Cap: Cap,
	CapitalDifferentialD: CapitalDifferentialD,
	Cayleys: Cayleys,
	Ccaron: Ccaron,
	Ccedi: Ccedi,
	Ccedil: Ccedil,
	Ccirc: Ccirc,
	Cconint: Cconint,
	Cdot: Cdot,
	Cedilla: Cedilla,
	CenterDot: CenterDot,
	Cfr: Cfr,
	Chi: Chi,
	CircleDot: CircleDot,
	CircleMinus: CircleMinus,
	CirclePlus: CirclePlus,
	CircleTimes: CircleTimes,
	ClockwiseContourIntegral: ClockwiseContourIntegral,
	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
	CloseCurlyQuote: CloseCurlyQuote,
	Colon: Colon,
	Colone: Colone,
	Congruent: Congruent,
	Conint: Conint,
	ContourIntegral: ContourIntegral,
	Copf: Copf,
	Coproduct: Coproduct,
	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
	Cross: Cross,
	Cscr: Cscr,
	Cup: Cup,
	CupCap: CupCap,
	DD: DD,
	DDotrahd: DDotrahd,
	DJcy: DJcy,
	DScy: DScy,
	DZcy: DZcy,
	Dagger: Dagger,
	Darr: Darr,
	Dashv: Dashv,
	Dcaron: Dcaron,
	Dcy: Dcy,
	Del: Del,
	Delta: Delta,
	Dfr: Dfr,
	DiacriticalAcute: DiacriticalAcute,
	DiacriticalDot: DiacriticalDot,
	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
	DiacriticalGrave: DiacriticalGrave,
	DiacriticalTilde: DiacriticalTilde,
	Diamond: Diamond,
	DifferentialD: DifferentialD,
	Dopf: Dopf,
	Dot: Dot,
	DotDot: DotDot,
	DotEqual: DotEqual,
	DoubleContourIntegral: DoubleContourIntegral,
	DoubleDot: DoubleDot,
	DoubleDownArrow: DoubleDownArrow,
	DoubleLeftArrow: DoubleLeftArrow,
	DoubleLeftRightArrow: DoubleLeftRightArrow,
	DoubleLeftTee: DoubleLeftTee,
	DoubleLongLeftArrow: DoubleLongLeftArrow,
	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
	DoubleLongRightArrow: DoubleLongRightArrow,
	DoubleRightArrow: DoubleRightArrow,
	DoubleRightTee: DoubleRightTee,
	DoubleUpArrow: DoubleUpArrow,
	DoubleUpDownArrow: DoubleUpDownArrow,
	DoubleVerticalBar: DoubleVerticalBar,
	DownArrow: DownArrow,
	DownArrowBar: DownArrowBar,
	DownArrowUpArrow: DownArrowUpArrow,
	DownBreve: DownBreve,
	DownLeftRightVector: DownLeftRightVector,
	DownLeftTeeVector: DownLeftTeeVector,
	DownLeftVector: DownLeftVector,
	DownLeftVectorBar: DownLeftVectorBar,
	DownRightTeeVector: DownRightTeeVector,
	DownRightVector: DownRightVector,
	DownRightVectorBar: DownRightVectorBar,
	DownTee: DownTee,
	DownTeeArrow: DownTeeArrow,
	Downarrow: Downarrow,
	Dscr: Dscr,
	Dstrok: Dstrok,
	ENG: ENG,
	ET: ET,
	ETH: ETH,
	Eacut: Eacut,
	Eacute: Eacute,
	Ecaron: Ecaron,
	Ecir: Ecir,
	Ecirc: Ecirc,
	Ecy: Ecy,
	Edot: Edot,
	Efr: Efr,
	Egrav: Egrav,
	Egrave: Egrave,
	Element: Element,
	Emacr: Emacr,
	EmptySmallSquare: EmptySmallSquare,
	EmptyVerySmallSquare: EmptyVerySmallSquare,
	Eogon: Eogon,
	Eopf: Eopf,
	Epsilon: Epsilon,
	Equal: Equal,
	EqualTilde: EqualTilde,
	Equilibrium: Equilibrium,
	Escr: Escr,
	Esim: Esim,
	Eta: Eta,
	Eum: Eum,
	Euml: Euml,
	Exists: Exists,
	ExponentialE: ExponentialE,
	Fcy: Fcy,
	Ffr: Ffr,
	FilledSmallSquare: FilledSmallSquare,
	FilledVerySmallSquare: FilledVerySmallSquare,
	Fopf: Fopf,
	ForAll: ForAll,
	Fouriertrf: Fouriertrf,
	Fscr: Fscr,
	GJcy: GJcy,
	G: G,
	GT: GT,
	Gamma: Gamma,
	Gammad: Gammad,
	Gbreve: Gbreve,
	Gcedil: Gcedil,
	Gcirc: Gcirc,
	Gcy: Gcy,
	Gdot: Gdot,
	Gfr: Gfr,
	Gg: Gg,
	Gopf: Gopf,
	GreaterEqual: GreaterEqual,
	GreaterEqualLess: GreaterEqualLess,
	GreaterFullEqual: GreaterFullEqual,
	GreaterGreater: GreaterGreater,
	GreaterLess: GreaterLess,
	GreaterSlantEqual: GreaterSlantEqual,
	GreaterTilde: GreaterTilde,
	Gscr: Gscr,
	Gt: Gt,
	HARDcy: HARDcy,
	Hacek: Hacek,
	Hat: Hat,
	Hcirc: Hcirc,
	Hfr: Hfr,
	HilbertSpace: HilbertSpace,
	Hopf: Hopf,
	HorizontalLine: HorizontalLine,
	Hscr: Hscr,
	Hstrok: Hstrok,
	HumpDownHump: HumpDownHump,
	HumpEqual: HumpEqual,
	IEcy: IEcy,
	IJlig: IJlig,
	IOcy: IOcy,
	Iacut: Iacut,
	Iacute: Iacute,
	Icir: Icir,
	Icirc: Icirc,
	Icy: Icy,
	Idot: Idot,
	Ifr: Ifr,
	Igrav: Igrav,
	Igrave: Igrave,
	Im: Im,
	Imacr: Imacr,
	ImaginaryI: ImaginaryI,
	Implies: Implies,
	Int: Int,
	Integral: Integral,
	Intersection: Intersection,
	InvisibleComma: InvisibleComma,
	InvisibleTimes: InvisibleTimes,
	Iogon: Iogon,
	Iopf: Iopf,
	Iota: Iota,
	Iscr: Iscr,
	Itilde: Itilde,
	Iukcy: Iukcy,
	Ium: Ium,
	Iuml: Iuml,
	Jcirc: Jcirc,
	Jcy: Jcy,
	Jfr: Jfr,
	Jopf: Jopf,
	Jscr: Jscr,
	Jsercy: Jsercy,
	Jukcy: Jukcy,
	KHcy: KHcy,
	KJcy: KJcy,
	Kappa: Kappa,
	Kcedil: Kcedil,
	Kcy: Kcy,
	Kfr: Kfr,
	Kopf: Kopf,
	Kscr: Kscr,
	LJcy: LJcy,
	L: L,
	LT: LT,
	Lacute: Lacute,
	Lambda: Lambda,
	Lang: Lang,
	Laplacetrf: Laplacetrf,
	Larr: Larr,
	Lcaron: Lcaron,
	Lcedil: Lcedil,
	Lcy: Lcy,
	LeftAngleBracket: LeftAngleBracket,
	LeftArrow: LeftArrow,
	LeftArrowBar: LeftArrowBar,
	LeftArrowRightArrow: LeftArrowRightArrow,
	LeftCeiling: LeftCeiling,
	LeftDoubleBracket: LeftDoubleBracket,
	LeftDownTeeVector: LeftDownTeeVector,
	LeftDownVector: LeftDownVector,
	LeftDownVectorBar: LeftDownVectorBar,
	LeftFloor: LeftFloor,
	LeftRightArrow: LeftRightArrow,
	LeftRightVector: LeftRightVector,
	LeftTee: LeftTee,
	LeftTeeArrow: LeftTeeArrow,
	LeftTeeVector: LeftTeeVector,
	LeftTriangle: LeftTriangle,
	LeftTriangleBar: LeftTriangleBar,
	LeftTriangleEqual: LeftTriangleEqual,
	LeftUpDownVector: LeftUpDownVector,
	LeftUpTeeVector: LeftUpTeeVector,
	LeftUpVector: LeftUpVector,
	LeftUpVectorBar: LeftUpVectorBar,
	LeftVector: LeftVector,
	LeftVectorBar: LeftVectorBar,
	Leftarrow: Leftarrow,
	Leftrightarrow: Leftrightarrow,
	LessEqualGreater: LessEqualGreater,
	LessFullEqual: LessFullEqual,
	LessGreater: LessGreater,
	LessLess: LessLess,
	LessSlantEqual: LessSlantEqual,
	LessTilde: LessTilde,
	Lfr: Lfr,
	Ll: Ll,
	Lleftarrow: Lleftarrow,
	Lmidot: Lmidot,
	LongLeftArrow: LongLeftArrow,
	LongLeftRightArrow: LongLeftRightArrow,
	LongRightArrow: LongRightArrow,
	Longleftarrow: Longleftarrow,
	Longleftrightarrow: Longleftrightarrow,
	Longrightarrow: Longrightarrow,
	Lopf: Lopf,
	LowerLeftArrow: LowerLeftArrow,
	LowerRightArrow: LowerRightArrow,
	Lscr: Lscr,
	Lsh: Lsh,
	Lstrok: Lstrok,
	Lt: Lt,
	"Map": "⤅",
	Mcy: Mcy,
	MediumSpace: MediumSpace,
	Mellintrf: Mellintrf,
	Mfr: Mfr,
	MinusPlus: MinusPlus,
	Mopf: Mopf,
	Mscr: Mscr,
	Mu: Mu,
	NJcy: NJcy,
	Nacute: Nacute,
	Ncaron: Ncaron,
	Ncedil: Ncedil,
	Ncy: Ncy,
	NegativeMediumSpace: NegativeMediumSpace,
	NegativeThickSpace: NegativeThickSpace,
	NegativeThinSpace: NegativeThinSpace,
	NegativeVeryThinSpace: NegativeVeryThinSpace,
	NestedGreaterGreater: NestedGreaterGreater,
	NestedLessLess: NestedLessLess,
	NewLine: NewLine,
	Nfr: Nfr,
	NoBreak: NoBreak,
	NonBreakingSpace: NonBreakingSpace,
	Nopf: Nopf,
	Not: Not,
	NotCongruent: NotCongruent,
	NotCupCap: NotCupCap,
	NotDoubleVerticalBar: NotDoubleVerticalBar,
	NotElement: NotElement,
	NotEqual: NotEqual,
	NotEqualTilde: NotEqualTilde,
	NotExists: NotExists,
	NotGreater: NotGreater,
	NotGreaterEqual: NotGreaterEqual,
	NotGreaterFullEqual: NotGreaterFullEqual,
	NotGreaterGreater: NotGreaterGreater,
	NotGreaterLess: NotGreaterLess,
	NotGreaterSlantEqual: NotGreaterSlantEqual,
	NotGreaterTilde: NotGreaterTilde,
	NotHumpDownHump: NotHumpDownHump,
	NotHumpEqual: NotHumpEqual,
	NotLeftTriangle: NotLeftTriangle,
	NotLeftTriangleBar: NotLeftTriangleBar,
	NotLeftTriangleEqual: NotLeftTriangleEqual,
	NotLess: NotLess,
	NotLessEqual: NotLessEqual,
	NotLessGreater: NotLessGreater,
	NotLessLess: NotLessLess,
	NotLessSlantEqual: NotLessSlantEqual,
	NotLessTilde: NotLessTilde,
	NotNestedGreaterGreater: NotNestedGreaterGreater,
	NotNestedLessLess: NotNestedLessLess,
	NotPrecedes: NotPrecedes,
	NotPrecedesEqual: NotPrecedesEqual,
	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
	NotReverseElement: NotReverseElement,
	NotRightTriangle: NotRightTriangle,
	NotRightTriangleBar: NotRightTriangleBar,
	NotRightTriangleEqual: NotRightTriangleEqual,
	NotSquareSubset: NotSquareSubset,
	NotSquareSubsetEqual: NotSquareSubsetEqual,
	NotSquareSuperset: NotSquareSuperset,
	NotSquareSupersetEqual: NotSquareSupersetEqual,
	NotSubset: NotSubset,
	NotSubsetEqual: NotSubsetEqual,
	NotSucceeds: NotSucceeds,
	NotSucceedsEqual: NotSucceedsEqual,
	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
	NotSucceedsTilde: NotSucceedsTilde,
	NotSuperset: NotSuperset,
	NotSupersetEqual: NotSupersetEqual,
	NotTilde: NotTilde,
	NotTildeEqual: NotTildeEqual,
	NotTildeFullEqual: NotTildeFullEqual,
	NotTildeTilde: NotTildeTilde,
	NotVerticalBar: NotVerticalBar,
	Nscr: Nscr,
	Ntild: Ntild,
	Ntilde: Ntilde,
	Nu: Nu,
	OElig: OElig,
	Oacut: Oacut,
	Oacute: Oacute,
	Ocir: Ocir,
	Ocirc: Ocirc,
	Ocy: Ocy,
	Odblac: Odblac,
	Ofr: Ofr,
	Ograv: Ograv,
	Ograve: Ograve,
	Omacr: Omacr,
	Omega: Omega,
	Omicron: Omicron,
	Oopf: Oopf,
	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
	OpenCurlyQuote: OpenCurlyQuote,
	Or: Or,
	Oscr: Oscr,
	Oslas: Oslas,
	Oslash: Oslash,
	Otild: Otild,
	Otilde: Otilde,
	Otimes: Otimes,
	Oum: Oum,
	Ouml: Ouml,
	OverBar: OverBar,
	OverBrace: OverBrace,
	OverBracket: OverBracket,
	OverParenthesis: OverParenthesis,
	PartialD: PartialD,
	Pcy: Pcy,
	Pfr: Pfr,
	Phi: Phi,
	Pi: Pi,
	PlusMinus: PlusMinus,
	Poincareplane: Poincareplane,
	Popf: Popf,
	Pr: Pr,
	Precedes: Precedes,
	PrecedesEqual: PrecedesEqual,
	PrecedesSlantEqual: PrecedesSlantEqual,
	PrecedesTilde: PrecedesTilde,
	Prime: Prime,
	Product: Product,
	Proportion: Proportion,
	Proportional: Proportional,
	Pscr: Pscr,
	Psi: Psi,
	QUO: QUO,
	QUOT: QUOT,
	Qfr: Qfr,
	Qopf: Qopf,
	Qscr: Qscr,
	RBarr: RBarr,
	RE: RE,
	REG: REG,
	Racute: Racute,
	Rang: Rang,
	Rarr: Rarr,
	Rarrtl: Rarrtl,
	Rcaron: Rcaron,
	Rcedil: Rcedil,
	Rcy: Rcy,
	Re: Re,
	ReverseElement: ReverseElement,
	ReverseEquilibrium: ReverseEquilibrium,
	ReverseUpEquilibrium: ReverseUpEquilibrium,
	Rfr: Rfr,
	Rho: Rho,
	RightAngleBracket: RightAngleBracket,
	RightArrow: RightArrow,
	RightArrowBar: RightArrowBar,
	RightArrowLeftArrow: RightArrowLeftArrow,
	RightCeiling: RightCeiling,
	RightDoubleBracket: RightDoubleBracket,
	RightDownTeeVector: RightDownTeeVector,
	RightDownVector: RightDownVector,
	RightDownVectorBar: RightDownVectorBar,
	RightFloor: RightFloor,
	RightTee: RightTee,
	RightTeeArrow: RightTeeArrow,
	RightTeeVector: RightTeeVector,
	RightTriangle: RightTriangle,
	RightTriangleBar: RightTriangleBar,
	RightTriangleEqual: RightTriangleEqual,
	RightUpDownVector: RightUpDownVector,
	RightUpTeeVector: RightUpTeeVector,
	RightUpVector: RightUpVector,
	RightUpVectorBar: RightUpVectorBar,
	RightVector: RightVector,
	RightVectorBar: RightVectorBar,
	Rightarrow: Rightarrow,
	Ropf: Ropf,
	RoundImplies: RoundImplies,
	Rrightarrow: Rrightarrow,
	Rscr: Rscr,
	Rsh: Rsh,
	RuleDelayed: RuleDelayed,
	SHCHcy: SHCHcy,
	SHcy: SHcy,
	SOFTcy: SOFTcy,
	Sacute: Sacute,
	Sc: Sc,
	Scaron: Scaron,
	Scedil: Scedil,
	Scirc: Scirc,
	Scy: Scy,
	Sfr: Sfr,
	ShortDownArrow: ShortDownArrow,
	ShortLeftArrow: ShortLeftArrow,
	ShortRightArrow: ShortRightArrow,
	ShortUpArrow: ShortUpArrow,
	Sigma: Sigma,
	SmallCircle: SmallCircle,
	Sopf: Sopf,
	Sqrt: Sqrt,
	Square: Square,
	SquareIntersection: SquareIntersection,
	SquareSubset: SquareSubset,
	SquareSubsetEqual: SquareSubsetEqual,
	SquareSuperset: SquareSuperset,
	SquareSupersetEqual: SquareSupersetEqual,
	SquareUnion: SquareUnion,
	Sscr: Sscr,
	Star: Star,
	Sub: Sub,
	Subset: Subset,
	SubsetEqual: SubsetEqual,
	Succeeds: Succeeds,
	SucceedsEqual: SucceedsEqual,
	SucceedsSlantEqual: SucceedsSlantEqual,
	SucceedsTilde: SucceedsTilde,
	SuchThat: SuchThat,
	Sum: Sum,
	Sup: Sup,
	Superset: Superset,
	SupersetEqual: SupersetEqual,
	Supset: Supset,
	THOR: THOR,
	THORN: THORN,
	TRADE: TRADE,
	TSHcy: TSHcy,
	TScy: TScy,
	Tab: Tab,
	Tau: Tau,
	Tcaron: Tcaron,
	Tcedil: Tcedil,
	Tcy: Tcy,
	Tfr: Tfr,
	Therefore: Therefore,
	Theta: Theta,
	ThickSpace: ThickSpace,
	ThinSpace: ThinSpace,
	Tilde: Tilde,
	TildeEqual: TildeEqual,
	TildeFullEqual: TildeFullEqual,
	TildeTilde: TildeTilde,
	Topf: Topf,
	TripleDot: TripleDot,
	Tscr: Tscr,
	Tstrok: Tstrok,
	Uacut: Uacut,
	Uacute: Uacute,
	Uarr: Uarr,
	Uarrocir: Uarrocir,
	Ubrcy: Ubrcy,
	Ubreve: Ubreve,
	Ucir: Ucir,
	Ucirc: Ucirc,
	Ucy: Ucy,
	Udblac: Udblac,
	Ufr: Ufr,
	Ugrav: Ugrav,
	Ugrave: Ugrave,
	Umacr: Umacr,
	UnderBar: UnderBar,
	UnderBrace: UnderBrace,
	UnderBracket: UnderBracket,
	UnderParenthesis: UnderParenthesis,
	Union: Union,
	UnionPlus: UnionPlus,
	Uogon: Uogon,
	Uopf: Uopf,
	UpArrow: UpArrow,
	UpArrowBar: UpArrowBar,
	UpArrowDownArrow: UpArrowDownArrow,
	UpDownArrow: UpDownArrow,
	UpEquilibrium: UpEquilibrium,
	UpTee: UpTee,
	UpTeeArrow: UpTeeArrow,
	Uparrow: Uparrow,
	Updownarrow: Updownarrow,
	UpperLeftArrow: UpperLeftArrow,
	UpperRightArrow: UpperRightArrow,
	Upsi: Upsi,
	Upsilon: Upsilon,
	Uring: Uring,
	Uscr: Uscr,
	Utilde: Utilde,
	Uum: Uum,
	Uuml: Uuml,
	VDash: VDash,
	Vbar: Vbar,
	Vcy: Vcy,
	Vdash: Vdash,
	Vdashl: Vdashl,
	Vee: Vee,
	Verbar: Verbar,
	Vert: Vert,
	VerticalBar: VerticalBar,
	VerticalLine: VerticalLine,
	VerticalSeparator: VerticalSeparator,
	VerticalTilde: VerticalTilde,
	VeryThinSpace: VeryThinSpace,
	Vfr: Vfr,
	Vopf: Vopf,
	Vscr: Vscr,
	Vvdash: Vvdash,
	Wcirc: Wcirc,
	Wedge: Wedge,
	Wfr: Wfr,
	Wopf: Wopf,
	Wscr: Wscr,
	Xfr: Xfr,
	Xi: Xi,
	Xopf: Xopf,
	Xscr: Xscr,
	YAcy: YAcy,
	YIcy: YIcy,
	YUcy: YUcy,
	Yacut: Yacut,
	Yacute: Yacute,
	Ycirc: Ycirc,
	Ycy: Ycy,
	Yfr: Yfr,
	Yopf: Yopf,
	Yscr: Yscr,
	Yuml: Yuml,
	ZHcy: ZHcy,
	Zacute: Zacute,
	Zcaron: Zcaron,
	Zcy: Zcy,
	Zdot: Zdot,
	ZeroWidthSpace: ZeroWidthSpace,
	Zeta: Zeta,
	Zfr: Zfr,
	Zopf: Zopf,
	Zscr: Zscr,
	aacut: aacut,
	aacute: aacute,
	abreve: abreve,
	ac: ac,
	acE: acE,
	acd: acd,
	acir: acir,
	acirc: acirc,
	acut: acut,
	acute: acute,
	acy: acy,
	aeli: aeli,
	aelig: aelig,
	af: af,
	afr: afr,
	agrav: agrav,
	agrave: agrave,
	alefsym: alefsym,
	aleph: aleph,
	alpha: alpha,
	amacr: amacr,
	amalg: amalg,
	am: am,
	amp: amp,
	and: and,
	andand: andand,
	andd: andd,
	andslope: andslope,
	andv: andv,
	ang: ang,
	ange: ange,
	angle: angle,
	angmsd: angmsd,
	angmsdaa: angmsdaa,
	angmsdab: angmsdab,
	angmsdac: angmsdac,
	angmsdad: angmsdad,
	angmsdae: angmsdae,
	angmsdaf: angmsdaf,
	angmsdag: angmsdag,
	angmsdah: angmsdah,
	angrt: angrt,
	angrtvb: angrtvb,
	angrtvbd: angrtvbd,
	angsph: angsph,
	angst: angst,
	angzarr: angzarr,
	aogon: aogon,
	aopf: aopf,
	ap: ap,
	apE: apE,
	apacir: apacir,
	ape: ape,
	apid: apid,
	apos: apos,
	approx: approx,
	approxeq: approxeq,
	arin: arin,
	aring: aring,
	ascr: ascr,
	ast: ast,
	asymp: asymp,
	asympeq: asympeq,
	atild: atild,
	atilde: atilde,
	aum: aum,
	auml: auml,
	awconint: awconint,
	awint: awint,
	bNot: bNot,
	backcong: backcong,
	backepsilon: backepsilon,
	backprime: backprime,
	backsim: backsim,
	backsimeq: backsimeq,
	barvee: barvee,
	barwed: barwed,
	barwedge: barwedge,
	bbrk: bbrk,
	bbrktbrk: bbrktbrk,
	bcong: bcong,
	bcy: bcy,
	bdquo: bdquo,
	becaus: becaus,
	because: because,
	bemptyv: bemptyv,
	bepsi: bepsi,
	bernou: bernou,
	beta: beta,
	beth: beth,
	between: between,
	bfr: bfr,
	bigcap: bigcap,
	bigcirc: bigcirc,
	bigcup: bigcup,
	bigodot: bigodot,
	bigoplus: bigoplus,
	bigotimes: bigotimes,
	bigsqcup: bigsqcup,
	bigstar: bigstar,
	bigtriangledown: bigtriangledown,
	bigtriangleup: bigtriangleup,
	biguplus: biguplus,
	bigvee: bigvee,
	bigwedge: bigwedge,
	bkarow: bkarow,
	blacklozenge: blacklozenge,
	blacksquare: blacksquare,
	blacktriangle: blacktriangle,
	blacktriangledown: blacktriangledown,
	blacktriangleleft: blacktriangleleft,
	blacktriangleright: blacktriangleright,
	blank: blank,
	blk12: blk12,
	blk14: blk14,
	blk34: blk34,
	block: block,
	bne: bne,
	bnequiv: bnequiv,
	bnot: bnot,
	bopf: bopf,
	bot: bot,
	bottom: bottom,
	bowtie: bowtie,
	boxDL: boxDL,
	boxDR: boxDR,
	boxDl: boxDl,
	boxDr: boxDr,
	boxH: boxH,
	boxHD: boxHD,
	boxHU: boxHU,
	boxHd: boxHd,
	boxHu: boxHu,
	boxUL: boxUL,
	boxUR: boxUR,
	boxUl: boxUl,
	boxUr: boxUr,
	boxV: boxV,
	boxVH: boxVH,
	boxVL: boxVL,
	boxVR: boxVR,
	boxVh: boxVh,
	boxVl: boxVl,
	boxVr: boxVr,
	boxbox: boxbox,
	boxdL: boxdL,
	boxdR: boxdR,
	boxdl: boxdl,
	boxdr: boxdr,
	boxh: boxh,
	boxhD: boxhD,
	boxhU: boxhU,
	boxhd: boxhd,
	boxhu: boxhu,
	boxminus: boxminus,
	boxplus: boxplus,
	boxtimes: boxtimes,
	boxuL: boxuL,
	boxuR: boxuR,
	boxul: boxul,
	boxur: boxur,
	boxv: boxv,
	boxvH: boxvH,
	boxvL: boxvL,
	boxvR: boxvR,
	boxvh: boxvh,
	boxvl: boxvl,
	boxvr: boxvr,
	bprime: bprime,
	breve: breve,
	brvba: brvba,
	brvbar: brvbar,
	bscr: bscr,
	bsemi: bsemi,
	bsim: bsim,
	bsime: bsime,
	bsol: bsol,
	bsolb: bsolb,
	bsolhsub: bsolhsub,
	bull: bull,
	bullet: bullet,
	bump: bump,
	bumpE: bumpE,
	bumpe: bumpe,
	bumpeq: bumpeq,
	cacute: cacute,
	cap: cap,
	capand: capand,
	capbrcup: capbrcup,
	capcap: capcap,
	capcup: capcup,
	capdot: capdot,
	caps: caps,
	caret: caret,
	caron: caron,
	ccaps: ccaps,
	ccaron: ccaron,
	ccedi: ccedi,
	ccedil: ccedil,
	ccirc: ccirc,
	ccups: ccups,
	ccupssm: ccupssm,
	cdot: cdot,
	cedi: cedi,
	cedil: cedil,
	cemptyv: cemptyv,
	cen: cen,
	cent: cent,
	centerdot: centerdot,
	cfr: cfr,
	chcy: chcy,
	check: check,
	checkmark: checkmark,
	chi: chi,
	cir: cir,
	cirE: cirE,
	circ: circ,
	circeq: circeq,
	circlearrowleft: circlearrowleft,
	circlearrowright: circlearrowright,
	circledR: circledR,
	circledS: circledS,
	circledast: circledast,
	circledcirc: circledcirc,
	circleddash: circleddash,
	cire: cire,
	cirfnint: cirfnint,
	cirmid: cirmid,
	cirscir: cirscir,
	clubs: clubs,
	clubsuit: clubsuit,
	colon: colon,
	colone: colone,
	coloneq: coloneq,
	comma: comma,
	commat: commat,
	comp: comp,
	compfn: compfn,
	complement: complement,
	complexes: complexes,
	cong: cong,
	congdot: congdot,
	conint: conint,
	copf: copf,
	coprod: coprod,
	cop: cop,
	copy: copy,
	copysr: copysr,
	crarr: crarr,
	cross: cross,
	cscr: cscr,
	csub: csub,
	csube: csube,
	csup: csup,
	csupe: csupe,
	ctdot: ctdot,
	cudarrl: cudarrl,
	cudarrr: cudarrr,
	cuepr: cuepr,
	cuesc: cuesc,
	cularr: cularr,
	cularrp: cularrp,
	cup: cup,
	cupbrcap: cupbrcap,
	cupcap: cupcap,
	cupcup: cupcup,
	cupdot: cupdot,
	cupor: cupor,
	cups: cups,
	curarr: curarr,
	curarrm: curarrm,
	curlyeqprec: curlyeqprec,
	curlyeqsucc: curlyeqsucc,
	curlyvee: curlyvee,
	curlywedge: curlywedge,
	curre: curre,
	curren: curren,
	curvearrowleft: curvearrowleft,
	curvearrowright: curvearrowright,
	cuvee: cuvee,
	cuwed: cuwed,
	cwconint: cwconint,
	cwint: cwint,
	cylcty: cylcty,
	dArr: dArr,
	dHar: dHar,
	dagger: dagger,
	daleth: daleth,
	darr: darr,
	dash: dash,
	dashv: dashv,
	dbkarow: dbkarow,
	dblac: dblac,
	dcaron: dcaron,
	dcy: dcy,
	dd: dd,
	ddagger: ddagger,
	ddarr: ddarr,
	ddotseq: ddotseq,
	de: de,
	deg: deg,
	delta: delta,
	demptyv: demptyv,
	dfisht: dfisht,
	dfr: dfr,
	dharl: dharl,
	dharr: dharr,
	diam: diam,
	diamond: diamond,
	diamondsuit: diamondsuit,
	diams: diams,
	die: die,
	digamma: digamma,
	disin: disin,
	div: div,
	divid: divid,
	divide: divide,
	divideontimes: divideontimes,
	divonx: divonx,
	djcy: djcy,
	dlcorn: dlcorn,
	dlcrop: dlcrop,
	dollar: dollar,
	dopf: dopf,
	dot: dot,
	doteq: doteq,
	doteqdot: doteqdot,
	dotminus: dotminus,
	dotplus: dotplus,
	dotsquare: dotsquare,
	doublebarwedge: doublebarwedge,
	downarrow: downarrow,
	downdownarrows: downdownarrows,
	downharpoonleft: downharpoonleft,
	downharpoonright: downharpoonright,
	drbkarow: drbkarow,
	drcorn: drcorn,
	drcrop: drcrop,
	dscr: dscr,
	dscy: dscy,
	dsol: dsol,
	dstrok: dstrok,
	dtdot: dtdot,
	dtri: dtri,
	dtrif: dtrif,
	duarr: duarr,
	duhar: duhar,
	dwangle: dwangle,
	dzcy: dzcy,
	dzigrarr: dzigrarr,
	eDDot: eDDot,
	eDot: eDot,
	eacut: eacut,
	eacute: eacute,
	easter: easter,
	ecaron: ecaron,
	ecir: ecir,
	ecirc: ecirc,
	ecolon: ecolon,
	ecy: ecy,
	edot: edot,
	ee: ee,
	efDot: efDot,
	efr: efr,
	eg: eg,
	egrav: egrav,
	egrave: egrave,
	egs: egs,
	egsdot: egsdot,
	el: el,
	elinters: elinters,
	ell: ell,
	els: els,
	elsdot: elsdot,
	emacr: emacr,
	empty: empty,
	emptyset: emptyset,
	emptyv: emptyv,
	emsp13: emsp13,
	emsp14: emsp14,
	emsp: emsp,
	eng: eng,
	ensp: ensp,
	eogon: eogon,
	eopf: eopf,
	epar: epar,
	eparsl: eparsl,
	eplus: eplus,
	epsi: epsi,
	epsilon: epsilon,
	epsiv: epsiv,
	eqcirc: eqcirc,
	eqcolon: eqcolon,
	eqsim: eqsim,
	eqslantgtr: eqslantgtr,
	eqslantless: eqslantless,
	equals: equals,
	equest: equest,
	equiv: equiv,
	equivDD: equivDD,
	eqvparsl: eqvparsl,
	erDot: erDot,
	erarr: erarr,
	escr: escr,
	esdot: esdot,
	esim: esim,
	eta: eta,
	et: et,
	eth: eth,
	eum: eum,
	euml: euml,
	euro: euro,
	excl: excl,
	exist: exist,
	expectation: expectation,
	exponentiale: exponentiale,
	fallingdotseq: fallingdotseq,
	fcy: fcy,
	female: female,
	ffilig: ffilig,
	fflig: fflig,
	ffllig: ffllig,
	ffr: ffr,
	filig: filig,
	fjlig: fjlig,
	flat: flat,
	fllig: fllig,
	fltns: fltns,
	fnof: fnof,
	fopf: fopf,
	forall: forall,
	fork: fork,
	forkv: forkv,
	fpartint: fpartint,
	frac1: frac1,
	frac12: frac12,
	frac13: frac13,
	frac14: frac14,
	frac15: frac15,
	frac16: frac16,
	frac18: frac18,
	frac23: frac23,
	frac25: frac25,
	frac3: frac3,
	frac34: frac34,
	frac35: frac35,
	frac38: frac38,
	frac45: frac45,
	frac56: frac56,
	frac58: frac58,
	frac78: frac78,
	frasl: frasl,
	frown: frown,
	fscr: fscr,
	gE: gE,
	gEl: gEl,
	gacute: gacute,
	gamma: gamma,
	gammad: gammad,
	gap: gap,
	gbreve: gbreve,
	gcirc: gcirc,
	gcy: gcy,
	gdot: gdot,
	ge: ge,
	gel: gel,
	geq: geq,
	geqq: geqq,
	geqslant: geqslant,
	ges: ges,
	gescc: gescc,
	gesdot: gesdot,
	gesdoto: gesdoto,
	gesdotol: gesdotol,
	gesl: gesl,
	gesles: gesles,
	gfr: gfr,
	gg: gg,
	ggg: ggg,
	gimel: gimel,
	gjcy: gjcy,
	gl: gl,
	glE: glE,
	gla: gla,
	glj: glj,
	gnE: gnE,
	gnap: gnap,
	gnapprox: gnapprox,
	gne: gne,
	gneq: gneq,
	gneqq: gneqq,
	gnsim: gnsim,
	gopf: gopf,
	grave: grave,
	gscr: gscr,
	gsim: gsim,
	gsime: gsime,
	gsiml: gsiml,
	g: g,
	gt: gt,
	gtcc: gtcc,
	gtcir: gtcir,
	gtdot: gtdot,
	gtlPar: gtlPar,
	gtquest: gtquest,
	gtrapprox: gtrapprox,
	gtrarr: gtrarr,
	gtrdot: gtrdot,
	gtreqless: gtreqless,
	gtreqqless: gtreqqless,
	gtrless: gtrless,
	gtrsim: gtrsim,
	gvertneqq: gvertneqq,
	gvnE: gvnE,
	hArr: hArr,
	hairsp: hairsp,
	half: half,
	hamilt: hamilt,
	hardcy: hardcy,
	harr: harr,
	harrcir: harrcir,
	harrw: harrw,
	hbar: hbar,
	hcirc: hcirc,
	hearts: hearts,
	heartsuit: heartsuit,
	hellip: hellip,
	hercon: hercon,
	hfr: hfr,
	hksearow: hksearow,
	hkswarow: hkswarow,
	hoarr: hoarr,
	homtht: homtht,
	hookleftarrow: hookleftarrow,
	hookrightarrow: hookrightarrow,
	hopf: hopf,
	horbar: horbar,
	hscr: hscr,
	hslash: hslash,
	hstrok: hstrok,
	hybull: hybull,
	hyphen: hyphen,
	iacut: iacut,
	iacute: iacute,
	ic: ic,
	icir: icir,
	icirc: icirc,
	icy: icy,
	iecy: iecy,
	iexc: iexc,
	iexcl: iexcl,
	iff: iff,
	ifr: ifr,
	igrav: igrav,
	igrave: igrave,
	ii: ii,
	iiiint: iiiint,
	iiint: iiint,
	iinfin: iinfin,
	iiota: iiota,
	ijlig: ijlig,
	imacr: imacr,
	image: image,
	imagline: imagline,
	imagpart: imagpart,
	imath: imath,
	imof: imof,
	imped: imped,
	"in": "∈",
	incare: incare,
	infin: infin,
	infintie: infintie,
	inodot: inodot,
	int: int,
	intcal: intcal,
	integers: integers,
	intercal: intercal,
	intlarhk: intlarhk,
	intprod: intprod,
	iocy: iocy,
	iogon: iogon,
	iopf: iopf,
	iota: iota,
	iprod: iprod,
	iques: iques,
	iquest: iquest,
	iscr: iscr,
	isin: isin,
	isinE: isinE,
	isindot: isindot,
	isins: isins,
	isinsv: isinsv,
	isinv: isinv,
	it: it,
	itilde: itilde,
	iukcy: iukcy,
	ium: ium,
	iuml: iuml,
	jcirc: jcirc,
	jcy: jcy,
	jfr: jfr,
	jmath: jmath,
	jopf: jopf,
	jscr: jscr,
	jsercy: jsercy,
	jukcy: jukcy,
	kappa: kappa,
	kappav: kappav,
	kcedil: kcedil,
	kcy: kcy,
	kfr: kfr,
	kgreen: kgreen,
	khcy: khcy,
	kjcy: kjcy,
	kopf: kopf,
	kscr: kscr,
	lAarr: lAarr,
	lArr: lArr,
	lAtail: lAtail,
	lBarr: lBarr,
	lE: lE,
	lEg: lEg,
	lHar: lHar,
	lacute: lacute,
	laemptyv: laemptyv,
	lagran: lagran,
	lambda: lambda,
	lang: lang,
	langd: langd,
	langle: langle,
	lap: lap,
	laqu: laqu,
	laquo: laquo,
	larr: larr,
	larrb: larrb,
	larrbfs: larrbfs,
	larrfs: larrfs,
	larrhk: larrhk,
	larrlp: larrlp,
	larrpl: larrpl,
	larrsim: larrsim,
	larrtl: larrtl,
	lat: lat,
	latail: latail,
	late: late,
	lates: lates,
	lbarr: lbarr,
	lbbrk: lbbrk,
	lbrace: lbrace,
	lbrack: lbrack,
	lbrke: lbrke,
	lbrksld: lbrksld,
	lbrkslu: lbrkslu,
	lcaron: lcaron,
	lcedil: lcedil,
	lceil: lceil,
	lcub: lcub,
	lcy: lcy,
	ldca: ldca,
	ldquo: ldquo,
	ldquor: ldquor,
	ldrdhar: ldrdhar,
	ldrushar: ldrushar,
	ldsh: ldsh,
	le: le,
	leftarrow: leftarrow,
	leftarrowtail: leftarrowtail,
	leftharpoondown: leftharpoondown,
	leftharpoonup: leftharpoonup,
	leftleftarrows: leftleftarrows,
	leftrightarrow: leftrightarrow,
	leftrightarrows: leftrightarrows,
	leftrightharpoons: leftrightharpoons,
	leftrightsquigarrow: leftrightsquigarrow,
	leftthreetimes: leftthreetimes,
	leg: leg,
	leq: leq,
	leqq: leqq,
	leqslant: leqslant,
	les: les,
	lescc: lescc,
	lesdot: lesdot,
	lesdoto: lesdoto,
	lesdotor: lesdotor,
	lesg: lesg,
	lesges: lesges,
	lessapprox: lessapprox,
	lessdot: lessdot,
	lesseqgtr: lesseqgtr,
	lesseqqgtr: lesseqqgtr,
	lessgtr: lessgtr,
	lesssim: lesssim,
	lfisht: lfisht,
	lfloor: lfloor,
	lfr: lfr,
	lg: lg,
	lgE: lgE,
	lhard: lhard,
	lharu: lharu,
	lharul: lharul,
	lhblk: lhblk,
	ljcy: ljcy,
	ll: ll,
	llarr: llarr,
	llcorner: llcorner,
	llhard: llhard,
	lltri: lltri,
	lmidot: lmidot,
	lmoust: lmoust,
	lmoustache: lmoustache,
	lnE: lnE,
	lnap: lnap,
	lnapprox: lnapprox,
	lne: lne,
	lneq: lneq,
	lneqq: lneqq,
	lnsim: lnsim,
	loang: loang,
	loarr: loarr,
	lobrk: lobrk,
	longleftarrow: longleftarrow,
	longleftrightarrow: longleftrightarrow,
	longmapsto: longmapsto,
	longrightarrow: longrightarrow,
	looparrowleft: looparrowleft,
	looparrowright: looparrowright,
	lopar: lopar,
	lopf: lopf,
	loplus: loplus,
	lotimes: lotimes,
	lowast: lowast,
	lowbar: lowbar,
	loz: loz,
	lozenge: lozenge,
	lozf: lozf,
	lpar: lpar,
	lparlt: lparlt,
	lrarr: lrarr,
	lrcorner: lrcorner,
	lrhar: lrhar,
	lrhard: lrhard,
	lrm: lrm,
	lrtri: lrtri,
	lsaquo: lsaquo,
	lscr: lscr,
	lsh: lsh,
	lsim: lsim,
	lsime: lsime,
	lsimg: lsimg,
	lsqb: lsqb,
	lsquo: lsquo,
	lsquor: lsquor,
	lstrok: lstrok,
	l: l,
	lt: lt,
	ltcc: ltcc,
	ltcir: ltcir,
	ltdot: ltdot,
	lthree: lthree,
	ltimes: ltimes,
	ltlarr: ltlarr,
	ltquest: ltquest,
	ltrPar: ltrPar,
	ltri: ltri,
	ltrie: ltrie,
	ltrif: ltrif,
	lurdshar: lurdshar,
	luruhar: luruhar,
	lvertneqq: lvertneqq,
	lvnE: lvnE,
	mDDot: mDDot,
	mac: mac,
	macr: macr,
	male: male,
	malt: malt,
	maltese: maltese,
	map: map,
	mapsto: mapsto,
	mapstodown: mapstodown,
	mapstoleft: mapstoleft,
	mapstoup: mapstoup,
	marker: marker,
	mcomma: mcomma,
	mcy: mcy,
	mdash: mdash,
	measuredangle: measuredangle,
	mfr: mfr,
	mho: mho,
	micr: micr,
	micro: micro,
	mid: mid,
	midast: midast,
	midcir: midcir,
	middo: middo,
	middot: middot,
	minus: minus,
	minusb: minusb,
	minusd: minusd,
	minusdu: minusdu,
	mlcp: mlcp,
	mldr: mldr,
	mnplus: mnplus,
	models: models,
	mopf: mopf,
	mp: mp,
	mscr: mscr,
	mstpos: mstpos,
	mu: mu,
	multimap: multimap,
	mumap: mumap,
	nGg: nGg,
	nGt: nGt,
	nGtv: nGtv,
	nLeftarrow: nLeftarrow,
	nLeftrightarrow: nLeftrightarrow,
	nLl: nLl,
	nLt: nLt,
	nLtv: nLtv,
	nRightarrow: nRightarrow,
	nVDash: nVDash,
	nVdash: nVdash,
	nabla: nabla,
	nacute: nacute,
	nang: nang,
	nap: nap,
	napE: napE,
	napid: napid,
	napos: napos,
	napprox: napprox,
	natur: natur,
	natural: natural,
	naturals: naturals,
	nbs: nbs,
	nbsp: nbsp,
	nbump: nbump,
	nbumpe: nbumpe,
	ncap: ncap,
	ncaron: ncaron,
	ncedil: ncedil,
	ncong: ncong,
	ncongdot: ncongdot,
	ncup: ncup,
	ncy: ncy,
	ndash: ndash,
	ne: ne,
	neArr: neArr,
	nearhk: nearhk,
	nearr: nearr,
	nearrow: nearrow,
	nedot: nedot,
	nequiv: nequiv,
	nesear: nesear,
	nesim: nesim,
	nexist: nexist,
	nexists: nexists,
	nfr: nfr,
	ngE: ngE,
	nge: nge,
	ngeq: ngeq,
	ngeqq: ngeqq,
	ngeqslant: ngeqslant,
	nges: nges,
	ngsim: ngsim,
	ngt: ngt,
	ngtr: ngtr,
	nhArr: nhArr,
	nharr: nharr,
	nhpar: nhpar,
	ni: ni,
	nis: nis,
	nisd: nisd,
	niv: niv,
	njcy: njcy,
	nlArr: nlArr,
	nlE: nlE,
	nlarr: nlarr,
	nldr: nldr,
	nle: nle,
	nleftarrow: nleftarrow,
	nleftrightarrow: nleftrightarrow,
	nleq: nleq,
	nleqq: nleqq,
	nleqslant: nleqslant,
	nles: nles,
	nless: nless,
	nlsim: nlsim,
	nlt: nlt,
	nltri: nltri,
	nltrie: nltrie,
	nmid: nmid,
	nopf: nopf,
	no: no,
	not: not,
	notin: notin,
	notinE: notinE,
	notindot: notindot,
	notinva: notinva,
	notinvb: notinvb,
	notinvc: notinvc,
	notni: notni,
	notniva: notniva,
	notnivb: notnivb,
	notnivc: notnivc,
	npar: npar,
	nparallel: nparallel,
	nparsl: nparsl,
	npart: npart,
	npolint: npolint,
	npr: npr,
	nprcue: nprcue,
	npre: npre,
	nprec: nprec,
	npreceq: npreceq,
	nrArr: nrArr,
	nrarr: nrarr,
	nrarrc: nrarrc,
	nrarrw: nrarrw,
	nrightarrow: nrightarrow,
	nrtri: nrtri,
	nrtrie: nrtrie,
	nsc: nsc,
	nsccue: nsccue,
	nsce: nsce,
	nscr: nscr,
	nshortmid: nshortmid,
	nshortparallel: nshortparallel,
	nsim: nsim,
	nsime: nsime,
	nsimeq: nsimeq,
	nsmid: nsmid,
	nspar: nspar,
	nsqsube: nsqsube,
	nsqsupe: nsqsupe,
	nsub: nsub,
	nsubE: nsubE,
	nsube: nsube,
	nsubset: nsubset,
	nsubseteq: nsubseteq,
	nsubseteqq: nsubseteqq,
	nsucc: nsucc,
	nsucceq: nsucceq,
	nsup: nsup,
	nsupE: nsupE,
	nsupe: nsupe,
	nsupset: nsupset,
	nsupseteq: nsupseteq,
	nsupseteqq: nsupseteqq,
	ntgl: ntgl,
	ntild: ntild,
	ntilde: ntilde,
	ntlg: ntlg,
	ntriangleleft: ntriangleleft,
	ntrianglelefteq: ntrianglelefteq,
	ntriangleright: ntriangleright,
	ntrianglerighteq: ntrianglerighteq,
	nu: nu,
	num: num,
	numero: numero,
	numsp: numsp,
	nvDash: nvDash,
	nvHarr: nvHarr,
	nvap: nvap,
	nvdash: nvdash,
	nvge: nvge,
	nvgt: nvgt,
	nvinfin: nvinfin,
	nvlArr: nvlArr,
	nvle: nvle,
	nvlt: nvlt,
	nvltrie: nvltrie,
	nvrArr: nvrArr,
	nvrtrie: nvrtrie,
	nvsim: nvsim,
	nwArr: nwArr,
	nwarhk: nwarhk,
	nwarr: nwarr,
	nwarrow: nwarrow,
	nwnear: nwnear,
	oS: oS,
	oacut: oacut,
	oacute: oacute,
	oast: oast,
	ocir: ocir,
	ocirc: ocirc,
	ocy: ocy,
	odash: odash,
	odblac: odblac,
	odiv: odiv,
	odot: odot,
	odsold: odsold,
	oelig: oelig,
	ofcir: ofcir,
	ofr: ofr,
	ogon: ogon,
	ograv: ograv,
	ograve: ograve,
	ogt: ogt,
	ohbar: ohbar,
	ohm: ohm,
	oint: oint,
	olarr: olarr,
	olcir: olcir,
	olcross: olcross,
	oline: oline,
	olt: olt,
	omacr: omacr,
	omega: omega,
	omicron: omicron,
	omid: omid,
	ominus: ominus,
	oopf: oopf,
	opar: opar,
	operp: operp,
	oplus: oplus,
	or: or,
	orarr: orarr,
	ord: ord,
	order: order$1,
	orderof: orderof,
	ordf: ordf,
	ordm: ordm,
	origof: origof,
	oror: oror,
	orslope: orslope,
	orv: orv,
	oscr: oscr,
	oslas: oslas,
	oslash: oslash,
	osol: osol,
	otild: otild,
	otilde: otilde,
	otimes: otimes,
	otimesas: otimesas,
	oum: oum,
	ouml: ouml,
	ovbar: ovbar,
	par: par,
	para: para,
	parallel: parallel,
	parsim: parsim,
	parsl: parsl,
	part: part,
	pcy: pcy,
	percnt: percnt,
	period: period,
	permil: permil,
	perp: perp,
	pertenk: pertenk,
	pfr: pfr,
	phi: phi,
	phiv: phiv,
	phmmat: phmmat,
	phone: phone,
	pi: pi,
	pitchfork: pitchfork,
	piv: piv,
	planck: planck,
	planckh: planckh,
	plankv: plankv,
	plus: plus,
	plusacir: plusacir,
	plusb: plusb,
	pluscir: pluscir,
	plusdo: plusdo,
	plusdu: plusdu,
	pluse: pluse,
	plusm: plusm,
	plusmn: plusmn,
	plussim: plussim,
	plustwo: plustwo,
	pm: pm,
	pointint: pointint,
	popf: popf,
	poun: poun,
	pound: pound,
	pr: pr,
	prE: prE,
	prap: prap,
	prcue: prcue,
	pre: pre,
	prec: prec,
	precapprox: precapprox,
	preccurlyeq: preccurlyeq,
	preceq: preceq,
	precnapprox: precnapprox,
	precneqq: precneqq,
	precnsim: precnsim,
	precsim: precsim,
	prime: prime,
	primes: primes,
	prnE: prnE,
	prnap: prnap,
	prnsim: prnsim,
	prod: prod,
	profalar: profalar,
	profline: profline,
	profsurf: profsurf,
	prop: prop,
	propto: propto,
	prsim: prsim,
	prurel: prurel,
	pscr: pscr,
	psi: psi,
	puncsp: puncsp,
	qfr: qfr,
	qint: qint,
	qopf: qopf,
	qprime: qprime,
	qscr: qscr,
	quaternions: quaternions,
	quatint: quatint,
	quest: quest,
	questeq: questeq,
	quo: quo,
	quot: quot,
	rAarr: rAarr,
	rArr: rArr,
	rAtail: rAtail,
	rBarr: rBarr,
	rHar: rHar,
	race: race,
	racute: racute,
	radic: radic,
	raemptyv: raemptyv,
	rang: rang,
	rangd: rangd,
	range: range,
	rangle: rangle,
	raqu: raqu,
	raquo: raquo,
	rarr: rarr,
	rarrap: rarrap,
	rarrb: rarrb,
	rarrbfs: rarrbfs,
	rarrc: rarrc,
	rarrfs: rarrfs,
	rarrhk: rarrhk,
	rarrlp: rarrlp,
	rarrpl: rarrpl,
	rarrsim: rarrsim,
	rarrtl: rarrtl,
	rarrw: rarrw,
	ratail: ratail,
	ratio: ratio,
	rationals: rationals,
	rbarr: rbarr,
	rbbrk: rbbrk,
	rbrace: rbrace,
	rbrack: rbrack,
	rbrke: rbrke,
	rbrksld: rbrksld,
	rbrkslu: rbrkslu,
	rcaron: rcaron,
	rcedil: rcedil,
	rceil: rceil,
	rcub: rcub,
	rcy: rcy,
	rdca: rdca,
	rdldhar: rdldhar,
	rdquo: rdquo,
	rdquor: rdquor,
	rdsh: rdsh,
	real: real,
	realine: realine,
	realpart: realpart,
	reals: reals,
	rect: rect,
	re: re,
	reg: reg,
	rfisht: rfisht,
	rfloor: rfloor,
	rfr: rfr,
	rhard: rhard,
	rharu: rharu,
	rharul: rharul,
	rho: rho,
	rhov: rhov,
	rightarrow: rightarrow,
	rightarrowtail: rightarrowtail,
	rightharpoondown: rightharpoondown,
	rightharpoonup: rightharpoonup,
	rightleftarrows: rightleftarrows,
	rightleftharpoons: rightleftharpoons,
	rightrightarrows: rightrightarrows,
	rightsquigarrow: rightsquigarrow,
	rightthreetimes: rightthreetimes,
	ring: ring,
	risingdotseq: risingdotseq,
	rlarr: rlarr,
	rlhar: rlhar,
	rlm: rlm,
	rmoust: rmoust,
	rmoustache: rmoustache,
	rnmid: rnmid,
	roang: roang,
	roarr: roarr,
	robrk: robrk,
	ropar: ropar,
	ropf: ropf,
	roplus: roplus,
	rotimes: rotimes,
	rpar: rpar,
	rpargt: rpargt,
	rppolint: rppolint,
	rrarr: rrarr,
	rsaquo: rsaquo,
	rscr: rscr,
	rsh: rsh,
	rsqb: rsqb,
	rsquo: rsquo,
	rsquor: rsquor,
	rthree: rthree,
	rtimes: rtimes,
	rtri: rtri,
	rtrie: rtrie,
	rtrif: rtrif,
	rtriltri: rtriltri,
	ruluhar: ruluhar,
	rx: rx,
	sacute: sacute,
	sbquo: sbquo,
	sc: sc,
	scE: scE,
	scap: scap,
	scaron: scaron,
	sccue: sccue,
	sce: sce,
	scedil: scedil,
	scirc: scirc,
	scnE: scnE,
	scnap: scnap,
	scnsim: scnsim,
	scpolint: scpolint,
	scsim: scsim,
	scy: scy,
	sdot: sdot,
	sdotb: sdotb,
	sdote: sdote,
	seArr: seArr,
	searhk: searhk,
	searr: searr,
	searrow: searrow,
	sec: sec,
	sect: sect,
	semi: semi,
	seswar: seswar,
	setminus: setminus,
	setmn: setmn,
	sext: sext,
	sfr: sfr,
	sfrown: sfrown,
	sharp: sharp,
	shchcy: shchcy,
	shcy: shcy,
	shortmid: shortmid,
	shortparallel: shortparallel,
	sh: sh,
	shy: shy,
	sigma: sigma,
	sigmaf: sigmaf,
	sigmav: sigmav,
	sim: sim,
	simdot: simdot,
	sime: sime,
	simeq: simeq,
	simg: simg,
	simgE: simgE,
	siml: siml,
	simlE: simlE,
	simne: simne,
	simplus: simplus,
	simrarr: simrarr,
	slarr: slarr,
	smallsetminus: smallsetminus,
	smashp: smashp,
	smeparsl: smeparsl,
	smid: smid,
	smile: smile,
	smt: smt,
	smte: smte,
	smtes: smtes,
	softcy: softcy,
	sol: sol,
	solb: solb,
	solbar: solbar,
	sopf: sopf,
	spades: spades,
	spadesuit: spadesuit,
	spar: spar,
	sqcap: sqcap,
	sqcaps: sqcaps,
	sqcup: sqcup,
	sqcups: sqcups,
	sqsub: sqsub,
	sqsube: sqsube,
	sqsubset: sqsubset,
	sqsubseteq: sqsubseteq,
	sqsup: sqsup,
	sqsupe: sqsupe,
	sqsupset: sqsupset,
	sqsupseteq: sqsupseteq,
	squ: squ,
	square: square,
	squarf: squarf,
	squf: squf,
	srarr: srarr,
	sscr: sscr,
	ssetmn: ssetmn,
	ssmile: ssmile,
	sstarf: sstarf,
	star: star,
	starf: starf,
	straightepsilon: straightepsilon,
	straightphi: straightphi,
	strns: strns,
	sub: sub,
	subE: subE,
	subdot: subdot,
	sube: sube,
	subedot: subedot,
	submult: submult,
	subnE: subnE,
	subne: subne,
	subplus: subplus,
	subrarr: subrarr,
	subset: subset,
	subseteq: subseteq,
	subseteqq: subseteqq,
	subsetneq: subsetneq,
	subsetneqq: subsetneqq,
	subsim: subsim,
	subsub: subsub,
	subsup: subsup,
	succ: succ,
	succapprox: succapprox,
	succcurlyeq: succcurlyeq,
	succeq: succeq,
	succnapprox: succnapprox,
	succneqq: succneqq,
	succnsim: succnsim,
	succsim: succsim,
	sum: sum,
	sung: sung,
	sup: sup,
	sup1: sup1,
	sup2: sup2,
	sup3: sup3,
	supE: supE,
	supdot: supdot,
	supdsub: supdsub,
	supe: supe,
	supedot: supedot,
	suphsol: suphsol,
	suphsub: suphsub,
	suplarr: suplarr,
	supmult: supmult,
	supnE: supnE,
	supne: supne,
	supplus: supplus,
	supset: supset,
	supseteq: supseteq,
	supseteqq: supseteqq,
	supsetneq: supsetneq,
	supsetneqq: supsetneqq,
	supsim: supsim,
	supsub: supsub,
	supsup: supsup,
	swArr: swArr,
	swarhk: swarhk,
	swarr: swarr,
	swarrow: swarrow,
	swnwar: swnwar,
	szli: szli,
	szlig: szlig,
	target: target,
	tau: tau,
	tbrk: tbrk,
	tcaron: tcaron,
	tcedil: tcedil,
	tcy: tcy,
	tdot: tdot,
	telrec: telrec,
	tfr: tfr,
	there4: there4,
	therefore: therefore,
	theta: theta,
	thetasym: thetasym,
	thetav: thetav,
	thickapprox: thickapprox,
	thicksim: thicksim,
	thinsp: thinsp,
	thkap: thkap,
	thksim: thksim,
	thor: thor,
	thorn: thorn,
	tilde: tilde,
	time: time,
	times: times,
	timesb: timesb,
	timesbar: timesbar,
	timesd: timesd,
	tint: tint,
	toea: toea,
	top: top,
	topbot: topbot,
	topcir: topcir,
	topf: topf,
	topfork: topfork,
	tosa: tosa,
	tprime: tprime,
	trade: trade,
	triangle: triangle,
	triangledown: triangledown,
	triangleleft: triangleleft,
	trianglelefteq: trianglelefteq,
	triangleq: triangleq,
	triangleright: triangleright,
	trianglerighteq: trianglerighteq,
	tridot: tridot,
	trie: trie,
	triminus: triminus,
	triplus: triplus,
	trisb: trisb,
	tritime: tritime,
	trpezium: trpezium,
	tscr: tscr,
	tscy: tscy,
	tshcy: tshcy,
	tstrok: tstrok,
	twixt: twixt,
	twoheadleftarrow: twoheadleftarrow,
	twoheadrightarrow: twoheadrightarrow,
	uArr: uArr,
	uHar: uHar,
	uacut: uacut,
	uacute: uacute,
	uarr: uarr,
	ubrcy: ubrcy,
	ubreve: ubreve,
	ucir: ucir,
	ucirc: ucirc,
	ucy: ucy,
	udarr: udarr,
	udblac: udblac,
	udhar: udhar,
	ufisht: ufisht,
	ufr: ufr,
	ugrav: ugrav,
	ugrave: ugrave,
	uharl: uharl,
	uharr: uharr,
	uhblk: uhblk,
	ulcorn: ulcorn,
	ulcorner: ulcorner,
	ulcrop: ulcrop,
	ultri: ultri,
	umacr: umacr,
	um: um,
	uml: uml,
	uogon: uogon,
	uopf: uopf,
	uparrow: uparrow,
	updownarrow: updownarrow,
	upharpoonleft: upharpoonleft,
	upharpoonright: upharpoonright,
	uplus: uplus,
	upsi: upsi,
	upsih: upsih,
	upsilon: upsilon,
	upuparrows: upuparrows,
	urcorn: urcorn,
	urcorner: urcorner,
	urcrop: urcrop,
	uring: uring,
	urtri: urtri,
	uscr: uscr,
	utdot: utdot,
	utilde: utilde,
	utri: utri,
	utrif: utrif,
	uuarr: uuarr,
	uum: uum,
	uuml: uuml,
	uwangle: uwangle,
	vArr: vArr,
	vBar: vBar,
	vBarv: vBarv,
	vDash: vDash,
	vangrt: vangrt,
	varepsilon: varepsilon,
	varkappa: varkappa,
	varnothing: varnothing,
	varphi: varphi,
	varpi: varpi,
	varpropto: varpropto,
	varr: varr,
	varrho: varrho,
	varsigma: varsigma,
	varsubsetneq: varsubsetneq,
	varsubsetneqq: varsubsetneqq,
	varsupsetneq: varsupsetneq,
	varsupsetneqq: varsupsetneqq,
	vartheta: vartheta,
	vartriangleleft: vartriangleleft,
	vartriangleright: vartriangleright,
	vcy: vcy,
	vdash: vdash,
	vee: vee,
	veebar: veebar,
	veeeq: veeeq,
	vellip: vellip,
	verbar: verbar,
	vert: vert,
	vfr: vfr,
	vltri: vltri,
	vnsub: vnsub,
	vnsup: vnsup,
	vopf: vopf,
	vprop: vprop,
	vrtri: vrtri,
	vscr: vscr,
	vsubnE: vsubnE,
	vsubne: vsubne,
	vsupnE: vsupnE,
	vsupne: vsupne,
	vzigzag: vzigzag,
	wcirc: wcirc,
	wedbar: wedbar,
	wedge: wedge,
	wedgeq: wedgeq,
	weierp: weierp,
	wfr: wfr,
	wopf: wopf,
	wp: wp,
	wr: wr,
	wreath: wreath,
	wscr: wscr,
	xcap: xcap,
	xcirc: xcirc,
	xcup: xcup,
	xdtri: xdtri,
	xfr: xfr,
	xhArr: xhArr,
	xharr: xharr,
	xi: xi,
	xlArr: xlArr,
	xlarr: xlarr,
	xmap: xmap,
	xnis: xnis,
	xodot: xodot,
	xopf: xopf,
	xoplus: xoplus,
	xotime: xotime,
	xrArr: xrArr,
	xrarr: xrarr,
	xscr: xscr,
	xsqcup: xsqcup,
	xuplus: xuplus,
	xutri: xutri,
	xvee: xvee,
	xwedge: xwedge,
	yacut: yacut,
	yacute: yacute,
	yacy: yacy,
	ycirc: ycirc,
	ycy: ycy,
	ye: ye,
	yen: yen,
	yfr: yfr,
	yicy: yicy,
	yopf: yopf,
	yscr: yscr,
	yucy: yucy,
	yum: yum,
	yuml: yuml,
	zacute: zacute,
	zcaron: zcaron,
	zcy: zcy,
	zdot: zdot,
	zeetrf: zeetrf,
	zeta: zeta,
	zfr: zfr,
	zhcy: zhcy,
	zigrarr: zigrarr,
	zopf: zopf,
	zscr: zscr,
	zwj: zwj,
	zwnj: zwnj
};

var decodeEntity_1 = decodeEntity;

var own$3 = {}.hasOwnProperty;

function decodeEntity(characters) {
  return own$3.call(characterEntities, characters)
    ? characterEntities[characters]
    : false
}

var asciiHexDigit = regexCheck_1(/[\dA-Fa-f]/);

var tokenize$a = tokenizeCharacterReference;






function tokenizeCharacterReference(effects, ok, nok) {
  var self = this;
  var size = 0;
  var max;
  var test;

  return start

  function start(code) {
    effects.enter('characterReference');
    effects.enter('characterReferenceMarker');
    effects.consume(code);
    effects.exit('characterReferenceMarker');
    return open
  }

  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric');
      effects.consume(code);
      effects.exit('characterReferenceMarkerNumeric');
      return numeric
    }

    effects.enter('characterReferenceValue');
    max = 31;
    test = asciiAlphanumeric;
    return value(code)
  }

  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal');
      effects.consume(code);
      effects.exit('characterReferenceMarkerHexadecimal');
      effects.enter('characterReferenceValue');
      max = 6;
      test = asciiHexDigit;
      return value
    }

    effects.enter('characterReferenceValue');
    max = 7;
    test = asciiDigit;
    return value(code)
  }

  function value(code) {
    var token;

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue');

      if (test === asciiAlphanumeric && !decodeEntity_1(self.sliceSerialize(token))) {
        return nok(code)
      }

      effects.enter('characterReferenceMarker');
      effects.consume(code);
      effects.exit('characterReferenceMarker');
      effects.exit('characterReference');
      return ok
    }

    if (test(code) && size++ < max) {
      effects.consume(code);
      return value
    }

    return nok(code)
  }
}

var characterReference = {
	tokenize: tokenize$a
};

var tokenize$b = tokenizeCodeFenced;
var concrete = true;







function tokenizeCodeFenced(effects, ok, nok) {
  var self = this;
  var initialPrefix = prefixSize_1(this.events, 'linePrefix');
  var sizeOpen = 0;
  var marker;

  return start

  function start(code) {
    effects.enter('codeFenced');
    effects.enter('codeFencedFence');
    effects.enter('codeFencedFenceSequence');
    marker = code;
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen
    }

    effects.exit('codeFencedFenceSequence');
    return sizeOpen < 3
      ? nok(code)
      : factorySpace(effects, infoOpen, 'whitespace')(code)
  }

  function infoOpen(code) {
    if (code === null || markdownLineEnding_1(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceInfo');
    effects.enter('chunkString', {contentType: 'string'});
    return info(code)
  }

  function info(code) {
    if (code === null || markdownLineEndingOrSpace_1(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceInfo');
      return factorySpace(effects, infoAfter, 'whitespace')(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code);
    return info
  }

  function infoAfter(code) {
    if (code === null || markdownLineEnding_1(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceMeta');
    effects.enter('chunkString', {contentType: 'string'});
    return meta(code)
  }

  function meta(code) {
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit('chunkString');
      effects.exit('codeFencedFenceMeta');
      return openAfter(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code);
    return meta
  }

  function openAfter(code) {
    effects.exit('codeFencedFence');
    return self.interrupt ? ok(code) : content(code)
  }

  function content(code) {
    if (code === null) {
      return after(code)
    }

    if (markdownLineEnding_1(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return effects.attempt(
        {tokenize: tokenizeClosingFence, partial: true},
        after,
        initialPrefix
          ? factorySpace(effects, content, 'linePrefix', initialPrefix + 1)
          : content
      )
    }

    effects.enter('codeFlowValue');
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit('codeFlowValue');
      return content(code)
    }

    effects.consume(code);
    return contentContinue
  }

  function after(code) {
    effects.exit('codeFenced');
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0;

    return factorySpace(effects, closingPrefixAfter, 'linePrefix', 4)

    function closingPrefixAfter(code) {
      effects.enter('codeFencedFence');
      effects.enter('codeFencedFenceSequence');
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code);
        size++;
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('codeFencedFenceSequence');
      return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
    }

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding_1(code)) {
        effects.exit('codeFencedFence');
        return ok(code)
      }

      return nok(code)
    }
  }
}

var codeFenced = {
	tokenize: tokenize$b,
	concrete: concrete
};

var tokenize$c = tokenizeCodeIndented;
var resolve$2 = resolveCodeIndented;







var continuedIndent = {tokenize: tokenizeContinuedIndent, partial: true};

function resolveCodeIndented(events, context) {
  var code = {
    type: 'codeIndented',
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  };

  chunkedSplice_1(events, 0, 0, [['enter', code, context]]);
  chunkedSplice_1(events, events.length, 0, [['exit', code, context]]);

  return events
}

function tokenizeCodeIndented(effects, ok, nok) {
  var self = this;

  return factorySpace(
    effects,
    afterInitial,
    'linePrefix',

    4 + 1
  )

  function afterInitial(code) {
    // Flow checks blank lines first, so we don’t have EOL/EOF.

    if (prefixSize_1(self.events, 'linePrefix') < 4) {
      return nok(code)
    }

    effects.enter('codeFlowValue');
    return content(code)
  }

  function afterPrefix(code) {
    if (code === null) {
      return ok(code)
    }

    if (markdownLineEnding_1(code)) {
      return effects.attempt(continuedIndent, afterPrefix, ok)(code)
    }

    effects.enter('codeFlowValue');
    return content(code)
  }

  function content(code) {
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit('codeFlowValue');
      return afterPrefix(code)
    }

    effects.consume(code);
    return content
  }
}

function tokenizeContinuedIndent(effects, ok, nok) {
  var self = this;

  return factorySpace(
    effects,
    afterPrefix,
    'linePrefix',

    4 + 1
  )

  function afterPrefix(code) {
    if (markdownLineEnding_1(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');

      return factorySpace(
        effects,
        afterPrefix,
        'linePrefix',

        4 + 1
      )
    }

    return prefixSize_1(self.events, 'linePrefix') < 4 ? nok(code) : ok(code)
  }
}

var codeIndented = {
	tokenize: tokenize$c,
	resolve: resolve$2
};

var tokenize$d = tokenizeCodeText;
var resolve$3 = resolveCodeText;
var previous_1 = previous;



function resolveCodeText(events) {
  var tailExitIndex = events.length - 4;
  var headEnterIndex = 3;
  var index;
  var enter;

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === 'lineEnding' ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === 'lineEnding' ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex;

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = events[headEnterIndex][1].type =
          'codeTextPadding';

        headEnterIndex += 2;
        tailExitIndex -= 2;
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1;
  tailExitIndex++;

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index;
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === 'lineEnding'
    ) {
      events[enter][1].type = 'codeTextData';

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }

      enter = undefined;
    }
  }

  return events
}

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

function tokenizeCodeText(effects, ok, nok) {
  var sizeOpen = 0;
  var size;
  var token;

  return start

  function start(code) {
    effects.enter('codeText');
    effects.enter('codeTextSequence');
    return openingSequence(code)
  }

  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence
    }

    effects.exit('codeTextSequence');
    return gap(code)
  }

  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code)
    }

    // Closing fence?
    // Could also be data.
    if (code === 96) {
      token = effects.enter('codeTextSequence');
      size = 0;
      return closingSequence(code)
    }

    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === 32) {
      effects.enter('space');
      effects.consume(code);
      effects.exit('space');
      return gap
    }

    if (markdownLineEnding_1(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return gap
    }

    // Data.
    effects.enter('codeTextData');
    return data(code)
  }

  // In code.
  function data(code) {
    if (
      code === null ||
      code === 32 ||
      code === 96 ||
      markdownLineEnding_1(code)
    ) {
      effects.exit('codeTextData');
      return gap(code)
    }

    effects.consume(code);
    return data
  }

  // Closing fence.
  function closingSequence(code) {
    // More.
    if (code === 96) {
      effects.consume(code);
      size++;
      return closingSequence
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit('codeTextSequence');
      effects.exit('codeText');
      return ok(code)
    }

    // More or less accents: mark as data.
    token.type = 'codeTextData';
    return data(code)
  }
}

var codeText = {
	tokenize: tokenize$d,
	resolve: resolve$3,
	previous: previous_1
};

var factoryDestination = createDestination;





// eslint-disable-next-line max-params
function createDestination(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  var limit = max || Infinity;
  var balance = 0;

  return start

  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return destinationEnclosedBefore
    }

    if (asciiControl_1(code)) {
      return nok(code)
    }

    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter('chunkString', {contentType: 'string'});
    return destinationRaw(code)
  }

  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok
    }

    effects.enter(stringType);
    effects.enter('chunkString', {contentType: 'string'});
    return destinationEnclosed(code)
  }

  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString');
      effects.exit(stringType);
      return destinationEnclosedBefore(code)
    }

    if (code === null || code === 60 || markdownLineEnding_1(code)) {
      return nok(code)
    }

    effects.consume(code);
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed
  }

  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return destinationEnclosed
    }

    return destinationEnclosed(code)
  }

  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit) return nok(code)
      effects.consume(code);
      return destinationRaw
    }

    if (code === 41) {
      if (!balance--) {
        effects.exit('chunkString');
        effects.exit(stringType);
        effects.exit(rawType);
        effects.exit(type);
        return ok(code)
      }

      effects.consume(code);
      return destinationRaw
    }

    if (code === null || markdownLineEndingOrSpace_1(code)) {
      if (balance) return nok(code)
      effects.exit('chunkString');
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code)
    }

    if (asciiControl_1(code)) return nok(code)
    effects.consume(code);
    return code === 92 ? destinationRawEscape : destinationRaw
  }

  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return destinationRaw
    }

    return destinationRaw(code)
  }
}

var factoryLabel = createLabel;




// eslint-disable-next-line max-params
function createLabel(effects, ok, nok, type, markerType, stringType) {
  var self = this;
  var size = 0;
  var data;

  return start

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak
  }

  function atBreak(code) {
    if (
      code === null ||
      code === 91 ||
      (code === 93 && !data) ||
      /* istanbul ignore next - footnotes. */
      (code === 94 &&
        !size &&
        '_hiddenFootnoteSupport' in self.parser.constructs) ||
      size > 999
    ) {
      return nok(code)
    }

    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }

    if (markdownLineEnding_1(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return atBreak
    }

    effects.enter('chunkString', {contentType: 'string'});
    return label(code)
  }

  function label(code) {
    if (
      code === null ||
      code === 91 ||
      code === 93 ||
      markdownLineEnding_1(code) ||
      size++ > 999
    ) {
      effects.exit('chunkString');
      return atBreak(code)
    }

    effects.consume(code);
    data = data || !markdownSpace_1(code);
    return code === 92 ? labelEscape : label
  }

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return label
    }

    return label(code)
  }
}

var factoryWhitespace = createWhitespace;






function createWhitespace(effects, ok) {
  var seen;
  return start

  function start(code) {
    if (markdownLineEnding_1(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      seen = true;
      return start
    }

    if (markdownSpace_1(code)) {
      return factorySpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }

    return ok(code)
  }
}

var factoryTitle = createTitle;





// eslint-disable-next-line max-params
function createTitle(effects, ok, nok, type, markerType, stringType) {
  var marker;

  return start

  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    marker = code === 40 ? 41 : code;
    return atFirstTitleBreak
  }

  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }

    effects.enter(stringType);
    return atTitleBreak(code)
  }

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return atFirstTitleBreak(marker)
    }

    if (code === null) {
      return nok(code)
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding_1(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, atTitleBreak, 'linePrefix')
    }

    effects.enter('chunkString', {contentType: 'string'});
    return title(code)
  }

  function title(code) {
    if (code === marker || code === null || markdownLineEnding_1(code)) {
      effects.exit('chunkString');
      return atTitleBreak(code)
    }

    effects.consume(code);
    return code === 92 ? titleEscape : title
  }

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return title
    }

    return title(code)
  }
}

var tokenize$e = tokenizeDefinition;











function tokenizeDefinition(effects, ok, nok) {
  var self = this;
  var destinationAfter = effects.attempt(
    {tokenize: tokenizeTitle, partial: true},
    factorySpace(effects, after, 'whitespace'),
    factorySpace(effects, after, 'whitespace')
  );

  var identifier;

  return start

  function start(code) {
    effects.enter('definition');
    return factoryLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(code)
  }

  function labelAfter(code) {
    identifier = normalizeIdentifier_1(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    );

    if (code === 58) {
      effects.enter('definitionMarker');
      effects.consume(code);
      effects.exit('definitionMarker');

      // Note: blank lines can’t exist in content.
      return factoryWhitespace(
        effects,
        factoryDestination(
          effects,
          destinationAfter,
          nok,
          'definitionDestination',
          'definitionDestinationLiteral',
          'definitionDestinationLiteralMarker',
          'definitionDestinationRaw',
          'definitionDestinationString'
        )
      )
    }

    return nok(code)
  }

  function after(code) {
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit('definition');

      if (self.parser.defined.indexOf(identifier) < 0) {
        self.parser.defined.push(identifier);
      }

      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeTitle(effects, ok, nok) {
  return start

  function start(code) {
    return markdownLineEndingOrSpace_1(code)
      ? factoryWhitespace(effects, before)(code)
      : nok(code)
  }

  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        factorySpace(effects, after, 'whitespace'),
        nok,
        'definitionTitle',
        'definitionTitleMarker',
        'definitionTitleString'
      )(code)
    }

    return nok(code)
  }

  function after(code) {
    return code === null || markdownLineEnding_1(code) ? ok(code) : nok(code)
  }
}

var definition = {
	tokenize: tokenize$e
};

var tokenize$f = tokenizeHardBreakEscape;



function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('hardBreakEscape');
    effects.enter('escapeMarker');
    effects.consume(code);
    return open
  }

  function open(code) {
    if (markdownLineEnding_1(code)) {
      effects.exit('escapeMarker');
      effects.exit('hardBreakEscape');
      return ok(code)
    }

    return nok(code)
  }
}

var hardBreakEscape = {
	tokenize: tokenize$f
};

// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
var htmlBlockNames = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
];

// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
var htmlRawNames = ['pre', 'script', 'style'];

var tokenize$g = tokenizeHtml;
var resolveTo = resolveToHtml;
var concrete$1 = true;














var nextBlank = {tokenize: tokenizeNextBlank, partial: true};

function resolveToHtml(events) {
  var index = events.length;

  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break
    }
  }

  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start;
    // Add the prefix start to the HTML line token.
    events[index + 1][1].start = events[index - 2][1].start;
    // Remove the line prefix.
    events.splice(index - 2, 2);
  }

  return events
}

function tokenizeHtml(effects, ok, nok) {
  var self = this;
  var kind;
  var startTag;
  var buffer;
  var index;
  var marker;

  return start

  function start(code) {
    effects.enter('htmlFlow');
    effects.enter('htmlFlowData');
    effects.consume(code);
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationStart
    }

    if (code === 47) {
      effects.consume(code);
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code);
      kind = 3;
      // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.
      return self.interrupt ? ok : continuationDeclarationInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      buffer = fromCharCode(code);
      startTag = true;
      return tagName
    }

    return nok(code)
  }

  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code);
      kind = 2;
      return commentOpenInside
    }

    if (code === 91) {
      effects.consume(code);
      kind = 5;
      buffer = 'CDATA[';
      index = 0;
      return cdataOpenInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      kind = 4;
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length
        ? self.interrupt
          ? ok
          : continuation
        : cdataOpenInside
    }

    return nok(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      buffer = fromCharCode(code);
      return tagName
    }

    return nok(code)
  }

  function tagName(code) {
    if (
      code === null ||
      code === 47 ||
      code === 62 ||
      markdownLineEndingOrSpace_1(code)
    ) {
      if (code !== 47 && startTag && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
        kind = 1;
        return self.interrupt ? ok(code) : continuation(code)
      }

      if (htmlBlockNames.indexOf(buffer.toLowerCase()) > -1) {
        kind = 6;

        if (code === 47) {
          effects.consume(code);
          return basicSelfClosing
        }

        return self.interrupt ? ok(code) : continuation(code)
      }

      kind = 7;
      // Do not support complete HTML when interrupting.
      return self.interrupt
        ? nok(code)
        : startTag
        ? completeAttributeNameBefore(code)
        : completeClosingTagAfter(code)
    }

    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      buffer += fromCharCode(code);
      return tagName
    }

    return nok(code)
  }

  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      return self.interrupt ? ok : continuation
    }

    return nok(code)
  }

  function completeClosingTagAfter(code) {
    if (markdownSpace_1(code)) {
      effects.consume(code);
      return completeClosingTagAfter
    }

    return completeEnd(code)
  }

  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return completeAttributeName
    }

    if (markdownSpace_1(code)) {
      effects.consume(code);
      return completeAttributeNameBefore
    }

    return completeEnd(code)
  }

  function completeAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code);
      return completeAttributeName
    }

    return completeAttributeNameAfter(code)
  }

  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore
    }

    if (markdownSpace_1(code)) {
      effects.consume(code);
      return completeAttributeNameAfter
    }

    return completeAttributeNameBefore(code)
  }

  function completeAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return completeAttributeValueQuoted
    }

    if (markdownSpace_1(code)) {
      effects.consume(code);
      return completeAttributeValueBefore
    }

    marker = undefined;
    return completeAttributeValueUnquoted(code)
  }

  function completeAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return completeAttributeValueQuotedAfter
    }

    if (code === null || markdownLineEnding_1(code)) {
      return nok(code)
    }

    effects.consume(code);
    return completeAttributeValueQuoted
  }

  function completeAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96 ||
      markdownLineEndingOrSpace_1(code)
    ) {
      return completeAttributeNameAfter(code)
    }

    effects.consume(code);
    return completeAttributeValueUnquoted
  }

  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace_1(code)) {
      return completeAttributeNameBefore(code)
    }

    return nok(code)
  }

  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter
    }

    return nok(code)
  }

  function completeAfter(code) {
    if (markdownSpace_1(code)) {
      effects.consume(code);
      return completeAfter
    }

    return code === null || markdownLineEnding_1(code)
      ? continuation(code)
      : nok(code)
  }

  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code);
      return continuationCommentInside
    }

    if (code === 60 && kind === 1) {
      effects.consume(code);
      return continuationRawTagOpen
    }

    if (code === 62 && kind === 4) {
      effects.consume(code);
      return continuationClose
    }

    if (code === 63 && kind === 3) {
      effects.consume(code);
      return continuationDeclarationInside
    }

    if (code === 93 && kind === 5) {
      effects.consume(code);
      return continuationCharacterDataInside
    }

    if (markdownLineEnding_1(code) && (kind === 6 || kind === 7)) {
      return effects.check(
        nextBlank,
        continuationClose,
        continuationAtLineEnding
      )(code)
    }

    if (code === null || markdownLineEnding_1(code)) {
      return continuationAtLineEnding(code)
    }

    effects.consume(code);
    return continuation
  }

  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData');
    return htmlContinueStart(code)
  }

  function htmlContinueStart(code) {
    if (code === null) {
      return done(code)
    }

    if (markdownLineEnding_1(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return htmlContinueStart
    }

    effects.enter('htmlFlowData');
    return continuation(code)
  }

  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = '';
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationRawEndTag(code) {
    if (code === 62 && htmlRawNames.indexOf(buffer.toLowerCase()) > -1) {
      effects.consume(code);
      return continuationClose
    }

    if (asciiAlpha(code) && buffer.length < 6) {
      effects.consume(code);
      buffer += fromCharCode(code);
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose
    }

    return continuation(code)
  }

  function continuationClose(code) {
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit('htmlFlowData');
      return done(code)
    }

    effects.consume(code);
    return continuationClose
  }

  function done(code) {
    effects.exit('htmlFlow');
    return ok(code)
  }
}

function tokenizeNextBlank(effects, ok, nok) {
  return start

  function start(code) {
    effects.exit('htmlFlowData');
    effects.enter('lineEndingBlank');
    effects.consume(code);
    effects.exit('lineEndingBlank');
    return effects.attempt(partialBlankLine, ok, nok)
  }
}

var htmlFlow = {
	tokenize: tokenize$g,
	resolveTo: resolveTo,
	concrete: concrete$1
};

var tokenize$h = tokenizeHtml$1;









function tokenizeHtml$1(effects, ok, nok) {
  var marker;
  var buffer;
  var index;
  var returnState;

  return start

  function start(code) {
    effects.enter('htmlText');
    effects.enter('htmlTextData');
    effects.consume(code);
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen
    }

    if (code === 47) {
      effects.consume(code);
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code);
      return instruction
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagOpen
    }

    return nok(code)
  }

  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentOpen
    }

    if (code === 91) {
      effects.consume(code);
      buffer = 'CDATA[';
      index = 0;
      return cdataOpen
    }

    if (asciiAlpha(code)) {
      effects.consume(code);
      return declaration
    }

    return nok(code)
  }

  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentStart
    }

    return nok(code)
  }

  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code);
      return commentStartDash
    }

    return comment(code)
  }

  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    return comment(code)
  }

  function comment(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code);
      return commentClose
    }

    if (markdownLineEnding_1(code)) {
      returnState = comment;
      return atLineEnding(code)
    }

    effects.consume(code);
    return comment
  }

  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return end
    }

    return comment(code)
  }

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code);
      return index === buffer.length ? cdata : cdataOpen
    }

    return nok(code)
  }

  function cdata(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 93) {
      effects.consume(code);
      return cdataClose
    }

    effects.consume(code);
    return cdata
  }

  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd
    }

    return cdata(code)
  }

  function cdataEnd(code) {
    if (code === 62) {
      return end(code)
    }

    if (code === 93) {
      effects.consume(code);
      return cdataEnd
    }

    return cdata(code)
  }

  function declaration(code) {
    if (code === null || code === 62) {
      return end(code)
    }

    if (markdownLineEnding_1(code)) {
      returnState = declaration;
      return atLineEnding(code)
    }

    effects.consume(code);
    return declaration
  }

  function instruction(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 63) {
      effects.consume(code);
      return instructionClose
    }

    if (markdownLineEnding_1(code)) {
      returnState = instruction;
      return atLineEnding(code)
    }

    effects.consume(code);
    return instruction
  }

  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return tagClose
    }

    return nok(code)
  }

  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagClose
    }

    return tagCloseBetween(code)
  }

  function tagCloseBetween(code) {
    if (markdownLineEnding_1(code)) {
      returnState = tagCloseBetween;
      return atLineEnding(code)
    }

    if (markdownSpace_1(code)) {
      effects.consume(code);
      return tagCloseBetween
    }

    return end(code)
  }

  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code);
      return tagOpen
    }

    if (code === 47 || code === 62 || markdownLineEndingOrSpace_1(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code);
      return tagOpenAttributeName
    }

    if (markdownLineEnding_1(code)) {
      returnState = tagOpenBetween;
      return atLineEnding(code)
    }

    if (markdownSpace_1(code)) {
      effects.consume(code);
      return tagOpenBetween
    }

    return end(code)
  }

  function tagOpenAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code);
      return tagOpenAttributeName
    }

    return tagOpenAttributeNameAfter(code)
  }

  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore
    }

    if (markdownLineEnding_1(code)) {
      returnState = tagOpenAttributeNameAfter;
      return atLineEnding(code)
    }

    if (markdownSpace_1(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }

  function tagOpenAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted
    }

    if (markdownLineEnding_1(code)) {
      returnState = tagOpenAttributeValueBefore;
      return atLineEnding(code)
    }

    if (markdownSpace_1(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore
    }

    effects.consume(code);
    marker = undefined;
    return tagOpenAttributeValueUnquoted
  }

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === null) {
      return nok(code)
    }

    if (markdownLineEnding_1(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return atLineEnding(code)
    }

    effects.consume(code);
    return tagOpenAttributeValueQuoted
  }

  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace_1(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 62 || markdownLineEndingOrSpace_1(code)) {
      return tagOpenBetween(code)
    }

    effects.consume(code);
    return tagOpenAttributeValueUnquoted
  }

  // We can’t have blank lines in content, so no need to worry about empty
  // tokens.
  function atLineEnding(code) {
    effects.exit('htmlTextData');
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, afterPrefix, 'linePrefix', 4)
  }

  function afterPrefix(code) {
    effects.enter('htmlTextData');
    return returnState(code)
  }

  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit('htmlTextData');
      effects.exit('htmlText');
      return ok
    }

    return nok(code)
  }
}

var htmlText = {
	tokenize: tokenize$h
};

var tokenize$i = tokenizeLabelEnd;
var resolveTo$1 = resolveToLabelEnd;
var resolveAll_1$2 = resolveAllLabelEnd;












var resource = {tokenize: tokenizeResource};
var fullReference = {tokenize: tokenizeFullReference};
var collapsedReference = {tokenize: tokenizeCollapsedReference};

function resolveAllLabelEnd(events) {
  var index = -1;
  var token;

  while (++index < events.length) {
    token = events[index][1];

    if (
      !token._used &&
      (token.type === 'labelImage' ||
        token.type === 'labelLink' ||
        token.type === 'labelEnd')
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2);
      token.type = 'data';
      index++;
    }
  }

  return events
}

function resolveToLabelEnd(events, context) {
  var index = events.length;
  var offset = 0;
  var group;
  var label;
  var text;
  var token;
  var open;
  var close;
  var media;

  // Find an opening.
  while (index--) {
    token = events[index][1];

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === 'link' ||
        (token.type === 'labelLink' && token._inactive)
      ) {
        break
      }

      // Mark other link openings as inactive, as we can’t have links in
      // links.
      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true;
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === 'labelImage' || token.type === 'labelLink') &&
        !token._balanced
      ) {
        open = index;

        if (token.type !== 'labelLink') {
          offset = 2;
          break
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index;
    }
  }

  group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: shallow_1(events[open][1].start),
    end: shallow_1(events[events.length - 1][1].end)
  };

  label = {
    type: 'label',
    start: shallow_1(events[open][1].start),
    end: shallow_1(events[close][1].end)
  };

  text = {
    type: 'labelText',
    start: shallow_1(events[open + offset + 2][1].end),
    end: shallow_1(events[close - 2][1].start)
  };

  media = [
    ['enter', group, context],
    ['enter', label, context]
  ];

  // Opening marker.
  chunkedSplice_1(
    media,
    media.length,
    0,
    events.slice(open + 1, open + offset + 3)
  );

  // Text open.
  chunkedSplice_1(media, media.length, 0, [['enter', text, context]]);

  // Between.
  chunkedSplice_1(
    media,
    media.length,
    0,
    resolveAll_1(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  );

  // Text close, marker close, label close.
  chunkedSplice_1(media, media.length, 0, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ]);

  // Reference, resource, or so.
  chunkedSplice_1(media, media.length, 0, events.slice(close + 1));

  // Media close.
  chunkedSplice_1(media, media.length, 0, [['exit', group, context]]);

  chunkedSplice_1(events, open, events.length, media);

  return events
}

function tokenizeLabelEnd(effects, ok, nok) {
  var self = this;
  var index = self.events.length;
  var labelStart;
  var defined;

  // Find an opening.
  while (index--) {
    if (
      (self.events[index][1].type === 'labelImage' ||
        self.events[index][1].type === 'labelLink') &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1];
      break
    }
  }

  return start

  function start(code) {
    if (!labelStart) {
      return nok(code)
    }

    // It’s a balanced bracket, but contains a link.
    if (labelStart._inactive) return balanced(code)
    defined =
      self.parser.defined.indexOf(
        normalizeIdentifier_1(
          self.sliceSerialize({start: labelStart.end, end: self.now()})
        )
      ) > -1;
    effects.enter('labelEnd');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelEnd');
    return afterLabelEnd
  }

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt(resource, ok, defined ? ok : balanced)(code)
    }

    // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
    if (code === 91) {
      return effects.attempt(
        fullReference,
        ok,
        defined ? effects.attempt(collapsedReference, ok, balanced) : balanced
      )(code)
    }

    // Shortcut reference: `[asd]`?
    return defined ? ok(code) : balanced(code)
  }

  function balanced(code) {
    labelStart._balanced = true;
    return nok(code)
  }
}

function tokenizeResource(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('resource');
    effects.enter('resourceMarker');
    effects.consume(code);
    effects.exit('resourceMarker');
    return factoryWhitespace(effects, open)
  }

  function open(code) {
    if (code === 41) {
      return end(code)
    }

    return factoryDestination(
      effects,
      destinationAfter,
      nok,
      'resourceDestination',
      'resourceDestinationLiteral',
      'resourceDestinationLiteralMarker',
      'resourceDestinationRaw',
      'resourceDestinationString',
      3
    )(code)
  }

  function destinationAfter(code) {
    return markdownLineEndingOrSpace_1(code)
      ? factoryWhitespace(effects, between)(code)
      : end(code)
  }

  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return factoryTitle(
        effects,
        factoryWhitespace(effects, end),
        nok,
        'resourceTitle',
        'resourceTitleMarker',
        'resourceTitleString'
      )(code)
    }

    return end(code)
  }

  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker');
      effects.consume(code);
      effects.exit('resourceMarker');
      effects.exit('resource');
      return ok
    }

    return nok(code)
  }
}

function tokenizeFullReference(effects, ok, nok) {
  var self = this;

  return start

  function start(code) {
    return factoryLabel.call(
      self,
      effects,
      afterLabel,
      nok,
      'reference',
      'referenceMarker',
      'referenceString'
    )(code)
  }

  function afterLabel(code) {
    return self.parser.defined.indexOf(
      normalizeIdentifier_1(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) < 0
      ? nok(code)
      : ok(code)
  }
}

function tokenizeCollapsedReference(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('reference');
    effects.enter('referenceMarker');
    effects.consume(code);
    effects.exit('referenceMarker');
    return open
  }

  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker');
      effects.consume(code);
      effects.exit('referenceMarker');
      effects.exit('reference');
      return ok
    }

    return nok(code)
  }
}

var labelEnd = {
	tokenize: tokenize$i,
	resolveTo: resolveTo$1,
	resolveAll: resolveAll_1$2
};

var tokenize$j = tokenizelabelImage;
var resolveAll$1 = labelEnd.resolveAll;

function tokenizelabelImage(effects, ok, nok) {
  var self = this;

  return start

  function start(code) {
    effects.enter('labelImage');
    effects.enter('labelImageMarker');
    effects.consume(code);
    effects.exit('labelImageMarker');
    return open
  }

  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker');
      effects.consume(code);
      effects.exit('labelMarker');
      effects.exit('labelImage');
      return after
    }

    return nok(code)
  }

  function after(code) {
    /* istanbul ignore next - footnotes. */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}

var labelStartImage = {
	tokenize: tokenize$j,
	resolveAll: resolveAll$1
};

var tokenize$k = tokenizelabelLink;
var resolveAll$2 = labelEnd.resolveAll;

function tokenizelabelLink(effects, ok, nok) {
  var self = this;

  return start

  function start(code) {
    effects.enter('labelLink');
    effects.enter('labelMarker');
    effects.consume(code);
    effects.exit('labelMarker');
    effects.exit('labelLink');
    return after
  }

  function after(code) {
    /* istanbul ignore next - footnotes. */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}

var labelStartLink = {
	tokenize: tokenize$k,
	resolveAll: resolveAll$2
};

var tokenize$l = tokenizeSetextUnderline;
var resolveTo$2 = resolveToSetextUnderline;






function resolveToSetextUnderline(events, context) {
  var index = events.length;
  var content;
  var text;
  var definition;
  var heading;

  // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index;
        break
      }

      if (events[index][1].type === 'paragraph') {
        text = index;
      }
    }
    // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1);
      }

      if (!definition && events[index][1].type === 'definition') {
        definition = index;
      }
    }
  }

  heading = {
    type: 'setextHeading',
    start: shallow_1(events[text][1].start),
    end: shallow_1(events[events.length - 1][1].end)
  };

  // Change the paragraph to setext heading text.
  events[text][1].type = 'setextHeadingText';

  // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.
  if (definition) {
    events.splice(text, 0, ['enter', heading, context]);
    events.splice(definition + 1, 0, ['exit', events[content][1], context]);
    events[content][1].end = shallow_1(events[definition][1].end);
  } else {
    events[content][1] = heading;
  }

  // Add the heading exit at the end.
  events.push(['exit', heading, context]);

  return events
}

function tokenizeSetextUnderline(effects, ok, nok) {
  var self = this;
  var index = self.events.length;
  var marker;
  var paragraph;

  // Find an opening.
  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (
      self.events[index][1].type !== 'lineEnding' &&
      self.events[index][1].type !== 'linePrefix' &&
      self.events[index][1].type !== 'content'
    ) {
      paragraph = self.events[index][1].type === 'paragraph';
      break
    }
  }

  return start

  function start(code) {
    if (!self.lazy && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine');
      effects.enter('setextHeadingLineSequence');
      marker = code;
      return closingSequence(code)
    }

    return nok(code)
  }

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code);
      return closingSequence
    }

    effects.exit('setextHeadingLineSequence');
    return factorySpace(effects, closingSequenceEnd, 'lineSuffix')(code)
  }

  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit('setextHeadingLine');
      return ok(code)
    }

    return nok(code)
  }
}

var setextUnderline = {
	tokenize: tokenize$l,
	resolveTo: resolveTo$2
};

var tokenize$m = tokenizeWhitespace;





function tokenizeWhitespace(effects, ok) {
  return start

  function start(code) {
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    return factorySpace(effects, ok, 'linePrefix')
  }
}

var lineEnding = {
	tokenize: tokenize$m
};

var resolveText = text.resolver;

var document$1 = {
  42: list, // Asterisk
  43: list, // Plus sign
  45: list, // Dash
  48: list, // 0
  49: list, // 1
  50: list, // 2
  51: list, // 3
  52: list, // 4
  53: list, // 5
  54: list, // 6
  55: list, // 7
  56: list, // 8
  57: list, // 9
  62: blockQuote // Greater than
};

var contentInitial = {
  91: definition // Left square bracket
};

var flowInitial = {
  '-2': codeIndented, // Horizontal tab
  '-1': codeIndented, // Virtual space
  32: codeIndented // Space
};

var flow$1 = {
  35: headingAtx, // Number sign
  42: thematicBreak, // Asterisk
  45: [setextUnderline, thematicBreak], // Dash
  60: htmlFlow, // Less than
  61: setextUnderline, // Equals to
  95: thematicBreak, // Underscore
  96: codeFenced, // Grave accent
  126: codeFenced // Tilde
};

var string$1 = {
  38: characterReference, // Ampersand
  92: characterEscape // Backslash
};

var text$1 = {
  '-5': lineEnding, // Carriage return
  '-4': lineEnding, // Line feed
  '-3': lineEnding, // Carriage return + line feed
  33: labelStartImage, // Exclamation mark
  38: characterReference, // Ampersand
  42: attention, // Asterisk
  60: [autolink, htmlText], // Less than
  91: labelStartLink, // Left square bracket
  92: [hardBreakEscape, characterEscape], // Backslash
  93: labelEnd, // Right square bracket
  95: attention, // Underscore
  96: codeText // Grave accent
};

var insideSpan = {
  null: [attention, resolveText]
};

var constructs = {
	document: document$1,
	contentInitial: contentInitial,
	flowInitial: flowInitial,
	flow: flow$1,
	string: string$1,
	text: text$1,
	insideSpan: insideSpan
};

var serializeChunks_1 = serializeChunks;



function serializeChunks(chunks) {
  var index = -1;
  var result = [];
  var chunk;
  var value;
  var atTab;

  while (++index < chunks.length) {
    chunk = chunks[index];

    if (typeof chunk === 'string') {
      value = chunk;
    } else if (chunk === -5) {
      value = '\r';
    } else if (chunk === -4) {
      value = '\n';
    } else if (chunk === -3) {
      value = '\r' + '\n';
    } else if (chunk === -2) {
      value = '\t';
    } else if (chunk === -1) {
      if (atTab) continue
      value = ' ';
    } else {
      // Currently only replacement character.
      value = fromCharCode(chunk);
    }

    atTab = chunk === -2;
    result.push(value);
  }

  return result.join('')
}

var sliceChunks_1 = sliceChunks;

function sliceChunks(chunks, token) {
  var startIndex = token.start._index;
  var startBufferIndex = token.start._bufferIndex;
  var endIndex = token.end._index;
  var endBufferIndex = token.end._bufferIndex;
  var view;

  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);

    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }

    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }

  return view
}

var miniflat_1 = miniflat;

function miniflat(value) {
  return value === null || value === undefined
    ? []
    : 'length' in value
    ? value
    : [value]
}

var createTokenizer_1 = createTokenizer;











// Create a tokenizer.
// Tokenizers deal with one type of data (e.g., containers, flow, text).
// The parser is the object dealing with it all.
// `initialize` works like other constructs, except that only its `tokenize`
// function is used, in which case it doesn’t receive an `ok` or `nok`.
// `from` can be given to set the point before the first character, although
// when further lines are indented, they must be set with `defineSkip`.
function createTokenizer(parser, initialize, from) {
  var point = from ? shallow_1(from) : {line: 1, column: 1, offset: 0};
  var columnStart = {};
  var resolveAllConstructs = [];
  var chunks = [];
  var stack = [];

  // Tools used for tokenizing.
  var effects = {
    consume: consume,
    enter: enter,
    exit: exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {interrupt: true}),
    lazy: constructFactory(onsuccessfulcheck, {lazy: true})
  };

  // State and tools for resolving and serializing.
  var context = {
    previous: null,
    events: [],
    parser: parser,
    sliceStream: sliceStream,
    sliceSerialize: sliceSerialize,
    now: now,
    defineSkip: skip,
    write: write
  };

  // The state function.
  var state = initialize.tokenize.call(context, effects);

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }

  // Store where we are in the input stream.
  point._index = 0;
  point._bufferIndex = -1;

  return context

  function write(slice) {
    chunkedSplice_1(chunks, chunks.length, 0, slice);

    main();

    // Exit if we’re not done, resolve might change stuff.
    if (chunks[chunks.length - 1] !== null) {
      return []
    }

    addResult(initialize, 0);

    // Otherwise, resolve, and exit.
    context.events = resolveAll_1(resolveAllConstructs, context.events, context);

    return context.events
  }

  //
  // Tools.
  //

  function sliceSerialize(token) {
    return serializeChunks_1(sliceStream(token))
  }

  function sliceStream(token) {
    return sliceChunks_1(chunks, token)
  }

  function now() {
    return shallow_1(point)
  }

  function skip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }

  //
  // State management.
  //

  // Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
  // `consume`).
  // Here is where we walk through the chunks, which either include strings of
  // several characters, or numerical character codes.
  // The reason to do this in a loop instead of a call is so the stack can
  // drain.
  function main() {
    var chunkIndex;
    var chunk;

    while (point._index < chunks.length) {
      chunk = chunks[point._index];

      // If we’re in a buffer chunk, loop through it.
      if (typeof chunk === 'string') {
        chunkIndex = point._index;

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }

        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }

  // Deal with one code.
  function go(code) {
    state = state(code);
  }

  // Move a character forward.
  function consume(code) {
    if (markdownLineEnding_1(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }

    // Not in a string chunk.
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;

      // At end of string chunk.
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }

    // Expose the previous character.
    context.previous = code;
  }

  // Start a token.
  function enter(type, fields) {
    var token = fields || {};
    token.type = type;
    token.start = now();

    context.events.push(['enter', token, context]);

    stack.push(token);

    return token
  }

  // Stop a token.
  function exit(type) {
    var token = stack.pop();
    token.end = now();

    context.events.push(['exit', token, context]);

    return token
  }

  // Use results.
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }

  // Discard results.
  function onsuccessfulcheck(construct, info) {
    info.restore();
  }

  // Factory to attempt/check/interrupt.
  function constructFactory(onreturn, fields) {
    return hook

    // Handle either an object mapping codes to constructs, a list of
    // constructs, or a single construct.
    function hook(constructs, returnState, bogusState) {
      var listOfConstructs;
      var constructIndex;
      var currentConstruct;
      var info;

      return constructs.tokenize || 'length' in constructs
        ? handleListOfConstructs(miniflat_1(constructs))
        : handleMapOfConstructs

      function handleMapOfConstructs(code) {
        if (code in constructs || null in constructs) {
          return handleListOfConstructs(
            /* istanbul ignore next - `null` is used by some extensions */
            constructs.null
              ? miniflat_1(constructs[code]).concat(miniflat_1(constructs.null))
              : constructs[code]
          )(code)
        }

        return bogusState(code)
      }

      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        return handleConstruct(list[constructIndex])
      }

      function handleConstruct(construct) {
        return start

        function start(code) {
          // To do: not nede to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store();
          currentConstruct = construct;

          if (!construct.partial) {
            context.currentConstruct = construct;
          }

          return construct.tokenize.call(
            fields ? assign({}, context, fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }

      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState
      }

      function nok(code) {
        info.restore();

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }

        return bogusState
      }
    }
  }

  function addResult(construct, from) {
    if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
      resolveAllConstructs.push(construct);
    }

    if (construct.resolve) {
      chunkedSplice_1(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      );
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }

  function store() {
    var startPoint = now();
    var startPrevious = context.previous;
    var startCurrentConstruct = context.currentConstruct;
    var startEventsIndex = context.events.length;
    var startStack = Array.from(stack);

    return {restore: restore, from: startEventsIndex}

    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}

var combineExtensions_1 = combineExtensions;





// Combine several syntax extensions into one.
function combineExtensions(extensions) {
  var all = {};
  var index = -1;

  while (++index < extensions.length) {
    extension(all, extensions[index]);
  }

  return all
}

function extension(all, extension) {
  var hook;
  var left;
  var right;
  var code;

  for (hook in extension) {
    left = hasOwnProperty_1.call(all, hook) ? all[hook] : (all[hook] = {});
    right = extension[hook];

    for (code in right) {
      left[code] = constructs$1(
        miniflat_1(right[code]),
        hasOwnProperty_1.call(left, code) ? left[code] : []
      );
    }
  }
}

function constructs$1(list, existing) {
  var index = -1;
  var before = [];

  while (++index < list.length) {
(list[index].add === 'after' ? existing : before).push(list[index]);
  }

  chunkedSplice_1(existing, 0, 0, before);
  return existing
}

var parse = createParser;










function createParser(options) {
  var settings = options || {};
  var parser = {
    defined: [],
    constructs: combineExtensions_1(
      [constructs].concat(miniflat_1(settings.extensions))
    ),

    content: create(content),
    document: create(document),
    flow: create(flow),
    string: create(text.string),
    text: create(text.text)
  };

  return parser

  function create(initializer) {
    return creator
    function creator(from) {
      return createTokenizer_1(parser, initializer, from)
    }
  }
}

var preprocess = preprocessor;

var search = /[\0\t\n\r]/g;

function preprocessor() {
  var start = true;
  var column = 1;
  var buffer = '';
  var atCarriageReturn;

  return preprocess

  function preprocess(value, encoding, end) {
    var chunks = [];
    var match;
    var next;
    var startPosition;
    var endPosition;
    var code;

    value = buffer + value.toString(encoding);
    startPosition = 0;
    buffer = '';

    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++;
      }

      start = undefined;
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition;
      match = search.exec(value);
      endPosition = match ? match.index : value.length;
      code = value.charCodeAt(endPosition);

      if (!match) {
        buffer = value.slice(startPosition);
        break
      }

      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3);
        atCarriageReturn = undefined;
      } else {
        if (atCarriageReturn) {
          chunks.push(-5);
          atCarriageReturn = undefined;
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition));
          column += endPosition - startPosition;
        }

        if (code === 0) {
          chunks.push(65533);
          column++;
        } else if (code === 9) {
          next = Math.ceil(column / 4) * 4;
          chunks.push(-2);
          while (column++ < next) chunks.push(-1);
        } else if (code === 10) {
          chunks.push(-4);
          column = 1;
        }
        // Must be carriage return.
        else {
          atCarriageReturn = true;
          column = 1;
        }
      }

      startPosition = endPosition + 1;
    }

    if (end) {
      if (atCarriageReturn) chunks.push(-5);
      if (buffer) chunks.push(buffer);
      chunks.push(null);
    }

    return chunks
  }
}

var postprocess_1 = postprocess;



function postprocess(events) {
  while (!subtokenize_1(events)) {
    // Empty
  }

  return events
}

var dist = fromMarkdown;

// These three are compiled away in the `dist/`












function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding;
    encoding = undefined;
  }

  return compiler(options)(
    postprocess_1(
      parse(options).document().write(preprocess()(value, encoding, true))
    )
  )
}

// Note this compiler only understand complete buffering, not streaming.
function compiler(options) {
  var settings = options || {};
  var config = configure(
    {
      canContainEols: [
        'emphasis',
        'fragment',
        'heading',
        'paragraph',
        'strong'
      ],

      enter: {
        autolink: opener(link),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link),
        listItem: opener(listItem),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list, onenterlistordered),
        listUnordered: opener(list),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak)
      },

      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },

    settings.mdastExtensions || []
  );

  var data = {};

  return compile

  function compile(events) {
    var stack = [{type: 'root', children: []}];
    var tokenStack = [];
    var listStack = [];
    var index = -1;
    var handler;
    var listStart;

    var context = {
      stack: stack,
      tokenStack: tokenStack,
      config: config,
      enter: enter,
      exit: exit,
      buffer: buffer,
      resume: resume,
      setData: setData,
      getData: getData
    };

    while (++index < events.length) {
      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (
        events[index][1].type === 'listOrdered' ||
        events[index][1].type === 'listUnordered'
      ) {
        if (events[index][0] === 'enter') {
          listStack.push(index);
        } else {
          listStart = listStack.pop(index);
          index = prepareList(events, listStart, index);
        }
      }
    }

    index = -1;

    while (++index < events.length) {
      handler = config[events[index][0]];

      if (hasOwnProperty_1.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          assign({sliceSerialize: events[index][2].sliceSerialize}, context),
          events[index][1]
        );
      }
    }

    if (tokenStack.length) {
      throw new Error(
        'Cannot close document, a token (`' +
          tokenStack[tokenStack.length - 1].type +
          '`, ' +
          unistUtilStringifyPosition({
            start: tokenStack[tokenStack.length - 1].start,
            end: tokenStack[tokenStack.length - 1].end
          }) +
          ') is still open'
      )
    }

    // Figure out `root` position.
    stack[0].position = {
      start: point(
        events.length ? events[0][1].start : {line: 1, column: 1, offset: 0}
      ),

      end: point(
        events.length
          ? events[events.length - 2][1].end
          : {line: 1, column: 1, offset: 0}
      )
    };

    return stack[0]
  }

  function prepareList(events, start, length) {
    var index = start - 1;
    var containerBalance = -1;
    var listSpread = false;
    var listItem;
    var tailIndex;
    var lineIndex;
    var tailEvent;
    var event;
    var firstBlankLineIndex;
    var atMarker;

    while (++index <= length) {
      event = events[index];

      if (
        event[1].type === 'listUnordered' ||
        event[1].type === 'listOrdered' ||
        event[1].type === 'blockQuote'
      ) {
        if (event[0] === 'enter') {
          containerBalance++;
        } else {
          containerBalance--;
        }

        atMarker = undefined;
      } else if (event[1].type === 'lineEndingBlank') {
        if (event[0] === 'enter') {
          if (
            listItem &&
            !atMarker &&
            !containerBalance &&
            !firstBlankLineIndex
          ) {
            firstBlankLineIndex = index;
          }

          atMarker = undefined;
        }
      } else if (
        event[1].type === 'linePrefix' ||
        event[1].type === 'listItemValue' ||
        event[1].type === 'listItemMarker' ||
        event[1].type === 'listItemPrefix' ||
        event[1].type === 'listItemPrefixWhitespace'
      ) ; else {
        atMarker = undefined;
      }

      if (
        (!containerBalance &&
          event[0] === 'enter' &&
          event[1].type === 'listItemPrefix') ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === 'listUnordered' ||
            event[1].type === 'listOrdered'))
      ) {
        if (listItem) {
          tailIndex = index;
          lineIndex = undefined;

          while (tailIndex--) {
            tailEvent = events[tailIndex];

            if (
              tailEvent[1].type === 'lineEnding' ||
              tailEvent[1].type === 'lineEndingBlank'
            ) {
              if (tailEvent[0] === 'exit') continue

              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank';
                listSpread = true;
              }

              tailEvent[1].type = 'lineEnding';
              lineIndex = tailIndex;
            } else if (
              tailEvent[1].type === 'linePrefix' ||
              tailEvent[1].type === 'blockQuotePrefix' ||
              tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
              tailEvent[1].type === 'blockQuoteMarker' ||
              tailEvent[1].type === 'listItemIndent'
            ) ; else {
              break
            }
          }

          if (
            firstBlankLineIndex &&
            (!lineIndex || firstBlankLineIndex < lineIndex)
          ) {
            listItem._spread = true;
          }

          // Fix position.
          listItem.end = point(
            lineIndex ? events[lineIndex][1].start : event[1].end
          );

          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]]);
          index++;
          length++;
        }

        // Create a new list item.
        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            _spread: false,
            start: point(event[1].start)
          };

          events.splice(index, 0, ['enter', listItem, event[2]]);
          index++;
          length++;
          firstBlankLineIndex = undefined;
          atMarker = true;
        }
      }
    }

    events[start][1]._spread = listSpread;
    return length
  }

  function setData(key, value) {
    data[key] = value;
  }

  function getData(key) {
    return data[key]
  }

  function point(d) {
    return {line: d.line, column: d.column, offset: d.offset}
  }

  function opener(create, and) {
    return open

    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }

  function buffer() {
    this.stack.push({type: 'fragment', children: []});
  }

  function enter(node, token) {
    this.stack[this.stack.length - 1].children.push(node);
    this.stack.push(node);
    this.tokenStack.push(token);
    node.position = {start: point(token.start)};
    return node
  }

  function closer(and) {
    return close

    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }

  function exit(token) {
    var node = this.stack.pop();
    var open = this.tokenStack.pop();

    if (!open) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          unistUtilStringifyPosition({start: token.start, end: token.end}) +
          '): it’s not open'
      )
    } else if (open.type !== token.type) {
      throw new Error(
        'Cannot close `' +
          token.type +
          '` (' +
          unistUtilStringifyPosition({start: token.start, end: token.end}) +
          '): a different token (`' +
          open.type +
          '`, ' +
          unistUtilStringifyPosition({start: open.start, end: open.end}) +
          ') is open'
      )
    }

    node.position.end = point(token.end);
    return node
  }

  function resume() {
    return mdastUtilToString(this.stack.pop())
  }

  //
  // Handlers.
  //

  function onenterlistordered() {
    setData('expectingFirstListItemValue', true);
  }

  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      this.stack[this.stack.length - 2].start = parseInt(
        this.sliceSerialize(token),
        10
      );

      setData('expectingFirstListItemValue');
    }
  }

  function onexitcodefencedfenceinfo() {
    var data = this.resume();
    this.stack[this.stack.length - 1].lang = data;
  }

  function onexitcodefencedfencemeta() {
    var data = this.resume();
    this.stack[this.stack.length - 1].meta = data;
  }

  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return
    this.buffer();
    setData('flowCodeInside', true);
  }

  function onexitcodefenced() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data.replace(
      /^(\r?\n|\r)|(\r?\n|\r)$/g,
      ''
    );

    setData('flowCodeInside');
  }

  function onexitcodeindented() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier_1(
      this.sliceSerialize(token)
    ).toLowerCase();
  }

  function onexitdefinitiontitlestring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].title = data;
  }

  function onexitdefinitiondestinationstring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].url = data;
  }

  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(
        token
      ).length;
    }
  }

  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true);
  }

  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth =
      this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }

  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding');
  }

  function onenterdata(token) {
    var siblings = this.stack[this.stack.length - 1].children;
    var tail = siblings[siblings.length - 1];

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text();
      tail.position = {start: point(token.start)};
      this.stack[this.stack.length - 1].children.push(tail);
    }

    this.stack.push(tail);
  }

  function onexitdata(token) {
    var tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point(token.end);
  }

  function onexitlineending(token) {
    var context = this.stack[this.stack.length - 1];

    // If we’re at a hard break, include the line ending in there.
    if (getData('atHardBreak')) {
      context.children[context.children.length - 1].position.end = point(
        token.end
      );

      setData('atHardBreak');
      return
    }

    if (
      !getData('setextHeadingSlurpLineEnding') &&
      config.canContainEols.indexOf(context.type) > -1
    ) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }

  function onexithardbreak() {
    setData('atHardBreak', true);
  }

  function onexithtmlflow() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }

  function onexithtmltext() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }

  function onexitcodetext() {
    var data = this.resume();
    this.stack[this.stack.length - 1].value = data;
  }

  function onexitlink() {
    var context = this.stack[this.stack.length - 1];

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference';
      context.referenceType = getData('referenceType') || 'shortcut';
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
      delete context.referenceType;
    }

    setData('referenceType');
  }

  function onexitimage() {
    var context = this.stack[this.stack.length - 1];

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference';
      context.referenceType = getData('referenceType') || 'shortcut';
      delete context.url;
      delete context.title;
    } else {
      delete context.identifier;
      delete context.label;
      delete context.referenceType;
    }

    setData('referenceType');
  }

  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = normalizeIdentifier_1(
      this.sliceSerialize(token)
    ).toLowerCase();
  }

  function onexitlabel() {
    var fragment = this.stack[this.stack.length - 1];
    var value = this.resume();

    this.stack[this.stack.length - 1].label = value;

    // Assume a reference.
    setData('inReference', true);

    if (this.stack[this.stack.length - 1].type === 'link') {
      this.stack[this.stack.length - 1].children = fragment.children;
    } else {
      this.stack[this.stack.length - 1].alt = value;
    }
  }

  function onexitresourcedestinationstring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].url = data;
  }

  function onexitresourcetitlestring() {
    var data = this.resume();
    this.stack[this.stack.length - 1].title = data;
  }

  function onexitresource() {
    setData('inReference');
  }

  function onenterreference() {
    setData('referenceType', 'collapsed');
  }

  function onexitreferencestring(token) {
    var label = this.resume();
    this.stack[this.stack.length - 1].label = label;
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier_1(
      this.sliceSerialize(token)
    ).toLowerCase();
    setData('referenceType', 'full');
  }

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type);
  }

  function onexitcharacterreferencevalue(token) {
    var data = this.sliceSerialize(token);
    var type = getData('characterReferenceType');
    var value;
    var tail;

    if (type) {
      value = safeFromInt_1(
        data,
        type === 'characterReferenceMarkerNumeric' ? 10 : 16
      );

      setData('characterReferenceType');
    } else {
      value = decodeEntity_1(data);
    }

    tail = this.stack.pop();
    tail.value += value;
    tail.position.end = point(token.end);
  }

  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token);
  }

  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    this.stack[this.stack.length - 1].url =
      'mailto:' + this.sliceSerialize(token);
  }

  //
  // Creaters.
  //

  function blockQuote() {
    return {type: 'blockquote', children: []}
  }

  function codeFlow() {
    return {type: 'code', lang: null, meta: null, value: ''}
  }

  function codeText() {
    return {type: 'inlineCode', value: ''}
  }

  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    }
  }

  function emphasis() {
    return {type: 'emphasis', children: []}
  }

  function heading() {
    return {type: 'heading', depth: undefined, children: []}
  }

  function hardBreak() {
    return {type: 'break'}
  }

  function html() {
    return {type: 'html', value: ''}
  }

  function image() {
    return {type: 'image', title: null, url: '', alt: null}
  }

  function link() {
    return {type: 'link', title: null, url: '', children: []}
  }

  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    }
  }

  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    }
  }

  function paragraph() {
    return {type: 'paragraph', children: []}
  }

  function strong() {
    return {type: 'strong', children: []}
  }

  function text() {
    return {type: 'text', value: ''}
  }

  function thematicBreak() {
    return {type: 'thematicBreak'}
  }
}

function configure(config, extensions) {
  var index = -1;

  while (++index < extensions.length) {
    extension$1(config, extensions[index]);
  }

  return config
}

function extension$1(config, extension) {
  var key;
  var left;

  for (key in extension) {
    left = hasOwnProperty_1.call(config, key) ? config[key] : (config[key] = {});

    if (key === 'canContainEols') {
      config[key] = [].concat(left, extension[key]);
    } else {
      Object.assign(left, extension[key]);
    }
  }
}

var mdastUtilFromMarkdown = dist;

var remarkParse = parse$1;



function parse$1(options) {
  var self = this;

  this.Parser = parse;

  function parse(doc) {
    return mdastUtilFromMarkdown(
      doc,
      Object.assign({}, self.data('settings'), options, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: self.data('micromarkExtensions') || [],
        mdastExtensions: self.data('fromMarkdownExtensions') || []
      })
    )
  }
}

var tokenize$n = tokenizeMathFenced;
var concrete$2 = true;




function tokenizeMathFenced(effects, ok, nok) {
  var self = this;
  var initialPrefix = prefixSize_1(this.events, 'linePrefix');
  var sizeOpen = 0;

  return start

  function start(code) {
    /* istanbul ignore if - handled by mm */
    if (code !== 36) throw new Error('expected `$`')

    effects.enter('mathFlow');
    effects.enter('mathFlowFence');
    effects.enter('mathFlowFenceSequence');
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === 36) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen
    }

    effects.exit('mathFlowFenceSequence');
    return sizeOpen < 2
      ? nok(code)
      : factorySpace(effects, metaOpen, 'whitespace')(code)
  }

  function metaOpen(code) {
    if (code === null || code === -5 || code === -4 || code === -3) {
      return openAfter(code)
    }

    effects.enter('mathFlowFenceMeta');
    effects.enter('chunkString', {contentType: 'string'});
    return meta(code)
  }

  function meta(code) {
    if (code === null || code === -5 || code === -4 || code === -3) {
      effects.exit('chunkString');
      effects.exit('mathFlowFenceMeta');
      return openAfter(code)
    }

    if (code === 36) return nok(code)
    effects.consume(code);
    return meta
  }

  function openAfter(code) {
    effects.exit('mathFlowFence');
    return self.interrupt ? ok(code) : content(code)
  }

  function content(code) {
    if (code === null) {
      return after(code)
    }

    if (code === -5 || code === -4 || code === -3) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return effects.attempt(
        {tokenize: tokenizeClosingFence, partial: true},
        after,
        initialPrefix
          ? factorySpace(effects, content, 'linePrefix', initialPrefix + 1)
          : content
      )
    }

    effects.enter('mathFlowValue');
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === null || code === -5 || code === -4 || code === -3) {
      effects.exit('mathFlowValue');
      return content(code)
    }

    effects.consume(code);
    return contentContinue
  }

  function after(code) {
    effects.exit('mathFlow');
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0;

    return factorySpace(effects, closingPrefixAfter, 'linePrefix', 4)

    function closingPrefixAfter(code) {
      effects.enter('mathFlowFence');
      effects.enter('mathFlowFenceSequence');
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === 36) {
        effects.consume(code);
        size++;
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('mathFlowFenceSequence');
      return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
    }

    function closingSequenceEnd(code) {
      if (code === null || code === -5 || code === -4 || code === -3) {
        effects.exit('mathFlowFence');
        return ok(code)
      }

      return nok(code)
    }
  }
}

var tokenizeMathFlow = {
	tokenize: tokenize$n,
	concrete: concrete$2
};

var tokenize$o = tokenizeMathText;
var resolve$4 = resolveMathText;
var previous_1$1 = previous$1;

function resolveMathText(events) {
  var tailExitIndex = events.length - 4;
  var headEnterIndex = 3;
  var index;
  var enter;

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === 'lineEnding' ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === 'lineEnding' ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex;

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === 'mathTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = 'mathTextPadding';
        events[headEnterIndex][1].type = 'mathTextPadding';
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1;
  tailExitIndex++;

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index;
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === 'lineEnding'
    ) {
      events[enter][1].type = 'mathTextData';

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }

      enter = undefined;
    }
  }

  return events
}

function previous$1(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 36 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

function tokenizeMathText(effects, ok, nok) {
  var self = this;
  var sizeOpen = 0;
  var size;
  var token;

  return start

  function start(code) {
    /* istanbul ignore if - handled by mm */
    if (code !== 36) throw new Error('expected `$`')

    /* istanbul ignore if - handled by mm */
    if (!previous$1.call(self, self.previous)) {
      throw new Error('expected correct previous')
    }

    effects.enter('mathText');
    effects.enter('mathTextSequence');
    return openingSequence(code)
  }

  function openingSequence(code) {
    if (code === 36) {
      effects.consume(code);
      sizeOpen++;
      return openingSequence
    }

    effects.exit('mathTextSequence');
    return gap(code)
  }

  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code)
    }

    // Closing fence?
    // Could also be data.
    if (code === 36) {
      token = effects.enter('mathTextSequence');
      size = 0;
      return closingSequence(code)
    }

    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === 32) {
      effects.enter('space');
      effects.consume(code);
      effects.exit('space');
      return gap
    }

    if (code === -5 || code === -4 || code === -3) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return gap
    }

    // Data.
    effects.enter('mathTextData');
    return data(code)
  }

  // In code.
  function data(code) {
    if (
      code === null ||
      code === 32 ||
      code === 36 ||
      code === -5 ||
      code === -4 ||
      code === -3
    ) {
      effects.exit('mathTextData');
      return gap(code)
    }

    effects.consume(code);
    return data
  }

  // Closing fence.
  function closingSequence(code) {
    // More.
    if (code === 36) {
      effects.consume(code);
      size++;
      return closingSequence
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit('mathTextSequence');
      effects.exit('mathText');
      return ok(code)
    }

    // More or less accents: mark as data.
    token.type = 'mathTextData';
    return data(code)
  }
}

var tokenizeMathText_1 = {
	tokenize: tokenize$o,
	resolve: resolve$4,
	previous: previous_1$1
};

var flow$2 = {36: tokenizeMathFlow};
var text$2 = {36: tokenizeMathText_1};

var syntax = {
	flow: flow$2,
	text: text$2
};

var micromarkExtensionMath = syntax;

var enter = {
  mathFlow: enterMathFlow,
  mathFlowFenceMeta: enterMathFlowMeta,
  mathText: enterMathText
};
var exit = {
  mathFlow: exitMathFlow,
  mathFlowFence: exitMathFlowFence,
  mathFlowFenceMeta: exitMathFlowMeta,
  mathFlowValue: exitMathData,
  mathText: exitMathText,
  mathTextData: exitMathData
};

function enterMathFlow(token) {
  this.enter(
    {
      type: 'math',
      meta: null,
      value: '',
      data: {
        hName: 'div',
        hProperties: {className: ['math', 'math-display']},
        hChildren: [{type: 'text', value: ''}]
      }
    },
    token
  );
}

function enterMathFlowMeta() {
  this.buffer();
}

function exitMathFlowMeta() {
  var data = this.resume();
  this.stack[this.stack.length - 1].meta = data;
}

function exitMathFlowFence() {
  // Exit if this is the closing fence.
  if (this.getData('mathFlowInside')) return
  this.buffer();
  this.setData('mathFlowInside', true);
}

function exitMathFlow(token) {
  var data = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
  var node = this.exit(token);
  node.value = data;
  node.data.hChildren[0].value = data;
  this.setData('mathFlowInside');
}

function enterMathText(token) {
  this.enter(
    {
      type: 'inlineMath',
      value: '',
      data: {
        hName: 'span',
        hProperties: {className: ['math', 'math-inline']},
        hChildren: [{type: 'text', value: ''}]
      }
    },
    token
  );
  this.buffer();
}

function exitMathText(token) {
  var data = this.resume();
  var node = this.exit(token);
  node.value = data;
  node.data.hChildren[0].value = data;
}

function exitMathData(token) {
  this.config.enter.data.call(this, token);
  this.config.exit.data.call(this, token);
}

var fromMarkdown$1 = {
	enter: enter,
	exit: exit
};

/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

var repeatString = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

var longestStreak_1 = longestStreak;

// Get the count of the longest repeating streak of `character` in `value`.
function longestStreak(value, character) {
  var count = 0;
  var maximum = 0;
  var expected;
  var index;

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character')
  }

  value = String(value);
  index = value.indexOf(character);
  expected = index;

  while (index !== -1) {
    count++;

    if (index === expected) {
      if (count > maximum) {
        maximum = count;
      }
    } else {
      count = 1;
    }

    expected = index + 1;
    index = value.indexOf(character, expected);
  }

  return maximum
}

var safe_1 = safe;

function safe(context, input, config) {
  var value = (config.before || '') + (input || '') + (config.after || '');
  var positions = [];
  var result = [];
  var infos = {};
  var index = -1;
  var before;
  var after;
  var position;
  var pattern;
  var expression;
  var match;
  var start;
  var end;

  while (++index < context.unsafePatterns.length) {
    pattern = context.unsafePatterns[index];

    if (
      !inScope(context.stack, pattern.inConstruct, true) ||
      inScope(context.stack, pattern.notInConstruct)
    ) {
      continue
    }

    expression =
      pattern._compiled || (pattern._compiled = toExpression(pattern));

    while ((match = expression.exec(value))) {
      before = 'before' in pattern || pattern.atBreak;
      after = 'after' in pattern;
      position = match.index + (before ? match[1].length : 0);

      if (positions.indexOf(position) === -1) {
        positions.push(position);
        infos[position] = {before: before, after: after};
      } else {
        if (infos[position].before && !before) {
          infos[position].before = false;
        }

        if (infos[position].after && !after) {
          infos[position].after = false;
        }
      }
    }
  }

  positions.sort(numerical);

  start = config.before ? config.before.length : 0;
  end = value.length - (config.after ? config.after.length : 0);
  index = -1;

  while (++index < positions.length) {
    position = positions[index];

    if (
      // Character before or after matched:
      position < start ||
      position >= end
    ) {
      continue
    }

    // If this character is supposed to be escaped because it has a condition on
    // the next character, and the next character is definitly being escaped,
    // then skip this escape.
    if (
      position + 1 < end &&
      positions[index + 1] === position + 1 &&
      infos[position].after &&
      !infos[position + 1].before &&
      !infos[position + 1].after
    ) {
      continue
    }

    if (start !== position) {
      result.push(value.slice(start, position));
    }

    start = position;

    if (
      /[!-/:-@[-`{-~]/.test(value.charAt(position)) &&
      (!config.encode || config.encode.indexOf(value.charAt(position)) === -1)
    ) {
      // Character escape.
      result.push('\\');
    } else {
      // Character reference.
      result.push(
        '&#x' + value.charCodeAt(position).toString(16).toUpperCase() + ';'
      );
      start++;
    }
  }

  result.push(value.slice(start, end));

  return result.join('')
}

function inScope(stack, list, none) {
  var index;

  if (!list) {
    return none
  }

  if (typeof list === 'string') {
    list = [list];
  }

  index = -1;

  while (++index < list.length) {
    if (stack.indexOf(list[index]) !== -1) {
      return true
    }
  }

  return false
}

function toExpression(pattern) {
  var before = pattern.before ? '(?:' + pattern.before + ')' : '';
  var after = pattern.after ? '(?:' + pattern.after + ')' : '';

  if (pattern.atBreak) {
    before = '[\\r\\n][\\t ]*' + before;
  }

  return new RegExp(
    (before ? '(' + before + ')' : '') +
      (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
      pattern.character +
      (after || ''),
    'g'
  )
}

function numerical(a, b) {
  return a - b
}

var unsafe = [
  {character: '\r', inConstruct: ['mathFlowMeta']},
  {character: '\r', inConstruct: ['mathFlowMeta']},
  {character: '$', inConstruct: ['mathFlowMeta', 'phrasing']},
  {atBreak: true, character: '$', after: '\\$'}
];

var handlers = {math: math, inlineMath: inlineMath};

inlineMath.peek = inlineMathPeek;





function math(node, _, context) {
  var raw = node.value || '';
  var fence = repeatString('$', Math.max(longestStreak_1(raw, '$') + 1, 2));
  var exit = context.enter('mathFlow');
  var value = fence;
  var subexit;

  if (node.meta) {
    subexit = context.enter('mathFlowMeta');
    value += safe_1(context, node.meta, {before: '$', after: ' ', encode: ['$']});
    subexit();
  }

  value += '\n';

  if (raw) {
    value += raw + '\n';
  }

  value += fence;
  exit();
  return value
}

function inlineMath(node) {
  var value = node.value || '';
  var size = 1;
  var pad = '';
  var sequence;

  // If there is a single dollar sign on its own in the math, use a fence of
  // two.
  // If there are two in a row, use one.
  while (
    new RegExp('(^|[^$])' + repeatString('\\$', size) + '([^$]|$)').test(value)
  ) {
    size++;
  }

  // If this is not just spaces or eols (tabs don’t count), and either the first
  // or last character are a space, eol, or dollar sign, then pad with spaces.
  if (
    /[^ \r\n]/.test(value) &&
    (/[ \r\n$]/.test(value.charAt(0)) ||
      /[ \r\n$]/.test(value.charAt(value.length - 1)))
  ) {
    pad = ' ';
  }

  sequence = repeatString('$', size);
  return sequence + pad + value + pad + sequence
}

function inlineMathPeek() {
  return '$'
}

var toMarkdown = {
	unsafe: unsafe,
	handlers: handlers
};

var warningIssued;

var remarkMath = math$1;

function math$1() {
  var data = this.data();

  /* istanbul ignore next - old remark. */
  if (
    !warningIssued &&
    ((this.Parser &&
      this.Parser.prototype &&
      this.Parser.prototype.blockTokenizers) ||
      (this.Compiler &&
        this.Compiler.prototype &&
        this.Compiler.prototype.visitors))
  ) {
    warningIssued = true;
    console.warn(
      '[remark-math] Warning: please upgrade to remark 13 to use this plugin'
    );
  }

  add('micromarkExtensions', micromarkExtensionMath);
  add('fromMarkdownExtensions', fromMarkdown$1);
  add('toMarkdownExtensions', toMarkdown);

  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value);
    else data[field] = [value];
  }
}

var domain = {tokenize: tokenizeDomain};
var path = {tokenize: tokenizePath};
var punctuation = {tokenize: tokenizePunctuation};
var paren = {tokenize: tokenizeParen};
var namedCharacterReference = {tokenize: tokenizeNamedCharacterReference};

var wwwAutolink = {tokenize: tokenizeWwwAutolink, previous: previous$2};
var httpAutolink = {tokenize: tokenizeHttpAutolink, previous: previous$2};
var emailAutolink = {tokenize: tokenizeEmailAutolink, previous: previous$2};

var text$3 = {};

// Export hooked constructs.
var text_1$1 = text$3;

// `0`
var code = 48;

// While the code is smaller than `{`.
while (code < 123) {
  text$3[code] = emailAutolink;
  code++;
  // Jump from `:` -> `A`
  if (code === 58) code = 65;
  // Jump from `[` -> `a`
  else if (code === 91) code = 97;
}

// `+`
text$3[43] = emailAutolink;
// `-`
text$3[45] = emailAutolink;
// `.`
text$3[46] = emailAutolink;
// `_`
text$3[95] = emailAutolink;
// `h`.
text$3[72] = [emailAutolink, httpAutolink];
text$3[104] = [emailAutolink, httpAutolink];
// `w`.
text$3[87] = [emailAutolink, wwwAutolink];
text$3[119] = [emailAutolink, wwwAutolink];

function tokenizeEmailAutolink(effects, ok, nok) {
  var self = this;
  var hasDot;

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (!gfmAtext(code) || !previous$2(self.previous)) {
      return nok(code)
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkEmail');
    return atext(code)
  }

  function atext(code) {
    if (gfmAtext(code)) {
      effects.consume(code);
      return atext
    }

    // `@`
    if (code === 64) {
      effects.consume(code);
      return label
    }

    return nok(code)
  }

  function label(code) {
    // `.`
    if (code === 46) {
      return effects.check(punctuation, done, dotContinuation)(code)
    }

    if (
      // `-`
      code === 45 ||
      // `_`
      code === 95
    ) {
      return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code)
    }

    if (asciiAlphanumeric(code)) {
      effects.consume(code);
      return label
    }

    return done(code)
  }

  function dotContinuation(code) {
    effects.consume(code);
    hasDot = true;
    return label
  }

  function dashOrUnderscoreContinuation(code) {
    effects.consume(code);
    return afterDashOrUnderscore
  }

  function afterDashOrUnderscore(code) {
    // `.`
    if (code === 46) {
      return effects.check(punctuation, nok, dotContinuation)(code)
    }

    return label(code)
  }

  function done(code) {
    if (hasDot) {
      effects.exit('literalAutolinkEmail');
      effects.exit('literalAutolink');
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeWwwAutolink(effects, ok, nok) {
  var self = this;

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if ((code !== 87 && code - 32 !== 87) || !previous$2(self.previous)) {
      return nok(code)
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkWww');
    effects.consume(code);
    return w2
  }

  function w2(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code);
      return w3
    }

    return nok(code)
  }

  function w3(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code);
      return dot
    }

    return nok(code)
  }

  function dot(code) {
    // `.`
    if (code === 46) {
      effects.consume(code);
      return effects.attempt(domain, effects.attempt(path, done), nok)
    }

    return nok(code)
  }

  function done(code) {
    effects.exit('literalAutolinkWww');
    effects.exit('literalAutolink');
    return ok(code)
  }
}

function tokenizeHttpAutolink(effects, ok, nok) {
  var self = this;

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if ((code !== 72 && code - 32 !== 72) || !previous$2(self.previous)) {
      return nok(code)
    }

    effects.enter('literalAutolink');
    effects.enter('literalAutolinkHttp');
    effects.consume(code);
    return t1
  }

  function t1(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code);
      return t2
    }

    return nok(code)
  }

  function t2(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code);
      return p
    }

    return nok(code)
  }

  function p(code) {
    // `p`
    if (code === 80 || code - 32 === 80) {
      effects.consume(code);
      return s
    }

    return nok(code)
  }

  function s(code) {
    // `s`
    if (code === 83 || code - 32 === 83) {
      effects.consume(code);
      return colon
    }

    return colon(code)
  }

  function colon(code) {
    // `:`
    if (code === 58) {
      effects.consume(code);
      return slash1
    }

    return nok(code)
  }

  function slash1(code) {
    // `/`
    if (code === 47) {
      effects.consume(code);
      return slash2
    }

    return nok(code)
  }

  function slash2(code) {
    // `/`
    if (code === 47) {
      effects.consume(code);
      return effects.attempt(domain, effects.attempt(path, done), nok)
    }

    return nok(code)
  }

  function done(code) {
    effects.exit('literalAutolinkHttp');
    effects.exit('literalAutolink');
    return ok(code)
  }
}

function tokenizeDomain(effects, ok, nok) {
  var hasUnderscoreInLastSegment;
  var hasUnderscoreInLastLastSegment;
  var hasDot;

  return start

  function start(code) {
    effects.enter('literalAutolinkDomain');
    return domain(code)
  }

  function domain(code) {
    if (
      // `-`
      code === 45 ||
      // `_`
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      if (code === 95) {
        hasUnderscoreInLastSegment = true;
      }

      effects.consume(code);
      return domain
    }

    // `.`
    if (code === 46) {
      return effects.check(punctuation, done, dotContinuation)(code)
    }

    return done(code)
  }

  function dotContinuation(code) {
    effects.consume(code);
    hasDot = true;
    hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment;
    hasUnderscoreInLastSegment = undefined;
    return domain
  }

  function done(code) {
    if (
      hasDot &&
      !hasUnderscoreInLastLastSegment &&
      !hasUnderscoreInLastSegment
    ) {
      effects.exit('literalAutolinkDomain');
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizePath(effects, ok) {
  var balance = 0;

  return start

  function start(code) {
    if (pathEnd(code)) {
      return ok(code)
    }

    if (trailingPunctuation(code)) {
      return effects.check(punctuation, ok, atPathStart)(code)
    }

    return atPathStart(code)
  }

  function atPathStart(code) {
    effects.enter('literalAutolinkWwwPath');
    return inPath(code)
  }

  function inPath(code) {
    // `&`
    if (code === 38) {
      return effects.check(
        namedCharacterReference,
        atPathEnd,
        continuedPunctuation
      )(code)
    }

    // `(`
    if (code === 40) {
      balance++;
    }

    // `)`
    if (code === 41) {
      return effects.check(paren, parenAtPathEnd, continuedPunctuation)(code)
    }

    if (pathEnd(code)) {
      return atPathEnd(code)
    }

    if (trailingPunctuation(code)) {
      return effects.check(punctuation, atPathEnd, continuedPunctuation)(code)
    }

    effects.consume(code);
    return inPath
  }

  function continuedPunctuation(code) {
    effects.consume(code);
    return inPath
  }

  function parenAtPathEnd(code) {
    balance--;
    return balance < 0 ? atPathEnd(code) : continuedPunctuation(code)
  }

  function atPathEnd(code) {
    effects.exit('literalAutolinkWwwPath');
    return ok(code)
  }
}

function tokenizeNamedCharacterReference(effects, ok, nok) {
  return start

  function start(code) {
    // Assume an ampersand.
    effects.enter('literalAutolinkCharacterReferenceNamed');
    effects.consume(code);
    return inside
  }

  function inside(code) {
    if (asciiAlpha(code)) {
      effects.consume(code);
      return inside
    }

    // `;`
    if (code === 59) {
      effects.consume(code);
      return after
    }

    return nok(code)
  }

  function after(code) {
    // If the named character reference is followed by the end of the path, it’s
    // not continued punctuation.
    effects.exit('literalAutolinkCharacterReferenceNamed');
    return pathEnd(code) ? ok(code) : nok(code)
  }
}

function tokenizeParen(effects, ok, nok) {
  return start

  function start(code) {
    // Assume a right paren.
    effects.enter('literalAutolinkParen');
    effects.consume(code);
    return after
  }

  function after(code) {
    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    effects.exit('literalAutolinkParen');
    return pathEnd(code) ||
      // `)`
      code === 41
      ? ok(code)
      : nok(code)
  }
}

function tokenizePunctuation(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('literalAutolinkPunctuation');
    // Always a valid trailing punctuation marker.
    effects.consume(code);
    return after
  }

  function after(code) {
    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    effects.exit('literalAutolinkPunctuation');
    return pathEnd(code) ? ok(code) : nok(code)
  }
}

function trailingPunctuation(code) {
  return (
    // Exclamation mark.
    code === 33 ||
    // Asterisk.
    code === 42 ||
    // Comma.
    code === 44 ||
    // Dot.
    code === 46 ||
    // Colon.
    code === 58 ||
    // Question mark.
    code === 63 ||
    // Underscore.
    code === 95 ||
    // Tilde.
    code === 126
  )
}

function pathEnd(code) {
  return (
    // EOF.
    code === null ||
    // CR, LF, CRLF, HT, VS.
    code < 0 ||
    // Space.
    code === 32 ||
    // Less than.
    code === 60
  )
}

function gfmAtext(code) {
  return (
    // `+`
    code === 43 ||
    // `-`
    code === 45 ||
    // `.`
    code === 46 ||
    // `_`
    code === 95 ||
    asciiAlphanumeric(code)
  )
}

function previous$2(code) {
  return (
    // EOF.
    code === null ||
    // CR, LF, CRLF, HT, VS.
    code < 0 ||
    // Space.
    code === 32 ||
    // Left paren.
    code === 40 ||
    // Asterisk.
    code === 42 ||
    // Underscore.
    code === 95 ||
    // Tilde.
    code === 126
  )
}

var syntax$1 = {
	text: text_1$1
};

var micromarkExtensionGfmAutolinkLiteral = syntax$1;

var micromarkExtensionGfmStrikethrough = create;






function create(options) {
  var settings = options || {};
  var single = settings.singleTilde;
  var tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };

  if (single === null || single === undefined) {
    single = true;
  }

  return {text: {126: tokenizer}, insideSpan: {null: tokenizer}}

  // Take events and resolve strikethrough.
  function resolveAllStrikethrough(events, context) {
    var index = -1;
    var strikethrough;
    var text;
    var open;
    var nextEvents;

    // Walk through all events.
    while (++index < events.length) {
      // Find a token that can close.
      if (
        events[index][0] === 'enter' &&
        events[index][1].type === 'strikethroughSequenceTemporary' &&
        events[index][1]._close
      ) {
        open = index;

        // Now walk back to find an opener.
        while (open--) {
          // Find a token that can open the closer.
          if (
            events[open][0] === 'exit' &&
            events[open][1].type === 'strikethroughSequenceTemporary' &&
            events[open][1]._open &&
            // If the sizes are the same:
            events[index][1].end.offset - events[index][1].start.offset ===
              events[open][1].end.offset - events[open][1].start.offset
          ) {
            events[index][1].type = 'strikethroughSequence';
            events[open][1].type = 'strikethroughSequence';

            strikethrough = {
              type: 'strikethrough',
              start: shallow_1(events[open][1].start),
              end: shallow_1(events[index][1].end)
            };

            text = {
              type: 'strikethroughText',
              start: shallow_1(events[open][1].end),
              end: shallow_1(events[index][1].start)
            };

            // Opening.
            nextEvents = [
              ['enter', strikethrough, context],
              ['enter', events[open][1], context],
              ['exit', events[open][1], context],
              ['enter', text, context]
            ];

            // Between.
            chunkedSplice_1(
              nextEvents,
              nextEvents.length,
              0,
              resolveAll_1(
                context.parser.constructs.insideSpan.null,
                events.slice(open + 1, index),
                context
              )
            );

            // Closing.
            chunkedSplice_1(nextEvents, nextEvents.length, 0, [
              ['exit', text, context],
              ['enter', events[index][1], context],
              ['exit', events[index][1], context],
              ['exit', strikethrough, context]
            ]);

            chunkedSplice_1(events, open - 1, index - open + 3, nextEvents);

            index = open + nextEvents.length - 2;
            break
          }
        }
      }
    }

    return removeRemainingSequences(events)
  }

  function removeRemainingSequences(events) {
    var index = -1;
    var length = events.length;

    while (++index < length) {
      if (events[index][1].type === 'strikethroughSequenceTemporary') {
        events[index][1].type = 'data';
      }
    }

    return events
  }

  function tokenizeStrikethrough(effects, ok, nok) {
    var previous = this.previous;
    var events = this.events;
    var size = 0;

    return start

    function start(code) {
      if (
        code !== 126 ||
        (previous === 126 &&
          events[events.length - 1][1].type !== 'characterEscape')
      ) {
        return nok(code)
      }

      effects.enter('strikethroughSequenceTemporary');
      return more(code)
    }

    function more(code) {
      var before = classifyCharacter_1(previous);
      var token;
      var after;

      if (code === 126) {
        // If this is the third marker, exit.
        if (size > 1) return nok(code)
        effects.consume(code);
        size++;
        return more
      }

      if (size < 2 && !single) return nok(code)
      token = effects.exit('strikethroughSequenceTemporary');
      after = classifyCharacter_1(code);
      token._open = !after || (after === 2 && before);
      token._close = !before || (before === 2 && after);
      return ok(code)
    }
  }
}

var flow$3 = {
  null: {tokenize: tokenizeTable, resolve: resolveTable, interruptible: true}
};



var setextUnderlineMini = {tokenize: tokenizeSetextUnderlineMini, partial: true};
var nextPrefixedOrBlank = {tokenize: tokenizeNextPrefixedOrBlank, partial: true};

function resolveTable(events, context) {
  var length = events.length;
  var index = -1;
  var token;
  var inHead;
  var inDelimiterRow;
  var inRow;
  var cell;
  var content;
  var text;
  var contentStart;
  var contentEnd;
  var cellStart;

  while (++index < length) {
    token = events[index][1];

    if (inRow) {
      if (token.type === 'temporaryTableCellContent') {
        contentStart = contentStart || index;
        contentEnd = index;
      }

      if (
        // Combine separate content parts into one.
        (token.type === 'tableCellDivider' || token.type === 'tableRow') &&
        contentEnd
      ) {
        content = {
          type: 'tableContent',
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        };
        text = {
          type: 'chunkText',
          start: content.start,
          end: content.end,
          contentType: 'text'
        };

        events.splice(
          contentStart,
          contentEnd - contentStart + 1,
          ['enter', content, context],
          ['enter', text, context],
          ['exit', text, context],
          ['exit', content, context]
        );
        index -= contentEnd - contentStart - 3;
        length = events.length;
        contentStart = undefined;
        contentEnd = undefined;
      }
    }

    if (
      events[index][0] === 'exit' &&
      (token.type === 'tableCellDivider' || token.type === 'tableRow') &&
      cellStart &&
      cellStart + 1 < index
    ) {
      cell = {
        type: inDelimiterRow
          ? 'tableDelimiter'
          : inHead
          ? 'tableHeader'
          : 'tableData',
        start: events[cellStart][1].start,
        end: events[index][1].end
      };
      events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, [
        'exit',
        cell,
        context
      ]);
      events.splice(cellStart, 0, ['enter', cell, context]);
      index += 2;
      length = events.length;
      cellStart = index + 1;
    }

    if (token.type === 'tableRow') {
      inRow = events[index][0] === 'enter';

      if (inRow) {
        cellStart = index + 1;
      }
    }

    if (token.type === 'tableDelimiterRow') {
      inDelimiterRow = events[index][0] === 'enter';

      if (inDelimiterRow) {
        cellStart = index + 1;
      }
    }

    if (token.type === 'tableHead') {
      inHead = events[index][0] === 'enter';
    }
  }

  return events
}

function tokenizeTable(effects, ok, nok) {
  var align = [];
  var tableHeaderCount = 0;
  var seenDelimiter;
  var hasDash;

  return start

  function start(code) {
    /* istanbul ignore if - used to be passed in beta micromark versions. */
    if (code === null || code === -5 || code === -4 || code === -3) {
      return nok(code)
    }

    effects.enter('table')._align = align;
    effects.enter('tableHead');
    effects.enter('tableRow');

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      return cellDividerHead(code)
    }

    tableHeaderCount++;
    effects.enter('temporaryTableCellContent');
    // Can’t be space or eols at the start of a construct, so we’re in a cell.
    return inCellContentHead(code)
  }

  function cellDividerHead(code) {
    // Always a pipe.
    effects.enter('tableCellDivider');
    effects.consume(code);
    effects.exit('tableCellDivider');
    seenDelimiter = true;
    return cellBreakHead
  }

  function cellBreakHead(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndHead(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceHead
    }

    if (seenDelimiter) {
      seenDelimiter = undefined;
      tableHeaderCount++;
    }

    // `|`
    if (code === 124) {
      return cellDividerHead(code)
    }

    // Anything else is cell content.
    effects.enter('temporaryTableCellContent');
    return inCellContentHead(code)
  }

  function inWhitespaceHead(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code);
      return inWhitespaceHead
    }

    effects.exit('whitespace');
    return cellBreakHead(code)
  }

  function inCellContentHead(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent');
      return cellBreakHead(code)
    }

    effects.consume(code);
    // `\`
    return code === 92 ? inCellContentEscapeHead : inCellContentHead
  }

  function inCellContentEscapeHead(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code);
      return inCellContentHead
    }

    // Anything else.
    return inCellContentHead(code)
  }

  function atRowEndHead(code) {
    if (code === null) {
      return nok(code)
    }

    effects.exit('tableRow');
    effects.exit('tableHead');

    // Always a line ending.
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');

    // If a setext heading, exit.
    return effects.check(
      setextUnderlineMini,
      nok,
      // Support an indent before the delimiter row.
      factorySpace(effects, rowStartDelimiter, 'linePrefix', 4)
    )
  }

  function rowStartDelimiter(code) {
    // If there’s another space, or we’re at the EOL/EOF, exit.
    if (code === null || code < 0 || code === 32) {
      return nok(code)
    }

    effects.enter('tableDelimiterRow');
    return atDelimiterRowBreak(code)
  }

  function atDelimiterRowBreak(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceDelimiter
    }

    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller');
      effects.consume(code);
      hasDash = true;
      align.push(null);
      return inFillerDelimiter
    }

    // `:`
    if (code === 58) {
      effects.enter('tableDelimiterAlignment');
      effects.consume(code);
      effects.exit('tableDelimiterAlignment');
      align.push('left');
      return afterLeftAlignment
    }

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return atDelimiterRowBreak
    }

    return nok(code)
  }

  function inWhitespaceDelimiter(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code);
      return inWhitespaceDelimiter
    }

    effects.exit('whitespace');
    return atDelimiterRowBreak(code)
  }

  function inFillerDelimiter(code) {
    // `-`
    if (code === 45) {
      effects.consume(code);
      return inFillerDelimiter
    }

    effects.exit('tableDelimiterFiller');

    // `:`
    if (code === 58) {
      effects.enter('tableDelimiterAlignment');
      effects.consume(code);
      effects.exit('tableDelimiterAlignment');

      align[align.length - 1] =
        align[align.length - 1] === 'left' ? 'center' : 'right';

      return afterRightAlignment
    }

    return atDelimiterRowBreak(code)
  }

  function afterLeftAlignment(code) {
    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller');
      effects.consume(code);
      hasDash = true;
      return inFillerDelimiter
    }

    // Anything else is not ok.
    return nok(code)
  }

  function afterRightAlignment(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceDelimiter
    }

    // `|`
    if (code === 124) {
      effects.enter('tableCellDivider');
      effects.consume(code);
      effects.exit('tableCellDivider');
      return atDelimiterRowBreak
    }

    return nok(code)
  }

  function rowEndDelimiter(code) {
    effects.exit('tableDelimiterRow');

    // Exit if there was no dash at all, or if the header cell count is not the
    // delimiter cell count.
    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code)
    }

    if (code === null) {
      return tableClose(code)
    }

    return effects.check(nextPrefixedOrBlank, tableClose, tableContinue)(code)
  }

  function tableClose(code) {
    effects.exit('table');
    return ok(code)
  }

  function tableContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    // We checked that it’s not a prefixed or blank line, so we’re certain a
    // body is coming, though it may be indented.
    return factorySpace(effects, bodyStart, 'linePrefix', 4)
  }

  function bodyStart(code) {
    effects.enter('tableBody');
    return rowStartBody(code)
  }

  function rowStartBody(code) {
    effects.enter('tableRow');

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      return cellDividerBody(code)
    }

    effects.enter('temporaryTableCellContent');
    // Can’t be space or eols at the start of a construct, so we’re in a cell.
    return inCellContentBody(code)
  }

  function cellDividerBody(code) {
    // Always a pipe.
    effects.enter('tableCellDivider');
    effects.consume(code);
    effects.exit('tableCellDivider');
    return cellBreakBody
  }

  function cellBreakBody(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndBody(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace');
      effects.consume(code);
      return inWhitespaceBody
    }

    // `|`
    if (code === 124) {
      return cellDividerBody(code)
    }

    // Anything else is cell content.
    effects.enter('temporaryTableCellContent');
    return inCellContentBody(code)
  }

  function inWhitespaceBody(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code);
      return inWhitespaceBody
    }

    effects.exit('whitespace');
    return cellBreakBody(code)
  }

  function inCellContentBody(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent');
      return cellBreakBody(code)
    }

    effects.consume(code);
    // `\`
    return code === 92 ? inCellContentEscapeBody : inCellContentBody
  }

  function inCellContentEscapeBody(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code);
      return inCellContentBody
    }

    // Anything else.
    return inCellContentBody(code)
  }

  function atRowEndBody(code) {
    effects.exit('tableRow');

    if (code === null) {
      return tableBodyClose(code)
    }

    return effects.check(
      nextPrefixedOrBlank,
      tableBodyClose,
      tableBodyContinue
    )(code)
  }

  function tableBodyClose(code) {
    effects.exit('tableBody');
    return tableClose(code)
  }

  function tableBodyContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding');
    effects.consume(code);
    effects.exit('lineEnding');
    // Support an optional prefix, then start a body row.
    return factorySpace(effects, rowStartBody, 'linePrefix', 4)
  }
}

// Based on micromark, but that won’t work as we’re in a table, and that expects
// content.
// <https://github.com/micromark/micromark/blob/main/lib/tokenize/setext-underline.js>
function tokenizeSetextUnderlineMini(effects, ok, nok) {
  return start

  function start(code) {
    // `-`
    if (code !== 45) {
      return nok(code)
    }

    effects.enter('setextUnderline');
    return sequence(code)
  }

  function sequence(code) {
    if (code === 45) {
      effects.consume(code);
      return sequence
    }

    return whitespace(code)
  }

  function whitespace(code) {
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code);
      return whitespace
    }

    if (code === null || code === -5 || code === -4 || code === -3) {
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
  var size = 0;

  return start

  function start(code) {
    // This is a check, so we don’t care about tokens, but we open a bogus one
    // so we’re valid.
    effects.enter('check');
    // EOL.
    effects.consume(code);
    return whitespace
  }

  function whitespace(code) {
    // VS or SP.
    if (code === -1 || code === 32) {
      effects.consume(code);
      size++;
      return size === 4 ? ok : whitespace
    }

    // EOF or whitespace
    if (code === null || code < 0) {
      return ok(code)
    }

    // Anything else.
    return nok(code)
  }
}

var syntax$2 = {
	flow: flow$3
};

var micromarkExtensionGfmTable = syntax$2;

var tasklistCheck = {tokenize: tokenizeTasklistCheck};

var text$4 = {91: tasklistCheck};

function tokenizeTasklistCheck(effects, ok, nok) {
  var self = this;

  return open

  function open(code) {
    if (
      // Exit if not `[`.
      code !== 91 ||
      // Exit if there’s stuff before.
      self.previous !== null ||
      // Exit if not in the first content that is the first child of a list
      // item.
      !self._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code)
    }

    effects.enter('taskListCheck');
    effects.enter('taskListCheckMarker');
    effects.consume(code);
    effects.exit('taskListCheckMarker');
    return inside
  }

  function inside(code) {
    // Tab or space.
    if (code === -2 || code === 32) {
      effects.enter('taskListCheckValueUnchecked');
      effects.consume(code);
      effects.exit('taskListCheckValueUnchecked');
      return close
    }

    // Upper- and lower `x`.
    if (code === 88 || code === 120) {
      effects.enter('taskListCheckValueChecked');
      effects.consume(code);
      effects.exit('taskListCheckValueChecked');
      return close
    }

    return nok(code)
  }

  function close(code) {
    // `]`
    if (code === 93) {
      effects.enter('taskListCheckMarker');
      effects.consume(code);
      effects.exit('taskListCheckMarker');
      effects.exit('taskListCheck');
      return effects.check({tokenize: spaceThenNonSpace}, ok, nok)
    }

    return nok(code)
  }
}

function spaceThenNonSpace(effects, ok, nok) {
  var self = this;

  return factorySpace(effects, after, 'whitespace')

  function after(code) {
    return prefixSize_1(self.events, 'whitespace') &&
      code !== null &&
      !markdownLineEndingOrSpace_1(code)
      ? ok(code)
      : nok(code)
  }
}

var syntax$3 = {
	text: text$4
};

var micromarkExtensionGfmTaskListItem = syntax$3;

var syntax$4 = create$1;

function create$1(options) {
  return combineExtensions_1([micromarkExtensionGfmAutolinkLiteral, micromarkExtensionGfmStrikethrough(options), micromarkExtensionGfmTable, micromarkExtensionGfmTaskListItem])
}

var micromarkExtensionGfm = syntax$4;

var enter$1 = {
  literalAutolink: enterLiteralAutolink,
  literalAutolinkEmail: enterLiteralAutolinkValue,
  literalAutolinkHttp: enterLiteralAutolinkValue,
  literalAutolinkWww: enterLiteralAutolinkValue
};
var exit$1 = {
  literalAutolink: exitLiteralAutolink,
  literalAutolinkEmail: exitLiteralAutolinkEmail,
  literalAutolinkHttp: exitLiteralAutolinkHttp,
  literalAutolinkWww: exitLiteralAutolinkWww
};

function enterLiteralAutolink(token) {
  this.enter({type: 'link', title: null, url: '', children: []}, token);
}

function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}

function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}

function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  this.stack[this.stack.length - 1].url = 'http://' + this.sliceSerialize(token);
}

function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}

function exitLiteralAutolink(token) {
  this.exit(token);
}

var fromMarkdown$2 = {
	enter: enter$1,
	exit: exit$1
};

var canContainEols = ['delete'];
var enter$2 = {strikethrough: enterStrikethrough};
var exit$2 = {strikethrough: exitStrikethrough};

function enterStrikethrough(token) {
  this.enter({type: 'delete', children: []}, token);
}

function exitStrikethrough(token) {
  this.exit(token);
}

var fromMarkdown$3 = {
	canContainEols: canContainEols,
	enter: enter$2,
	exit: exit$2
};

var enter$3 = {
  table: enterTable,
  tableData: enterCell,
  tableHeader: enterCell,
  tableRow: enterRow
};
var exit_1 = {
  codeText: exitCodeText,
  table: exitTable,
  tableData: exit$3,
  tableHeader: exit$3,
  tableRow: exit$3
};

function enterTable(token) {
  this.enter({type: 'table', align: token._align, children: []}, token);
  this.setData('inTable', true);
}

function exitTable(token) {
  this.exit(token);
  this.setData('inTable');
}

function enterRow(token) {
  this.enter({type: 'tableRow', children: []}, token);
}

function exit$3(token) {
  this.exit(token);
}

function enterCell(token) {
  this.enter({type: 'tableCell', children: []}, token);
}

// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
function exitCodeText(token) {
  var value = this.resume();

  if (this.getData('inTable')) {
    value = value.replace(/\\([\\|])/g, replace);
  }

  this.stack[this.stack.length - 1].value = value;
  this.exit(token);
}

function replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0
}

var fromMarkdown$4 = {
	enter: enter$3,
	exit: exit_1
};

var exit$4 = {
  taskListCheckValueChecked: exitCheck,
  taskListCheckValueUnchecked: exitCheck,
  paragraph: exitParagraphWithTaskListItem
};

function exitCheck(token) {
  // We’re always in a paragraph, in a list item.
  this.stack[this.stack.length - 2].checked =
    token.type === 'taskListCheckValueChecked';
}

function exitParagraphWithTaskListItem(token) {
  var parent = this.stack[this.stack.length - 2];
  var node = this.stack[this.stack.length - 1];
  var siblings = parent.children;
  var head = node.children[0];
  var index = -1;
  var firstParaghraph;

  if (
    parent &&
    parent.type === 'listItem' &&
    typeof parent.checked === 'boolean' &&
    head &&
    head.type === 'text'
  ) {
    while (++index < siblings.length) {
      if (siblings[index].type === 'paragraph') {
        firstParaghraph = siblings[index];
        break
      }
    }

    if (firstParaghraph === node) {
      // Must start with a space or a tab.
      head.value = head.value.slice(1);

      if (head.value.length === 0) {
        node.children.shift();
      } else {
        head.position.start.column++;
        head.position.start.offset++;
        node.position.start = Object.assign({}, head.position.start);
      }
    }
  }

  this.exit(token);
}

var fromMarkdown$5 = {
	exit: exit$4
};

var own$4 = {}.hasOwnProperty;

var fromMarkdown$6 = configure$1([
  fromMarkdown$2,
  fromMarkdown$3,
  fromMarkdown$4,
  fromMarkdown$5
]);

function configure$1(extensions) {
  var config = {canContainEols: []};
  var length = extensions.length;
  var index = -1;

  while (++index < length) {
    extension$2(config, extensions[index]);
  }

  return config
}

function extension$2(config, extension) {
  var key;
  var left;
  var right;

  for (key in extension) {
    left = own$4.call(config, key) ? config[key] : (config[key] = {});
    right = extension[key];

    if (key === 'canContainEols') {
      config[key] = [].concat(left, right);
    } else {
      Object.assign(left, right);
    }
  }
}

var inConstruct = 'phrasing';
var notInConstruct = ['autolink', 'link', 'image'];

var unsafe$1 = [
  {
    character: '@',
    before: '[+\\-.\\w]',
    after: '[\\-.\\w]',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  },
  {
    character: '.',
    before: '[Ww]',
    after: '[\\-.\\w]',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  },
  {
    character: ':',
    before: '[ps]',
    after: '\\/',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  }
];

var toMarkdown$1 = {
	unsafe: unsafe$1
};

var containerPhrasing = phrasing;

function phrasing(parent, context, safeOptions) {
  var children = parent.children || [];
  var results = [];
  var index = -1;
  var before = safeOptions.before;
  var after;
  var handle;
  var child;

  while (++index < children.length) {
    child = children[index];

    if (index + 1 < children.length) {
      handle = context.handle.handlers[children[index + 1].type];
      if (handle && handle.peek) handle = handle.peek;
      after = handle
        ? handle(children[index + 1], parent, context, {
            before: '',
            after: ''
          }).charAt(0)
        : '';
    } else {
      after = safeOptions.after;
    }

    results.push(
      context.handle(child, parent, context, {
        before: before,
        after: after
      })
    );
    before = results[results.length - 1].slice(-1);
  }

  return results.join('')
}

var unsafe$2 = [{character: '~', inConstruct: 'phrasing'}];
var handlers$1 = {delete: handleDelete};

handleDelete.peek = peekDelete;

function handleDelete(node, _, context) {
  var exit = context.enter('emphasis');
  var value = containerPhrasing(node, context, {before: '~', after: '~'});
  exit();
  return '~~' + value + '~~'
}

function peekDelete() {
  return '~'
}

var toMarkdown$2 = {
	unsafe: unsafe$2,
	handlers: handlers$1
};

var inlineCode_1 = inlineCode;
inlineCode.peek = inlineCodePeek;

function inlineCode(node) {
  var value = node.value || '';
  var sequence = '`';
  var pad = '';

  // If there is a single grave accent on its own in the code, use a fence of
  // two.
  // If there are two in a row, use one.
  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`';
  }

  // If this is not just spaces or eols (tabs don’t count), and either the
  // first or last character are a space, eol, or tick, then pad with spaces.
  if (
    /[^ \r\n]/.test(value) &&
    (/[ \r\n`]/.test(value.charAt(0)) ||
      /[ \r\n`]/.test(value.charAt(value.length - 1)))
  ) {
    pad = ' ';
  }

  return sequence + pad + value + pad + sequence
}

function inlineCodePeek() {
  return '`'
}

var markdownTable_1 = markdownTable;

var trailingWhitespace = / +$/;

// Characters.
var space = ' ';
var lineFeed = '\n';
var dash$1 = '-';
var colon$1 = ':';
var verticalBar = '|';

var x = 0;
var C = 67;
var L$1 = 76;
var R = 82;
var c = 99;
var l$1 = 108;
var r = 114;

// Create a table from a matrix of strings.
function markdownTable(table, options) {
  var settings = options || {};
  var padding = settings.padding !== false;
  var start = settings.delimiterStart !== false;
  var end = settings.delimiterEnd !== false;
  var align = (settings.align || []).concat();
  var alignDelimiters = settings.alignDelimiters !== false;
  var alignments = [];
  var stringLength = settings.stringLength || defaultStringLength;
  var rowIndex = -1;
  var rowLength = table.length;
  var cellMatrix = [];
  var sizeMatrix = [];
  var row = [];
  var sizes = [];
  var longestCellByColumn = [];
  var mostCellsPerRow = 0;
  var cells;
  var columnIndex;
  var columnLength;
  var largest;
  var size;
  var cell;
  var lines;
  var line;
  var before;
  var after;
  var code;

  // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.
  while (++rowIndex < rowLength) {
    cells = table[rowIndex];
    columnIndex = -1;
    columnLength = cells.length;
    row = [];
    sizes = [];

    if (columnLength > mostCellsPerRow) {
      mostCellsPerRow = columnLength;
    }

    while (++columnIndex < columnLength) {
      cell = serialize(cells[columnIndex]);

      if (alignDelimiters === true) {
        size = stringLength(cell);
        sizes[columnIndex] = size;

        largest = longestCellByColumn[columnIndex];

        if (largest === undefined || size > largest) {
          longestCellByColumn[columnIndex] = size;
        }
      }

      row.push(cell);
    }

    cellMatrix[rowIndex] = row;
    sizeMatrix[rowIndex] = sizes;
  }

  // Figure out which alignments to use.
  columnIndex = -1;
  columnLength = mostCellsPerRow;

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < columnLength) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    code = toAlignment(align);

    while (++columnIndex < columnLength) {
      alignments[columnIndex] = code;
    }
  }

  // Inject the alignment row.
  columnIndex = -1;
  columnLength = mostCellsPerRow;
  row = [];
  sizes = [];

  while (++columnIndex < columnLength) {
    code = alignments[columnIndex];
    before = '';
    after = '';

    if (code === l$1) {
      before = colon$1;
    } else if (code === r) {
      after = colon$1;
    } else if (code === c) {
      before = colon$1;
      after = colon$1;
    }

    // There *must* be at least one hyphen-minus in each alignment cell.
    size = alignDelimiters
      ? Math.max(
          1,
          longestCellByColumn[columnIndex] - before.length - after.length
        )
      : 1;

    cell = before + repeatString(dash$1, size) + after;

    if (alignDelimiters === true) {
      size = before.length + size + after.length;

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }

      sizes[columnIndex] = size;
    }

    row[columnIndex] = cell;
  }

  // Inject the alignment row.
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);

  rowIndex = -1;
  rowLength = cellMatrix.length;
  lines = [];

  while (++rowIndex < rowLength) {
    row = cellMatrix[rowIndex];
    sizes = sizeMatrix[rowIndex];
    columnIndex = -1;
    columnLength = mostCellsPerRow;
    line = [];

    while (++columnIndex < columnLength) {
      cell = row[columnIndex] || '';
      before = '';
      after = '';

      if (alignDelimiters === true) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
        code = alignments[columnIndex];

        if (code === r) {
          before = repeatString(space, size);
        } else if (code === c) {
          if (size % 2 === 0) {
            before = repeatString(space, size / 2);
            after = before;
          } else {
            before = repeatString(space, size / 2 + 0.5);
            after = repeatString(space, size / 2 - 0.5);
          }
        } else {
          after = repeatString(space, size);
        }
      }

      if (start === true && columnIndex === 0) {
        line.push(verticalBar);
      }

      if (
        padding === true &&
        // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(alignDelimiters === false && cell === '') &&
        (start === true || columnIndex !== 0)
      ) {
        line.push(space);
      }

      if (alignDelimiters === true) {
        line.push(before);
      }

      line.push(cell);

      if (alignDelimiters === true) {
        line.push(after);
      }

      if (padding === true) {
        line.push(space);
      }

      if (end === true || columnIndex !== columnLength - 1) {
        line.push(verticalBar);
      }
    }

    line = line.join('');

    if (end === false) {
      line = line.replace(trailingWhitespace, '');
    }

    lines.push(line);
  }

  return lines.join(lineFeed)
}

function serialize(value) {
  return value === null || value === undefined ? '' : String(value)
}

function defaultStringLength(value) {
  return value.length
}

function toAlignment(value) {
  var code = typeof value === 'string' ? value.charCodeAt(0) : x;

  return code === L$1 || code === l$1
    ? l$1
    : code === R || code === r
    ? r
    : code === C || code === c
    ? c
    : x
}

var toMarkdown_1 = toMarkdown$3;

function toMarkdown$3(options) {
  var settings = options || {};
  var padding = settings.tableCellPadding;
  var alignDelimiters = settings.tablePipeAlign;
  var stringLength = settings.stringLength;
  var around = padding ? ' ' : '|';

  return {
    unsafe: [
      {character: '\r', inConstruct: 'tableCell'},
      {character: '\n', inConstruct: 'tableCell'},
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      {atBreak: true, character: '|', after: '[\t :-]'},
      // A pipe in a cell must be encoded.
      {character: '|', inConstruct: 'tableCell'},
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      {atBreak: true, character: ':', after: '-'},
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      {atBreak: true, character: '-', after: '[:|-]'}
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  }

  function handleTable(node, _, context) {
    return serializeData(handleTableAsData(node, context), node.align)
  }

  // This function isn’t really used normally, because we handle rows at the
  // table level.
  // But, if someone passes in a table row, this ensures we make somewhat sense.
  function handleTableRow(node, _, context) {
    var row = handleTableRowAsData(node, context);
    // `markdown-table` will always add an align row
    var value = serializeData([row]);
    return value.slice(0, value.indexOf('\n'))
  }

  function handleTableCell(node, _, context) {
    var exit = context.enter('tableCell');
    var value = containerPhrasing(node, context, {before: around, after: around});
    exit();
    return value
  }

  function serializeData(matrix, align) {
    return markdownTable_1(matrix, {
      align: align,
      alignDelimiters: alignDelimiters,
      padding: padding,
      stringLength: stringLength
    })
  }

  function handleTableAsData(node, context) {
    var children = node.children;
    var index = -1;
    var length = children.length;
    var result = [];
    var subexit = context.enter('table');

    while (++index < length) {
      result[index] = handleTableRowAsData(children[index], context);
    }

    subexit();

    return result
  }

  function handleTableRowAsData(node, context) {
    var children = node.children;
    var index = -1;
    var length = children.length;
    var result = [];
    var subexit = context.enter('tableRow');

    while (++index < length) {
      result[index] = handleTableCell(children[index], node, context);
    }

    subexit();

    return result
  }

  function inlineCodeWithTable(node, parent, context) {
    var value = inlineCode_1(node);

    if (context.stack.indexOf('tableCell') !== -1) {
      value = value.replace(/\|/, '\\$&');
    }

    return value
  }
}

var checkBullet_1 = checkBullet;

function checkBullet(context) {
  var marker = context.options.bullet || '*';

  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error(
      'Cannot serialize items with `' +
        marker +
        '` for `options.bullet`, expected `*`, `+`, or `-`'
    )
  }

  return marker
}

var checkListItemIndent_1 = checkListItemIndent;

function checkListItemIndent(context) {
  var style = context.options.listItemIndent || 'tab';

  if (style === 1 || style === '1') {
    return 'one'
  }

  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error(
      'Cannot serialize items with `' +
        style +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    )
  }

  return style
}

var containerFlow = flow$4;



function flow$4(parent, context) {
  var children = parent.children || [];
  var results = [];
  var index = -1;
  var child;

  while (++index < children.length) {
    child = children[index];

    results.push(
      context.handle(child, parent, context, {before: '\n', after: '\n'})
    );

    if (index + 1 < children.length) {
      results.push(between(child, children[index + 1]));
    }
  }

  return results.join('')

  function between(left, right) {
    var index = -1;
    var result;

    while (++index < context.join.length) {
      result = context.join[index](left, right, parent, context);

      if (result === true || result === 1) {
        break
      }

      if (typeof result === 'number') {
        return repeatString('\n', 1 + Number(result))
      }

      if (result === false) {
        return '\n\n<!---->\n\n'
      }
    }

    return '\n\n'
  }
}

var indentLines_1 = indentLines;

var eol = /\r?\n|\r/g;

function indentLines(value, map) {
  var result = [];
  var start = 0;
  var line = 0;
  var match;

  while ((match = eol.exec(value))) {
    one(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }

  one(value.slice(start));

  return result.join('')

  function one(value) {
    result.push(map(value, line, !value));
  }
}

var listItem_1 = listItem;







function listItem(node, parent, context) {
  var bullet = checkBullet_1(context);
  var listItemIndent = checkListItemIndent_1(context);
  var size;
  var value;
  var exit;

  if (parent && parent.ordered) {
    bullet =
      (parent.start > -1 ? parent.start : 1) +
      (context.options.incrementListMarker === false
        ? 0
        : parent.children.indexOf(node)) +
      '.';
  }

  size = bullet.length + 1;

  if (
    listItemIndent === 'tab' ||
    (listItemIndent === 'mixed' && ((parent && parent.spread) || node.spread))
  ) {
    size = Math.ceil(size / 4) * 4;
  }

  exit = context.enter('listItem');
  value = indentLines_1(containerFlow(node, context), map);
  exit();

  return value

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : repeatString(' ', size)) + line
    }

    return (blank ? bullet : bullet + repeatString(' ', size - bullet.length)) + line
  }
}

var unsafe$3 = [{atBreak: true, character: '-', after: '[:|-]'}];

var handlers$2 = {
  listItem: listItemWithTaskListItem
};

function listItemWithTaskListItem(node, parent, context) {
  var value = listItem_1(node, parent, context);
  var head = node.children[0];

  if (typeof node.checked === 'boolean' && head && head.type === 'paragraph') {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }

  return value

  function check($0) {
    return $0 + '[' + (node.checked ? 'x' : ' ') + '] '
  }
}

var toMarkdown$4 = {
	unsafe: unsafe$3,
	handlers: handlers$2
};

var toMarkdown_1$1 = toMarkdown$5;

function toMarkdown$5(options) {
  var extensions = [
    toMarkdown$1,
    toMarkdown$2,
    toMarkdown_1(options),
    toMarkdown$4
  ];
  var length = extensions.length;
  var index = -1;
  var extension;
  var unsafe = [];
  var handlers = {};

  while (++index < length) {
    extension = extensions[index];
    // istanbul ignore next - unsafe always exists, for now.
    unsafe = unsafe.concat(extension.unsafe || []);
    handlers = Object.assign(handlers, extension.handlers || {});
  }

  return {unsafe: unsafe, handlers: handlers}
}

var warningIssued$1;

var remarkGfm = gfm;

function gfm(options) {
  var data = this.data();

  /* istanbul ignore next - old remark. */
  if (
    !warningIssued$1 &&
    ((this.Parser &&
      this.Parser.prototype &&
      this.Parser.prototype.blockTokenizers) ||
      (this.Compiler &&
        this.Compiler.prototype &&
        this.Compiler.prototype.visitors))
  ) {
    warningIssued$1 = true;
    console.warn(
      '[remark-gfm] Warning: please upgrade to remark 13 to use this plugin'
    );
  }

  add('micromarkExtensions', micromarkExtensionGfm(options));
  add('fromMarkdownExtensions', fromMarkdown$6);
  add('toMarkdownExtensions', toMarkdown_1$1(options));

  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value);
    else data[field] = [value];
  }
}

var factoryAttributes = createAttributes;

// To do: use `dist/`








/* eslint-disable-next-line max-params */
function createAttributes(
  effects,
  ok,
  nok,
  attributesType,
  attributesMarkerType,
  attributeType,
  attributeIdType,
  attributeClassType,
  attributeNameType,
  attributeInitializerType,
  attributeValueLiteralType,
  attributeValueType,
  attributeValueMarker,
  attributeValueData,
  disallowEol
) {
  var type;
  var marker;

  return start

  function start(code) {
    // Always a `{`
    effects.enter(attributesType);
    effects.enter(attributesMarkerType);
    effects.consume(code);
    effects.exit(attributesMarkerType);
    return between
  }

  function between(code) {
    if (code === 35 /* `#` */) {
      type = attributeIdType;
      return shortcutStart(code)
    }

    if (code === 46 /* `.` */) {
      type = attributeClassType;
      return shortcutStart(code)
    }

    if (code === 58 /* `:` */ || code === 95 /* `_` */ || asciiAlpha(code)) {
      effects.enter(attributeType);
      effects.enter(attributeNameType);
      effects.consume(code);
      return name
    }

    if (disallowEol && markdownSpace_1(code)) {
      return factorySpace(effects, between, 'whitespace')(code)
    }

    if (!disallowEol && markdownLineEndingOrSpace_1(code)) {
      return factoryWhitespace(effects, between)(code)
    }

    return end(code)
  }

  function shortcutStart(code) {
    effects.enter(attributeType);
    effects.enter(type);
    effects.enter(type + 'Marker');
    effects.consume(code);
    effects.exit(type + 'Marker');
    return shortcutStartAfter
  }

  function shortcutStartAfter(code) {
    if (
      code === null /* EOF */ ||
      code === 34 /* `"` */ ||
      code === 35 /* `#` */ ||
      code === 39 /* `'` */ ||
      code === 46 /* `.` */ ||
      code === 60 /* `<` */ ||
      code === 61 /* `=` */ ||
      code === 62 /* `>` */ ||
      code === 96 /* `` ` `` */ ||
      code === 125 /* `}` */ ||
      markdownLineEndingOrSpace_1(code)
    ) {
      return nok(code)
    }

    effects.enter(type + 'Value');
    effects.consume(code);
    return shortcut
  }

  function shortcut(code) {
    if (
      code === null /* EOF */ ||
      code === 34 /* `"` */ ||
      code === 39 /* `'` */ ||
      code === 60 /* `<` */ ||
      code === 61 /* `=` */ ||
      code === 62 /* `>` */ ||
      code === 96 /* `` ` `` */
    ) {
      return nok(code)
    }

    if (
      code === 35 /* `#` */ ||
      code === 46 /* `.` */ ||
      code === 125 /* `}` */ ||
      markdownLineEndingOrSpace_1(code)
    ) {
      effects.exit(type + 'Value');
      effects.exit(type);
      effects.exit(attributeType);
      return between(code)
    }

    effects.consume(code);
    return shortcut
  }

  function name(code) {
    if (
      code === 45 /* `-` */ ||
      code === 46 /* `.` */ ||
      code === 58 /* `:` */ ||
      code === 95 /* `_` */ ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code);
      return name
    }

    effects.exit(attributeNameType);

    if (disallowEol && markdownSpace_1(code)) {
      return factorySpace(effects, nameAfter, 'whitespace')(code)
    }

    if (!disallowEol && markdownLineEndingOrSpace_1(code)) {
      return factoryWhitespace(effects, nameAfter)(code)
    }

    return nameAfter(code)
  }

  function nameAfter(code) {
    if (code === 61 /* `=` */) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore
    }

    // Attribute w/o value.
    effects.exit(attributeType);
    return between(code)
  }

  function valueBefore(code) {
    if (
      code === null /* EOF */ ||
      code === 60 /* `<` */ ||
      code === 61 /* `=` */ ||
      code === 62 /* `>` */ ||
      code === 96 /* `` ` `` */ ||
      code === 125 /* `}` */ ||
      (disallowEol && markdownLineEnding_1(code))
    ) {
      return nok(code)
    }

    if (code === 34 /* `"` */ || code === 39 /* `'` */) {
      effects.enter(attributeValueLiteralType);
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      marker = code;
      return valueQuotedStart
    }

    if (disallowEol && markdownSpace_1(code)) {
      return factorySpace(effects, valueBefore, 'whitespace')(code)
    }

    if (!disallowEol && markdownLineEndingOrSpace_1(code)) {
      return factoryWhitespace(effects, valueBefore)(code)
    }

    effects.enter(attributeValueType);
    effects.enter(attributeValueData);
    effects.consume(code);
    marker = undefined;
    return valueUnquoted
  }

  function valueUnquoted(code) {
    if (
      code === null /* EOF */ ||
      code === 34 /* `"` */ ||
      code === 39 /* `'` */ ||
      code === 60 /* `<` */ ||
      code === 61 /* `=` */ ||
      code === 62 /* `>` */ ||
      code === 96 /* `` ` `` */
    ) {
      return nok(code)
    }

    if (code === 125 /* `}` */ || markdownLineEndingOrSpace_1(code)) {
      effects.exit(attributeValueData);
      effects.exit(attributeValueType);
      effects.exit(attributeType);
      return between(code)
    }

    effects.consume(code);
    return valueUnquoted
  }

  function valueQuotedStart(code) {
    if (code === marker) {
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      effects.exit(attributeValueLiteralType);
      effects.exit(attributeType);
      return valueQuotedAfter
    }

    effects.enter(attributeValueType);
    return valueQuotedBetween(code)
  }

  function valueQuotedBetween(code) {
    if (code === marker) {
      effects.exit(attributeValueType);
      return valueQuotedStart(code)
    }

    if (code === null /* EOF */) {
      return nok(code)
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding_1(code)) {
      return disallowEol
        ? nok(code)
        : factoryWhitespace(effects, valueQuotedBetween)(code)
    }

    effects.enter(attributeValueData);
    effects.consume(code);
    return valueQuoted
  }

  function valueQuoted(code) {
    if (
      code === marker ||
      code === null /* EOF */ ||
      markdownLineEnding_1(code)
    ) {
      effects.exit(attributeValueData);
      return valueQuotedBetween(code)
    }

    effects.consume(code);
    return valueQuoted
  }

  function valueQuotedAfter(code) {
    return code === 125 /* `}` */ || markdownLineEndingOrSpace_1(code)
      ? between(code)
      : end(code)
  }

  function end(code) {
    if (code === 125 /* `}` */) {
      effects.enter(attributesMarkerType);
      effects.consume(code);
      effects.exit(attributesMarkerType);
      effects.exit(attributesType);
      return ok
    }

    return nok(code)
  }
}

var factoryLabel$1 = createLabel$1;

// To do: use `dist/`



// This is a fork of:
// <https://github.com/micromark/micromark/blob/bf53bf9/lib/tokenize/factory-label.js>
// to allow empty, support text instead of strings, and optionally w/o EOLs,
// labels.

// eslint-disable-next-line max-params
function createLabel$1(
  effects,
  ok,
  nok,
  type,
  markerType,
  stringType,
  allowEmpty,
  disallowEol
) {
  var size = 0;
  var data;

  return start

  function start(code) {
    /* istanbul ignore if - always `[` */
    if (code !== 91 /* `[` */) throw new Error('expected `[`')
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return afterStart
  }

  function afterStart(code) {
    if (code === 93 /* `]` */ && allowEmpty) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }

    effects.enter(stringType);
    return atBreak(code)
  }

  function atBreak(code) {
    if (
      code === null /* EOF */ ||
      code === 91 /* `[` */ ||
      (code === 93 /* `]` */ && !data && !allowEmpty) ||
      /* <https://github.com/micromark/micromark/blob/bf53bf9/lib/constant/constants.js#L34> */
      size > 999
    ) {
      return nok(code)
    }

    if (code === 93 /* `]` */) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok
    }

    if (markdownLineEnding_1(code)) {
      if (disallowEol) {
        return nok(code)
      }

      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return atBreak
    }

    effects.enter('chunkText', {contentType: 'text'});
    return label(code)
  }

  function label(code) {
    if (
      code === null /* EOF */ ||
      code === 91 /* `[` */ ||
      code === 93 /* `]` */ ||
      markdownLineEnding_1(code) ||
      /* <https://github.com/micromark/micromark/blob/bf53bf9/lib/constant/constants.js#L34> */
      size > 999
    ) {
      effects.exit('chunkText');
      return atBreak(code)
    }

    effects.consume(code);
    data = data || !markdownSpace_1(code);
    return code === 92 /* `\` */ ? labelEscape : label
  }

  function labelEscape(code) {
    if (
      code === 91 /* `[` */ ||
      code === 92 /* `\` */ ||
      code === 93 /* `]` */
    ) {
      effects.consume(code);
      size++;
      return label
    }

    return label(code)
  }
}

var factoryName = createName;

// To do: use `dist/`



function createName(effects, ok, nok, nameType) {
  return start

  function start(code) {
    if (asciiAlpha(code)) {
      effects.enter(nameType);
      effects.consume(code);
      return name
    }

    return nok(code)
  }

  function name(code) {
    if (code === 45 /* `-` */ || asciiAlphanumeric(code)) {
      effects.consume(code);
      return name
    }

    effects.exit(nameType);
    return ok(code)
  }
}

var tokenize$p = tokenizeDirectiveText;
var previous_1$2 = previous$3;

// To do: use `dist/`




var label = {tokenize: tokenizeLabel};
var attributes = {tokenize: tokenizeAttributes};

function previous$3(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 58 /* `:` */ ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

function tokenizeDirectiveText(effects, ok, nok) {
  var self = this;

  return start

  function start(code) {
    /* istanbul ignore if - handled by mm */
    if (code !== 58 /* `:` */) throw new Error('expected `:`')

    /* istanbul ignore if - handled by mm */
    if (!previous$3.call(self, self.previous)) {
      throw new Error('expected correct previous')
    }

    effects.enter('directiveText');
    effects.enter('directiveTextMarker');
    effects.consume(code);
    effects.exit('directiveTextMarker');
    return factoryName(effects, afterName, nok, 'directiveTextName')
  }

  function afterName(code) {
    return code === 91 /* `[` */
      ? effects.attempt(label, afterLabel, afterLabel)(code)
      : afterLabel(code)
  }

  function afterLabel(code) {
    return code === 123 /* `{` */
      ? effects.attempt(attributes, afterAttributes, afterAttributes)(code)
      : afterAttributes(code)
  }

  function afterAttributes(code) {
    effects.exit('directiveText');
    return ok(code)
  }
}

function tokenizeLabel(effects, ok, nok) {
  // Always a `[`
  return factoryLabel$1(
    effects,
    ok,
    nok,
    'directiveTextLabel',
    'directiveTextLabelMarker',
    'directiveTextLabelString',
    true
  )
}

function tokenizeAttributes(effects, ok, nok) {
  // Always a `{`
  return factoryAttributes(
    effects,
    ok,
    nok,
    'directiveTextAttributes',
    'directiveTextAttributesMarker',
    'directiveTextAttribute',
    'directiveTextAttributeId',
    'directiveTextAttributeClass',
    'directiveTextAttributeName',
    'directiveTextAttributeInitializerMarker',
    'directiveTextAttributeValueLiteral',
    'directiveTextAttributeValue',
    'directiveTextAttributeValueMarker',
    'directiveTextAttributeValueData'
  )
}

var tokenizeDirectiveText_1 = {
	tokenize: tokenize$p,
	previous: previous_1$2
};

var tokenize$q = tokenizeDirectiveLeaf;

// To do: use `dist/`






var label$1 = {tokenize: tokenizeLabel$1};
var attributes$1 = {tokenize: tokenizeAttributes$1};

function tokenizeDirectiveLeaf(effects, ok, nok) {
  return start

  function start(code) {
    /* istanbul ignore if - handled by mm */
    if (code !== 58 /* `:` */) throw new Error('expected `:`')

    effects.enter('directiveLeaf');
    effects.enter('directiveLeafSequence');
    effects.consume(code);
    return inStart
  }

  function inStart(code) {
    if (code === 58 /* `:` */) {
      effects.consume(code);
      effects.exit('directiveLeafSequence');
      return factoryName(effects, afterName, nok, 'directiveLeafName')
    }

    return nok(code)
  }

  function afterName(code) {
    return code === 91 /* `[` */
      ? effects.attempt(label$1, afterLabel, afterLabel)(code)
      : afterLabel(code)
  }

  function afterLabel(code) {
    return code === 123 /* `{` */
      ? effects.attempt(attributes$1, afterAttributes, afterAttributes)(code)
      : afterAttributes(code)
  }

  function afterAttributes(code) {
    return factorySpace(effects, end, 'whitespace')(code)
  }

  function end(code) {
    if (code === null || markdownLineEnding_1(code)) {
      effects.exit('directiveLeaf');
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeLabel$1(effects, ok, nok) {
  // Always a `[`
  return factoryLabel$1(
    effects,
    ok,
    nok,
    'directiveLeafLabel',
    'directiveLeafLabelMarker',
    'directiveLeafLabelString',
    true,
    true
  )
}

function tokenizeAttributes$1(effects, ok, nok) {
  // Always a `{`
  return factoryAttributes(
    effects,
    ok,
    nok,
    'directiveLeafAttributes',
    'directiveLeafAttributesMarker',
    'directiveLeafAttribute',
    'directiveLeafAttributeId',
    'directiveLeafAttributeClass',
    'directiveLeafAttributeName',
    'directiveLeafAttributeInitializerMarker',
    'directiveLeafAttributeValueLiteral',
    'directiveLeafAttributeValue',
    'directiveLeafAttributeValueMarker',
    'directiveLeafAttributeValueData',
    true
  )
}

var tokenizeDirectiveLeaf_1 = {
	tokenize: tokenize$q
};

var tokenize$r = tokenizeDirectiveContainer;
var concrete$3 = true;

// To do: use `dist/`







var label$2 = {tokenize: tokenizeLabel$2};
var attributes$2 = {tokenize: tokenizeAttributes$2};

function tokenizeDirectiveContainer(effects, ok, nok) {
  var self = this;
  var initialPrefix = prefixSize_1(this.events, 'linePrefix');
  var sizeOpen = 0;
  var previous;

  return start

  function start(code) {
    /* istanbul ignore if - handled by mm */
    if (code !== 58 /* `:` */) throw new Error('expected `:`')
    effects.enter('directiveContainer');
    effects.enter('directiveContainerFence');
    effects.enter('directiveContainerSequence');
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === 58 /* `:` */) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen
    }

    if (sizeOpen < 3) {
      return nok(code)
    }

    effects.exit('directiveContainerSequence');
    return factoryName(effects, afterName, nok, 'directiveContainerName')(code)
  }

  function afterName(code) {
    return code === 91 /* `[` */
      ? effects.attempt(label$2, afterLabel, afterLabel)(code)
      : afterLabel(code)
  }

  function afterLabel(code) {
    return code === 123 /* `{` */
      ? effects.attempt(attributes$2, afterAttributes, afterAttributes)(code)
      : afterAttributes(code)
  }

  function afterAttributes(code) {
    return factorySpace(effects, openAfter, 'whitespace')(code)
  }

  function openAfter(code) {
    effects.exit('directiveContainerFence');

    if (code === null) {
      effects.exit('directiveContainer');
      return ok(code)
    }

    if (markdownLineEnding_1(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return self.interrupt ? ok : contentStart
    }

    return nok(code)
  }

  function contentStart(code) {
    if (code === null) {
      effects.exit('directiveContainer');
      return ok(code)
    }

    effects.enter('directiveContainerContent');
    return lineStart(code)
  }

  function lineStart(code) {
    if (code === null) {
      return after(code)
    }

    return effects.attempt(
      {tokenize: tokenizeClosingFence, partial: true},
      after,
      initialPrefix
        ? factorySpace(effects, chunkStart, 'linePrefix', initialPrefix + 1)
        : chunkStart
    )(code)
  }

  function chunkStart(code) {
    var token = effects.enter('chunkDocument', {
      contentType: 'document',
      previous: previous
    });
    if (previous) previous.next = token;
    previous = token;
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === null) {
      effects.exit('chunkDocument');
      return after(code)
    }

    if (markdownLineEnding_1(code)) {
      effects.consume(code);
      effects.exit('chunkDocument');
      return lineStart
    }

    effects.consume(code);
    return contentContinue
  }

  function after(code) {
    effects.exit('directiveContainerContent');
    effects.exit('directiveContainer');
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0;

    return factorySpace(effects, closingPrefixAfter, 'linePrefix', 4)

    function closingPrefixAfter(code) {
      effects.enter('directiveContainerFence');
      effects.enter('directiveContainerSequence');
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === 58 /* `:` */) {
        effects.consume(code);
        size++;
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('directiveContainerSequence');
      return factorySpace(effects, closingSequenceEnd, 'whitespace')(code)
    }

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding_1(code)) {
        effects.exit('directiveContainerFence');
        return ok(code)
      }

      return nok(code)
    }
  }
}

function tokenizeLabel$2(effects, ok, nok) {
  // Always a `[`
  return factoryLabel$1(
    effects,
    ok,
    nok,
    'directiveContainerLabel',
    'directiveContainerLabelMarker',
    'directiveContainerLabelString',
    true,
    true
  )
}

function tokenizeAttributes$2(effects, ok, nok) {
  // Always a `{`
  return factoryAttributes(
    effects,
    ok,
    nok,
    'directiveContainerAttributes',
    'directiveContainerAttributesMarker',
    'directiveContainerAttribute',
    'directiveContainerAttributeId',
    'directiveContainerAttributeClass',
    'directiveContainerAttributeName',
    'directiveContainerAttributeInitializerMarker',
    'directiveContainerAttributeValueLiteral',
    'directiveContainerAttributeValue',
    'directiveContainerAttributeValueMarker',
    'directiveContainerAttributeValueData',
    true
  )
}

var tokenizeDirectiveContainer_1 = {
	tokenize: tokenize$r,
	concrete: concrete$3
};

var syntax$5 = directive;





function directive() {
  return {
    text: {58: tokenizeDirectiveText_1},
    flow: {58: [tokenizeDirectiveContainer_1, tokenizeDirectiveLeaf_1]}
  }
}

var micromarkExtensionDirective = syntax$5;

var canContainEols$1 = ['textDirective'];
var enter_1 = {
  directiveContainer: enterContainer,
  directiveContainerAttributes: enterAttributes,
  directiveContainerLabel: enterContainerLabel,

  directiveLeaf: enterLeaf,
  directiveLeafAttributes: enterAttributes,

  directiveText: enterText,
  directiveTextAttributes: enterAttributes
};
var exit_1$1 = {
  directiveContainer: exit$5,
  directiveContainerAttributeClassValue: exitAttributeClassValue,
  directiveContainerAttributeIdValue: exitAttributeIdValue,
  directiveContainerAttributeName: exitAttributeName,
  directiveContainerAttributeValue: exitAttributeValue,
  directiveContainerAttributes: exitAttributes,
  directiveContainerLabel: exitContainerLabel,
  directiveContainerName: exitName,

  directiveLeaf: exit$5,
  directiveLeafAttributeClassValue: exitAttributeClassValue,
  directiveLeafAttributeIdValue: exitAttributeIdValue,
  directiveLeafAttributeName: exitAttributeName,
  directiveLeafAttributeValue: exitAttributeValue,
  directiveLeafAttributes: exitAttributes,
  directiveLeafName: exitName,

  directiveText: exit$5,
  directiveTextAttributeClassValue: exitAttributeClassValue,
  directiveTextAttributeIdValue: exitAttributeIdValue,
  directiveTextAttributeName: exitAttributeName,
  directiveTextAttributeValue: exitAttributeValue,
  directiveTextAttributes: exitAttributes,
  directiveTextName: exitName
};

function enterContainer(token) {
  enter$4.call(this, 'containerDirective', token);
}

function enterLeaf(token) {
  enter$4.call(this, 'leafDirective', token);
}

function enterText(token) {
  enter$4.call(this, 'textDirective', token);
}

function enter$4(type, token) {
  this.enter({type: type, name: '', attributes: {}, children: []}, token);
}

function exitName(token) {
  this.stack[this.stack.length - 1].name = this.sliceSerialize(token);
}

function enterContainerLabel(token) {
  this.enter(
    {type: 'paragraph', data: {directiveLabel: true}, children: []},
    token
  );
}

function exitContainerLabel(token) {
  this.exit(token);
}

function enterAttributes() {
  this.setData('directiveAttributes', []);
  this.buffer(); // Capture EOLs
}

function exitAttributeIdValue(token) {
  this.getData('directiveAttributes').push([
    'id',
    decodeLight(this.sliceSerialize(token))
  ]);
}

function exitAttributeClassValue(token) {
  this.getData('directiveAttributes').push([
    'class',
    decodeLight(this.sliceSerialize(token))
  ]);
}

function exitAttributeValue(token) {
  var attributes = this.getData('directiveAttributes');
  attributes[attributes.length - 1][1] = decodeLight(this.sliceSerialize(token));
}

function exitAttributeName(token) {
  // Attribute names in CommonMark are significantly limited, so character
  // references can’t exist.
  this.getData('directiveAttributes').push([this.sliceSerialize(token), '']);
}

function exitAttributes() {
  var attributes = this.getData('directiveAttributes');
  var cleaned = {};
  var index = -1;
  var attribute;

  while (++index < attributes.length) {
    attribute = attributes[index];

    if (attribute[0] === 'class' && cleaned.class) {
      cleaned.class += ' ' + attribute[1];
    } else {
      cleaned[attribute[0]] = attribute[1];
    }
  }

  this.setData('directiveAttributes');
  this.resume(); // Drop EOLs
  this.stack[this.stack.length - 1].attributes = cleaned;
}

function exit$5(token) {
  this.exit(token);
}

function decodeLight(value) {
  return value.replace(
    /&(#(\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi,
    decodeIfPossible
  )
}

function decodeIfPossible($0, $1) {
  return decodeEntity_1($1) || $0
}

var fromMarkdown$7 = {
	canContainEols: canContainEols$1,
	enter: enter_1,
	exit: exit_1$1
};

var core$1 = encode;

// Encode special characters in `value`.
function encode(value, options) {
  value = value.replace(
    options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g,
    basic
  );

  if (options.subset || options.escapeOnly) {
    return value
  }

  return (
    value
      // Surrogate pairs.
      .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate)
      // BMP control characters (C0 except for LF, CR, SP; DEL; and some more
      // non-ASCII ones).
      .replace(
        // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
        /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
        basic
      )
  )

  function surrogate(pair, index, all) {
    return options.format(
      (pair.charCodeAt(0) - 0xd800) * 0x400 +
        pair.charCodeAt(1) -
        0xdc00 +
        0x10000,
      all.charCodeAt(index + 2),
      options
    )
  }

  function basic(character, index, all) {
    return options.format(
      character.charCodeAt(0),
      all.charCodeAt(index + 1),
      options
    )
  }
}

function charactersToExpression(subset) {
  var groups = [];
  var index = -1;

  while (++index < subset.length) {
    groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'));
  }

  return new RegExp('(?:' + groups.join('|') + ')', 'g')
}

var assign$1 = Object.assign;

var formatBasic_1 = formatBasic;

function formatBasic(code) {
  return '&#x' + code.toString(16).toUpperCase() + ';'
}

var encodeHexadecimal_1 = encodeHexadecimal;

// Encode special characters in `value` as hexadecimals.
function encodeHexadecimal(value, options) {
  // Note: this file was added in a minor release, so here we can use
  // `Object.assign`.
  return core$1(value, assign$1({format: formatBasic_1}, options))
}

var light = encodeHexadecimal_1;

var convert_1 = convert;

function convert(test) {
  if (test == null) {
    return ok
  }

  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (typeof test === 'object') {
    return 'length' in test ? anyFactory(test) : allFactory(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function allFactory(test) {
  return all

  function all(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) return false
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = [];
  var index = -1;

  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }

  return any

  function any() {
    var index = -1;

    while (++index < checks.length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}

var color_1 = color;
function color(d) {
  return '\u001B[33m' + d + '\u001B[39m'
}

var unistUtilVisitParents = visitParents;




var CONTINUE = true;
var SKIP = 'skip';
var EXIT = false;

visitParents.CONTINUE = CONTINUE;
visitParents.SKIP = SKIP;
visitParents.EXIT = EXIT;

function visitParents(tree, test, visitor, reverse) {
  var step;
  var is;

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  is = convert_1(test);
  step = reverse ? -1 : 1;

  factory(tree, null, [])();

  function factory(node, index, parents) {
    var value = typeof node === 'object' && node !== null ? node : {};
    var name;

    if (typeof value.type === 'string') {
      name =
        typeof value.tagName === 'string'
          ? value.tagName
          : typeof value.name === 'string'
          ? value.name
          : undefined;

      visit.displayName =
        'node (' + color_1(value.type + (name ? '<' + name + '>' : '')) + ')';
    }

    return visit

    function visit() {
      var grandparents = parents.concat(node);
      var result = [];
      var subresult;
      var offset;

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents));

        if (result[0] === EXIT) {
          return result
        }
      }

      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step;

        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)();

          if (subresult[0] === EXIT) {
            return subresult
          }

          offset =
            typeof subresult[1] === 'number' ? subresult[1] : offset + step;
        }
      }

      return result
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}

var checkQuote_1 = checkQuote;

function checkQuote(context) {
  var marker = context.options.quote || '"';

  if (marker !== '"' && marker !== "'") {
    throw new Error(
      'Cannot serialize title with `' +
        marker +
        '` for `options.quote`, expected `"`, or `\'`'
    )
  }

  return marker
}

var unsafe$4 = [
  {
    character: '\r',
    inConstruct: ['leafDirectiveLabel', 'containerDirectiveLabel']
  },
  {
    character: '\n',
    inConstruct: ['leafDirectiveLabel', 'containerDirectiveLabel']
  },
  {
    before: '[^:]',
    character: ':',
    after: '[A-Za-z]',
    inConstruct: ['phrasing']
  },
  {atBreak: true, character: ':', after: ':'}
];

var handlers$3 = {
  containerDirective: handleDirective,
  leafDirective: handleDirective,
  textDirective: handleDirective
};

handleDirective.peek = peekDirective;








var own$5 = {}.hasOwnProperty;

var shortcut = /^[^\t\n\r "#'.<=>`}]+$/;

function handleDirective(node, _, context) {
  var prefix = fence(node);
  var exit = context.enter(node.type);
  var value =
    prefix +
    (node.name || '') +
    label$3(node, context) +
    attributes$3(node, context);
  var subvalue;

  if (node.type === 'containerDirective') {
    subvalue = content$2(node, context);
    if (subvalue) value += '\n' + subvalue;
    value += '\n' + prefix;
  }

  exit();
  return value
}

function peekDirective() {
  return ':'
}

function label$3(node, context) {
  var label = node;
  var exit;
  var subexit;
  var value;

  if (node.type === 'containerDirective') {
    if (!inlineDirectiveLabel(node)) return ''
    label = node.children[0];
  }

  exit = context.enter('label');
  subexit = context.enter(node.type + 'Label');
  value = containerPhrasing(label, context, {before: '[', after: ']'});
  subexit();
  exit();
  return value ? '[' + value + ']' : ''
}

function attributes$3(node, context) {
  var quote = checkQuote_1(context);
  var subset = node.type === 'textDirective' ? [quote] : [quote, '\n', '\r'];
  var attrs = node.attributes || {};
  var values = [];
  var id;
  var classesFull;
  var classes;
  var value;
  var key;
  var index;

  for (key in attrs) {
    if (own$5.call(attrs, key) && attrs[key] != null) {
      value = String(attrs[key]);

      if (key === 'id') {
        id = shortcut.test(value) ? '#' + value : quoted('id', value);
      } else if (key === 'class') {
        value = value.split(/[\t\n\r ]+/g);
        classesFull = [];
        classes = [];
        index = -1;

        while (++index < value.length) {
(shortcut.test(value[index]) ? classes : classesFull).push(
            value[index]
          );
        }

        classesFull = classesFull.length
          ? quoted('class', classesFull.join(' '))
          : '';
        classes = classes.length ? '.' + classes.join('.') : '';
      } else {
        values.push(quoted(key, value));
      }
    }
  }

  if (classesFull) {
    values.unshift(classesFull);
  }

  if (classes) {
    values.unshift(classes);
  }

  if (id) {
    values.unshift(id);
  }

  return values.length ? '{' + values.join(' ') + '}' : ''

  function quoted(key, value) {
    return (
      key + (value ? '=' + quote + light(value, {subset: subset}) + quote : '')
    )
  }
}

function content$2(node, context) {
  var content = inlineDirectiveLabel(node)
    ? Object.assign({}, node, {children: node.children.slice(1)})
    : node;

  return containerFlow(content, context)
}

function inlineDirectiveLabel(node) {
  return (
    node.children &&
    node.children[0] &&
    node.children[0].data &&
    node.children[0].data.directiveLabel
  )
}

function fence(node) {
  var size = 0;

  if (node.type === 'containerDirective') {
    unistUtilVisitParents(node, 'containerDirective', onvisit);
    size += 3;
  } else if (node.type === 'leafDirective') {
    size = 2;
  } else {
    size = 1;
  }

  return repeatString(':', size)

  function onvisit(node, parents) {
    var index = parents.length;
    var nesting = 0;

    while (index--) {
      if (parents[index].type === 'containerDirective') {
        nesting++;
      }
    }

    if (nesting > size) size = nesting;
  }
}

var toMarkdown$6 = {
	unsafe: unsafe$4,
	handlers: handlers$3
};

var warningIssued$2;

var remarkDirective = directive$1;

function directive$1() {
  var data = this.data();

  /* istanbul ignore next - old remark. */
  if (
    !warningIssued$2 &&
    ((this.Parser &&
      this.Parser.prototype &&
      this.Parser.prototype.blockTokenizers) ||
      (this.Compiler &&
        this.Compiler.prototype &&
        this.Compiler.prototype.visitors))
  ) {
    warningIssued$2 = true;
    console.warn(
      '[remark-directive] Warning: please upgrade to remark 13 to use this plugin'
    );
  }

  add('micromarkExtensions', micromarkExtensionDirective());
  add('fromMarkdownExtensions', fromMarkdown$7);
  add('toMarkdownExtensions', toMarkdown$6);

  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value);
    else data[field] = [value];
  }
}

var index_cjs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function html() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var permalinks = opts.permalinks || [];

  var defaultPageResolver = function defaultPageResolver(name) {
    return [name.replace(/ /g, '_').toLowerCase()];
  };

  var pageResolver = opts.pageResolver || defaultPageResolver;
  var newClassName = opts.newClassName || 'new';
  var wikiLinkClassName = opts.wikiLinkClassName || 'internal';

  var defaultHrefTemplate = function defaultHrefTemplate(permalink) {
    return "#/page/".concat(permalink);
  };

  var hrefTemplate = opts.hrefTemplate || defaultHrefTemplate;

  function enterWikiLink() {
    var stack = this.getData('wikiLinkStack');
    if (!stack) this.setData('wikiLinkStack', stack = []);
    stack.push({});
  }

  function top(stack) {
    return stack[stack.length - 1];
  }

  function exitWikiLinkAlias(token) {
    var alias = this.sliceSerialize(token);
    var current = top(this.getData('wikiLinkStack'));
    current.alias = alias;
  }

  function exitWikiLinkTarget(token) {
    var target = this.sliceSerialize(token);
    var current = top(this.getData('wikiLinkStack'));
    current.target = target;
  }

  function exitWikiLink() {
    var wikiLink = this.getData('wikiLinkStack').pop();
    var pagePermalinks = pageResolver(wikiLink.target);
    var permalink = pagePermalinks.find(function (p) {
      return permalinks.indexOf(p) !== -1;
    });
    var exists = permalink !== undefined;

    if (!exists) {
      permalink = pagePermalinks[0];
    }

    var displayName = wikiLink.target;

    if (wikiLink.alias) {
      displayName = wikiLink.alias;
    }

    var classNames = wikiLinkClassName;

    if (!exists) {
      classNames += ' ' + newClassName;
    }

    this.tag('<a href="' + hrefTemplate(permalink) + '" class="' + classNames + '">');
    this.raw(displayName);
    this.tag('</a>');
  }

  return {
    enter: {
      wikiLink: enterWikiLink
    },
    exit: {
      wikiLinkTarget: exitWikiLinkTarget,
      wikiLinkAlias: exitWikiLinkAlias,
      wikiLink: exitWikiLink
    }
  };
}

function wikiLink() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var aliasDivider = opts.aliasDivider || ':';
  var aliasMarker = aliasDivider;
  var startMarker = '[[';
  var endMarker = ']]';

  function tokenize(effects, ok, nok) {
    var data;
    var alias;
    var aliasCursor = 0;
    var startMarkerCursor = 0;
    var endMarkerCursor = 0;
    return start;

    function start(code) {
      if (code !== startMarker.charCodeAt(startMarkerCursor)) return nok(code);
      effects.enter('wikiLink');
      effects.enter('wikiLinkMarker');
      return consumeStart;
    }

    function consumeStart(code) {
      if (startMarkerCursor === startMarker.length) {
        effects.exit('wikiLinkMarker');
        return consumeData;
      }

      if (code !== startMarker.charCodeAt(startMarkerCursor)) {
        return nok(code);
      }

      effects.consume(code);
      startMarkerCursor++;
      return consumeStart;
    }

    function consumeData(code) {
      effects.enter('wikiLinkData');
      effects.enter('wikiLinkTarget');
      return consumeTarget;
    }

    function consumeTarget(code) {
      if (code === aliasMarker.charCodeAt(aliasCursor)) {
        if (!data) return nok(code);
        effects.exit('wikiLinkTarget');
        effects.enter('wikiLinkAliasMarker');
        return consumeAliasMarker;
      }

      if (code === endMarker.charCodeAt(endMarkerCursor)) {
        if (!data) return nok(code);
        effects.exit('wikiLinkTarget');
        effects.exit('wikiLinkData');
        effects.enter('wikiLinkMarker');
        return consumeEnd;
      }

      if (!(code < 0 || code === 32)) {
        data = true;
      }

      effects.consume();
      return consumeTarget;
    }

    function consumeAliasMarker(code) {
      if (aliasCursor === aliasMarker.length) {
        effects.exit('wikiLinkAliasMarker');
        effects.enter('wikiLinkAlias');
        return consumeAlias;
      }

      if (code !== aliasMarker.charCodeAt(aliasCursor)) {
        return nok(code);
      }

      effects.consume(code);
      aliasCursor++;
      return consumeAliasMarker;
    }

    function consumeAlias(code) {
      if (code === endMarker.charCodeAt(endMarkerCursor)) {
        if (!alias) return nok(code);
        effects.exit('wikiLinkAlias');
        effects.exit('wikiLinkData');
        effects.enter('wikiLinkMarker');
        return consumeEnd;
      }

      if (!(code < 0 || code === 32)) {
        alias = true;
      }

      effects.consume();
      return consumeAlias;
    }

    function consumeEnd(code) {
      if (endMarkerCursor === endMarker.length) {
        effects.exit('wikiLinkMarker');
        effects.exit('wikiLink');
        return ok;
      }

      if (code !== endMarker.charCodeAt(endMarkerCursor)) {
        return nok(code);
      }

      effects.consume(code);
      endMarkerCursor++;
      return consumeEnd;
    }
  }

  var call = {
    tokenize: tokenize
  };
  return {
    text: {
      91: call
    }
  };
}

exports.html = html;
exports.syntax = wikiLink;
});

var index_cjs$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });



function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var safe__default = /*#__PURE__*/_interopDefaultLegacy(safe_1);

function fromMarkdown() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var permalinks = opts.permalinks || [];

  var defaultPageResolver = function defaultPageResolver(name) {
    return [name.replace(/ /g, '_').toLowerCase()];
  };

  var pageResolver = opts.pageResolver || defaultPageResolver;
  var newClassName = opts.newClassName || 'new';
  var wikiLinkClassName = opts.wikiLinkClassName || 'internal';

  var defaultHrefTemplate = function defaultHrefTemplate(permalink) {
    return "#/page/".concat(permalink);
  };

  var hrefTemplate = opts.hrefTemplate || defaultHrefTemplate;

  function enterWikiLink(token) {
    this.enter({
      type: 'wikiLink',
      value: null,
      data: {
        alias: null,
        permalink: null,
        exists: null
      }
    }, token);
  }

  function top(stack) {
    return stack[stack.length - 1];
  }

  function exitWikiLinkAlias(token) {
    var alias = this.sliceSerialize(token);
    var current = top(this.stack);
    current.data.alias = alias;
  }

  function exitWikiLinkTarget(token) {
    var target = this.sliceSerialize(token);
    var current = top(this.stack);
    current.value = target;
  }

  function exitWikiLink(token) {
    var wikiLink = this.exit(token);
    var pagePermalinks = pageResolver(wikiLink.value);
    var permalink = pagePermalinks.find(function (p) {
      return permalinks.indexOf(p) !== -1;
    });
    var exists = permalink !== undefined;

    if (!exists) {
      permalink = pagePermalinks[0];
    }

    var displayName = wikiLink.value;

    if (wikiLink.data.alias) {
      displayName = wikiLink.data.alias;
    }

    var classNames = wikiLinkClassName;

    if (!exists) {
      classNames += ' ' + newClassName;
    }

    wikiLink.data.alias = displayName;
    wikiLink.data.permalink = permalink;
    wikiLink.data.exists = exists;
    wikiLink.data.hName = 'a';
    wikiLink.data.hProperties = {
      className: classNames,
      href: hrefTemplate(permalink)
    };
    wikiLink.data.hChildren = [{
      type: 'text',
      value: displayName
    }];
  }

  return {
    enter: {
      wikiLink: enterWikiLink
    },
    exit: {
      wikiLinkTarget: exitWikiLinkTarget,
      wikiLinkAlias: exitWikiLinkAlias,
      wikiLink: exitWikiLink
    }
  };
}

function toMarkdown() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var aliasDivider = opts.aliasDivider || ':';
  var unsafe = [{
    character: '[',
    inConstruct: ['phrasing', 'label', 'reference']
  }, {
    character: ']',
    inConstruct: ['label', 'reference']
  }];

  function handler(node, _, context) {
    var exit = context.enter('wikiLink');
    var nodeValue = safe__default['default'](context, node.value, {
      before: '[',
      after: ']'
    });
    var nodeAlias = safe__default['default'](context, node.data.alias, {
      before: '[',
      after: ']'
    });
    var value;

    if (nodeAlias !== nodeValue) {
      value = "[[".concat(nodeValue).concat(aliasDivider).concat(nodeAlias, "]]");
    } else {
      value = "[[".concat(nodeValue, "]]");
    }

    exit();
    return value;
  }

  return {
    unsafe: unsafe,
    handlers: {
      wikiLink: handler
    }
  };
}

exports.fromMarkdown = fromMarkdown;
exports.toMarkdown = toMarkdown;
});

var index_cjs$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });




var warningIssued;

function wikiLinkPlugin() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = this.data();

  function add(field, value) {
    if (data[field]) data[field].push(value);else data[field] = [value];
  }

  if (!warningIssued && (this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers || this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors)) {
    warningIssued = true;
    console.warn('[remark-wiki-link] Warning: please upgrade to remark 13 to use this plugin');
  }

  add('micromarkExtensions', index_cjs.syntax(opts));
  add('fromMarkdownExtensions', index_cjs$1.fromMarkdown(opts));
  add('toMarkdownExtensions', index_cjs$1.toMarkdown(opts));
}

exports.wikiLinkPlugin = wikiLinkPlugin;
});

var format = createCommonjsModule(function (module) {
(function() {

  //// Export the API
  var namespace;

  // CommonJS / Node module
  {
    namespace = module.exports = format;
  }

  namespace.format = format;
  namespace.vsprintf = vsprintf;

  if (typeof console !== 'undefined' && typeof console.log === 'function') {
    namespace.printf = printf;
  }

  function printf(/* ... */) {
    console.log(format.apply(null, arguments));
  }

  function vsprintf(fmt, replacements) {
    return format.apply(null, [fmt].concat(replacements));
  }

  function format(fmt) {
    var argIndex = 1 // skip initial format argument
      , args = [].slice.call(arguments)
      , i = 0
      , n = fmt.length
      , result = ''
      , c
      , escaped = false
      , arg
      , tmp
      , leadingZero = false
      , precision
      , nextArg = function() { return args[argIndex++]; }
      , slurpNumber = function() {
          var digits = '';
          while (/\d/.test(fmt[i])) {
            digits += fmt[i++];
            c = fmt[i];
          }
          return digits.length > 0 ? parseInt(digits) : null;
        }
      ;
    for (; i < n; ++i) {
      c = fmt[i];
      if (escaped) {
        escaped = false;
        if (c == '.') {
          leadingZero = false;
          c = fmt[++i];
        }
        else if (c == '0' && fmt[i + 1] == '.') {
          leadingZero = true;
          i += 2;
          c = fmt[i];
        }
        else {
          leadingZero = true;
        }
        precision = slurpNumber();
        switch (c) {
        case 'b': // number in binary
          result += parseInt(nextArg(), 10).toString(2);
          break;
        case 'c': // character
          arg = nextArg();
          if (typeof arg === 'string' || arg instanceof String)
            result += arg;
          else
            result += String.fromCharCode(parseInt(arg, 10));
          break;
        case 'd': // number in decimal
          result += parseInt(nextArg(), 10);
          break;
        case 'f': // floating point number
          tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
          result += leadingZero ? tmp : tmp.replace(/^0/, '');
          break;
        case 'j': // JSON
          result += JSON.stringify(nextArg());
          break;
        case 'o': // number in octal
          result += '0' + parseInt(nextArg(), 10).toString(8);
          break;
        case 's': // string
          result += nextArg();
          break;
        case 'x': // lowercase hexadecimal
          result += '0x' + parseInt(nextArg(), 10).toString(16);
          break;
        case 'X': // uppercase hexadecimal
          result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase();
          break;
        default:
          result += c;
          break;
        }
      } else if (c === '%') {
        escaped = true;
      } else {
        result += c;
      }
    }
    return result;
  }

}());
});

var fault = create$2(Error);

var fault_1 = fault;

fault.eval = create$2(EvalError);
fault.range = create$2(RangeError);
fault.reference = create$2(ReferenceError);
fault.syntax = create$2(SyntaxError);
fault.type = create$2(TypeError);
fault.uri = create$2(URIError);

fault.create = create$2;

// Create a new `EConstructor`, with the formatted `format` as a first argument.
function create$2(EConstructor) {
  FormattedError.displayName = EConstructor.displayName || EConstructor.name;

  return FormattedError

  function FormattedError(format$1) {
    if (format$1) {
      format$1 = format.apply(null, arguments);
    }

    return new EConstructor(format$1)
  }
}

var matters_1 = matters;



var own$6 = {}.hasOwnProperty;

var markers = {yaml: '-', toml: '+'};

function matters(options) {
  var settings = options || 'yaml';
  var results = [];
  var index = -1;
  var length;

  // One preset or matter.
  if (typeof settings === 'string' || !('length' in settings)) {
    settings = [settings];
  }

  length = settings.length;

  while (++index < length) {
    results[index] = matter(settings[index]);
  }

  return results
}

function matter(option) {
  var result = option;

  if (typeof result === 'string') {
    if (!own$6.call(markers, result)) {
      throw fault_1('Missing matter definition for `%s`', result)
    }

    result = {type: result, marker: markers[result]};
  } else if (typeof result !== 'object') {
    throw fault_1('Expected matter to be an object, not `%j`', result)
  }

  if (!own$6.call(result, 'type')) {
    throw fault_1('Missing `type` in matter `%j`', result)
  }

  if (!own$6.call(result, 'fence') && !own$6.call(result, 'marker')) {
    throw fault_1('Missing `marker` or `fence` in matter `%j`', result)
  }

  return result
}

var syntax$6 = create$3;



function create$3(options) {
  var settings = matters_1(options);
  var length = settings.length;
  var index = -1;
  var flow = {};
  var matter;
  var code;

  while (++index < length) {
    matter = settings[index];
    code = fence$1(matter, 'open').charCodeAt(0);
    if (code in flow) {
      flow[code].push(parse$2(matter));
    } else {
      flow[code] = [parse$2(matter)];
    }
  }

  return {flow: flow}
}

function parse$2(matter) {
  var name = matter.type;
  var anywhere = matter.anywhere;
  var valueType = name + 'Value';
  var fenceType = name + 'Fence';
  var sequenceType = fenceType + 'Sequence';
  var fenceConstruct = {tokenize: tokenizeFence, partial: true};
  var buffer;

  return {tokenize: tokenizeFrontmatter, concrete: true}

  function tokenizeFrontmatter(effects, ok, nok) {
    var self = this;

    return start

    function start(code) {
      var position = self.now();

      if (position.column !== 1 || (!anywhere && position.line !== 1)) {
        return nok(code)
      }

      effects.enter(name);
      buffer = fence$1(matter, 'open');
      return effects.attempt(fenceConstruct, afterOpeningFence, nok)(code)
    }

    function afterOpeningFence(code) {
      buffer = fence$1(matter, 'close');
      return lineEnd(code)
    }

    function lineStart(code) {
      if (code === -5 || code === -4 || code === -3 || code === null) {
        return lineEnd(code)
      }

      effects.enter(valueType);
      return lineData(code)
    }

    function lineData(code) {
      if (code === -5 || code === -4 || code === -3 || code === null) {
        effects.exit(valueType);
        return lineEnd(code)
      }

      effects.consume(code);
      return lineData
    }

    function lineEnd(code) {
      // Require a closing fence.
      if (code === null) {
        return nok(code)
      }

      // Can only be an eol.
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return effects.attempt(fenceConstruct, after, lineStart)
    }

    function after(code) {
      effects.exit(name);
      return ok(code)
    }
  }

  function tokenizeFence(effects, ok, nok) {
    var bufferIndex = 0;

    return start

    function start(code) {
      if (code === buffer.charCodeAt(bufferIndex)) {
        effects.enter(fenceType);
        effects.enter(sequenceType);
        return insideSequence(code)
      }

      return nok(code)
    }

    function insideSequence(code) {
      if (bufferIndex === buffer.length) {
        effects.exit(sequenceType);

        if (code === -2 || code === -1 || code === 32) {
          effects.enter('whitespace');
          return insideWhitespace(code)
        }

        return fenceEnd(code)
      }

      if (code === buffer.charCodeAt(bufferIndex)) {
        effects.consume(code);
        bufferIndex++;
        return insideSequence
      }

      return nok(code)
    }

    function insideWhitespace(code) {
      if (code === -2 || code === -1 || code === 32) {
        effects.consume(code);
        return insideWhitespace
      }

      effects.exit('whitespace');
      return fenceEnd(code)
    }

    function fenceEnd(code) {
      if (code === -5 || code === -4 || code === -3 || code === null) {
        effects.exit(fenceType);
        return ok(code)
      }

      return nok(code)
    }
  }
}

function fence$1(matter, prop) {
  var marker;

  if (matter.marker) {
    marker = pick(matter.marker, prop);
    return marker + marker + marker
  }

  return pick(matter.fence, prop)
}

function pick(schema, prop) {
  return typeof schema === 'string' ? schema : schema[prop]
}

var micromarkExtensionFrontmatter = syntax$6;

var fromMarkdown$8 = createFromMarkdown;



function createFromMarkdown(options) {
  var settings = matters_1(options);
  var length = settings.length;
  var index = -1;
  var enter = {};
  var exit = {};
  var matter;

  while (++index < length) {
    matter = settings[index];
    enter[matter.type] = opener(matter);
    exit[matter.type] = close;
    exit[matter.type + 'Value'] = value;
  }

  return {enter: enter, exit: exit}
}

function opener(matter) {
  return open
  function open(token) {
    this.enter({type: matter.type, value: ''}, token);
    this.buffer();
  }
}

function close(token) {
  var data = this.resume();
  // Remove the initial and final eol.
  this.exit(token).value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
}

function value(token) {
  this.config.enter.data.call(this, token);
  this.config.exit.data.call(this, token);
}

var toMarkdown$7 = createToMarkdown;



function createToMarkdown(options) {
  var unsafe = [];
  var handlers = {};
  var settings = matters_1(options);
  var length = settings.length;
  var index = -1;
  var matter;

  while (++index < length) {
    matter = settings[index];
    handlers[matter.type] = handler(matter);
    unsafe.push({atBreak: true, character: fence$2(matter, 'open').charAt(0)});
  }

  return {unsafe: unsafe, handlers: handlers}
}

function handler(matter) {
  var open = fence$2(matter, 'open');
  var close = fence$2(matter, 'close');

  return handle

  function handle(node) {
    return open + (node.value ? '\n' + node.value : '') + '\n' + close
  }
}

function fence$2(matter, prop) {
  var marker;

  if (matter.marker) {
    marker = pick$1(matter.marker, prop);
    return marker + marker + marker
  }

  return pick$1(matter.fence, prop)
}

function pick$1(schema, prop) {
  return typeof schema === 'string' ? schema : schema[prop]
}

var remarkFrontmatter = frontmatter;

function frontmatter(options) {
  var data = this.data();
  add('micromarkExtensions', micromarkExtensionFrontmatter(options));
  add('fromMarkdownExtensions', fromMarkdown$8(options));
  add('toMarkdownExtensions', toMarkdown$7(options));
  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value);
    else data[field] = [value];
  }
}

var immutable = extend$1;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend$1() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target
}

var unistUtilVisit = visit;



var CONTINUE$1 = unistUtilVisitParents.CONTINUE;
var SKIP$1 = unistUtilVisitParents.SKIP;
var EXIT$1 = unistUtilVisitParents.EXIT;

visit.CONTINUE = CONTINUE$1;
visit.SKIP = SKIP$1;
visit.EXIT = EXIT$1;

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  unistUtilVisitParents(tree, test, overload, reverse);

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    var index = parent ? parent.children.indexOf(node) : null;
    return visitor(node, index, parent)
  }
}

var mdastUtilDefinitions = getDefinitionFactory;

var own$7 = {}.hasOwnProperty;

// Get a definition in `node` by `identifier`.
function getDefinitionFactory(node, options) {
  return getterFactory(gather(node, options))
}

// Gather all definitions in `node`
function gather(node, options) {
  var cache = {};

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node')
  }

  unistUtilVisit(node, 'definition', options && options.commonmark ? commonmark : normal);

  return cache

  function commonmark(definition) {
    var id = normalise(definition.identifier);
    if (!own$7.call(cache, id)) {
      cache[id] = definition;
    }
  }

  function normal(definition) {
    cache[normalise(definition.identifier)] = definition;
  }
}

// Factory to get a node from the given definition-cache.
function getterFactory(cache) {
  return getter

  // Get a node from the bound definition-cache.
  function getter(identifier) {
    var id = identifier && normalise(identifier);
    return id && own$7.call(cache, id) ? cache[id] : null
  }
}

function normalise(identifier) {
  return identifier.toUpperCase()
}

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice$3 = Array.prototype.slice;
var toStr$1 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$1.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice$3.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice$3.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice$3.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var functionBind = Function.prototype.bind || implementation;

var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

/* Dependencies. */

/* Expose. */


var all_1 = all$1;
/* Stringify all children of `parent`. */

function all$1(ctx, parent) {
  var children = parent && parent.children;
  if (!children) return '';
  return children.map(function (child, index) {
    return one_1(ctx, child, index, parent);
  }).join('');
}

/* Expose. */
var blockquote_1 = blockquote;

var defaultMacro = function defaultMacro(innerText) {
  return "\\begin{Quotation}\n".concat(innerText, "\n\\end{Quotation}\n\n");
};
/* Stringify a Blockquote `node`. */


function blockquote(ctx, node) {
  var macro = ctx.blockquote || defaultMacro;

  var innerText = all_1(ctx, node);

  return macro(innerText.trim());
}

/* Expose. */
var _break = br;

var defaultMacro$1 = function defaultMacro() {
  return ' \\\\\n';
};
/* Stringify a break `node`. */


function br(ctx, node) {
  var macro = ctx["break"] ? ctx["break"] : defaultMacro$1;
  return macro(node);
}

/* Expose. */
var code_1 = code$1;
var codeBlockParamsMapping = [null, 'hl_lines=', 'linenostart='];

var defaultMacro$2 = function defaultMacro(content, lang, attrs) {
  // Default language is "text"
  if (!lang) lang = 'text'; // Create a list of attributes to be serialized

  var localCodeBlockParams = Array(codeBlockParamsMapping.length).fill(''); // Check for attributes and enumerate them

  if (attrs !== null) {
    for (var i = 0; i < codeBlockParamsMapping.length; i++) {
      var _param = codeBlockParamsMapping[i]; // Skip unwanted parameters

      if (_param === null) continue;
      var location = attrs.indexOf(_param); // Parse the attributes we know

      if (location > -1) {
        var begin = location + _param.length;
        var remaining = attrs.slice(begin);
        var length = remaining.indexOf(' ');
        var value = length > -1 ? attrs.slice(begin, begin + length) : remaining; // Remove string-delimiters

        if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1).trim();
        }

        localCodeBlockParams[i] = value;
      }
    }
  } // If we matched something, return optional arguments
  // Note that we do stop serialization on a chain of empty arguments


  var matched = localCodeBlockParams.reduce(function (a, v, i) {
    return v !== '' ? i : a;
  }, -1) + 1;
  var param = matched > 0 ? "[".concat(localCodeBlockParams.slice(0, matched).join(']['), "]") : '';
  return "\\begin{CodeBlock}".concat(param, "{").concat(lang, "}\n").concat(content, "\n\\end{CodeBlock}\n\n");
};
/* Stringify a code `node`. */


function code$1(ctx, node) {
  var macro = ctx.code || defaultMacro$2;
  return "".concat(macro(node.value, node.lang, node.meta, node));
}

code$1.macro = defaultMacro$2;

var definition_1 = definition$1;

var defaultMacro$3 = function defaultMacro(ctx, identifier, url, title) {
  var node = {
    children: [{
      type: 'link',
      title: title,
      url: url,
      children: [{
        type: 'text',
        value: url
      }]
    }]
  };

  var link = all_1(ctx, node);

  return "\\footnote{\\label{".concat(identifier, "}").concat(link, "}");
};

function definition$1(ctx, node) {
  var macro = ctx.definition ? ctx.definition : defaultMacro$3;
  return macro(ctx, node.identifier, node.url, node.title);
}

// TODO: make it customizable

/* Expose. */
var _delete = deleteNode;
/* Stringify a delete `node`. */

function deleteNode(ctx, node, index, parent) {
  var contents = all_1(ctx, node);

  return "\\sout{".concat(contents, "}");
}

// TODO: make it customizable

/* Expose. */
var emphasis_1 = emphasis;
/* Stringify an emphasis `node`. */

function emphasis(ctx, node, index, parent) {
  var contents = all_1(ctx, node);

  return "\\textit{".concat(contents, "}");
}

/* Expose. */
var footnote = notes;

var defaultMacro$4 = function defaultMacro(identifier, text, protect) {
  var footnote = "\\footnote[".concat(identifier, "]{\\label{footnote:").concat(identifier, "} ").concat(text, "}");

  if (protect) {
    return "".concat(footnote, "\\protect");
  }

  return footnote;
};

function autoId(node) {
  var _node$position$start = node.position.start,
      line = _node$position$start.line,
      column = _node$position$start.column,
      offset = _node$position$start.offset;
  return "l".concat(line, "c").concat(column, "o").concat(offset);
}
/* Stringify a footnote `node`. */


function notes(ctx, node, _index, parent) {
  var macro = ctx.footnote || defaultMacro$4;
  var protect = !!node.inHeading;
  var identifier = autoId(node);
  return macro(identifier, all_1(ctx, node).trim(), protect);
}

var footnoteDefinition = notes$1;

var defaultMacro$5 = function defaultMacro(identifier, text, protect) {
  var footnote = "\\footnotetext[".concat(identifier, "]{\\label{footnote:").concat(identifier, "} ").concat(text, "}");

  if (protect) {
    return "".concat(footnote, "\\protect");
  }

  return footnote;
};

function notes$1(ctx, node) {
  var macro = ctx.footnoteDefinition || defaultMacro$5;
  var protect = !!node.inHeading;
  return macro(node.identifier, all_1(ctx, node).trim());
}

var footnoteReference = notes$2;

var defaultMacro$6 = function defaultMacro(identifier) {
  return "\\textsuperscript{\\ref{footnote:".concat(identifier, "}}");
};

function notes$2(ctx, node) {
  var macro = ctx.footnoteReference || defaultMacro$6;
  return macro(node.identifier);
}

/* Expose. */
var heading_1 = heading;
var defaultHeadings = [function (val) {
  return "\\part{".concat(val, "}\n");
}, function (val) {
  return "\\chapter{".concat(val, "}\n");
}, function (val) {
  return "\\section{".concat(val, "}\n");
}, function (val) {
  return "\\subsection{".concat(val, "}\n");
}, function (val) {
  return "\\subsubsection{".concat(val, "}\n");
}, function (val) {
  return "\\paragraph{".concat(val, "}\n");
}, function (val) {
  return "\\subparagaph{".concat(val, "}\n");
}];
/* Stringify a heading `node`.
 */

function heading(ctx, node) {
  var depth = node.depth;

  var content = all_1(ctx, node);

  var headings = ctx.headings || defaultHeadings;
  var fn = headings[node.depth - 1];

  if (typeof fn !== 'function') {
    throw new Error("Cannot compile heading of depth ".concat(depth, ": not a function"));
  }

  return fn(content);
}

// TODO: make it customizable

/* Expose. */
var html_1 = html;
/* Stringify a html `node`. */

function html(ctx, node, index, parent) {
  return node.value;
}

/* Expose. */
var image_1 = image$1;

var defaultInlineMatcher = function defaultInlineMatcher(node, parent) {
  return parent.type === 'paragraph' && parent.children.length - 1 || parent.type === 'heading';
};

var defaultMacro$7 = function defaultMacro(node) {
  /*
  Note that MDAST `Image` nodes don't have a `width` property.
  You might still want to specify a width since \includegraphics handles it.
  */
  var width = node.width ? "[width=".concat(node.width, "]") : '';
  return "\\includegraphics".concat(width, "{").concat(node.url, "}");
};

var defaultInline = defaultMacro$7;

function image$1(ctx, node, _, parent) {
  var options = ctx.image || {};
  /*
  LaTeX cannot handle remote images, only local ones.
  \includegraphics crashes with filenames that contain more than one `.`,
  the workaround is \includegraphics{/path/to/{image.foo}.jpg}
  */

  if (node.url) {
    var pathParts = node.url.split('/');
    var filename = pathParts.pop();

    if (filename.includes('.')) {
      var filenameParts = filename.split('.');
      var extension = filenameParts.pop();
      var basename = filenameParts.join('.');
      var safeBasename = basename.includes('.') ? "{".concat(basename, "}.").concat(extension) : "".concat(basename, ".").concat(extension);
      pathParts.push(safeBasename);
      node.url = "".concat(pathParts.join('/'));
    }
  }

  var macro = options.image ? options.image : defaultMacro$7;
  var inlineMatcher = options.inlineMatcher ? options.inlineMatcher : defaultInlineMatcher;

  if (inlineMatcher(node, parent)) {
    macro = options.inlineImage ? options.inlineImage : defaultInline;
  }

  return macro(node);
}

var collapseWhiteSpace = collapse;

// `collapse(' \t\nbar \nbaz\t') // ' bar baz '`
function collapse(value) {
  return String(value).replace(/\s+/g, ' ')
}

/* Dependencies. */



/* Expose. */


var escaper = encode$1;
encode$1.escape = escape;
/* List of enforced escapes. */

var defaultEscapes = {
  '#': '\\#',
  '$': '\\$',
  '%': '\\%',
  '&': '\\&',
  '\\': '\\textbackslash{}',
  '^': '\\textasciicircum{}',
  '_': '\\_',
  '{': '\\{',
  '}': '\\}',
  '~': '\\textasciitilde{}'
};
/* Encode special characters in `value`. */

function encode$1(value) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var escapes = immutable(defaultEscapes, opts);
  var set = toExpression$1(Object.keys(escapes));
  value = value.replace(set, function (_char, pos, val) {
    return one(_char, val.charAt(pos + 1), escapes);
  });
  return value;
}
/* Encode `char` according to `options`. */


function one(_char2, next, escapes) {
  if (src(escapes, _char2)) {
    return escapes[_char2];
  }

  return _char2;
}
/* Create an expression for `characters`. */


function toExpression$1(characters) {
  var pattern = characters.map(escapeRegExp).join('|');
  return new RegExp("[".concat(pattern, "]"), 'g');
}

function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

var inlinecode = function inlineCode(ctx, node) {
  var finalCode = escaper(collapseWhiteSpace(node.value));
  return "\\texttt{".concat(finalCode, "}");
};

/* Dependencies. */



/* Expose. */


var link_1 = link;

var defaultMacro$8 = function defaultMacro(displayText, url, title) {
  return "\\externalLink{".concat(displayText, "}{").concat(url, "}");
};
/* Stringify a link `node`.
*/


function link(ctx, node) {
  if (!node.url) return '';
  var config = ctx.link || {};
  var macro = src(config, 'macro') ? config.macro : defaultMacro$8;
  var prefix = src(config, 'prefix') ? config.prefix : '';
  var url = escaper(node.url.startsWith('/') ? prefix + node.url : node.url);
  return macro(all_1(ctx, node), url, node.title);
}

var linkReference_1 = linkReference;

var defaultMacro$9 = function defaultMacro(reference, inner) {
  return "\\hyperref[".concat(reference, "]{").concat(inner, "}");
};

function linkReference(ctx, node) {
  var macro = ctx.linkReference ? ctx.linkReference : defaultMacro$9;

  var innerText = all_1(ctx, node);

  if (!ctx.definitions(node.identifier)) return "[".concat(innerText, "]");
  return macro(node.identifier, innerText);
}

var list_1 = list$1;

var defaultMacro$a = function defaultMacro(innerText, isOrdered) {
  if (isOrdered) {
    return "\\begin{enumerate}\n".concat(innerText, "\\end{enumerate}\n");
  } else {
    return "\\begin{itemize}\n".concat(innerText, "\\end{itemize}\n");
  }
};

function list$1(ctx, node) {
  var rebberList = src(ctx, 'list') ? ctx.list : defaultMacro$a;

  var itemized = all_1(ctx, node);

  return rebberList(itemized, node.ordered);
}

var defaultMacro$b = function defaultMacro(innerText) {
  return "\\item\\relax ".concat(innerText, "\n");
};

var listItem_1$1 = listItem$1;

function listItem$1(ctx, node) {
  var rebberListItem = src(ctx, 'listItem') ? ctx.listItem : defaultMacro$b;
  return rebberListItem(all_1(ctx, node).trim());
}

/* Expose. */
var paragraph_1 = paragraph;
/* Stringify a paragraph `node`.
 */

function paragraph(ctx, node) {
  var contents = all_1(ctx, node);

  return "".concat(contents.trim(), "\n\n");
}

/* Dependencies. */

/* Expose. */


var root_1 = root;
/* Stringify a text `node`. */

function root(ctx, node, _, parent) {
  var children = node.children;
  if (!children) return '';
  var previous;
  return children.reduce(function (output, child, index) {
    if (previous) {
      if (child.type === previous.type && previous.type === 'list') {
        output += previous.ordered === child.ordered ? '\n\n\n' : '\n\n';
      } else if (previous.type === 'list' && child.type === 'code' && !child.lang) {
        output += '\n\n\n';
      } else {
        output += '\n\n';
      }
    }

    output += one_1(ctx, child, index, node);
    previous = child;
    return output;
  }, '');
}

// TODO: make it customizable

/* Expose. */
var strong_1 = strong;
/* Stringify a strong `node`. */

function strong(ctx, node, index, parent) {
  var contents = all_1(ctx, node);

  return "\\textbf{".concat(contents, "}");
}

var clone_1 = createCommonjsModule(function (module) {
var clone = (function() {

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if ( module.exports) {
  module.exports = clone;
}
});

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




/* Expose. */


var table_1 = table;

var defaultHeaderParse = function defaultHeaderParse(rows) {
  var columns = Math.max.apply(Math, _toConsumableArray(rows.map(function (l) {
    return l.split('&').length;
  })));
  var colHeader = "|".concat('X[-1]|'.repeat(columns));
  return colHeader;
};

var defaultMacro$c = function defaultMacro(ctx, node) {
  var headerParse = ctx.headerParse ? ctx.headerParse : defaultHeaderParse;
  var parsed = node.children.map(function (n, index) {
    return one_1(ctx, n, index, node);
  });
  var inner = parsed.join('');
  var colHeader = headerParse(parsed);
  var spreadCell = typeof ctx.spreadCell === 'string' ? ctx.spreadCell : ' spread 0pt ';
  var caption = node.caption ? "\n\\captionof{table}{".concat(node.caption, "}\n") : '';
  return "\\begin{longtabu}".concat(spreadCell, "{").concat(colHeader, "} \\hline\n").concat(inner, "\\end{longtabu}").concat(caption, "\n");
};
/* Stringify a table `node`. */


function table(ctx, node) {
  var macro = ctx.table || defaultMacro$c;
  var overriddenCtx = clone_1(ctx);
  overriddenCtx.image = overriddenCtx.image ? overriddenCtx.image : {};

  overriddenCtx.image.inlineMatcher = function () {
    return true;
  };

  return macro(overriddenCtx, node);
}

/* Expose. */
var tableCell_1 = tableCell;

var defaultMacro$d = function defaultMacro(ctx, node) {
  return all_1(ctx, node);
};
/* Stringify a tableCell `node`. */


function tableCell(ctx, node) {
  var macro = ctx.tableCell || defaultMacro$d;
  return macro(ctx, node);
}

/* Expose. */


var tableRow_1 = tableRow;

var defaultMacro$e = function defaultMacro(ctx, node) {
  var parsed = [];
  node.children.map(function (n, index) {
    return parsed.push(one_1(ctx, n, index, node));
  });
  var line = parsed.join(' & ');
  return "".concat(line, " \\\\ \\hline\n");
};

var defaultFirstLineRowFont = "\\rowfont[c]{\\bfseries}";
var defaultOtherLineRowFont = "\\rowfont[l]{}";
/* Stringify a tableRow `node`. */

function tableRow(ctx, node, index) {
  var macro = ctx.tableRow || defaultMacro$e;
  var firstLineRowFont = ctx.firstLineRowFont || defaultFirstLineRowFont;
  var otherLineRowFont = ctx.otherLineRowFont || defaultOtherLineRowFont;

  if (index === 0) {
    return "".concat(firstLineRowFont, "\n").concat(macro(ctx, node));
  } else if (index === 1) {
    return "".concat(otherLineRowFont, "\n").concat(macro(ctx, node));
  } else {
    return macro(ctx, node);
  }
}

var trimLines_1 = trimLines;

var ws = /[ \t]*\n+[ \t]*/g;
var newline = '\n';

function trimLines(value) {
  return String(value).replace(ws, newline)
}

/* Dependencies. */



/* Stringify a text `node`. */


var text$5 = function text(ctx, node, index, parent) {
  var value = trimLines_1(node.value);
  return isLiteral(parent) ? value : escaper(value, ctx.escapes);
}; // TODO: `tagName` isn't part of MDAST!

/* Check if content of `node` should not be escaped. */


function isLiteral(node) {
  return node && (node.tagName === 'script' || node.tagName === 'style');
}

/* Expose. */
var thematicBreak_1 = thematicBreak$1;

var defaultMacro$f = function defaultMacro() {
  return '\\horizontalLine\n\n';
};
/* Stringify a delete `node`. */


function thematicBreak$1(ctx, node, index, parent) {
  var macro = ctx.thematicBreak || defaultMacro$f;
  return macro(node);
}

/* Dependencies. */



/* Expose. */


var one_1 = one$1;
/* Handlers. */

var handlers$4 = {};
handlers$4.blockquote = blockquote_1;
handlers$4["break"] = _break;
handlers$4.code = code_1;
handlers$4.definition = definition_1;
handlers$4["delete"] = _delete;
handlers$4.emphasis = emphasis_1;
handlers$4.footnote = footnote;
handlers$4.footnoteDefinition = footnoteDefinition;
handlers$4.footnoteReference = footnoteReference;
handlers$4.heading = heading_1;
handlers$4.html = html_1;
handlers$4.image = image_1;
handlers$4.inlineCode = inlinecode;
handlers$4.link = link_1;
handlers$4.linkReference = linkReference_1;
handlers$4.list = list_1;
handlers$4.listItem = listItem_1$1;
handlers$4.paragraph = paragraph_1;
handlers$4.root = root_1;
handlers$4.strong = strong_1;
handlers$4.table = table_1;
handlers$4.tableCell = tableCell_1;
handlers$4.tableRow = tableRow_1;
handlers$4.text = text$5;
handlers$4.thematicBreak = thematicBreak_1;
/* Stringify `node`. */

function one$1(ctx, node, index, parent) {
  var handlersOverrides = src(ctx, 'overrides') ? ctx.overrides : {};
  var h = immutable(handlers$4, handlersOverrides);
  var type = node && node.type;

  if (!type) {
    throw new Error("Received node '".concat(node, "' does not have a type."));
  }

  if (!src(h, type) || typeof h[type] !== 'function') {
    throw new Error("Cannot compile unknown node `".concat(type, "`"));
  }

  return h[type](ctx, node, index, parent);
}

var headingVisitor = plugin;
/*
LaTeX requires special handlings of footnotes placed in headings such as \section{}
We therefore mark each footnote placed in heading for later handling.
*/

var nodeTypes = ['footnote', 'footnoteDefinition'];

function plugin() {
  return function headingVisitor(node, index, parent) {
    if (nodeTypes.includes(node.type) && node.inHeading !== true) {
      node.inHeading = true;
    }

    if (node.children) {
      node.children.forEach(function (n, i) {
        return headingVisitor(n);
      });
    }
  };
}

var referenceVisitors = function () {
  var state = {};
  return {
    definitionVisitor: function definitionVisitor() {
      return function (node, index, parent) {
        var identifier = node.identifier;

        while (Object.keys(state).includes(identifier)) {
          identifier += '-1';
        }

        state[identifier] = node.url;
        node.identifier = identifier; // force to remove twice so that latex compiles

        if (node.referenceType === 'shortcut') {
          // remark for abbr
          parent.children.splice(index, 1);
        }
      };
    },
    imageReferenceVisitor: function imageReferenceVisitor() {
      return function (node) {
        node.type = 'image';
        node.title = '';
        node.url = state[node.identifier];
      };
    },
    addIdentifier: function addIdentifier(identifier, content) {
      state[identifier] = content;
    }
  };
};

var preprocessors = preprocess$1;

function preprocess$1(ctx, tree) {
  var _referenceVisitors = referenceVisitors(),
      definitionVisitor = _referenceVisitors.definitionVisitor,
      imageReferenceVisitor = _referenceVisitors.imageReferenceVisitor;

  var defaultVisitors = {
    definition: [definitionVisitor],
    imageReference: [imageReferenceVisitor],
    heading: [headingVisitor]
  };
  var visitors = immutable(defaultVisitors, ctx.preprocessors || {});
  Object.keys(visitors).forEach(function (nodeType) {
    if (Array.isArray(visitors[nodeType])) {
      visitors[nodeType].forEach(function (visitor) {
        return unistUtilVisit(tree, nodeType, visitor(ctx, tree));
      });
    } else {
      unistUtilVisit(tree, nodeType, visitors[nodeType](ctx, tree));
    }
  });
}

/* Dependencies. */







/* Expose. */


var dist$1 = stringify$1;
var toLaTeX_1 = toLaTeX;

function toLaTeX(tree) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  /* Stringify the given MDAST node. */
  preprocessors(options, tree); // resolve definition after preprocess because this step can create new identifiers

  options.definitions = mdastUtilDefinitions(tree, options);
  return one_1(options, tree, undefined, undefined);
}
/* Compile MDAST tree using toLaTeX */


function stringify$1(config) {
  var settings = immutable(config, this.data('settings'));
  this.Compiler = compiler;

  function compiler(tree) {
    return toLaTeX(tree, settings, tree);
  }
}
dist$1.toLaTeX = toLaTeX_1;

function isHeading(node) {
    return node.type === 'heading';
}
function assertHeading(node) {
    if (!isHeading(node))
        throwWrongNode('heading', node);
}
function isTextDirective(node) {
    return node.type === 'textDirective';
}
function isLabelDirective(node) {
    return isTextDirective(node) && node.name === 'label';
}
function assertLabelDirective(node) {
    if (!isLabelDirective(node))
        throwWrongNode('label', node);
}
function isEmbedDirective(node) {
    return isTextDirective(node) && node.name === 'embed';
}
function assertEmbedDirective(node) {
    if (!isEmbedDirective(node))
        throwWrongNode('embed', node);
}
function isLabeledLink(node) {
    return node.type === 'wikiLink';
}
function assertLabeledLink(node) {
    if (!isLabeledLink(node))
        throwWrongNode('wikiLink', node);
}
function isBlockquote(node) {
    return node.type === 'blockquote';
}
function assertBlockquote(node) {
    if (!isBlockquote(node))
        throwWrongNode('blockquote', node);
}
function isInlineMath(node) {
    return node.type === 'inlineMath';
}
function assertInlineMath(node) {
    if (!isInlineMath(node))
        throwWrongNode('inlineMath', node);
}
function isMath(node) {
    return node.type === 'math';
}
function assertMath(node) {
    if (!isMath(node))
        throwWrongNode('math', node);
}
function throwWrongNode(expected, node) {
    throw new Error("Expected node of type " + expected + " but received node " + JSON.stringify(node));
}

function preprocess$2(data) {
    return data
        .replaceAll(/\$\$(.+)$/gm, '$$$$\n$1')
        .replaceAll(/^(.+)\$\$/gm, '$1\n$$$$')
        .replaceAll(/!\[\[([^\]]+)]]/gm, ':embed{target="$1"}')
        .replaceAll(/^\^([^ \t]+)[ \t\n]+$/gm, ':label{text=$1}');
}

function toVFile(file) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, file.vault.adapter.exists(file.path)];
                case 1:
                    if (!(_a.sent())) {
                        throw new Error(file.basename + " does not exist");
                    }
                    return [4 /*yield*/, file.vault.cachedRead(file)];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, makeVFile(data, file.path)];
            }
        });
    });
}
function makeVFile(contents, path, subpath) {
    var options = {
        contents: preprocess$2(contents),
        path: path,
        data: { embedded: new Array() },
        subpath: subpath,
    };
    return vfile(options);
}
function toNamedVFile(vfile) {
    if (vfile.path === undefined)
        throw new Error('Processed file must have a name');
    return vfile;
}

var ImagePathSettings;
(function (ImagePathSettings) {
    ImagePathSettings[ImagePathSettings["RelativeToRoot"] = 0] = "RelativeToRoot";
    ImagePathSettings[ImagePathSettings["FullPath"] = 1] = "FullPath";
    ImagePathSettings[ImagePathSettings["BaseName"] = 2] = "BaseName";
    ImagePathSettings[ImagePathSettings["RelativeToExport"] = 3] = "RelativeToExport";
})(ImagePathSettings || (ImagePathSettings = {}));
var ImagePathSettingDescriptions = [
    'Relative to vault root',
    'Absolute path',
    'File base name',
    'Relative to export directory',
];
var ExportToTexSettings = /** @class */ (function () {
    function ExportToTexSettings() {
        this.refCommand = 'cref';
        this.defaultToEquation = false;
        this.additionalMathEnvironments = [];
        this.generateLabels = true;
        this.compressNewlines = false;
        this.imagePathSettings = ImagePathSettings.RelativeToRoot;
        this.defaultExportDirectory = '';
    }
    return ExportToTexSettings;
}());
function ensureSettings(partial) {
    var _a, _b, _c, _d, _e, _f, _g;
    var settings = new ExportToTexSettings();
    settings.refCommand = (_a = partial.refCommand) !== null && _a !== void 0 ? _a : settings.refCommand;
    settings.additionalMathEnvironments = (_b = partial.additionalMathEnvironments) !== null && _b !== void 0 ? _b : settings.additionalMathEnvironments;
    settings.generateLabels = (_c = partial.generateLabels) !== null && _c !== void 0 ? _c : settings.generateLabels;
    settings.defaultToEquation = (_d = partial.defaultToEquation) !== null && _d !== void 0 ? _d : settings.defaultToEquation;
    settings.compressNewlines = (_e = partial.compressNewlines) !== null && _e !== void 0 ? _e : settings.compressNewlines;
    if (partial.imagePathSettings === undefined &&
        partial.fullImagePath !== undefined) {
        settings.imagePathSettings = partial.fullImagePath
            ? ImagePathSettings.FullPath
            : ImagePathSettings.RelativeToRoot;
    }
    else {
        settings.imagePathSettings = (_f = partial.imagePathSettings) !== null && _f !== void 0 ? _f : settings.imagePathSettings;
    }
    settings.defaultExportDirectory = (_g = partial.defaultExportDirectory) !== null && _g !== void 0 ? _g : settings.defaultExportDirectory;
    return settings;
}

/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

var normalizePath = function(path, stripTrailing) {
  if (typeof path !== 'string') {
    throw new TypeError('expected path to be a string');
  }

  if (path === '\\' || path === '/') return '/';

  var len = path.length;
  if (len <= 1) return path;

  // ensure that win32 namespaces has two leading slashes, so that the path is
  // handled properly by the win32 version of path.parse() after being normalized
  // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
  var prefix = '';
  if (len > 4 && path[3] === '\\') {
    var ch = path[2];
    if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
      path = path.slice(2);
      prefix = '//';
    }
  }

  var segs = path.split(/[/\\]+/);
  if (stripTrailing !== false && segs[segs.length - 1] === '') {
    segs.pop();
  }
  return prefix + segs.join('/');
};

function embed() {
    var _this = this;
    return function (tree, file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, embedTransformer(this, tree, file)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    }); }); };
}
function embedTransformer(processor, tree, file) {
    return __awaiter(this, void 0, void 0, function () {
        var promises;
        return __generator(this, function (_a) {
            promises = [];
            unistUtilVisit(tree, { type: 'textDirective', name: 'embed' }, function (node, index, parent) {
                assertEmbedDirective(node);
                if (parent === undefined)
                    throw new Error('found an embed without a parent');
                var resolver = new EmbedResolver(processor, file, node);
                promises.push(resolver
                    .resolve()
                    .then(function (newNode) {
                    parent.children[index] = newNode;
                })
                    .catch(function (reason) {
                    file.message(reason, node, 'embed:error');
                    parent.children[index] = resolver.failedEmbed();
                }));
            });
            return [2 /*return*/, Promise.allSettled(promises).then(function () {
                    file.info('All embeds resolved', tree);
                })];
        });
    });
}
var EmbedResolver = /** @class */ (function () {
    function EmbedResolver(processor, parentFile, node) {
        this.processor = processor;
        this.parentFile = parentFile;
        this.node = node;
    }
    EmbedResolver.prototype.failedEmbed = function () {
        var embedTarget = this.node.attributes.target;
        this.parentFile.message("Failed to resolve embed " + embedTarget, this.node);
        return { type: 'inlineCode', value: "Missing " + embedTarget };
    };
    EmbedResolver.prototype.resolve = function () {
        return __awaiter(this, void 0, void 0, function () {
            var embedTarget, metadata, _a, file, result, subpath, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        embedTarget = this.node.attributes.target;
                        this.parentFile.info("Resolving embed \"" + embedTarget + "\"", this.node);
                        metadata = this.processor.data('metadata');
                        if (!(metadata instanceof obsidian.MetadataCache)) {
                            throw Error('metadata must be passed to the processor in the form of an obsidian MetadataCache');
                        }
                        _a = this.getTarget(metadata), file = _a.file, result = _a.result, subpath = _a.subpath;
                        if (file === undefined) {
                            return [2 /*return*/, this.failedEmbed()];
                        }
                        _b = file.extension;
                        switch (_b) {
                            case 'md': return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 4];
                    case 1:
                        if (result === null) {
                            return [2 /*return*/, this.failedEmbed()];
                        }
                        this.parentFile.info("Reading embedded file " + file.basename, this.node);
                        return [4 /*yield*/, file.vault.adapter.exists(file.path)];
                    case 2:
                        if (!(_c.sent())) {
                            this.parentFile.message(file.basename + " does not exists", this.node);
                            return [2 /*return*/, this.failedEmbed()];
                        }
                        return [4 /*yield*/, this.processMarkdownEmbed(embedTarget, subpath, file, result)];
                    case 3: return [2 /*return*/, _c.sent()];
                    case 4: return [2 /*return*/, this.processImageEmbed(embedTarget, subpath, file)];
                }
            });
        });
    };
    EmbedResolver.prototype.processMarkdownEmbed = function (embedTarget, subpath, file, result) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var fileData, data, embedFile, node, processed;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, file.vault.cachedRead(file)];
                    case 1:
                        fileData = _c.sent();
                        data = fileData.slice(result.start.offset, (_a = result.end) === null || _a === void 0 ? void 0 : _a.offset);
                        this.parentFile.info("Parsing \"" + embedTarget + "\"", this.node);
                        embedFile = makeVFile(data, file.path, subpath);
                        node = this.processor.parse(embedFile);
                        return [4 /*yield*/, this.processor.run(node, embedFile)];
                    case 2:
                        processed = _c.sent();
                        (_b = this.parentFile.messages).push.apply(_b, embedFile.messages);
                        return [2 /*return*/, processed];
                }
            });
        });
    };
    EmbedResolver.prototype.processImageEmbed = function (embedTarget, subpath, file) {
        this.parentFile.info("Processing image \"" + embedTarget + "\"", this.node);
        var settings = this.processor.data('settings');
        var imagePath = this.getImagePath(file, settings);
        return {
            type: 'image',
            url: imagePath,
        };
    };
    EmbedResolver.prototype.getTarget = function (metadata) {
        var embedTarget = this.node.attributes.target;
        var _a = obsidian.parseLinktext(embedTarget), path = _a.path, subpath = _a.subpath;
        if (this.parentFile.path === undefined) {
            this.parentFile.message("cannot resolve target of link " + embedTarget + " as the path of the embedding file is not available", this.node);
            return EmbedResolver.FAILED_TARGET;
        }
        var target = metadata.getFirstLinkpathDest(path, this.parentFile.path);
        if (target === null) {
            this.parentFile.message("cannot resolve target of link " + embedTarget, this.node);
            return EmbedResolver.FAILED_TARGET;
        }
        var cache = metadata.getFileCache(target);
        if (cache === null) {
            this.parentFile.message("cannot access file cache of " + embedTarget, this.node);
            return EmbedResolver.FAILED_TARGET;
        }
        return {
            file: target,
            subpath: subpath,
            result: obsidian.resolveSubpath(cache, subpath.trimEnd()),
        };
    };
    EmbedResolver.prototype.getImagePath = function (file, settings) {
        var adapter = file.vault.adapter;
        var absolutePath = adapter.getFullPath(file.path);
        switch (settings.exportToTex.imagePathSettings) {
            case ImagePathSettings.RelativeToRoot:
                return normalizePath(file.path);
            case ImagePathSettings.FullPath:
                return normalizePath(absolutePath);
            case ImagePathSettings.BaseName:
                return file.basename;
            case ImagePathSettings.RelativeToExport: {
                var exportPath = this.processor.data('exportPath');
                var exportFolder = exportPath === null || exportPath === undefined
                    ? settings.exportToTex.defaultExportDirectory
                    : path$1.dirname(exportPath);
                return normalizePath(path$1.relative(exportFolder, absolutePath));
            }
        }
    };
    EmbedResolver.FAILED_TARGET = {
        subpath: '',
        result: null,
    };
    return EmbedResolver;
}());

var emojiRegex = function() {
	return /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g;
};

var githubSlugger = BananaSlug;

var own$8 = Object.hasOwnProperty;
var whitespace = /\s/g;
var specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;

function BananaSlug () {
  var self = this;

  if (!(self instanceof BananaSlug)) return new BananaSlug()

  self.reset();
}

/**
 * Generate a unique slug.
 * @param  {string} value String of text to slugify
 * @param  {boolean} [false] Keep the current case, otherwise make all lowercase
 * @return {string}       A unique slug string
 */
BananaSlug.prototype.slug = function (value, maintainCase) {
  var self = this;
  var slug = slugger(value, maintainCase === true);
  var originalSlug = slug;

  while (own$8.call(self.occurrences, slug)) {
    self.occurrences[originalSlug]++;
    slug = originalSlug + '-' + self.occurrences[originalSlug];
  }

  self.occurrences[slug] = 0;

  return slug
};

/**
 * Reset - Forget all previous slugs
 * @return void
 */
BananaSlug.prototype.reset = function () {
  this.occurrences = Object.create(null);
};

function slugger (string, maintainCase) {
  if (typeof string !== 'string') return ''
  if (!maintainCase) string = string.toLowerCase();

  return string.trim()
    .replace(specials, '')
    .replace(emojiRegex(), '')
    .replace(whitespace, '-')
}

BananaSlug.slug = slugger;

function labels() {
    var slugger = new githubSlugger();
    var labels = new Map();
    return function (tree, file) {
        addLabel(slugger, labels, tree, file);
        targetLabels(labels, tree, file);
    };
}
function addLabel(slugger, labelsMap, tree, file) {
    unistUtilVisit(tree, ['heading', 'textDirective'], function (node) {
        if (!isHeading(node) && !isLabelDirective(node)) {
            file.message("node of type " + node.type + " cannot be labeled");
            return;
        }
        var namedFile = toNamedVFile(file);
        var _a = getLabel(node), subpath = _a.subpath, type = _a.type;
        var key = {
            path: namedFile.stem,
            subpath: subpath,
            type: type,
        };
        if (node.data === undefined) {
            node.data = {};
        }
        if (node.data.label === undefined) {
            node.data.label = slugger.slug(subpath);
        }
        labelsMap.set(keyToString(key), node.data.label);
    });
}
function getLabel(node) {
    if (isHeading(node)) {
        return {
            subpath: "#" + node.children.map(function (c) { return c.value; }).join(''),
            type: 'heading',
        };
    }
    else if (isLabelDirective(node)) {
        return { subpath: "#^" + node.attributes.text, type: 'block' };
    }
    throw new Error('Tried to generate label for unexpected type: ' + node.type);
}
function targetLabels(labelsMap, tree, file) {
    unistUtilVisit(tree, 'wikiLink', function (node) {
        assertLabeledLink(node);
        if (node.data.label !== undefined) {
            return;
        }
        if (!node.value.contains('#')) {
            return;
        }
        var namedFile = toNamedVFile(file);
        var _a = obsidian.parseLinktext(node.value), path = _a.path, subpath = _a.subpath;
        var key = {
            type: node.value.contains('^') ? 'block' : 'heading',
            path: path.length > 0 ? path : namedFile.stem,
            subpath: subpath,
        };
        var label = labelsMap.get(keyToString(key));
        if (label !== null) {
            node.data.label = label;
            node.data.targetType = key.type;
        }
    });
}
function keyToString(key) {
    return key.type + ":" + key.path + ":" + key.subpath;
}

var mathEnvironments = [
    'equation',
    'multline',
    'gather',
    'align',
    'flalign',
    'split',
    'alignat',
];
var beginRegex = /^\s*\\begin{\s*(\w+)\*?\s*}/m;
function inlineMath$1(_ctx, node) {
    assertInlineMath(node);
    return "$" + node.value + "$";
}
function displayMath(ctx, node) {
    assertMath(node);
    var value = node.value;
    var match = beginRegex.exec(value);
    var _a = ctx.exportToTex, additionalMathEnvironments = _a.additionalMathEnvironments, defaultToEquation = _a.defaultToEquation;
    if (match !== null &&
        (mathEnvironments.contains(match[1]) ||
            additionalMathEnvironments.contains(match[1]))) {
        return value;
    }
    if (defaultToEquation) {
        return "\\begin{equation}\n" + value + "\n\\end{equation}";
    }
    return "\\[\n" + value + "\n\\]";
}

function isTexContext(ctx) {
    return 'exportToTex' in ctx && ctx.exportToTex instanceof ExportToTexSettings;
}
function getContext(ctx) {
    if (!isTexContext(ctx)) {
        throw new Error('Settings missing for export to tex');
    }
    return ctx;
}

var consume = function (_ctx, _node) { return ''; };
var yaml = consume;
var rebberOverrides = {
    wikiLink: ensureContext(wikiLink),
    inlineMath: ensureContext(inlineMath$1),
    textDirective: ensureContext(textDirective),
    yaml: yaml,
    math: ensureContext(displayMath),
    heading: ensureContext(heading$1),
    blockquote: ensureContext(blockquote$1),
};
function ensureContext(fn) {
    return function (ctx, node) {
        return fn(getContext(ctx), node);
    };
}
function textDirective(ctx, node) {
    var _a, _b;
    assertLabelDirective(node);
    return getLabel$1(ctx, 'block', (_b = (_a = node.data) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : '');
}
var keyPrefixes = {
    heading: 'sec',
    block: 'block',
};
function getPrefix(targetType) {
    if (targetType !== undefined && targetType in keyPrefixes) {
        return keyPrefixes[targetType] + ':';
    }
    return '';
}
function getRef(ctx, targetType, label) {
    var _a = ctx.exportToTex, refCommand = _a.refCommand, generateLabels = _a.generateLabels;
    if (!generateLabels)
        return '';
    return "\\" + refCommand + "{" + getPrefix(targetType) + label + "}";
}
function getLabel$1(ctx, targetType, label) {
    var generateLabels = ctx.exportToTex.generateLabels;
    if (!generateLabels)
        return '';
    return "\\label{" + getPrefix(targetType) + label + "}";
}
function wikiLink(ctx, node) {
    assertLabeledLink(node);
    var _a = node.data, alias = _a.alias, label = _a.label, targetType = _a.targetType;
    if (!node.value.contains('#') || label === undefined) {
        return alias !== null && alias !== void 0 ? alias : node.value;
    }
    return "" + (alias !== null && alias !== void 0 ? alias : '') + getRef(ctx, targetType, label);
}
var headingNames = [
    'section',
    'subsection',
    'subsubsection',
    'paragraph',
    'subparagraph',
];
function heading$1(ctx, node) {
    var _a;
    assertHeading(node);
    if (node.depth > 5) {
        return '';
    }
    var cmd = headingNames[node.depth - 1];
    var text = node.children
        .map(function (content) { return dist$1.toLaTeX(content, ctx); })
        .join('');
    var label = (_a = node.data) === null || _a === void 0 ? void 0 : _a.label;
    return "\\" + cmd + "{" + text + "}" + getLabel$1(ctx, 'heading', label);
}
function blockquote$1(ctx, node) {
    assertBlockquote(node);
    var text = node.children
        .map(function (content) { return dist$1.toLaTeX(content, ctx); })
        .join('');
    return "\\begin{quotation}\n" + text + "\\end{quotation}\n\n";
}

var markdownToTex = unified_1()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkFrontmatter)
    .use(remarkDirective)
    .use(index_cjs$2.wikiLinkPlugin, {
    aliasDivider: '|',
})
    .use(embed)
    .use(labels)
    .use(dist$1, {
    overrides: rebberOverrides,
})
    .freeze();

var hasFlag = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}
if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === true || env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === false || env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os__default['default'].release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};

var ansiRegex = ({onlyFirst = false} = {}) => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
};

var stripAnsi = string => typeof string === 'string' ? string.replace(ansiRegex(), '') : string;

/* eslint-disable yoda */

const isFullwidthCodePoint = codePoint => {
	if (Number.isNaN(codePoint)) {
		return false;
	}

	// Code points are derived from:
	// http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
	if (
		codePoint >= 0x1100 && (
			codePoint <= 0x115F || // Hangul Jamo
			codePoint === 0x2329 || // LEFT-POINTING ANGLE BRACKET
			codePoint === 0x232A || // RIGHT-POINTING ANGLE BRACKET
			// CJK Radicals Supplement .. Enclosed CJK Letters and Months
			(0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F) ||
			// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
			(0x3250 <= codePoint && codePoint <= 0x4DBF) ||
			// CJK Unified Ideographs .. Yi Radicals
			(0x4E00 <= codePoint && codePoint <= 0xA4C6) ||
			// Hangul Jamo Extended-A
			(0xA960 <= codePoint && codePoint <= 0xA97C) ||
			// Hangul Syllables
			(0xAC00 <= codePoint && codePoint <= 0xD7A3) ||
			// CJK Compatibility Ideographs
			(0xF900 <= codePoint && codePoint <= 0xFAFF) ||
			// Vertical Forms
			(0xFE10 <= codePoint && codePoint <= 0xFE19) ||
			// CJK Compatibility Forms .. Small Form Variants
			(0xFE30 <= codePoint && codePoint <= 0xFE6B) ||
			// Halfwidth and Fullwidth Forms
			(0xFF01 <= codePoint && codePoint <= 0xFF60) ||
			(0xFFE0 <= codePoint && codePoint <= 0xFFE6) ||
			// Kana Supplement
			(0x1B000 <= codePoint && codePoint <= 0x1B001) ||
			// Enclosed Ideographic Supplement
			(0x1F200 <= codePoint && codePoint <= 0x1F251) ||
			// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
			(0x20000 <= codePoint && codePoint <= 0x3FFFD)
		)
	) {
		return true;
	}

	return false;
};

var isFullwidthCodePoint_1 = isFullwidthCodePoint;
var _default = isFullwidthCodePoint;
isFullwidthCodePoint_1.default = _default;

var emojiRegex$1 = function () {
  // https://mths.be/emoji
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};

const stringWidth = string => {
	string = string.replace(emojiRegex$1(), '  ');

	if (typeof string !== 'string' || string.length === 0) {
		return 0;
	}

	string = stripAnsi(string);

	let width = 0;

	for (let i = 0; i < string.length; i++) {
		const code = string.codePointAt(i);

		// Ignore control characters
		if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
			continue;
		}

		// Ignore combining characters
		if (code >= 0x300 && code <= 0x36F) {
			continue;
		}

		// Surrogates
		if (code > 0xFFFF) {
			i++;
		}

		width += isFullwidthCodePoint_1(code) ? 2 : 1;
	}

	return width;
};

var stringWidth_1 = stringWidth;
// TODO: remove this in the next major version
var _default$1 = stringWidth;
stringWidth_1.default = _default$1;

var vfileStatistics = statistics;

// Get stats for a file, list of files, or list of messages.
function statistics(files) {
  var result = {true: 0, false: 0, null: 0};

  count(files);

  return {
    fatal: result.true,
    nonfatal: result.false + result.null,
    warn: result.false,
    info: result.null,
    total: result.true + result.false + result.null
  }

  function count(value) {
    if (value) {
      if (value[0] && value[0].messages) {
        // Multiple vfiles
        countInAll(value);
      } else {
        // One vfile / messages
        countAll(value.messages || value);
      }
    }
  }

  function countInAll(files) {
    var length = files.length;
    var index = -1;

    while (++index < length) {
      count(files[index].messages);
    }
  }

  function countAll(messages) {
    var length = messages.length;
    var index = -1;
    var fatal;

    while (++index < length) {
      fatal = messages[index].fatal;
      result[fatal === null || fatal === undefined ? null : Boolean(fatal)]++;
    }
  }
}

var vfileSort = sort;

var severities = {
  true: 2,
  false: 1,
  null: 0,
  undefined: 0
};

function sort(file) {
  file.messages.sort(comparator);
  return file
}

function comparator(a, b) {
  return (
    check$1(a, b, 'line') ||
    check$1(a, b, 'column') ||
    severities[b.fatal] - severities[a.fatal] ||
    compare(a, b, 'source') ||
    compare(a, b, 'ruleId') ||
    compare(a, b, 'reason') ||
    0
  )
}

function check$1(a, b, property) {
  return (a[property] || 0) - (b[property] || 0)
}

function compare(a, b, property) {
  return (a[property] || '').localeCompare(b[property] || '')
}

var supported = supportsColor_1.stderr.hasBasic;






var vfileReporter = reporter;

var push = [].push;

// `log-symbols` without chalk:
/* istanbul ignore next - Windows. */
var chars =
  process.platform === 'win32'
    ? {error: '×', warning: '‼'}
    : {error: '✖', warning: '⚠'};

var labels$1 = {
  true: 'error',
  false: 'warning',
  null: 'info',
  undefined: 'info'
};

// Report a file’s messages.
function reporter(files, options) {
  var settings = options || {};
  var one;

  if (!files) {
    return ''
  }

  // Error.
  if ('name' in files && 'message' in files) {
    return String(files.stack || files)
  }

  // One file.
  if (!('length' in files)) {
    one = true;
    files = [files];
  }

  return format$1(transform(files, settings), one, settings)
}

function transform(files, options) {
  var index = -1;
  var rows = [];
  var all = [];
  var sizes = {};
  var messages;
  var offset;
  var message;
  var messageRows;
  var row;
  var key;

  while (++index < files.length) {
    messages = vfileSort({messages: files[index].messages.concat()}).messages;
    messageRows = [];
    offset = -1;

    while (++offset < messages.length) {
      message = messages[offset];

      if (!options.silent || message.fatal) {
        all.push(message);

        row = {
          location: unistUtilStringifyPosition(
            message.location.end.line && message.location.end.column
              ? message.location
              : message.location.start
          ),
          label: labels$1[message.fatal],
          reason:
            (message.stack || message.message) +
            (options.verbose && message.note ? '\n' + message.note : ''),
          ruleId: message.ruleId || '',
          source: message.source || ''
        };

        for (key in row) {
          sizes[key] = Math.max(size(row[key]), sizes[key] || 0);
        }

        messageRows.push(row);
      }
    }

    if ((!options.quiet && !options.silent) || messageRows.length) {
      rows.push({type: 'file', file: files[index], stats: vfileStatistics(messages)});
      push.apply(rows, messageRows);
    }
  }

  return {rows: rows, stats: vfileStatistics(all), sizes: sizes}
}

function format$1(map, one, options) {
  var enabled = options.color == null ? supported : options.color;
  var lines = [];
  var index = -1;
  var stats;
  var row;
  var line;
  var reason;
  var rest;
  var match;

  while (++index < map.rows.length) {
    row = map.rows[index];

    if (row.type === 'file') {
      stats = row.stats;
      line = row.file.history[0] || options.defaultName || '<stdin>';

      line =
        one && !options.defaultName && !row.file.history[0]
          ? ''
          : (enabled
              ? '\x1b[4m' /* Underline. */ +
                (stats.fatal
                  ? '\x1b[31m' /* Red. */
                  : stats.total
                  ? '\x1b[33m' /* Yellow. */
                  : '\x1b[32m') /* Green. */ +
                line +
                '\x1b[39m\x1b[24m'
              : line) +
            (row.file.stored && row.file.path !== row.file.history[0]
              ? ' > ' + row.file.path
              : '');

      if (!stats.total) {
        line =
          (line ? line + ': ' : '') +
          (row.file.stored
            ? enabled
              ? '\x1b[33mwritten\x1b[39m' /* Yellow. */
              : 'written'
            : 'no issues found');
      }

      if (line) {
        if (index && map.rows[index - 1].type !== 'file') {
          lines.push('');
        }

        lines.push(line);
      }
    } else {
      reason = row.reason;
      match = /\r?\n|\r/.exec(reason);

      if (match) {
        rest = reason.slice(match.index);
        reason = reason.slice(0, match.index);
      } else {
        rest = '';
      }

      lines.push(
        (
          '  ' +
          repeatString(' ', map.sizes.location - size(row.location)) +
          row.location +
          '  ' +
          (enabled
            ? (row.label === 'error'
                ? '\x1b[31m' /* Red. */
                : '\x1b[33m') /* Yellow. */ +
              row.label +
              '\x1b[39m'
            : row.label) +
          repeatString(' ', map.sizes.label - size(row.label)) +
          '  ' +
          reason +
          repeatString(' ', map.sizes.reason - size(reason)) +
          '  ' +
          row.ruleId +
          repeatString(' ', map.sizes.ruleId - size(row.ruleId)) +
          '  ' +
          (row.source || '')
        ).replace(/ +$/, '') + rest
      );
    }
  }

  stats = map.stats;

  if (stats.fatal || stats.warn) {
    line = '';

    if (stats.fatal) {
      line =
        (enabled
          ? '\x1b[31m' /* Red. */ + chars.error + '\x1b[39m'
          : chars.error) +
        ' ' +
        stats.fatal +
        ' ' +
        (labels$1.true + (stats.fatal === 1 ? '' : 's'));
    }

    if (stats.warn) {
      line =
        (line ? line + ', ' : '') +
        (enabled
          ? '\x1b[33m' /* Yellow. */ + chars.warning + '\x1b[39m'
          : chars.warning) +
        ' ' +
        stats.warn +
        ' ' +
        (labels$1.false + (stats.warn === 1 ? '' : 's'));
    }

    if (stats.total !== stats.fatal && stats.total !== stats.warn) {
      line = stats.total + ' messages (' + line + ')';
    }

    lines.push('', line);
  }

  return lines.join('\n')
}

// Get the length of `value`, ignoring ANSI sequences.
function size(value) {
  var match = /\r?\n|\r/.exec(value);
  return stringWidth_1(match ? value.slice(0, match.index) : value)
}

var TeXPrinter = /** @class */ (function () {
    function TeXPrinter(metadata, settings, exportPath) {
        this.metadata = metadata;
        this.settings = settings;
        this.exportPath = exportPath;
    }
    TeXPrinter.prototype.process = function (vfile) {
        return __awaiter(this, void 0, void 0, function () {
            var output;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, markdownToTex()
                            .data('settings', {
                            exportToTex: this.settings,
                        })
                            .data('metadata', this.metadata)
                            .data('exportPath', this.exportPath)
                            .process(vfile)];
                    case 1:
                        output = _a.sent();
                        return [2 /*return*/, output.toString()];
                }
            });
        });
    };
    TeXPrinter.prototype.toTex = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var vfile, tex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toVFile(file)];
                    case 1:
                        vfile = _a.sent();
                        console.groupCollapsed('export-to-tex');
                        return [4 /*yield*/, this.process(vfile)];
                    case 2:
                        tex = _a.sent();
                        console.log(vfileReporter(vfile));
                        if (this.settings.compressNewlines) {
                            console.log('Compressing newlines');
                            tex = TeXPrinter.compressNewlines(tex);
                        }
                        console.groupEnd();
                        return [2 /*return*/, tex];
                }
            });
        });
    };
    TeXPrinter.compressNewlines = function (tex) {
        var lines = tex.split('\n');
        var output = [];
        var wasEmpty = false;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            if (line === '') {
                wasEmpty = true;
                continue;
            }
            if (wasEmpty) {
                output.push('');
                wasEmpty = false;
            }
            output.push(line);
        }
        return output.join('\n');
    };
    return TeXPrinter;
}());

var writeFile = util.promisify(fs.writeFile);

var ExportToTeXSettingTab = /** @class */ (function (_super) {
    __extends(ExportToTeXSettingTab, _super);
    function ExportToTeXSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }
    ExportToTeXSettingTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Settings for exporting to TeX' });
        new obsidian.Setting(containerEl)
            .setName('Generate labels and refs')
            .setDesc('Automatically generate TeX labels and refs for blocks and headings?')
            .addToggle(function (toggle) {
            toggle
                .setValue(_this.plugin.settings.generateLabels)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.generateLabels = value;
                            return [4 /*yield*/, this.plugin.saveData(this.plugin.settings)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Ref command')
            .setDesc('Command to use when converting links to headings/blocks to refs.')
            .addText(function (text) {
            return text
                .setValue(_this.plugin.settings.refCommand)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.refCommand = value;
                            return [4 /*yield*/, this.plugin.saveData(this.plugin.settings)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Additional math environments')
            .setDesc('Additional environments which trigger math content without needing \\[...\\]' +
            ' (one per line)')
            .addTextArea(function (text) {
            text
                .setValue(_this.plugin.settings.additionalMathEnvironments.join('\n'))
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.additionalMathEnvironments = value
                                .split('\n')
                                .map(function (x) { return x.trim(); })
                                .filter(function (x) { return x.length > 0; });
                            return [4 /*yield*/, this.plugin.saveData(this.plugin.settings)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Default to Equation')
            .setDesc('Convert display math to equation environemtns')
            .addToggle(function (toggle) {
            toggle
                .setValue(_this.plugin.settings.defaultToEquation)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.defaultToEquation = value;
                            return [4 /*yield*/, this.plugin.saveData(this.plugin.settings)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Compress newlines')
            .setDesc('Reduce any instance of 2 or more blank lines to a single blank line')
            .addToggle(function (toggle) {
            toggle
                .setValue(_this.plugin.settings.compressNewlines)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.compressNewlines = value;
                            return [4 /*yield*/, this.plugin.saveData(this.plugin.settings)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName('Image path format')
            .setDesc([
            'Specifies how the path for images should be written in exported \\includegraphics calls',
        ].join('\n'))
            .addDropdown(function (dropdown) {
            for (var i = 0; i < ImagePathSettingDescriptions.length; i++) {
                dropdown.addOption(i.toString(), ImagePathSettingDescriptions[i]);
            }
            dropdown
                .setValue(_this.plugin.settings.imagePathSettings.toString())
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.plugin.settings.imagePathSettings = Number.parseInt(value);
                            return [4 /*yield*/, this.plugin.saveData(this.plugin.settings)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        var textEl;
        new obsidian.Setting(containerEl)
            .setName('Default export directory')
            .setDesc('Default directory to save TeX files to. If blank will default to vault root.')
            .addText(function (text) {
            textEl = text
                .setPlaceholder('Default (Vault root)')
                .setValue(_this.plugin.settings.defaultExportDirectory);
            textEl.inputEl.disabled = true;
        })
            .addButton(function (button) {
            button.setButtonText('Choose').onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, filePaths, canceled, exportPath;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, electron.remote.dialog.showOpenDialog({
                                defaultPath: this.app.vault
                                    .adapter.getBasePath(),
                                properties: ['createDirectory', 'openDirectory'],
                            })];
                        case 1:
                            _a = _b.sent(), filePaths = _a.filePaths, canceled = _a.canceled;
                            if (canceled)
                                return [2 /*return*/];
                            exportPath = filePaths[0];
                            textEl.setValue(exportPath);
                            this.plugin.settings.defaultExportDirectory = exportPath;
                            return [4 /*yield*/, this.plugin.saveData(this.plugin.settings)];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.ButtonComponent(containerEl)
            .setButtonText('Reset to default')
            .onClick(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, electron.remote.dialog
                            .showMessageBox({
                            title: 'Reset settings to default?',
                            type: 'question',
                            message: 'Are you sure?',
                            buttons: ['No', 'Yes'],
                        })
                            .then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (value.response === 0)
                                            return [2 /*return*/];
                                        this.plugin.settings = new ExportToTexSettings();
                                        return [4 /*yield*/, this.plugin.saveData(this.plugin.settings)];
                                    case 1:
                                        _a.sent();
                                        this.display();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return ExportToTeXSettingTab;
}(obsidian.PluginSettingTab));

var ExportToTeXPlugin = /** @class */ (function (_super) {
    __extends(ExportToTeXPlugin, _super);
    function ExportToTeXPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.settings = new ExportToTexSettings();
        return _this;
    }
    ExportToTeXPlugin.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var settings;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadData()];
                    case 1:
                        settings = _a.sent();
                        if (settings !== null) {
                            this.settings = ensureSettings(settings);
                        }
                        this.addCommand({
                            id: 'export-to-tex',
                            name: 'Export To TeX',
                            checkCallback: function (checking) {
                                var file = _this.app.workspace.getActiveFile();
                                if (file !== null) {
                                    if (!checking) {
                                        _this.exportToFile(file).catch(_this.onExportError);
                                    }
                                    return true;
                                }
                                return false;
                            },
                        });
                        this.addCommand({
                            id: 'export-tex-to-clipboard',
                            name: 'Export To Clipboard',
                            checkCallback: function (checking) {
                                var file = _this.app.workspace.getActiveFile();
                                if (file !== null) {
                                    if (!checking) {
                                        _this.exportToClipboard(file).catch(_this.onExportError);
                                    }
                                    return true;
                                }
                                return false;
                            },
                        });
                        this.addSettingTab(new ExportToTeXSettingTab(this.app, this));
                        return [2 /*return*/];
                }
            });
        });
    };
    ExportToTeXPlugin.prototype.exportToFile = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var directory, _a, filePath, canceled, printer, contents;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        directory = this.settings.defaultExportDirectory.length > 0
                            ? this.settings.defaultExportDirectory
                            : file.vault.adapter.getBasePath();
                        return [4 /*yield*/, electron.remote.dialog.showSaveDialog({
                                defaultPath: directory,
                                properties: ['createDirectory'],
                                filters: [
                                    {
                                        name: 'TeX',
                                        extensions: ['tex'],
                                    },
                                ],
                            })];
                    case 1:
                        _a = _b.sent(), filePath = _a.filePath, canceled = _a.canceled;
                        if (canceled || filePath === undefined)
                            return [2 /*return*/];
                        printer = new TeXPrinter(this.app.metadataCache, this.settings, filePath);
                        return [4 /*yield*/, printer.toTex(file)];
                    case 2:
                        contents = _b.sent();
                        return [4 /*yield*/, writeFile(filePath, contents)];
                    case 3:
                        _b.sent();
                        // eslint-disable-next-line no-new
                        new obsidian.Notice("Tex exported to " + filePath);
                        return [2 /*return*/];
                }
            });
        });
    };
    ExportToTeXPlugin.prototype.exportToClipboard = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var printer, contents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        printer = new TeXPrinter(this.app.metadataCache, this.settings);
                        return [4 /*yield*/, printer.toTex(file)];
                    case 1:
                        contents = _a.sent();
                        electron.remote.clipboard.writeText(contents);
                        // eslint-disable-next-line no-new
                        new obsidian.Notice("Tex exported to clipboard");
                        return [2 /*return*/];
                }
            });
        });
    };
    ExportToTeXPlugin.prototype.onExportError = function (e) {
        console.log(e);
        // eslint-disable-next-line no-new
        new obsidian.Notice("Error of type \"" + e.name + " occurred on export. See console for details.\"");
    };
    return ExportToTeXPlugin;
}(obsidian.Plugin));

module.exports = ExportToTeXPlugin;