// Import jQuery
/*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.9
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2022-12-19
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {

					// `qSA` may not throw for unrecognized parts using forgiving parsing:
					// https://drafts.csswg.org/selectors/#forgiving-selector
					// like the `:has()` pseudo-class:
					// https://drafts.csswg.org/selectors/#relational
					// `CSS.supports` is still expected to return `false` then:
					// https://drafts.csswg.org/css-conditional-4/#typedef-supports-selector-fn
					// https://drafts.csswg.org/css-conditional-4/#dfn-support-selector
					if ( support.cssSupportsSelector &&

						// eslint-disable-next-line no-undef
						!CSS.supports( "selector(:is(" + newSelector + "))" ) ) {

						// Support: IE 11+
						// Throw to get to the same code path as an error directly in qSA.
						// Note: once we only support browser supporting
						// `CSS.supports('selector(...)')`, we can most likely drop
						// the `try-catch`. IE doesn't implement the API.
						throw new Error();
					}

					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	// Support: Chrome 105+, Firefox 104+, Safari 15.4+
	// Make sure forgiving mode is not used in `CSS.supports( "selector(...)" )`.
	//
	// `:is()` uses a forgiving selector list as an argument and is widely
	// implemented, so it's a good one to test against.
	support.cssSupportsSelector = assert( function() {
		/* eslint-disable no-undef */

		return CSS.supports( "selector(*)" ) &&

			// Support: Firefox 78-81 only
			// In old Firefox, `:is()` didn't use forgiving parsing. In that case,
			// fail this test as there's no selector to test against that.
			// `CSS.supports` uses unforgiving parsing
			document.querySelectorAll( ":is(:jqfake)" ) &&

			// `*` is needed as Safari & newer Chrome implemented something in between
			// for `:has()` - it throws in `qSA` if it only contains an unsupported
			// argument but multiple ones, one of which is supported, are fine.
			// We want to play safe in case `:is()` gets the same treatment.
			!CSS.supports( "selector(:is(*,:jqfake))" );

		/* eslint-enable */
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	if ( !support.cssSupportsSelector ) {

		// Support: Chrome 105+, Safari 15.4+
		// `:has()` uses a forgiving selector list as an argument so our regular
		// `try-catch` mechanism fails to catch `:has()` with arguments not supported
		// natively like `:has(:contains("Foo"))`. Where supported & spec-compliant,
		// we now use `CSS.supports("selector(:is(SELECTOR_TO_BE_TESTED))")`, but
		// outside that we mark `:has` as buggy.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {

			// Support: IE <9 only
			// IE doesn't have `contains` on `document` so we need to check for
			// `documentElement` presence.
			// We need to fall back to `a` when `documentElement` is missing
			// as `ownerDocument` of elements within `<template/>` may have
			// a null one - a default behavior of all modern browsers.
			var adown = a.nodeType === 9 && a.documentElement || a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
/*!
 * jQuery Validation Plugin v1.19.5
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2022 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}

				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler && !validator.settings.debug ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			isContentEditable = typeof this.attr( "contenteditable" ) !== "undefined" && this.attr( "contenteditable" ) !== "false",
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && isContentEditable ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
var trim = function( str ) {

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
	return str.replace( /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
};

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var currentForm = this.currentForm,
				groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				// Set form expando on contenteditable
				if ( !this.form && isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				// Ignore the element if it belongs to another form. This will happen mainly
				// when setting the `form` attribute of an input to the id of another form.
				if ( currentForm !== this.form ) {
					return;
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.trigger( "focus" )

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				var isContentEditable = typeof $( this ).attr( "contenteditable" ) !== "undefined" && $( this ).attr( "contenteditable" ) !== "false";

				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( isContentEditable ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Ignore elements that belong to other/nested forms
				if ( this.form !== validator.currentForm ) {
					return false;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				isContentEditable = typeof $element.attr( "contenteditable" ) !== "undefined" && $element.attr( "contenteditable" ) !== "false",
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( isContentEditable ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			if ( string === undefined ) {
				return "";
			}

			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() && this.pendingRequest === 0 ) {
				$( this.currentForm ).trigger( "submit" );

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" )
				.find( ".validate-lessThan-blur" )
					.off( ".validate-lessThan" )
					.removeClass( "validate-lessThan-blur" )
				.find( ".validate-lessThanEqual-blur" )
					.off( ".validate-lessThanEqual" )
					.removeClass( "validate-lessThanEqual-blur" )
				.find( ".validate-greaterThanEqual-blur" )
					.off( ".validate-greaterThanEqual" )
					.removeClass( "validate-greaterThanEqual-blur" )
				.find( ".validate-greaterThan-blur" )
					.off( ".validate-greaterThan" )
					.removeClass( "validate-greaterThan-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ type === "date" ? "dateISO" : method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );

			// Cast empty attributes like `data-rule-required` to `true`
			if ( value === "" ) {
				value = true;
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = typeof parameter === "function" && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( Array.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value !== undefined && value !== null && value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: ( function() {
			var called = false;

			return function( value, element ) {
				if ( !called ) {
					called = true;
					if ( this.settings.debug && window.console ) {
						console.warn(
							"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
							"Please don't use it, since it relies on the Date constructor, which\n" +
							"behaves very differently across browsers and locales. Use `dateISO`\n" +
							"instead or one of the locale specific methods in `localizations/`\n" +
							"and `additional-methods.js`."
						);
					}
				}

				return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
			};
		}() ),

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = Array.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158; 
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
            return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
!function(e){function t(a,n){return this instanceof t?(e.isPlainObject(a)?n=a:(n=n||{},n.alias=a),this.el=void 0,this.opts=e.extend(!0,{},this.defaults,n),this.maskset=void 0,this.noMasksCache=n&&void 0!==n.definitions,this.userOptions=n||{},this.events={},this.dataAttribute="data-inputmask",this.isRTL=this.opts.numericInput,void i(this.opts.alias,n,this.opts)):new t(a,n)}function i(t,a,n){var r=n.aliases[t];return r?(r.alias&&i(r.alias,void 0,n),e.extend(!0,n,r),e.extend(!0,n,a),!0):(null===n.mask&&(n.mask=t),!1)}function a(i,a){function n(i,n,r){if(null!==i&&""!==i){if(1===i.length&&r.greedy===!1&&0!==r.repeat&&(r.placeholder=""),r.repeat>0||"*"===r.repeat||"+"===r.repeat){var o="*"===r.repeat?0:"+"===r.repeat?1:r.repeat;i=r.groupmarker.start+i+r.groupmarker.end+r.quantifiermarker.start+o+","+r.repeat+r.quantifiermarker.end}var s;return void 0===t.prototype.masksCache[i]||a===!0?(s={mask:i,maskToken:t.prototype.analyseMask(i,r),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},metadata:n,maskLength:void 0},a!==!0&&(t.prototype.masksCache[r.numericInput?i.split("").reverse().join(""):i]=s,s=e.extend(!0,{},t.prototype.masksCache[r.numericInput?i.split("").reverse().join(""):i]))):s=e.extend(!0,{},t.prototype.masksCache[r.numericInput?i.split("").reverse().join(""):i]),s}}var r;if(e.isFunction(i.mask)&&(i.mask=i.mask(i)),e.isArray(i.mask)){if(i.mask.length>1){i.keepStatic=null===i.keepStatic||i.keepStatic;var o=i.groupmarker.start;return e.each(i.numericInput?i.mask.reverse():i.mask,function(t,a){o.length>1&&(o+=i.groupmarker.end+i.alternatormarker+i.groupmarker.start),o+=void 0===a.mask||e.isFunction(a.mask)?a:a.mask}),o+=i.groupmarker.end,n(o,i.mask,i)}i.mask=i.mask.pop()}return i.mask&&(r=void 0===i.mask.mask||e.isFunction(i.mask.mask)?n(i.mask,i.mask,i):n(i.mask.mask,i.mask,i)),r}function n(i,a,r){function c(e,t,i){t=t||0;var a,n,o,s=[],l=0,u=f();V=void 0!==W?W.maxLength:void 0,V===-1&&(V=void 0);do e===!0&&p().validPositions[l]?(o=p().validPositions[l],n=o.match,a=o.locator.slice(),s.push(i===!0?o.input:i===!1?n.nativeDef:_(l,n))):(o=v(l,a,l-1),n=o.match,a=o.locator.slice(),(r.jitMasking===!1||l<u||"number"==typeof r.jitMasking&&isFinite(r.jitMasking)&&r.jitMasking>l)&&s.push(i===!1?n.nativeDef:_(l,n))),l++;while((void 0===V||l<V)&&(null!==n.fn||""!==n.def)||t>l);return""===s[s.length-1]&&s.pop(),p().maskLength=l+1,s}function p(){return a}function d(e){var t=p();t.buffer=void 0,e!==!0&&(t._buffer=void 0,t.validPositions={},t.p=0)}function f(e,t,i){var a=-1,n=-1,r=i||p().validPositions;void 0===e&&(e=-1);for(var o in r){var s=parseInt(o);r[s]&&(t||null!==r[s].match.fn)&&(s<=e&&(a=s),s>=e&&(n=s))}return a!==-1&&e-a>1||n<e?a:n}function m(t,i,a,n){function o(e){var t=p().validPositions[e];if(void 0!==t&&null===t.match.fn){var i=p().validPositions[e-1],a=p().validPositions[e+1];return void 0!==i&&void 0!==a}return!1}var s,l=t,u=e.extend(!0,{},p().validPositions),c=!1;for(p().p=t,s=i-1;s>=l;s--)void 0!==p().validPositions[s]&&(a!==!0&&(!p().validPositions[s].match.optionality&&o(s)||r.canClearPosition(p(),s,f(),n,r)===!1)||delete p().validPositions[s]);for(d(!0),s=l+1;s<=f();){for(;void 0!==p().validPositions[l];)l++;if(s<l&&(s=l+1),void 0===p().validPositions[s]&&E(s))s++;else{var m=v(s);c===!1&&u[l]&&u[l].match.def===m.match.def?(p().validPositions[l]=e.extend(!0,{},u[l]),p().validPositions[l].input=m.input,delete p().validPositions[s],s++):y(l,m.match.def)?A(l,m.input||_(s),!0)!==!1&&(delete p().validPositions[s],s++,c=!0):E(s)||(s++,l--),l++}}d(!0)}function h(e,t){for(var i,a=e,n=f(),o=p().validPositions[n]||k(0)[0],s=void 0!==o.alternation?o.locator[o.alternation].toString().split(","):[],l=0;l<a.length&&(i=a[l],!(i.match&&(r.greedy&&i.match.optionalQuantifier!==!0||(i.match.optionality===!1||i.match.newBlockMarker===!1)&&i.match.optionalQuantifier!==!0)&&(void 0===o.alternation||o.alternation!==i.alternation||void 0!==i.locator[o.alternation]&&S(i.locator[o.alternation].toString().split(","),s)))||t===!0&&(null!==i.match.fn||/[0-9a-bA-Z]/.test(i.match.def)));l++);return i}function v(e,t,i){return p().validPositions[e]||h(k(e,t?t.slice():t,i))}function g(e){return p().validPositions[e]?p().validPositions[e]:k(e)[0]}function y(e,t){for(var i=!1,a=k(e),n=0;n<a.length;n++)if(a[n].match&&a[n].match.def===t){i=!0;break}return i}function k(t,i,a){function n(i,a,o,s){function u(o,s,d){function h(t,i){var a=0===e.inArray(t,i.matches);return a||e.each(i.matches,function(e,n){if(n.isQuantifier===!0&&(a=h(t,i.matches[e-1])))return!1}),a}function g(t,i,a){var n,r;return(p().tests[t]||p().validPositions[t])&&e.each(p().tests[t]||[p().validPositions[t]],function(e,t){var o=void 0!==a?a:t.alternation,s=void 0!==t.locator[o]?t.locator[o].toString().indexOf(i):-1;(void 0===r||s<r)&&s!==-1&&(n=t,r=s)}),n?n.locator.slice((void 0!==a?a:n.alternation)+1):void 0!==a?g(t,i):void 0}function y(e,i){return null===e.match.fn&&null!==i.match.fn&&i.match.fn.test(e.match.def,p(),t,!1,r,!1)}if(c>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+p().mask;if(c===t&&void 0===o.matches)return f.push({match:o,locator:s.reverse(),cd:v}),!0;if(void 0!==o.matches){if(o.isGroup&&d!==o){if(o=u(i.matches[e.inArray(o,i.matches)+1],s))return!0}else if(o.isOptional){var k=o;if(o=n(o,a,s,d)){if(l=f[f.length-1].match,!h(l,k))return!0;m=!0,c=t}}else if(o.isAlternator){var x,b=o,P=[],w=f.slice(),S=s.length,A=a.length>0?a.shift():-1;if(A===-1||"string"==typeof A){var E,C=c,R=a.slice(),M=[];if("string"==typeof A)M=A.split(",");else for(E=0;E<b.matches.length;E++)M.push(E);for(var O=0;O<M.length;O++){if(E=parseInt(M[O]),f=[],a=g(c,E,S)||R.slice(),o=u(b.matches[E]||i.matches[E],[E].concat(s),d)||o,o!==!0&&void 0!==o&&M[M.length-1]<b.matches.length){var _=e.inArray(o,i.matches)+1;i.matches.length>_&&(o=u(i.matches[_],[_].concat(s.slice(1,s.length)),d),o&&(M.push(_.toString()),e.each(f,function(e,t){t.alternation=s.length-1})))}x=f.slice(),c=C,f=[];for(var I=0;I<x.length;I++){var j=x[I],D=!1;j.alternation=j.alternation||S;for(var F=0;F<P.length;F++){var N=P[F];if(("string"!=typeof A||e.inArray(j.locator[j.alternation].toString(),M)!==-1)&&(j.match.def===N.match.def||y(j,N))){D=j.match.nativeDef===N.match.nativeDef,j.alternation==N.alternation&&N.locator[N.alternation].toString().indexOf(j.locator[j.alternation])===-1&&(N.locator[N.alternation]=N.locator[N.alternation]+","+j.locator[j.alternation],N.alternation=j.alternation,null==j.match.fn&&(N.na=N.na||j.locator[j.alternation].toString(),N.na.indexOf(j.locator[j.alternation])===-1&&(N.na=N.na+","+j.locator[j.alternation])));break}}D||P.push(j)}}"string"==typeof A&&(P=e.map(P,function(t,i){if(isFinite(i)){var a,n=t.alternation,r=t.locator[n].toString().split(",");t.locator[n]=void 0,t.alternation=void 0;for(var o=0;o<r.length;o++)a=e.inArray(r[o],M)!==-1,a&&(void 0!==t.locator[n]?(t.locator[n]+=",",t.locator[n]+=r[o]):t.locator[n]=parseInt(r[o]),t.alternation=n);if(void 0!==t.locator[n])return t}})),f=w.concat(P),c=t,m=f.length>0,a=R.slice()}else o=u(b.matches[A]||i.matches[A],[A].concat(s),d);if(o)return!0}else if(o.isQuantifier&&d!==i.matches[e.inArray(o,i.matches)-1])for(var T=o,G=a.length>0?a.shift():0;G<(isNaN(T.quantifier.max)?G+1:T.quantifier.max)&&c<=t;G++){var B=i.matches[e.inArray(T,i.matches)-1];if(o=u(B,[G].concat(s),B)){if(l=f[f.length-1].match,l.optionalQuantifier=G>T.quantifier.min-1,h(l,B)){if(G>T.quantifier.min-1){m=!0,c=t;break}return!0}return!0}}else if(o=n(o,a,s,d))return!0}else c++}for(var d=a.length>0?a.shift():0;d<i.matches.length;d++)if(i.matches[d].isQuantifier!==!0){var h=u(i.matches[d],[d].concat(o),s);if(h&&c===t)return h;if(c>t)break}}function o(t){var i=[];return e.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation?(i=h(t.slice()).locator.slice(),0===i.length&&(i=t[0].locator.slice())):e.each(t,function(e,t){if(""!==t.def)if(0===i.length)i=t.locator.slice();else for(var a=0;a<i.length;a++)t.locator[a]&&i[a].toString().indexOf(t.locator[a])===-1&&(i[a]+=","+t.locator[a])})),i}function s(e){return r.keepStatic&&t>0&&e.length>1+(""===e[e.length-1].match.def?1:0)&&e[0].match.optionality!==!0&&e[0].match.optionalQuantifier!==!0&&null===e[0].match.fn&&!/[0-9a-bA-Z]/.test(e[0].match.def)?[h(e)]:e}var l,u=p().maskToken,c=i?a:0,d=i?i.slice():[0],f=[],m=!1,v=i?i.join(""):"";if(t>-1){if(void 0===i){for(var g,y=t-1;void 0===(g=p().validPositions[y]||p().tests[y])&&y>-1;)y--;void 0!==g&&y>-1&&(d=o(g),v=d.join(""),c=y)}if(p().tests[t]&&p().tests[t][0].cd===v)return s(p().tests[t]);for(var k=d.shift();k<u.length;k++){var x=n(u[k],d,[k]);if(x&&c===t||c>t)break}}return(0===f.length||m)&&f.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:v}),void 0!==i&&p().tests[t]?s(e.extend(!0,[],f)):(p().tests[t]=e.extend(!0,[],f),s(p().tests[t]))}function x(){return void 0===p()._buffer&&(p()._buffer=c(!1,1),void 0===p().buffer&&p()._buffer.slice()),p()._buffer}function b(e){return void 0!==p().buffer&&e!==!0||(p().buffer=c(!0,f(),!0)),p().buffer}function P(e,t,i){var a;if(e===!0)d(),e=0,t=i.length;else for(a=e;a<t;a++)delete p().validPositions[a];for(a=e;a<t;a++)d(!0),i[a]!==r.skipOptionalPartCharacter&&A(a,i[a],!0,!0)}function w(e,i,a){switch(r.casing||i.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var n=p().validPositions[a-1];e=0===a||n&&n.input===String.fromCharCode(t.keyCode.SPACE)?e.toUpperCase():e.toLowerCase()}return e}function S(t,i){for(var a=r.greedy?i:i.slice(0,1),n=!1,o=0;o<t.length;o++)if(e.inArray(t[o],a)!==-1){n=!0;break}return n}function A(i,a,n,o,s){function l(e){var t=q?e.begin-e.end>1||e.begin-e.end===1&&r.insertMode:e.end-e.begin>1||e.end-e.begin===1&&r.insertMode;return t&&0===e.begin&&e.end===p().maskLength?"full":t}function u(t,a,n){var s=!1;return e.each(k(t),function(u,c){for(var h=c.match,v=a?1:0,g="",y=h.cardinality;y>v;y--)g+=M(t-(y-1));if(a&&(g+=a),b(!0),s=null!=h.fn?h.fn.test(g,p(),t,n,r,l(i)):(a===h.def||a===r.skipOptionalPartCharacter)&&""!==h.def&&{c:h.placeholder||h.def,pos:t},s!==!1){var k=void 0!==s.c?s.c:a;k=k===r.skipOptionalPartCharacter&&null===h.fn?h.placeholder||h.def:k;var S=t,E=b();if(void 0!==s.remove&&(e.isArray(s.remove)||(s.remove=[s.remove]),e.each(s.remove.sort(function(e,t){return t-e}),function(e,t){m(t,t+1,!0)})),void 0!==s.insert&&(e.isArray(s.insert)||(s.insert=[s.insert]),e.each(s.insert.sort(function(e,t){return e-t}),function(e,t){A(t.pos,t.c,!0,o)})),s.refreshFromBuffer){var C=s.refreshFromBuffer;if(n=!0,P(C===!0?C:C.start,C.end,E),void 0===s.pos&&void 0===s.c)return s.pos=f(),!1;if(S=void 0!==s.pos?s.pos:t,S!==t)return s=e.extend(s,A(S,k,!0,o)),!1}else if(s!==!0&&void 0!==s.pos&&s.pos!==t&&(S=s.pos,P(t,S,b().slice()),S!==t))return s=e.extend(s,A(S,k,!0)),!1;return(s===!0||void 0!==s.pos||void 0!==s.c)&&(u>0&&d(!0),x(S,e.extend({},c,{input:w(k,h,S)}),o,l(i))||(s=!1),!1)}}),s}function c(t,i,a){var n,s,l,u,c,m,h,v,g=e.extend(!0,{},p().validPositions),y=!1,x=f();for(u=p().validPositions[x];x>=0;x--)if(l=p().validPositions[x],l&&void 0!==l.alternation){if(n=x,s=p().validPositions[n].alternation,u.locator[l.alternation]!==l.locator[l.alternation])break;u=l}if(void 0!==s){v=parseInt(n);var b=void 0!==u.locator[u.alternation||s]?u.locator[u.alternation||s]:h[0];b.length>0&&(b=b.split(",")[0]);var P=p().validPositions[v],w=p().validPositions[v-1];e.each(k(v,w?w.locator:void 0,v-1),function(n,l){h=l.locator[s]?l.locator[s].toString().split(","):[];for(var u=0;u<h.length;u++){var k=[],x=0,w=0,S=!1;if(b<h[u]&&(void 0===l.na||e.inArray(h[u],l.na.split(","))===-1)){p().validPositions[v]=e.extend(!0,{},l);var E=p().validPositions[v].locator;for(p().validPositions[v].locator[s]=parseInt(h[u]),null==l.match.fn?(P.input!==l.match.def&&(S=!0,P.generatedInput!==!0&&k.push(P.input)),w++,p().validPositions[v].generatedInput=!/[0-9a-bA-Z]/.test(l.match.def),p().validPositions[v].input=l.match.def):p().validPositions[v].input=P.input,c=v+1;c<f(void 0,!0)+1;c++)m=p().validPositions[c],m&&m.generatedInput!==!0&&/[0-9a-bA-Z]/.test(m.input)?k.push(m.input):c<t&&x++,delete p().validPositions[c];for(S&&k[0]===l.match.def&&k.shift(),d(!0),y=!0;k.length>0;){var C=k.shift();if(C!==r.skipOptionalPartCharacter&&!(y=A(f(void 0,!0)+1,C,!1,o,!0)))break}if(y){p().validPositions[v].locator=E;var R=f(t)+1;for(c=v+1;c<f()+1;c++)m=p().validPositions[c],(void 0===m||null==m.match.fn)&&c<t+(w-x)&&w++;t+=w-x,y=A(t>R?R:t,i,a,o,!0)}if(y)return!1;d(),p().validPositions=e.extend(!0,{},g)}}})}return y}function g(t,i){var a=p().validPositions[i];if(a)for(var n=a.locator,r=n.length,o=t;o<i;o++)if(void 0===p().validPositions[o]&&!E(o,!0)){var s=k(o),l=s[0],u=-1;e.each(s,function(e,t){for(var i=0;i<r&&void 0!==t.locator[i]&&S(t.locator[i].toString().split(","),n[i].toString().split(","));i++)u<i&&(u=i,l=t)}),x(o,e.extend({},l,{input:l.match.placeholder||l.match.def}),!0)}}function x(t,i,a,n){if(n||r.insertMode&&void 0!==p().validPositions[t]&&void 0===a){var o,s=e.extend(!0,{},p().validPositions),l=f(void 0,!0);for(o=t;o<=l;o++)delete p().validPositions[o];p().validPositions[t]=e.extend(!0,{},i);var u,c=!0,m=p().validPositions,h=!1,v=p().maskLength;for(o=u=t;o<=l;o++){var g=s[o];if(void 0!==g)for(var k=u;k<p().maskLength&&(null===g.match.fn&&m[o]&&(m[o].match.optionalQuantifier===!0||m[o].match.optionality===!0)||null!=g.match.fn);){if(k++,h===!1&&s[k]&&s[k].match.def===g.match.def)p().validPositions[k]=e.extend(!0,{},s[k]),p().validPositions[k].input=g.input,R(k),u=k,c=!0;else if(y(k,g.match.def)){var x=A(k,g.input,!0,!0);c=x!==!1,u=x.caret||x.insert?f():k,h=!0}else c=g.generatedInput===!0;if(p().maskLength<v&&(p().maskLength=v),c)break}if(!c)break}if(!c)return p().validPositions=e.extend(!0,{},s),d(!0),!1}else p().validPositions[t]=e.extend(!0,{},i);return d(!0),!0}function R(t){for(var i=t-1;i>-1&&!p().validPositions[i];i--);var a,n;for(i++;i<t;i++)void 0===p().validPositions[i]&&(r.jitMasking===!1||r.jitMasking>i)&&(n=k(i,v(i-1).locator,i-1).slice(),""===n[n.length-1].match.def&&n.pop(),a=h(n),a&&(a.match.def===r.radixPointDefinitionSymbol||!E(i,!0)||e.inArray(r.radixPoint,b())<i&&a.match.fn&&a.match.fn.test(_(i),p(),i,!1,r))&&(I=u(i,a.match.placeholder||(null==a.match.fn?a.match.def:""!==_(i)?_(i):b()[i]),!0),I!==!1&&(p().validPositions[I.pos||i].generatedInput=!0)))}n=n===!0;var O=i;void 0!==i.begin&&(O=q&&!l(i)?i.end:i.begin);var I=!1,j=e.extend(!0,{},p().validPositions);if(R(O),l(i)&&(G(void 0,t.keyCode.DELETE,i),O=p().p),O<p().maskLength&&(I=u(O,a,n),(!n||o===!0)&&I===!1)){var D=p().validPositions[O];if(!D||null!==D.match.fn||D.match.def!==a&&a!==r.skipOptionalPartCharacter){if((r.insertMode||void 0===p().validPositions[C(O)])&&!E(O,!0)){var F=k(O).slice();""===F[F.length-1].match.def&&F.pop();var N=h(F,!0);N&&null===N.match.fn&&(N=N.match.placeholder||N.match.def,u(O,N,n),p().validPositions[O].generatedInput=!0);for(var T=O+1,B=C(O);T<=B;T++)if(I=u(T,a,n),I!==!1){g(O,void 0!==I.pos?I.pos:T),O=T;break}}}else I={caret:C(O)}}return I===!1&&r.keepStatic&&!n&&s!==!0&&(I=c(O,a,n)),I===!0&&(I={pos:O}),e.isFunction(r.postValidation)&&I!==!1&&!n&&o!==!0&&(I=!!r.postValidation(b(!0),I,r)&&I),void 0===I.pos&&(I.pos=O),I===!1&&(d(!0),p().validPositions=e.extend(!0,{},j)),I}function E(e,t){var i;if(t?(i=v(e).match,""===i.def&&(i=g(e).match)):i=g(e).match,null!=i.fn)return i.fn;if(t!==!0&&e>-1){var a=k(e);return a.length>1+(""===a[a.length-1].match.def?1:0)}return!1}function C(e,t){var i=p().maskLength;if(e>=i)return i;for(var a=e;++a<i&&(t===!0&&(g(a).match.newBlockMarker!==!0||!E(a))||t!==!0&&!E(a)););return a}function R(e,t){var i,a=e;if(a<=0)return 0;for(;--a>0&&(t===!0&&g(a).match.newBlockMarker!==!0||t!==!0&&!E(a)&&(i=k(a),i.length<2||2===i.length&&""===i[1].match.def)););return a}function M(e){return void 0===p().validPositions[e]?_(e):p().validPositions[e].input}function O(t,i,a,n,o){if(n&&e.isFunction(r.onBeforeWrite)){var s=r.onBeforeWrite(n,i,a,r);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;P(l===!0?l:l.start,l.end,s.buffer||i),i=b(!0)}void 0!==a&&(a=void 0!==s.caret?s.caret:a)}}t.inputmask._valueSet(i.join("")),void 0===a||void 0!==n&&"blur"===n.type?L(t,i,a):D(t,a),o===!0&&(Y=!0,e(t).trigger("input"))}function _(e,t){if(t=t||g(e).match,void 0!==t.placeholder)return t.placeholder;if(null===t.fn){if(e>-1&&void 0===p().validPositions[e]){var i,a=k(e),n=[];if(a.length>1+(""===a[a.length-1].match.def?1:0))for(var o=0;o<a.length;o++)if(a[o].match.optionality!==!0&&a[o].match.optionalQuantifier!==!0&&(null===a[o].match.fn||void 0===i||a[o].match.fn.test(i.match.def,p(),e,!0,r)!==!1)&&(n.push(a[o]),null===a[o].match.fn&&(i=a[o]),n.length>1&&/[0-9a-bA-Z]/.test(n[0].match.def)))return r.placeholder.charAt(e%r.placeholder.length)}return t.def}return r.placeholder.charAt(e%r.placeholder.length)}function I(i,a,n,o,s,l){function u(){var e=!1,t=x().slice(h,C(h)).join("").indexOf(m);if(t!==-1&&!E(h)){e=!0;for(var i=x().slice(h,h+t),a=0;a<i.length;a++)if(" "!==i[a]){e=!1;break}}return e}var c=o.slice(),m="",h=0,g=void 0;if(d(),p().p=C(-1),!n)if(r.autoUnmask!==!0){var y=x().slice(0,C(-1)).join(""),k=c.join("").match(new RegExp("^"+t.escapeRegex(y),"g"));k&&k.length>0&&(c.splice(0,k.length*y.length),h=C(h))}else h=C(h);if(e.each(c,function(t,a){if(void 0!==a){var o=new e.Event("keypress");o.which=a.charCodeAt(0),m+=a;var s=f(void 0,!0),l=p().validPositions[s],c=v(s+1,l?l.locator.slice():void 0,s);if(!u()||n||r.autoUnmask){var y=n?t:null==c.match.fn&&c.match.optionality&&s+1<p().p?s+1:p().p;g=ee.keypressEvent.call(i,o,!0,!1,n,y),h=y+1,m=""}else g=ee.keypressEvent.call(i,o,!0,!1,!0,s+1);if(!n&&e.isFunction(r.onBeforeWrite)&&(g=r.onBeforeWrite(o,b(),g.forwardPosition,r),g&&g.refreshFromBuffer)){var k=g.refreshFromBuffer;P(k===!0?k:k.start,k.end,g.buffer),d(!0),g.caret&&(p().p=g.caret)}}}),a){var w=void 0,S=f();document.activeElement===i&&(s||g)&&(w=D(i).begin,s&&g===!1&&(w=C(f(w))),g&&l!==!0&&(w<S+1||S===-1)&&(w=r.numericInput&&void 0===g.caret?R(g.forwardPosition):g.forwardPosition)),O(i,b(),w,s||new e.Event("checkval"))}}function j(t){if(t&&void 0===t.inputmask)return t.value;var i=[],a=p().validPositions;for(var n in a)a[n].match&&null!=a[n].match.fn&&i.push(a[n].input);var o=0===i.length?"":(q?i.reverse():i).join("");if(e.isFunction(r.onUnMask)){var s=(q?b().slice().reverse():b()).join("");o=r.onUnMask(s,o,r)||o}return o}function D(e,t,i,a){function n(e){if(a!==!0&&q&&"number"==typeof e&&(!r.greedy||""!==r.placeholder)){var t=b().join("").length;e=t-e}return e}var s;if("number"!=typeof t)return e.setSelectionRange?(t=e.selectionStart,i=e.selectionEnd):window.getSelection?(s=window.getSelection().getRangeAt(0),s.commonAncestorContainer.parentNode!==e&&s.commonAncestorContainer!==e||(t=s.startOffset,i=s.endOffset)):document.selection&&document.selection.createRange&&(s=document.selection.createRange(),t=0-s.duplicate().moveStart("character",-e.inputmask._valueGet().length),i=t+s.text.length),{begin:n(t),end:n(i)};t=n(t),i=n(i),i="number"==typeof i?i:t;var l=parseInt(((e.ownerDocument.defaultView||window).getComputedStyle?(e.ownerDocument.defaultView||window).getComputedStyle(e,null):e.currentStyle).fontSize)*i;if(e.scrollLeft=l>e.scrollWidth?l:0,o||r.insertMode!==!1||t!==i||i++,e.setSelectionRange)e.selectionStart=t,e.selectionEnd=i;else if(window.getSelection){if(s=document.createRange(),void 0===e.firstChild||null===e.firstChild){var u=document.createTextNode("");e.appendChild(u)}s.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),s.setEnd(e.firstChild,i<e.inputmask._valueGet().length?i:e.inputmask._valueGet().length),s.collapse(!0);var c=window.getSelection();c.removeAllRanges(),c.addRange(s)}else e.createTextRange&&(s=e.createTextRange(),s.collapse(!0),s.moveEnd("character",i),s.moveStart("character",t),s.select());L(e,void 0,{begin:t,end:i})}function F(t){var i,a,n=b(),r=n.length,o=f(),s={},l=p().validPositions[o],u=void 0!==l?l.locator.slice():void 0;for(i=o+1;i<n.length;i++)a=v(i,u,i-1),u=a.locator.slice(),s[i]=e.extend(!0,{},a);var c=l&&void 0!==l.alternation?l.locator[l.alternation]:void 0;for(i=r-1;i>o&&(a=s[i],(a.match.optionality||a.match.optionalQuantifier||c&&(c!==s[i].locator[l.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[l.alternation]&&S(a.locator[l.alternation].toString().split(","),c.toString().split(","))&&""!==k(i)[0].def))&&n[i]===_(i,a.match));i--)r--;return t?{l:r,def:s[r]?s[r].match:void 0}:r}function N(e){for(var t=F(),i=e.length-1;i>t&&!E(i);i--);return e.splice(t,i+1-t),e}function T(t){if(e.isFunction(r.isComplete))return r.isComplete(t,r);if("*"!==r.repeat){var i=!1,a=F(!0),n=R(a.l);if(void 0===a.def||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){i=!0;for(var o=0;o<=n;o++){var s=v(o).match;if(null!==s.fn&&void 0===p().validPositions[o]&&s.optionality!==!0&&s.optionalQuantifier!==!0||null===s.fn&&t[o]!==_(o,s)){i=!1;break}}}return i}}function G(i,a,n,o){function s(){if(r.keepStatic){for(var t=[],a=f(-1,!0),n=e.extend(!0,{},p().validPositions),o=p().validPositions[a];a>=0;a--){var s=p().validPositions[a];if(s){if(s.generatedInput!==!0&&/[0-9a-bA-Z]/.test(s.input)&&t.push(s.input),delete p().validPositions[a],void 0!==s.alternation&&s.locator[s.alternation]!==o.locator[s.alternation])break;o=s}}if(a>-1)for(p().p=C(f(-1,!0));t.length>0;){var l=new e.Event("keypress");l.which=t.pop().charCodeAt(0),ee.keypressEvent.call(i,l,!0,!1,!1,p().p)}else p().validPositions=e.extend(!0,{},n)}}if((r.numericInput||q)&&(a===t.keyCode.BACKSPACE?a=t.keyCode.DELETE:a===t.keyCode.DELETE&&(a=t.keyCode.BACKSPACE),q)){var l=n.end;n.end=n.begin,n.begin=l}a===t.keyCode.BACKSPACE&&(n.end-n.begin<1||r.insertMode===!1)?(n.begin=R(n.begin),void 0===p().validPositions[n.begin]||p().validPositions[n.begin].input!==r.groupSeparator&&p().validPositions[n.begin].input!==r.radixPoint||n.begin--):a===t.keyCode.DELETE&&n.begin===n.end&&(n.end=E(n.end,!0)?n.end+1:C(n.end)+1,void 0===p().validPositions[n.begin]||p().validPositions[n.begin].input!==r.groupSeparator&&p().validPositions[n.begin].input!==r.radixPoint||n.end++),m(n.begin,n.end,!1,o),o!==!0&&s();var u=f(n.begin,!0);u<n.begin?p().p=C(u):o!==!0&&(p().p=n.begin)}function B(t){function i(e){var i,a=document.createElement("span");for(var n in o)isNaN(n)&&n.indexOf("font")!==-1&&(a.style[n]=o[n]);a.style.textTransform=o.textTransform,a.style.letterSpacing=o.letterSpacing,a.style.position="absolute",a.style.height="auto",a.style.width="auto",a.style.visibility="hidden",a.style.whiteSpace="nowrap",document.body.appendChild(a);var r,s=t.inputmask._valueGet(),l=0;for(i=0,r=s.length;i<=r;i++){if(a.innerHTML+=s.charAt(i)||"_",a.offsetWidth>=e){var u=e-l,c=a.offsetWidth-e;a.innerHTML=s.charAt(i),u-=a.offsetWidth/3,i=u<c?i-1:i;break}l=a.offsetWidth}return document.body.removeChild(a),i}function a(){z.style.position="absolute",z.style.top=n.top+"px",z.style.left=n.left+"px",z.style.width=parseInt(t.offsetWidth)-parseInt(o.paddingLeft)-parseInt(o.paddingRight)-parseInt(o.borderLeftWidth)-parseInt(o.borderRightWidth)+"px",z.style.height=parseInt(t.offsetHeight)-parseInt(o.paddingTop)-parseInt(o.paddingBottom)-parseInt(o.borderTopWidth)-parseInt(o.borderBottomWidth)+"px",z.style.lineHeight=z.style.height,z.style.zIndex=isNaN(o.zIndex)?-1:o.zIndex-1,z.style.webkitAppearance="textfield",z.style.mozAppearance="textfield",z.style.Appearance="textfield"}var n=e(t).position(),o=(t.ownerDocument.defaultView||window).getComputedStyle(t,null);t.parentNode,z=document.createElement("div"),document.body.appendChild(z);for(var s in o)isNaN(s)&&"cssText"!==s&&s.indexOf("webkit")==-1&&(z.style[s]=o[s]);t.style.backgroundColor="transparent",t.style.color="transparent",t.style.webkitAppearance="caret",t.style.mozAppearance="caret",t.style.Appearance="caret",a(),e(window).on("resize",function(i){n=e(t).position(),o=(t.ownerDocument.defaultView||window).getComputedStyle(t,null),a()}),e(t).on("click",function(e){return D(t,i(e.clientX)),ee.clickEvent.call(this,[e])}),e(t).on("keydown",function(e){e.shiftKey||r.insertMode===!1||setTimeout(function(){L(t)},0)})}function L(e,t,i){function a(){o||null!==l.fn&&void 0!==u.input?o&&null!==l.fn&&void 0!==u.input&&(o=!1,n+="</span>"):(o=!0,n+="<span class='im-static''>")}if(void 0!==z){t=t||b(),void 0===i?i=D(e):void 0===i.begin&&(i={begin:i,end:i});var n="",o=!1;if(""!=t){var s,l,u,c=0,d=f();do c===i.begin&&document.activeElement===e&&(n+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),p().validPositions[c]?(u=p().validPositions[c],l=u.match,s=u.locator.slice(),a(),n+=u.input):(u=v(c,s,c-1),l=u.match,s=u.locator.slice(),(r.jitMasking===!1||c<d||"number"==typeof r.jitMasking&&isFinite(r.jitMasking)&&r.jitMasking>c)&&(a(),n+=_(c,l))),c++;while((void 0===V||c<V)&&(null!==l.fn||""!==l.def)||d>c)}z.innerHTML=n}}function H(t){function i(t,i){function a(t){function a(t){if(e.valHooks&&(void 0===e.valHooks[t]||e.valHooks[t].inputmaskpatch!==!0)){var a=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},n=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=a(e);return f(void 0,void 0,e.inputmask.maskset.validPositions)!==-1||i.nullable!==!0?t:""}return a(e)},set:function(t,i){var a,r=e(t);return a=n(t,i),t.inputmask&&r.trigger("setvalue"),a},inputmaskpatch:!0}}}function n(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():f()!==-1||i.nullable!==!0?document.activeElement===this&&i.clearMaskOnLostFocus?(q?N(b().slice()).reverse():N(b().slice())).join(""):s.call(this):"":s.call(this)}function r(t){l.call(this,t),this.inputmask&&e(this).trigger("setvalue")}function o(t){J.on(t,"mouseenter",function(t){var i=e(this),a=this,n=a.inputmask._valueGet();n!==b().join("")&&i.trigger("setvalue")})}var s,l;if(!t.inputmask.__valueGet){if(i.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"==typeof"test".__proto__?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var u=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;u&&u.get&&u.set?(s=u.get,l=u.set,Object.defineProperty(t,"value",{get:n,set:r,configurable:!0})):"INPUT"!==t.tagName&&(s=function(){return this.textContent},l=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:n,set:r,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(s=t.__lookupGetter__("value"),l=t.__lookupSetter__("value"),t.__defineGetter__("value",n),t.__defineSetter__("value",r));t.inputmask.__valueGet=s,t.inputmask.__valueSet=l}t.inputmask._valueGet=function(e){return q&&e!==!0?s.call(this.el).split("").reverse().join(""):s.call(this.el)},t.inputmask._valueSet=function(e,t){l.call(this.el,null===e||void 0===e?"":t!==!0&&q?e.split("").reverse().join(""):e)},void 0===s&&(s=function(){return this.value},l=function(e){this.value=e},a(t.type),o(t))}}var n=t.getAttribute("type"),r="INPUT"===t.tagName&&e.inArray(n,i.supportsInputType)!==-1||t.isContentEditable||"TEXTAREA"===t.tagName;if(!r)if("INPUT"===t.tagName){var o=document.createElement("input");o.setAttribute("type",n),r="text"===o.type,o=null}else r="partial";return r!==!1&&a(t),r}var a=i(t,r);if(a!==!1&&(W=t,U=e(W),("rtl"===W.dir||r.rightAlign)&&(W.style.textAlign="right"),("rtl"===W.dir||r.numericInput)&&(W.dir="ltr",W.removeAttribute("dir"),W.inputmask.isRTL=!0,q=!0),r.colorMask===!0&&B(W),u&&(W.hasOwnProperty("inputmode")&&(W.inputmode=r.inputmode,W.setAttribute("inputmode",r.inputmode)),"rtfm"===r.androidHack&&(r.colorMask!==!0&&B(W),W.type="password")),J.off(W),a===!0&&(J.on(W,"submit",ee.submitEvent),J.on(W,"reset",ee.resetEvent),J.on(W,"mouseenter",ee.mouseenterEvent),J.on(W,"blur",ee.blurEvent),J.on(W,"focus",ee.focusEvent),J.on(W,"mouseleave",ee.mouseleaveEvent),r.colorMask!==!0&&J.on(W,"click",ee.clickEvent),J.on(W,"dblclick",ee.dblclickEvent),J.on(W,"paste",ee.pasteEvent),J.on(W,"dragdrop",ee.pasteEvent),J.on(W,"drop",ee.pasteEvent),J.on(W,"cut",ee.cutEvent),J.on(W,"complete",r.oncomplete),J.on(W,"incomplete",r.onincomplete),J.on(W,"cleared",r.oncleared),r.inputEventOnly!==!0&&(J.on(W,"keydown",ee.keydownEvent),J.on(W,"keypress",ee.keypressEvent)),J.on(W,"compositionstart",e.noop),J.on(W,"compositionupdate",e.noop),J.on(W,"compositionend",e.noop),J.on(W,"keyup",e.noop),J.on(W,"input",ee.inputFallBackEvent)),J.on(W,"setvalue",ee.setValueEvent),x(),""!==W.inputmask._valueGet()||r.clearMaskOnLostFocus===!1||document.activeElement===W)){var n=e.isFunction(r.onBeforeMask)?r.onBeforeMask(W.inputmask._valueGet(),r)||W.inputmask._valueGet():W.inputmask._valueGet();I(W,!0,!1,n.split(""));var o=b().slice();K=o.join(""),T(o)===!1&&r.clearIncomplete&&d(),r.clearMaskOnLostFocus&&document.activeElement!==W&&(f()===-1?o=[]:N(o)),O(W,o),document.activeElement===W&&D(W,C(f()))}}a=a||this.maskset,r=r||this.opts;var K,U,V,z,Q,W=this.el,q=this.isRTL,Z=!1,Y=!1,$=!1,X=!1,J={on:function(i,a,n){var o=function(i){if(void 0===this.inputmask&&"FORM"!==this.nodeName){var a=e.data(this,"_inputmask_opts");a?new t(a).mask(this):J.off(this)}else{if("setvalue"===i.type||!(this.disabled||this.readOnly&&!("keydown"===i.type&&i.ctrlKey&&67===i.keyCode||r.tabThrough===!1&&i.keyCode===t.keyCode.TAB))){switch(i.type){case"input":if(Y===!0)return Y=!1,i.preventDefault();break;case"keydown":Z=!1,Y=!1;break;case"keypress":if(Z===!0)return i.preventDefault();Z=!0;break;case"click":if(s||l){var o=this,u=arguments;return setTimeout(function(){n.apply(o,u)},0),!1}}var c=n.apply(this,arguments);return c===!1&&(i.preventDefault(),i.stopPropagation()),c}i.preventDefault()}};i.inputmask.events[a]=i.inputmask.events[a]||[],i.inputmask.events[a].push(o),e.inArray(a,["submit","reset"])!==-1?null!=i.form&&e(i.form).on(a,o):e(i).on(a,o)},off:function(t,i){if(t.inputmask&&t.inputmask.events){var a;i?(a=[],a[i]=t.inputmask.events[i]):a=t.inputmask.events,e.each(a,function(i,a){for(;a.length>0;){var n=a.pop();e.inArray(i,["submit","reset"])!==-1?null!=t.form&&e(t.form).off(i,n):e(t).off(i,n)}delete t.inputmask.events[i]})}}},ee={keydownEvent:function(i){function a(e){var t=document.createElement("input"),i="on"+e,a=i in t;return a||(t.setAttribute(i,"return;"),a="function"==typeof t[i]),t=null,a}var n=this,o=e(n),s=i.keyCode,u=D(n);if(s===t.keyCode.BACKSPACE||s===t.keyCode.DELETE||l&&s===t.keyCode.BACKSPACE_SAFARI||i.ctrlKey&&s===t.keyCode.X&&!a("cut"))i.preventDefault(),G(n,s,u),O(n,b(!0),p().p,i,n.inputmask._valueGet()!==b().join("")),n.inputmask._valueGet()===x().join("")?o.trigger("cleared"):T(b())===!0&&o.trigger("complete");else if(s===t.keyCode.END||s===t.keyCode.PAGE_DOWN){i.preventDefault();var c=C(f());r.insertMode||c!==p().maskLength||i.shiftKey||c--,D(n,i.shiftKey?u.begin:c,c,!0)}else s===t.keyCode.HOME&&!i.shiftKey||s===t.keyCode.PAGE_UP?(i.preventDefault(),D(n,0,i.shiftKey?u.begin:0,!0)):(r.undoOnEscape&&s===t.keyCode.ESCAPE||90===s&&i.ctrlKey)&&i.altKey!==!0?(I(n,!0,!1,K.split("")),o.trigger("click")):s!==t.keyCode.INSERT||i.shiftKey||i.ctrlKey?r.tabThrough===!0&&s===t.keyCode.TAB?(i.shiftKey===!0?(null===g(u.begin).match.fn&&(u.begin=C(u.begin)),u.end=R(u.begin,!0),u.begin=R(u.end,!0)):(u.begin=C(u.begin,!0),u.end=C(u.begin,!0),u.end<p().maskLength&&u.end--),u.begin<p().maskLength&&(i.preventDefault(),D(n,u.begin,u.end))):i.shiftKey||r.insertMode===!1&&(s===t.keyCode.RIGHT?setTimeout(function(){var e=D(n);D(n,e.begin)},0):s===t.keyCode.LEFT&&setTimeout(function(){var e=D(n);D(n,q?e.begin+1:e.begin-1)},0)):(r.insertMode=!r.insertMode,D(n,r.insertMode||u.begin!==p().maskLength?u.begin:u.begin-1));r.onKeyDown.call(this,i,b(),D(n).begin,r),$=e.inArray(s,r.ignorables)!==-1},keypressEvent:function(i,a,n,o,s){var l=this,u=e(l),c=i.which||i.charCode||i.keyCode;if(!(a===!0||i.ctrlKey&&i.altKey)&&(i.ctrlKey||i.metaKey||$))return c===t.keyCode.ENTER&&K!==b().join("")&&(K=b().join(""),
setTimeout(function(){u.trigger("change")},0)),!0;if(c){46===c&&i.shiftKey===!1&&","===r.radixPoint&&(c=44);var f,m=a?{begin:s,end:s}:D(l),h=String.fromCharCode(c);p().writeOutBuffer=!0;var v=A(m,h,o);if(v!==!1&&(d(!0),f=void 0!==v.caret?v.caret:a?v.pos+1:C(v.pos),p().p=f),n!==!1){var g=this;if(setTimeout(function(){r.onKeyValidation.call(g,c,v,r)},0),p().writeOutBuffer&&v!==!1){var y=b();O(l,y,r.numericInput&&void 0===v.caret?R(f):f,i,a!==!0),a!==!0&&setTimeout(function(){T(y)===!0&&u.trigger("complete")},0)}}if(i.preventDefault(),a)return v.forwardPosition=f,v}},pasteEvent:function(t){var i,a=this,n=t.originalEvent||t,o=e(a),s=a.inputmask._valueGet(!0),l=D(a);q&&(i=l.end,l.end=l.begin,l.begin=i);var u=s.substr(0,l.begin),c=s.substr(l.end,s.length);if(u===(q?x().reverse():x()).slice(0,l.begin).join("")&&(u=""),c===(q?x().reverse():x()).slice(l.end).join("")&&(c=""),q&&(i=u,u=c,c=i),window.clipboardData&&window.clipboardData.getData)s=u+window.clipboardData.getData("Text")+c;else{if(!n.clipboardData||!n.clipboardData.getData)return!0;s=u+n.clipboardData.getData("text/plain")+c}var p=s;if(e.isFunction(r.onBeforePaste)){if(p=r.onBeforePaste(s,r),p===!1)return t.preventDefault();p||(p=s)}return I(a,!1,!1,q?p.split("").reverse():p.toString().split("")),O(a,b(),C(f()),t,K!==b().join("")),T(b())===!0&&o.trigger("complete"),t.preventDefault()},inputFallBackEvent:function(i){var a=this,n=a.inputmask._valueGet();if(b().join("")!==n){var r=D(a);if(n=n.replace(new RegExp("("+t.escapeRegex(x().join(""))+")*"),""),s){var o=n.replace(b().join(""),"");if(1===o.length){var l=new e.Event("keypress");return l.which=o.charCodeAt(0),ee.keypressEvent.call(a,l,!0,!0,!1,p().validPositions[r.begin-1]?r.begin:r.begin-1),!1}}if(r.begin>n.length&&(D(a,n.length),r=D(a)),b().length-n.length!==1||n.charAt(r.begin)===b()[r.begin]||n.charAt(r.begin+1)===b()[r.begin]||E(r.begin)){for(var u=f()+1,c=x().join("");null===n.match(t.escapeRegex(c)+"$");)c=c.slice(1);n=n.replace(c,""),n=n.split(""),I(a,!0,!1,n,i,r.begin<u),T(b())===!0&&e(a).trigger("complete")}else i.keyCode=t.keyCode.BACKSPACE,ee.keydownEvent.call(a,i);i.preventDefault()}},setValueEvent:function(t){var i=this,a=i.inputmask._valueGet();I(i,!0,!1,(e.isFunction(r.onBeforeMask)?r.onBeforeMask(a,r)||a:a).split("")),K=b().join(""),(r.clearMaskOnLostFocus||r.clearIncomplete)&&i.inputmask._valueGet()===x().join("")&&i.inputmask._valueSet("")},focusEvent:function(e){var t=this,i=t.inputmask._valueGet();r.showMaskOnFocus&&(!r.showMaskOnHover||r.showMaskOnHover&&""===i)&&(t.inputmask._valueGet()!==b().join("")?O(t,b(),C(f())):X===!1&&D(t,C(f()))),r.positionCaretOnTab===!0&&ee.clickEvent.apply(t,[e,!0]),K=b().join("")},mouseleaveEvent:function(e){var t=this;if(X=!1,r.clearMaskOnLostFocus&&document.activeElement!==t){var i=b().slice(),a=t.inputmask._valueGet();a!==t.getAttribute("placeholder")&&""!==a&&(f()===-1&&a===x().join("")?i=[]:N(i),O(t,i))}},clickEvent:function(t,i){function a(t){if(""!==r.radixPoint){var i=p().validPositions;if(void 0===i[t]||i[t].input===_(t)){if(t<C(-1))return!0;var a=e.inArray(r.radixPoint,b());if(a!==-1){for(var n in i)if(a<n&&i[n].input!==_(n))return!1;return!0}}}return!1}var n=this;setTimeout(function(){if(document.activeElement===n){var t=D(n);if(i&&(t.begin=t.end),t.begin===t.end)switch(r.positionCaretOnClick){case"none":break;case"radixFocus":if(a(t.begin)){var o=e.inArray(r.radixPoint,b().join(""));D(n,r.numericInput?C(o):o);break}default:var s=t.begin,l=f(s,!0),u=C(l);if(s<u)D(n,E(s)||E(s-1)?s:C(s));else{var c=_(u);(""!==c&&b()[u]!==c&&g(u).match.optionalQuantifier!==!0||!E(u)&&g(u).match.def===c)&&(u=C(u)),D(n,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){D(t,0,C(f()))},0)},cutEvent:function(i){var a=this,n=e(a),r=D(a),o=i.originalEvent||i,s=window.clipboardData||o.clipboardData,l=q?b().slice(r.end,r.begin):b().slice(r.begin,r.end);s.setData("text",q?l.reverse().join(""):l.join("")),document.execCommand&&document.execCommand("copy"),G(a,t.keyCode.DELETE,r),O(a,b(),p().p,i,K!==b().join("")),a.inputmask._valueGet()===x().join("")&&n.trigger("cleared")},blurEvent:function(t){var i=e(this),a=this;if(a.inputmask){var n=a.inputmask._valueGet(),o=b().slice();K!==o.join("")&&setTimeout(function(){i.trigger("change"),K=o.join("")},0),""!==n&&(r.clearMaskOnLostFocus&&(f()===-1&&n===x().join("")?o=[]:N(o)),T(o)===!1&&(setTimeout(function(){i.trigger("incomplete")},0),r.clearIncomplete&&(d(),o=r.clearMaskOnLostFocus?[]:x().slice())),O(a,o,void 0,t))}},mouseenterEvent:function(e){var t=this;X=!0,document.activeElement!==t&&r.showMaskOnHover&&t.inputmask._valueGet()!==b().join("")&&O(t,b())},submitEvent:function(e){K!==b().join("")&&U.trigger("change"),r.clearMaskOnLostFocus&&f()===-1&&W.inputmask._valueGet&&W.inputmask._valueGet()===x().join("")&&W.inputmask._valueSet(""),r.removeMaskOnSubmit&&(W.inputmask._valueSet(W.inputmask.unmaskedvalue(),!0),setTimeout(function(){O(W,b())},0))},resetEvent:function(e){setTimeout(function(){U.trigger("setvalue")},0)}};if(void 0!==i)switch(i.action){case"isComplete":return W=i.el,T(b());case"unmaskedvalue":return void 0!==W&&void 0===i.value||(Q=i.value,Q=(e.isFunction(r.onBeforeMask)?r.onBeforeMask(Q,r)||Q:Q).split(""),I(void 0,!1,!1,q?Q.reverse():Q),e.isFunction(r.onBeforeWrite)&&r.onBeforeWrite(void 0,b(),0,r)),j(W);case"mask":H(W);break;case"format":return Q=(e.isFunction(r.onBeforeMask)?r.onBeforeMask(i.value,r)||i.value:i.value).split(""),I(void 0,!1,!1,q?Q.reverse():Q),e.isFunction(r.onBeforeWrite)&&r.onBeforeWrite(void 0,b(),0,r),i.metadata?{value:q?b().slice().reverse().join(""):b().join(""),metadata:n.call(this,{action:"getmetadata"},a,r)}:q?b().slice().reverse().join(""):b().join("");case"isValid":i.value?(Q=i.value.split(""),I(void 0,!1,!0,q?Q.reverse():Q)):i.value=b().join("");for(var te=b(),ie=F(),ae=te.length-1;ae>ie&&!E(ae);ae--);return te.splice(ie,ae+1-ie),T(te)&&i.value===b().join("");case"getemptymask":return x().join("");case"remove":if(W){U=e(W),W.inputmask._valueSet(j(W)),J.off(W);var ne;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(ne=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(W),"value"),ne&&W.inputmask.__valueGet&&Object.defineProperty(W,"value",{get:W.inputmask.__valueGet,set:W.inputmask.__valueSet,configurable:!0})):document.__lookupGetter__&&W.__lookupGetter__("value")&&W.inputmask.__valueGet&&(W.__defineGetter__("value",W.inputmask.__valueGet),W.__defineSetter__("value",W.inputmask.__valueSet)),W.inputmask=void 0}return W;case"getmetadata":if(e.isArray(a.metadata)){var re=c(!0,0,!1).join("");return e.each(a.metadata,function(e,t){if(t.mask===re)return re=t,!1}),re}return a.metadata}}var r=navigator.userAgent,o=/mobile/i.test(r),s=/iemobile/i.test(r),l=/iphone/i.test(r)&&!s,u=/android/i.test(r)&&!s;return t.prototype={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,i){return e.isFunction(i.onBeforeMask)?i.onBeforeMask(t,i):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:void 0,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1}},ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],isComplete:null,canClearPosition:e.noop,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1},masksCache:{},mask:function(r){function o(t,a,n,r){function o(e,i){i=void 0!==i?i:t.getAttribute(r+"-"+e),null!==i&&("string"==typeof i&&(0===e.indexOf("on")?i=window[i]:"false"===i?i=!1:"true"===i&&(i=!0)),n[e]=i)}var s,l,u,c,p=t.getAttribute(r);if(p&&""!==p&&(p=p.replace(new RegExp("'","g"),'"'),l=JSON.parse("{"+p+"}")),l){u=void 0;for(c in l)if("alias"===c.toLowerCase()){u=l[c];break}}o("alias",u),n.alias&&i(n.alias,n,a);for(s in a){if(l){u=void 0;for(c in l)if(c.toLowerCase()===s.toLowerCase()){u=l[c];break}}o(s,u)}return e.extend(!0,a,n),a}var s=this;return"string"==typeof r&&(r=document.getElementById(r)||document.querySelectorAll(r)),r=r.nodeName?[r]:r,e.each(r,function(i,r){var l=e.extend(!0,{},s.opts);o(r,l,e.extend(!0,{},s.userOptions),s.dataAttribute);var u=a(l,s.noMasksCache);void 0!==u&&(void 0!==r.inputmask&&r.inputmask.remove(),r.inputmask=new t,r.inputmask.opts=l,r.inputmask.noMasksCache=s.noMasksCache,r.inputmask.userOptions=e.extend(!0,{},s.userOptions),r.inputmask.el=r,r.inputmask.maskset=u,e.data(r,"_inputmask_opts",l),n.call(r.inputmask,{action:"mask"}))}),r&&r[0]?r[0].inputmask||this:this},option:function(t,i){return"string"==typeof t?this.opts[t]:"object"==typeof t?(e.extend(this.userOptions,t),this.el&&i!==!0&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return n.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||a(this.opts,this.noMasksCache),n.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(t,i){function a(e,t,i,a){this.matches=[],this.openGroup=e||!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}function n(t,a,n){var r=i.definitions[a];n=void 0!==n?n:t.matches.length;var o=t.matches[n-1];if(r&&!v){r.placeholder=e.isFunction(r.placeholder)?r.placeholder(i):r.placeholder;for(var s=r.prevalidator,l=s?s.length:0,u=1;u<r.cardinality;u++){var c=l>=u?s[u-1]:[],p=c.validator,d=c.cardinality;t.matches.splice(n++,0,{fn:p?"string"==typeof p?new RegExp(p):new function(){this.test=p}:new RegExp("."),cardinality:d?d:1,optionality:t.isOptional,newBlockMarker:void 0===o||o.def!==(r.definitionSymbol||a),casing:r.casing,def:r.definitionSymbol||a,placeholder:r.placeholder,nativeDef:a}),o=t.matches[n-1]}t.matches.splice(n++,0,{fn:r.validator?"string"==typeof r.validator?new RegExp(r.validator):new function(){this.test=r.validator}:new RegExp("."),cardinality:r.cardinality,optionality:t.isOptional,newBlockMarker:void 0===o||o.def!==(r.definitionSymbol||a),casing:r.casing,def:r.definitionSymbol||a,placeholder:r.placeholder,nativeDef:a})}else t.matches.splice(n++,0,{fn:null,cardinality:0,optionality:t.isOptional,newBlockMarker:void 0===o||o.def!==a,casing:null,def:i.staticDefinitionSymbol||a,placeholder:void 0!==i.staticDefinitionSymbol?a:void 0,nativeDef:a}),v=!1}function r(t){t&&t.matches&&e.each(t.matches,function(e,a){var o=t.matches[e+1];(void 0===o||void 0===o.matches||o.isQuantifier===!1)&&a&&a.isGroup&&(a.isGroup=!1,n(a,i.groupmarker.start,0),a.openGroup!==!0&&n(a,i.groupmarker.end)),r(a)})}function o(){if(y.length>0){if(p=y[y.length-1],n(p,u),p.isAlternator){d=y.pop();for(var e=0;e<d.matches.length;e++)d.matches[e].isGroup=!1;y.length>0?(p=y[y.length-1],p.matches.push(d)):g.matches.push(d)}}else n(g,u)}function s(e){function t(e){return e===i.optionalmarker.start?e=i.optionalmarker.end:e===i.optionalmarker.end?e=i.optionalmarker.start:e===i.groupmarker.start?e=i.groupmarker.end:e===i.groupmarker.end&&(e=i.groupmarker.start),e}e.matches=e.matches.reverse();for(var a in e.matches){var n=parseInt(a);if(e.matches[a].isQuantifier&&e.matches[n+1]&&e.matches[n+1].isGroup){var r=e.matches[a];e.matches.splice(a,1),e.matches.splice(n+1,0,r)}void 0!==e.matches[a].matches?e.matches[a]=s(e.matches[a]):e.matches[a]=t(e.matches[a])}return e}for(var l,u,c,p,d,f,m,h=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,v=!1,g=new a,y=[],k=[];l=h.exec(t);)if(u=l[0],v)o();else switch(u.charAt(0)){case i.escapeChar:v=!0;break;case i.optionalmarker.end:case i.groupmarker.end:if(c=y.pop(),c.openGroup=!1,void 0!==c)if(y.length>0){if(p=y[y.length-1],p.matches.push(c),p.isAlternator){d=y.pop();for(var x=0;x<d.matches.length;x++)d.matches[x].isGroup=!1;y.length>0?(p=y[y.length-1],p.matches.push(d)):g.matches.push(d)}}else g.matches.push(c);else o();break;case i.optionalmarker.start:y.push(new a(!1,!0));break;case i.groupmarker.start:y.push(new a(!0));break;case i.quantifiermarker.start:var b=new a(!1,!1,!0);u=u.replace(/[{}]/g,"");var P=u.split(","),w=isNaN(P[0])?P[0]:parseInt(P[0]),S=1===P.length?w:isNaN(P[1])?P[1]:parseInt(P[1]);if("*"!==S&&"+"!==S||(w="*"===S?0:1),b.quantifier={min:w,max:S},y.length>0){var A=y[y.length-1].matches;l=A.pop(),l.isGroup||(m=new a(!0),m.matches.push(l),l=m),A.push(l),A.push(b)}else l=g.matches.pop(),l.isGroup||(m=new a(!0),m.matches.push(l),l=m),g.matches.push(l),g.matches.push(b);break;case i.alternatormarker:y.length>0?(p=y[y.length-1],f=p.matches.pop()):f=g.matches.pop(),f.isAlternator?y.push(f):(d=new a(!1,!1,!1,!0),d.matches.push(f),y.push(d));break;default:o()}for(;y.length>0;)c=y.pop(),g.matches.push(c);return g.matches.length>0&&(r(g),k.push(g)),i.numericInput&&s(k[0]),k}},t.extendDefaults=function(i){e.extend(!0,t.prototype.defaults,i)},t.extendDefinitions=function(i){e.extend(!0,t.prototype.defaults.definitions,i)},t.extendAliases=function(i){e.extend(!0,t.prototype.defaults.aliases,i)},t.format=function(e,i,a){return t(i).format(e,a)},t.unmask=function(e,i){return t(i).unmaskedvalue(e)},t.isValid=function(e,i){return t(i).isValid(e)},t.remove=function(t){e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},t.escapeRegex=function(e){var t=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return e.replace(new RegExp("(\\"+t.join("|\\")+")","gim"),"\\$1")},t.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},window.Inputmask=t,t}(jQuery),function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(i,a){var n,r=this[0];if(void 0===a&&(a={}),"string"==typeof i)switch(i){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":e(r).val(a),r&&void 0===r.inputmask&&e(r).triggerHandler("setvalue");break;case"option":if("string"!=typeof a)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(a)});if(r&&void 0!==r.inputmask)return r.inputmask.option(a);break;default:return a.alias=i,n=new t(a),this.each(function(){n.mask(this)})}else{if("object"==typeof i)return n=new t(i),void 0===i.mask&&void 0===i.alias?this.each(function(){return void 0!==this.inputmask?this.inputmask.option(i):void n.mask(this)}):this.each(function(){n.mask(this)});if(void 0===i)return this.each(function(){n=new t(a),n.mask(this)})}}),e.fn.inputmask}(jQuery,Inputmask),function(e,t){}(jQuery,Inputmask),function(e,t){function i(e){return isNaN(e)||29===new Date(e,2,0).getDate()}return t.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+i+"[01])")},val2:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|[12][0-9])"+i+"(0[1-9]|1[012]))|(30"+i+"(0[13-9]|1[012]))|(31"+i+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(e,t,i){if(isNaN(e))return!1;var a=parseInt(e.concat(t.toString().slice(e.length))),n=parseInt(e.concat(i.toString().slice(e.length)));return!isNaN(a)&&t<=a&&a<=i||!isNaN(n)&&t<=n&&n<=i},determinebaseyear:function(e,t,i){var a=(new Date).getFullYear();if(e>a)return e;if(t<a){for(var n=t.toString().slice(0,2),r=t.toString().slice(2,4);t<n+i;)n--;var o=n+r;return e>o?e:o}if(e<=a&&a<=t){for(var s=a.toString().slice(0,2);t<s+i;)s--;var l=s+i;return l<e?e:l}return a},onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey&&i.keyCode===t.keyCode.RIGHT){var s=new Date;o.val(s.getDate().toString()+(s.getMonth()+1).toString()+s.getFullYear().toString()),o.trigger("setvalue")}},getFrontValue:function(e,t,i){for(var a=0,n=0,r=0;r<e.length&&"2"!==e.charAt(r);r++){var o=i.definitions[e.charAt(r)];o?(a+=n,n=o.cardinality):n++}return t.join("").substr(a,n)},postValidation:function(e,t,a){var n,r,o=e.join("");return 0===a.mask.indexOf("y")?(r=o.substr(0,4),n=o.substr(4,11)):(r=o.substr(6,11),n=o.substr(0,6)),t&&(n!==a.leapday||i(r))},definitions:{1:{validator:function(e,t,i,a,n){var r=n.regex.val1.test(e);return a||r||e.charAt(1)!==n.separator&&"-./".indexOf(e.charAt(1))===-1||!(r=n.regex.val1.test("0"+e.charAt(0)))?r:(t.buffer[i-1]="0",{refreshFromBuffer:{start:i-1,end:i},pos:i,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,i,a,n){var r=e;isNaN(t.buffer[i+1])||(r+=t.buffer[i+1]);var o=1===r.length?n.regex.val1pre.test(r):n.regex.val1.test(r);if(!a&&!o){if(o=n.regex.val1.test(e+"0"))return t.buffer[i]=e,t.buffer[++i]="0",{pos:i,c:"0"};if(o=n.regex.val1.test("0"+e))return t.buffer[i]="0",i++,{pos:i}}return o},cardinality:1}]},2:{validator:function(e,t,i,a,n){var r=n.getFrontValue(t.mask,t.buffer,n);r.indexOf(n.placeholder[0])!==-1&&(r="01"+n.separator);var o=n.regex.val2(n.separator).test(r+e);return a||o||e.charAt(1)!==n.separator&&"-./".indexOf(e.charAt(1))===-1||!(o=n.regex.val2(n.separator).test(r+"0"+e.charAt(0)))?o:(t.buffer[i-1]="0",{refreshFromBuffer:{start:i-1,end:i},pos:i,c:e.charAt(0)})},cardinality:2,prevalidator:[{validator:function(e,t,i,a,n){isNaN(t.buffer[i+1])||(e+=t.buffer[i+1]);var r=n.getFrontValue(t.mask,t.buffer,n);r.indexOf(n.placeholder[0])!==-1&&(r="01"+n.separator);var o=1===e.length?n.regex.val2pre(n.separator).test(r+e):n.regex.val2(n.separator).test(r+e);return a||o||!(o=n.regex.val2(n.separator).test(r+"0"+e))?o:(t.buffer[i]="0",i++,{pos:i})},cardinality:1}]},y:{validator:function(e,t,i,a,n){return n.isInYearRange(e,n.yearrange.minyear,n.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(e,t,i,a,n){var r=n.isInYearRange(e,n.yearrange.minyear,n.yearrange.maxyear);if(!a&&!r){var o=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,e+"0").toString().slice(0,1);if(r=n.isInYearRange(o+e,n.yearrange.minyear,n.yearrange.maxyear))return t.buffer[i++]=o.charAt(0),{pos:i};if(o=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,e+"0").toString().slice(0,2),r=n.isInYearRange(o+e,n.yearrange.minyear,n.yearrange.maxyear))return t.buffer[i++]=o.charAt(0),t.buffer[i++]=o.charAt(1),{pos:i}}return r},cardinality:1},{validator:function(e,t,i,a,n){var r=n.isInYearRange(e,n.yearrange.minyear,n.yearrange.maxyear);if(!a&&!r){var o=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,e).toString().slice(0,2);if(r=n.isInYearRange(e[0]+o[1]+e[1],n.yearrange.minyear,n.yearrange.maxyear))return t.buffer[i++]=o.charAt(1),{pos:i};if(o=n.determinebaseyear(n.yearrange.minyear,n.yearrange.maxyear,e).toString().slice(0,2),r=n.isInYearRange(o+e,n.yearrange.minyear,n.yearrange.maxyear))return t.buffer[i-1]=o.charAt(0),t.buffer[i++]=o.charAt(1),t.buffer[i++]=e.charAt(0),{refreshFromBuffer:{start:i-3,end:i},pos:i}}return r},cardinality:2},{validator:function(e,t,i,a,n){return n.isInYearRange(e,n.yearrange.minyear,n.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+i+"[0-3])|(02"+i+"[0-2])")},val2:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+i+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+i+"30)|((0[13578]|1[02])"+i+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey&&i.keyCode===t.keyCode.RIGHT){var s=new Date;o.val((s.getMonth()+1).toString()+s.getDate().toString()+s.getFullYear().toString()),o.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey&&i.keyCode===t.keyCode.RIGHT){var s=new Date;o.val(s.getFullYear().toString()+(s.getMonth()+1).toString()+s.getDate().toString()),o.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(e,t,i,a,n){if("24"===n.hourFormat&&24===parseInt(e,10))return t.buffer[i-1]="0",t.buffer[i]="0",{refreshFromBuffer:{start:i-1,end:i},c:"0"};var r=n.regex.hrs.test(e);if(!a&&!r&&(e.charAt(1)===n.timeseparator||"-.:".indexOf(e.charAt(1))!==-1)&&(r=n.regex.hrs.test("0"+e.charAt(0))))return t.buffer[i-1]="0",t.buffer[i]=e.charAt(0),i++,{refreshFromBuffer:{start:i-2,end:i},pos:i,c:n.timeseparator};if(r&&"24"!==n.hourFormat&&n.regex.hrs24.test(e)){var o=parseInt(e,10);return 24===o?(t.buffer[i+5]="a",t.buffer[i+6]="m"):(t.buffer[i+5]="p",t.buffer[i+6]="m"),o-=12,o<10?(t.buffer[i]=o.toString(),t.buffer[i-1]="0"):(t.buffer[i]=o.toString().charAt(1),t.buffer[i-1]=o.toString().charAt(0)),{refreshFromBuffer:{start:i-1,end:i+6},c:t.buffer[i]}}return r},cardinality:2,prevalidator:[{validator:function(e,t,i,a,n){var r=n.regex.hrspre.test(e);return a||r||!(r=n.regex.hrs.test("0"+e))?r:(t.buffer[i]="0",i++,{pos:i})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(e,t,i,a,n){var r=n.regex.mspre.test(e);return a||r||!(r=n.regex.ms.test("0"+e))?r:(t.buffer[i]="0",i++,{pos:i})},cardinality:1}]},t:{validator:function(e,t,i,a,n){return n.regex.ampm.test(e+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[13-9]|1[012])"+i+"[0-3])|(02"+i+"[0-2])")},val2:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+i+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+i+"30)|((0[13578]|1[02])"+i+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey&&i.keyCode===t.keyCode.RIGHT){var s=new Date;o.val((s.getMonth()+1).toString()+s.getDate().toString()+s.getFullYear().toString()),o.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+i+"[0-3])")},val2:function(e){var i=t.escapeRegex.call(this,e);return new RegExp("((0[1-9]|1[012])"+i+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+i+"30)|((0[1-6])"+i+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0}}),t}(jQuery,Inputmask),function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-zА-яЁёÀ-ÿµ]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,i,a,n){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)},cardinality:1}},onUnMask:function(e,t,i){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return e=e.toLowerCase(),e.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t}(jQuery,Inputmask),function(e,t){return t.extendAliases({numeric:{mask:function(e){function i(t){for(var i="",a=0;a<t.length;a++)i+=e.definitions[t.charAt(a)]||e.optionalmarker.start===t.charAt(a)||e.optionalmarker.end===t.charAt(a)||e.quantifiermarker.start===t.charAt(a)||e.quantifiermarker.end===t.charAt(a)||e.groupmarker.start===t.charAt(a)||e.groupmarker.end===t.charAt(a)||e.alternatormarker===t.charAt(a)?"\\"+t.charAt(a):t.charAt(a);return i}if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var a=Math.floor(e.integerDigits/e.groupSize),n=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===n?a-1:a),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&e.integerOptional===!1&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",e.numericInput===!0&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=i(e.prefix),r+=e.integerOptional===!0?"~{1,"+e.integerDigits+"}":"~{"+e.integerDigits+"}",void 0!==e.digits){e.decimalProtect&&(e.radixPointDefinitionSymbol=":");var o=e.digits.toString().split(",");isFinite(o[0]&&o[1]&&isFinite(o[1]))?r+=(e.decimalProtect?":":e.radixPoint)+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(r+=e.digitsOptional?"["+(e.decimalProtect?":":e.radixPoint)+";{1,"+e.digits+"}]":(e.decimalProtect?":":e.radixPoint)+";{"+e.digits+"}")}return r+=i(e.suffix),r+="[-]",e.greedy=!1,null!==e.min&&(e.min=e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,"."))),null!==e.max&&(e.max=e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,"."))),r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowPlus:!0,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",postFormat:function(i,a,n){n.numericInput===!0&&(i=i.reverse(),isFinite(a)&&(a=i.join("").length-a-1));var r,o;a=a>=i.length?i.length-1:a<0?0:a;var s=i[a],l=i.slice();s===n.groupSeparator&&(l.splice(a--,1),s=l[a]);var u=l.join("").match(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)));u=null!==u&&1===u.length,a>(u?n.negationSymbol.front.length:0)+n.prefix.length&&a<l.length-n.suffix.length&&(l[a]="!");var c=l.join(""),p=l.join();if(u&&(c=c.replace(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)),""),c=c.replace(new RegExp(t.escapeRegex(n.negationSymbol.back)+"$"),"")),c=c.replace(new RegExp(t.escapeRegex(n.suffix)+"$"),""),c=c.replace(new RegExp("^"+t.escapeRegex(n.prefix)),""),c.length>0&&n.autoGroup||c.indexOf(n.groupSeparator)!==-1){var d=t.escapeRegex(n.groupSeparator);c=c.replace(new RegExp(d,"g"),"");var f=c.split(s===n.radixPoint?"!":n.radixPoint);if(c=""===n.radixPoint?c:f[0],s!==n.negationSymbol.front&&(c=c.replace("!","?")),c.length>n.groupSize)for(var m=new RegExp("([-+]?[\\d?]+)([\\d?]{"+n.groupSize+"})");m.test(c)&&""!==n.groupSeparator;)c=c.replace(m,"$1"+n.groupSeparator+"$2"),c=c.replace(n.groupSeparator+n.groupSeparator,n.groupSeparator);c=c.replace("?","!"),""!==n.radixPoint&&f.length>1&&(c+=(s===n.radixPoint?"!":n.radixPoint)+f[1])}c=n.prefix+c+n.suffix,u&&(c=n.negationSymbol.front+c+n.negationSymbol.back);var h=p!==c.split("").join(),v=e.inArray("!",c);if(v===-1&&(v=a),h){for(i.length=c.length,r=0,o=c.length;r<o;r++)i[r]=c.charAt(r);i[v]=s}return v=n.numericInput&&isFinite(a)?i.join("").length-v-1:v,n.numericInput&&(i=i.reverse(),e.inArray(n.radixPoint,i)<v&&i.join("").length-n.suffix.length!==v&&(v-=1)),{pos:v,refreshFromBuffer:h,buffer:i,isNegative:u}},onBeforeWrite:function(i,a,n,r){var o;if(i&&("blur"===i.type||"checkval"===i.type||"keydown"===i.type)){var s=r.numericInput?a.slice().reverse().join(""):a.join(""),l=s.replace(r.prefix,"");l=l.replace(r.suffix,""),l=l.replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),""),","===r.radixPoint&&(l=l.replace(r.radixPoint,"."));var u=l.match(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"));if(u=null!==u&&1===u.length,l=l.replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),""),
l=l.replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(l=l.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),l=l===r.negationSymbol.front?l+"0":l,""!==l&&isFinite(l)){var c=parseFloat(l),p=u?c*-1:c;if(null!==r.min&&isFinite(r.min)&&p<parseFloat(r.min)?(c=Math.abs(r.min),u=r.min<0,s=void 0):null!==r.max&&isFinite(r.max)&&p>parseFloat(r.max)&&(c=Math.abs(r.max),u=r.max<0,s=void 0),l=c.toString().replace(".",r.radixPoint).split(""),isFinite(r.digits)){var d=e.inArray(r.radixPoint,l),f=e.inArray(r.radixPoint,s);d===-1&&(l.push(r.radixPoint),d=l.length-1);for(var m=1;m<=r.digits;m++)r.digitsOptional||void 0!==l[d+m]&&l[d+m]!==r.placeholder.charAt(0)?f!==-1&&void 0!==s[f+m]&&(l[d+m]=l[d+m]||s[f+m]):l[d+m]="0";l[l.length-1]===r.radixPoint&&delete l[l.length-1]}if(c.toString()!==l&&c.toString()+"."!==l||u)return l=(r.prefix+l.join("")).split(""),!u||0===c&&"blur"===i.type||(l.unshift(r.negationSymbol.front),l.push(r.negationSymbol.back)),r.numericInput&&(l=l.reverse()),o=r.postFormat(l,r.numericInput?n:n-1,r),o.buffer&&(o.refreshFromBuffer=o.buffer.join("")!==a.join("")),o}}if(r.autoGroup)return o=r.postFormat(a,r.numericInput?n:n-1,r),o.caret=n<(o.isNegative?r.negationSymbol.front.length:0)+r.prefix.length||n>o.buffer.length-(o.isNegative?r.negationSymbol.back.length:0)?o.pos:o.pos+1,o},regex:{integerPart:function(e){return new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},signHandler:function(e,t,i,a,n){if(!a&&n.allowMinus&&"-"===e||n.allowPlus&&"+"===e){var r=t.buffer.join("").match(n.regex.integerPart(n));if(r&&r[0].length>0)return t.buffer[r.index]===("-"===e?"+":n.negationSymbol.front)?"-"===e?""!==n.negationSymbol.back?{pos:0,c:n.negationSymbol.front,remove:0,caret:i,insert:{pos:t.buffer.length-1,c:n.negationSymbol.back}}:{pos:0,c:n.negationSymbol.front,remove:0,caret:i}:""!==n.negationSymbol.back?{pos:0,c:"+",remove:[0,t.buffer.length-1],caret:i}:{pos:0,c:"+",remove:0,caret:i}:t.buffer[0]===("-"===e?n.negationSymbol.front:"+")?"-"===e&&""!==n.negationSymbol.back?{remove:[0,t.buffer.length-1],caret:i-1}:{remove:0,caret:i-1}:"-"===e?""!==n.negationSymbol.back?{pos:0,c:n.negationSymbol.front,caret:i+1,insert:{pos:t.buffer.length,c:n.negationSymbol.back}}:{pos:0,c:n.negationSymbol.front,caret:i+1}:{pos:0,c:e,caret:i+1}}return!1},radixHandler:function(t,i,a,n,r){if(!n&&r.numericInput!==!0&&t===r.radixPoint&&void 0!==r.digits&&(isNaN(r.digits)||parseInt(r.digits)>0)){var o=e.inArray(r.radixPoint,i.buffer),s=i.buffer.join("").match(r.regex.integerPart(r));if(o!==-1&&i.validPositions[o])return i.validPositions[o-1]?{caret:o+1}:{pos:s.index,c:s[0],caret:o+1};if(!s||"0"===s[0]&&s.index+1!==a)return i.buffer[s?s.index:a]="0",{pos:(s?s.index:a)+1,c:r.radixPoint}}return!1},leadingZeroHandler:function(t,i,a,n,r,o){if(!n){var s=i.buffer.slice("");if(s.splice(0,r.prefix.length),s.splice(s.length-r.suffix.length,r.suffix.length),r.numericInput===!0){var s=s.reverse(),l=s[0];if("0"===l&&void 0===i.validPositions[a-1])return{pos:a,remove:s.length-1}}else{a-=r.prefix.length;var u=e.inArray(r.radixPoint,s),c=s.slice(0,u!==-1?u:void 0).join("").match(r.regex.integerNPart(r));if(c&&(u===-1||a<=u)){var p=u===-1?0:parseInt(s.slice(u+1).join(""));if(0===c[0].indexOf(""!==r.placeholder?r.placeholder.charAt(0):"0")&&(c.index+1===a||o!==!0&&0===p))return i.buffer.splice(c.index+r.prefix.length,1),{pos:c.index+r.prefix.length,remove:c.index+r.prefix.length};if("0"===t&&a<=c.index&&c[0]!==r.groupSeparator)return!1}}}return!0},definitions:{"~":{validator:function(i,a,n,r,o,s){var l=o.signHandler(i,a,n,r,o);if(!l&&(l=o.radixHandler(i,a,n,r,o),!l&&(l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(i):new RegExp("[0-9]").test(i),l===!0&&(l=o.leadingZeroHandler(i,a,n,r,o,s),l===!0)))){var u=e.inArray(o.radixPoint,a.buffer);l=u!==-1&&(o.digitsOptional===!1||a.validPositions[n])&&o.numericInput!==!0&&n>u&&!r?{pos:n,remove:n}:{pos:n}}return l},cardinality:1},"+":{validator:function(e,t,i,a,n){var r=n.signHandler(e,t,i,a,n);return!r&&(a&&n.allowMinus&&e===n.negationSymbol.front||n.allowMinus&&"-"===e||n.allowPlus&&"+"===e)&&(r=!(!a&&"-"===e)||(""!==n.negationSymbol.back?{pos:i,c:"-"===e?n.negationSymbol.front:"+",caret:i+1,insert:{pos:t.buffer.length,c:n.negationSymbol.back}}:{pos:i,c:"-"===e?n.negationSymbol.front:"+",caret:i+1})),r},cardinality:1,placeholder:""},"-":{validator:function(e,t,i,a,n){var r=n.signHandler(e,t,i,a,n);return!r&&a&&n.allowMinus&&e===n.negationSymbol.back&&(r=!0),r},cardinality:1,placeholder:""},":":{validator:function(e,i,a,n,r){var o=r.signHandler(e,i,a,n,r);if(!o){var s="["+t.escapeRegex(r.radixPoint)+"]";o=new RegExp(s).test(e),o&&i.validPositions[a]&&i.validPositions[a].match.placeholder===r.radixPoint&&(o={caret:a+1})}return o},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,i,a){if(""===i&&a.nullable===!0)return i;var n=e.replace(a.prefix,"");return n=n.replace(a.suffix,""),n=n.replace(new RegExp(t.escapeRegex(a.groupSeparator),"g"),""),a.unmaskAsNumber?(""!==a.radixPoint&&n.indexOf(a.radixPoint)!==-1&&(n=n.replace(t.escapeRegex.call(this,a.radixPoint),".")),Number(n)):n},isComplete:function(e,i){var a=e.join(""),n=e.slice();if(i.postFormat(n,0,i),n.join("")!==a)return!1;var r=a.replace(i.prefix,"");return r=r.replace(i.suffix,""),r=r.replace(new RegExp(t.escapeRegex(i.groupSeparator),"g"),""),","===i.radixPoint&&(r=r.replace(t.escapeRegex(i.radixPoint),".")),isFinite(r)},onBeforeMask:function(e,i){if(i.numericInput===!0&&(e=e.split("").reverse().join("")),""!==i.radixPoint&&isFinite(e)){var a=e.split("."),n=""!==i.groupSeparator?parseInt(i.groupSize):0;2===a.length&&(a[0].length>n||a[1].length>n)&&(e=e.toString().replace(".",i.radixPoint))}var r=e.match(/,/g),o=e.match(/\./g);if(o&&r?o.length>r.length?(e=e.replace(/\./g,""),e=e.replace(",",i.radixPoint)):r.length>o.length?(e=e.replace(/,/g,""),e=e.replace(".",i.radixPoint)):e=e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e=e.replace(/,/g,""):e=e.replace(new RegExp(t.escapeRegex(i.groupSeparator),"g"),""),0===i.digits&&(e.indexOf(".")!==-1?e=e.substring(0,e.indexOf(".")):e.indexOf(",")!==-1&&(e=e.substring(0,e.indexOf(",")))),""!==i.radixPoint&&isFinite(i.digits)&&e.indexOf(i.radixPoint)!==-1){var s=e.split(i.radixPoint),l=s[1].match(new RegExp("\\d*"))[0];if(parseInt(i.digits)<l.toString().length){var u=Math.pow(10,parseInt(i.digits));e=e.replace(t.escapeRegex(i.radixPoint),"."),e=Math.round(parseFloat(e)*u)/u,e=e.toString().replace(".",i.radixPoint)}}return i.numericInput===!0&&(e=e.split("").reverse().join("")),e.toString()},canClearPosition:function(e,t,i,a,n){var r=e.validPositions[t].input,o=r!==n.radixPoint||null!==e.validPositions[t].match.fn&&n.decimalProtect===!1||isFinite(r)||t===i||r===n.groupSeparator||r===n.negationSymbol.front||r===n.negationSymbol.back;return o},onKeyDown:function(i,a,n,r){var o=e(this);if(i.ctrlKey)switch(i.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowPlus:!1,allowMinus:!1}}),t}(jQuery,Inputmask),function(e,t){function i(e,t){var i=(e.mask||e).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),a=(t.mask||t).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),n=(e.mask||e).split("#")[0],r=(t.mask||t).split("#")[0];return 0===r.indexOf(n)?-1:0===n.indexOf(r)?1:i.localeCompare(a)}var a=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,i){function n(e,i,a){i=i||"",a=a||o,""!==i&&(a[i]={});for(var r="",s=a[i]||a,l=e.length-1;l>=0;l--)t=e[l].mask||e[l],r=t.substr(0,1),s[r]=s[r]||[],s[r].unshift(t.substr(1)),e.splice(l,1);for(var u in s)s[u].length>500&&n(s[u].slice(),u,s)}function r(t){var a="",n=[];for(var o in t)e.isArray(t[o])?1===t[o].length?n.push(o+t[o]):n.push(o+i.groupmarker.start+t[o].join(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)+i.groupmarker.end):n.push(o+r(t[o]));return a+=1===n.length?n[0]:i.groupmarker.start+n.join(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)+i.groupmarker.end}var o={};i.phoneCodes&&i.phoneCodes.length>1e3&&(t=t.substr(1,t.length-2),n(t.split(i.groupmarker.end+i.alternatormarker+i.groupmarker.start)),t=r(o));var s=a.call(this,t,i);return s},t.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(e){return e.definitions={"#":e.definitions[9]},e.phoneCodes.sort(i)},keepStatic:!0,onBeforeMask:function(e,t){var i=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(i.indexOf(t.countrycode)>1||i.indexOf(t.countrycode)===-1)&&(i="+"+t.countrycode+i),i},onUnMask:function(e,t,i){return t},inputmode:"tel"}}),t}(jQuery,Inputmask),function(e,t){return t.extendAliases({Regex:{mask:"r",greedy:!1,repeat:"*",regex:null,regexTokens:null,tokenizer:/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,quantifierFilter:/[0-9]+[^,]/,isComplete:function(e,t){return new RegExp(t.regex).test(e.join(""))},definitions:{r:{validator:function(t,i,a,n,r){function o(e,t){this.matches=[],this.isGroup=e||!1,this.isQuantifier=t||!1,this.quantifier={min:1,max:1},this.repeaterPart=void 0}function s(){var e,t,i=new o,a=[];for(r.regexTokens=[];e=r.tokenizer.exec(r.regex);)switch(t=e[0],t.charAt(0)){case"(":a.push(new o(!0));break;case")":c=a.pop(),a.length>0?a[a.length-1].matches.push(c):i.matches.push(c);break;case"{":case"+":case"*":var n=new o(!1,!0);t=t.replace(/[{}]/g,"");var s=t.split(","),l=isNaN(s[0])?s[0]:parseInt(s[0]),u=1===s.length?l:isNaN(s[1])?s[1]:parseInt(s[1]);if(n.quantifier={min:l,max:u},a.length>0){var p=a[a.length-1].matches;e=p.pop(),e.isGroup||(c=new o(!0),c.matches.push(e),e=c),p.push(e),p.push(n)}else e=i.matches.pop(),e.isGroup||(c=new o(!0),c.matches.push(e),e=c),i.matches.push(e),i.matches.push(n);break;default:a.length>0?a[a.length-1].matches.push(t):i.matches.push(t)}i.matches.length>0&&r.regexTokens.push(i)}function l(t,i){var a=!1;i&&(d+="(",m++);for(var n=0;n<t.matches.length;n++){var r=t.matches[n];if(r.isGroup===!0)a=l(r,!0);else if(r.isQuantifier===!0){var o=e.inArray(r,t.matches),s=t.matches[o-1],c=d;if(isNaN(r.quantifier.max)){for(;r.repeaterPart&&r.repeaterPart!==d&&r.repeaterPart.length>d.length&&!(a=l(s,!0)););a=a||l(s,!0),a&&(r.repeaterPart=d),d=c+r.quantifier.max}else{for(var p=0,f=r.quantifier.max-1;p<f&&!(a=l(s,!0));p++);d=c+"{"+r.quantifier.min+","+r.quantifier.max+"}"}}else if(void 0!==r.matches)for(var h=0;h<r.length&&!(a=l(r[h],i));h++);else{var v;if("["==r.charAt(0)){v=d,v+=r;for(var g=0;g<m;g++)v+=")";var y=new RegExp("^("+v+")$");a=y.test(u)}else for(var k=0,x=r.length;k<x;k++)if("\\"!==r.charAt(k)){v=d,v+=r.substr(0,k+1),v=v.replace(/\|$/,"");for(var g=0;g<m;g++)v+=")";var y=new RegExp("^("+v+")$");if(a=y.test(u))break}d+=r}if(a)break}return i&&(d+=")",m--),a}var u,c,p=i.buffer.slice(),d="",f=!1,m=0;null===r.regexTokens&&s(),p.splice(a,0,t),u=p.join("");for(var h=0;h<r.regexTokens.length;h++){var v=r.regexTokens[h];if(f=l(v,v.isGroup))break}return f},cardinality:1}}}}),t}(jQuery,Inputmask);
//# sourceMappingURL=jquery.inputmask.bundle.min.js.map

// Importing other js files

window.SVG_SPRITE = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip0_4104_11115"><path fill="currentColor" transform="translate(.65)" d="M0 0h205.7v29H0z"/></clipPath><filter id="filter0_d_1933_16426" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="2.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1933_16426"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_1933_16426" result="shape"/></filter><path id="google-rev-a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/><clipPath id="clip0_3229_1524"><path fill="#fff" transform="translate(0 .189)" d="M0 0h24v24H0z"/></clipPath></defs><symbol id="add" viewBox="0 0 14 14"><path d="M6 14V8H0V6h6V0h2v6h6v2H8v6H6z" fill="currentColor"/></symbol><symbol id="add_home_work" viewBox="0 0 33 33"><mask id="add_home_work-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M0 0h33v33H0z"/></mask><g mask="url(#add_home_work-a)"><path d="M1.375 26.125v-13.75L11 5.5l9.625 6.875v.928a9.513 9.513 0 00-1.478.876 9.098 9.098 0 00-1.272 1.118V13.75L11 8.869 4.125 13.75v9.625h2.75V16.5h8.25v6.875h.103a9.52 9.52 0 00.825 2.75h-3.678V19.25h-2.75v6.875h-8.25zm30.25-24.75v13.922a9.098 9.098 0 00-1.272-1.118 9.513 9.513 0 00-1.478-.876V4.125H16.5V6.05l-2.75-1.994V1.375h17.875zm-8.25 8.25h2.75v-2.75h-2.75v2.75zm1.375 19.25c-1.902 0-3.523-.67-4.863-2.01-1.341-1.341-2.012-2.963-2.012-4.865 0-1.902.67-3.524 2.012-4.865 1.34-1.34 2.96-2.01 4.863-2.01 1.902 0 3.524.67 4.865 2.01 1.34 1.341 2.01 2.963 2.01 4.865 0 1.902-.67 3.524-2.01 4.865-1.341 1.34-2.963 2.01-4.865 2.01zm-.688-2.75h1.375v-3.438h3.438v-1.375h-3.438v-3.437h-1.375v3.438h-3.437v1.375h3.438v3.437z" fill="#3055D8"/></g></symbol><symbol id="ad_units" viewBox="0 0 20 30"><path d="M4.09 10.91V8.181H15v2.727H4.09zM2.728 30c-.75 0-1.392-.267-1.925-.8A2.627 2.627 0 010 27.273V2.727C0 1.977.267 1.335.802.8A2.625 2.625 0 012.727 0h13.637c.75 0 1.392.267 1.927.8.533.535.8 1.177.8 1.927v24.546a2.63 2.63 0 01-.8 1.927 2.63 2.63 0 01-1.927.8H2.727zm0-4.09v1.363h13.637v-1.364H2.727zm0-2.728h13.637V6.818H2.727v16.364zm0-19.091h13.637V2.727H2.727v1.364z" fill="currentColor"/></symbol><symbol id="app_registration" viewBox="0 0 25 24"><path d="M3 24a2.888 2.888 0 01-2.118-.88A2.89 2.89 0 010 21c0-.825.294-1.532.882-2.12A2.888 2.888 0 013 18c.825 0 1.531.294 2.118.88A2.89 2.89 0 016 21a2.89 2.89 0 01-.882 2.12A2.888 2.888 0 013 24zm0-9a2.885 2.885 0 01-2.118-.882A2.885 2.885 0 010 12c0-.825.294-1.531.882-2.12A2.888 2.888 0 013 9c.825 0 1.531.293 2.118.88A2.89 2.89 0 016 12c0 .825-.294 1.531-.882 2.118A2.885 2.885 0 013 15zm0-9a2.885 2.885 0 01-2.118-.882A2.885 2.885 0 010 3C0 2.175.294 1.469.882.882A2.885 2.885 0 013 0c.825 0 1.531.294 2.118.882C5.706 1.469 6 2.175 6 3s-.294 1.531-.882 2.118A2.885 2.885 0 013 6zm9 9a2.885 2.885 0 01-2.118-.882A2.885 2.885 0 019 12c0-.825.294-1.531.882-2.12A2.888 2.888 0 0112 9c.825 0 1.531.293 2.12.88.587.588.88 1.295.88 2.12l-3 3zm0-9a2.885 2.885 0 01-2.118-.882A2.885 2.885 0 019 3c0-.825.294-1.531.882-2.118A2.885 2.885 0 0112 0a2.89 2.89 0 012.12.882c.587.587.88 1.293.88 2.118s-.293 1.531-.88 2.118A2.89 2.89 0 0112 6zm-1.5 18v-3.188l7.95-7.95 3.188 3.188-7.95 7.95H10.5zM21 6a2.89 2.89 0 01-2.12-.882A2.888 2.888 0 0118 3c0-.825.294-1.531.88-2.118A2.89 2.89 0 0121 0a2.89 2.89 0 012.12.882c.586.587.88 1.293.88 2.118s-.294 1.531-.88 2.118A2.89 2.89 0 0121 6zm1.688 9L19.5 11.812l1.087-1.087c.3-.3.657-.45 1.07-.45.412 0 .756.15 1.03.45l1.088 1.088c.3.274.45.618.45 1.03 0 .413-.15.77-.45 1.07L22.688 15z" fill="currentColor"/></symbol><symbol id="arrow-long" viewBox="0 0 63 61"><path d="M61.768 32.225a2.5 2.5 0 000-3.536l-15.91-15.91a2.5 2.5 0 00-3.536 3.536l14.142 14.142-14.142 14.142a2.5 2.5 0 103.536 3.536l15.91-15.91zM0 32.957h60v-5H0v5z" fill="currentColor"/></symbol><symbol id="arrow-short" viewBox="0 0 16 15"><path d="M7.293 14.707a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L8 12.586 2.343 6.929A1 1 0 00.93 8.343l6.364 6.364zM7 0v14h2V0H7z" fill="currentColor"/></symbol><symbol id="arrow" viewBox="0 0 28 28"><path d="M9.363 25.667l-2.071-2.071L16.888 14 7.292 4.404l2.07-2.07L21.03 14 9.363 25.667z" fill="#3055D8"/></symbol><symbol id="arrow_circle_right" viewBox="0 0 40 40"><path d="M20 28l8-8-8-8-2.8 2.8 3.2 3.2H12v4h8.4l-3.2 3.2L20 28zm0 12c-2.767 0-5.367-.525-7.8-1.576-2.433-1.05-4.55-2.474-6.35-4.274-1.8-1.8-3.225-3.917-4.274-6.35C.526 25.367 0 22.767 0 20c0-2.767.525-5.367 1.576-7.8C2.626 9.767 4.05 7.65 5.85 5.85c1.8-1.8 3.917-3.225 6.35-4.276C14.633.524 17.233 0 20 0c2.767 0 5.367.525 7.8 1.574 2.433 1.05 4.55 2.476 6.35 4.276 1.8 1.8 3.225 3.917 4.274 6.35C39.474 14.633 40 17.233 40 20c0 2.767-.525 5.367-1.576 7.8-1.05 2.433-2.474 4.55-4.274 6.35-1.8 1.8-3.917 3.225-6.35 4.274C25.367 39.474 22.767 40 20 40z" fill="currentColor"/></symbol><symbol id="arrow_forward_ios" viewBox="0 0 19 19"><mask id="arrow_forward_ios-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19"><path fill="#D9D9D9" d="M0 0h19v19H0z"/></mask><g mask="url(#arrow_forward_ios-a)"><path d="M6.352 17.417l-1.405-1.405L11.46 9.5 4.947 2.989l1.405-1.406L14.27 9.5l-7.917 7.917z" fill="#3055D8"/></g></symbol><symbol id="audio" viewBox="0 0 207 29">ill=&quot;white&quot;<g clip-path="url(#clip0_4104_11115)" fill="currentColor"><path d="M41.25 23.2V5.8h2.9v17.4h-2.9zm5.8 5.8V0h2.9v29h-2.9zm-11.6-11.6v-5.8h2.9v5.8h-2.9zm17.4 5.8V5.8h2.9v17.4h-2.9zm5.8-5.8v-5.8h2.9v5.8h-2.9zM29.65 11.6v5.8h2.9v-5.8h-2.9zM23.85 11.6v5.8h2.9v-5.8h-2.9zM18.05 11.6v5.8h2.9v-5.8h-2.9zM6.45 11.6v5.8h2.9v-5.8h-2.9zM12.25 5.8v17.4h2.9V5.8h-2.9zM.65 11.6v5.8h2.9v-5.8H.65zM64.45 11.6v5.8h2.9v-5.8h-2.9zM70.25 5.8v17.4h2.9V5.8h-2.9zM81.85 11.6v5.8h2.9v-5.8h-2.9zM76.05 11.6v5.8h2.9v-5.8h-2.9zM122.35 23.2V5.8h2.9v17.4h-2.9zm5.8 5.8V0h2.9v29h-2.9zm-11.6-11.6v-5.8h2.9v5.8h-2.9zm17.4 5.8V5.8h2.9v17.4h-2.9zm5.8-5.8v-5.8h2.9v5.8h-2.9zM110.75 11.6v5.8h2.9v-5.8h-2.9zM104.95 11.6v5.8h2.9v-5.8h-2.9zM99.15 11.6v5.8h2.9v-5.8h-2.9zM87.55 11.6v5.8h2.9v-5.8h-2.9zM93.35 5.8v17.4h2.9V5.8h-2.9z"/><path d="M81.75 11.6v5.8h2.9v-5.8h-2.9zM145.55 11.6v5.8h2.9v-5.8h-2.9zM151.35 5.8v17.4h2.9V5.8h-2.9zM162.95 11.6v5.8h2.9v-5.8h-2.9zM157.15 11.6v5.8h2.9v-5.8h-2.9zM244.35 23.2V5.8h2.9v17.4h-2.9zm5.8 5.8V0h2.9v29h-2.9zm-11.6-11.6v-5.8h2.9v5.8h-2.9zm17.4 5.8V5.8h2.9v17.4h-2.9zm5.8-5.8v-5.8h2.9v5.8h-2.9zM232.75 11.6v5.8h2.9v-5.8h-2.9zM226.95 11.6v5.8h2.9v-5.8h-2.9zM221.15 11.6v5.8h2.9v-5.8h-2.9zM209.55 11.6v5.8h2.9v-5.8h-2.9zM215.35 5.8v17.4h2.9V5.8h-2.9zM203.75 11.6v5.8h2.9v-5.8h-2.9zM267.55 11.6v5.8h2.9v-5.8h-2.9zM273.35 5.8v17.4h2.9V5.8h-2.9zM284.95 11.6v5.8h2.9v-5.8h-2.9zM279.15 11.6v5.8h2.9v-5.8h-2.9zM197.395 11.6v5.8h2.9v-5.8h-2.9zM191.595 11.6v5.8h2.9v-5.8h-2.9zM185.795 11.6v5.8h2.9v-5.8h-2.9zM174.195 11.6v5.8h2.9v-5.8h-2.9zM179.995 5.8v17.4h2.9V5.8h-2.9zM168.395 11.6v5.8h2.9v-5.8h-2.9z"/></g></symbol><symbol id="badge" viewBox="0 0 33 33"><path d="M5.5 30.436a2.647 2.647 0 01-1.942-.807 2.65 2.65 0 01-.808-1.943V12.561c0-.756.27-1.404.808-1.943A2.647 2.647 0 015.5 9.811h6.875V5.686c0-.756.27-1.404.809-1.943a2.647 2.647 0 011.941-.807h2.75c.756 0 1.404.27 1.943.807.538.54.807 1.187.807 1.943v4.125H27.5c.756 0 1.404.27 1.943.807.538.54.807 1.187.807 1.943v15.125c0 .756-.269 1.404-.807 1.943a2.651 2.651 0 01-1.943.807h-22zm0-2.75h22V12.561h-6.875c0 .756-.269 1.403-.807 1.941a2.65 2.65 0 01-1.943.809h-2.75c-.756 0-1.403-.27-1.941-.809a2.644 2.644 0 01-.809-1.941H5.5v15.125zm2.75-2.75h8.25v-.619c0-.39-.11-.75-.327-1.083a2.157 2.157 0 00-.91-.773 7.063 7.063 0 00-1.392-.463 6.94 6.94 0 00-1.496-.156 6.92 6.92 0 00-1.495.156c-.47.102-.934.257-1.393.463-.39.183-.693.441-.91.773a1.938 1.938 0 00-.327 1.083v.619zm11-2.063h5.5v-2.062h-5.5v2.063zm-6.875-2.062c.573 0 1.06-.2 1.46-.602.402-.4.602-.887.602-1.46s-.2-1.06-.602-1.46a1.986 1.986 0 00-1.46-.603c-.573 0-1.06.2-1.46.602-.402.4-.602.888-.602 1.46 0 .573.2 1.06.602 1.46.4.402.887.603 1.46.603zm6.875-2.063h5.5v-2.062h-5.5v2.063zm-4.125-6.187h2.75V5.686h-2.75v6.875z" fill="currentColor"/></symbol><symbol id="bullish-new" viewBox="0 0 512 512"><path d="M499.2 403.2H12.8C5.726 403.2 0 408.926 0 416c0 7.074 5.726 12.8 12.8 12.8h486.4c7.074 0 12.8-5.726 12.8-12.8 0-7.074-5.726-12.8-12.8-12.8zM486.4 83.2h-76.8c-7.074 0-12.8 5.726-12.8 12.8s5.726 12.8 12.8 12.8h43.435L230.861 308.753l-93.807-93.807c-5.001-5.001-13.099-5.001-18.099 0l-102.4 102.4c-5.001 5.001-5.001 13.099 0 18.099A12.698 12.698 0 0025.6 339.2a12.76 12.76 0 009.054-3.746L128 242.099l93.346 93.346c4.813 4.821 12.553 4.975 17.613.478L473.6 124.749V172.8c0 7.074 5.726 12.8 12.8 12.8s12.8-5.726 12.8-12.8V96c0-7.074-5.726-12.8-12.8-12.8z" fill="currentColor"/></symbol><symbol id="bullish" viewBox="0 0 36 36"><path d="M9 26.477c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0l2.2 2.2 9.3-11.1c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4l-10 11.9c-.2.2-.4.3-.7.4-.3 0-.6-.1-.8-.3l-2.2-2.3-5.3 5.3c-.2.2-.4.3-.7.3z" fill="#27AE60"/></symbol><symbol id="business" viewBox="0 0 33 33"><path d="M5.5 29.061a2.647 2.647 0 01-1.942-.807 2.65 2.65 0 01-.808-1.943V11.186c0-.756.27-1.403.808-1.941A2.645 2.645 0 015.5 8.436H11v-2.75c0-.756.27-1.404.809-1.943a2.647 2.647 0 011.941-.807h5.5c.756 0 1.404.27 1.943.807.538.54.807 1.187.807 1.943v2.75h5.5c.756 0 1.404.27 1.943.809.538.538.807 1.185.807 1.941v15.125c0 .756-.269 1.404-.807 1.943a2.651 2.651 0 01-1.943.807h-22zm8.25-20.625h5.5v-2.75h-5.5v2.75zM27.5 20.811h-6.875v2.75h-8.25v-2.75H5.5v5.5h22v-5.5zm-12.375 0h2.75v-2.75h-2.75v2.75zM5.5 18.061h6.875v-2.75h8.25v2.75H27.5v-6.875h-22v6.875z" fill="currentColor"/></symbol><symbol id="business_center" viewBox="0 0 30 30"><mask id="business_center-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#business_center-a)"><path d="M5 26.25a2.406 2.406 0 01-1.765-.733A2.408 2.408 0 012.5 23.75V10c0-.687.245-1.275.735-1.765A2.404 2.404 0 015 7.5h5V5c0-.687.245-1.276.735-1.766A2.406 2.406 0 0112.5 2.5h5a2.41 2.41 0 011.766.734c.49.49.734 1.079.734 1.766v2.5h5c.688 0 1.276.245 1.766.735s.734 1.078.734 1.766v13.75a2.41 2.41 0 01-.734 1.766A2.41 2.41 0 0125 26.25H5zM12.5 7.5h5V5h-5v2.5zM25 18.75h-6.25v2.5h-7.5v-2.5H5v5h20v-5zm-11.25 0h2.5v-2.5h-2.5v2.5zM5 16.25h6.25v-2.5h7.5v2.5H25V10H5v6.25z" fill="#3055D8"/></g></symbol><symbol id="call" viewBox="0 0 29 29"><mask id="call-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29"><path fill="#D9D9D9" d="M.775.229h28v28h-28z"/></mask><g mask="url(#call-a)"><path d="M24.05 24.729c-2.508 0-4.953-.56-7.334-1.678a22.216 22.216 0 01-6.33-4.433 22.217 22.217 0 01-4.433-6.33C4.835 9.907 4.275 7.462 4.275 4.954c0-.35.117-.642.35-.875.234-.234.525-.35.875-.35h4.725c.273 0 .516.087.73.262.213.175.34.399.379.67l.758 4.084c.039.272.034.52-.014.743a1.197 1.197 0 01-.336.599l-2.83 2.858a19.105 19.105 0 003.079 3.938 21.726 21.726 0 004.068 3.179L18.8 17.32c.175-.175.404-.306.686-.394a1.88 1.88 0 01.831-.072l4.025.816c.272.058.496.19.67.393.176.205.263.443.263.716v4.724c0 .35-.116.642-.35.875-.233.234-.525.35-.875.35z" fill="currentColor"/></g></symbol><symbol id="chat-send" viewBox="0 0 19 16"><path d="M0 16v-6l8-2-8-2V0l19 8-19 8z" fill="#3055D8"/></symbol><symbol id="chat-showed__close" viewBox="0 0 32 32"><mask id="chat-showed__close-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><path fill="#D9D9D9" d="M0 0h32v32H0z"/></mask><g mask="url(#chat-showed__close-a)"><path d="M8.535 25.332l-1.867-1.867 7.467-7.467-7.467-7.466 1.867-1.867L16 14.132l7.467-7.467 1.867 1.867-7.467 7.466 7.467 7.467-1.867 1.867-7.467-7.467-7.466 7.467z" fill="#3055D8"/></g></symbol><symbol id="chat" viewBox="0 0 30 30"><path d="M0 30l2.667-9.116c-.48-1.028-.85-2.08-1.11-3.158a14.076 14.076 0 01-.39-3.31c0-1.994.379-3.868 1.135-5.622.757-1.754 1.784-3.28 3.081-4.577A14.556 14.556 0 019.96 1.135C11.714.378 13.587 0 15.58 0c1.994 0 3.869.378 5.623 1.135 1.755.757 3.28 1.784 4.578 3.081a14.555 14.555 0 013.083 4.577C29.622 10.546 30 12.42 30 14.414c0 1.994-.379 3.868-1.136 5.623-.757 1.754-1.784 3.28-3.081 4.578-1.298 1.298-2.824 2.326-4.578 3.083-1.754.757-3.628 1.135-5.622 1.135-1.128 0-2.231-.13-3.31-.39-1.077-.26-2.13-.63-3.157-1.11L0 30.001z" fill="#3055D8"/><path d="M19.568 20.107H9.324V17.83h10.244v2.277zM22.982 15.554H9.324v-2.276h13.658v2.276zM22.963 11.07H9.305V8.794h13.658v2.276z" fill="#fff"/></symbol><symbol id="check-new" viewBox="0 -65 424.032 424"><path d="M146.66 293.367c-4.094 0-8.191-1.558-11.305-4.695L4.688 158.004c-6.25-6.25-6.25-16.383 0-22.633s16.382-6.25 22.636 0l119.36 119.36L396.71 4.702c6.25-6.25 16.383-6.25 22.633 0s6.25 16.387 0 22.637L158.012 288.672a16.05 16.05 0 01-11.352 4.695zm0 0" fill="currentColor"/></symbol><symbol id="check" viewBox="0 0 36 36"><path d="M16.555 26.706c-.3 0-.6-.098-.8-.389l-7.5-8.735c-.4-.388-.3-1.068.1-1.359.4-.388 1.1-.291 1.4.097l6.6 7.668 9.8-15.238c.3-.486.9-.583 1.4-.292.5.195.6.874.4 1.262l-10.5 16.5c-.2.291-.5.486-.9.486z" fill="#27AE60"/></symbol><symbol id="checklist" viewBox="0 0 28 21"><path d="M4.881 20.728L0 15.847l1.925-1.925 2.922 2.922L10.69 11l1.925 1.96-7.735 7.768zm0-11L0 4.847l1.925-1.925 2.922 2.922L10.69 0l1.925 1.96L4.88 9.727zm10.244 8.25v-2.75H27.5v2.75H15.125zm0-11v-2.75H27.5v2.75H15.125z" fill="currentColor"/></symbol><symbol id="check_circle" viewBox="0 0 20 21"><path d="M8.6 15.557l7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4 4.25 4.25zm1.4 5.4a9.731 9.731 0 01-3.9-.788 10.09 10.09 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175a9.732 9.732 0 01-.788-3.9c0-1.383.263-2.683.788-3.9a10.092 10.092 0 012.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0110 .957c1.383 0 2.683.262 3.9.787a10.105 10.105 0 013.175 2.138c.9.9 1.612 1.958 2.137 3.175a9.733 9.733 0 01.788 3.9 9.732 9.732 0 01-.788 3.9 10.092 10.092 0 01-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137a9.731 9.731 0 01-3.9.788z" fill="#3055D8"/></symbol><symbol id="check_circle_empty" viewBox="0 0 121 120"><mask id="check_circle_empty-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="121" height="120"><path fill="#D9D9D9" d="M.5 0h120v120H.5z"/></mask><g mask="url(#check_circle_empty-a)"><path d="M53.125 82.75L88.5 47.375l-5.75-5.625-29.625 29.625-15-15L32.5 62l20.625 20.75zM60.5 110c-6.833 0-13.292-1.312-19.375-3.938-6.083-2.624-11.396-6.208-15.938-10.75-4.541-4.541-8.125-9.854-10.75-15.937C11.813 73.292 10.5 66.833 10.5 60c0-6.917 1.313-13.417 3.938-19.5 2.624-6.083 6.208-11.375 10.75-15.875 4.541-4.5 9.854-8.063 15.937-10.688C47.208 11.313 53.667 10 60.5 10c6.917 0 13.417 1.313 19.5 3.938 6.083 2.624 11.375 6.187 15.875 10.687 4.5 4.5 8.063 9.792 10.687 15.875 2.626 6.083 3.938 12.583 3.938 19.5 0 6.833-1.312 13.292-3.938 19.375-2.624 6.083-6.187 11.396-10.687 15.938-4.5 4.541-9.792 8.125-15.875 10.749C73.917 108.688 67.417 110 60.5 110zm0-7.5c11.833 0 21.875-4.146 30.125-12.438C98.875 81.772 103 71.75 103 60c0-11.833-4.125-21.875-12.375-30.125S72.333 17.5 60.5 17.5c-11.75 0-21.77 4.125-30.063 12.375C22.146 38.125 18 48.167 18 60c0 11.75 4.146 21.77 12.438 30.063C38.728 98.353 48.75 102.5 60.5 102.5z" fill="#3055D8"/></g></symbol><symbol id="close-new" viewBox="0 0 20 20"><path d="M17.286 19.714L10 12.43l-7.286 7.285-2.428-2.428L7.57 10 .286 2.714 2.714.286 10 7.57 17.286.286l2.428 2.428L12.43 10l7.285 7.286-2.428 2.428z" fill="currentColor"/></symbol><symbol id="close" viewBox="0 0 365.696 365.696"><path fill="currentColor" d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"/></symbol><symbol id="computer" viewBox="0 0 40 40"><mask id="computer-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path fill="#D9D9D9" d="M0 0h40v40H0z"/></mask><g mask="url(#computer-a)"><path d="M3.334 35c-.473 0-.868-.16-1.187-.48a1.608 1.608 0 01-.48-1.187c0-.472.16-.867.48-1.186.319-.32.714-.48 1.187-.48h33.333c.472 0 .868.16 1.187.48.32.319.48.714.48 1.186 0 .473-.16.868-.48 1.187-.32.32-.715.48-1.187.48H3.334zm3.333-5a3.208 3.208 0 01-2.353-.978 3.211 3.211 0 01-.98-2.355V8.333c0-.916.326-1.701.98-2.355A3.208 3.208 0 016.667 5h26.667c.916 0 1.701.326 2.355.978.652.654.978 1.439.978 2.355v18.334c0 .916-.326 1.701-.978 2.355a3.214 3.214 0 01-2.355.978H6.667z" fill="currentColor"/></g></symbol><symbol id="construction" viewBox="0 0 29 28"><path d="M25.476 28l-8.505-8.505 3.262-3.262 8.505 8.505L25.476 28zM4.039 28L.777 24.738l10.718-10.719-2.64-2.64-1.088 1.087-1.98-1.98v3.184l-1.088 1.087L0 10.058l1.087-1.087h3.185L2.33 7.029l5.515-5.514C8.362.997 8.919.62 9.515.388a4.969 4.969 0 011.825-.35c.621 0 1.23.117 1.825.35.596.233 1.152.609 1.67 1.127l-3.573 3.572 1.942 1.942-1.088 1.088 2.641 2.64 3.495-3.495a6.408 6.408 0 01-.251-.893 4.52 4.52 0 01-.098-.932c0-1.528.524-2.816 1.574-3.865C20.524.524 21.812 0 23.34 0c.388 0 .757.039 1.107.117.35.077.705.194 1.068.349L21.67 4.311l2.796 2.796 3.845-3.845c.18.363.304.718.37 1.067.064.35.096.72.096 1.108 0 1.527-.524 2.815-1.572 3.863-1.05 1.05-2.338 1.574-3.865 1.574-.31 0-.622-.026-.932-.078a3.568 3.568 0 01-.893-.272L4.039 28z" fill="currentColor"/></symbol><symbol id="contacts" viewBox="0 0 30 30"><mask id="contacts-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#contacts-a)"><path d="M5 28.75v-2.5h20v2.5H5zm0-25v-2.5h20v2.5H5zm10 12.5c1.042 0 1.927-.365 2.656-1.094.73-.729 1.094-1.614 1.094-2.656s-.365-1.927-1.094-2.656C16.927 9.114 16.042 8.75 15 8.75s-1.927.365-2.656 1.094c-.73.729-1.094 1.614-1.094 2.656s.365 1.927 1.094 2.656c.729.73 1.614 1.094 2.656 1.094zM5 25a2.407 2.407 0 01-1.765-.734A2.408 2.408 0 012.5 22.5v-15c0-.688.245-1.276.735-1.765A2.404 2.404 0 015 5h20c.688 0 1.276.245 1.766.735S27.5 6.812 27.5 7.5v15a2.41 2.41 0 01-.734 1.766A2.41 2.41 0 0125 25H5zm2.188-2.5a10.137 10.137 0 013.406-2.75c1.333-.667 2.802-1 4.406-1 1.604 0 3.073.333 4.406 1a10.137 10.137 0 013.407 2.75H25v-15H5v15h2.188zm3.687 0h8.25a6.894 6.894 0 00-1.953-.938A7.56 7.56 0 0015 21.25c-.75 0-1.474.104-2.171.313a6.89 6.89 0 00-1.954.937zM15 13.75c-.354 0-.65-.12-.89-.36s-.36-.536-.36-.89.12-.651.36-.891.536-.359.89-.359.651.12.891.359c.24.24.359.537.359.891s-.12.65-.359.89c-.24.24-.537.36-.891.36z" fill="#3055D8"/></g></symbol><symbol id="co_present" viewBox="0 0 40 40"><mask id="co_present-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path fill="currentColor" d="M0 0h40v40H0z"/></mask><g mask="url(#co_present-a)"><path d="M35 35V8.333H5v13.334H1.667V8.333c0-.916.327-1.701.98-2.355A3.208 3.208 0 015 5h30c.917 0 1.702.326 2.355.978.653.654.979 1.439.979 2.355v23.334c0 .916-.327 1.701-.979 2.355A3.214 3.214 0 0135 35zM15 23.333c-1.833 0-3.402-.652-4.708-1.958S8.334 18.5 8.334 16.667c0-1.834.652-3.403 1.958-4.709C11.598 10.653 13.167 10 15 10c1.834 0 3.403.653 4.709 1.958 1.305 1.306 1.958 2.875 1.958 4.709 0 1.833-.653 3.402-1.958 4.708-1.306 1.306-2.875 1.958-4.709 1.958zM1.667 36.667V32c0-.944.243-1.812.73-2.603a4.853 4.853 0 011.937-1.814 24.777 24.777 0 015.25-1.938A22.959 22.959 0 0115 25c1.834 0 3.64.215 5.417.645a24.776 24.776 0 015.25 1.938 4.853 4.853 0 011.937 1.814c.486.79.73 1.659.73 2.603v4.667H1.667z" fill="currentColor"/></g></symbol><symbol id="currency_exchange" viewBox="0 0 50 50"><mask id="currency_exchange-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50"><path fill="#D9D9D9" d="M0 0h50v50H0z"/></mask><g mask="url(#currency_exchange-a)"><path d="M25 47.916c-3.889 0-7.465-.885-10.73-2.656-3.263-1.77-5.937-4.132-8.02-7.083v5.573H2.083v-12.5h12.5v4.166H9.427c1.667 2.5 3.863 4.514 6.59 6.042 2.725 1.528 5.719 2.292 8.983 2.292 2.604 0 5.044-.495 7.319-1.484 2.273-.99 4.252-2.327 5.937-4.012 1.684-1.683 3.02-3.663 4.01-5.938.99-2.273 1.484-4.712 1.484-7.316h4.167c0 3.16-.599 6.128-1.796 8.906-1.199 2.778-2.84 5.208-4.923 7.292-2.084 2.083-4.514 3.723-7.292 4.92-2.778 1.199-5.746 1.798-8.906 1.798zm-1.875-8.333v-2.708c-1.632-.382-2.96-1.085-3.983-2.109-1.025-1.025-1.781-2.37-2.267-4.037l3.437-1.354c.417 1.423 1.069 2.49 1.955 3.202a4.72 4.72 0 003.045 1.069c1.146 0 2.127-.27 2.942-.809.817-.537 1.225-1.379 1.225-2.525 0-1.007-.425-1.823-1.275-2.448-.851-.625-2.37-1.337-4.558-2.135-2.049-.73-3.55-1.597-4.504-2.604-.956-1.007-1.434-2.327-1.434-3.959 0-1.423.495-2.717 1.486-3.88.989-1.163 2.334-1.918 4.035-2.265v-2.605h3.646v2.604c1.25.105 2.387.608 3.412 1.51 1.024.904 1.727 1.963 2.109 3.178l-3.334 1.354a4.576 4.576 0 00-1.354-2.004c-.625-.539-1.493-.808-2.604-.808-1.215 0-2.144.26-2.785.78-.643.522-.965 1.234-.965 2.136 0 .903.4 1.615 1.198 2.136.799.52 2.24 1.128 4.323 1.823 2.5.902 4.167 1.962 5 3.177a6.939 6.939 0 011.25 4.01c0 1.007-.174 1.893-.52 2.656a6.114 6.114 0 01-1.38 1.952 6.873 6.873 0 01-2.006 1.303c-.764.33-1.58.582-2.448.756v2.604h-3.646zM2.083 25c0-3.16.6-6.129 1.798-8.907 1.197-2.777 2.838-5.208 4.921-7.291 2.083-2.084 4.514-3.725 7.292-4.923C18.87 2.682 21.84 2.083 25 2.083c3.889 0 7.465.885 10.73 2.656 3.263 1.771 5.937 4.132 8.02 7.084V6.25h4.167v12.5h-12.5v-4.167h5.156c-1.667-2.5-3.863-4.514-6.59-6.042C31.258 7.014 28.263 6.25 25 6.25c-2.604 0-5.043.494-7.317 1.483-2.275.99-4.254 2.327-5.937 4.01-1.685 1.685-3.022 3.664-4.013 5.938C6.744 19.956 6.25 22.395 6.25 25H2.083z" fill="#3055D8"/></g></symbol><symbol id="database" viewBox="0 0 40 40"><mask id="database-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path fill="#D9D9D9" d="M0 0h40v40H0z"/></mask><g filter="url(#filter0_d_1933_16426)" mask="url(#database-a)"><path d="M20 18.333c-4.167 0-7.708-.652-10.625-1.958S5 13.5 5 11.667c0-1.834 1.458-3.403 4.375-4.709C12.292 5.653 15.833 5 20 5s7.708.653 10.625 1.958C33.542 8.264 35 9.833 35 11.667c0 1.833-1.458 3.402-4.375 4.708S24.167 18.333 20 18.333zm0 8.334c-4.167 0-7.708-.653-10.625-1.959C6.458 23.403 5 21.833 5 20v-4.167c0 1.223.57 2.258 1.708 3.105 1.14.847 2.5 1.534 4.084 2.062 1.583.528 3.23.91 4.938 1.145 1.708.237 3.131.355 4.27.355 1.139 0 2.562-.118 4.27-.355A27.422 27.422 0 0029.208 21c1.584-.528 2.945-1.215 4.084-2.062C34.43 18.091 35 17.056 35 15.833V20c0 1.833-1.458 3.403-4.375 4.708-2.917 1.306-6.458 1.959-10.625 1.959zM20 35c-4.167 0-7.708-.653-10.625-1.958C6.458 31.736 5 30.167 5 28.333v-4.166c0 1.222.57 2.257 1.708 3.105 1.14.846 2.5 1.534 4.084 2.061 1.583.528 3.23.91 4.938 1.147 1.708.236 3.131.353 4.27.353 1.139 0 2.562-.117 4.27-.353a27.519 27.519 0 004.938-1.147c1.584-.527 2.945-1.215 4.084-2.061C34.43 26.424 35 25.389 35 24.167v4.166c0 1.834-1.458 3.403-4.375 4.709C27.708 34.347 24.167 35 20 35z" fill="currentColor"/></g></symbol><symbol id="diversity_2" viewBox="0 0 33 33"><mask id="diversity_2-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M0 0h33v33H0z"/></mask><g mask="url(#diversity_2-a)"><path d="M12.031 30.836c-1.054 0-1.999-.275-2.835-.825-.837-.55-1.485-1.306-1.943-2.269-.367.481-.83.854-1.391 1.117a4.041 4.041 0 01-1.737.396c-1.169 0-2.148-.401-2.938-1.203C.396 27.25 0 26.276 0 25.13c0-.986.32-1.874.963-2.665.641-.79 1.455-1.243 2.44-1.357a5.636 5.636 0 01-.738-1.462 5.11 5.11 0 01-.259-1.632c0-.917.235-1.776.706-2.578.469-.802 1.128-1.455 1.976-1.96.114.413.269.854.463 1.323.195.47.419.878.67 1.221-.32.252-.572.556-.755.91a2.408 2.408 0 00-.275 1.118c0 1.284.527 2.074 1.58 2.372 1.055.298 2.052.539 2.991.722l.654 1.1c-.252.733-.47 1.358-.654 1.874-.183.515-.274.98-.274 1.392 0 .687.246 1.29.74 1.805a2.4 2.4 0 001.803.773c.871 0 1.593-.39 2.166-1.169s1.043-1.696 1.41-2.75c.366-1.054.647-2.12.842-3.197.194-1.077.349-1.902.463-2.475l2.682.722a159.224 159.224 0 01-.757 3.54 19.963 19.963 0 01-1.253 3.799c-.54 1.203-1.25 2.217-2.132 3.042-.883.825-2.023 1.238-3.42 1.238zm-7.906-4.331c.39 0 .716-.132.98-.396a1.33 1.33 0 00.395-.98c0-.389-.132-.716-.395-.98a1.334 1.334 0 00-.98-.394c-.39 0-.716.131-.979.394-.264.264-.396.591-.396.98 0 .39.132.717.396.98.263.264.59.396.979.396zm9.762-5.432c-1.054-.94-2.01-1.816-2.87-2.63-.859-.813-1.598-1.603-2.217-2.37-.619-.769-1.094-1.537-1.426-2.305a5.943 5.943 0 01-.499-2.388c0-1.49.51-2.745 1.53-3.765s2.274-1.53 3.764-1.53c.091 0 .172.006.24.017.07.012.15.018.241.018a3.67 3.67 0 01-.275-1.41c0-1.145.401-2.119 1.203-2.92C14.38.986 15.354.585 16.5.585c1.146 0 2.12.401 2.922 1.203s1.203 1.776 1.203 2.922c0 .252-.023.487-.069.704a4.047 4.047 0 01-.206.67h.481c1.375 0 2.544.442 3.506 1.324.963.882 1.536 1.977 1.72 3.283a8.509 8.509 0 00-1.392-.103 13.7 13.7 0 00-1.427.069 2.632 2.632 0 00-.876-1.306c-.425-.344-.935-.516-1.53-.516-.803 0-1.427.235-1.873.705-.448.47-1.061 1.151-1.84 2.045h-1.272c-.802-.94-1.426-1.633-1.873-2.08-.447-.447-1.049-.67-1.805-.67-.734 0-1.34.24-1.822.722-.481.481-.722 1.088-.722 1.822 0 .527.149 1.07.447 1.632.298.562.716 1.158 1.255 1.787.538.631 1.191 1.302 1.96 2.012.767.71 1.62 1.478 2.56 2.303l-1.96 1.96zM16.5 6.086c.39 0 .716-.132.98-.396a1.33 1.33 0 00.395-.98c0-.389-.131-.715-.395-.98a1.334 1.334 0 00-.98-.394c-.39 0-.716.131-.979.395-.264.264-.396.59-.396.98s.132.716.396.979c.263.264.59.396.979.396zm4.434 24.75a5.531 5.531 0 01-1.494-.206 5.15 5.15 0 01-1.428-.653c.253-.321.505-.7.757-1.135.252-.435.481-.836.687-1.203a2.768 2.768 0 001.513.447c.733 0 1.346-.258 1.838-.773.493-.516.74-1.13.74-1.84 0-.435-.092-.905-.275-1.409-.183-.504-.401-1.123-.653-1.856l.653-1.1a34.413 34.413 0 003.008-.722c1.043-.298 1.564-1.089 1.564-2.372 0-.917-.338-1.581-1.014-1.994a4.18 4.18 0 00-2.217-.618c-.963 0-2.086.183-3.37.55-1.283.366-2.784.836-4.502 1.409l-.722-2.681c1.787-.573 3.38-1.054 4.778-1.444 1.398-.39 2.681-.584 3.85-.584 1.581 0 2.968.47 4.16 1.409 1.19.94 1.787 2.257 1.787 3.953 0 .573-.086 1.117-.259 1.632a5.64 5.64 0 01-.738 1.462c.985.114 1.799.567 2.44 1.357.642.791.963 1.68.963 2.665 0 1.146-.395 2.12-1.185 2.922-.791.802-1.771 1.203-2.94 1.203a4.032 4.032 0 01-1.735-.396 3.688 3.688 0 01-1.393-1.117c-.459.963-1.106 1.719-1.943 2.269-.836.55-1.792.825-2.87.825zm7.975-4.331c.39 0 .71-.132.963-.396a1.36 1.36 0 00.378-.98c0-.389-.132-.721-.396-.996a1.3 1.3 0 00-.979-.413c-.39 0-.716.132-.979.396-.264.263-.396.59-.396.98 0 .389.137.721.413.996.274.275.607.413.996.413z" fill="#3055D8"/></g></symbol><symbol id="dns-big" viewBox="0 0 42 42"><path d="M8.794 6.818c-.657 0-1.203.23-1.64.689-.438.459-.657 1.017-.657 1.673 0 .613.219 1.149.656 1.608.438.46.984.689 1.64.689.657 0 1.204-.23 1.641-.69.438-.459.657-1.016.657-1.673 0-.612-.22-1.148-.657-1.607-.437-.46-.984-.69-1.64-.69zm0 23.428c-.657 0-1.203.23-1.64.689-.438.46-.657 1.017-.657 1.673 0 .613.219 1.149.656 1.608.438.46.984.69 1.64.69.657 0 1.204-.23 1.641-.69.438-.46.657-1.017.657-1.673 0-.613-.22-1.149-.657-1.608-.437-.46-.984-.69-1.64-.69zM1.837.189h38.326c.525 0 .962.175 1.312.525.35.35.525.81.525 1.379v13.65c0 .743-.175 1.323-.525 1.739-.35.415-.788.623-1.313.623H1.837c-.524 0-.962-.208-1.312-.623-.35-.416-.525-.996-.525-1.74V2.093C0 1.525.175 1.065.525.715.875.364 1.312.19 1.838.19zm.197 2.035v13.912h37.932V2.224H2.034zm-.196 21.394H39.9c.569 0 1.06.23 1.477.689.415.459.623.973.623 1.542v13.256c0 .788-.208 1.39-.623 1.805a2.018 2.018 0 01-1.477.623H2.1c-.613 0-1.116-.208-1.51-.623-.393-.416-.59-1.017-.59-1.805V25.85c0-.569.153-1.083.46-1.542.306-.46.765-.69 1.377-.69zm.196 1.968v13.979h37.932V25.586H2.034z" fill="currentColor"/></symbol><symbol id="dns" viewBox="0 0 33 34"><path d="M10.313 8.75c-.573 0-1.06.2-1.46.602-.402.4-.603.888-.603 1.46 0 .573.2 1.06.602 1.46.4.402.888.603 1.46.603.573 0 1.06-.2 1.46-.602.402-.4.603-.888.603-1.46 0-.573-.2-1.06-.602-1.46a1.986 1.986 0 00-1.46-.603zm0 13.75c-.573 0-1.06.2-1.46.602-.402.4-.603.888-.603 1.46 0 .573.2 1.06.602 1.46.4.402.888.603 1.46.603.573 0 1.06-.2 1.46-.602.402-.4.603-.888.603-1.46 0-.573-.2-1.06-.602-1.46a1.986 1.986 0 00-1.46-.603zM5.5 4.625h22c.39 0 .716.132.979.395.264.264.396.59.396.98v9.625c0 .39-.132.716-.396.979-.263.264-.59.396-.979.396h-22c-.39 0-.716-.132-.979-.396a1.327 1.327 0 01-.396-.979V6c0-.39.132-.716.396-.98a1.33 1.33 0 01.979-.395zm1.375 2.75v6.875h19.25V7.375H6.875zm-1.375 11h22c.39 0 .716.131.979.395.264.264.396.59.396.98v9.625c0 .39-.132.716-.396.979-.263.264-.59.396-.979.396h-22c-.39 0-.716-.132-.979-.396a1.327 1.327 0 01-.396-.979V19.75c0-.39.132-.716.396-.98a1.33 1.33 0 01.979-.395zm1.375 2.75V28h19.25v-6.875H6.875z" fill="currentColor"/></symbol><symbol id="donut_large" viewBox="0 0 50 50"><mask id="donut_large-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50"><path fill="#D9D9D9" d="M0 0h50v50H0z"/></mask><g mask="url(#donut_large-a)"><path d="M22.968 45.729c-5.347-.521-9.809-2.76-13.385-6.719C6.007 35.052 4.22 30.382 4.22 25s1.788-10.052 5.364-14.01c3.576-3.96 8.038-6.199 13.385-6.72v6.25c-3.61.487-6.597 2.101-8.958 4.844C11.65 18.107 10.47 21.32 10.47 25c0 3.68 1.18 6.892 3.541 9.635 2.361 2.743 5.347 4.358 8.958 4.844v6.25zm4.167 0v-6.25c3.264-.417 6.024-1.771 8.281-4.063 2.257-2.291 3.629-5.07 4.115-8.333h6.25c-.486 4.965-2.474 9.192-5.962 12.681-3.49 3.49-7.719 5.479-12.684 5.965zm12.396-22.813c-.486-3.264-1.858-6.041-4.115-8.333-2.256-2.292-5.017-3.646-8.28-4.063V4.27c4.964.487 9.192 2.474 12.683 5.963 3.488 3.49 5.476 7.718 5.962 12.683h-6.25z" fill="#3055D8"/></g></symbol><symbol id="dzen" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.148.352C2.906 1.062.572 3.646.105 7.04l-.087.638.713-.001c.393 0 1.222-.06 1.843-.131 3.632-.417 4.63-1.667 4.916-6.15C7.58-.035 7.654.022 6.148.352zm1.814.64c0 1.274.247 2.99.544 3.784.325.868 1.059 1.749 1.752 2.103.75.382 1.996.636 3.65.743l1.445.094-.002-.523c-.004-1.374-.86-3.3-2.013-4.528C12.123 1.369 10.356.45 8.668.235l-.706-.09v.848zM.092 8.709c.256 1.83.992 3.366 2.204 4.6a7.766 7.766 0 004.499 2.235l.776.097-.08-1.26c-.308-4.832-1.372-5.92-6.097-6.23L0 8.058l.091.65zm12.95-.485c-3.65.325-4.794 1.674-5.038 5.935l-.085 1.49.695-.093c1.873-.248 3.444-1.063 4.723-2.45 1.183-1.281 2.016-3.157 2.016-4.538 0-.484-.001-.485-.571-.466-.314.01-1.097.065-1.74.122z" fill="#282A32"/></symbol><symbol id="full_stacked_bar_chart" viewBox="0 0 30 30"><mask id="full_stacked_bar_chart-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#full_stacked_bar_chart-a)"><path d="M5 25v-3.75h5V25H5zm0-5v-5h5v5H5zm0-6.25V5h5v8.75H5zM12.5 25v-8.75h5V25h-5zm0-10v-5h5v5h-5zm0-6.25V5h5v3.75h-5zM20 25v-2.5h5V25h-5zm0-3.75v-5h5v5h-5zM20 15V5h5v10h-5z" fill="#3055D8"/></g></symbol><symbol id="google-rev" viewBox="0 0 48 48"><clipPath id="google-rev-b"><use xlink:href="#google-rev-a" overflow="visible"/></clipPath><path clip-path="url(#google-rev-b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#google-rev-b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#google-rev-b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#google-rev-b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></symbol><symbol id="group" viewBox="0 0 33 24"><path d="M0 24v-4.2c0-.85.219-1.631.657-2.345a4.37 4.37 0 011.743-1.63 22.3 22.3 0 014.725-1.744c1.6-.387 3.225-.581 4.875-.581s3.275.194 4.875.58a22.3 22.3 0 014.725 1.745 4.37 4.37 0 011.743 1.63c.438.714.657 1.495.657 2.345V24H0zm27 0v-4.5c0-1.1-.306-2.157-.918-3.17-.613-1.011-1.482-1.88-2.607-2.605 1.275.15 2.475.406 3.6.768 1.125.363 2.175.807 3.15 1.332.9.5 1.587 1.056 2.063 1.668.475.613.712 1.282.712 2.007V24h-6zM12 12c-1.65 0-3.063-.588-4.237-1.762C6.588 9.063 6 7.65 6 6c0-1.65.588-3.063 1.763-4.237C8.938.588 10.35 0 12 0s3.063.588 4.238 1.762C17.413 2.938 18 4.35 18 6c0 1.65-.587 3.063-1.762 4.238C15.063 11.413 13.65 12 12 12zm15-6c0 1.65-.587 3.063-1.762 4.238C24.063 11.413 22.65 12 21 12a7.55 7.55 0 01-1.05-.093 9.272 9.272 0 01-1.05-.207 8.907 8.907 0 001.556-2.662A8.636 8.636 0 0021 6c0-1.05-.181-2.063-.544-3.038A8.907 8.907 0 0018.9.3c.35-.125.7-.206 1.05-.244C20.3.019 20.65 0 21 0c1.65 0 3.063.588 4.238 1.762C26.413 2.938 27 4.35 27 6zM3 21h18v-1.2c0-.275-.069-.525-.206-.75-.137-.225-.319-.4-.544-.525a19.585 19.585 0 00-4.087-1.52 17.425 17.425 0 00-8.325 0 19.585 19.585 0 00-4.088 1.52A1.454 1.454 0 003 19.8V21zm9-12a2.89 2.89 0 002.12-.882C14.707 7.531 15 6.825 15 6s-.293-1.531-.88-2.118A2.89 2.89 0 0012 3c-.825 0-1.531.294-2.118.882A2.885 2.885 0 009 6c0 .825.294 1.531.882 2.118A2.885 2.885 0 0012 9z" fill="currentColor"/></symbol><symbol id="groups" viewBox="0 0 30 30"><mask id="groups-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#groups-a)"><path d="M0 22.5v-1.969c0-.916.464-1.651 1.391-2.203.927-.552 2.13-.828 3.609-.828.27 0 .531.005.781.015.25.01.49.037.719.079-.292.416-.51.864-.656 1.343-.146.48-.219.99-.219 1.532V22.5H0zm7.5 0v-2.031c0-1.354.693-2.448 2.079-3.282 1.385-.833 3.192-1.25 5.421-1.25 2.25 0 4.063.417 5.438 1.25 1.375.834 2.062 1.928 2.062 3.282V22.5h-15zm16.875 0v-2.031c0-.542-.068-1.052-.204-1.532a4.879 4.879 0 00-.608-1.343c.229-.042.463-.068.703-.079.24-.01.484-.015.734-.015 1.5 0 2.708.276 3.625.828.917.552 1.375 1.287 1.375 2.203V22.5h-5.625zM15 18.437c-1.188 0-2.25.157-3.188.47-.937.312-1.49.676-1.656 1.093h9.719c-.188-.417-.745-.781-1.672-1.094-.927-.312-1.995-.468-3.203-.468zM5 16.25a2.404 2.404 0 01-1.765-.735A2.404 2.404 0 012.5 13.75c0-.708.245-1.302.735-1.781A2.432 2.432 0 015 11.25c.708 0 1.302.24 1.781.719.48.479.719 1.073.719 1.781 0 .688-.24 1.276-.719 1.765-.479.49-1.073.735-1.781.735zm20 0a2.408 2.408 0 01-1.766-.735 2.407 2.407 0 01-.734-1.765c0-.708.245-1.302.734-1.781A2.436 2.436 0 0125 11.25c.708 0 1.302.24 1.781.719.48.479.719 1.073.719 1.781 0 .688-.24 1.276-.719 1.765-.479.49-1.073.735-1.781.735zM15 15c-1.042 0-1.927-.365-2.656-1.094-.73-.729-1.094-1.614-1.094-2.656 0-1.063.365-1.953 1.094-2.672C13.073 7.859 13.958 7.5 15 7.5c1.063 0 1.953.36 2.671 1.078.72.719 1.079 1.61 1.079 2.672 0 1.042-.36 1.927-1.079 2.656C16.953 14.636 16.063 15 15 15zm0-5c-.354 0-.65.12-.89.359-.24.24-.36.537-.36.891s.12.65.36.89.536.36.89.36.651-.12.891-.36.359-.536.359-.89-.12-.651-.359-.891A1.213 1.213 0 0015 10z" fill="#3055D8"/></g></symbol><symbol id="handshake" viewBox="0 0 30 30"><mask id="handshake-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#handshake-a)"><path d="M14.844 25c.083 0 .166-.02.25-.063a.728.728 0 00.187-.125l10.25-10.25c.25-.25.433-.53.548-.843.114-.313.17-.625.17-.938a2.68 2.68 0 00-.17-.954 2.072 2.072 0 00-.548-.796L20.22 5.72a2.072 2.072 0 00-.797-.548 2.678 2.678 0 00-1.89 0 2.317 2.317 0 00-.845.548l-.343.343 2.312 2.344c.313.292.542.625.688 1 .145.375.218.771.218 1.188 0 .875-.296 1.609-.89 2.202-.594.594-1.328.892-2.203.892-.417 0-.818-.073-1.203-.22a2.843 2.843 0 01-1.016-.655L11.906 10.5l-5.469 5.469a.59.59 0 00-.188.437.65.65 0 00.188.453c.125.136.271.203.438.203.083 0 .166-.02.25-.062a.727.727 0 00.187-.125l4.25-4.25 1.75 1.75-4.218 4.25a.6.6 0 00-.188.438.6.6 0 00.188.437.6.6 0 00.437.188c.083 0 .167-.021.25-.063a.727.727 0 00.188-.125l4.25-4.219 1.75 1.75-4.22 4.25a.371.371 0 00-.14.188.698.698 0 00-.047.25.6.6 0 00.188.437.6.6 0 00.672.14.64.64 0 00.203-.14l4.25-4.218 1.75 1.75-4.25 4.25a.641.641 0 00-.14.202.577.577 0 00.156.672.65.65 0 00.453.188zm-.032 2.5c-.77 0-1.453-.255-2.046-.766a2.98 2.98 0 01-1.047-1.922c-.709-.104-1.303-.395-1.782-.875-.479-.479-.77-1.072-.875-1.78-.708-.105-1.296-.402-1.765-.89a3.18 3.18 0 01-.86-1.767C5.646 19.396 5 19.052 4.5 18.469c-.5-.584-.75-1.271-.75-2.063 0-.416.078-.818.235-1.203.156-.385.38-.724.671-1.015l7.25-7.22L16 11.064c.041.062.104.109.187.14a.699.699 0 00.25.047.669.669 0 00.47-.171.587.587 0 00.187-.454.717.717 0 00-.047-.25.379.379 0 00-.14-.188l-4.47-4.468a2.07 2.07 0 00-.797-.548A2.669 2.669 0 0010.687 5c-.312 0-.625.057-.937.171a2.317 2.317 0 00-.844.548L4.5 10.156a2.504 2.504 0 00-.469.656c-.125.25-.208.5-.25.75a2.357 2.357 0 00.25 1.5l-1.812 1.813a4.97 4.97 0 01-.782-1.579 4.906 4.906 0 01.25-3.437A5.008 5.008 0 012.72 8.375l4.406-4.406c.5-.48 1.057-.844 1.672-1.094a4.97 4.97 0 011.89-.375 4.97 4.97 0 011.89.375c.615.25 1.162.615 1.642 1.094l.343.344.344-.344c.5-.48 1.057-.844 1.671-1.094A4.98 4.98 0 0118.47 2.5a4.98 4.98 0 011.89.375c.615.25 1.162.615 1.64 1.094l5.282 5.281c.48.48.844 1.031 1.094 1.656.25.625.375 1.26.375 1.906a4.97 4.97 0 01-.375 1.89 4.925 4.925 0 01-1.094 1.642l-10.25 10.218a3.24 3.24 0 01-1.016.688c-.385.167-.786.25-1.203.25z" fill="#3055D8"/></g></symbol><symbol id="home_repair_service" viewBox="0 0 28 23"><path d="M0 22.537V8.787c0-.756.27-1.404.808-1.943a2.647 2.647 0 011.942-.807h4.125v-2.75c0-.756.27-1.403.809-1.941A2.645 2.645 0 019.625.537h8.25c.756 0 1.404.27 1.943.809.538.538.807 1.185.807 1.941v2.75h4.125c.756 0 1.404.27 1.943.807.538.54.807 1.187.807 1.943v13.75H0zm2.75-2.75h22v-4.125H22v1.375h-2.75v-1.375h-11v1.375H5.5v-1.375H2.75v4.125zm0-11v4.125H5.5v-1.375h2.75v1.375h11v-1.375H22v1.375h2.75V8.787h-22zm6.875-2.75h8.25v-2.75h-8.25v2.75z" fill="#3055D8"/></symbol><symbol id="icon_corner" viewBox="0 0 24 25"><g clip-path="url(#clip0_3229_1524)"><mask id="icon_corner-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25"><path fill="currentColor" d="M0 .189h24v24H0z"/></mask><g mask="url(#icon_corner-a)"><path d="M11 17.189h2v-6h-2v6zm1-8a.968.968 0 00.713-.288.967.967 0 00.287-.712.97.97 0 00-.287-.713.97.97 0 00-.713-.287.967.967 0 00-.712.287.968.968 0 00-.288.713c0 .283.096.52.288.712a.965.965 0 00.712.288zm0 13a9.733 9.733 0 01-3.9-.788 10.092 10.092 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175a9.733 9.733 0 01-.788-3.9c0-1.383.263-2.683.788-3.9a10.092 10.092 0 012.137-3.175c.9-.9 1.958-1.613 3.175-2.138a9.743 9.743 0 013.9-.787c1.383 0 2.683.262 3.9.787a10.105 10.105 0 013.175 2.138c.9.9 1.612 1.958 2.137 3.175a9.733 9.733 0 01.788 3.9 9.733 9.733 0 01-.788 3.9 10.093 10.093 0 01-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137a9.733 9.733 0 01-3.9.788zm0-2c2.233 0 4.125-.775 5.675-2.325 1.55-1.55 2.325-3.442 2.325-5.675 0-2.233-.775-4.125-2.325-5.675-1.55-1.55-3.442-2.325-5.675-2.325-2.233 0-4.125.775-5.675 2.325C4.775 8.064 4 9.956 4 12.189c0 2.233.775 4.125 2.325 5.675 1.55 1.55 3.442 2.325 5.675 2.325z" fill="currentColor"/></g></g></symbol><symbol id="insights" viewBox="0 0 50 50"><mask id="insights-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50"><path fill="#D9D9D9" d="M0 0h50v50H0z"/></mask><g mask="url(#insights-a)"><path d="M6.25 41.667c-1.146 0-2.126-.408-2.942-1.223-.816-.817-1.225-1.798-1.225-2.944s.409-2.127 1.225-2.944c.816-.815 1.796-1.223 2.942-1.223h.548c.155 0 .32.035.494.105l9.479-9.48a1.334 1.334 0 01-.104-.495v-.546c0-1.146.408-2.127 1.225-2.944.815-.815 1.795-1.223 2.941-1.223s2.127.408 2.944 1.223C24.592 20.79 25 21.77 25 22.917c0 .07-.035.416-.104 1.041l5.312 5.313c.174-.07.34-.104.496-.104h1.092c.157 0 .322.034.496.104l7.395-7.396a1.336 1.336 0 01-.104-.496v-.546c0-1.145.408-2.127 1.223-2.943.817-.816 1.798-1.223 2.944-1.223s2.127.407 2.944 1.223c.815.816 1.223 1.797 1.223 2.943 0 1.146-.408 2.127-1.223 2.942-.817.817-1.798 1.225-2.944 1.225h-.546c-.157 0-.322-.035-.496-.104l-7.396 7.396c.07.173.105.339.105.495v.546c0 1.146-.408 2.127-1.223 2.944-.817.815-1.798 1.223-2.944 1.223s-2.127-.408-2.942-1.223c-.816-.817-1.225-1.798-1.225-2.944v-.545c0-.157.035-.323.104-.496l-5.312-5.313c-.174.07-.339.104-.496.104h-.546c-.07 0-.416-.034-1.041-.104l-9.48 9.48c.07.173.105.338.105.495v.546c0 1.146-.409 2.127-1.225 2.944-.816.815-1.796 1.223-2.942 1.223zM8.333 20.78L7.031 17.97 4.22 16.667l2.812-1.302 1.302-2.813 1.302 2.813 2.813 1.302-2.813 1.302-1.302 2.812zM31.25 18.75l-1.98-4.27L25 12.5l4.27-1.98 1.98-4.27 1.98 4.27 4.27 1.98-4.27 1.98-1.98 4.27z" fill="#3055D8"/></g></symbol><symbol id="language-big" viewBox="0 0 48 49"><path d="M24 48.189c-3.333 0-6.456-.633-9.367-1.9-2.91-1.267-5.455-2.978-7.633-5.133-2.178-2.156-3.889-4.7-5.133-7.634C.622 30.59 0 27.456 0 24.122c0-3.333.622-6.455 1.867-9.366C3.11 11.844 4.822 9.31 7 7.156 9.178 5 11.722 3.3 14.633 2.056 17.544.81 20.667.189 24 .189c3.333 0 6.456.622 9.367 1.867C36.277 3.3 38.822 5 41 7.156c2.178 2.155 3.889 4.689 5.133 7.6C47.378 17.666 48 20.789 48 24.122c0 3.334-.622 6.467-1.867 9.4C44.89 36.456 43.178 39 41 41.156c-2.178 2.155-4.722 3.866-7.633 5.133-2.911 1.267-6.034 1.9-9.367 1.9zm0-1.933c1.778-1.956 3.211-4 4.3-6.134 1.089-2.133 1.989-4.578 2.7-7.333H17.067c.71 2.889 1.61 5.389 2.7 7.5 1.089 2.111 2.5 4.1 4.233 5.967zm-2.8-.267c-1.378-1.556-2.633-3.511-3.767-5.867a32.124 32.124 0 01-2.5-7.333H3.667c1.733 3.733 4.066 6.7 7 8.9 2.933 2.2 6.444 3.633 10.533 4.3zm5.667 0c3.777-.578 7.21-2.022 10.3-4.333 3.089-2.312 5.477-5.267 7.166-8.867h-11.2a47.208 47.208 0 01-2.8 7.4c-1.11 2.311-2.266 4.244-3.466 5.8zm-23.8-15.267h11.466a30.645 30.645 0 01-.433-3.5 50.806 50.806 0 01-.1-3.1c0-1.066.044-2.122.133-3.166.09-1.045.223-2.145.4-3.3H3.067a15.432 15.432 0 00-.767 3.1 23.783 23.783 0 00-.233 3.366c0 1.2.077 2.345.233 3.434.156 1.088.411 2.144.767 3.166zm13.533 0h14.8a33.43 33.43 0 00.433-3.466 48.122 48.122 0 000-6.167c-.066-1-.21-2.144-.433-3.433H16.6a33.646 33.646 0 00-.433 3.433 48.122 48.122 0 000 6.167 33.43 33.43 0 00.433 3.466zm16.867 0h11.466c.356-1.022.611-2.078.767-3.166a24.27 24.27 0 00.233-3.434c0-1.155-.077-2.277-.233-3.366a15.432 15.432 0 00-.767-3.1h-11.4c.178 1.377.3 2.577.367 3.6.067 1.022.1 1.977.1 2.866a36.54 36.54 0 01-.133 3.1 68.229 68.229 0 01-.4 3.5zm-.4-15.133h11.266c-1.689-3.778-4.033-6.8-7.033-9.067-3-2.266-6.5-3.666-10.5-4.2 1.378 1.734 2.611 3.734 3.7 6a36.517 36.517 0 012.567 7.267zm-16 0h14c-.711-2.667-1.656-5.122-2.834-7.367A29.558 29.558 0 0024 2.122c-1.6 1.6-2.944 3.456-4.033 5.567-1.09 2.111-2.056 4.744-2.9 7.9zm-13.4 0h11.266a37.466 37.466 0 012.534-7.167c1.066-2.244 2.289-4.255 3.666-6.033-4 .533-7.489 1.922-10.466 4.167-2.978 2.244-5.311 5.255-7 9.033z" fill="currentColor"/></symbol><symbol id="language" viewBox="0 0 33 34"><path d="M16.5 30.75c-1.88 0-3.655-.361-5.328-1.084A13.923 13.923 0 016.79 26.71a13.924 13.924 0 01-2.957-4.382A13.297 13.297 0 012.75 17c0-1.902.361-3.684 1.083-5.345A13.975 13.975 0 016.79 7.29a13.942 13.942 0 014.382-2.958A13.312 13.312 0 0116.5 3.25c1.902 0 3.684.36 5.345 1.082A13.996 13.996 0 0126.21 7.29a13.975 13.975 0 012.956 4.365c.723 1.661 1.084 3.443 1.084 5.345 0 1.88-.361 3.655-1.084 5.328a13.923 13.923 0 01-2.956 4.382 13.976 13.976 0 01-4.365 2.956c-1.661.723-3.443 1.084-5.345 1.084zm0-2.819a17.456 17.456 0 001.547-2.578c.435-.894.79-1.845 1.066-2.853h-5.226c.275 1.008.63 1.96 1.066 2.853.436.894.951 1.753 1.547 2.578zm-3.575-.55a18.957 18.957 0 01-1.082-2.355 20.067 20.067 0 01-.774-2.526H7.012a11.417 11.417 0 002.492 2.99 9.901 9.901 0 003.421 1.891zm7.15 0a9.887 9.887 0 003.42-1.89 11.403 11.403 0 002.492-2.991h-4.056a20.23 20.23 0 01-.773 2.526c-.31.814-.67 1.599-1.083 2.355zM5.844 19.75h4.675c-.069-.458-.12-.911-.156-1.358-.034-.447-.05-.91-.05-1.392 0-.481.016-.945.05-1.392.035-.447.087-.9.156-1.358H5.844A11.016 11.016 0 005.5 17a11.016 11.016 0 00.344 2.75zm7.425 0h6.462c.069-.458.12-.911.156-1.358.034-.447.05-.91.05-1.392 0-.481-.017-.945-.05-1.392-.035-.447-.087-.9-.156-1.358H13.27a18.75 18.75 0 00-.207 2.75 17.915 17.915 0 00.207 2.75zm9.212 0h4.675A11.003 11.003 0 0027.5 17a11.003 11.003 0 00-.344-2.75h-4.675a18.75 18.75 0 01.206 2.75 17.915 17.915 0 01-.206 2.75zm-.55-8.25h4.056a11.404 11.404 0 00-2.492-2.99 9.887 9.887 0 00-3.42-1.891c.413.756.774 1.54 1.084 2.354.308.814.566 1.656.772 2.527zm-8.044 0h5.226a16.277 16.277 0 00-1.066-2.853A17.458 17.458 0 0016.5 6.069a17.458 17.458 0 00-1.547 2.578c-.435.894-.79 1.845-1.066 2.853zm-6.875 0h4.057c.206-.87.464-1.713.774-2.527.309-.813.67-1.598 1.082-2.354a9.901 9.901 0 00-3.421 1.89A11.417 11.417 0 007.013 11.5z" fill="currentColor"/></symbol><symbol id="laptop_windows-big" viewBox="0 0 52 33"><path d="M0 32.189v-1.8h7.898V28.53c-.929 0-1.703-.31-2.323-.93-.62-.619-.929-1.373-.929-2.264V3.383c0-.89.32-1.645.958-2.265A3.18 3.18 0 017.898.19h35.31c.891 0 1.656.31 2.295.93.639.619.958 1.374.958 2.264v21.953c0 .89-.32 1.646-.958 2.265a3.18 3.18 0 01-2.294.93v1.858h7.898v1.8H0zm7.898-5.46h35.31c.388 0 .727-.135 1.017-.406a1.3 1.3 0 00.436-.987V3.383a1.3 1.3 0 00-.436-.987 1.443 1.443 0 00-1.016-.407H7.899c-.388 0-.727.136-1.017.407a1.3 1.3 0 00-.436.987v21.953c0 .387.146.716.436.987.29.271.63.407 1.016.407z" fill="currentColor"/></symbol><symbol id="laptop_windows" viewBox="0 0 33 34"><path d="M0 28v-2.75h5.5v-1.375a2.647 2.647 0 01-1.942-.807 2.65 2.65 0 01-.808-1.943V7.375c0-.756.27-1.404.808-1.943A2.647 2.647 0 015.5 4.625h22c.756 0 1.404.269 1.943.807.538.54.807 1.187.807 1.943v13.75c0 .756-.269 1.404-.807 1.943a2.651 2.651 0 01-1.943.807v1.375H33V28H0zm5.5-6.875h22V7.375h-22v13.75z" fill="currentColor"/></symbol><symbol id="linkedin" viewBox="0 0 16 16"><path d="M13.631 13.635h-2.369V9.922c0-.885-.018-2.025-1.235-2.025-1.235 0-1.424.964-1.424 1.96v3.778H6.234V6H8.51v1.04h.03c.319-.6 1.092-1.233 2.247-1.233 2.401 0 2.845 1.58 2.845 3.637v4.19zM3.558 4.955a1.375 1.375 0 01-.525-2.647 1.376 1.376 0 11.525 2.647zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.182C.528 0 0 .516 0 1.153v13.694C0 15.485.528 16 1.18 16h13.635c.652 0 1.185-.515 1.185-1.153V1.153C16 .516 15.467 0 14.815 0h.002z" fill="#282A32"/></symbol><symbol id="manage_history" viewBox="0 0 30 30"><mask id="manage_history-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#manage_history-a)"><path d="M3.75 12.5V5h2.5v2.938a10.913 10.913 0 013.891-3.094A11.16 11.16 0 0115 3.75c3.125 0 5.781 1.094 7.969 3.281C25.156 9.22 26.25 11.875 26.25 15h-2.5c0-2.438-.85-4.505-2.547-6.204C19.505 7.1 17.438 6.25 15 6.25a8.437 8.437 0 00-4.031 1A9.29 9.29 0 007.813 10h3.437v2.5h-7.5zm.063 3.75h2.562c.25 1.938 1.047 3.578 2.391 4.922a8.515 8.515 0 004.828 2.453l1.5 2.625c-2.875 0-5.396-.953-7.563-2.86-2.166-1.906-3.406-4.286-3.718-7.14zm12.874 2.188L13.75 15.5V8.75h2.5v5.75L18 16.25l-1.313 2.188zM22.47 30l-.375-1.875a8.9 8.9 0 01-.703-.328 5.46 5.46 0 01-.672-.422l-1.813.563-1.25-2.125 1.438-1.25a5.332 5.332 0 010-1.625l-1.438-1.25 1.25-2.125 1.813.562a5.46 5.46 0 01.672-.422 8.9 8.9 0 01.703-.328l.375-1.875h2.5l.375 1.875a5.717 5.717 0 011.375.813l1.812-.626 1.25 2.188L28.344 23c.041.27.062.531.062.781s-.02.51-.062.782l1.437 1.25-1.25 2.125-1.812-.563c-.23.167-.453.308-.672.422-.219.115-.453.224-.703.328L24.969 30h-2.5zm1.25-3.75a2.41 2.41 0 001.766-.734 2.41 2.41 0 00.734-1.766 2.41 2.41 0 00-.734-1.766 2.41 2.41 0 00-1.766-.734 2.41 2.41 0 00-1.767.734 2.41 2.41 0 00-.733 1.766c0 .688.244 1.276.733 1.766a2.41 2.41 0 001.767.734z" fill="#3055D8"/></g></symbol><symbol id="medium" viewBox="0 0 25 14"><path d="M13.905 7c0 3.866-3.113 7-6.953 7C3.112 14 0 10.867 0 7s3.113-7 6.952-7c3.84 0 6.953 3.134 6.953 7zm7.627 0c0 3.64-1.557 6.59-3.477 6.59S14.58 10.637 14.58 7c0-3.639 1.556-6.59 3.476-6.59S21.532 3.362 21.532 7zm3.119 0c0 3.26-.547 5.904-1.223 5.904-.675 0-1.222-2.644-1.222-5.904s.547-5.904 1.223-5.904c.675 0 1.222 2.643 1.222 5.904z" fill="#282A32"/></symbol><symbol id="modal-close__close" viewBox="0 0 32 32"><g opacity=".3"><mask id="modal-close__close-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><path fill="#D9D9D9" d="M0 0h32v32H0z"/></mask><g mask="url(#modal-close__close-a)"><path d="M8.534 25.333l-1.867-1.866L14.134 16 6.667 8.533l1.867-1.866L16 14.133l7.467-7.466 1.867 1.866L17.867 16l7.467 7.466-1.867 1.867L16 17.867l-7.466 7.466z" fill="#222"/></g></g></symbol><symbol id="motion_photos_auto" viewBox="0 0 33 33"><mask id="motion_photos_auto-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M.5.436h32v32H.5z"/></mask><g mask="url(#motion_photos_auto-a)"><path d="M11.567 21.102h1.8l1-2.734h4.267l1 2.734H21.5l-4.066-10.667h-1.867l-4 10.667zm3.333-4.267l1.534-4.4h.133l1.533 4.4h-3.2zm1.6 12.933c-1.844 0-3.578-.35-5.2-1.05a13.457 13.457 0 01-4.233-2.85c-1.2-1.2-2.15-2.61-2.85-4.233-.7-1.622-1.05-3.356-1.05-5.2 0-.956.1-1.895.3-2.817.2-.922.489-1.816.867-2.683L6.4 13.002c-.177.577-.316 1.15-.416 1.716-.1.567-.15 1.14-.15 1.717 0 2.978 1.033 5.5 3.1 7.567 2.066 2.066 4.589 3.1 7.566 3.1 2.978 0 5.5-1.034 7.567-3.1 2.067-2.067 3.1-4.59 3.1-7.567 0-2.978-1.033-5.5-3.1-7.567-2.067-2.066-4.589-3.1-7.567-3.1-.6 0-1.183.05-1.749.15-.567.1-1.128.24-1.684.417l-2.033-2.033c.888-.4 1.777-.7 2.666-.9.89-.2 1.823-.3 2.8-.3 1.845 0 3.578.35 5.2 1.049 1.623.7 3.034 1.65 4.234 2.85 1.2 1.2 2.15 2.612 2.849 4.234.7 1.622 1.05 3.356 1.05 5.2 0 1.844-.35 3.578-1.05 5.2a13.456 13.456 0 01-2.85 4.233c-1.2 1.2-2.61 2.15-4.233 2.85-1.622.7-3.355 1.05-5.2 1.05zm-8.666-20a1.925 1.925 0 01-1.416-.584 1.925 1.925 0 01-.584-1.416c0-.555.194-1.027.584-1.416.388-.39.86-.584 1.416-.584.555 0 1.027.195 1.416.584.389.389.584.86.584 1.416 0 .556-.195 1.028-.584 1.416-.389.39-.86.584-1.416.584z" fill="#3055D8"/></g></symbol><symbol id="pause-button" viewBox="0 0 512 512"><path d="M256 0C114.617 0 0 114.615 0 256s114.617 256 256 256 256-114.615 256-256S397.383 0 256 0zm-32 320c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16V192c0-8.836 7.164-16 16-16h32c8.836 0 16 7.164 16 16v128zm128 0c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16V192c0-8.836 7.164-16 16-16h32c8.836 0 16 7.164 16 16v128z" fill="currentColor"/></symbol><symbol id="phone_in_talk" viewBox="0 0 34 34"><path d="M23.942 27.401c-2.022-.187-3.95-.82-5.787-1.899a17.986 17.986 0 01-4.772-4.045 17.988 17.988 0 01-3.102-5.432c-.724-2.003-.993-4.016-.806-6.038a.961.961 0 01.347-.679.961.961 0 01.732-.217l3.809.352c.22.02.409.11.568.266a.83.83 0 01.256.57l.307 3.347c.01.223-.012.422-.067.598a.97.97 0 01-.316.458l-2.47 2.095a15.686 15.686 0 002.176 3.402 17.277 17.277 0 003.03 2.865l2.415-2.006c.154-.128.348-.217.583-.267a1.52 1.52 0 01.675.004l3.183.958a.96.96 0 01.512.367.864.864 0 01.158.596l-.352 3.809a.961.961 0 01-.347.68.961.961 0 01-.732.216z" fill="#3055D8"/></symbol><symbol id="pie_chart" viewBox="0 0 32 32"><path d="M17.6 14.4h11.12c-.4-2.933-1.62-5.42-3.66-7.46s-4.527-3.26-7.46-3.66V14.4zm-3.2 14.32V3.28c-3.227.4-5.9 1.806-8.02 4.22C4.26 9.912 3.2 12.746 3.2 16s1.06 6.086 3.18 8.5c2.12 2.413 4.793 3.82 8.02 4.22zm3.2 0c2.933-.373 5.427-1.587 7.48-3.64 2.053-2.053 3.267-4.547 3.64-7.48H17.6v11.12zM16 32c-2.213 0-4.293-.42-6.24-1.26-1.947-.84-3.64-1.98-5.08-3.42s-2.58-3.133-3.42-5.08C.42 20.293 0 18.213 0 16s.42-4.293 1.26-6.24c.84-1.947 1.98-3.64 3.42-5.08S7.813 2.1 9.76 1.26C11.707.42 13.787 0 16 0s4.286.42 6.22 1.26A16.284 16.284 0 0127.3 4.7a16.262 16.262 0 013.44 5.08C31.58 11.715 32 13.788 32 16c0 2.187-.42 4.253-1.26 6.2a16.38 16.38 0 01-3.42 5.1c-1.44 1.453-3.133 2.6-5.08 3.44C20.293 31.58 18.213 32 16 32z" fill="currentColor"/></symbol><symbol id="play_circle" viewBox="0 0 36 35"><path d="M13.275 25.375l12.25-7.875-12.25-7.875v15.75zM17.65 35c-2.42 0-4.695-.46-6.825-1.379-2.129-.918-3.98-2.165-5.556-3.74-1.575-1.575-2.821-3.427-3.74-5.556C.61 22.195.15 19.921.15 17.5c0-2.42.46-4.696 1.38-6.825.918-2.13 2.164-3.981 3.74-5.556 1.574-1.575 3.426-2.822 5.555-3.742C12.955.46 15.23 0 17.65 0c2.421 0 4.696.46 6.825 1.377 2.13.92 3.982 2.167 5.557 3.742 1.575 1.575 2.821 3.427 3.74 5.556.919 2.13 1.378 4.404 1.378 6.825 0 2.42-.46 4.696-1.379 6.825-.918 2.13-2.164 3.981-3.74 5.556-1.574 1.575-3.426 2.822-5.556 3.74-2.129.92-4.404 1.379-6.825 1.379z" fill="currentColor"/></symbol><symbol id="public-big" viewBox="0 0 48 49"><path d="M24 48.189c-3.333 0-6.456-.633-9.367-1.9-2.91-1.267-5.444-2.978-7.6-5.133-2.155-2.156-3.866-4.69-5.133-7.6C.633 30.645 0 27.522 0 24.189c0-3.333.633-6.456 1.9-9.367 1.267-2.91 2.978-5.444 5.133-7.6 2.156-2.155 4.69-3.866 7.6-5.133C17.544.822 20.667.189 24 .189c3.333 0 6.456.633 9.367 1.9 2.91 1.267 5.444 2.978 7.6 5.133 2.155 2.156 3.866 4.69 5.133 7.6 1.267 2.911 1.9 6.034 1.9 9.367 0 3.333-.633 6.456-1.9 9.367-1.267 2.91-2.978 5.444-5.133 7.6-2.156 2.155-4.69 3.866-7.6 5.133-2.911 1.267-6.034 1.9-9.367 1.9zm-2.733-2.2v-5.267c-1.556 0-2.856-.544-3.9-1.633C16.322 38 15.8 36.7 15.8 35.189v-2.8l-13.2-13.2c-.133.8-.256 1.622-.367 2.467a19.4 19.4 0 00-.166 2.533c0 5.555 1.81 10.411 5.433 14.567 3.622 4.155 8.211 6.566 13.767 7.233zM40.2 39.056a21.725 21.725 0 002.467-3.267 22.108 22.108 0 001.8-3.633 21.65 21.65 0 001.1-3.9c.244-1.334.366-2.69.366-4.067 0-4.533-1.233-8.678-3.7-12.433C39.767 8 36.423 5.3 32.2 3.656v1.266c0 1.511-.522 2.811-1.567 3.9-1.044 1.09-2.322 1.634-3.833 1.634h-5.533v5.533c0 .755-.278 1.389-.834 1.9a2.809 2.809 0 01-1.966.767H13v5.533h16.533c.8 0 1.445.267 1.934.8.489.533.733 1.178.733 1.933v8.267h2.733c1.245 0 2.345.355 3.3 1.067a5.368 5.368 0 011.967 2.8z" fill="currentColor"/></symbol><symbol id="public" viewBox="0 0 33 34"><path d="M16.5 30.75c-1.902 0-3.69-.361-5.363-1.084a13.876 13.876 0 01-4.365-2.938 13.876 13.876 0 01-2.939-4.366C3.111 20.69 2.75 18.902 2.75 17c0-1.902.361-3.69 1.083-5.363a13.876 13.876 0 012.939-4.365 13.895 13.895 0 014.365-2.94c1.673-.721 3.46-1.082 5.363-1.082 1.902 0 3.69.36 5.363 1.082a13.895 13.895 0 014.365 2.94 13.876 13.876 0 012.938 4.365c.723 1.673 1.084 3.46 1.084 5.363 0 1.902-.361 3.69-1.084 5.363a13.876 13.876 0 01-2.938 4.365 13.876 13.876 0 01-4.366 2.938c-1.672.723-3.46 1.084-5.362 1.084zm-1.375-2.819V25.25a2.647 2.647 0 01-1.941-.807 2.65 2.65 0 01-.809-1.943v-1.375l-6.6-6.6c-.069.412-.132.825-.19 1.237A9.057 9.057 0 005.5 17c0 2.773.911 5.202 2.733 7.288 1.822 2.085 4.12 3.3 6.892 3.643zm9.488-3.506c.458-.504.87-1.049 1.237-1.634.367-.583.67-1.19.912-1.821.24-.63.423-1.277.55-1.942.125-.665.188-1.34.188-2.028 0-2.246-.624-4.297-1.873-6.153a10.594 10.594 0 00-5.002-4.022v.55c0 .756-.269 1.403-.807 1.941a2.65 2.65 0 01-1.943.809h-2.75v2.75c0 .39-.132.716-.395.979-.264.264-.59.396-.98.396H11V17h8.25c.39 0 .716.131.98.395s.395.59.395.98V22.5H22c.596 0 1.134.177 1.616.532.48.356.813.82.997 1.393z" fill="currentColor"/></symbol><symbol id="recession-new" viewBox="0 0 496 496"><g fill="currentColor"><path d="M32 464V0H0v480c0 8.837 7.163 16 16 16h480v-32H32z"/><path d="M96 368h80v-32h-41.44l112-112H352a15.997 15.997 0 0011.36-4.64l96-96-22.72-22.72-91.2 91.36H240a15.997 15.997 0 00-11.36 4.64L112 313.44V272H80v80c0 8.837 7.163 16 16 16z"/></g></symbol><symbol id="recession" viewBox="0 0 36 36"><path d="M27 26.484c-.3 0-.5-.1-.7-.3l-8.4-8.8-3.3 2.5c-.2.1-.5.1-.8.1-.3 0-.5-.2-.7-.4l-6-8.5c-.2-.4-.1-1.1.3-1.4.5-.3 1.1-.2 1.4.3l5.4 7.6 3.2-2.4c.4-.3 1-.3 1.3.1l9 9.5c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3z" fill="#27AE60"/></symbol><symbol id="room_preferences" viewBox="0 0 28 27"><path d="M0 25.225v-2.75h2.75v-22H16.5V1.85H22v8.25h-2.75V4.6H16.5v8.25h-2.75V3.225H5.5v19.25h6.875v2.75H0zM19.25 26.6l-.413-2.063a6.874 6.874 0 01-.772-.378 5.448 5.448 0 01-.706-.481l-1.993.687-1.375-2.372 1.546-1.375a6.809 6.809 0 01-.068-.877c0-.24.023-.532.069-.876L13.99 17.49l1.375-2.372 1.993.688a7.2 7.2 0 01.706-.5c.24-.148.497-.28.772-.394l.413-2.062H22l.413 2.062c.274.115.532.24.774.378.24.138.474.298.704.482l1.993-.688 1.375 2.372-1.547 1.375c.046.344.07.636.07.877a6.8 6.8 0 01-.07.876l1.547 1.375-1.375 2.372-1.993-.653c-.23.183-.464.343-.704.481-.242.138-.5.264-.774.378L22 26.6h-2.75zm1.375-4.125c.756 0 1.404-.27 1.943-.808a2.651 2.651 0 00.807-1.942c0-.757-.269-1.404-.807-1.942a2.65 2.65 0 00-1.943-.808 2.65 2.65 0 00-1.943.808 2.647 2.647 0 00-.807 1.942c0 .756.269 1.403.807 1.942a2.651 2.651 0 001.943.808zM11 14.225c-.39 0-.716-.132-.979-.396a1.327 1.327 0 01-.396-.98c0-.389.132-.716.396-.98a1.33 1.33 0 01.979-.394c.39 0 .716.131.98.394.263.264.395.591.395.98 0 .39-.132.716-.395.98-.264.264-.59.396-.98.396z" fill="#3055D8"/></symbol><symbol id="router" viewBox="0 0 33 33"><mask id="router-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M0 0h33v33H0z"/></mask><g mask="url(#router-a)"><path d="M6.875 28.875a2.651 2.651 0 01-1.943-.807 2.651 2.651 0 01-.807-1.943v-5.5c0-.756.269-1.404.807-1.943a2.651 2.651 0 011.943-.807h13.75v-5.5h2.75v5.5h2.75c.756 0 1.404.269 1.943.807.538.54.807 1.187.807 1.943v5.5c0 .756-.269 1.404-.807 1.943a2.651 2.651 0 01-1.943.807H6.875zm19.25-2.75v-5.5H6.875v5.5h19.25zM11 23.375c0-.39-.132-.716-.395-.979a1.332 1.332 0 00-.98-.396c-.39 0-.716.132-.98.396a1.33 1.33 0 00-.395.979c0 .39.132.716.395.979.264.264.59.396.98.396s.716-.132.98-.396a1.33 1.33 0 00.395-.979zm4.813 0c0-.39-.132-.716-.395-.979a1.332 1.332 0 00-.98-.396c-.39 0-.716.132-.98.396-.264.263-.396.59-.396.979 0 .39.133.716.397.979.263.264.589.396.979.396s.716-.132.98-.396a1.33 1.33 0 00.395-.979zm3.437 1.375c.39 0 .716-.132.98-.396a1.33 1.33 0 00.395-.979c0-.39-.131-.716-.395-.979a1.332 1.332 0 00-.98-.396c-.39 0-.716.132-.979.396-.264.263-.396.59-.396.979 0 .39.132.716.396.979.263.264.59.396.979.396zm.344-13.406L17.6 9.35a7.14 7.14 0 011.994-1.306A5.938 5.938 0 0122 7.562c.87 0 1.673.16 2.406.482A7.14 7.14 0 0126.4 9.35l-1.994 1.994a3.695 3.695 0 00-1.082-.756A3.15 3.15 0 0022 10.313c-.481 0-.922.091-1.323.274a3.689 3.689 0 00-1.083.757zm-3.438-3.438l-1.925-1.925a11.153 11.153 0 013.507-2.372c1.329-.573 2.75-.859 4.262-.859 1.512 0 2.933.286 4.262.86A11.153 11.153 0 0129.77 5.98l-1.925 1.925a8.236 8.236 0 00-2.63-1.77A8.114 8.114 0 0022 5.5a8.114 8.114 0 00-3.213.637 8.236 8.236 0 00-2.63 1.77z" fill="#3055D8"/></g></symbol><symbol id="schedule-empty" viewBox="0 0 89 90"><mask id="schedule-empty-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="89" height="90"><path fill="currentColor" d="M0 .5h89v89H0z"/></mask><g mask="url(#schedule-empty-a)"><path d="M57.387 61.78l3.894-3.894-14-13.999V26.458H41.72v19.654L57.387 61.78zM44.501 80.23c-4.883 0-9.471-.928-13.766-2.782-4.296-1.854-8.02-4.357-11.173-7.51-3.152-3.152-5.655-6.876-7.51-11.173C10.2 54.471 9.273 49.883 9.273 45c0-4.883.927-9.472 2.78-13.77 1.855-4.293 4.358-8.017 7.51-11.169 3.152-3.152 6.877-5.655 11.173-7.509 4.295-1.854 8.883-2.781 13.766-2.781 4.882 0 9.472.927 13.769 2.781 4.294 1.854 8.017 4.357 11.17 7.51 3.151 3.151 5.654 6.875 7.509 11.169 1.854 4.297 2.78 8.886 2.78 13.769 0 4.883-.926 9.471-2.78 13.765-1.855 4.297-4.358 8.021-7.51 11.174-3.152 3.152-6.875 5.655-11.17 7.509-4.296 1.854-8.886 2.781-13.768 2.781zm0-5.563c8.22 0 15.22-2.89 21-8.667 5.777-5.78 8.666-12.78 8.666-21s-2.889-15.22-8.666-21c-5.78-5.778-12.78-8.667-21-8.667S29.28 18.222 23.504 24c-5.78 5.78-8.67 12.78-8.67 21s2.89 15.22 8.67 21c5.778 5.778 12.777 8.667 20.997 8.667z" fill="currentColor"/></g></symbol><symbol id="schedule" viewBox="0 0 40 40"><mask id="schedule-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path fill="#D9D9D9" d="M0 0h40v40H0z"/></mask><g mask="url(#schedule-a)"><path d="M25.5 27.834l2.333-2.334-6.167-6.166v-7.667h-3.333v9l7.167 7.166zM20 36.666c-2.306 0-4.473-.438-6.5-1.314-2.028-.874-3.792-2.061-5.292-3.561S5.521 28.528 4.646 26.5 3.333 22.306 3.333 20c0-2.305.438-4.472 1.313-6.5.875-2.028 2.062-3.791 3.562-5.291 1.5-1.5 3.264-2.688 5.292-3.564 2.027-.874 4.194-1.311 6.5-1.311 2.305 0 4.472.437 6.5 1.311 2.027.876 3.791 2.064 5.291 3.564 1.5 1.5 2.688 3.263 3.562 5.291.876 2.028 1.313 4.195 1.313 6.5 0 2.306-.437 4.472-1.313 6.5-.874 2.028-2.062 3.792-3.562 5.292s-3.264 2.687-5.291 3.561c-2.028.876-4.195 1.314-6.5 1.314z" fill="currentColor"/></g></symbol><symbol id="schema" viewBox="0 0 25 32"><path d="M0 32v-8.727h3.636v-2.91H0v-8.727h3.636V8.727H0V0h10.182v8.727H6.545v2.91h3.637v2.909h4.364v-2.91h10.181v8.728H14.546v-2.91h-4.364v2.91H6.545v2.909h3.637V32H0zm2.91-2.91h4.363v-2.908H2.909v2.909zm0-11.636h4.363v-2.909H2.909v2.91zm14.544 0h4.364v-2.909h-4.364v2.91zM2.91 5.819h4.364V2.91H2.909v2.91z" fill="currentColor"/></symbol><symbol id="self_improvement" viewBox="0 0 30 30"><mask id="self_improvement-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#self_improvement-a)"><path d="M8.5 25a2.17 2.17 0 01-1.594-.656 2.17 2.17 0 01-.656-1.594c0-.438.125-.85.375-1.235.25-.385.583-.66 1-.828L12.5 18.75v-2.813c-1.125 1.313-2.432 2.318-3.921 3.016C7.089 19.65 5.479 20 3.75 20v-2.5c1.417 0 2.703-.292 3.86-.875 1.156-.583 2.202-1.417 3.14-2.5l1.688-2c.25-.292.541-.51.874-.656a2.62 2.62 0 011.063-.219h1.25c.375 0 .73.073 1.063.219.333.146.625.364.875.656l1.687 2c.938 1.083 1.985 1.917 3.141 2.5s2.442.875 3.859.875V20c-1.73 0-3.338-.35-4.828-1.047-1.49-.698-2.797-1.703-3.922-3.015v2.812l4.875 1.938c.417.166.75.442 1 .827.25.386.375.797.375 1.235a2.17 2.17 0 01-.656 1.594A2.17 2.17 0 0121.5 25h-9v-.625c0-.542.177-.99.531-1.344.354-.354.802-.531 1.344-.531h3.75a.616.616 0 00.454-.171.616.616 0 00.171-.454.616.616 0 00-.171-.454.616.616 0 00-.454-.171h-3.75c-.875 0-1.615.302-2.219.906-.604.604-.906 1.344-.906 2.219V25H8.5zM15 10a2.404 2.404 0 01-1.765-.735A2.404 2.404 0 0112.5 7.5c0-.688.245-1.276.735-1.765A2.404 2.404 0 0115 5c.688 0 1.276.245 1.766.735S17.5 6.812 17.5 7.5s-.245 1.276-.734 1.765c-.49.49-1.078.735-1.766.735z" fill="#3055D8"/></g></symbol><symbol id="settings" viewBox="0 0 33 33"><mask id="settings-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M.5.436h32v32H.5z"/></mask><g mask="url(#settings-a)"><path d="M12.833 29.768l-.533-4.266a5.047 5.047 0 01-.816-.4 10.953 10.953 0 01-.751-.5l-3.967 1.666L3.1 19.935l3.433-2.6a3.188 3.188 0 01-.033-.45v-.9c0-.145.01-.294.033-.45l-3.433-2.6 3.666-6.333 3.967 1.666c.244-.178.5-.344.767-.5.266-.155.533-.289.8-.4l.533-4.266h7.333l.534 4.266c.288.111.56.245.817.4.255.156.505.322.75.5l3.966-1.666 3.667 6.333-3.434 2.6c.022.155.034.305.034.45v.9c0 .144-.023.294-.067.45l3.433 2.6-3.666 6.333-3.934-1.666a9.12 9.12 0 01-.766.5 6.736 6.736 0 01-.8.4l-.534 4.266h-7.333zm3.733-8.666c1.29 0 2.39-.456 3.3-1.367.911-.911 1.367-2.011 1.367-3.3 0-1.289-.456-2.389-1.367-3.3-.91-.911-2.01-1.367-3.3-1.367-1.31 0-2.417.456-3.317 1.367-.9.911-1.35 2.011-1.35 3.3 0 1.289.45 2.389 1.35 3.3.9.911 2.006 1.367 3.317 1.367zm0-2.667a1.925 1.925 0 01-1.416-.584 1.925 1.925 0 01-.584-1.416c0-.556.195-1.028.584-1.416.389-.39.86-.584 1.416-.584a1.93 1.93 0 011.418.584c.388.388.582.86.582 1.416 0 .556-.194 1.027-.582 1.416a1.93 1.93 0 01-1.418.584zm-1.4 8.667H17.8l.466-3.534a7.467 7.467 0 001.918-.784 7.955 7.955 0 001.616-1.25l3.3 1.368 1.3-2.267-2.867-2.167c.111-.31.189-.639.233-.984a8.188 8.188 0 000-2.1 4.703 4.703 0 00-.233-.982l2.867-2.167-1.3-2.267-3.3 1.4a7.428 7.428 0 00-1.616-1.284 7.5 7.5 0 00-1.918-.782l-.433-3.534H15.2l-.467 3.534a7.48 7.48 0 00-1.916.782 7.98 7.98 0 00-1.617 1.25L7.9 9.969l-1.3 2.267 2.866 2.133a5.427 5.427 0 00-.233 1 8.082 8.082 0 00-.067 1.067c0 .356.022.7.067 1.033.044.334.122.667.233 1L6.6 20.635l1.3 2.267 3.3-1.4a7.383 7.383 0 001.617 1.282 7.448 7.448 0 001.916.784l.433 3.534z" fill="#3055D8"/></g></symbol><symbol id="settings_applications" viewBox="0 0 30 30"><mask id="settings_applications-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#settings_applications-a)"><path d="M13.75 21.25h2.5l.375-1.875c.25-.104.485-.213.704-.328.218-.114.442-.255.671-.422l1.813.563 1.25-2.125-1.438-1.25c.042-.292.063-.563.063-.813s-.021-.52-.063-.813l1.438-1.25-1.25-2.124-1.813.562a5.519 5.519 0 00-.671-.422 9.084 9.084 0 00-.704-.328L16.25 8.75h-2.5l-.375 1.875c-.25.104-.485.213-.704.328a5.519 5.519 0 00-.671.422l-1.813-.563-1.25 2.126 1.438 1.25a5.765 5.765 0 00-.063.812c0 .25.021.52.063.813l-1.438 1.25 1.25 2.125L12 18.625c.23.167.453.308.671.422.22.115.454.224.704.328l.375 1.875zM15 17.5a2.404 2.404 0 01-1.765-.735A2.404 2.404 0 0112.5 15c0-.688.245-1.276.735-1.766A2.407 2.407 0 0115 12.5a2.41 2.41 0 011.766.734c.49.49.734 1.079.734 1.766 0 .688-.245 1.276-.734 1.765-.49.49-1.078.735-1.766.735zm-8.75 8.75a2.41 2.41 0 01-1.766-.734 2.41 2.41 0 01-.734-1.766V6.25c0-.688.245-1.276.734-1.766A2.41 2.41 0 016.25 3.75h17.5a2.41 2.41 0 011.766.734c.49.49.734 1.079.734 1.766v17.5a2.41 2.41 0 01-.734 1.766 2.41 2.41 0 01-1.766.734H6.25zm0-2.5h17.5V6.25H6.25v17.5z" fill="#3055D8"/></g></symbol><symbol id="store" viewBox="0 0 33 33"><mask id="store-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M0 0h33v33H0z"/></mask><g mask="url(#store-a)"><path d="M5.5 8.25V5.5h22v2.75h-22zm0 19.25v-8.25H4.125V16.5L5.5 9.625h22l1.375 6.875v2.75H27.5v8.25h-2.75v-8.25h-5.5v8.25H5.5zm2.75-2.75h8.25v-5.5H8.25v5.5zM6.944 16.5h19.112l-.825-4.125H7.77L6.944 16.5z" fill="#3055D8"/></g></symbol><symbol id="storm" viewBox="0 0 33 33"><mask id="storm-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M.5.436h32v32H.5z"/></mask><g mask="url(#storm-a)"><path d="M24.7 29.768c.556-1.4.945-2.817 1.167-4.25.222-1.433.277-2.883.166-4.35-.844 1.822-2.133 3.267-3.866 4.334a10.61 10.61 0 01-5.667 1.6c-1.867 0-3.556-.44-5.067-1.318-1.51-.877-2.8-2.05-3.866-3.516-1.067-1.466-1.89-3.15-2.467-5.05a20.217 20.217 0 01-.867-5.916c0-1.4.095-2.784.284-4.151A20.86 20.86 0 015.5 3.1h2.8a20.922 20.922 0 00-1.15 4.234 18.493 18.493 0 00-.183 4.367c.866-1.845 2.161-3.295 3.884-4.35 1.721-1.056 3.605-1.584 5.65-1.584 1.866 0 3.555.439 5.066 1.316 1.51.878 2.8 2.045 3.866 3.5 1.067 1.456 1.89 3.134 2.467 5.034.578 1.9.867 3.884.867 5.95 0 1.4-.095 2.783-.283 4.15a20.935 20.935 0 01-.984 4.05h-2.8zm-8.2-5.333c2.222 0 4.111-.778 5.667-2.333 1.555-1.556 2.333-3.445 2.333-5.667s-.778-4.111-2.333-5.667C20.61 9.213 18.722 8.435 16.5 8.435s-4.111.778-5.667 2.333C9.278 12.324 8.5 14.213 8.5 16.435s.778 4.111 2.333 5.667c1.556 1.555 3.445 2.333 5.667 2.333zm0-2.667c1.467 0 2.722-.522 3.767-1.566 1.044-1.045 1.566-2.3 1.566-3.767s-.522-2.722-1.566-3.767c-1.045-1.044-2.3-1.566-3.767-1.566s-2.722.522-3.767 1.566c-1.044 1.045-1.566 2.3-1.566 3.767s.522 2.722 1.566 3.767c1.045 1.044 2.3 1.566 3.767 1.566zm0-2.666c-.733 0-1.36-.262-1.883-.784a2.565 2.565 0 01-.784-1.883c0-.733.262-1.361.784-1.884a2.567 2.567 0 011.883-.783c.733 0 1.361.261 1.884.783.522.523.783 1.15.783 1.884 0 .733-.261 1.36-.783 1.883a2.57 2.57 0 01-1.884.784z" fill="#3055D8"/></g></symbol><symbol id="support-2" viewBox="0 0 30 30"><mask id="support-2-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#support-2-a)"><path d="M15 27.5c-1.73 0-3.354-.328-4.875-.985a12.614 12.614 0 01-3.969-2.671 12.615 12.615 0 01-2.671-3.969C2.828 18.355 2.5 16.729 2.5 15c0-1.73.328-3.354.985-4.875a12.614 12.614 0 012.671-3.969 12.632 12.632 0 013.969-2.672C11.645 2.828 13.271 2.5 15 2.5c1.73 0 3.354.328 4.875.984a12.633 12.633 0 013.969 2.672 12.614 12.614 0 012.671 3.969c.657 1.52.985 3.146.985 4.875 0 1.73-.328 3.354-.985 4.875a12.614 12.614 0 01-2.671 3.969 12.614 12.614 0 01-3.969 2.671c-1.52.657-3.146.985-4.875.985zm-3.625-3.188l1.5-3.437a5.837 5.837 0 01-2.265-1.454 7.077 7.077 0 01-1.485-2.296l-3.438 1.438a9.373 9.373 0 002.22 3.5c1 1 2.155 1.75 3.468 2.25zm-2.25-11.437c.354-.875.85-1.64 1.485-2.296a5.837 5.837 0 012.265-1.454l-1.438-3.438c-1.333.5-2.5 1.25-3.5 2.25s-1.75 2.167-2.25 3.5l3.438 1.438zM15 18.75c1.042 0 1.927-.365 2.656-1.094.73-.729 1.094-1.614 1.094-2.656s-.365-1.927-1.094-2.656c-.729-.73-1.614-1.094-2.656-1.094s-1.927.365-2.656 1.094c-.73.729-1.094 1.614-1.094 2.656s.365 1.927 1.094 2.656c.729.73 1.614 1.094 2.656 1.094zm3.625 5.563a9.736 9.736 0 003.454-2.234 9.736 9.736 0 002.233-3.454l-3.437-1.5a5.927 5.927 0 01-1.438 2.265 6.99 6.99 0 01-2.25 1.485l1.438 3.438zm2.25-11.5l3.438-1.438a9.736 9.736 0 00-2.234-3.454 9.735 9.735 0 00-3.454-2.234l-1.438 3.5a5.93 5.93 0 012.22 1.422 7.044 7.044 0 011.468 2.204z" fill="#3055D8"/></g></symbol><symbol id="support" viewBox="0 0 28 28"><path d="M14 28c-1.937 0-3.757-.368-5.46-1.103a14.128 14.128 0 01-4.445-2.992 14.129 14.129 0 01-2.992-4.445C.368 17.757 0 15.937 0 14c0-1.937.368-3.757 1.103-5.46a14.128 14.128 0 012.992-4.445A14.148 14.148 0 018.54 1.102C10.243.367 12.063 0 14 0c1.937 0 3.757.367 5.46 1.102a14.148 14.148 0 014.445 2.993 14.128 14.128 0 012.992 4.445C27.632 10.243 28 12.063 28 14c0 1.937-.368 3.757-1.103 5.46a14.128 14.128 0 01-2.992 4.445 14.128 14.128 0 01-4.445 2.992C17.757 27.632 15.937 28 14 28zm-4.06-3.57l1.68-3.85a6.537 6.537 0 01-2.537-1.628A7.926 7.926 0 017.42 16.38l-3.85 1.61a10.498 10.498 0 002.485 3.92 10.95 10.95 0 003.885 2.52zM7.42 11.62a7.927 7.927 0 011.663-2.572A6.538 6.538 0 0111.62 7.42l-1.61-3.85c-1.493.56-2.8 1.4-3.92 2.52a10.883 10.883 0 00-2.52 3.92l3.85 1.61zM14 18.2c1.167 0 2.158-.408 2.975-1.225.817-.817 1.225-1.808 1.225-2.975s-.408-2.158-1.225-2.975C16.158 10.208 15.167 9.8 14 9.8s-2.158.408-2.975 1.225C10.208 11.842 9.8 12.833 9.8 14s.408 2.158 1.225 2.975c.817.817 1.808 1.225 2.975 1.225zm4.06 6.23c1.47-.56 2.76-1.394 3.868-2.502a10.903 10.903 0 002.502-3.868l-3.85-1.68a6.639 6.639 0 01-1.61 2.537 7.83 7.83 0 01-2.52 1.663l1.61 3.85zm2.52-12.88l3.85-1.61a10.903 10.903 0 00-2.502-3.868A10.903 10.903 0 0018.06 3.57l-1.61 3.92c.957.35 1.785.88 2.485 1.592a7.89 7.89 0 011.645 2.468z" fill="currentColor"/></symbol><symbol id="system_update" viewBox="0 0 24 24"><mask id="system_update-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path fill="#D9D9D9" d="M0 0h24v24H0z"/></mask><g mask="url(#system_update-a)"><path d="M7 23c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 015 21V3c0-.55.196-1.021.588-1.413A1.925 1.925 0 017 1h10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v18c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0117 23H7zm0-3v1h10v-1H7zm0-2h10V6H7v12zm5-2l-4-4 1.4-1.4 1.6 1.55V8h2v4.15l1.6-1.55L16 12l-4 4zM7 4h10V3H7v1z" fill="currentColor"/></g></symbol><symbol id="terminal" viewBox="0 0 33 33"><mask id="terminal-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M0 0h33v33H0z"/></mask><g mask="url(#terminal-a)"><path d="M5.5 27.5a2.647 2.647 0 01-1.942-.807 2.65 2.65 0 01-.808-1.943V8.25c0-.756.27-1.403.808-1.941A2.645 2.645 0 015.5 5.5h22c.756 0 1.404.27 1.943.809.538.538.807 1.185.807 1.941v16.5c0 .756-.269 1.404-.807 1.943a2.651 2.651 0 01-1.943.807h-22zm0-2.75h22V11h-22v13.75zm4.813-1.375L8.386 21.45l3.541-3.575L8.353 14.3l1.96-1.925 5.5 5.5-5.5 5.5zm6.187 0v-2.75h8.25v2.75H16.5z" fill="#3055D8"/></g></symbol><symbol id="theaters" viewBox="0 0 33 33"><mask id="theaters-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33"><path fill="#D9D9D9" d="M0 0h33v33H0z"/></mask><g mask="url(#theaters-a)"><path d="M5.5 28.875V4.125h2.75v2.75H11v-2.75h11v2.75h2.75v-2.75h2.75v24.75h-2.75v-2.75H22v2.75H11v-2.75H8.25v2.75H5.5zm2.75-5.5H11v-2.75H8.25v2.75zm0-5.5H11v-2.75H8.25v2.75zm0-5.5H11v-2.75H8.25v2.75zm13.75 11h2.75v-2.75H22v2.75zm0-5.5h2.75v-2.75H22v2.75zm0-5.5h2.75v-2.75H22v2.75zm-8.25 13.75h5.5V6.875h-5.5v19.25z" fill="#3055D8"/></g></symbol><symbol id="vc" viewBox="0 0 18 17"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.894.232a3.725 3.725 0 00-2.74 3.174c-.204 1.821.938 3.489 2.728 3.985.774.215 1.913.113 2.59-.23.372-.188.88-.583 1.106-.858l.194-.237-.45-.351a7.767 7.767 0 00-.47-.352c-.01 0-.14.115-.29.255-1.232 1.157-3.138.84-3.835-.638-.512-1.084-.293-2.313.554-3.104a2.116 2.116 0 011.003-.545c.56-.146 1.336-.066 1.834.188l.212.108v1.226h1.229V1.1l-.2-.168C16.104.72 15.4.377 14.982.263 14.795.21 14.377.165 13.97.152c-.57-.019-.762-.005-1.075.08zM1.98.876v.589l.147.004c.08.002.327.001.547-.001.22-.003.435.018.478.045.042.028.55 1.368 1.126 2.978l1.05 2.928h1.157L7.59 4.455l1.107-2.963.593-.016.592-.015V.29H8.83L7.774.293l-.88 2.566C6.412 4.27 6 5.434 5.983 5.445c-.018.011-.43-1.138-.916-2.554L4.184.317 3.082.302 1.98.288v.588zm.492 8.611l.015.549.574.015.575.015V14.815H2.457l.015.574.015.574 2.71.014 2.71.014v-1.176H4.865v-1.404c0-1.554.033-1.786.331-2.347.176-.33.527-.68.844-.84.166-.085.658-.215.81-.215.04 0 .05.17.033.534l-.026.534h1.212V8.941h-.681c-.768.001-1.073.064-1.554.32-.304.162-.781.606-.977.908-.085.131-.087.126-.12-.267-.019-.22-.04-.52-.047-.667l-.012-.267-1.11-.015-1.11-.014.015.548zm6.93.068v.614h1.069v1.885c0 2.024.018 2.2.293 2.801.16.35.586.806.921.988.448.242.824.321 1.423.298.448-.018.594-.046.857-.168.417-.193.713-.44.969-.814l.21-.304.09.554.094.569c.001.008.429.008.95 0l.948-.015.015-.574.015-.574h-.948l-.035-1.081a116.53 116.53 0 01-.035-2.937V8.94h-2.456v1.228h1.228v1.461c0 .804-.024 1.591-.054 1.75a2.126 2.126 0 01-1.075 1.47c-.248.13-.346.15-.74.15-.545 0-.82-.119-1.07-.462-.33-.457-.338-.523-.36-3.18l-.019-2.417H9.403v.614zM.042 14.8c-.014.023-.029.3-.033.616L0 15.99H1.289l-.015-.6-.015-.602-.596-.015c-.328-.008-.608.004-.622.027z" fill="#282A32"/></symbol><symbol id="view_day-big" viewBox="0 0 42 37"><path d="M0 36.258v-2.035h42v2.035H0zM0 2.723V.69h42v2.034H0zM3.61 26.02c-1.007 0-1.86-.35-2.56-1.05-.7-.7-1.05-1.553-1.05-2.56v-7.874c0-1.006.35-1.86 1.05-2.56.7-.7 1.553-1.05 2.56-1.05h34.78c1.007 0 1.86.35 2.56 1.05.7.7 1.05 1.554 1.05 2.56v7.875c0 1.006-.35 1.86-1.05 2.56-.7.7-1.553 1.05-2.56 1.05H3.61zm0-2.034h34.78c.394 0 .755-.164 1.083-.492.329-.328.493-.69.493-1.083v-7.875c0-.394-.164-.755-.493-1.083-.328-.328-.689-.492-1.082-.492H3.609c-.393 0-.754.164-1.082.492-.329.328-.493.69-.493 1.083v7.875c0 .394.164.755.493 1.083.328.328.689.492 1.082.492z" fill="currentColor"/></symbol><symbol id="view_day" viewBox="0 0 33 34"><path d="M4.125 28v-2.75h24.75V28H4.125zm0-19.25V6h24.75v2.75H4.125zm2.75 13.75a2.65 2.65 0 01-1.943-.808 2.647 2.647 0 01-.807-1.942v-5.5c0-.756.269-1.404.807-1.943a2.651 2.651 0 011.943-.807h19.25c.756 0 1.404.269 1.943.807.538.54.807 1.187.807 1.943v5.5c0 .756-.269 1.403-.807 1.942a2.65 2.65 0 01-1.943.808H6.875zm0-2.75h19.25v-5.5H6.875v5.5z" fill="currentColor"/></symbol><symbol id="webhook-big" viewBox="0 0 48 46"><path d="M11.053 45.663c-3.032 0-5.632-1.085-7.8-3.253C1.084 40.242 0 37.642 0 34.61c0-2.4.642-4.526 1.926-6.379 1.285-1.853 2.98-3.158 5.085-3.916V26.4a9.106 9.106 0 00-3.664 3.316c-.926 1.453-1.39 3.085-1.39 4.895 0 2.484.896 4.621 2.685 6.41 1.79 1.79 3.926 2.685 6.41 2.685 2.57 0 4.738-.895 6.506-2.684 1.768-1.79 2.652-3.927 2.652-6.411V33.6h14.022c.252-.548.62-.99 1.105-1.327a2.757 2.757 0 011.61-.505c.758 0 1.41.274 1.958.82.548.548.821 1.222.821 2.022 0 .758-.273 1.41-.82 1.958-.548.547-1.2.82-1.959.82-.59 0-1.126-.157-1.61-.473-.484-.316-.853-.768-1.105-1.358H22.168c-.42 3.116-1.705 5.58-3.852 7.39-2.148 1.81-4.569 2.716-7.263 2.716zm25.894 0c-1.642 0-3.168-.327-4.579-.98-1.41-.652-2.705-1.589-3.884-2.81h2.969a9.2 9.2 0 002.463 1.327c.926.336 1.937.505 3.031.505 2.527 0 4.674-.895 6.442-2.684 1.769-1.79 2.653-3.927 2.653-6.411 0-2.568-.884-4.737-2.653-6.505-1.768-1.769-3.915-2.653-6.442-2.653a9.294 9.294 0 00-3.852.821l-7.263-12.252c-.885.168-1.674-.022-2.369-.569-.695-.547-1.042-1.284-1.042-2.21 0-.758.284-1.41.853-1.958.568-.548 1.231-.821 1.99-.821.8 0 1.473.273 2.02.82.548.548.821 1.2.821 1.959a2.692 2.692 0 01-.632 1.705l6.506 10.926c.463-.084.947-.168 1.453-.253a9.206 9.206 0 011.515-.126c3.032 0 5.632 1.084 7.8 3.253C46.916 28.915 48 31.537 48 34.61c0 3.032-1.084 5.632-3.253 7.8-2.168 2.168-4.768 3.253-7.8 3.253zm-25.894-8.274c-.758 0-1.41-.274-1.958-.821-.548-.547-.821-1.2-.821-1.958s.305-1.442.915-2.053c.611-.61 1.421-.852 2.432-.726l6.947-11.747c-1.431-1.095-2.515-2.41-3.252-3.948a11.178 11.178 0 01-1.106-4.894c0-3.032 1.074-5.632 3.222-7.8C19.579 1.273 22.19.189 25.263.189c2.99 0 5.569 1.053 7.737 3.158s3.274 4.652 3.316 7.642H34.42c-.084-2.484-1.01-4.579-2.779-6.284-1.768-1.706-3.895-2.558-6.379-2.558-2.484 0-4.631.884-6.442 2.652-1.81 1.769-2.716 3.916-2.716 6.443 0 1.768.453 3.368 1.358 4.8.905 1.431 2.158 2.59 3.758 3.473l-7.895 13.327c.169.252.306.536.41.852.106.316.159.621.159.916 0 .758-.274 1.41-.821 1.958-.548.547-1.221.82-2.021.82z" fill="currentColor"/></symbol><symbol id="webhook" viewBox="0 0 33 34"><path d="M9.625 29.375c-1.902 0-3.523-.67-4.863-2.01C3.42 26.024 2.75 24.402 2.75 22.5c0-1.673.522-3.134 1.565-4.384 1.042-1.248 2.354-2.033 3.935-2.354v2.854a4.004 4.004 0 00-1.977 1.478A3.998 3.998 0 005.5 22.5c0 1.146.401 2.12 1.203 2.922s1.776 1.203 2.922 1.203c1.146 0 2.12-.401 2.922-1.203s1.203-1.776 1.203-2.922v-1.375h8.078a2.1 2.1 0 01.671-.5c.263-.125.555-.188.876-.188.573 0 1.06.201 1.46.603.402.4.602.887.602 1.46s-.2 1.06-.602 1.46c-.4.402-.887.602-1.46.602-.32 0-.613-.062-.876-.188a2.1 2.1 0 01-.67-.499h-5.466c-.321 1.581-1.106 2.893-2.354 3.937-1.25 1.042-2.711 1.563-4.384 1.563zm13.75 0c-1.283 0-2.446-.315-3.488-.946a6.915 6.915 0 01-2.459-2.491h3.678c.321.229.676.4 1.066.515.39.115.79.172 1.203.172 1.146 0 2.12-.401 2.922-1.203S27.5 23.646 27.5 22.5c0-1.146-.401-2.12-1.203-2.922s-1.776-1.203-2.922-1.203c-.458 0-.882.063-1.272.188-.39.127-.756.316-1.1.568l-4.194-6.978a2.07 2.07 0 01-1.203-.687c-.32-.367-.481-.814-.481-1.341 0-.573.2-1.06.602-1.46.4-.402.888-.602 1.46-.602.573 0 1.06.2 1.46.602.402.4.603.887.603 1.46v.293c0 .08-.023.177-.069.291l2.99 5.02c.184-.047.379-.076.585-.087.206-.011.413-.017.619-.017 1.902 0 3.524.67 4.865 2.01 1.34 1.341 2.01 2.963 2.01 4.865 0 1.902-.67 3.524-2.01 4.865-1.341 1.34-2.963 2.01-4.865 2.01zm-13.75-4.813c-.573 0-1.06-.2-1.46-.602a1.986 1.986 0 01-.602-1.46c0-.504.16-.94.48-1.306.322-.367.711-.607 1.17-.722l3.23-5.363a6.782 6.782 0 01-2.131-4.984c0-1.902.671-3.523 2.012-4.863 1.34-1.341 2.961-2.012 4.864-2.012 1.902 0 3.523.67 4.864 2.012 1.34 1.34 2.01 2.96 2.01 4.863h-2.75c0-1.146-.4-2.12-1.203-2.922C19.307 6.401 18.333 6 17.187 6c-1.145 0-2.12.401-2.921 1.203-.803.802-1.204 1.776-1.204 2.922 0 .985.298 1.85.894 2.595a3.937 3.937 0 002.269 1.427l-4.64 7.734c.045.115.074.218.086.31.011.091.017.194.017.309 0 .573-.201 1.06-.603 1.46-.4.402-.887.602-1.46.602z" fill="currentColor"/></symbol><symbol id="work_history" viewBox="0 0 30 30"><mask id="work_history-a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30"><path fill="#D9D9D9" d="M0 0h30v30H0z"/></mask><g mask="url(#work_history-a)"><path d="M5 26.25a2.407 2.407 0 01-1.765-.734A2.408 2.408 0 012.5 23.75V10c0-.688.245-1.276.735-1.765A2.404 2.404 0 015 7.5h5V5c0-.688.245-1.276.735-1.766A2.406 2.406 0 0112.5 2.5h5a2.41 2.41 0 011.766.734c.49.49.734 1.079.734 1.766v2.5h5c.688 0 1.276.245 1.766.735S27.5 9.313 27.5 10v5.344a7.603 7.603 0 00-1.188-.704c-.416-.197-.854-.37-1.312-.515V10H5v13.75h8.844a8.751 8.751 0 00.75 2.5H5zM12.5 7.5h5V5h-5v2.5zm10 21.25c-1.73 0-3.203-.61-4.421-1.828-1.22-1.219-1.829-2.693-1.829-4.422 0-1.73.61-3.203 1.829-4.422 1.218-1.219 2.692-1.828 4.421-1.828 1.73 0 3.203.61 4.422 1.828 1.219 1.219 1.828 2.693 1.828 4.422 0 1.73-.61 3.203-1.828 4.422-1.219 1.219-2.693 1.828-4.422 1.828zm2.063-3.313l.875-.875-2.313-2.312v-3.5h-1.25v4l2.688 2.688z" fill="#3055D8"/></g></symbol><symbol id="ya-rev" viewBox="0 0 24 24"><path d="M12 1a9.002 9.002 0 00-6.366 15.362c1.63 1.63 5.466 3.988 5.693 6.465.034.37.303.673.673.673.37 0 .64-.303.673-.673.227-2.477 4.06-4.831 5.689-6.46A9.002 9.002 0 0012 1zm0 12.079a3.079 3.079 0 110-6.158 3.079 3.079 0 010 6.158z" fill="#F43"/></symbol><symbol id="yt-rev" viewBox="0 -7 48 48"><path d="M19.044 23.27l-.002-13.582 12.97 6.814-12.968 6.768zM47.52 7.334s-.47-3.33-1.908-4.798C43.786.61 41.74.601 40.803.49 34.086 0 24.011 0 24.011 0h-.022S13.914 0 7.197.49C6.258.6 4.214.61 2.387 2.535.948 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.907 4.798c1.827 1.926 4.225 1.866 5.293 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.983-.122 4.809-2.048 1.438-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824z" fill="#CE1312" fill-rule="evenodd"/></symbol></svg>';
window.SVG_IMAGES_SPRITE = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="174.391" y1="164.711" x2="79.709" y2="78.969" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#96CDF9" stop-opacity="0"/><stop offset="1" stop-color="#E6F8FF" stop-opacity=".6"/></linearGradient><linearGradient id="a" x1="-32.04" y1="-32.49" x2="91.11" y2="78.85" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#96CDF9" stop-opacity="0"/><stop offset="1" stop-color="#E6F8FF" stop-opacity=".6"/></linearGradient><linearGradient id="paint0_linear_352_13375" x1="32.544" y1="13.966" x2="71.94" y2="97.016" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#D2EDFD"/><stop offset=".482" stop-color="#82D4FF"/><stop offset="1" stop-color="#008FFF"/></linearGradient><filter id="filter0_d_352_13375" x=".457" y=".975" width="106.639" height="106.729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_352_13375"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_352_13375" result="shape"/></filter><filter id="filter0_d_354_11185" x="0" y="0" width="221" height="62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_354_11185"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_354_11185" result="shape"/></filter><linearGradient id="paint0_linear_602_8593" x1="4.344" y1="17.53" x2="44.37" y2="29.592" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5C6CC0"/><stop offset="1" stop-color="#3960AB"/></linearGradient><linearGradient id="paint1_linear_602_8593" x1="3.875" y1="19.085" x2="43.901" y2="31.146" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3960AB"/><stop offset="1" stop-color="#5C72C0"/></linearGradient><linearGradient id="paint2_linear_602_8593" x1="36.987" y1="27.788" x2="38.721" y2="31.018" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#5C7EC0"/><stop offset="1" stop-color="#3952AB"/></linearGradient><linearGradient id="paint0_linear_602_8602" x1="7.166" y1="37.353" x2="43.119" y2="28.226" gradientUnits="userSpaceOnUse"><stop offset=".01" stop-color="#FFA000"/><stop offset="1" stop-color="#FF7D00"/></linearGradient><linearGradient id="paint1_linear_602_8602" x1="12.778" y1="23.329" x2="36.249" y2="37.296" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFD54F"/><stop offset="1" stop-color="#FF9100"/></linearGradient><linearGradient id="paint2_linear_602_8602" x1="5.427" y1="30.503" x2="41.379" y2="21.375" gradientUnits="userSpaceOnUse"><stop offset=".01" stop-color="#FFA000"/><stop offset="1" stop-color="#FF7D00"/></linearGradient><linearGradient id="paint3_linear_602_8602" x1="11.039" y1="16.482" x2="34.51" y2="30.445" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFD54F"/><stop offset="1" stop-color="#FF9100"/></linearGradient><linearGradient id="paint4_linear_602_8602" x1="3.687" y1="23.652" x2="39.64" y2="14.525" gradientUnits="userSpaceOnUse"><stop offset=".01" stop-color="#FFA000"/><stop offset="1" stop-color="#FF7D00"/></linearGradient><linearGradient id="paint5_linear_602_8602" x1="9.3" y1="9.631" x2="32.772" y2="23.598" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFD54F"/><stop offset="1" stop-color="#FF9100"/></linearGradient><linearGradient id="paint6_linear_602_8602" x1="1.949" y1="16.805" x2="37.902" y2="7.678" gradientUnits="userSpaceOnUse"><stop offset=".01" stop-color="#FFA000"/><stop offset="1" stop-color="#FF7D00"/></linearGradient><linearGradient id="paint7_linear_602_8602" x1="7.561" y1="2.78" x2="31.032" y2="16.747" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFD54F"/><stop offset="1" stop-color="#FF9100"/></linearGradient><linearGradient id="paint8_linear_602_8602" x1="5.536" y1="9.572" x2="27.646" y2="9.334" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#CCD1EC"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="paint9_linear_602_8602" x1="9.166" y1="23.403" x2="20.823" y2="8.079" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#CCD1EC"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="paint10_linear_602_8602" x1="13.495" y1="8.704" x2="8.585" y2="14.352" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#CCD1EC"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="paint11_linear_602_8602" x1="14.23" y1="6.866" x2="12.362" y2="13.479" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#CCD1EC"/><stop offset="1" stop-color="#fff"/></linearGradient><filter id="filter0_d_415_9226" x="0" y="0" width="333" height="339" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="25"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0.125549 0 0 0 0 0.745833 0 0 0 0 0.372397 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_415_9226"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_415_9226" result="shape"/></filter><linearGradient id="paint0_linear_536_16312" x1=".136" y1="25.484" x2="50.776" y2="25.484" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#D86E7E"/><stop offset=".97" stop-color="#DA3A8C"/></linearGradient><linearGradient id="paint0_linear_536_16315" x1="0" y1="37.31" x2="86.31" y2="37.31" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#95C9DB"/><stop offset=".4" stop-color="#91C5E0"/><stop offset=".86" stop-color="#85B7ED"/><stop offset="1" stop-color="#80B2F3"/></linearGradient><linearGradient id="paint0_linear_536_16318" x1=".119" y1="33.272" x2="66.269" y2="33.272" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#95C9DB"/><stop offset=".4" stop-color="#91C5E0"/><stop offset=".86" stop-color="#85B7ED"/><stop offset="1" stop-color="#80B2F3"/></linearGradient><linearGradient id="paint0_linear_536_16323" x1="0" y1="32.37" x2="84.04" y2="32.37" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E7A773"/><stop offset=".14" stop-color="#E59971"/><stop offset=".48" stop-color="#E17E6D"/><stop offset=".78" stop-color="#DF6D6B"/><stop offset="1" stop-color="#DE676A"/></linearGradient><linearGradient id="paint0_linear_536_16326" x1="1.11" y1="21.714" x2="113.851" y2="14.686" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#573EF7"/><stop offset=".32" stop-color="#613EE4"/><stop offset=".71" stop-color="#6A3ED3"/><stop offset="1" stop-color="#6D3ECD"/></linearGradient><linearGradient id="paint0_linear_581_13798" x1=".01" y1="23.08" x2="46.14" y2="23.08" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FC4B22"/><stop offset=".99" stop-color="#FF7600"/></linearGradient><linearGradient id="paint0_linear_909_25543" x1="74" y1="24.5" x2="278.5" y2="130.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#C567FF"/><stop offset="1" stop-color="#4B1EFF"/></linearGradient><linearGradient id="paint1_linear_909_25543" x1=".004" y1="124.476" x2="129" y2="124.476" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FC4B22"/><stop offset=".99" stop-color="#FF7600"/></linearGradient><linearGradient id="paint2_linear_909_25543" x1="175.02" y1="167.47" x2="317" y2="167.47" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FC4B22"/><stop offset=".99" stop-color="#FF7600"/></linearGradient><clipPath id="clip0_987_28016"><path fill="#fff" transform="rotate(-8.02 67.772 4.751)" d="M0 0h68.106v77.274H0z"/></clipPath><linearGradient id="paint0_linear_898_25576" x1="69.491" y1=".227" x2="69.491" y2="163.067" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F5F9FD" stop-opacity="0"/><stop offset="1" stop-color="#F5F9FD" stop-opacity=".6"/></linearGradient><radialGradient id="paint0_radial_1002_56203" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(150.343 0 0 149.982 98.99 68.739)"><stop offset="0" stop-color="#F2F2F2"/><stop offset=".16" stop-color="#F3F0EC"/><stop offset=".38" stop-color="#F5EBD9"/><stop offset=".63" stop-color="#F8E3BC"/><stop offset=".92" stop-color="#FDD793"/><stop offset=".98" stop-color="#FED488"/></radialGradient><linearGradient id="paint0_linear_1397_41101" x1="613.775" y1="4.291" x2="-81.521" y2="180.977" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6063B6"/><stop offset="1" stop-color="#6962FF"/></linearGradient><linearGradient id="paint0_linear_1278_36221" x1="613.775" y1="4.291" x2="-81.521" y2="180.977" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#393591"/><stop offset="1" stop-color="#59D9FA"/></linearGradient><linearGradient id="paint0_linear_1278_36220" x1="363.91" y1="46.619" x2="347.489" y2="377.69" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#393591"/><stop offset="1" stop-color="#59D9FA"/></linearGradient><linearGradient id="paint0_linear_1070_33085" x1="4.759" y1="6.141" x2="16.524" y2="6.141" gradientUnits="userSpaceOnUse"><stop stop-color="#C0BFF5"/><stop offset="1" stop-color="#998CF8"/></linearGradient><linearGradient id="paint1_linear_1070_33085" x1="-.032" y1="16.894" x2="9.549" y2="16.894" gradientUnits="userSpaceOnUse"><stop stop-color="#C0BFF5"/><stop offset="1" stop-color="#998CF8"/></linearGradient><linearGradient id="paint2_linear_1070_33085" x1="10.435" y1="16.364" x2="16.545" y2="16.364" gradientUnits="userSpaceOnUse"><stop stop-color="#C0BFF5"/><stop offset="1" stop-color="#998CF8"/></linearGradient><linearGradient id="paint0_linear_1812_50025" x1="37.5" y1="0" x2="37.5" y2="45" gradientUnits="userSpaceOnUse"><stop stop-color="#F37321"/><stop offset="1" stop-color="#ED1E24"/></linearGradient></defs><symbol id="404-error" viewBox="0 0 235 90"><path d="M53.624 53.882H41.413v18.073h-4.555V53.882H.42v-3.247L35.55.727h5.863v48.987h12.211v4.168zm-16.766-4.168V29.46c0-9.755.226-17.944.679-24.566h-.388c-.647 1.195-2.633 4.232-5.96 9.109L6.187 49.714h30.671zM106.1 36.341c0 12.436-1.898 21.643-5.693 27.619-3.796 5.977-9.538 8.964-17.226 8.964-7.397 0-13.019-3.076-16.862-9.23-3.845-6.153-5.766-15.271-5.766-27.352 0-12.339 1.866-21.481 5.597-27.425C69.88 2.973 75.557 0 83.181 0c7.462 0 13.147 3.077 17.056 9.231 3.909 6.154 5.863 15.19 5.863 27.11zm-40.314 0c0 10.983 1.437 19.099 4.312 24.348 2.875 5.25 7.236 7.874 13.083 7.874 6.105 0 10.555-2.714 13.349-8.141 2.794-5.427 4.191-13.454 4.191-24.082 0-10.466-1.397-18.413-4.191-23.84-2.794-5.427-7.244-8.141-13.349-8.141S72.65 7.075 69.905 12.501c-2.746 5.427-4.119 13.374-4.119 23.84zm101.126 17.541h-12.211v18.073h-4.555V53.882h-36.438v-3.247L148.838.727h5.863v48.987h12.211v4.168zm-16.766-4.168V29.46c0-9.755.225-17.944.678-24.566h-.387c-.646 1.195-2.635 4.232-5.961 9.109l-25.002 35.71h30.672z" fill="none" stroke="#7F7F7F"/><path d="M182.681 72.072c-1.852 0-3.295-.57-4.33-1.711s-1.553-2.738-1.553-4.793c0-2.031.5-3.658 1.5-4.881s2.348-1.834 4.043-1.834c1.5 0 2.684.523 3.551 1.57s1.301 2.469 1.301 4.266v.938h-9.176c.016 1.75.424 3.086 1.225 4.008s1.947 1.383 3.439 1.383c.727 0 1.365-.051 1.916-.152s1.248-.32 2.092-.656v1.055c-.719.313-1.383.525-1.992.639s-1.282.168-2.016.168zm-.34-12.187c-1.227 0-2.211.404-2.953 1.213s-1.176 1.975-1.301 3.498h7.875c0-1.477-.32-2.631-.961-3.463s-1.527-1.248-2.66-1.248zm14.583-1.031a10 10 0 011.734.164l-.223 1.113a6.776 6.776 0 00-1.652-.199c-1.086 0-1.977.461-2.672 1.383s-1.043 2.086-1.043 3.492v7.031h-1.16V59.1h.984l.117 2.297h.082c.523-.938 1.082-1.596 1.676-1.975s1.313-.568 2.157-.568zm10.54 0a10 10 0 011.734.164l-.223 1.113a6.776 6.776 0 00-1.652-.199c-1.086 0-1.977.461-2.672 1.383s-1.043 2.086-1.043 3.492v7.031h-1.16V59.1h.984l.117 2.297h.082c.523-.938 1.082-1.596 1.676-1.975s1.313-.568 2.157-.568zm16.058 6.597c0 2.078-.504 3.701-1.512 4.869s-2.398 1.752-4.172 1.752c-1.117 0-2.102-.27-2.953-.809s-1.504-1.313-1.957-2.32-.68-2.172-.68-3.492c0-2.078.504-3.697 1.512-4.857s2.391-1.74 4.148-1.74c1.75 0 3.123.588 4.119 1.764s1.495 2.786 1.495 4.833zm-10.054 0c0 1.75.385 3.115 1.154 4.096s1.857 1.471 3.264 1.471 2.494-.49 3.264-1.471 1.154-2.346 1.154-4.096c0-1.758-.389-3.121-1.166-4.09s-1.869-1.453-3.275-1.453-2.49.482-3.252 1.447-1.143 2.331-1.143 4.096zm19.798-6.597a10 10 0 011.734.164l-.223 1.113a6.776 6.776 0 00-1.652-.199c-1.086 0-1.977.461-2.672 1.383s-1.043 2.086-1.043 3.492v7.031h-1.16V59.1h.984l.117 2.297h.082c.523-.938 1.082-1.596 1.676-1.975s1.313-.568 2.157-.568zM0 89.165h235v1.004H0z" fill="#7F7F7F"/><path fill="#EF4855" d="M81.667 14.617h4v30h-4z"/><circle fill="#EF4855" cx="83.667" cy="55.116" r="2.5"/></symbol><symbol id="b10-3" viewBox="0 0 186 180"><path style="mix-blend-mode:screen" d="M55.063 213.153a.73.73 0 00.801.149l18.944 18.919h5.773l10.058 10.046.37-.37-10.224-10.208h-5.76l-18.79-18.766a.729.729 0 00-.15-.795.722.722 0 00-1.022 1.017v.008zM39.442 128.37a.728.728 0 00-.722-.18.722.722 0 00-.464.937.722.722 0 00.964.409l59.496 59.403v6.29l-38.174-38.114a.719.719 0 10-.371.37l29.556 29.514H78.544L40.801 149.31V137.4l-23.767-23.729a.716.716 0 00-1.163-.796.721.721 0 00.311 1.196c.16.046.332.036.486-.03l23.596 23.555v11.91l38.05 37.995h11.929l27.609 27.566.37-.37-18.99-18.966v-7.009L39.59 129.174a.713.713 0 00-.15-.804zm28.849 68.169V184.63l-21.888-21.854H34.475l-23.622-23.585a.719.719 0 00-1.169-.797.72.72 0 00.31 1.2.724.724 0 00.488-.033l23.758 23.73h11.928l21.581 21.547v11.91l24.163 24.125v14.087l-8.324-8.311v-7.027l-59.64-59.547a.717.717 0 00-.256-.877.721.721 0 00-.911.082.718.718 0 00.324 1.192.723.723 0 00.485-.035l59.491 59.402v6.295l-38.19-38.114a.719.719 0 10-.371.37l13.397 13.377H46.74l-21.585-21.552v-11.91L1.387 144.576a.723.723 0 00-1.175-.803.72.72 0 00-.085.92.729.729 0 00.89.253l23.613 23.576v11.91l21.892 21.858H58.45l36.112 36.056.37-.37-2.487-2.484v-14.828L68.29 196.539zm-47.133-21.832a.725.725 0 00-1.023 0 .717.717 0 00-.19.656.72.72 0 00.442.522v11.705L82.894 250l.37-.37-62.353-62.269v-11.485a.717.717 0 00.247-.161.72.72 0 000-1.008zm96.528 5.397v-11.909l-21.893-21.854H83.865l-23.639-23.585a.719.719 0 00-1.168-.797.72.72 0 00.31 1.2.724.724 0 00.488-.033l23.8 23.73h11.928l21.586 21.547v11.91l17.76 17.732.371-.37-17.615-17.571zm-11.698 9.383a.724.724 0 00-1.047.028.717.717 0 00.443 1.192.725.725 0 00.382-.054l18.276 18.247.37-.37-18.275-18.247a.721.721 0 00-.149-.796zm24.823 12.335l.524-.217-21.893-21.854H97.514L28.57 110.949a.72.72 0 10-.37.37l69.089 68.985h11.928l21.594 21.518zm-45.229-7.418l9.738 9.723v10.03l-6.006-5.997a.72.72 0 10-.37.37l17.738 17.715.371-.37-11.209-11.195v-10.77l-10.057-10.029h-10.25a.74.74 0 00-1.36-.11.736.736 0 101.33.633h10.075zm79.577-91.171a.723.723 0 00.797.145l18.948 18.906h5.769l10.062 10.046.37-.37-10.224-10.208h-5.759l-18.795-18.766a.72.72 0 00-1.168-.795.714.714 0 00-.222.521.724.724 0 00.222.521zm-37.518 70.091a.725.725 0 00-.721-.18.715.715 0 00-.496.553.72.72 0 00.996.793l15.54 15.52.371-.37-15.541-15.503a.712.712 0 00-.149-.813zm5.99-.731a.723.723 0 00.796.144l12.917 12.922.37-.37-12.916-12.896a.724.724 0 00-.099-.736.72.72 0 00-.698-.255.722.722 0 00-.562.882.725.725 0 00.192.334v-.025zm7.012-1.753a.716.716 0 00.796.145l10.288 10.272.371-.37-10.288-10.272a.716.716 0 00-.256-.878.718.718 0 00-.911.083.717.717 0 000 1.037v-.017zm-20.022-39.981a.721.721 0 00.796.149l40.326 40.262.37-.37-40.325-40.262a.715.715 0 00-.096-.737.729.729 0 00-.698-.258.726.726 0 00-.554.495.723.723 0 00.181.721zm28.913-112.413a.725.725 0 00-.722-.18.719.719 0 10.5 1.346l59.5 59.402v6.295l-38.174-38.114a.73.73 0 00-.149-.796.726.726 0 00-.722-.18.719.719 0 10.5 1.346l29.556 29.51h-11.195L150.884 39.39V27.48L127.109 3.742a.715.715 0 00-.254-.882.72.72 0 00-1 1 .715.715 0 00.883.252l23.613 23.577v11.91l38.051 37.99h11.928l27.609 27.567.371-.37-18.983-18.954v-7.035l-59.64-59.547a.715.715 0 00-.149-.804h-.004zm28.848 68.17v-11.91l-21.879-21.863h-11.928l-23.613-23.576a.72.72 0 00-1.168-.796.719.719 0 00.797 1.166l23.754 23.742h11.928l21.585 21.552v11.91l24.163 24.125v14.087l-8.32-8.298v-7.053l-59.64-59.547a.722.722 0 00-.253-.882.722.722 0 00-1.123.527.713.713 0 00.518.758.72.72 0 00.487-.033l59.487 59.394v6.291l-38.178-38.114a.712.712 0 00-.721-1.007.717.717 0 00-.647.652.72.72 0 001.002.725l13.393 13.377h-11.191L135.25 70.29V58.38l-23.767-23.717a.722.722 0 00.033-.486.722.722 0 00-1.409.131.713.713 0 00.518.758.72.72 0 00.487-.033l23.614 23.577v11.91l21.892 21.857h11.928l36.112 36.056.371-.37-2.484-2.484v-14.84l-24.163-24.125zm-44.577 62.341a.717.717 0 00.312 1.195c.16.047.332.036.485-.03l12.167 12.144h-14.276l-48.76-48.676a.713.713 0 00-.253-.876.717.717 0 00-.994.993.712.712 0 00.876.253l48.914 48.837h15.017l3.301 3.292h-19.396l-52.45-52.363v-11.484a.714.714 0 00.403-.945.722.722 0 00-1.064-.323.722.722 0 00-.306.738.714.714 0 00.444.53v11.705l52.232 52.147h-6.33l-19.426-19.391a.723.723 0 00.033-.487.723.723 0 00-1.202-.31.715.715 0 00-.085.913.719.719 0 00.883.254l19.597 19.565h27.225l7.647 7.631.371-.37-24.163-24.126a.72.72 0 00-1.167-.795l-.035-.021zm55.112-4.815l.371-.366-74.406-74.294h-11.928l-11.472-11.45h-5.776L66.91 39.267a.717.717 0 00-.726-1.005.72.72 0 00-.528 1.121.72.72 0 00.884.254l18.948 18.919h5.768l11.473 11.45h11.928l74.26 74.136zm-57.668-79.36a.72.72 0 00-1.018 1.021.71.71 0 00.247.158v11.705l62.512 62.41.371-.37-62.359-62.257V65.965a.693.693 0 00.247-.157.707.707 0 00.161-.791.707.707 0 00-.161-.234zm44.667 92.341h-14.604l-53.433-53.35H95.951l-9.24-9.225a.7.7 0 00-.196-.596.72.72 0 10-.073 1.068l9.292 9.276h11.928l53.433 53.35h14.297l.524-.523zM98.784 75.637a.759.759 0 00-1.074 1.068.75.75 0 00.78.174l62.085 61.993h8.831l5.752 5.742h-16.734l-25.096-25.061a.76.76 0 00-.751-1.085.768.768 0 00-.697.689.764.764 0 001.078.762l25.249 25.214h17.466l6.122 6.112.37-.37-62.418-62.329a.741.741 0 00-.153-.85.757.757 0 00-1.291.533.754.754 0 00.625.741.753.753 0 00.449-.062l49.501 49.432h-8.094L98.886 76.539a.752.752 0 00-.102-.902zm-42.92-6.848a.72.72 0 10-.221 1.166l38.566 38.505h11.928l51.972 51.892h14.582l.524-.524h-14.872l-51.972-51.891H94.443L56.009 69.585a.718.718 0 00-.145-.796zm160.22 10.791a.725.725 0 00-.722-.18.719.719 0 10.5 1.345l18.276 18.247.37-.365-18.28-18.252a.714.714 0 00-.144-.795zM138.517.212a.718.718 0 00-.786-.158.725.725 0 00-.447.665.725.725 0 00.211.51.716.716 0 00.796.148l61.992 61.913h11.928l28.687 28.642.524-.217-28.985-28.949h-11.928L138.662 1.024a.72.72 0 00-.145-.812zm57.178 84.268l9.717 9.732v10.033l-6.006-5.997a.721.721 0 00-.727-1.004.721.721 0 00-.65.649.72.72 0 001.006.725l17.743 17.711.371-.37-11.23-11.199V93.986l-10.041-10.03h-10.266a.628.628 0 00-.167-.284.714.714 0 00-.784-.156.717.717 0 00-.323 1.063.716.716 0 00.739.306.676.676 0 00.505-.405h10.113zm7.583-46.124a.74.74 0 00-.166-.289.721.721 0 00-1.229.508.719.719 0 001.229.509.705.705 0 00.136-.205h13.662l38.719 38.655.371-.37-62.435-62.325a.762.762 0 10-.366.37l23.179 23.147h-13.1zM187.26 24.5a.72.72 0 00-1.022 1.016.69.69 0 00.29.17v13.13l-12.133-12.104a.722.722 0 00-.253-.883.722.722 0 00-1.123.527.713.713 0 00.518.758.72.72 0 00.487-.032l23.759 23.746h21.79l7.668 7.656v11.91l17.764 17.732.371-.366-17.599-17.579V58.27l-7.987-7.979H198l-10.966-10.948V25.656a.789.789 0 00.209-.136.723.723 0 000-1.021h.017z" fill="url(#a)"/></symbol><symbol id="b10-4" viewBox="0 0 147 121"><path style="mix-blend-mode:screen" d="M87.92 93.4a1.07 1.07 0 101.51-1.5 1.06 1.06 0 00-1.18-.22L0 3.41v-9.35l56.62 56.63a1.06 1.06 0 00.22 1.21 1.07 1.07 0 001.5 0 1.08 1.08 0 000-1.51 1.08 1.08 0 00-1.19-.22L13.34 6.29h16.6l56 56v17.7l35.26 35.25a1.07 1.07 0 10.55-.55l-35-35V61.96L30.26 5.51H12.55l-41-40.95-.55.55L-.82-6.72V3.73L87.7 92.21a1.08 1.08 0 00.22 1.19zM45.13-7.89V9.82L77.6 42.29h17.74l35 35a1.071 1.071 0 102.045.53 1.07 1.07 0 00-1.495-1.08L95.63 41.51H77.92l-32-32V-8.21L10.06-44.05v-20.93l12.35 12.35v10.45l88.48 88.48a1.061 1.061 0 00.568 1.414 1.074 1.074 0 001.172-.234 1.082 1.082 0 000-1.51 1.08 1.08 0 00-1.19-.22L23.19-42.51v-9.35L79.82 4.77a1.06 1.06 0 00.975 1.492 1.07 1.07 0 00.99-1.484 1.07 1.07 0 00-.235-.348 1.06 1.06 0 00-1.21-.21L60.49-15.65H77.1l32 32v17.7l35.24 35.28a1.071 1.071 0 102.045.53 1.07 1.07 0 00-1.495-1.08l-35-35v-17.7L77.42-16.43h-17.7L6.15-70l-.55.55 3.74 3.69v22L45.13-7.89zM-10.79 2.57a1.08 1.08 0 001.51 0A1.07 1.07 0 00-10.46.83l-27.11-27.11-.55.55 27.11 27.11a1.08 1.08 0 00.22 1.19zm115.06 117.89a1.069 1.069 0 001.765-1.123 1.073 1.073 0 00-.866-.689 1.068 1.068 0 00-.569.082l-92-92H-5.06l-42.55-42.51-.78.32 43 43h17.73l91.71 91.74a1.06 1.06 0 00.22 1.18zM19.48-4.71L5.04-19.16V-34.1l8.91 8.91a1.06 1.06 0 00.21 1.19 1.09 1.09 0 001.52 0 1.09 1.09 0 000-1.52 1.06 1.06 0 00-1.18-.22l-26.32-26.31-.55.55L4.26-34.87v16l14.9 14.93h15.18a1 1 0 00.25.43 1.06 1.06 0 001.51 0 1.06 1.06 0 000-1.51 1.06 1.06 0 00-1.51 0c-.085.09-.153.195-.2.31H19.48zM8.23 63.82c.048.161.133.309.25.43a1.08 1.08 0 001.51 0 1.068 1.068 0 000-1.52 1.07 1.07 0 00-1.51 0 1.06 1.06 0 00-.21.31h-20.29L-69.45 5.61l-.55.55 92.6 92.6a1.11 1.11 0 10.54-.56l-34.38-34.38H8.23zM31.99 84.4a1.07 1.07 0 101.09-1.76V63.13l18 18a1.07 1.07 0 10.55-.55L16.34 45.31h-32.31L-27.36 33.9V16.21l-26.3-26.31-.55.55 26.12 26.12v17.71l11.8 11.81h32.32l16.31 16.27v20.33a1.06 1.06 0 00-.35 1.71z" fill="url(#a)"/></symbol><symbol id="b10-5" viewBox="0 0 108 108"><g filter="url(#filter0_d_352_13375)"><path fill-rule="evenodd" clip-rule="evenodd" d="M53.945.976c-2.504-.032-4.95.62-7.195 1.917-1.743 1.007-2.715 1.818-3.917 3.269-2.213 2.67-3.211 6.106-2.791 9.6.084.702.142 1.325.127 1.386-.013.06-4.206-.855-9.316-2.035l-9.291-2.145-.691.379-.69.379-2.668 11.347c-2.609 11.097-2.663 11.361-2.448 12.002.25.744.872 1.237 1.587 1.26.268.008 1.157-.243 1.976-.558 4.513-1.735 9.187-.227 11.666 3.765 2.263 3.643 1.995 7.91-.709 11.29-.917 1.146-3.593 2.798-5.063 3.127-1.798.4-3.247.363-4.92-.13-1.813-.533-2.74-1.144-4.355-2.869-1.008-1.078-1.378-1.358-1.963-1.494-1.002-.23-1.573.09-1.996 1.12-.188.457-1.836 7.283-3.662 15.168-3.621 15.632-3.552 15.213-2.65 15.905.28.215 3.642 1.05 11.796 2.933l11.403 2.633.631-.394c.954-.596 1.086-1.448.443-2.877-2.082-4.626-.61-9.77 3.534-12.356 2.26-1.411 4.608-1.806 7.18-1.208 2.771.643 4.505 1.873 6.006 4.26 2 3.178 2.044 6.997.115 10.048-.314.496-1.142 1.434-1.842 2.085-.699.65-1.36 1.342-1.47 1.538-.27.48-.053 1.622.385 2.025.288.266 3.231.992 15.582 3.843l15.227 3.515.644-.454.643-.454 3.013-13.048c1.657-7.177 3.071-13.034 3.143-13.016.072.018.713.392 1.425.83 1.173.724 1.536.855 3.922 1.411 2.51.586 2.704.604 4.292.419 2.359-.276 3.68-.745 5.78-2.054 2.077-1.294 3.327-2.526 4.476-4.41.685-1.123.86-1.596 1.327-3.57.454-1.919.521-2.492.429-3.675-.317-4.07-2.172-7.735-5.125-10.127-2.752-2.229-5.942-3.152-9.57-2.769-.742.078-1.403.13-1.468.115-.065-.015.836-4.162 2.003-9.216 1.559-6.75 2.094-9.323 2.018-9.696-.222-1.089.157-.974-13.94-4.228-7.142-1.65-12.98-3.024-12.972-3.055.007-.032.332-.562.722-1.179 2.748-4.352 2.765-9.897.043-14.206-1.074-1.7-1.824-2.541-3.288-3.69-2.012-1.576-4.98-2.623-7.538-2.656z" fill="url(#paint0_linear_352_13375)"/></g></symbol><symbol id="b10-8" viewBox="0 0 221 62"><g filter="url(#filter0_d_354_11185)"><rect x="4" width="213" height="54" rx="11" fill="#fff" shape-rendering="crispEdges"/><path d="M26.807 37.318c-1.445 0-2.804-.272-4.077-.815a10.7 10.7 0 01-3.35-2.257 10.844 10.844 0 01-2.268-3.351c-.543-1.266-.812-2.625-.805-4.077.006-1.452.282-2.81.825-4.077a10.723 10.723 0 012.267-3.34 10.503 10.503 0 013.341-2.267 10.199 10.199 0 014.067-.816c1.452 0 2.81.272 4.077.816 1.272.543 2.386 1.299 3.34 2.267a10.58 10.58 0 012.258 3.34c.543 1.267.818 2.625.825 4.077.006 1.452-.262 2.81-.806 4.077a10.7 10.7 0 01-2.257 3.35 10.551 10.551 0 01-3.35 2.258 10.295 10.295 0 01-4.087.815zm25.62 0c-1.444 0-2.803-.272-4.076-.815a10.7 10.7 0 01-3.35-2.257 10.844 10.844 0 01-2.268-3.351c-.543-1.266-.812-2.625-.805-4.077.007-1.452.282-2.81.825-4.077a10.723 10.723 0 012.267-3.34 10.503 10.503 0 013.341-2.267 10.199 10.199 0 014.067-.816c1.452 0 2.81.272 4.077.816 1.272.543 2.386 1.299 3.34 2.267a10.58 10.58 0 012.258 3.34c.543 1.267.818 2.625.825 4.077.007 1.452-.262 2.81-.805 4.077a10.7 10.7 0 01-2.258 3.35 10.551 10.551 0 01-3.35 2.258 10.295 10.295 0 01-4.087.815zm25.622 0c-1.445 0-2.804-.272-4.077-.815a10.702 10.702 0 01-3.35-2.257 10.846 10.846 0 01-2.268-3.351c-.543-1.266-.812-2.625-.805-4.077.007-1.452.282-2.81.825-4.077a10.723 10.723 0 012.267-3.34 10.503 10.503 0 013.341-2.267 10.2 10.2 0 014.067-.816c1.452 0 2.81.272 4.077.816 1.272.543 2.386 1.299 3.34 2.267a10.58 10.58 0 012.258 3.34c.543 1.267.818 2.625.825 4.077.007 1.452-.262 2.81-.805 4.077a10.702 10.702 0 01-2.257 3.35 10.551 10.551 0 01-3.351 2.258 10.295 10.295 0 01-4.087.815zm25.621 0c-1.445 0-2.804-.272-4.077-.815a10.7 10.7 0 01-3.35-2.257 10.846 10.846 0 01-2.267-3.351c-.544-1.266-.813-2.625-.806-4.077.007-1.452.282-2.81.825-4.077a10.723 10.723 0 012.267-3.34 10.503 10.503 0 013.341-2.267 10.198 10.198 0 014.067-.816c1.452 0 2.811.272 4.077.816a10.36 10.36 0 013.341 2.267 10.592 10.592 0 012.257 3.34c.543 1.267.818 2.625.825 4.077.007 1.452-.262 2.81-.805 4.077a10.712 10.712 0 01-2.257 3.35 10.569 10.569 0 01-3.351 2.258 10.296 10.296 0 01-4.087.815z" fill="#2F2F2F"/><path d="M122 10v34" stroke="#2F2F2F" stroke-linecap="round"/></g></symbol><symbol id="b11-5" viewBox="0 0 96 91"><path d="M78.786 89.824L48.809 74.966 19.455 91l5.016-32.832L0 35.478l33.063-5.424L47.295 0 62.73 29.466 96 33.581 72.464 57.228l6.322 32.596z" fill="#fff" fill-opacity=".3"/></symbol><symbol id="b11-7" viewBox="0 0 64 42"><path d="M31.88 1l9.97 7.29L63.1 14.4v24.19l-10.55-2.97h-32.5l-7.61 4.93v-5.56L1 20.61V1h30.88z" fill="#263238" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.05 35.62h32.5V15.58h-32.5v20.04z" fill="#fff" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="b12-10" viewBox="0 0 51 45"><path d="M8.687 3.118L.94 28.827a3.255 3.255 0 002.18 4.058l34.043 10.258a2.993 2.993 0 003.726-2L46.91 21.16a2.993 2.993 0 00-2-3.727L12.835 6.624c-1.72-.519-4.668-1.783-4.148-3.506z" fill="url(#paint0_linear_602_8593)"/><path d="M44.91 17.434l-.369-.11-33.467 17.958 26.09 7.862a2.993 2.993 0 003.727-2l6.022-19.983a2.993 2.993 0 00-2.003-3.727z" fill="url(#paint1_linear_602_8593)" opacity=".22"/><path d="M44.973 17.453L10.867 7.176a3.254 3.254 0 01-1.582-5.18A3.254 3.254 0 0112.746.94l31.244 9.415a2.99 2.99 0 012.001 3.726l-1.018 3.372z" fill="#2D3B6B"/><path d="M11.098 5.823a3.29 3.29 0 01-2.33-2.935c-.024.078-.058.15-.082.23a3.254 3.254 0 002.181 4.058l34.105 10.277.39-1.294L11.098 5.823z" fill="#242D5B"/><path d="M36.472 33.219l6.066 1.828a1.378 1.378 0 001.715-.923l1.543-5.121a1.379 1.379 0 00-.92-1.717l-6.065-1.827a4.053 4.053 0 10-2.339 7.76z" fill="#2D3B6B"/><path d="M37.22 32.673a2.977 2.977 0 101.718-5.701 2.977 2.977 0 00-1.718 5.7z" fill="#242D5B"/><path d="M37.325 31.157a1.83 1.83 0 101.056-3.506 1.83 1.83 0 00-1.056 3.506z" fill="url(#paint2_linear_602_8593)"/></symbol><symbol id="b12-5" viewBox="0 0 45 44"><path d="M41.561 25.984c-2.91-1.454-10.012-1.237-17.949.778-7.937 2.015-14.283 5.212-16.146 7.878l-.93.236.842 3.311c.728 2.87 9.38 3.154 19.296.637 9.917-2.518 17.385-6.894 16.656-9.764l-.838-3.301-.931.225z" fill="url(#paint0_linear_602_8602)"/><path d="M10.702 40.22c1.311.23 2.642.333 3.973.307l-2.424-9.545a20.523 20.523 0 00-3.342 2.173l1.793 7.064zM37.77 34.738a21.886 21.886 0 003.36-2.11l-1.861-7.326a22.105 22.105 0 00-3.958-.253l2.46 9.69zM16.748 40.452a40.702 40.702 0 002.116-.186L16.057 29.21c-.676.276-1.331.558-1.948.845l2.639 10.397zM35.089 36.001a36.49 36.49 0 001.937-.89l-2.548-10.037c-.679.027-1.39.074-2.127.141l2.738 10.786zM19.913 40.134c.41-.057.828-.118 1.251-.184l-2.87-11.308-1.22.31 2.839 11.182z" fill="#FFA000" opacity=".3"/><path d="M25.834 35.512c9.928-2.52 17.385-6.892 16.656-9.764-.73-2.872-9.369-3.157-19.297-.636-9.928 2.52-17.385 6.892-16.656 9.764.73 2.872 9.369 3.157 19.297.636z" fill="url(#paint1_linear_602_8602)"/><path d="M39.822 19.134c-2.91-1.455-10.011-1.234-17.948.781C13.937 21.93 7.59 25.123 5.726 27.79l-.928.236.838 3.301c.73 2.873 9.38 3.154 19.296.637 9.917-2.518 17.386-6.89 16.657-9.764l-.838-3.301-.93.236z" fill="url(#paint2_linear_602_8602)"/><path d="M8.963 33.368c1.31.234 2.642.338 3.973.312l-2.425-9.552a20.535 20.535 0 00-3.342 2.176l1.794 7.064zM36.032 27.891a22.214 22.214 0 003.36-2.11l-1.861-7.327a21.785 21.785 0 00-3.958-.252l2.46 9.69zM15.009 33.602a40.692 40.692 0 002.116-.187l-2.806-11.052c-.677.272-1.332.558-1.95.842l2.64 10.397zM33.351 29.158a39.85 39.85 0 001.937-.891l-2.55-10.043c-.679.027-1.39.077-2.126.144l2.74 10.79zM18.173 33.283c.411-.056.83-.113 1.253-.18l-2.872-11.311-1.22.31 2.84 11.181z" fill="#FFA000" opacity=".3"/><path d="M24.094 28.662c9.928-2.52 17.386-6.892 16.656-9.764-.729-2.872-9.368-3.157-19.296-.636-9.928 2.52-17.385 6.891-16.656 9.763.729 2.872 9.368 3.157 19.296.637z" fill="url(#paint3_linear_602_8602)"/><path d="M38.084 12.287c-2.91-1.459-10.013-1.237-17.95.778-7.936 2.015-14.284 5.208-16.146 7.877l-.929.236.838 3.301c.729 2.87 9.38 3.15 19.296.633 9.917-2.518 17.386-6.89 16.657-9.76l-.838-3.301-.928.236z" fill="url(#paint4_linear_602_8602)"/><path d="M7.225 26.521c1.31.23 2.641.334 3.972.309l-2.425-9.553A20.248 20.248 0 005.43 19.45l1.795 7.071zM34.293 21.04c1.18-.599 2.305-1.302 3.36-2.102l-1.861-7.334a22.105 22.105 0 00-3.959-.252l2.46 9.689zM13.27 26.755a44.865 44.865 0 002.116-.19L12.58 15.511c-.676.276-1.332.558-1.949.846l2.64 10.397zM31.612 22.307c.673-.29 1.341-.594 1.938-.89L31 11.372c-.68.027-1.39.077-2.127.145l2.74 10.79zM16.435 26.436c.41-.057.828-.118 1.251-.183L14.815 14.94l-1.22.31 2.84 11.185z" fill="#FFA000" opacity=".3"/><path d="M22.356 21.815c9.928-2.52 17.385-6.892 16.656-9.764-.729-2.872-9.368-3.157-19.296-.637-9.928 2.52-17.386 6.892-16.657 9.764.73 2.872 9.369 3.157 19.297.637z" fill="url(#paint5_linear_602_8602)"/><path d="M36.344 5.436c-2.91-1.455-10.01-1.233-17.948.782C10.46 8.233 4.112 11.425 2.25 14.092l-.929.236.838 3.3c.73 2.874 9.38 3.154 19.297.637 9.917-2.518 17.385-6.89 16.656-9.764l-.838-3.3-.929.235z" fill="url(#paint6_linear_602_8602)"/><path d="M5.485 19.67a20.91 20.91 0 003.973.313L7.033 10.43A20.536 20.536 0 003.69 12.6l1.795 7.07zM32.554 14.19a21.886 21.886 0 003.358-2.11l-1.86-7.327c-1.31-.2-2.634-.285-3.958-.252l2.46 9.69zM11.531 19.904a40.702 40.702 0 002.116-.187L10.841 8.665a44.78 44.78 0 00-1.95.842l2.64 10.397zM29.873 15.456c.672-.29 1.342-.59 1.938-.887l-2.55-10.043c-.679.027-1.39.074-2.127.141l2.74 10.79zM14.696 19.586c.41-.057.828-.119 1.251-.184l-2.87-11.308-1.22.31 2.839 11.182z" fill="#FFA000" opacity=".3"/><path d="M20.617 14.964c9.928-2.52 17.385-6.892 16.656-9.764-.73-2.872-9.369-3.157-19.297-.636C8.048 7.084.591 11.456 1.32 14.328c.73 2.872 9.369 3.157 19.297.636z" fill="url(#paint7_linear_602_8602)"/><path d="M17.123 7.876l-2.897 3.176 6.959-1.767 3.788-.962-7.85-.447z" fill="url(#paint8_linear_602_8602)"/><path d="M24.973 8.323l-3.788.962-6.96 1.767 4.063 1.411 6.685-4.14z" fill="url(#paint9_linear_602_8602)"/><path d="M15.319 8.364l-6.605 4.087 3.742-.95 2.863-3.137z" fill="url(#paint10_linear_602_8602)"/><path d="M8.714 12.451l7.756.444-4.013-1.394-3.743.95z" fill="url(#paint11_linear_602_8602)"/></symbol><symbol id="b12-6" viewBox="0 0 48 48"><circle cx="24" cy="24" r="23.5" fill="#53AE94" stroke="#fff"/><path d="M25.934 19.93l-.527-2.993 6.815-1.225-.803-4.562-18.53 3.33.802 4.563 6.815-1.225.527 2.988c-5.492 1.252-9.465 3.1-9.232 4.421.233 1.322 4.592 1.672 10.174.933l1.689 9.588 4.927-.886-1.688-9.588c5.48-1.25 9.443-3.095 9.21-4.417-.233-1.322-4.58-1.668-10.152-.931m.8 4.54c-.142.025-.845.208-2.438.494a50.712 50.712 0 01-2.49.392c-4.933.66-8.737.443-8.914-.562-.177-1.006 3.324-2.537 8.175-3.634l.589 3.343c.32-.057 1.253-.146 2.515-.373 1.518-.273 2.273-.476 2.413-.513l-.59-3.343c4.934-.661 8.716-.44 8.893.566.177 1.005-3.314 2.529-8.154 3.624" fill="#fff"/></symbol><symbol id="b12-7" viewBox="0 0 48 48"><circle cx="24" cy="24" r="23.5" fill="#627EEA" stroke="#fff"/><path d="M26.432 10.633l-1.899 10.02 7.726 5.451-5.827-15.47z" fill="#fff" fill-opacity=".6"/><path d="M26.45 10.647l-11.064 12.19 9.16-2.145 1.904-10.045z" fill="#fff"/><path d="M22.567 30.948l-1.29 6.809L31.95 27.672l-9.383 3.276z" fill="#fff" fill-opacity=".6"/><path d="M21.294 37.77l1.29-6.813-7.51-6.548 6.22 13.361z" fill="#fff"/><path d="M22.875 29.378l9.371-3.267-7.72-5.447-1.651 8.714z" fill="#fff" fill-opacity=".2"/><path d="M15.38 22.845l7.507 6.546 1.65-8.714-9.158 2.168z" fill="#fff" fill-opacity=".6"/></symbol><symbol id="b12-8" viewBox="0 0 48 48"><circle cx="24" cy="24" r="23.5" fill="#F7931A" stroke="#fff"/><path d="M33.905 21.664c.428-2.794-1.686-4.3-4.582-5.298l.96-3.786-2.271-.57-.932 3.683-1.863-.416.937-3.707-2.272-.57-.955 3.787c-.5-.115-.988-.229-1.465-.348l-3.164-.793-.619 2.458s1.704.393 1.664.416a1.21 1.21 0 011.063 1.34l-1.093 4.329-1.528 6.039a.84.84 0 01-.725.606.826.826 0 01-.33-.036c0 .034-1.67-.416-1.67-.416l-1.149 2.64 2.988.747c.568.137 1.096.285 1.63.422l-.966 3.827 2.272.57.96-3.787c.625.171 1.233.325 1.823.474l-.954 3.77 2.271.57.973-3.821c3.908.741 6.86.445 8.11-3.108 1.014-2.852-.025-4.511-2.085-5.589 1.503-.348 2.64-1.34 2.95-3.382l.022-.05zm-5.28 7.38c-.724 2.85-5.516 1.317-7.072.923l1.279-5.07c1.556.388 6.545 1.141 5.793 4.146zm.743-7.414c-.66 2.606-4.651 1.283-5.946.958l1.157-4.602c1.301.313 5.478.918 4.79 3.632v.012z" fill="#fff"/></symbol><symbol id="b12-9" viewBox="0 0 333 339"><g filter="url(#filter0_d_415_9226)"><path fill-rule="evenodd" clip-rule="evenodd" d="M59.86 50.505c-2.072.549-5.292 3.195-6.353 5.22-1.837 3.506-1.609 7.839.588 11.165 2.29 3.466 3.145 3.758 22.234 7.586 9.662 1.937 17.646 3.6 17.743 3.696.096.097-1.472 1.544-3.484 3.216-21.153 17.578-35.933 44.85-39.83 73.49-1.013 7.446-1.01 21.937.005 29.445 4.64 34.313 22.98 63.477 51.822 82.407 6.86 4.502 17.097 9.722 19.885 10.138 8.658 1.292 15.179-7.835 11.177-15.645-1.243-2.426-3.329-4.069-7.774-6.121-15.982-7.379-30.825-20.61-40.163-35.8-6.302-10.251-10.639-21.665-12.936-34.044-.697-3.757-.863-6.92-.846-16.125.02-10.661.11-11.869 1.312-17.526 4.653-21.898 15.178-39.78 31.892-54.18 1.748-1.507 3.259-2.658 3.357-2.557.097.101-1.49 8.492-3.528 18.645-2.038 10.154-3.707 19.362-3.709 20.463-.008 3.871 2.425 7.793 5.866 9.451 5.803 2.796 13.065-.128 14.989-6.037.728-2.236 12.94-63.112 12.94-64.507 0-.438-.318-1.863-.706-3.166-.904-3.03-3.706-5.896-6.714-6.865-2.783-.898-63.57-12.919-64.994-12.854-.58.027-1.827.254-2.773.505zm145.962 12.037c-6.512 2.09-9.57 9.386-6.469 15.437 1.264 2.467 3.323 4.058 8.223 6.353 14.511 6.795 28.481 18.773 37.47 32.127 7.65 11.364 12.618 23.631 15.182 37.485 1.086 5.869 1.234 24.578.238 30.145-3.386 18.934-10.896 34.665-23.203 48.608-3.295 3.733-12.384 12.012-12.763 11.627-.095-.097 1.498-8.478 3.54-18.623 2.042-10.146 3.711-19.4 3.708-20.565-.007-3.024-1.832-6.651-4.21-8.366-5.879-4.24-14.47-1.639-16.645 5.039-.805 2.471-12.94 63.187-12.94 64.742 0 3.847 3.565 8.554 7.42 9.797 1.212.391 16.23 3.48 33.374 6.865 29.685 5.861 31.288 6.128 33.621 5.608 9.35-2.083 11.401-14.671 3.212-19.709-.984-.605-7.431-2.102-18.976-4.406-9.618-1.919-17.565-3.567-17.662-3.663-.096-.097 1.264-1.347 3.022-2.78 1.759-1.432 5.314-4.774 7.902-7.425 17.962-18.41 28.884-40.847 32.376-66.515 1.013-7.446 1.01-21.937-.005-29.445-2.65-19.594-9.595-37.216-20.797-52.763-11.265-15.635-25.641-27.841-43.036-36.539-6.399-3.2-9.634-3.98-12.582-3.034z" fill="#28EB76"/></g></symbol><symbol id="b13-3" viewBox="0 0 51 51"><path d="M50.755 25.6C50.818 11.588 39.534.178 25.55.115 11.566.05.18 11.358.115 25.37.052 39.38 11.336 50.79 25.32 50.854c13.984.064 25.371-11.243 25.435-25.254z" fill="url(#paint0_linear_536_16312)"/><path d="M30.79 15.372c-4.93 0-5.32 3-5.32 3s-.34-3-5.26-3.07c-4.92-.07-6.72 5.58-5.48 9 1 2.61 6.69 8.36 9.27 10.86a1.85 1.85 0 002.55 0c2.64-2.44 8.51-8.06 9.52-10.65 1.31-3.37-.35-9.05-5.28-9.14z" fill="#fff"/></symbol><symbol id="b13-4" viewBox="0 0 87 75"><path d="M4.7 74.61h76.91a4.7 4.7 0 004.7-4.7V4.7a4.7 4.7 0 00-4.7-4.7H4.7A4.7 4.7 0 000 4.7v65.21a4.7 4.7 0 004.7 4.7z" fill="url(#paint0_linear_536_16315)"/><path d="M28.04 22.83a21.11 21.11 0 1029.86 0 21.19 21.19 0 00-29.86 0zm29.81 3h-6.76a40.991 40.991 0 00-2.62-6.34 19.08 19.08 0 019.35 6.38l.03-.04zM35.19 36.52a33.746 33.746 0 011-8.19h13.5a33.736 33.736 0 011 8.19h-15.5zm15.42 2.47c-.2 2.77-.687 5.51-1.45 8.18H36.72a40.263 40.263 0 01-1.45-8.18h15.34zm-7.67-20.28c1.005 0 2.008.076 3 .23A38.8 38.8 0 0149 25.87H36.89a38.865 38.865 0 013.07-6.93c.986-.153 1.983-.23 2.98-.23zm-5.54.82a42.01 42.01 0 00-2.61 6.34h-6.75a19.05 19.05 0 019.36-6.34zm-11 8.8h7.71a36.533 36.533 0 00-1.07 8.19h-9.11a19.001 19.001 0 012.45-8.15l.02-.04zm0 18.84a19.001 19.001 0 01-2.45-8.18h9.09a39.317 39.317 0 001.28 8.18H26.4zm1.64 2.47h7a52.336 52.336 0 002.6 6.42 19.11 19.11 0 01-9.6-6.42zm14.88 7.16a20.566 20.566 0 01-2.5-.16 58.014 58.014 0 01-3-7h10.9a56.536 56.536 0 01-3 7c-.79.1-1.584.153-2.38.16h-.02zm5.28-.74a52.32 52.32 0 002.6-6.42h7a19.11 19.11 0 01-9.58 6.42h-.02zm11.28-8.89h-7.93a39.993 39.993 0 001.28-8.18h9.11a18.939 18.939 0 01-2.44 8.18h-.02zm2.44-10.65h-9.05a37.116 37.116 0 00-1.08-8.15h7.71a19 19 0 012.44 8.15h-.02z" fill="#fff"/></symbol><symbol id="b13-5" viewBox="0 0 67 67"><path d="M66.267 33.404C66.337 15.096 51.589.197 33.325.127 15.06.057.198 14.842.128 33.15.058 51.458 14.806 66.356 33.07 66.427c18.264.07 33.127-14.715 33.197-33.023z" fill="url(#paint0_linear_536_16318)"/><path d="M28.357 44.389c5.39.09 10.85.16 15.8-.18 1.57-.11 2.93-2.6 1-3.39a3.54 3.54 0 002-1.7 1.67 1.67 0 00-.95-2.23c1.87.46 2.61-2.5 1.15-3.46a4.43 4.43 0 001.58-2.53 2.53 2.53 0 00-1.14-2.61 4.13 4.13 0 00-1.94-.34l-6.71-.05c.61-3.5.79-7.33-1-10.41-.54-.92-2-2-3.12-1.32-1.12.68-.78 2.33-.73 3.38a11.83 11.83 0 01-6.15 10.81s.27 9.34.21 14.03zM26.397 30.358h-8.14v14.02h8.14v-14.02z" fill="#F7F7F7"/></symbol><symbol id="b13-6" viewBox="0 0 85 65"><path d="M7.91 0h68.17a7.93 7.93 0 017.93 7.93v48.89a7.93 7.93 0 01-7.93 7.93H10.17A10.17 10.17 0 010 54.58V7.93A7.93 7.93 0 017.91 0z" fill="url(#paint0_linear_536_16323)"/><path d="M29.15 19.83v26.4a3.27 3.27 0 004.88 2.85l23.23-13.2a3.27 3.27 0 000-5.69L34.03 16.98a3.27 3.27 0 00-4.88 2.85z" fill="#fff"/></symbol><symbol id="b13-7" viewBox="0 0 115 36"><path d="M107.997.823L5.197 7.231a4.98 4.98 0 00-4.66 5.28l1.146 18.395a4.98 4.98 0 005.28 4.66l102.801-6.408a4.98 4.98 0 004.66-5.28l-1.146-18.394a4.981 4.981 0 00-5.281-4.66z" fill="url(#paint0_linear_536_16326)"/><path d="M24.17 12.782l1.545 3.911 4.222-.263a.68.68 0 01.476 1.203l-3.255 2.748 1.556 3.91a.68.68 0 01-.95.821l-3.57-2.272-3.328 2.692a.679.679 0 01-1.045-.696l1.048-4.073-3.568-2.273a.68.68 0 01.323-1.252l4.221-.264 1.059-4.073a.68.68 0 011.265-.12zM46.496 11.39l1.556 3.91 4.222-.262a.68.68 0 01.476 1.203l-3.236 2.746 1.556 3.91a.68.68 0 01-1 .825l-3.559-2.273-3.258 2.698a.68.68 0 01-1.095-.694l1.058-4.073-3.568-2.273a.68.68 0 01.323-1.252l4.212-.263 1.058-4.074a.68.68 0 011.255-.128zM68.822 9.999l1.557 3.91 4.221-.263a.68.68 0 01.476 1.203l-3.255 2.748 1.546 3.911a.68.68 0 01-.95.82l-3.569-2.272-3.258 2.698a.68.68 0 01-1.096-.693l.99-4.07-3.57-2.272a.68.68 0 01.324-1.252l4.221-.263 1.049-4.074A.68.68 0 0168.822 10zM91.159 8.606l1.546 3.912 4.222-.264a.68.68 0 01.476 1.203l-3.256 2.748 1.527 3.913a.68.68 0 01-1 .824l-3.57-2.273-3.257 2.698a.68.68 0 01-1.046-.696l1.049-4.073-3.56-2.303a.68.68 0 01.322-1.253l4.222-.263 1.049-4.073a.69.69 0 011.276-.1z" fill="#E7A773"/></symbol><symbol id="b13-8" viewBox="0 0 14 14"><path d="M8.88.21H4.53v4.53H0v4.35h4.53v4.52h4.35V9.09h4.52V4.74H8.88V.21z" fill="#F7EAF9"/></symbol><symbol id="b14-4" viewBox="0 0 61 61"><path d="M60.22 29.94A30.11 30.11 0 1129.94 0a30.1 30.1 0 0130.28 29.94z" fill="#B4F9BF"/><path d="M52.52 29.48a22.89 22.89 0 11-45.78.26 22.89 22.89 0 0145.78-.26z" fill="#7AE271"/><path d="M53.17 30.48A22.58 22.58 0 1130.46 8a22.57 22.57 0 0122.71 22.48z" fill="#5EFF64"/><path d="M53.17 30.48A22.58 22.58 0 1130.46 8a22.57 22.57 0 0122.71 22.48z" fill="#8CF2A9"/><path d="M31.48 28.62v-5.78c1.057.124 2.093.39 3.08.79.505.257.987.558 1.44.9l.08-.18.88-2.09.2-.48-1-1.07-.49.22a10.88 10.88 0 00-4.19-1.18v-3.18l-1-.79v.8h-1.42v3.24c-4.46.45-6.57 3-6.55 5.93 0 4 3.44 5 6.62 5.75v5.72a10.9 10.9 0 01-5.74-2.14l-1.27 2.9a12.58 12.58 0 007 2.34v2.39h-1.11l1.12.75h2.34v-3.21c4.49-.48 6.62-3 6.6-5.93.06-3.96-3.41-4.94-6.59-5.7zm-2.35-.59c-1.67-.47-2.9-1.1-2.91-2.47-.01-1.37.85-2.29 2.88-2.62l.03 5.09zm2.4 9.12v-5.06c1.72.47 3 1.12 3 2.53-.03 1.23-.91 2.21-3 2.53z" fill="#7AE271"/><path d="M30.57 39.48v3.21h-2.35v-3.17a12.54 12.54 0 01-7-2.34l1.27-2.9a10.9 10.9 0 005.74 2.14V30.7c-3.18-.76-6.59-1.77-6.62-5.75 0-2.92 2.09-5.48 6.56-5.93v-3.24h2.34v3.18a12.26 12.26 0 015.82 1.71l-1.15 2.9a11.772 11.772 0 00-4.65-1.52v5.78c3.19.76 6.66 1.74 6.68 5.72-.01 2.93-2.15 5.46-6.64 5.93zm-2.42-12.24v-5.09c-2 .32-2.88 1.36-2.87 2.62.01 1.26 1.21 2.01 2.87 2.48v-.01zm5.37 6.59c0-1.41-1.28-2.06-3-2.53v5.06c2.12-.31 3-1.29 3-2.52v-.01z" fill="#fff"/></symbol><symbol id="b16-10" viewBox="0 0 88 70"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.602.275C14.713.672.755 14.625.323 15.548c-.406.868-.431 2.01-.065 2.893.185.446 2.555 2.952 7.32 7.74 7.552 7.588 7.968 7.931 9.622 7.926.953-.002 2.03-.462 2.723-1.164.975-.986 1.082-1.377 1.15-4.204.073-3.01-.077-2.83 1.95-2.351 3.835.905 7.774 3.827 9.832 7.295.918 1.546 1.793 3.966 2.082 5.76.118.73.187 6.033.187 14.44.002 11.588.037 13.37.276 13.944.35.838.883 1.408 1.715 1.835.61.313 1.114.338 6.885.338s6.274-.025 6.885-.338c.832-.427 1.365-.998 1.715-1.835.24-.574.275-2.372.28-14.033.007-14.595.017-14.752 1.037-17.528 1.761-4.794 6.164-8.71 11.115-9.889 1.963-.467 1.822-.643 1.895 2.362.068 2.827.175 3.218 1.15 4.204.694.702 1.77 1.162 2.723 1.164 1.654.005 2.07-.338 9.621-7.925 4.766-4.789 7.136-7.295 7.321-7.741.366-.882.34-2.024-.065-2.893-.221-.475-2.736-3.104-7.583-7.929C72.185-.25 72.375-.103 70.443.037c-1.305.095-2.279.71-2.96 1.872-.478.812-.501.962-.559 3.552l-.06 2.704-.561.083c-.309.045-1.28.172-2.158.28-6.737.833-13.8 4.268-18.664 9.08L44 19.073l-1.464-1.447c-4.916-4.856-11.9-8.27-18.592-9.087-.927-.114-1.938-.244-2.247-.29l-.561-.084-.06-2.704c-.058-2.59-.081-2.74-.558-3.552C19.792.673 18.852.113 17.397.049c-.779-.034-1.383.042-1.795.226z" fill="#FA8864"/></symbol><symbol id="b16-11" viewBox="0 0 119 71"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.466 1.226c-.889.397-14.847 14.35-15.278 15.273-.406.868-.432 2.01-.066 2.892.185.447 2.555 2.953 7.321 7.742 7.551 7.587 7.967 7.93 9.62 7.925.954-.002 2.03-.463 2.724-1.164.975-.986 1.082-1.377 1.15-4.204.074-3.011 14.059-2.78 16.086-2.302 3.835.905 7.774 3.827 9.832 7.295.918 1.546 1.793 3.966 2.082 5.76.118.73.187 6.033.187 14.44.002 11.588.037 13.37.277 13.944.35.838.882 1.408 1.714 1.835.61.313 1.114.338 6.885.338s6.274-.025 6.885-.338c.832-.427 1.365-.997 1.715-1.835.24-.574.275-2.372.28-14.033.007-14.595.017-14.752 1.037-17.528 1.761-4.794 6.164-8.71 11.115-9.889 1.963-.467 17.728-.643 17.801 2.362.069 2.827.175 3.218 1.15 4.204.694.701 1.771 1.162 2.724 1.164 1.653.005 2.069-.338 9.62-7.925 4.766-4.789 7.136-7.295 7.322-7.742.365-.881.34-2.023-.065-2.892-.222-.475-2.736-3.104-7.584-7.929-7.909-7.871-7.718-7.722-9.651-7.582-1.304.095-2.279.71-2.96 1.872-.477.812-.5.962-.558 3.552l-.06 2.704-16.468.083c-.309.045-1.28.171-2.158.28-6.738.833-13.8 4.268-18.664 9.08l-1.48 1.465-1.465-1.447c-4.916-4.856-11.9-8.27-18.592-9.088-.927-.113-1.938-.243-2.247-.29L22 9.117l-.06-2.705c-.058-2.59-.081-2.74-.558-3.552-.726-1.236-1.665-1.796-3.12-1.86-.78-.033-1.383.043-1.796.227z" fill="#FA8864"/></symbol><symbol id="b16-7" viewBox="0 0 69 61"><path fill-rule="evenodd" clip-rule="evenodd" d="M53.127.173c-.733.265-1.37.7-1.716 1.172-.776 1.06-.915 2.511-.35 3.655.643 1.305 1.611 1.858 3.491 1.993 2.366.171 3.904.81 5.288 2.193 1.47 1.47 2.229 3.482 2.238 5.934.009 2.325-.626 4.164-1.959 5.673-.851.965-1.783 1.575-3.15 2.063l-1.057.378-21.745.074c-23.709.081-22.09.026-24.512.83-4.866 1.617-8.25 5.648-9.42 11.223-.314 1.497-.314 4.656 0 6.153 1.192 5.675 4.461 9.526 9.55 11.247 2.396.81 2.393.81 18.981.811l15.13.001 1.652-1.672c.909-.92 1.652-1.734 1.652-1.81 0-.074-.745-.886-1.656-1.804l-1.657-1.668-14.855-.005c-16.44-.005-16.15.009-17.985-.87-1.902-.913-3.387-2.848-3.908-5.092-.273-1.178-.273-3.252 0-4.43.637-2.746 2.601-4.844 5.293-5.652.744-.224 2.31-.246 22.545-.318 20.187-.072 21.818-.095 22.758-.32 5.772-1.377 9.7-5.524 11.023-11.639.343-1.586.317-4.898-.05-6.526C67.25 5.327 62.864 1.123 56.637.198c-1.72-.256-2.85-.264-3.51-.025zM45.85 39.246c-1.579.485-2.652 1.979-2.54 3.535.093 1.303.43 1.782 3.278 4.652l2.634 2.655-2.747 2.8c-2.463 2.51-2.772 2.875-2.986 3.533-.427 1.316-.082 2.717.898 3.648.75.712 1.293.928 2.342.93 1.503.005 1.782-.208 6.383-4.884 3.554-3.613 4.07-4.191 4.266-4.782.282-.85.283-1.62.003-2.474-.196-.596-.704-1.16-4.491-4.983-3.787-3.824-4.346-4.337-4.936-4.534-.698-.233-1.532-.271-2.104-.096z" fill="#FA8864"/></symbol><symbol id="b16-8" viewBox="0 0 41 54"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.4.414c-.066.056-8.684 8.035-19.152 17.732C9.091 28.479 1.15 35.9 1.061 36.076c-.111.216-.12.396-.036.657.136.419.43.625.89.623.173 0 5.024-.703 10.78-1.56 5.757-.858 10.486-1.552 10.51-1.542.023.01 1.92 4.073 4.216 9.03 2.296 4.958 4.247 9.156 4.337 9.33.35.678 1.299.716 1.621.064.082-.164 1.808-11.81 3.836-25.878C40.072 6.994 40.88 1.144 40.798.876c-.172-.555-.979-.822-1.399-.462z" fill="#FA8864"/></symbol><symbol id="b16-9" viewBox="0 0 46 55"><path d="M17.722 16.198c.222.173.202.354-.084.794-.3.46-.321.716-.109 1.328.145.416.233.788.196.825-.22.221-3.952 2.201-4.443 2.358-.326.103-.913.424-1.305.713-.391.29-1.646 1.03-2.789 1.648l-2.077 1.122-3.076-1.742C2.342 22.287.955 21.443.952 21.37c-.004-.074 2.903-1.747 6.458-3.72l6.465-3.586 1.78.956c.978.526 1.908 1.057 2.067 1.18zM14.479 30.94c3.843 2.108 7.075 3.917 7.182 4.02.106.102-1.512 1.113-3.596 2.247l-3.789 2.062-7.136-3.877C3.215 33.259.002 31.458 0 31.39c-.002-.068 1.678-1.058 3.733-2.198L7.48 27.11c.006-.003 3.155 1.72 6.999 3.828z" fill="#FA8864"/><path d="M22.297 45.7V55l-7.888-3.996-7.888-3.995-.065-4.99c-.035-2.743.018-5.064.119-5.156.1-.093 1.818.731 3.817 1.83 1.999 1.1 3.76 1.996 3.915 1.994.154-.003 1.988-.966 4.076-2.14 2.088-1.175 3.823-2.138 3.855-2.14.032-.003.06 4.179.06 9.294zM27.907 38.573c2.132 1.194 4.031 2.112 4.22 2.039.19-.074 1.914-.997 3.832-2.053 1.919-1.056 3.526-1.92 3.573-1.92.046 0 .084 2.334.084 5.187v5.186l-7.77 3.928a3456.47 3456.47 0 01-7.947 4.01c-.098.046-.178-4.109-.178-9.233 0-5.123.07-9.316.155-9.316.085 0 1.9.977 4.03 2.172z" fill="#FA8864"/><path d="M42.485 29.226c3.733 2.067 3.816 2.13 3.269 2.472-.31.193-3.566 1.978-7.237 3.966l-6.674 3.616-3.703-2.077c-2.037-1.143-3.645-2.139-3.573-2.214.104-.109 13.835-7.807 14.034-7.868.03-.01 1.777.938 3.884 2.105zM16.436 23.112l.393 1.251 1.551.06 1.552.058.518-1.072c.285-.59.608-1.072.716-1.072.188 0 2.563 1.148 2.773 1.34.055.051-.148.623-.45 1.271l-.55 1.18.727.831c.4.458.822 1.002.937 1.21.19.342.308.343 1.236.014.564-.2 1.163-.363 1.33-.363.167 0 .518.638.78 1.417.542 1.61.497 1.7-1.085 2.172-.852.254-1.008.396-1.008.922 0 .512-.243.757-1.365 1.377l-1.365.754-1.125-.64c-.963-.547-1.125-.745-1.126-1.378-.001-.883-.853-2.236-1.669-2.65-.803-.409-2.245-.38-3.094.06-.694.361-.752.34-4.028-1.462-1.829-1.005-3.268-1.886-3.198-1.956.07-.07.665.126 1.323.436l1.196.563.575-.623c.315-.342.812-.79 1.103-.995.525-.369.526-.384.132-1.621-.219-.687-.32-1.324-.224-1.415.18-.172 2.355-.875 2.798-.904.14-.01.43.547.647 1.235z" fill="#FA8864"/><path fill-rule="evenodd" clip-rule="evenodd" d="M34.82.549c.746.213 1.445.47 1.554.572.109.101.01.857-.22 1.678l-.416 1.494.575.457c.316.251.921.78 1.345 1.174l.77.717 1.303-.749c.716-.412 1.408-.684 1.537-.604.303.189 1.907 3.066 1.907 3.422 0 .15-.63.591-1.4.982l-1.4.71.208.902c.114.497.21 1.296.214 1.777.005.844.05.89 1.25 1.28 1.83.594 1.877.684 1.324 2.494-.665 2.173-.74 2.224-2.48 1.695l-1.447-.44-.373.624c-.206.343-.692.97-1.081 1.392l-.708.768.715 1.326c.596 1.106.664 1.387.41 1.694-.302.366-2.87 1.76-3.24 1.76-.107 0-.51-.598-.897-1.33l-.704-1.33-1.041.139c-.573.076-1.386.138-1.807.138-.733 0-.783.06-1.164 1.422-.218.782-.489 1.48-.6 1.55-.236.146-3.347-.77-3.673-1.08-.132-.128-.055-.799.196-1.706l.413-1.495-.548-.359c-.302-.197-.929-.7-1.393-1.117l-.844-.759-1.272.7c-.7.384-1.36.698-1.468.698-.207 0-1.864-3.16-1.864-3.554 0-.126.561-.531 1.246-.9.953-.513 1.241-.797 1.229-1.207l-.008-.237-.052-1.604-.042-1.304-1.364-.39c-.75-.215-1.453-.473-1.561-.574-.203-.189.68-3.535 1.03-3.905.11-.116.82.005 1.618.276l1.422.482 1.124-1.455 1.125-1.455-.63-1.207c-.346-.665-.629-1.34-.629-1.5 0-.361 3.255-2.035 3.573-1.837.128.079.502.678.831 1.332l.6 1.188 1.709-.163c.94-.09 1.775-.2 1.855-.245.08-.046.283-.595.452-1.221.365-1.356.668-1.8 1.11-1.63.18.069.936.3 1.682.514zm-7.316 14.254c-.876-1.82-.158-4.119 1.555-4.972.391-.195 1.203-.357 1.803-.36 2.963-.015 4.715 3.52 2.918 5.886-.789 1.04-1.73 1.498-3.08 1.498-1.473 0-2.536-.682-3.196-2.052z" fill="#FA8864"/></symbol><symbol id="b18-2" viewBox="0 0 82 68"><path d="M49.67 10.288c-7.343 3.054-22.021 9.377-44.033 18.967C2.063 30.676.19 32.067.02 33.426c-.288 2.299 2.59 3.203 6.508 4.435.533.168 1.085.342 1.651.525 3.856 1.254 9.042 2.72 11.737 2.778 2.446.053 5.175-.955 8.189-3.025C48.67 24.257 59.288 17.24 59.953 17.09c.47-.107 1.122-.242 1.564.151.442.393.398 1.136.351 1.335-.284 1.216-11.58 11.717-17.426 17.151l-.147.137c-1.744 1.622-2.975 2.766-3.232 3.034a66.304 66.304 0 01-1.775 1.755c-3.581 3.452-6.268 6.041.149 10.27a593.789 593.789 0 017.993 5.375l.019.013a557.845 557.845 0 008.839 5.931c.879.576 1.719 1.175 2.537 1.758l.012.009c3.129 2.23 5.939 4.234 9.412 3.914 2.017-.185 4.101-2.082 5.16-7.74 2.501-13.373 7.418-42.347 8.554-54.286.1-1.046-.025-2.385-.126-2.972-.1-.588-.31-1.425-1.075-2.045-.904-.734-2.3-.889-2.926-.879-2.84.051-7.197 1.566-28.166 10.288z" fill="#fff"/></symbol><symbol id="b19-5" viewBox="0 0 62 62"><path d="M46.123 46.094c8.47-8.47 8.47-22.203 0-30.673-8.47-8.47-22.203-8.47-30.673 0-8.47 8.47-8.47 22.203 0 30.673 8.47 8.47 22.203 8.47 30.673 0z" fill="#FF4608"/><path d="M37.136 32.487c1.333-.77 1.333-2.694 0-3.464l-9.742-5.626c-1.334-.77-3 .192-3 1.732v11.252c0 1.54 1.666 2.502 3 1.732l9.742-5.626z" fill="#fff"/></symbol><symbol id="b20-15" viewBox="0 0 47 47"><path d="M23.07 46.14a23.07 23.07 0 1123.07-23.07 23.09 23.09 0 01-23.07 23.07zm0-35.34a12.27 12.27 0 1012.27 12.27 12.28 12.28 0 00-12.27-12.26v-.01z" fill="url(#paint0_linear_581_13798)"/><path d="M23.29 35.34h-.22a12.58 12.58 0 01-12.16-13.8c-3.75-.88-7.29-.53-10.53-2.55a22.85 22.85 0 00-.37 4.08 23.09 23.09 0 0023.06 23.07h.35c.03-3.61.01-7.21-.13-10.8z" fill="#CAC5F9"/><path d="M10.91 21.55a12.29 12.29 0 0112.16-10.74c.59.005 1.177.052 1.76.14C26.07 7.52 27.3 4.09 28.64.7a22.72 22.72 0 00-5.57-.69 23.09 23.09 0 00-23 21.77c3.607-.1 7.22-.177 10.84-.23z" fill="#B539DA"/></symbol><symbol id="b20-16" viewBox="0 0 15 15"><path d="M14.74 4.946h-1.469a5.85 5.85 0 00-.365-.713l.889-1.09a.232.232 0 00-.029-.318L11.437.87a.22.22 0 00-.312.03l-.773.952a5.767 5.767 0 00-.989-.38V.224a.227.227 0 00-.065-.16A.219.219 0 009.142 0h-3.02a.224.224 0 00-.155.067.232.232 0 00-.066.158v1.31c-.332.11-.653.251-.96.42L4.086.899a.222.222 0 00-.15-.08.217.217 0 00-.162.051L1.45 2.825a.224.224 0 00-.082.152.229.229 0 00.048.166l1.052 1.29c-.09.158-.172.321-.245.489H.226a.224.224 0 00-.158.065.232.232 0 00-.068.16V8.22a.228.228 0 00.066.16.22.22 0 00.16.065h1.603a6.04 6.04 0 00.548 1.657l-1.21 1.466a.228.228 0 00.029.313l2.328 1.955a.221.221 0 00.162.051.219.219 0 00.15-.08l.96-1.159c.364.202.747.366 1.143.489v1.637c.002.06.025.116.067.158A.223.223 0 006.16 15h3.02a.218.218 0 00.157-.066.225.225 0 00.064-.159v-1.574c.431-.116.848-.28 1.244-.488l.893 1.094a.22.22 0 00.236.072.221.221 0 00.076-.042l2.329-1.955a.226.226 0 00.029-.313L13.094 10.2a6.045 6.045 0 00.605-1.774h1.08a.219.219 0 00.156-.066.227.227 0 00.065-.159V5.127a.23.23 0 00-.094-.144.223.223 0 00-.165-.037zm-6.986 5.42a2.906 2.906 0 01-1.635-.504 2.985 2.985 0 01-1.084-1.345 3.046 3.046 0 01-.167-1.731 3.013 3.013 0 01.805-1.534 2.928 2.928 0 011.507-.82 2.895 2.895 0 011.7.17c.539.227.998.611 1.322 1.104.323.493.496 1.072.496 1.664 0 .394-.075.784-.223 1.148a2.996 2.996 0 01-.638.972 2.936 2.936 0 01-.955.65c-.358.15-.74.227-1.128.227z" fill="#CAC5F9"/></symbol><symbol id="b20-17" viewBox="0 0 28 28"><path d="M27.607 9.115h-2.744a11.628 11.628 0 00-.675-1.32l1.657-2.014a.418.418 0 00-.056-.579l-4.35-3.6a.406.406 0 00-.58.055l-1.466 1.778a11.118 11.118 0 00-1.843-.7V.413A.413.413 0 0017.137 0h-5.645a.413.413 0 00-.413.413V2.82a11.05 11.05 0 00-1.828.77L7.645 1.653a.408.408 0 00-.58-.056L2.72 5.197a.408.408 0 00-.055.58l1.959 2.371c-.166.307-.322.625-.458.947H.413A.413.413 0 000 9.508v5.645a.413.413 0 00.413.413h3.022c.19 1.05.53 2.067 1.007 3.022L2.19 21.312a.413.413 0 00.055.584l4.346 3.596a.413.413 0 00.584-.055l1.758-2.126c.68.387 1.396.702 2.14.942v3.022a.414.414 0 00.413.413h5.645a.413.413 0 00.413-.413v-2.896c.807-.224 1.586-.54 2.322-.942l1.667 2.015a.413.413 0 00.584.055l4.346-3.596a.415.415 0 00.055-.584l-2.074-2.518a11.081 11.081 0 001.128-3.253h2.014a.413.413 0 00.413-.413V9.528a.413.413 0 00-.393-.413zm-13.093 9.931a5.505 5.505 0 110-11.01 5.505 5.505 0 010 11.01z" fill="#CAC5F9"/><path d="M14.222 19.046a5.495 5.495 0 010-10.973V.015h-2.73a.413.413 0 00-.413.413v2.407a11.05 11.05 0 00-1.828.77L7.645 1.668a.408.408 0 00-.58-.055l-4.346 3.6a.408.408 0 00-.055.58l1.959 2.371c-.166.308-.322.625-.458.947H.413A.413.413 0 000 9.523v5.645a.413.413 0 00.413.413h3.022c.19 1.05.53 2.067 1.007 3.022L2.19 21.327a.413.413 0 00.055.584l4.346 3.596a.411.411 0 00.584-.055l1.758-2.125c.68.386 1.396.701 2.14.941v3.022a.414.414 0 00.413.413h2.73l.005-8.657z" fill="#A797FC"/></symbol><symbol id="b20-18" viewBox="0 0 317 249"><path d="M137.572 240.163c10.41 2.295 21.488 0 33.444-8.502 42.94-30.594 73.134-97.758 121.447-102.264 18.207-1.795 36.326 6.118 52.537 22.943V0H-38v54.654c15.524-4.695 31.388.054 45.569 13.64 44.654 41.962 79.572 160.78 130.003 171.869z" fill="url(#paint0_linear_909_25543)"/><path d="M128.935 218.261c-.868 18.448-9.575 28.905-17.362 30.423-13.504 2.622-26.76-11.356-37.6-30.732-10.838-19.377-19.771-43.956-29.429-66.574-9.762-23.289-19.741-38.928-33.15-46.949-3.78-2.261-7.7-4.264-11.394-7.33V0h70.723c4.401 7.515 7.843 17.219 9.501 29.73 1.958 14.804.95 30.774 1.302 46.269.869 37.731 10.54 73.655 24.599 91.277 4.944 6.193 10.383 10.323 14.993 17.817 4.61 7.495 8.429 19.903 7.817 33.168z" fill="url(#paint1_linear_909_25543)"/><path d="M317 101.24v110.781c-6.886-15.683-15.652-27.002-25.34-32.714-17.898-10.438-37.476-1.944-53.625 17.704-12.879 15.662-24.064 38.259-38.064 48.622-8.852 6.571-21.203 4.423-24.343-14.509-2.851-17.212 4.485-35.011 12.41-41.72 7.925-6.71 16.862-7.191 24.488-15.353 9.933-10.684 16.014-32.394 24.099-48.708 12.958-26.143 31.096-37.949 48.845-39.242 10.88-.812 22.573 3.173 31.53 15.139z" fill="url(#paint2_linear_909_25543)"/></symbol><symbol id="b20-19" viewBox="0 0 123 79"><path opacity=".45" d="M123 79H0V0c13.176 2.645 25.438 10.151 33.018 21.265 5.385 7.879 8.556 17.23 14.793 24.456a37.204 37.204 0 0025.252 12.66c8.854.62 17.901-1.944 26.55.074C110.142 60.908 117.492 69.34 123 79z" fill="#A797FC"/></symbol><symbol id="b20-20" viewBox="0 0 114 57"><path opacity=".45" d="M126 28.012v28.511H24.599c-3.19 0-8.653 1.073-11.672 0-14.287-5.07-15.844-31.891-9-42.81C13.62-1.772 37.796-4.041 51.907 6.392c7.562 5.612 13.114 14.342 22.177 16.955 9.73 2.763 19.795-2.662 29.897-3.267 8.061-.48 15.97 2.675 22.02 7.932z" fill="#A797FC"/></symbol><symbol id="b21-4" viewBox="0 0 99 100"><path d="M89.154 59.425c5.198-22.02-8.44-44.085-30.46-49.282-22.022-5.198-44.086 8.44-49.283 30.46-5.198 22.021 8.44 44.086 30.46 49.283 22.021 5.198 44.086-8.44 49.283-30.461z" fill="#9E4D4D"/><path d="M89.763 53.667c3.62-22.4-11.604-43.492-34.004-47.112C33.36 2.935 12.268 18.158 8.648 40.557 5.027 62.957 20.251 84.05 42.65 87.67c22.4 3.62 43.492-11.603 47.113-34.003z" fill="#F56060"/><path fill-rule="evenodd" clip-rule="evenodd" d="M54.51 26.096c-.728.108-1.145.338-1.713.947-.465.5-.624.95-6.684 18.934-6.004 17.815-6.206 18.443-6.145 19.104.143 1.565 1.416 2.684 3.043 2.676.885-.004 1.557-.303 2.171-.966.474-.51.61-.896 6.676-18.898 4.175-12.387 6.193-18.533 6.193-18.856 0-1.83-1.67-3.218-3.54-2.941zM33.27 35.033c-.205.052-.602.229-.883.393-.765.45-9.894 9.563-10.224 10.207-.196.383-.269.727-.27 1.28-.005 1.271.107 1.409 5.553 6.776 4.579 4.513 4.944 4.845 5.536 5.035 1.21.389 2.407.053 3.272-.92.526-.59.742-1.177.738-2.003-.005-1.088-.218-1.359-4.148-5.252l-3.67-3.636 3.676-3.638c3.22-3.186 3.705-3.713 3.91-4.248.13-.336.235-.784.235-.996 0-.608-.315-1.496-.69-1.944-.678-.81-2.073-1.295-3.035-1.054zm30.115 0c-.619.155-1.44.697-1.798 1.184-.62.849-.745 2.147-.29 3.047.104.207 1.838 2.012 3.853 4.012l3.663 3.635-3.719 3.696c-4.127 4.1-4.177 4.169-4.079 5.465.06.788.315 1.366.83 1.888a3.09 3.09 0 003.161.764c.592-.19.957-.522 5.535-5.035 5.443-5.364 5.557-5.503 5.557-6.776 0-.607-.064-.874-.326-1.348-.427-.775-9.67-9.92-10.38-10.27-.56-.277-1.472-.396-2.007-.262z" fill="#fff"/></symbol><symbol id="b21-5" viewBox="0 0 78 78"><path d="M51.083 57.95C61.75 51.074 64.825 36.85 57.95 26.183c-6.876-10.668-21.099-13.742-31.767-6.866-10.668 6.875-13.742 21.098-6.866 31.766 6.875 10.668 21.098 13.742 31.766 6.867z" fill="#354C5F"/><path d="M33.77 57.844c12.405 2.681 24.636-5.201 27.317-17.607 2.682-12.406-5.2-24.636-17.606-27.318-12.406-2.681-24.636 5.202-27.318 17.607-2.681 12.406 5.201 24.636 17.607 27.318z" fill="#3E84B9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36.854 21.91a4.972 4.972 0 00-4.102 2.168c-.407.599-.546.968-.907 2.412-.405 1.618-.63 2.128-1.34 3.049-.64.828-1.848 1.745-2.774 2.104-.886.344-1.07.492-1.167.94-.097.448.01.66.675 1.338.694.71 1.416 2.044 1.657 3.063.266 1.131.26 1.689-.04 3.33-.16.883-.241 1.453-.243 1.724a5.025 5.025 0 00.839 2.748c.694 1.02 1.615 1.691 2.741 1.997.415.113.543.13.697.094.803-.188 1.065-1.085.499-1.71-.08-.088-.267-.179-.621-.302-.851-.297-1.267-.607-1.674-1.247a2.758 2.758 0 01-.451-1.45c-.012-.322.02-.558.172-1.263.373-1.725.386-2.902.046-4.335a8.721 8.721 0 00-1.248-2.883l-.341-.519.525-.33a8.72 8.72 0 002.327-2.11c.901-1.166 1.376-2.243 1.749-3.968.152-.705.22-.933.364-1.22.245-.49.557-.841 1.01-1.136.636-.414 1.142-.524 2.04-.444.55.05.686.025.99-.186.078-.054.195-.203.259-.33a1.012 1.012 0 00-.295-1.256c-.192-.148-.837-.277-1.387-.279zm8.242 1.757c-.3.087-.544.276-.679.526-.219.404-.146.787.234 1.226.039.044.3.16.58.258.855.299 1.27.607 1.678 1.248.29.455.43.904.45 1.45.013.322-.02.559-.172 1.263-.103.477-.21 1.085-.237 1.35a8.86 8.86 0 001.42 5.84l.358.546-.552.35a8.86 8.86 0 00-3.705 4.732c-.084.253-.238.85-.341 1.327-.152.705-.22.933-.364 1.221-.245.49-.557.84-1.01 1.136-.637.414-1.142.524-2.044.443-.296-.027-.581-.03-.635-.005-.323.149-.49.288-.609.51-.117.215-.128.266-.11.518a.858.858 0 00.201.525c.217.293.362.361.96.451 1.102.166 2.225-.076 3.25-.7a5 5 0 001.788-1.927c.206-.396.436-1.143.63-2.044.33-1.526.901-2.582 1.955-3.617.54-.53 1.527-1.16 2.298-1.464.746-.295.846-.388.953-.88.106-.492.053-.617-.505-1.195-.575-.595-1.215-1.577-1.488-2.282-.532-1.377-.615-2.576-.286-4.102.195-.9.294-1.676.27-2.121a5 5 0 00-.833-2.493c-.702-1.033-1.626-1.7-2.763-1.998-.43-.113-.56-.13-.692-.092z" fill="#fff"/></symbol><symbol id="b21-6" viewBox="0 0 50 50"><path d="M44.893 29.923c2.617-11.088-4.25-22.199-15.339-24.816C18.466 2.49 7.356 9.357 4.74 20.446c-2.617 11.088 4.25 22.198 15.338 24.816 11.088 2.617 22.199-4.25 24.816-15.339z" fill="#818181"/><path d="M45.199 27.024c1.823-11.28-5.843-21.9-17.122-23.723-11.28-1.823-21.9 5.843-23.723 17.121-1.823 11.28 5.843 21.9 17.122 23.724 11.279 1.822 21.9-5.843 23.723-17.122z" fill="#EDEDED"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.356 11.002c-.28.102-.637.427-.78.709a3.04 3.04 0 00-.195.644 4.555 4.555 0 01-.092.427c-.041.041-.59.264-.65.264-.039 0-.247-.12-.462-.267-.609-.415-1.07-.463-1.648-.171-.282.142-1.123.998-1.26 1.284-.255.531-.19 1.014.224 1.629l.273.405-.145.348-.144.349-.367.06a3.8 3.8 0 00-.572.14c-.3.114-.632.43-.79.754-.134.272-.139.308-.138 1.047 0 .823.028.945.304 1.345.244.354.522.482 1.426.654.137.026.169.068.29.375l.135.346-.196.281c-.356.51-.425.687-.428 1.096-.004.531.134.787.752 1.395.599.59.816.702 1.34.7.41-.003.584-.072 1.095-.429l.281-.196.345.136c.307.12.349.152.375.289.136.713.188.874.361 1.123.145.208.258.302.523.437l.339.173h.77c.88 0 1.052-.05 1.45-.416.264-.244.402-.546.489-1.07l.065-.39.347-.141.348-.142.405.273c.455.306.777.408 1.152.364.394-.047.668-.214 1.182-.723.586-.58.751-.885.746-1.383-.003-.373-.085-.586-.391-1.027-.12-.17-.217-.34-.217-.376 0-.056.23-.619.27-.66.007-.007.199-.048.426-.091.519-.098.814-.246 1.07-.538.314-.357.366-.58.346-1.492-.016-.69-.03-.8-.128-.985-.267-.503-.639-.75-1.293-.857-.204-.033-.391-.079-.416-.102-.026-.022-.106-.18-.179-.35l-.133-.31.22-.309c.326-.462.427-.722.426-1.097 0-.5-.127-.73-.746-1.346-.622-.619-.85-.746-1.342-.745-.377.001-.587.08-1.048.398-.324.222-.337.226-.518.166-.502-.168-.52-.188-.592-.62-.11-.675-.355-1.049-.864-1.32-.188-.1-.285-.112-1.021-.122-.628-.008-.861.006-1.02.064zm1.48 1.266c.057.043.113.231.177.605.051.299.115.599.142.667.08.205.26.328.708.486.235.082.561.217.726.3.495.25.638.22 1.357-.295.226-.162.438-.294.471-.294.08 0 .731.631.767.744.019.058-.097.273-.344.635-.436.641-.46.768-.23 1.226.077.156.213.483.301.727.17.468.29.646.494.725.068.026.367.091.666.144.358.064.563.125.604.179.089.117.084.971-.007 1.062-.037.037-.253.095-.48.129-.61.09-.91.187-1.022.33-.054.068-.165.311-.248.54a7.92 7.92 0 01-.3.714c-.245.484-.22.623.22 1.263.203.296.37.561.37.59 0 .083-.709.766-.795.766-.043 0-.164-.063-.27-.14-.96-.691-1.014-.706-1.6-.422a7.878 7.878 0 01-.71.296c-.616.213-.66.272-.811 1.1-.057.309-.128.591-.159.628-.04.05-.194.068-.569.068-.603 0-.557.047-.685-.716-.093-.555-.177-.775-.339-.881-.06-.04-.3-.14-.534-.222a7.541 7.541 0 01-.721-.3c-.457-.231-.555-.213-1.187.218-.298.204-.57.37-.604.37-.083 0-.78-.695-.78-.777 0-.036.167-.31.37-.608.44-.646.449-.704.18-1.287a7.988 7.988 0 01-.276-.684c-.193-.594-.31-.682-1.087-.812-.763-.128-.715-.083-.715-.686 0-.375.018-.529.067-.57.038-.03.32-.102.628-.158.827-.152.886-.196 1.1-.813.064-.188.197-.508.295-.711.283-.586.269-.64-.423-1.6-.076-.107-.138-.23-.138-.274 0-.087.684-.793.768-.793.029 0 .294.167.59.37.65.448.761.465 1.316.198.197-.095.545-.245.773-.333.274-.107.448-.206.513-.294.064-.087.139-.354.212-.761.062-.345.142-.646.177-.668.104-.066.946-.05 1.041.02zm-1.052 3.33a3.679 3.679 0 00-.37.098 3.04 3.04 0 00-2.153 2.953c.005.852.294 1.546.895 2.148.6.6 1.294.89 2.146.896a3.016 3.016 0 003.067-2.876c.055-.94-.225-1.675-.895-2.341-.455-.453-.827-.671-1.388-.815-.356-.091-.961-.12-1.302-.063zm.91 1.324c.654.107 1.24.725 1.349 1.423a1.738 1.738 0 01-1.39 2.007c-1.205.245-2.3-.852-2.052-2.055.033-.16.103-.376.157-.48a1.81 1.81 0 011.255-.919c.238-.04.308-.038.68.024zm-10.131.947c-.236.086-.414.365-.466.73-.096.675-.11.703-.388.808-.14.053-.375.152-.52.22l-.264.124-.415-.296c-.604-.429-.897-.551-1.322-.55-.597 0-.827.123-1.556.835-.806.787-.913.98-.912 1.648.001.536.05.658.535 1.353l.273.39-.078.177c-.042.098-.14.334-.215.524l-.137.345-.313.06c-1.04.198-1.308.317-1.647.73-.322.395-.376.651-.357 1.724.015.917.02.948.151 1.199.313.594.643.806 1.526.982.618.124.68.144.68.219 0 .025.088.248.195.496l.194.45-.359.532c-.417.619-.495.847-.463 1.346.035.533.186.789.871 1.474.685.686.94.837 1.473.872.502.033.742-.05 1.356-.469l.53-.362.195.1c.108.055.324.147.481.205.157.057.303.12.323.138.02.018.081.274.135.568.162.883.391 1.26.948 1.563l.31.168h1.036c.97 0 1.05-.007 1.274-.111.332-.155.74-.586.86-.91a5.34 5.34 0 00.18-.753c.045-.269.092-.505.104-.525.012-.019.082-.05.157-.069.074-.018.301-.11.505-.205l.37-.17.42.29c.713.495.795.528 1.332.528.644 0 .8-.083 1.568-.835.473-.462.638-.66.747-.891.314-.667.241-1.148-.296-1.94-.188-.278-.343-.525-.343-.547 0-.037.39-1 .417-1.032.006-.007.25-.056.54-.11.706-.13.917-.298.917-.728 0-.233-.17-.48-.402-.585-.174-.078-.215-.076-.937.052-.803.141-1.005.204-1.133.352-.044.052-.151.305-.238.563a8.388 8.388 0 01-.375.904c-.228.454-.275.725-.162.937.032.058.243.37.469.693.289.412.411.63.411.731 0 .116-.09.239-.446.607-.48.496-.671.617-.85.534a11.28 11.28 0 01-.718-.474c-.335-.234-.684-.44-.776-.456-.136-.026-.264.014-.697.22-.293.138-.73.318-.972.4-.679.23-.688.244-.873 1.33-.16.94-.132.917-1.048.917-.653 0-.727-.01-.817-.1-.074-.074-.134-.296-.245-.91-.177-.98-.2-1.014-.87-1.241a10.412 10.412 0 01-.956-.398c-.596-.287-.724-.291-1.086-.035-.763.539-1.151.783-1.245.783-.147 0-1.172-1.026-1.172-1.173 0-.094.244-.483.782-1.246.256-.363.252-.49-.034-1.087a10.484 10.484 0 01-.398-.958c-.226-.67-.26-.693-1.24-.87-.613-.111-.835-.171-.91-.246-.09-.09-.098-.164-.098-.818 0-.92-.027-.89.94-1.053.378-.064.742-.136.81-.161.222-.082.34-.244.473-.65.072-.22.252-.663.401-.982.221-.476.265-.612.24-.748-.018-.091-.223-.44-.456-.776a11.247 11.247 0 01-.474-.718c-.082-.18.038-.371.534-.852.365-.353.49-.447.604-.447.099 0 .322.126.73.412.322.226.64.44.704.475.213.113.465.07.925-.16.24-.121.647-.292.905-.38.716-.247.722-.256.912-1.347.152-.88.142-.96-.156-1.221a.61.61 0 00-.608-.113zm1.102 4.48c-1.398.255-2.542 1.114-3.15 2.366a4.077 4.077 0 00-.425 1.877c0 1.204.397 2.156 1.26 3.02.863.863 1.813 1.26 3.017 1.261a4.273 4.273 0 004.067-2.904c.116-.337.243-1.028.243-1.318 0-.247-.14-.49-.357-.623-.448-.274-.974.105-.974.701 0 .37-.093.724-.307 1.175-.383.807-1.17 1.42-2.07 1.611-.724.154-1.598-.015-2.244-.434-.997-.647-1.524-1.929-1.277-3.102.187-.888.804-1.68 1.608-2.062.45-.215.804-.308 1.173-.308.292 0 .543-.124.687-.34a.554.554 0 00.014-.635c-.213-.35-.522-.42-1.265-.284z" fill="#232323"/></symbol><symbol id="b22-4" viewBox="0 0 31 31"><path d="M28.445 17.82a2 2 0 001.776-1.988v-.828a2 2 0 00-1.778-1.988l-1.25-.14c-.818-.09-1.48-.68-1.793-1.441a9.638 9.638 0 00-.044-.105c-.323-.762-.274-1.653.242-2.3l.805-1.007a2 2 0 00-.149-2.662l-.583-.584a2 2 0 00-2.665-.146l-.982.787c-.648.519-1.543.566-2.308.242a9.71 9.71 0 00-.09-.038c-.762-.314-1.352-.976-1.444-1.794L18.04 2.54A2 2 0 0016.05.762h-.813a2 2 0 00-1.988 1.78l-.14 1.254c-.09.824-.688 1.488-1.455 1.8l-.093.039c-.761.317-1.65.268-2.293-.247L8.26 4.582a2 2 0 00-2.663.148l-.585.584a2 2 0 00-.148 2.663l.789.987c.518.648.565 1.542.24 2.305l-.038.094c-.315.76-.976 1.35-1.794 1.442l-1.284.143A2 2 0 001 14.936v.826a2 2 0 001.779 1.988l1.254.14c.822.09 1.486.686 1.797 1.452l.04.098c.318.76.267 1.646-.247 2.29l-.807 1.009a2 2 0 00.147 2.663l.585.585a2 2 0 002.663.148l.987-.789c.648-.518 1.541-.564 2.305-.24l.093.038c.76.315 1.351.977 1.443 1.795l.143 1.283A2 2 0 0015.17 30h.826a2 2 0 001.987-1.779l.14-1.254c.091-.822.686-1.486 1.452-1.797l.099-.04c.76-.318 1.646-.267 2.289.247l1.01.807a2 2 0 002.663-.147l.589-.59a2 2 0 00.153-2.656l-.785-.99c-.513-.647-.558-1.538-.235-2.299l.042-.1c.314-.76.975-1.35 1.792-1.442l1.253-.14zm-12.843 2.822a5.26 5.26 0 11.013 0h-.013z" fill="#FFD47D" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></symbol><symbol id="b22-5" viewBox="0 0 21 22"><path d="M19.133 11.169a1.645 1.645 0 00-.531-3.228l-.51.028c-.578.033-1.104-.303-1.41-.794-.302-.485-.374-1.096-.1-1.597l.266-.488a1.66 1.66 0 00-2.694-1.903l-.36.402c-.381.426-.983.56-1.541.433-.56-.128-1.046-.513-1.204-1.065l-.152-.535a1.652 1.652 0 00-3.24.544l.03.516c.032.577-.303 1.102-.794 1.407-.487.302-1.101.37-1.602.09l-.484-.27a1.652 1.652 0 00-1.908 2.674l.405.363c.428.383.562.987.435 1.546-.128.56-.51 1.045-1.06 1.205l-.572.166a1.657 1.657 0 00.555 3.246l.512-.028c.577-.032 1.102.302 1.407.793.302.487.37 1.102.09 1.603l-.27.484a1.652 1.652 0 002.674 1.907l.365-.407c.381-.426.983-.56 1.541-.433.56.128 1.047.513 1.204 1.066l.147.519a1.665 1.665 0 003.265-.548l-.028-.508c-.033-.577.303-1.104.794-1.41.485-.301 1.096-.373 1.597-.1l.488.267a1.66 1.66 0 001.903-2.694l-.405-.362c-.424-.38-.558-.98-.431-1.536.128-.561.516-1.048 1.071-1.202l.547-.151zm-7.928 3.227a3.528 3.528 0 11-1.159-6.96 3.528 3.528 0 011.16 6.96z" fill="currentColor" stroke="currentColor" stroke-miterlimit="10"/></symbol><symbol id="b22-7" viewBox="0 0 30 13"><path d="M1 7.505c0-.249.139-.477.36-.59L7.532 3.73a.478.478 0 11.434.853L3.921 6.615a1 1 0 00.001 1.788l4.044 2.025a.478.478 0 11-.433.852L1.36 8.096a.665.665 0 01-.36-.59zM13.247 12.3a.47.47 0 01-.44-.64l4.008-10.362a.467.467 0 01.87.337l-3.999 10.364a.471.471 0 01-.439.301zM29.5 7.545c0 .261-.146.5-.378.62l-6.155 3.158a.479.479 0 11-.431-.855l4.074-2.024a1 1 0 00.001-1.79l-4.076-2.032a.479.479 0 11.432-.854l6.155 3.158c.232.12.378.358.378.62z" fill="currentColor" stroke="currentColor" stroke-miterlimit="10"/></symbol><symbol id="b22-8" viewBox="0 0 87 98"><path d="M3.02 95.902a5.599 5.599 0 01-.643-7.983l40.589-46.524 6.19 5.073-38.188 48.605a5.58 5.58 0 01-7.948.829z" fill="#31313A" stroke="#31313A" stroke-linejoin="round"/><path d="M32.143 53.774L2.378 87.919a5.59 5.59 0 008.591 7.154l28.158-35.82-6.984-5.48z" fill="#fff" stroke="#31313A" stroke-linejoin="round"/><path d="M76.74 6.877a25.57 25.57 0 10-32.621 39.388 25.57 25.57 0 0032.62-39.388zM46.483 43.424A21.884 21.884 0 1174.404 9.719a21.884 21.884 0 01-27.922 33.705z" fill="#31313A" stroke="#31313A" stroke-linejoin="round"/></symbol><symbol id="b24-8" viewBox="0 0 278 241"><path d="M240.471 11.668C208.487-7.284 165.934-.602 135.969 22.123c-21.436 16.244-41.335 35.195-65.798 46.393-18.81 8.593-40.28 12.73-54.325 29.054-21.956 25.557-19.032 61.581-3.79 89.72 17.695 32.656 49.815 47.329 85.61 51.981 35.667 4.651 73.233-.693 104.53-19.054 41.692-24.464 64.049-71.219 72.014-117.497 5.978-34.86-1.348-71.88-33.739-91.052z" fill="#92E3A9"/><path opacity=".7" d="M241.471 11.668C209.487-7.284 166.934-.602 136.969 22.123c-21.436 16.244-41.335 35.195-65.798 46.393-18.81 8.593-40.28 12.73-54.325 29.054-21.956 25.557-19.032 61.581-3.79 89.72 17.695 32.656 49.815 47.329 85.61 51.981 35.667 4.651 73.233-.693 104.53-19.054 41.692-24.464 64.049-71.219 72.014-117.497 5.978-34.86-1.348-71.88-33.739-91.052z" fill="#fff"/></symbol><symbol id="b25-7" viewBox="0 0 79 87"><g clip-path="url(#clip0_987_28016)"><path d="M74.667 57.51c.4-1 .581-2.087.45-3.022L70.543 22.03c-.131-.935-.607-1.93-1.266-2.78L39.11 43.01l35.557 14.5z" fill="#583DCB"/><path d="M47.322 80.156L72.915 60c.737-.58 1.353-1.49 1.752-2.49L39.11 43.01 8.944 66.77c.659.85 1.503 1.554 2.372 1.909l30.166 12.3c1.737.71 4.366.339 5.84-.823z" fill="#583DCB"/><path d="M69.277 19.25c-.66-.849-1.504-1.554-2.372-1.908l-30.166-12.3c-1.738-.71-4.367-.34-5.84.822L5.304 26.021c-1.474 1.161-2.465 3.642-2.201 5.511L7.677 63.99c.132.935.607 1.93 1.267 2.78L39.11 43.01l30.167-23.76z" fill="#583DCB"/><path d="M42.304 65.676c-12.396 1.746-23.913-7-25.674-19.498-1.76-12.498 6.891-24.087 19.287-25.833 7.998-1.127 16.07 2.162 21.063 8.582l-8.929 7.047c-2.5-3.213-6.537-4.86-10.537-4.296-6.198.873-10.524 6.667-9.644 12.916.88 6.249 6.64 10.622 12.837 9.749 4-.564 7.426-3.262 8.94-7.042l10.529 4.305c-3.025 7.552-9.873 12.943-17.872 14.07z" fill="#fff"/><path d="M61.413 38.584l-2.498.352-.355-2.519-2.497.352.354 2.518-2.498.352.355 2.519 2.498-.352.355 2.518 2.498-.352-.355-2.518 2.498-.352-.355-2.518zM70.78 37.264l-2.498.352-.355-2.518-2.498.352.355 2.518-2.498.352.355 2.518 2.498-.352.355 2.519 2.497-.352-.355-2.518 2.498-.352-.355-2.519z" fill="#fff"/></g></symbol><symbol id="b26-10" viewBox="0 0 57 55"><path d="M2.683 40.114l5.637-.635a1.257 1.257 0 011.181.567c.327.505.677 1.003 1.05 1.489a21.168 21.168 0 002.233 2.492 1.244 1.244 0 01.305 1.365l-2.162 5.52a1.219 1.219 0 00.6 1.545l4.853 2.41a1.204 1.204 0 001.544-.43l2.937-4.6a1.208 1.208 0 011.353-.523c2.241.59 4.562.82 6.876.684a1.246 1.246 0 011.25.867l.995 3.168a1.264 1.264 0 001.433.85l5.275-1.067a1.208 1.208 0 00.98-1.335l-.47-4.212-.117-1.026a22.009 22.009 0 005.567-4.473 1.206 1.206 0 011.349-.325l4.446 1.746a1.252 1.252 0 001.58-.613l1.84-3.714.525-1.065a1.269 1.269 0 00-.452-1.635l-3.84-2.458a1.205 1.205 0 01-.54-1.316c.36-1.513.558-3.06.59-4.615.01-.13.014-.26.012-.391a.643.643 0 01.009-.131 1.233 1.233 0 01.871-1.06l5.142-1.625a1.257 1.257 0 00.845-1.43l-1.055-5.26a1.252 1.252 0 00-1.365-.995l-5.88.665a1.212 1.212 0 01-1.214-.637 22.041 22.041 0 00-2.996-4.2 1.274 1.274 0 01-.24-1.32l2.076-5.307a1.217 1.217 0 00-.59-1.535l-4.809-2.373a1.27 1.27 0 00-1.64.455l-2.325 3.642a1.25 1.25 0 01-1.453.514 21.885 21.885 0 00-6.634-1.19 1.24 1.24 0 01-1.168-.875L25.62 1.088a1.284 1.284 0 00-1.477-.869l-5.24 1.049a1.227 1.227 0 00-.982 1.346l.026.245.546 4.894a1.254 1.254 0 01-.678 1.261 21.743 21.743 0 00-4.833 3.41 1.233 1.233 0 01-1.297.252l-4.511-1.773a1.274 1.274 0 00-1.609.618l-2.363 4.787a1.362 1.362 0 00-.121.421 1.27 1.27 0 00.567 1.182l3.075 1.954A1.267 1.267 0 017.3 20.97a1.342 1.342 0 01-.064.345 21.772 21.772 0 00-1.106 8.543 1.228 1.228 0 01-.854 1.261l-4.164 1.315a1.245 1.245 0 00-.846 1.428l.023.123 1.024 5.128a1.27 1.27 0 001.37 1.002zm36.064-16.008c.335.843.592 1.714.766 2.604.344 1.773-.015 4.568-.816 6.188-.084.174-.173.344-.261.513-5.512 10.24-19.974 8.202-22.351-3.35-.309-1.512-.117-3.71.424-5.396.116-.366.26-.721.431-1.064a13.423 13.423 0 012.69-3.703c5.934-5.704 15.854-3.836 19.117 4.208z" fill="currentColor"/></symbol><symbol id="b26-8" viewBox="0 0 139 164"><path d="M38.94 163.067L.3 19.712s66.558-43.842 138.383 0l-32.719 143.355H38.94z" fill="#F5F9FD"/></symbol><symbol id="b26-9" viewBox="0 0 139 164"><path d="M38.94 163.067L.3 19.712s66.558-43.842 138.383 0l-32.719 143.355H38.94z" fill="url(#paint0_linear_898_25576)"/></symbol><symbol id="b27-7" viewBox="0 0 203 142"><path d="M199.428 85.895c-3.268-5.615-6.827-7.98-11.569-12.171-3.226-2.851-7.891-6.093-6.949-10.683.91-4.367 3.75-8.535 5.611-12.507 4.965-10.592-2.812-19.068-11.627-24.203-5.411-3.178-13.198-3.114-19.114-1.516-4.469 1.203-7.504 3.092-12.233 2.13-12.842-2.62-1.957-15.995-8.915-22.864-4.551-4.5-12.706-4.209-18.549-3.963-6.149.258-13.867 1.557-18.805 5.52-6.858 5.507-7.2 17.175-18.43 16.567-5.184-.282-8.17-2.27-10.509-6.81-2.73-5.344-4.073-10.81-11.063-11.35-12.556-.94-24.12 2.67-31.497 13.238-5.374 7.718-3.914 20.911-1.078 29.437 2.275 6.87 9.625 15.082 7.818 22.432-1.957 7.959-14.394 11.804-21.007 15.014-4.291 2.084-8.292 3.672-10.28 8.362-2.795 6.592-.355 16.053 2.557 22.06 3.536 7.291 15.05 14.496 23.21 10.374 2.152-.087 4.191-.863 6.44-.609 7.79.908 13.811 8.09 20.21 11.904 14.645 8.726 29.713 3.873 44.817-1.621 7.163-2.61 13.716-6.964 20.934-9.216 7.136-2.215 13.316 1.816 17.658 7.432 4.341 5.616 8.346 8.744 15.828 9.08 6.962.295 14.99-.254 21.075-3.963 3.9-2.379 8.56-8.136 9.229-12.744.696-4.799-2.366-8.69 1.47-13.021 4.678-5.289 16.729-5.034 18.204-13.574.696-4.168-1.398-9.234-3.436-12.735z" fill="url(#paint0_radial_1002_56203)"/></symbol><symbol id="b28-7" viewBox="0 0 68 72"><path d="M27.558 6.834L2.414 22.553 14.496 57.71l25.931 7.727 20.307-17.882-3.76-36.984-29.416-3.737z" fill="#DD0031"/><path d="M27.558 6.834l1.428 6.505-.006-.03 6.518 29.683 4.93 22.446 20.306-17.883-3.76-36.984-29.416-3.737z" fill="#C3002F"/><path d="M28.98 13.31l-8.656 41.984 6.358-1.397 1.55-9.309 14.475-3.179 5.307 7.803 6.358-1.396L28.98 13.31zM39.32 36.624l-9.962 2.188 2.35-13.078 7.612 10.89z" fill="#fff"/></symbol><symbol id="b28-8" viewBox="0 0 24 25"><path d="M16.755 11.293l-1.743-.297-2.877-5.956.591-3.48S10.06.938 9.604 5.548c-.456 4.61-.602 3.388-.602 3.388s-5.721-.947-6.298-.533c-.41.3-1.528 5.957-2.112 9.016a3.387 3.387 0 001.793 3.76c.185.092.381.16.583.202 1.424.242 8.891.318 8.891.318l3.01.512 1.886-10.917zM21.906 11.18l-3.099 11.742-2.985-.507 1.986-11.684 4.098.449z" fill="#EAEAEA"/></symbol><symbol id="b28-9" viewBox="0 0 26 26"><path d="M14.781 5.225h-3.45v15.473h3.45V5.225z" fill="#E8505B"/><path d="M5.32 11.233v3.452h15.467v-3.452H5.32z" fill="#E8505B"/><path d="M25.899 13a1.753 1.753 0 01-.026-.208c0-.152-.027-.356-.042-.612 0-.136 0-.288-.032-.45-.03-.162-.052-.345-.083-.523a9.246 9.246 0 00-.272-1.328 12.292 12.292 0 00-1.432-3.41A12.77 12.77 0 008.66 1.015c-.572.205-1.13.45-1.668.732-.545.3-1.069.637-1.568 1.01-.508.377-.992.788-1.447 1.229-.449.465-.866.96-1.25 1.48A12.48 12.48 0 00.904 8.978a12.655 12.655 0 000 8.059 12.407 12.407 0 001.824 3.514c.381.522.799 1.016 1.25 1.48a13.9 13.9 0 001.447 1.234c.5.372 1.023.71 1.568 1.009.54.28 1.096.525 1.668.732a12.806 12.806 0 0015.35-5.449 12.25 12.25 0 001.433-3.415 9.05 9.05 0 00.272-1.323c.031-.198.068-.376.083-.522.016-.147 0-.314.032-.45 0-.262.031-.46.042-.612.004-.07.012-.14.026-.21.006.07.006.14 0 .21v1.067c0 .167-.047.345-.068.523a9.658 9.658 0 01-.251 1.338c-.29 1.221-.764 2.39-1.406 3.467a12.994 12.994 0 01-8.786 6.15 13.061 13.061 0 01-6.795-.55c-.582-.21-1.15-.458-1.699-.742a14.37 14.37 0 01-3.078-2.28c-.46-.471-.886-.974-1.276-1.506a12.49 12.49 0 01-1.866-3.592A13.878 13.878 0 010 12.995c.02-1.395.246-2.78.674-4.11A12.594 12.594 0 012.54 5.298c.391-.532.817-1.036 1.276-1.511.465-.448.96-.865 1.479-1.25A12.986 12.986 0 0115.388.221a12.986 12.986 0 018.734 6.154 12.35 12.35 0 011.406 3.462c.114.442.198.89.25 1.344 0 .194.058.377.069.523v1.067c.024.075.041.152.052.23z" fill="#E8505B"/></symbol><symbol id="b29-11" viewBox="0 0 17 15"><path d="M11.35.408a16.985 16.985 0 00-8.328 5.575A12.526 12.526 0 00.26 10.555c-.413 1.424-.193 3.097 1.423 3.61a3.993 3.993 0 002.136-.057 13.308 13.308 0 002.485-.855 27.627 27.627 0 004.648-2.77 20.142 20.142 0 004.065-3.83 8.672 8.672 0 001.232-2.18c.307-.667.39-1.417.235-2.135-.385-1.21-1.916-1.496-3.019-1.425a10.961 10.961 0 00-4.748 1.859c-.278.17.135.57.384.434a14.115 14.115 0 013.958-1.645 3.017 3.017 0 012.414.364c.555.477.384 1.338.192 1.95a7.382 7.382 0 01-1.025 2.051 16.937 16.937 0 01-3.375 3.432 29.978 29.978 0 01-3.9 2.6 13.844 13.844 0 01-4.35 1.651 1.9 1.9 0 01-1.702-.391 2.243 2.243 0 01-.377-2.136A10.354 10.354 0 013 7.172c2.177-2.89 5.101-5.13 8.458-6.48.135-.05.057-.334-.079-.298l-.028.014z" fill="#455A64"/></symbol><symbol id="b29-12" viewBox="0 0 33 38"><path d="M16.063.588A15.972 15.972 0 00.175 15.256 15.981 15.981 0 0013.45 32.325l1.801 4.628a.925.925 0 001.73 0l1.787-4.628a15.974 15.974 0 0013.229-17.109A15.98 15.98 0 0016.063.596V.588zm14.75 15.958a14.692 14.692 0 01-3.965 10.068l-1.217 1.16A14.713 14.713 0 011.253 17.23 14.72 14.72 0 014.829 7.054l1.16-1.218a14.706 14.706 0 0124.796 10.681l.028.029z" fill="#455A64"/><path d="M21.772 23.153a6.947 6.947 0 01-4.036 1.809v2.599H14.93v-2.506a14.559 14.559 0 01-3.317-.599 9.49 9.49 0 01-2.599-1.174l1.51-3.418a10.435 10.435 0 005.395 1.616c1.78 0 2.67-.448 2.67-1.339a1.112 1.112 0 00-.762-1.04 14.535 14.535 0 00-2.441-.711 22.769 22.769 0 01-3.076-.84 5.147 5.147 0 01-2.136-1.425 3.953 3.953 0 01-.89-2.713 4.672 4.672 0 011.424-3.446A6.89 6.89 0 0114.895 8.2V5.573H17.7V8.1c.867.074 1.726.231 2.563.47.764.21 1.498.516 2.185.91l-1.423 3.44a9.495 9.495 0 00-4.542-1.267 3.737 3.737 0 00-2.008.413 1.225 1.225 0 00-.633 1.06 1.061 1.061 0 00.747.983c.78.313 1.588.551 2.414.712 1.05.216 2.084.502 3.096.855a5.419 5.419 0 012.136 1.424c.63.753.95 1.718.897 2.699a4.643 4.643 0 01-1.36 3.353z" fill="#BA68C8"/></symbol><symbol id="b29-13" viewBox="0 0 32 38"><path d="M16.007.133A15.972 15.972 0 00.12 14.8a15.981 15.981 0 0013.275 17.07l1.8 4.628a.926.926 0 001.73 0l1.787-4.636a15.974 15.974 0 0013.23-17.108A15.98 15.98 0 0016.006.133zm14.75 15.993a14.692 14.692 0 01-3.965 10.068l-1.217 1.16a14.712 14.712 0 01-24.27-10.573 14.72 14.72 0 013.49-10.14l1.168-1.225a14.706 14.706 0 0124.794 10.681v.029z" fill="#455A64"/><path d="M13.915 24.364a2.178 2.178 0 01-1.595-.712l-4.983-5.29a2.187 2.187 0 013.189-2.991l3.218 3.44 7.61-9.642a2.185 2.185 0 013.431 2.706L15.602 23.51a2.134 2.134 0 01-1.623.826l-.064.028z" fill="#BA68C8"/></symbol><symbol id="b31-10" viewBox="0 0 38 22"><path d="M37.886 10.693s-8.488 10.694-18.948 10.694S0 10.693 0 10.693 8.488 0 18.938 0s18.948 10.693 18.948 10.693z" fill="#fff"/><path d="M18.948 20.405c5.36 0 9.705-4.348 9.705-9.711 0-5.364-4.345-9.712-9.705-9.712S9.243 5.33 9.243 10.694c0 5.363 4.345 9.711 9.705 9.711z" fill="#1CF7B3"/><path d="M22.418 10.694a3.484 3.484 0 01-2.148 3.217 3.478 3.478 0 01-4.745-2.538 3.485 3.485 0 013.413-4.162 3.48 3.48 0 013.48 3.483z" fill="#224799"/><path d="M18.637 7.956a2.059 2.059 0 01-2.457 2.018A2.056 2.056 0 0114.68 7.17a2.057 2.057 0 013.354-.667c.385.385.602.909.602 1.454z" fill="#fff"/></symbol><symbol id="b31-12" viewBox="0 0 75 37"><path d="M38.905 15.856l-1.632 8.466H56.1v6.9h2.791V29.05h7.81v2.171h2.933v-6.9h5.159v-8.465H38.905z" fill="#000" opacity=".51"/><path d="M56.099 18.13v11.128h2.791v-2.17h7.81v2.17h2.933V18.131H56.099z" fill="#8AF48A"/><path d="M74.792 13.893H21.825v8.475h52.967v-8.475z" fill="#8DFFD6"/><path d="M31.549 13.893h-9.724v8.475h9.724v-8.475z" fill="#8AF48A"/><path d="M18.382 36.27H6.725a6.732 6.732 0 01-4.753-1.973A6.741 6.741 0 010 29.54V6.72a6.732 6.732 0 011.973-4.752A6.722 6.722 0 016.725 0h11.657c1.78 0 3.489.708 4.748 1.968a6.722 6.722 0 011.967 4.752V29.54a6.732 6.732 0 01-1.966 4.755 6.722 6.722 0 01-4.749 1.974zM6.725 6.484a.207.207 0 00-.208.208v22.82a.208.208 0 00.208.208h11.657a.207.207 0 00.207-.207V6.72a.207.207 0 00-.207-.236H6.725z" fill="#8DFFD6"/></symbol><symbol id="b31-13" viewBox="0 0 73 61"><path d="M65.194 15.363L13.236 7.292a3.513 3.513 0 00-4.063 2.942L4.467 40.592a3.52 3.52 0 002.952 4.064l5.46.854-1.227 7.881a1.273 1.273 0 001.894 1.294l12.53-7.13 33.301 5.172a3.515 3.515 0 004.063-2.941l4.696-30.347a3.52 3.52 0 00-2.942-4.076z" fill="#1CF7B3"/><path d="M36.674 27.704l-.83 5.382M34.143 28.696l4.235 3.41M33.726 31.376l5.066-1.962M24.354 25.796l-.831 5.372M21.821 26.776l4.235 3.41M21.406 29.468l5.065-1.972M49.952 29.771l-.831 5.372M47.42 30.752l4.234 3.41M47.002 33.432l5.066-1.962" stroke="#fff" stroke-width="1.74" stroke-miterlimit="10" stroke-linecap="round"/></symbol><symbol id="b31-14" viewBox="0 0 31 52"><path d="M9.246.325l-1.98.712c-.5.18-.76.73-.58 1.23l8.427 23.487c.179.5.73.76 1.23.58l1.98-.71c.5-.18.76-.731.58-1.232L10.476.906a.962.962 0 00-1.23-.58z" fill="#90B8F9"/><path d="M28.405 45.914l-14.044 5.05a3.082 3.082 0 01-3.772-1.53L.139 28.625a1.294 1.294 0 01.726-1.803L23.5 18.695a1.29 1.29 0 011.707.944l5.188 22.65a3.088 3.088 0 01-1.99 3.625z" fill="#fff"/><path d="M16.921.595l-2.092.453a.944.944 0 00-.723 1.122l6.079 28.135c.11.51.612.834 1.121.724l2.093-.453a.944.944 0 00.722-1.122L18.042 1.318a.943.943 0 00-1.12-.723z" fill="#fff"/></symbol><symbol id="b31-15" viewBox="0 0 43 26"><path d="M.679 3.597a2.557 2.557 0 013.3-1.472l22.636 8.702-1.188 3.105L.679 3.597z" fill="#90B8F9"/><path d="M35.293 14.168l-9.583-3.68a.67.67 0 00-.867.386l-.99 2.577a.67.67 0 00.386.868l3.773 1.453a1.435 1.435 0 01.792 1.888 5.667 5.667 0 003.338 7.371 5.721 5.721 0 007.168-3.275 5.667 5.667 0 00-3.253-7.296 6.712 6.712 0 00-.764-.292zm-3.367 4.719a2.302 2.302 0 111.32 2.973 2.3 2.3 0 01-1.32-2.982v.009z" fill="#90B8F9"/><path d="M2.556 11.308A2.555 2.555 0 010 8.75v-.085l26.832-.642v3.285H2.556z" fill="#fff"/><path d="M36.933 11.327a5.657 5.657 0 005.66-5.663A5.74 5.74 0 0037.064.001a5.656 5.656 0 00-5.339 3.467 5.664 5.664 0 00-.442 2.196 1.434 1.434 0 01-1.415 1.482h-4.037a.679.679 0 00-.679.68v2.86a.67.67 0 00.68.67h10.26c.28.014.562.004.84-.029zm0-7.91A2.3 2.3 0 0139.19 6.17a2.304 2.304 0 01-3.137 1.678 2.302 2.302 0 01.88-4.43z" fill="#fff"/><path d="M19.505 10.713a.887.887 0 100-1.773.887.887 0 000 1.773z" fill="#6F9EFE"/></symbol><symbol id="b31-16" viewBox="0 0 65 60"><path d="M47.213 5.764a13.503 13.503 0 00-4.631 2.303 19.425 19.425 0 00-22.448-6.88 19.44 19.44 0 00-9.665 7.747A19.462 19.462 0 007.44 20.95a11.613 11.613 0 00-6.327 5.88 11.626 11.626 0 005.052 15.224 11.603 11.603 0 008.584.924l39.679-10.9a13.621 13.621 0 007.998-6.455A13.637 13.637 0 0057.383 7.26a13.61 13.61 0 00-10.17-1.458v-.038z" fill="#2653E3"/><path d="M35.121 47.31l-2.725.746-4.716-17.234a1.766 1.766 0 00-2.17-1.236l-6.347 1.746a1.753 1.753 0 00-1.226 2.161l4.716 17.234-2.716.755a1.273 1.273 0 00-.293 2.34l9.649 5.494a1.282 1.282 0 001.745-.472l5.489-9.665a1.274 1.274 0 00-1.406-1.869zM51.051 33.37l-2.726.746 4.716 17.234a1.766 1.766 0 01-1.226 2.171l-6.31 1.727a1.752 1.752 0 01-2.16-1.227L38.63 36.778l-2.726.755a1.272 1.272 0 01-1.443-1.888l5.452-9.636a1.283 1.283 0 011.745-.481l9.657 5.493a1.284 1.284 0 01-.264 2.35z" fill="#fff"/></symbol><symbol id="b31-17" viewBox="0 0 43 16"><path d="M10.625 4.992L.001 6.226l1.09 9.393 10.623-1.233-1.089-9.394z" fill="#fff"/><path d="M10.616 4.999l-2.174.252 1.09 9.394 2.173-.253L10.615 5z" fill="#3B85F7"/><path d="M40.94 0L9.207 3.687l1.428 12.31 31.731-3.686L40.94 0z" fill="#2653E3"/><path d="M5.546 7.563l-1.734.202.202 1.734 1.733-.201-.201-1.735zM5.973 11.302l-1.733.201.2 1.735 1.734-.201-.201-1.735z" fill="#3B85F7"/></symbol><symbol id="b31-19" viewBox="0 0 102 70"><path d="M7.932 38.45h86.75M70.528 6.39v56.127" stroke="#39FEC6" stroke-width="1.88" stroke-miterlimit="10"/><path d="M3.97 37.148a1.3 1.3 0 01.94 2.213 1.3 1.3 0 01-2.231-.892 1.303 1.303 0 011.292-1.303m0-2.661a3.958 3.958 0 00-3.667 2.44 3.967 3.967 0 002.881 5.411 3.958 3.958 0 004.07-1.684 3.966 3.966 0 00-3.284-6.167zM70.528 63.867a1.3 1.3 0 011.276 1.56 1.302 1.302 0 11-2.478-.764 1.292 1.292 0 011.202-.796zm0-2.661a3.95 3.95 0 00-3.65 2.44 3.957 3.957 0 002.88 5.393 3.948 3.948 0 004.056-1.682c.435-.65.666-1.415.666-2.197a3.965 3.965 0 00-3.952-3.954zM70.528 2.652a1.3 1.3 0 011.277 1.557 1.303 1.303 0 11-1.277-1.557zm0-2.652a3.95 3.95 0 00-3.65 2.441 3.957 3.957 0 002.88 5.392 3.95 3.95 0 004.056-1.681A3.956 3.956 0 0070.528 0zM97.21 37.148a1.3 1.3 0 011.278 1.55 1.302 1.302 0 01-2.58-.23 1.303 1.303 0 011.293-1.302m0-2.661a3.959 3.959 0 00-3.667 2.44 3.968 3.968 0 00.853 4.324 3.96 3.96 0 006.765-2.8 3.966 3.966 0 00-3.951-3.964z" fill="#397DEF"/></symbol><symbol id="b31-20" viewBox="0 0 94 67"><path d="M6.687 23.236h80.507M67.048 6.182v55.09M23.07 23.293v14.233" stroke="#39FEC6" stroke-width="1.88" stroke-miterlimit="10"/><path d="M23.06 38.81a1.3 1.3 0 011.286 1.554 1.303 1.303 0 11-1.286-1.554zm0-2.662a3.959 3.959 0 00-3.667 2.443A3.967 3.967 0 0022.28 44a3.958 3.958 0 004.068-1.693 3.966 3.966 0 00-3.288-6.16zM67.04 2.652a1.3 1.3 0 01.92 2.224 1.3 1.3 0 11-1.841-1.842c.244-.245.575-.382.92-.382zm0-2.652a3.95 3.95 0 00-3.652 2.441 3.958 3.958 0 002.88 5.392 3.95 3.95 0 004.723-3.878A3.965 3.965 0 0067.039 0zM67.04 61.612a1.301 1.301 0 11-1.302 1.293 1.292 1.292 0 011.301-1.293zm0-2.662a3.95 3.95 0 00-3.652 2.441 3.958 3.958 0 002.88 5.392 3.95 3.95 0 004.723-3.878 3.965 3.965 0 00-3.952-3.955zM3.952 21.934a1.301 1.301 0 01.92 2.224 1.302 1.302 0 11-.92-2.224zm0-2.652A3.95 3.95 0 00.3 21.723a3.957 3.957 0 002.88 5.392 3.95 3.95 0 004.057-1.681 3.956 3.956 0 00-3.286-6.152zM90.023 21.934a1.3 1.3 0 01.933 2.22 1.302 1.302 0 11-.933-2.22zm0-2.652a3.95 3.95 0 00-3.65 2.441 3.957 3.957 0 002.88 5.392 3.95 3.95 0 004.722-3.878 3.956 3.956 0 00-3.952-3.955z" fill="#397DEF"/></symbol><symbol id="b31-21" viewBox="0 0 112 75"><path d="M6.555 35.157h99.04M23.05 5.267v29.89M87.93 35.157v32.391" stroke="#39FEC6" stroke-width="1.88" stroke-miterlimit="10"/><path d="M23.05 2.605a1.301 1.301 0 01.936 2.207 1.301 1.301 0 01-2.237-.857 1.303 1.303 0 011.301-1.303m0-2.652a3.95 3.95 0 00-3.65 2.441 3.957 3.957 0 002.88 5.392 3.95 3.95 0 004.056-1.681c.434-.65.666-1.415.666-2.197A3.965 3.965 0 0023.05 0zM87.977 68.757a1.301 1.301 0 01.92 2.223 1.301 1.301 0 01-2.222-.921 1.292 1.292 0 011.302-1.302zm0-2.653a3.95 3.95 0 00-3.651 2.442 3.958 3.958 0 002.88 5.392 3.95 3.95 0 004.056-1.682c.435-.65.666-1.415.666-2.197a3.948 3.948 0 00-2.438-3.656c-.48-.198-.994-.3-1.513-.299zM107.679 33.855a1.3 1.3 0 011.203.804 1.31 1.31 0 01-.282 1.42 1.301 1.301 0 11-.921-2.224zm0-2.652a3.95 3.95 0 00-3.651 2.44 3.962 3.962 0 00.857 4.31 3.953 3.953 0 004.307.858 3.95 3.95 0 001.279-6.447 3.96 3.96 0 00-2.792-1.161zM3.952 33.855a1.301 1.301 0 01.92 2.223 1.302 1.302 0 11-.92-2.223zm0-2.652A3.95 3.95 0 00.3 33.643a3.957 3.957 0 002.88 5.393 3.95 3.95 0 004.057-1.682c.434-.65.666-1.415.666-2.197a3.965 3.965 0 00-3.952-3.954z" fill="#397DEF"/></symbol><symbol id="b31-22" viewBox="0 0 14 13"><path d="M8.045.447l.378.68a9.812 9.812 0 003.951 3.916l.68.368a.944.944 0 010 1.652l-.68.377a9.727 9.727 0 00-3.904 3.908l-.377.68a.944.944 0 01-1.65 0l-.378-.68A9.727 9.727 0 002.16 7.44l-.679-.377a.943.943 0 010-1.652l.68-.368a9.812 9.812 0 003.904-3.917l.377-.68a.943.943 0 011.603 0z" fill="#fff"/></symbol><symbol id="b31-23" viewBox="0 0 462 214"><path d="M46.797 35.475C57.262 18.653 73.707 6.303 92.991 1.711c12.61-2.992 26.237-2.798 36.149 6.65 24.136 22.985 26.909 50.175 77.393 39.157 50.485-11.018 69.912-40.197 113.004-8.976 43.092 31.222 86.573 29.755 109.476 18.977 22.903-10.779 45.641 100.815 21.961 120.031-27.821 22.582-56.808-11.556-131.437-57.147-74.628-45.59-124.156 6.732-144.263 28.521-20.107 21.79-55.179 69.961-120.606 63.917-100.805-9.313-36.836-130.713-7.87-177.366z" fill="url(#paint0_linear_1397_41101)"/></symbol><symbol id="b31-4" viewBox="0 0 462 214"><path d="M46.797 35.475C57.262 18.653 73.707 6.303 92.991 1.711c12.61-2.992 26.237-2.798 36.149 6.65 24.136 22.985 26.909 50.175 77.393 39.157 50.485-11.018 69.912-40.197 113.004-8.976 43.092 31.222 86.573 29.755 109.476 18.977 22.903-10.779 45.641 100.815 21.961 120.031-27.821 22.582-56.808-11.556-131.437-57.147-74.628-45.59-124.156 6.732-144.263 28.521-20.107 21.79-55.179 69.961-120.606 63.917-100.805-9.313-36.836-130.713-7.87-177.366z" fill="url(#paint0_linear_1278_36221)"/></symbol><symbol id="b31-5" viewBox="0 0 658 400"><path d="M-66 400s105.147-35.355 212.999-7.576c107.853 27.779 175.834-39.618 206.551-50.123 41.484-14.193 78.131-18.951 158.421 28.85 80.29 47.8 190.386 11.333 211.43-3.829 21.043-15.162-3.155-122.966-3.155-122.966L664.588-2H7.182L-66 400z" fill="url(#paint0_linear_1278_36220)"/></symbol><symbol id="b31-7" viewBox="0 0 24 24"><path d="M21.381 22.576a2.214 2.214 0 01-2.216-2.218 15.956 15.956 0 00-4.669-11.26A15.933 15.933 0 003.244 4.426a2.216 2.216 0 01-2.072-2.213A2.219 2.219 0 013.244 0a20.365 20.365 0 0114.377 5.971 20.394 20.394 0 015.967 14.387 2.219 2.219 0 01-2.207 2.218z" fill="#fff"/><path d="M12.93 22.576a2.215 2.215 0 01-2.207-2.218 7.496 7.496 0 00-2.193-5.29 7.486 7.486 0 00-5.286-2.194 2.216 2.216 0 01-2.072-2.213 2.219 2.219 0 012.072-2.214 11.908 11.908 0 018.414 3.492 11.925 11.925 0 013.489 8.42 2.218 2.218 0 01-2.217 2.217zM3.244 23.604a3.243 3.243 0 01-3.182-3.88 3.247 3.247 0 014.424-2.366 3.245 3.245 0 012.003 3 3.248 3.248 0 01-3.245 3.246z" fill="#fff"/></symbol><symbol id="b31-8" viewBox="0 0 88 95"><path d="M67.887 94.716l-62.38-9.938a6.524 6.524 0 01-5.33-4.942 6.536 6.536 0 01-.093-2.552l10.78-67.765 75.291 11.986-10.78 67.775a6.607 6.607 0 01-7.488 5.436z" fill="#72B6FF"/><path d="M83.716 11.358L16.33.628a3.999 3.999 0 00-4.578 3.322l-.882 5.548 75.288 11.987.882-5.548a4.001 4.001 0 00-3.323-4.58z" fill="#224799"/><path d="M83.816 13.215l-4.592-.73a.66.66 0 00-.756.548l-.73 4.595a.66.66 0 00.548.756l4.592.731a.66.66 0 00.755-.548l.731-4.595a.66.66 0 00-.548-.757z" fill="#72B6FF"/><path d="M82.619 14.682l-3.16 2.293M82.184 17.409l-2.291-3.162" stroke="#fff" stroke-width=".78" stroke-miterlimit="10" stroke-linecap="round"/><path d="M50.005 49.707a3.385 3.385 0 01-2.688-2.322 6.466 6.466 0 01-7.545-1.208 3.357 3.357 0 01-3.273 1.378 7.718 7.718 0 00-7.801 3.588 7.733 7.733 0 00-1.046 2.83l-.698 4.37a2.738 2.738 0 002.264 3.133l23.418 3.728a2.726 2.726 0 003.122-2.275l.698-4.36a7.756 7.756 0 00-3.613-7.82 7.739 7.739 0 00-2.838-1.042zM43.874 44.647c4.16.67 8.545-5.106 9.337-10.07.793-4.964-1.952-9.523-6.12-10.184-4.17-.66-8.178 2.832-8.97 7.787-.792 4.955 1.585 11.807 5.753 12.467zM42.374 70.42l-25.5-4.06a2.448 2.448 0 10-.769 4.837l25.5 4.06a2.448 2.448 0 10.769-4.838zM62.482 81.871l-46.885-7.464a2.448 2.448 0 10-.77 4.837l46.886 7.465a2.448 2.448 0 10.769-4.838z" fill="#fff"/></symbol><symbol id="b32-7" viewBox="0 0 17 22"><path d="M11.333 12.026h-1.47a.367.367 0 01-.27-.335 4.092 4.092 0 01-.109-.617.92.92 0 00-.8-.974.41.41 0 00-.303 0c-.313.195-.627.4-.93.628a.367.367 0 01-.562-.065l-.833-.822a.379.379 0 010-.574l.638-.92a1.385 1.385 0 00-.346-.994H6.24c-.357-.065-.724-.12-1.081-.217a1.395 1.395 0 01-.39-.249V5.351c.113-.1.237-.187.368-.26.18-.069.37-.105.562-.108a.897.897 0 00.985-.778.476.476 0 000-.325c-.206-.346-.433-.67-.66-1.006a.303.303 0 010-.422l.973-.984a.292.292 0 01.4 0c.217.114.42.252.606.41a.854.854 0 001.157.12.508.508 0 00.28-.368c0-.346.141-.703.196-1.082a.357.357 0 01.389-.335h1.232a.357.357 0 01.4.357c.043.174.076.351.098.53a.953.953 0 00.843 1.027.443.443 0 00.314 0c.346-.205.681-.432 1.006-.66a.302.302 0 01.443 0l.951.963a.282.282 0 010 .4l-.378.585c-.41.595-.41.595-.119 1.244.06.096.152.169.26.205.367.087.735.141 1.08.217.196 0 .347.13.347.357v1.33a.314.314 0 01-.281.325c-.227 0-.444.108-.67.13-.444 0-.844.151-.92.703v.065a.314.314 0 000 .4c.227.314.433.638.65.952a.315.315 0 010 .465l-.93.92a.313.313 0 01-.444 0 5.049 5.049 0 01-.552-.39.919.919 0 00-1.21-.14.518.518 0 00-.282.357c-.065.346-.14.703-.205 1.082a.345.345 0 01-.325.389zM8.165 6.109a2.467 2.467 0 004.124 1.694 2.467 2.467 0 00-2.612-4.098A2.465 2.465 0 008.165 6.11z" fill="url(#paint0_linear_1070_33085)"/><path d="M5.342 21.686h-1.2a.293.293 0 01-.216-.27 2.812 2.812 0 01-.098-.509.736.736 0 00-.648-.79.357.357 0 00-.238 0c-.26.163-.52.325-.757.51a.304.304 0 01-.465 0c-.227-.228-.444-.455-.681-.672a.303.303 0 010-.465l.519-.757a1.169 1.169 0 00-.282-.811H1.19c-.292-.055-.584-.098-.876-.174A1.726 1.726 0 010 17.543v-1.266a.942.942 0 01.303-.205 1.32 1.32 0 01.454-.098.735.735 0 00.8-.638.411.411 0 000-.26 21.491 21.491 0 00-.54-.822.227.227 0 010-.335l.79-.8a.216.216 0 01.324 0c.175.092.342.2.497.324a.681.681 0 00.94.097.412.412 0 00.228-.292c0-.292.119-.573.162-.855a.281.281 0 01.314-.27h1.005a.28.28 0 01.325.281c.036.146.06.294.075.444a.79.79 0 00.693.833.357.357 0 00.26 0c.28-.162.54-.357.81-.541a.26.26 0 01.368 0l.767.79a.216.216 0 010 .324c-.108.152-.205.314-.313.476-.325.487-.335.487-.087 1.006a.357.357 0 00.206.173l.897.173c.163 0 .281.109.281.293v1.081a.249.249 0 01-.227.27c-.183 0-.356.087-.54.109-.368 0-.692.119-.757.563a.151.151 0 010 .064c-.087.109-.065.206 0 .325.065.119.346.52.519.768a.249.249 0 010 .379l-.757.746a.238.238 0 01-.357 0 3.324 3.324 0 01-.454-.303.735.735 0 00-.984-.119.367.367 0 00-.227.292c-.054.282-.12.563-.162.855-.044.292-.13.249-.27.281zM2.77 16.872a2.002 2.002 0 003.415 1.415c.375-.375.586-.884.586-1.415a2.034 2.034 0 00-1.98-2.034 2.01 2.01 0 00-2.021 2.034z" fill="url(#paint1_linear_1070_33085)"/><path d="M13.863 19.415h-.768c-.086 0-.119-.087-.14-.174-.022-.086-.054-.216-.054-.324a.465.465 0 00-.411-.498.27.27 0 00-.162 0 4.633 4.633 0 00-.476.325.206.206 0 01-.303 0c-.14-.14-.281-.292-.432-.422a.205.205 0 010-.303c.119-.151.227-.314.335-.476a.713.713 0 00-.184-.52h-.054a4.97 4.97 0 01-.552-.107.825.825 0 01-.205-.13v-.79a.77.77 0 01.195-.13c.094-.033.192-.055.292-.065a.465.465 0 00.508-.4.312.312 0 000-.173 14.22 14.22 0 00-.346-.52.142.142 0 01-.038-.167.142.142 0 01.038-.049l.508-.508a.138.138 0 01.103-.045.14.14 0 01.102.045c.113.056.218.124.314.205a.432.432 0 00.595.065.27.27 0 00.151-.194c0-.184.076-.357.098-.541a.184.184 0 01.205-.174h.638a.173.173 0 01.205.184c.006.094.006.188 0 .282a.498.498 0 00.433.53.237.237 0 00.173 0l.519-.346a.15.15 0 01.176-.038.15.15 0 01.051.038c.173.162.335.335.497.497a.15.15 0 010 .217l-.194.303c-.216.302-.216.302-.065.638a.205.205 0 00.14.108l.574.119a.175.175 0 01.126.054.172.172 0 01.047.13v.692a.154.154 0 01-.037.11.153.153 0 01-.104.053l-.346.075c-.238 0-.443.076-.487.357a.162.162 0 000 .216l.336.487a.163.163 0 010 .238l-.487.487a.162.162 0 01-.227 0 1.781 1.781 0 01-.292-.205.465.465 0 00-.627-.065.228.228 0 00-.14.184c0 .173-.076.357-.109.54a.184.184 0 01-.119.184zm-1.643-3.073a1.277 1.277 0 102.553 0 1.277 1.277 0 00-2.553 0z" fill="url(#paint2_linear_1070_33085)"/></symbol><symbol id="b35-5" viewBox="0 0 53 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.552 14.278c3.574.447 26.027 3.348 26.526-.37l.67-5.213a2.168 2.168 0 00-.3-1.413c-.322-.548-3.448-.522-4.144-.622L6.8.856C6.06.756 1.74.234 1.25.73c-.303.33-.493.747-.544 1.191l-.695 5.21c-.574 4.417 21.827 6.659 25.527 7.147h.014z" fill="#FFB438"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.243 1.674C13.074-.176 1.465-.546 1.291.831c-.174 1.376 11.14 4.017 25.305 5.856 14.165 1.839 25.752 2.22 25.952.818.2-1.403-11.165-3.996-25.305-5.83z" fill="#FCD471"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.166 2.27C15.556.757 5.63.235 2.356.879 7.57.83 16.722 1.526 27.07 2.89c10.348 1.366 19.4 3 24.417 4.366-3.004-1.44-12.704-3.474-24.317-4.987h-.003z" fill="#FFB438"/></symbol><symbol id="b37-5" viewBox="0 0 283 213"><path d="M245.263 188.613h7.701v-7.701h-7.701v7.701zM225.245 188.613h7.701v-7.701h-7.701v7.701zM255.276 130.458h-7.701v7.701h7.701v-7.701zM244.498 130.458h-7.702v7.701h7.702v-7.701zM235.264 130.458h-7.701v7.701h7.701v-7.701zM255.276 121.218h-7.701v7.701h7.701v-7.701zM235.264 121.218h-7.701v7.701h7.701v-7.701zM224.485 121.218h-7.701v7.701h7.701v-7.701zM244.498 110.439h-7.702v7.701h7.702v-7.701zM235.264 110.439h-7.701v7.701h7.701v-7.701zM255.276 99.66h-7.701v7.701h7.701v-7.7zM244.498 99.66h-7.702v7.701h7.702v-7.7zM235.264 99.66h-7.701v7.701h7.701v-7.7zM270.483 89.627h-7.701v7.702h7.701v-7.702zM270.483 99.244h-7.701v7.701h7.701v-7.701zM255.276 88.881h-7.701v7.701h7.701v-7.7zM235.264 88.881h-7.701v7.701h7.701v-7.7zM224.485 88.881h-7.701v7.701h7.701v-7.7zM282.022 94.809h-7.701v7.701h7.701v-7.701zM244.498 79.642h-7.702v7.7h7.702v-7.7zM235.264 79.642h-7.701v7.7h7.701v-7.7zM244.498 68.862h-7.702v7.701h7.702v-7.7zM235.264 68.862h-7.701v7.701h7.701v-7.7zM224.485 68.862h-7.701v7.701h7.701v-7.7zM255.276 58.084h-7.701v7.7h7.701v-7.7zM235.264 58.084h-7.701v7.7h7.701v-7.7zM224.485 58.084h-7.701v7.7h7.701v-7.7zM235.264 48.844h-7.701v7.7h7.701v-7.7zM255.276 38.065h-7.701v7.701h7.701v-7.701zM244.498 38.065h-7.702v7.701h7.702v-7.701zM235.264 38.065h-7.701v7.701h7.701v-7.701zM224.485 38.065h-7.701v7.701h7.701v-7.701zM244.498 27.286h-7.702v7.7h7.702v-7.7zM224.485 27.286h-7.701v7.7h7.701v-7.7zM255.276 18.046h-7.701v7.701h7.701v-7.701zM235.264 18.046h-7.701v7.701h7.701v-7.701zM231.414.702h-7.702v7.7h7.702v-7.7zM244.498 172.035h-7.702v7.701h7.702v-7.701zM255.276 161.256h-7.701v7.701h7.701v-7.701zM244.498 161.256h-7.702v7.701h7.702v-7.701zM235.264 161.256h-7.701v7.701h7.701v-7.701zM232.953 196.637h-7.702v7.701h7.702v-7.701zM235.264 152.016h-7.701v7.701h7.701v-7.701zM224.485 152.016h-7.701v7.701h7.701v-7.701zM244.498 141.237h-7.702v7.701h7.702v-7.701zM235.264 141.237h-7.701v7.701h7.701v-7.701zM266.633 112.724h-7.701v7.701h7.701v-7.701zM37.609 24.517h-7.701v7.701h7.7v-7.7zM57.627 24.517h-7.7v7.701h7.7v-7.7zM35.297 74.971h-7.701v7.701h7.7v-7.7zM46.076 74.971h-7.702v7.701h7.702v-7.7zM55.316 74.971h-7.701v7.701h7.7v-7.7zM35.297 84.21h-7.701v7.702h7.7v-7.701zM55.316 84.21h-7.701v7.702h7.7v-7.701zM66.095 84.21h-7.701v7.702h7.7v-7.701zM46.076 94.99h-7.702v7.701h7.702V94.99zM55.316 94.99h-7.701v7.701h7.7V94.99zM35.297 105.769h-7.701v7.701h7.7v-7.701zM46.076 105.769h-7.702v7.701h7.702v-7.701zM55.316 105.769h-7.701v7.701h7.7v-7.701zM20.09 115.809h-7.701v7.701h7.7v-7.701zM20.09 106.186h-7.701v7.701h7.7v-7.701zM35.297 116.548h-7.701v7.701h7.7v-7.701zM55.316 116.548h-7.701v7.701h7.7v-7.701zM66.095 116.548h-7.701v7.701h7.7v-7.701zM8.558 110.627H.857v7.702h7.701v-7.702zM46.076 125.788h-7.702v7.701h7.702v-7.701zM55.316 125.788h-7.701v7.701h7.7v-7.701zM46.076 136.566h-7.702v7.702h7.702v-7.702zM55.316 136.566h-7.701v7.702h7.7v-7.702zM66.095 136.566h-7.701v7.702h7.7v-7.702zM35.297 147.345h-7.701v7.701h7.7v-7.701zM55.316 147.345h-7.701v7.701h7.7v-7.701zM66.095 147.345h-7.701v7.701h7.7v-7.701zM55.316 156.585h-7.701v7.702h7.7v-7.702zM35.297 167.364h-7.701v7.701h7.7v-7.701zM46.076 167.364h-7.702v7.701h7.702v-7.701zM55.316 167.364h-7.701v7.701h7.7v-7.701zM66.095 167.364h-7.701v7.701h7.7v-7.701zM46.076 178.143h-7.702v7.701h7.702v-7.701zM66.095 178.143h-7.701v7.701h7.7v-7.701zM35.297 187.383h-7.701v7.701h7.7v-7.701zM55.316 187.383h-7.701v7.701h7.7v-7.701zM59.166 204.734h-7.7v7.701h7.7v-7.701zM46.076 33.395h-7.702v7.7h7.702v-7.7zM35.297 44.173h-7.701v7.701h7.7v-7.7zM46.076 44.173h-7.702v7.701h7.702v-7.7zM55.316 44.173h-7.701v7.701h7.7v-7.7zM57.627 8.792h-7.7v7.702h7.7V8.792zM55.316 53.413h-7.701v7.701h7.7v-7.7zM66.095 53.413h-7.701v7.701h7.7v-7.7zM46.076 64.192h-7.702v7.701h7.702v-7.701zM55.316 64.192h-7.701v7.701h7.7v-7.701zM23.94 92.705h-7.7v7.701h7.7v-7.7z" fill="currentColor"/></symbol><symbol id="b37-6" viewBox="0 0 50 65"><path d="M45.364 7.444L24.996 0 4.833 7.342C2.259 8.62 0 9.325 0 11.754v12.217a46.861 46.861 0 006.642 24.291A41.695 41.695 0 0025.201 65c8.24-2.735 14.394-10.03 18.156-16.268a46.807 46.807 0 006.642-24.291V13.47c0-3.48-1.81-5.188-4.635-6.027z" fill="currentColor"/></symbol><symbol id="b37-7" viewBox="0 0 38 49"><path d="M26.232 12.122l-.717-3.359a11.241 11.241 0 00-5.024-7.026A11.507 11.507 0 0011.906.276a11.38 11.38 0 00-7.117 4.96 11.115 11.115 0 00-1.48 8.474l.726 3.416a6.332 6.332 0 00-3.297 2.908 6.206 6.206 0 00-.58 4.326l4.507 19.702c.18.81.52 1.575 1.001 2.254a6.334 6.334 0 001.801 1.702 6.449 6.449 0 004.817.829l20.714-4.622a6.4 6.4 0 002.283-.985 6.314 6.314 0 001.724-1.776 6.198 6.198 0 00.84-4.751l-4.575-19.75a6.274 6.274 0 00-2.568-3.768 6.422 6.422 0 00-4.47-1.073zm-3.315 22.706L17.5 36.034v-4.057a3.388 3.388 0 01-1.47-.933 3.325 3.325 0 01-.802-1.533 3.298 3.298 0 01.08-1.724c.18-.558.504-1.06.94-1.454a3.425 3.425 0 013.297-.722 3.388 3.388 0 011.476.924 3.325 3.325 0 01-.032 4.571c.766 1.426 1.93 3.722 1.93 3.722zm.911-22.209L6.381 16.504l-.717-3.32A8.735 8.735 0 016.82 6.523a8.943 8.943 0 015.59-3.903 9.043 9.043 0 016.747 1.142A8.834 8.834 0 0123.11 9.28l.717 3.34z" fill="currentColor"/></symbol><symbol id="b37-8" viewBox="0 0 43 42"><path d="M42.245 11.633a58.258 58.258 0 00-.02-1.267c-.024-.92-.079-1.848-.243-2.759a9.263 9.263 0 00-.87-2.623 8.862 8.862 0 00-3.878-3.856 9.403 9.403 0 00-2.637-.863C33.68.1 32.747.047 31.82.022c-.425-.012-.85-.017-1.275-.02C30.04 0 29.536 0 29.032 0H13.216c-.505 0-1.01 0-1.514.003-.425.003-.85.007-1.275.019a33.29 33.29 0 00-.695.025c-.697.034-1.394.095-2.08.218a9.698 9.698 0 00-2 .572A8.92 8.92 0 003.279 2.28a8.847 8.847 0 00-2.144 2.703 9.268 9.268 0 00-.869 2.623c-.164.91-.219 1.839-.244 2.759a60.3 60.3 0 00-.02 1.267C0 12.135 0 12.637 0 13.138v15.724c0 .502 0 1.003.003 1.505.003.422.007.845.02 1.267.024.92.079 1.849.243 2.758a9.27 9.27 0 00.87 2.624 8.862 8.862 0 003.879 3.856 9.403 9.403 0 002.637.863c.915.164 1.85.218 2.775.243.425.011.85.016 1.275.019.505.003 1.009.003 1.514.003h15.816c.505 0 1.01 0 1.514-.003.425-.003.85-.008 1.275-.019.926-.025 1.86-.08 2.775-.243a9.403 9.403 0 002.638-.863 8.864 8.864 0 003.878-3.856c.43-.84.703-1.7.87-2.624.164-.91.219-1.838.244-2.758.011-.422.016-.845.019-1.267.003-.502.003-1.003.003-1.505V13.138c0-.502 0-1.003-.003-1.505z" fill="#F05138"/><path d="M33.477 25.925a.091.091 0 00-.003-.003c.046-.158.095-.315.136-.477 1.753-6.945-2.527-15.156-9.768-19.48 3.173 4.277 4.576 9.458 3.33 13.988a11.68 11.68 0 01-.393 1.169 9.648 9.648 0 00-.634-.373s-7.203-4.421-15.011-12.242c-.205-.206 4.163 6.207 9.12 11.413-2.335-1.303-8.844-6.01-12.965-9.76a18.6 18.6 0 001.77 2.425c3.442 4.339 7.93 9.692 13.306 13.802-3.778 2.299-9.115 2.477-14.43.003a21.824 21.824 0 01-3.694-2.191 22.09 22.09 0 009.931 8.465c5.029 2.149 10.03 2.003 13.755.035l-.003.005.056-.033c.153-.082.305-.165.453-.253 1.79-.924 5.324-1.86 7.221 1.81.465.897 1.452-3.862-2.177-8.303z" fill="#fff"/></symbol><symbol id="b37-9" viewBox="0 0 82 30"><path d="M4.281 21.256c.33 2.914 3.126 4.824 7.008 4.824 3.689 0 6.348-1.91 6.348-4.553 0-2.278-1.61-3.668-5.319-4.594l-3.591-.907c-5.164-1.274-7.494-3.59-7.494-7.41 0-4.71 4.135-7.971 10.018-7.971 5.707 0 9.764 3.28 9.9 8.01h-3.785c-.292-2.896-2.66-4.672-6.213-4.672-3.514 0-5.96 1.795-5.96 4.42 0 2.045 1.515 3.262 5.242 4.207l2.99.772c5.785 1.41 8.153 3.648 8.153 7.681 0 5.134-4.096 8.357-10.619 8.357-6.057 0-10.191-3.205-10.502-8.164h3.824zM45.624 28.956h-3.806l-4.445-15.4h-.078l-4.425 15.4h-3.805L23.435 8.79h3.688l3.921 16.191h.078L35.548 8.79h3.572l4.465 16.191h.078L47.584 8.79h3.65l-5.61 20.167zM53.69 3.366c0-1.216 1.01-2.2 2.234-2.2 1.242 0 2.251.984 2.251 2.2 0 1.216-1.009 2.22-2.251 2.22-1.223 0-2.233-1.004-2.233-2.22zm.39 5.423h3.707v20.167H54.08V8.79zM82 11.76V8.789h-3.922V3.964H74.39v4.824h-7.088V7.013c.02-1.795.718-2.547 2.388-2.547a9.31 9.31 0 011.534.135V1.706a13.017 13.017 0 00-1.961-.154c-3.96 0-5.63 1.64-5.63 5.404v1.832H60.8v2.973h2.834v17.195h3.688V11.76H74.39v11.907c0 3.899 1.495 5.403 5.377 5.403.835 0 1.786-.057 2.213-.154v-3.01c-.252.039-.99.096-1.398.096-1.727 0-2.503-.81-2.503-2.624V11.761h3.92z" fill="currentColor"/></symbol><symbol id="b38-12" viewBox="0 0 36 36"><path d="M32.724 27.488l2.674-6.177-5.264-2.265A12.57 12.57 0 0030 16.29l5.302-2.7-3.051-6-5.035 2.564a12.476 12.476 0 00-1.783-1.75l2.158-5L21.419.73l-2.156 4.997a12.54 12.54 0 00-2.496-.099L15.181.202l-6.456 1.89 1.669 5.714a12.622 12.622 0 00-2.095 1.79L3.035 7.333.36 13.509l4.794 2.073a12.57 12.57 0 00-.206 4.197L0 22.29l3.051 6 4.475-2.28c.6.78 1.291 1.488 2.057 2.107l-1.88 4.359 6.172 2.676 1.88-4.359c.977.137 1.966.158 2.948.064l1.41 4.822 6.455-1.89-1.561-5.353a12.534 12.534 0 002.917-3.02l4.8 2.07zm-17.84-3.16a6.614 6.614 0 01-3.99-6.175 6.621 6.621 0 014.172-6.053 6.607 6.607 0 017.184 1.543 6.62 6.62 0 01-4.843 11.226 6.608 6.608 0 01-2.522-.542z" fill="currentColor"/></symbol><symbol id="b38-13" viewBox="0 0 41 42"><path d="M21.002 41.5c11.044-.157 19.868-9.501 19.707-20.871C40.549 9.259 31.465.168 20.42.324 9.375.48.552 9.824.713 21.194c.16 11.37 9.244 20.461 20.289 20.305z" fill="#ED7066"/><path d="M21.87 19.08c-1.723-.715-2.909-1.313-3.661-2.007a.875.875 0 01-.192-.192 2.998 2.998 0 01-.848-2.12c-.02-1.533 1.04-3.337 3.91-3.375a8.674 8.674 0 014.743 1.253l.884-2.564c-1.078-.637-2.62-1.235-4.874-1.273l-.038-3.741h-.502l-1.83.038.038 1.947.019 1.948c-3.43.617-5.608 3.066-5.554 6.268a5.258 5.258 0 00.366 1.968c.023.093.055.183.095.27.868 1.967 2.93 3.22 5.801 4.338 2.775 1.12 4.258 2.392 4.277 4.514.04 2.198-1.724 3.799-4.394 3.833a9.647 9.647 0 01-5.394-1.581l-.83 2.507-.038.096c1.34.945 3.585 1.6 5.745 1.6l.058 3.897 2.35-.038-.058-4.012a7.525 7.525 0 002.852-1.1 6.34 6.34 0 002.968-5.515c-.044-3.43-2.02-5.393-5.892-6.96z" fill="#fff"/></symbol><symbol id="b42-6" viewBox="0 0 21 6"><path d="M5.327 2.783a2.441 2.441 0 01-2.939 2.362A2.438 2.438 0 01.647 1.8a2.44 2.44 0 014.506.046c.12.298.179.616.174.937zM13.127 2.865a2.441 2.441 0 01-2.941 2.362 2.438 2.438 0 01-1.738-3.35 2.44 2.44 0 014.505.053c.119.297.178.615.174.935zM20.92 2.947a2.44 2.44 0 01-2.939 2.362 2.438 2.438 0 01-1.742-3.345 2.44 2.44 0 013.985-.75c.453.462.703 1.086.696 1.733z" fill="currentColor"/></symbol><symbol id="b42-7" viewBox="0 0 50 50"><path d="M45.059 17.491H25.102l1.03-8.906a12.83 12.83 0 00-.28-4.56l-.494-2.044a2.579 2.579 0 00-.89-1.416 2.543 2.543 0 00-3.144-.038A2.578 2.578 0 0020.4 1.92l-3.1 11.56-5.553 10.194-2.385 2.25v-2.173H.69v26.22h8.67v-1.314l6.5.73h23.951c1.048 0 2.053-.42 2.794-1.167a4.002 4.002 0 00.857-4.343 3.988 3.988 0 00-.857-1.293 3.948 3.948 0 00-2.794-1.167h1.158a3.945 3.945 0 002.796-1.173 4.01 4.01 0 00-.001-5.638 3.936 3.936 0 00-2.795-1.167h.793c1.048 0 2.053-.42 2.794-1.167a4.002 4.002 0 001.158-2.818c0-1.057-.417-2.07-1.158-2.818a3.936 3.936 0 00-2.794-1.167h3.296c1.048 0 2.053-.42 2.794-1.167a4.002 4.002 0 001.158-2.818 4.015 4.015 0 00-1.155-2.823 3.95 3.95 0 00-2.797-1.17z" fill="currentColor"/></symbol><symbol id="b42-8" viewBox="0 0 56 56"><path d="M49.478 45.282a27.419 27.419 0 00-2.166-37.03 27.368 27.368 0 00-37.05-.948 27.42 27.42 0 00-4.053 36.87 27.362 27.362 0 0036.37 7.136l8.771 4.165-1.872-10.193z" fill="currentColor"/></symbol><symbol id="b42-9" viewBox="0 0 68 54"><path d="M62.565.926H5.09A4.886 4.886 0 00.2 5.818v47.554l9.841-7.19h52.524a4.886 4.886 0 004.889-4.892V5.826A4.897 4.897 0 0064.438 1.3a4.885 4.885 0 00-1.873-.373z" fill="currentColor"/></symbol><symbol id="b45-6" viewBox="0 0 41 40"><path d="M36.205 20.432c0-3.012-.894-5.957-2.57-8.462a15.255 15.255 0 00-23.454-2.308 15.227 15.227 0 00-3.303 16.6 15.234 15.234 0 005.614 6.835 15.253 15.253 0 0019.248-1.895 15.225 15.225 0 004.465-10.77zm-26.528.345a11.268 11.268 0 016.967-10.415 11.292 11.292 0 0112.296 2.445 11.271 11.271 0 012.445 12.286 11.276 11.276 0 01-10.424 6.96 11.291 11.291 0 01-7.98-3.303 11.274 11.274 0 01-3.304-7.973z" fill="currentColor"/><path d="M40.758 22.51v-4.153h-5.94v4.154h5.94zM38.63 30.36l1.759-3.764-5.382-2.51-1.758 3.763 5.382 2.51zM33.466 36.359l3.106-2.76-3.947-4.435-3.106 2.76 3.947 4.435zM26.984 39.692l3.809-1.664-2.379-5.437-3.808 1.663 2.378 5.438zM18.783 6.734h4.157V.8h-4.157v5.934zM18.783 39.967h4.157v-5.934h-4.157v5.934zM33.253 12.926l1.758 3.763 5.382-2.51-1.758-3.763-5.382 2.51zM29.524 8.846l3.106 2.76 3.947-4.434-3.105-2.76-3.948 4.434zM24.578 6.573l3.81 1.662 2.377-5.438-3.809-1.662-2.378 5.438zM6.905 22.558v-4.153H.966v4.153h5.94zM8.463 27.89l-1.757-3.763-5.382 2.51L3.082 30.4l5.382-2.51zM12.189 31.976l-3.106-2.76-3.947 4.434 3.106 2.76 3.947-4.434zM17.11 34.294l-3.81-1.663-2.378 5.438 3.809 1.663 2.378-5.438zM3.09 10.452l-1.758 3.764 5.382 2.51 1.758-3.764-5.382-2.51zM8.261 4.462l-3.105 2.76 3.947 4.434 3.105-2.76-3.947-4.434zM14.743 1.128L10.934 2.79l2.379 5.438 3.808-1.664-2.378-5.437z" fill="currentColor"/></symbol><symbol id="b46-10" viewBox="0 0 37 77"><mask id="b46-10-a" fill="#fff"><path d="M12.49 76.242l-1.68-.137-1.686-.128-1.687-.117-1.692-.118-.689-.058-.64-.071-.588-.088-.544-.102-.498-.118-.455-.135-.415-.15-.382-.172-.342-.204-.309-.218-.273-.254-.227-.284-.18-.313-.125-.342-.06-.348.001-.344.046-.342.085-.323.116-.313.15-.305.173-.296.203-.29.218-.289.244-.296.51-.554.585-.565.636-.564.674-.559.702-.555.724-.549 1.439-1.055 1.373-.986 1.205-.89a.856.856 0 011.005 1.384l-1.218.896-1.375.989-1.42 1.045-.694.529-.674.53-.636.53-.588.518-.522.506-.456.495-.18.22-.165.217-.06.089.631-.021 1.092-.086 1.087-.138 1.08-.185 1.073-.232 1.065-.28 1.057-.322 1.047-.365 1.037-.412 1.027-.448 1.013-.491 1.001-.53.99-.565.971-.602.957-.639.944-.67.923-.704.905-.738.887-.765.867-.792.846-.824.824-.847.801-.872.777-.897.754-.919.729-.939.702-.96.676-.975.645-.992.612-1.009.589-1.022.559-1.035.527-1.05.494-1.057.462-1.064.428-1.076.393-1.079.36-1.084.32-1.087.286-1.09.246-1.09.208-1.09.168-1.089.13-1.081.087-1.08.048-1.074.005-1.064-.04-1.06-.07-.933-.1-.931-.133-.93-.163-.927-.198-.921-.224-.92-.25-.915-.28-.908-.308-.903-.334-.898-.361-.89-.388-.882-.412-.876-.437-.863-.463-.856-.483-.854-.507-.834-.532-.824-.552-.812-.572-.8-.603-.785-.615-.774-.631-.758-.654-.743-.67-.73-.685-.711-.704-.693-.721-.68-.735-.658-.75-.641-.766-.623-.777-.6-.792-.583-.806-.562-.806-.538-.827-.516-.836-.495-.845-.472-.857-.447-.863-.423-.872-.398-.88-.37-.885-.349-.89-.318-.897-.291-.9-.268-.905-.235-.92-.206A.858.858 0 015.928.047l.947.207.955.25.949.28.944.305.939.337.928.364.914.407.916.41.903.443.896.467.885.494.875.516.863.54.852.579.838.584.826.611.806.627.805.65.781.667.767.687.75.706.733.723.717.742.696.758.675.77.661.79.64.812.618.813.603.834.576.846.556.86.531.875.505.884.485.895.459.908.43.917.4.924.38.936.35.943.326.952.294.958.264.965.236.972.198.976.17.982.144.983.106.992.074.994.043 1.125-.005 1.134-.052 1.141-.09 1.143-.138 1.148-.18 1.146-.217 1.148-.26 1.146-.3 1.143-.336 1.14-.375 1.137-.41 1.126-.446 1.123-.48 1.112-.518 1.102-.547 1.09-.581 1.08-.612 1.062-.642 1.051-.674 1.033-.702 1.008-.729.995-.757.978-.785.953-.813.933-.835.91-.858.882-.881.855-.904.83-.926.804-.946.768-.966.738-.985.703-1.015.669-1.013.634-1.038.602-1.054.56-1.072.516-1.084.474-1.098.434-1.112.399-1.122.34-1.133.298-1.146.248-1.153.196-1.161.148-1.171.094-.168-.001.202.072.359.105.416.099.473.09.527.076.584.068.649.052 1.687.117 1.692.12 1.706.107 1.695.14 1.698.16 1.689.186a.859.859 0 01-.186 1.708l-1.677-.186-1.672-.152z"/></mask><path d="M12.49 76.242l-1.68-.137-1.686-.128-1.687-.117-1.692-.118-.689-.058-.64-.071-.588-.088-.544-.102-.498-.118-.455-.135-.415-.15-.382-.172-.342-.204-.309-.218-.273-.254-.227-.284-.18-.313-.125-.342-.06-.348.001-.344.046-.342.085-.323.116-.313.15-.305.173-.296.203-.29.218-.289.244-.296.51-.554.585-.565.636-.564.674-.559.702-.555.724-.549 1.439-1.055 1.373-.986 1.205-.89a.856.856 0 011.005 1.384l-1.218.896-1.375.989-1.42 1.045-.694.529-.674.53-.636.53-.588.518-.522.506-.456.495-.18.22-.165.217-.06.089.631-.021 1.092-.086 1.087-.138 1.08-.185 1.073-.232 1.065-.28 1.057-.322 1.047-.365 1.037-.412 1.027-.448 1.013-.491 1.001-.53.99-.565.971-.602.957-.639.944-.67.923-.704.905-.738.887-.765.867-.792.846-.824.824-.847.801-.872.777-.897.754-.919.729-.939.702-.96.676-.975.645-.992.612-1.009.589-1.022.559-1.035.527-1.05.494-1.057.462-1.064.428-1.076.393-1.079.36-1.084.32-1.087.286-1.09.246-1.09.208-1.09.168-1.089.13-1.081.087-1.08.048-1.074.005-1.064-.04-1.06-.07-.933-.1-.931-.133-.93-.163-.927-.198-.921-.224-.92-.25-.915-.28-.908-.308-.903-.334-.898-.361-.89-.388-.882-.412-.876-.437-.863-.463-.856-.483-.854-.507-.834-.532-.824-.552-.812-.572-.8-.603-.785-.615-.774-.631-.758-.654-.743-.67-.73-.685-.711-.704-.693-.721-.68-.735-.658-.75-.641-.766-.623-.777-.6-.792-.583-.806-.562-.806-.538-.827-.516-.836-.495-.845-.472-.857-.447-.863-.423-.872-.398-.88-.37-.885-.349-.89-.318-.897-.291-.9-.268-.905-.235-.92-.206A.858.858 0 015.928.047l.947.207.955.25.949.28.944.305.939.337.928.364.914.407.916.41.903.443.896.467.885.494.875.516.863.54.852.579.838.584.826.611.806.627.805.65.781.667.767.687.75.706.733.723.717.742.696.758.675.77.661.79.64.812.618.813.603.834.576.846.556.86.531.875.505.884.485.895.459.908.43.917.4.924.38.936.35.943.326.952.294.958.264.965.236.972.198.976.17.982.144.983.106.992.074.994.043 1.125-.005 1.134-.052 1.141-.09 1.143-.138 1.148-.18 1.146-.217 1.148-.26 1.146-.3 1.143-.336 1.14-.375 1.137-.41 1.126-.446 1.123-.48 1.112-.518 1.102-.547 1.09-.581 1.08-.612 1.062-.642 1.051-.674 1.033-.702 1.008-.729.995-.757.978-.785.953-.813.933-.835.91-.858.882-.881.855-.904.83-.926.804-.946.768-.966.738-.985.703-1.015.669-1.013.634-1.038.602-1.054.56-1.072.516-1.084.474-1.098.434-1.112.399-1.122.34-1.133.298-1.146.248-1.153.196-1.161.148-1.171.094-.168-.001.202.072.359.105.416.099.473.09.527.076.584.068.649.052 1.687.117 1.692.12 1.706.107 1.695.14 1.698.16 1.689.186a.859.859 0 01-.186 1.708l-1.677-.186-1.672-.152z" fill="#747474" stroke="#747474" stroke-width="2" mask="url(#b46-10-a)"/></symbol><symbol id="b46-11" viewBox="0 0 75 75"><path d="M37.493 37.501c10.356 0 18.75-8.395 18.75-18.75C56.244 8.395 47.85 0 37.494 0s-18.75 8.395-18.75 18.75c0 10.356 8.394 18.751 18.75 18.751z" fill="#CF373A"/><path d="M37.266 40.494C38.912 30.27 31.959 20.647 21.736 19 11.51 17.353 1.887 24.306.24 34.53c-1.646 10.224 5.307 19.848 15.53 21.494 10.225 1.647 19.848-5.306 21.495-15.53z" fill="#28AA4B"/><path d="M50.75 69.508c7.322-7.323 7.322-19.195 0-26.517-7.323-7.323-19.196-7.323-26.518 0-7.323 7.322-7.323 19.194 0 26.517 7.322 7.323 19.195 7.323 26.517 0z" fill="#F7C100"/><path d="M56.236 56.252c10.355 0 18.75-8.395 18.75-18.75 0-10.357-8.395-18.752-18.75-18.752-10.356 0-18.75 8.395-18.75 18.751 0 10.356 8.394 18.75 18.75 18.75z" fill="#E94530"/><circle cx="37.618" cy="37.369" r="17.937" fill="#4873E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29.514 26.289a1.489 1.489 0 00-.745.729l-.119.249v20.952l.134.271c.164.331.411.568.753.721l.257.116h15.648l.257-.116c.341-.153.589-.39.753-.72l.134-.272v-7.867c0-6.9-.008-7.885-.07-8.01-.094-.193-6.176-6.076-6.344-6.136-.089-.032-1.787-.048-5.255-.048h-5.123l-.28.13zm9.599 3.66v2.34l.134.273c.164.33.412.567.753.72l.257.116h4.835V47.88H30.144V27.607H39.113v2.342zm3.2.372l1.68 1.63h-3.386v-1.63c0-.896.006-1.629.012-1.629.007 0 .769.733 1.693 1.63zM40.99 34.92a.844.844 0 00-.257.217l-.103.14-.013 5.31c-.013 5.882-.032 5.501.287 5.722.208.144.691.144.9 0 .316-.22.297.15.297-5.669 0-5.813.019-5.45-.294-5.666-.19-.132-.604-.158-.817-.053zm-3.737 2.897a.845.845 0 00-.256.216l-.104.14-.013 3.861c-.013 4.276-.028 4.057.287 4.275.208.144.691.144.9 0 .312-.216.297-.007.297-4.22 0-4.21.014-4.006-.294-4.22-.19-.13-.604-.157-.817-.052zm-3.736 2.896a.845.845 0 00-.257.216c-.104.14-.104.144-.117 2.553-.014 2.671-.02 2.615.287 2.827.115.08.21.1.45.1.24 0 .335-.02.45-.1.302-.21.297-.162.297-2.773 0-2.607.005-2.564-.294-2.77-.19-.131-.604-.158-.817-.053z" fill="#FFF8F8"/></symbol><symbol id="b46-3" viewBox="0 0 56 56"><path d="M10.774 27.51a16.696 16.696 0 012.207-8.327c.265-.462.158-1.057-.273-1.37l-7.115-5.166a.972.972 0 00-1.399.258A27.582 27.582 0 00.817 34.19a.972.972 0 001.25.68l8.392-2.716c.509-.165.795-.7.683-1.223a16.645 16.645 0 01-.368-3.42z" fill="#28AA4B"/><path d="M28.41 9.812c0 .532.418.968.947 1.025a16.77 16.77 0 0112.82 8.485c.26.465.824.678 1.314.47l8.092-3.434a.972.972 0 00.5-1.332A27.524 27.524 0 0029.44.05a.972.972 0 00-1.03.98v8.78z" fill="#CF373A"/><path d="M44.177 21.396c-.491.206-.73.762-.577 1.273a16.77 16.77 0 01-5.912 18.193c-.424.322-.557.91-.283 1.366l4.525 7.534a.972.972 0 001.39.309 27.546 27.546 0 0010.249-31.51.972.972 0 00-1.303-.569l-8.089 3.404z" fill="#E94530"/><path d="M13.736 16.4c.431.315 1.03.233 1.388-.161a16.745 16.745 0 0110.626-5.404c.53-.056.949-.492.949-1.025V1.03a.972.972 0 00-1.03-.98 27.465 27.465 0 00-19.2 9.783.972.972 0 00.186 1.409l7.081 5.158z" fill="#4873E6"/><path d="M35.914 43.122c-.274-.455-.856-.613-1.339-.39a16.769 16.769 0 01-22.328-8.359c-.218-.486-.762-.748-1.268-.584L2.617 36.51a.972.972 0 00-.613 1.284A27.539 27.539 0 0040.06 52.008a.972.972 0 00.378-1.372l-4.524-7.514z" fill="#F7C100"/><path d="M19.742 26.172h-.571a1 1 0 00-1 1v5.838a1 1 0 001 1h.57a1 1 0 001-1v-5.838a1 1 0 00-1-1z" fill="#CF373A"/><path d="M23.782 24.093h-.571a1 1 0 00-1 1v7.916a1 1 0 001 1h.57a1 1 0 001-1v-7.916a1 1 0 00-1-1z" fill="#E94530"/><path d="M27.822 27.64h-.571a1 1 0 00-1 1v4.368a1 1 0 001 1h.57a1 1 0 001-1V28.64a1 1 0 00-1-1z" fill="#F7C100"/><path d="M31.862 21.92h-.571a1 1 0 00-1 1v10.09a1 1 0 001 1h.57a1 1 0 001-1V22.92a1 1 0 00-1-1z" fill="#28AA4B"/><path d="M35.902 21.03h-.57a1 1 0 00-1 1v10.979a1 1 0 001 1h.57a1 1 0 001-1v-10.98a1 1 0 00-1-1z" fill="#4873E6"/></symbol><symbol id="b46-4" viewBox="0 0 44 73"><path d="M21.58 5.754c-.07-1.639-.097-3.3-.081-4.985.006-.533-.267-.78-.82-.742 3.97-.234 7.311 1.068 10.027 3.906.038.04.06.093.058.148a.218.218 0 01-.062.149L26.91 8.05a.244.244 0 01-.171.072.234.234 0 01-.169-.072c-1.332-1.406-2.996-2.171-4.99-2.296z" fill="#CF373A"/><path d="M20.68.027c.552-.038.825.21.819.743a95.327 95.327 0 00.081 4.985c-2.438.14-4.41 1.233-5.914 3.278L11.793 4.72c2.26-2.847 5.221-4.412 8.886-4.693z" fill="#E94530"/><path d="M11.793 4.719l3.873 4.313c-.898 2.256-.858 4.493.12 6.71l-4.213 4.094C8.07 14.72 8.144 9.68 11.793 4.719z" fill="#F7C100"/><path d="M28.847 22.453a16.815 16.815 0 00-4.093-4.213 8.805 8.805 0 002.626-2.574.177.177 0 00-.148-.278l-5.474-.005a.247.247 0 01-.17-.072.237.237 0 01-.07-.168V9.746a.245.245 0 01.245-.244l11.704.096a.316.316 0 01.312.263c.86 5.209-.785 9.406-4.932 12.592z" fill="#4873E6"/><path d="M15.786 15.743c2.255 3.196 5.245 4.028 8.967 2.497a16.813 16.813 0 014.093 4.213c-5.516 4.19-13.18 2.579-17.274-2.617l4.214-4.093z" fill="#28AA4B"/><path d="M24.853 44.075l-5.74-.01a.258.258 0 00-.258.258l-.048 27.58c0 .143.115.26.258.26l5.74.01a.258.258 0 00.258-.258l.048-27.581a.258.258 0 00-.258-.26z" fill="#F7C100"/><path d="M34.539 47.47h-5.803a.159.159 0 00-.158.16v24.316c0 .088.07.159.158.159h5.803a.159.159 0 00.159-.159V47.63a.159.159 0 00-.159-.158z" fill="#28AA4B"/><path d="M15.648 50.54H9.773a.122.122 0 00-.122.122v21.29c0 .067.054.121.122.121h5.875a.122.122 0 00.123-.122V50.662a.122.122 0 00-.123-.122z" fill="#4873E6"/><path d="M43.86 55.972h-5.395a.14.14 0 00-.14.14v15.695c0 .077.062.14.14.14h5.394a.14.14 0 00.141-.14V56.112a.14.14 0 00-.14-.14zM5.602 61.977L.2 61.968c-.1 0-.182.081-.182.181L0 71.76c0 .101.081.182.181.183l5.404.009c.1 0 .181-.081.182-.181l.016-9.61c0-.101-.08-.182-.18-.182z" fill="#CF373A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.231 39.08c.924 0 1.718-.552 2.071-1.344l5.26 2.117a2.27 2.27 0 002.189 2.855c.535 0 1.026-.185 1.414-.495l6.254 5.08a2.267 2.267 0 10.667-.626l-6.34-5.15a2.267 2.267 0 00-3.777-2.477l-5.471-2.203v-.023a2.267 2.267 0 10-4.492.432l-5.865 4.608a2.267 2.267 0 00-3.203 3.17l-6.924 7.358a2.267 2.267 0 10.772.502l6.848-7.276a2.267 2.267 0 003.082-3.053l5.656-4.444c.41.586 1.09.97 1.86.97z" fill="#CF373A"/></symbol><symbol id="b46-5" viewBox="0 0 55 55"><path d="M51.977 15.57A27.291 27.291 0 0041.878 4.219 27.453 27.453 0 0027.25 0v27.253L51.977 15.57z" fill="#CF373A"/><path d="M27.25 27.265L38.53 52.15a27.367 27.367 0 008.771-6.28 27.231 27.231 0 005.648-9.17 27.149 27.149 0 00-.972-21.07L27.25 27.265z" fill="#4873E6"/><path d="M27.25.114c-4.073.018-8.091.94-11.761 2.701a27.35 27.35 0 00-9.45 7.476A27.207 27.207 0 00.735 21.09a27.142 27.142 0 00-.122 12.018A27.202 27.202 0 005.695 44.01a27.344 27.344 0 009.297 7.665 27.469 27.469 0 0023.538.576L27.25 27.367V.114z" fill="#28AA4B"/><path d="M6.52 9.715a27.31 27.31 0 0120.913-9.6l-.122 27.31L6.52 9.715z" fill="#E94530"/><path d="M14.539 51.565a27.31 27.31 0 01-7.573-42.36l20.345 18.22-12.772 24.14z" fill="#F7C100"/></symbol><symbol id="b46-6" viewBox="0 0 18 35"><mask id="b46-6-a" fill="#fff"><path d="M2.106 18.626l.31.774.328.76.354.754.378.744.404.733.421.72.446.71.466.697.486.683.51.67.524.658.546.641.561.622.584.607.6.593.619.574.635.555.651.538.668.52.683.498.697.479.714.459.727.436.738.415.02.014-.314-.009-.63-.018-.635-.02-.611-.017-.29-.006-.28-.01-.246-.004-.237-.005-.21-.006-.18-.002-.678-.011-.742-.024-.78-.033-.394-.018-.392-.02-.387-.02-.381-.019-.37-.018-.357-.012a.496.496 0 00-.055.989l.353.018.369.019.381.02.39.02.394.02.398.017.785.033.753.024.689.012.182.002.207.004.234.004.254.006.273.006.29.007.61.016.634.02.632.019.608.016.555.013.474.01.205.001.175.001h.144l.117-.002.077-.004.09-.014.005-.006.009-.003.015-.004.02-.007.02-.007.024-.01.027-.012.03-.016.033-.021.036-.029.04-.037.034-.05.04-.055.031-.068.022-.075.01-.078-.004-.074-.004-.035-.023-.082-.013-.038-.022-.052-.026-.06-.031-.071-.039-.083-.089-.195-.114-.242-.13-.276-.146-.308-.16-.336-.174-.36-.18-.378-.189-.39-.191-.4-.387-.804-.378-.782-.35-.718-.155-.325-.142-.293-.123-.257-.107-.219-.083-.172-.056-.121a.496.496 0 00-.894.43l.057.121.084.175.106.218.124.257.142.294.156.325.35.718.377.781.387.805.192.398.186.39.18.376.175.36.126.266-.49-.255-.715-.403-.703-.422-.688-.442-.674-.462-.66-.482-.646-.502-.631-.522-.62-.54-.596-.554-.58-.572-.564-.587-.546-.603-.527-.619-.509-.632-.49-.647-.469-.66-.45-.672-.43-.684-.407-.696-.388-.705-.365-.716-.342-.728-.32-.736-.297-.743-.271-.753-.248-.76-.223-.766-.197-.773-.174-.778-.146-.784-.119-.787-.093-.792-.066-.795-.035-.799-.007-.797.02-.801.051-.803.078-.804.11-.804.14-.803.171-.803.203-.8.235-.8.267-.795.3-.79.338-.799a.494.494 0 10-.91-.383l-.346.815-.287.83-.279.831-.247.834-.212.838-.178.84-.147.838-.114.842-.082.84-.053.839-.025.841.01.836.038.833.068.83.097.825.129.819.152.816.18.81.208.8.232.797.257.79.28.785z"/></mask><path d="M2.106 18.626l.31.774.328.76.354.754.378.744.404.733.421.72.446.71.466.697.486.683.51.67.524.658.546.641.561.622.584.607.6.593.619.574.635.555.651.538.668.52.683.498.697.479.714.459.727.436.738.415.02.014-.314-.009-.63-.018-.635-.02-.611-.017-.29-.006-.28-.01-.246-.004-.237-.005-.21-.006-.18-.002-.678-.011-.742-.024-.78-.033-.394-.018-.392-.02-.387-.02-.381-.019-.37-.018-.357-.012a.496.496 0 00-.055.989l.353.018.369.019.381.02.39.02.394.02.398.017.785.033.753.024.689.012.182.002.207.004.234.004.254.006.273.006.29.007.61.016.634.02.632.019.608.016.555.013.474.01.205.001.175.001h.144l.117-.002.077-.004.09-.014.005-.006.009-.003.015-.004.02-.007.02-.007.024-.01.027-.012.03-.016.033-.021.036-.029.04-.037.034-.05.04-.055.031-.068.022-.075.01-.078-.004-.074-.004-.035-.023-.082-.013-.038-.022-.052-.026-.06-.031-.071-.039-.083-.089-.195-.114-.242-.13-.276-.146-.308-.16-.336-.174-.36-.18-.378-.189-.39-.191-.4-.387-.804-.378-.782-.35-.718-.155-.325-.142-.293-.123-.257-.107-.219-.083-.172-.056-.121a.496.496 0 00-.894.43l.057.121.084.175.106.218.124.257.142.294.156.325.35.718.377.781.387.805.192.398.186.39.18.376.175.36.126.266-.49-.255-.715-.403-.703-.422-.688-.442-.674-.462-.66-.482-.646-.502-.631-.522-.62-.54-.596-.554-.58-.572-.564-.587-.546-.603-.527-.619-.509-.632-.49-.647-.469-.66-.45-.672-.43-.684-.407-.696-.388-.705-.365-.716-.342-.728-.32-.736-.297-.743-.271-.753-.248-.76-.223-.766-.197-.773-.174-.778-.146-.784-.119-.787-.093-.792-.066-.795-.035-.799-.007-.797.02-.801.051-.803.078-.804.11-.804.14-.803.171-.803.203-.8.235-.8.267-.795.3-.79.338-.799a.494.494 0 10-.91-.383l-.346.815-.287.83-.279.831-.247.834-.212.838-.178.84-.147.838-.114.842-.082.84-.053.839-.025.841.01.836.038.833.068.83.097.825.129.819.152.816.18.81.208.8.232.797.257.79.28.785z" fill="#747474" stroke="#747474" stroke-width="2" mask="url(#b46-6-a)"/></symbol><symbol id="b46-7" viewBox="0 0 9 17"><mask id="b46-7-a" fill="#fff"><path d="M4.4 15.5l-.098-.133-.1-.14-.207-.309-.208-.334-.21-.351-.21-.364-.208-.369-.202-.368-.195-.362-.187-.349-.177-.332-.163-.306-.149-.275-.13-.237-.062-.107-.056-.095-.053-.083-.05-.077-.055-.072-.047-.046a.38.38 0 10-.565.508l.018.018.02.027.034.052.042.067.047.08.055.096.127.23.143.27.162.305.177.331.187.352.198.365.205.374.212.377.216.373.217.363.222.349.216.323.111.158.108.146.112.142.108.131.108.122.11.111.107.106.112.094.115.081.123.07.134.055.147.032.158.003.164-.037.148-.076.122-.105.1-.126.075-.136.318-.68.305-.688.299-.688.29-.693.278-.697.268-.704.236-.665.22-.67.208-.67.202-.67.2-.667.207-.664a.382.382 0 00-.729-.23l-.206.668-.202.67-.201.667-.205.662-.214.655-.23.649-.263.689-.275.686-.285.682-.296.678-.304.675-.086.184.008-.643.012-.659.012-.659.01-.655.027-.648.006-.651.006-.653V9.731l-.013-.647-.009-.651-.018-.653-.018-.654-.032-.654-.033-.655-.048-.658-.048-.658-.06-.663-.069-.664-.08-.668-.09-.673-.1-.676L4.613.48a.382.382 0 00-.753.118l.11.67.1.665.087.661.078.657.069.655.058.65.048.651.047.65.032.646.032.646.019.645.02.646.009.645.009.645v.646l.002.646-.007.65-.006.649-.01.653-.01.653-.012.658-.011.659-.012.665v.027l-.017-.016-.096-.12z"/></mask><path d="M4.4 15.5l-.098-.133-.1-.14-.207-.309-.208-.334-.21-.351-.21-.364-.208-.369-.202-.368-.195-.362-.187-.349-.177-.332-.163-.306-.149-.275-.13-.237-.062-.107-.056-.095-.053-.083-.05-.077-.055-.072-.047-.046a.38.38 0 10-.565.508l.018.018.02.027.034.052.042.067.047.08.055.096.127.23.143.27.162.305.177.331.187.352.198.365.205.374.212.377.216.373.217.363.222.349.216.323.111.158.108.146.112.142.108.131.108.122.11.111.107.106.112.094.115.081.123.07.134.055.147.032.158.003.164-.037.148-.076.122-.105.1-.126.075-.136.318-.68.305-.688.299-.688.29-.693.278-.697.268-.704.236-.665.22-.67.208-.67.202-.67.2-.667.207-.664a.382.382 0 00-.729-.23l-.206.668-.202.67-.201.667-.205.662-.214.655-.23.649-.263.689-.275.686-.285.682-.296.678-.304.675-.086.184.008-.643.012-.659.012-.659.01-.655.027-.648.006-.651.006-.653V9.731l-.013-.647-.009-.651-.018-.653-.018-.654-.032-.654-.033-.655-.048-.658-.048-.658-.06-.663-.069-.664-.08-.668-.09-.673-.1-.676L4.613.48a.382.382 0 00-.753.118l.11.67.1.665.087.661.078.657.069.655.058.65.048.651.047.65.032.646.032.646.019.645.02.646.009.645.009.645v.646l.002.646-.007.65-.006.649-.01.653-.01.653-.012.658-.011.659-.012.665v.027l-.017-.016-.096-.12z" fill="#747474" stroke="#747474" stroke-width="2" mask="url(#b46-7-a)"/></symbol><symbol id="b46-8" viewBox="0 0 18 35"><mask id="b46-8-a" fill="#fff"><path d="M15.688 18.626l-.31.774-.328.76-.355.754-.378.744-.403.733-.422.72-.445.71-.466.697-.486.683-.51.67-.524.658-.546.641-.561.622-.584.607-.6.593-.62.574-.634.555-.652.538-.667.52-.683.498-.698.479-.713.459-.727.436-.739.415-.019.014.313-.009.632-.018.634-.02.611-.017.29-.006.279-.01.247-.004.237-.005.21-.006.18-.002.678-.011.742-.024.78-.033.393-.018.393-.02.387-.02.38-.019.37-.018.358-.012a.496.496 0 01.055.989l-.353.018-.37.019-.38.02-.39.02-.394.02-.398.017-.785.033-.753.024-.689.012-.182.002-.207.004-.234.004-.255.006-.273.006-.29.007-.61.016-.634.02-.63.019-.609.016-.555.013-.475.01-.204.001-.175.001H.798l-.117-.002-.077-.004-.09-.014-.005-.006-.009-.003-.016-.004-.019-.007-.021-.007-.024-.01-.026-.012-.03-.016-.033-.021-.036-.029-.04-.037-.035-.05-.04-.055-.03-.068-.022-.075-.01-.078.004-.074.004-.035.023-.082.013-.038.022-.052.026-.06.03-.071.04-.083.088-.195.115-.242.13-.276.146-.308.16-.336.174-.36.18-.378.188-.39.192-.4.387-.804.378-.782.349-.718.156-.325.141-.293.124-.257.107-.219.082-.172.057-.121a.496.496 0 01.894.43l-.057.121-.084.175-.107.218-.124.257-.141.294-.157.325-.35.718-.376.781-.388.805-.191.398-.187.39-.18.376-.174.36-.126.266.49-.255.715-.403.703-.422.688-.442.673-.462.66-.482.647-.502.63-.522.62-.54.597-.554.58-.572.564-.587.545-.603.527-.619.51-.632.489-.647.47-.66.45-.672.429-.684.408-.696.388-.705.365-.716.342-.728.32-.736.296-.743.272-.753.248-.76.223-.766.197-.773.174-.778.146-.784.118-.787.093-.792.066-.795.036-.799.006-.797-.02-.801-.05-.803-.079-.804-.109-.804-.14-.803-.171-.803-.203-.8-.236-.8-.267-.795-.299-.79-.339-.799a.494.494 0 01.91-.383l.347.815.287.83.278.831.247.834.213.838.178.84.147.838.114.842.082.84.053.839.025.841-.011.836-.037.833-.068.83-.097.825-.129.819-.152.816-.181.81-.207.8-.232.797-.258.79-.28.785z"/></mask><path d="M15.688 18.626l-.31.774-.328.76-.355.754-.378.744-.403.733-.422.72-.445.71-.466.697-.486.683-.51.67-.524.658-.546.641-.561.622-.584.607-.6.593-.62.574-.634.555-.652.538-.667.52-.683.498-.698.479-.713.459-.727.436-.739.415-.019.014.313-.009.632-.018.634-.02.611-.017.29-.006.279-.01.247-.004.237-.005.21-.006.18-.002.678-.011.742-.024.78-.033.393-.018.393-.02.387-.02.38-.019.37-.018.358-.012a.496.496 0 01.055.989l-.353.018-.37.019-.38.02-.39.02-.394.02-.398.017-.785.033-.753.024-.689.012-.182.002-.207.004-.234.004-.255.006-.273.006-.29.007-.61.016-.634.02-.63.019-.609.016-.555.013-.475.01-.204.001-.175.001H.798l-.117-.002-.077-.004-.09-.014-.005-.006-.009-.003-.016-.004-.019-.007-.021-.007-.024-.01-.026-.012-.03-.016-.033-.021-.036-.029-.04-.037-.035-.05-.04-.055-.03-.068-.022-.075-.01-.078.004-.074.004-.035.023-.082.013-.038.022-.052.026-.06.03-.071.04-.083.088-.195.115-.242.13-.276.146-.308.16-.336.174-.36.18-.378.188-.39.192-.4.387-.804.378-.782.349-.718.156-.325.141-.293.124-.257.107-.219.082-.172.057-.121a.496.496 0 01.894.43l-.057.121-.084.175-.107.218-.124.257-.141.294-.157.325-.35.718-.376.781-.388.805-.191.398-.187.39-.18.376-.174.36-.126.266.49-.255.715-.403.703-.422.688-.442.673-.462.66-.482.647-.502.63-.522.62-.54.597-.554.58-.572.564-.587.545-.603.527-.619.51-.632.489-.647.47-.66.45-.672.429-.684.408-.696.388-.705.365-.716.342-.728.32-.736.296-.743.272-.753.248-.76.223-.766.197-.773.174-.778.146-.784.118-.787.093-.792.066-.795.036-.799.006-.797-.02-.801-.05-.803-.079-.804-.109-.804-.14-.803-.171-.803-.203-.8-.236-.8-.267-.795-.299-.79-.339-.799a.494.494 0 01.91-.383l.347.815.287.83.278.831.247.834.213.838.178.84.147.838.114.842.082.84.053.839.025.841-.011.836-.037.833-.068.83-.097.825-.129.819-.152.816-.181.81-.207.8-.232.797-.258.79-.28.785z" fill="#747474" stroke="#747474" stroke-width="2" mask="url(#b46-8-a)"/></symbol><symbol id="b46-9" viewBox="0 0 37 77"><mask id="b46-9-a" fill="#fff"><path d="M23.822 76.242l1.68-.137 1.685-.128 1.688-.117 1.691-.118.69-.058.64-.071.588-.088.543-.102.499-.118.454-.135.416-.15.381-.172.343-.204.308-.218.274-.254.227-.284.18-.313.124-.342.061-.348-.002-.344-.046-.342-.084-.323-.117-.313-.149-.305-.173-.296-.204-.29-.218-.289-.244-.296-.51-.554-.585-.565-.635-.564-.674-.559-.702-.555-.725-.549-1.438-1.055-1.374-.986-1.205-.89a.856.856 0 00-1.004 1.384l1.217.896 1.376.989 1.42 1.045.694.529.674.53.635.53.589.518.522.506.455.495.181.22.165.217.06.089-.632-.021-1.092-.086-1.086-.138-1.08-.185-1.073-.232-1.065-.28-1.057-.322-1.047-.365-1.037-.412-1.027-.448-1.014-.491-1-.53-.99-.565-.971-.602-.958-.639-.943-.67-.923-.704-.906-.738-.887-.765-.867-.792-.845-.824-.825-.847-.8-.872-.777-.897-.755-.919-.728-.939-.702-.96-.676-.975-.646-.992-.611-1.009-.59-1.022-.558-1.035-.527-1.05-.495-1.057-.462-1.064-.427-1.076-.394-1.079-.359-1.084-.32-1.087-.287-1.09-.246-1.09-.207-1.09-.169-1.089-.129-1.081-.088-1.08-.047-1.074-.006-1.064.04-1.06.07-.933.1-.931.134-.93.163-.927.198-.921.224-.92.25-.915.279-.908.309-.903.333-.898.362-.89.388-.882.412-.876.436-.863.463-.856.483-.854.508-.834.532-.824.552-.812.572-.8.603-.785.615-.774.63-.758.654-.743.67-.73.686-.711.704-.693.72-.68.735-.658.751-.641.765-.623.778-.6.792-.583.806-.562.806-.538.826-.516.837-.495.845-.472.857-.447.863-.423.871-.398.88-.37.886-.349.89-.318.896-.291.9-.268.905-.235.92-.206a.858.858 0 00-.377-1.676l-.947.207-.955.25-.95.28-.944.305-.938.337-.929.364-.913.407-.916.41-.904.443-.895.467-.885.494-.875.516-.863.54-.852.579-.839.584-.826.611-.805.627-.806.65-.781.667-.767.687-.749.706-.734.723-.716.742-.696.758-.676.77-.66.79-.64.812-.619.813-.602.834-.576.846-.556.86-.532.875-.505.884-.485.895-.458.908-.43.917-.4.924-.38.936-.351.943-.325.952-.295.958-.264.965-.236.972-.197.976-.171.982-.143.983-.107.992-.074.994-.043 1.125.006 1.134.052 1.141.09 1.143.137 1.148.18 1.146.217 1.148.26 1.146.301 1.143.335 1.14.376 1.137.41 1.126.446 1.123.48 1.112.517 1.102.547 1.09.582 1.08.611 1.062.642 1.051.674 1.033.703 1.008.728.995.757.978.785.953.813.933.836.91.857.882.882.855.903.83.926.804.946.768.966.738.986.703 1.014.669 1.014.634 1.038.602 1.054.56 1.072.516 1.084.474 1.098.434 1.112.399 1.121.34 1.134.298 1.145.248 1.154.196 1.16.148 1.172.094.168-.001-.202.072-.36.105-.416.099-.472.09-.528.076-.583.068-.65.052-1.687.117-1.691.12-1.706.107-1.696.14-1.697.16-1.69.186a.859.859 0 00.187 1.708l1.677-.186 1.671-.152z"/></mask><path d="M23.822 76.242l1.68-.137 1.685-.128 1.688-.117 1.691-.118.69-.058.64-.071.588-.088.543-.102.499-.118.454-.135.416-.15.381-.172.343-.204.308-.218.274-.254.227-.284.18-.313.124-.342.061-.348-.002-.344-.046-.342-.084-.323-.117-.313-.149-.305-.173-.296-.204-.29-.218-.289-.244-.296-.51-.554-.585-.565-.635-.564-.674-.559-.702-.555-.725-.549-1.438-1.055-1.374-.986-1.205-.89a.856.856 0 00-1.004 1.384l1.217.896 1.376.989 1.42 1.045.694.529.674.53.635.53.589.518.522.506.455.495.181.22.165.217.06.089-.632-.021-1.092-.086-1.086-.138-1.08-.185-1.073-.232-1.065-.28-1.057-.322-1.047-.365-1.037-.412-1.027-.448-1.014-.491-1-.53-.99-.565-.971-.602-.958-.639-.943-.67-.923-.704-.906-.738-.887-.765-.867-.792-.845-.824-.825-.847-.8-.872-.777-.897-.755-.919-.728-.939-.702-.96-.676-.975-.646-.992-.611-1.009-.59-1.022-.558-1.035-.527-1.05-.495-1.057-.462-1.064-.427-1.076-.394-1.079-.359-1.084-.32-1.087-.287-1.09-.246-1.09-.207-1.09-.169-1.089-.129-1.081-.088-1.08-.047-1.074-.006-1.064.04-1.06.07-.933.1-.931.134-.93.163-.927.198-.921.224-.92.25-.915.279-.908.309-.903.333-.898.362-.89.388-.882.412-.876.436-.863.463-.856.483-.854.508-.834.532-.824.552-.812.572-.8.603-.785.615-.774.63-.758.654-.743.67-.73.686-.711.704-.693.72-.68.735-.658.751-.641.765-.623.778-.6.792-.583.806-.562.806-.538.826-.516.837-.495.845-.472.857-.447.863-.423.871-.398.88-.37.886-.349.89-.318.896-.291.9-.268.905-.235.92-.206a.858.858 0 00-.377-1.676l-.947.207-.955.25-.95.28-.944.305-.938.337-.929.364-.913.407-.916.41-.904.443-.895.467-.885.494-.875.516-.863.54-.852.579-.839.584-.826.611-.805.627-.806.65-.781.667-.767.687-.749.706-.734.723-.716.742-.696.758-.676.77-.66.79-.64.812-.619.813-.602.834-.576.846-.556.86-.532.875-.505.884-.485.895-.458.908-.43.917-.4.924-.38.936-.351.943-.325.952-.295.958-.264.965-.236.972-.197.976-.171.982-.143.983-.107.992-.074.994-.043 1.125.006 1.134.052 1.141.09 1.143.137 1.148.18 1.146.217 1.148.26 1.146.301 1.143.335 1.14.376 1.137.41 1.126.446 1.123.48 1.112.517 1.102.547 1.09.582 1.08.611 1.062.642 1.051.674 1.033.703 1.008.728.995.757.978.785.953.813.933.836.91.857.882.882.855.903.83.926.804.946.768.966.738.986.703 1.014.669 1.014.634 1.038.602 1.054.56 1.072.516 1.084.474 1.098.434 1.112.399 1.121.34 1.134.298 1.145.248 1.154.196 1.16.148 1.172.094.168-.001-.202.072-.36.105-.416.099-.472.09-.528.076-.583.068-.65.052-1.687.117-1.691.12-1.706.107-1.696.14-1.697.16-1.69.186a.859.859 0 00.187 1.708l1.677-.186 1.671-.152z" fill="#747474" stroke="#747474" stroke-width="2" mask="url(#b46-9-a)"/></symbol><symbol id="b47-3" viewBox="0 0 144 99"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.026.255c-.073.189-.658.284-2.26.368-2.192.115-7.676.55-10.447.827-1.888.19-2.231.445-2.231 1.661 0 .859.423 2.03 1.61 4.462.294.603.804 1.711 1.133 2.464.33.753 1.081 2.383 1.671 3.622.59 1.24 1.073 2.286 1.073 2.324 0 .038.36.83.8 1.761 1.001 2.114 1.938 4.123 3.681 7.896 1.764 3.817 2.724 5.898 3.2 6.934.184.402 1.027 2.209 1.874 4.015a283.786 283.786 0 011.89 4.094c1.198 2.762 1.815 3.753 2.704 4.346.692.462 1.081.593 1.76.593.742 0 6.966-1.494 13.352-3.206 5.56-1.49 5.74-1.527 6.151-1.262.214.138.82 1.056 1.346 2.04.526.984 1.472 2.693 2.101 3.797.63 1.104 2.027 3.568 3.106 5.475 2.783 4.922 3.452 5.942 4.314 6.576 1.115.821 1.512.737 9.318-1.982a423.91 423.91 0 005.389-1.924c1.404-.515 2.626-.937 2.715-.937.09 0 .421-.118.738-.264a23.151 23.151 0 011.582-.615 403.187 403.187 0 005.304-1.918c.15-.059.891-.323 1.646-.586 3.753-1.312 4.55-1.609 5.438-2.028 1.058-.5 1.336-1.007.95-1.734-.125-.236-1.268-1.824-2.541-3.53-4.995-6.695-6.572-8.792-7.207-9.581-.66-.822-.822-1.34-.483-1.55.1-.061.655-.236 1.235-.39l3.705-.975c1.459-.384 3.475-.916 4.48-1.183 2.018-.534 2.653-.856 2.653-1.344 0-.31-1.458-2.322-2.933-4.047a117.77 117.77 0 01-1.938-2.373c-5.745-7.206-6.344-7.847-7.331-7.847-.476 0-4.579.612-6.727 1.004-.805.147-2.286.402-3.292.567-1.006.165-2.229.369-2.718.452-.488.083-1.085.28-1.325.437-.788.515-.841.41 2.915 5.707l3.157 4.455c.864 1.22 1.687 2.335 1.829 2.476.387.387.31.947-.154 1.135-.227.092-1.358.38-2.515.64-3.997.902-4.669 1.062-5.88 1.4-.67.188-1.34.341-1.489.341-.148 0-.67.122-1.16.271-.49.149-2.165.564-3.724.921a423.44 423.44 0 00-8.188 1.942c-1.787.442-2.298.51-2.51.334-.263-.217-1.109-1.554-2.832-4.472-2.354-3.984-6.223-10.423-6.364-10.587-.087-.101-.462-.717-.835-1.368a123.5 123.5 0 00-1.085-1.86l-2.053-3.418c-.905-1.508-2.155-3.585-2.777-4.616a817.552 817.552 0 01-1.784-2.97c-.36-.601-.838-1.394-1.064-1.76a118.57 118.57 0 01-1.308-2.23c-.494-.86-1.208-1.894-1.586-2.299L35.417 0H32.77c-2.097 0-2.667.053-2.744.255zm3.945 2.662c.254.2.622.671.818 1.05.292.563 1.746 3.076 5.356 9.263l1.96 3.377a4776.51 4776.51 0 003.98 6.843c1.285 2.208 3.326 5.733 4.533 7.834 1.207 2.101 2.43 4.19 2.718 4.644.63.992.66 1.435.112 1.654-.348.14-4.096 1.056-10.47 2.56-.805.19-2.355.563-3.445.828-2.407.586-2.325.63-3.545-1.913A1855.882 1855.882 0 0027.82 22.2c-1.37-2.794-2.49-5.103-2.49-5.13 0-.028-1.235-2.568-2.744-5.646-1.509-3.078-2.743-5.638-2.743-5.69 0-.05-.173-.325-.384-.61-.61-.824-.274-1.216 1.154-1.343 5.752-.51 11.609-1.072 11.758-1.128.476-.18 1.182-.064 1.6.264zm55.605 13.858c.243.092 1.092 1.005 1.886 2.028a522.048 522.048 0 003.696 4.677c2.37 2.965 2.599 3.476 1.68 3.747-1.372.405-8.95 2.19-9.408 2.215-.592.033-.786-.19-3.943-4.532a656.273 656.273 0 00-2.88-3.927c-1.286-1.735-1.517-2.23-1.15-2.456.096-.06 1.177-.271 2.4-.47 1.224-.2 2.28-.397 2.349-.439.068-.041.833-.17 1.7-.285 1.248-.166 2.367-.416 3.193-.714.019-.007.233.063.477.156zm-3.288 16.627c.26.204 1.131 1.292 1.936 2.417a458.23 458.23 0 002.94 4.055 593.648 593.648 0 013.564 4.889c.346.48.589.98.539 1.11-.104.27-1.243.742-3.733 1.544-1.455.47-7.988 2.675-18.471 6.237-1.157.393-2.433.837-2.835.987-.961.358-1.244.352-1.672-.031-.197-.176-1.159-1.674-2.138-3.33a691.63 691.63 0 00-1.949-3.285c-.297-.48-2.455-4.182-2.903-4.98a79.265 79.265 0 00-.96-1.648c-.556-.925-.663-1.48-.325-1.688.111-.069.873-.282 1.691-.473 1.737-.406 2.387-.568 6.763-1.683 1.795-.457 3.523-.915 3.841-1.018.318-.103 1.072-.31 1.675-.46 2.748-.687 10.297-2.651 10.79-2.808.761-.243.722-.248 1.247.165z" fill="#FD5040"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.012 60.046c-.805.197-1.587.423-1.738.501-.24.125-.274 2.19-.274 16.911v16.77l.586 1.119c.602 1.148 1.604 2.155 2.658 2.67.76.372 2.95.865 3.839.864.878 0 1.11-.374 1.41-2.275.231-1.452.23-1.454-.227-1.847-.252-.216-.767-.451-1.143-.522-.924-.172-1.457-.55-1.804-1.28-.258-.542-.29-2.378-.29-16.596 0-15.742-.005-15.991-.365-16.35-.439-.438-.747-.434-2.652.035zm136.067-.134c-.503.133-1.268.3-1.699.37-1.431.234-1.338-1.021-1.28 17.271l.053 16.31.571 1.202c.605 1.275 1.539 2.344 2.466 2.822.926.478 3.263 1.015 4.16.957.832-.054.841-.062 1.132-.967a17.74 17.74 0 01.429-1.211c.074-.164.109-.652.077-1.084l-.057-.785-1.343-.468c-1.091-.379-1.443-.601-1.875-1.183l-.531-.717V76.324c0-14.398-.031-16.135-.287-16.392-.341-.34-.6-.342-1.816-.02zm-20.758 11.735c-2.465.144-5.205 1.289-6.959 2.91-.964.89-2.732 3.234-2.735 3.624 0 .094-.133.416-.295.717-.795 1.482-1.226 4.293-1.118 7.3.131 3.664.821 5.875 2.574 8.246 2.949 3.99 8.823 5.483 15.666 3.985 1.787-.391 2.451-.778 2.531-1.473.116-1.005-.173-2.803-.519-3.228l-.337-.413-1.162.412c-1.585.562-4.714.84-6.797.605-2.709-.307-4.43-1.351-5.609-3.402-.587-1.02-1.216-3.326-1.036-3.795.105-.27.901-.299 8.506-.299 10.003 0 9.079.267 9.015-2.603-.152-6.806-2.894-11.11-7.793-12.23-1.389-.318-2.643-.432-3.932-.356zm-100.227.403c-.959.17-1.977.462-2.262.648-.5.328-.515.378-.405 1.445.158 1.519.446 2.473.788 2.604.158.06.859-.038 1.557-.218.927-.24 2.017-.334 4.048-.349 2.641-.018 2.825.004 3.689.447 1.056.542 2.001 1.684 2.3 2.78.115.423.22 1.343.234 2.046l.024 1.277-.549-.026c-.301-.015-1.165-.126-1.92-.248-2.621-.423-6.534.15-8.778 1.284-3.174 1.605-4.556 4.422-4.059 8.267.448 3.461 2.547 5.636 6.304 6.532 1.617.385 6.48.48 8.453.163a59.127 59.127 0 013.017-.353c1.623-.151 1.97-.24 2.24-.574.296-.363.322-1.064.322-8.853 0-9.48-.093-10.624-1.023-12.579-1.083-2.278-2.84-3.664-5.47-4.32-1.695-.42-6.059-.408-8.51.027zm27.622.003c-2.946.496-4.8 1.025-5.167 1.475-.297.364-.32 1.228-.32 12.246 0 7.822.064 11.973.19 12.206.17.319.4.353 2.37.353 1.97 0 2.2-.034 2.371-.353.125-.231.19-3.902.19-10.653 0-8.023.05-10.34.228-10.479.827-.645 5.352-.822 7.363-.288 1.365.363 1.667.226 1.828-.828a15.71 15.71 0 01.373-1.603c.44-1.515.212-1.721-2.385-2.16-2.105-.355-4.61-.326-7.041.084zm17.282-.014c-2.465.467-3.035.965-2.669 2.335.102.38.233.997.292 1.37.058.374.227.8.376.949.24.239.362.239 1.044-.002 1.115-.392 4.365-.682 6.15-.548 1.913.144 3.138.739 3.862 1.877.557.874 1.152 3.162 1.064 4.086-.07.726-.166.739-2.62.357-1.707-.266-4.645-.125-5.785.276-.415.146-.912.265-1.104.265-.678 0-2.68 1.092-3.69 2.012-.56.512-1.289 1.398-1.618 1.969l-.598 1.038-.002 2.646c-.003 2.628.001 2.654.586 3.768 1.123 2.14 3.069 3.526 5.843 4.165 1.68.387 6.163.392 8.837.012 1.056-.151 2.331-.276 2.834-.278 1.082-.005 2.041-.512 2.205-1.166.062-.244.075-4.373.029-9.175-.066-6.826-.142-8.97-.352-9.827-.788-3.216-3.076-5.447-6.362-6.2-1.648-.378-6.157-.34-8.322.07zm18.663.444c-.228.166-.305.385-.237.684.21.933.867 3.21 1.128 3.906.15.402.277.91.281 1.13.005.22.085.447.179.505.094.058.273.576.4 1.151.125.576.33 1.21.453 1.412.124.2.351.775.504 1.277 1.055 3.451 6.026 15.293 6.563 15.633.127.08 1.103.148 2.168.15 1.633.002 1.985-.05 2.235-.325.282-.311 1.526-2.973 2.934-6.282.701-1.647 3.044-7.647 3.044-7.796 0-.09.119-.397.265-.68.278-.545.465-1.094 1.474-4.35.343-1.104.717-2.254.832-2.555.114-.3.272-.835.351-1.186.078-.351.25-1.022.382-1.491.371-1.322.199-1.429-2.289-1.429-1.9 0-2.077.03-2.443.42-.218.23-.446.703-.507 1.049-.115.653-.507 2.072-1.308 4.736-.443 1.474-.68 2.197-1.403 4.288a63.18 63.18 0 00-.567 1.734c-.253.822-.71 2.076-1.633 4.471-.27.703-.576 1.565-.68 1.916-.386 1.305-.8 1.142-1.397-.547a438.93 438.93 0 00-1.12-3.103 162.447 162.447 0 01-1.424-4.106c-.362-1.104-.77-2.266-.906-2.582-.135-.316-.246-.66-.246-.764 0-.105-.212-.872-.47-1.706l-.805-2.612c-.186-.602-.389-1.4-.452-1.772-.2-1.169-.737-1.422-3.018-1.422-1.346 0-2.057.076-2.288.246zm40.481 4.444c1.302.898 2.127 2.273 2.434 4.062.192 1.118.186 1.331-.043 1.476-.341.215-11.337.224-11.677.009-.542-.343.365-2.895 1.534-4.32.666-.81 1.99-1.684 2.92-1.927.305-.08 1.29-.11 2.19-.07 1.54.072 1.694.117 2.642.77zM26.587 86.975l.48.357.05 3.304.05 3.304-.455.297c-1.02.667-6.115.533-7.875-.207-.765-.321-1.709-1.35-1.923-2.094-.64-2.227.298-4.014 2.563-4.882 1.355-.518 1.738-.562 4.367-.495 1.904.05 2.34.115 2.743.416zm44.988-.003l.482.36.05 3.304.05 3.304-.465.304c-.708.463-4.883.578-6.57.18-2.457-.577-3.42-1.616-3.464-3.731-.023-1.138.031-1.347.531-2.058.606-.863 2.026-1.687 3.412-1.981.433-.092 1.845-.139 3.139-.104 1.992.053 2.426.118 2.835.422z" fill="#fff"/></symbol><symbol id="b48-1" viewBox="0 0 190 190"><path d="M163.847 119.235c.424-1.192 1.837-2.193 2.503-2.193h8.751A14.916 14.916 0 00190 102.136V87.839a14.918 14.918 0 00-14.899-14.906h-8.751c-.634 0-2.079-1.002-2.503-2.193a71.635 71.635 0 00-3.061-7.301c-.539-1.115-.254-2.801.209-3.264l6.223-6.223a14.918 14.918 0 000-21.08l-10.095-10.095a14.912 14.912 0 00-21.077 0l-6.217 6.217a2.883 2.883 0 01-1.819.507 3.43 3.43 0 01-1.445-.285 72.176 72.176 0 00-7.325-3.06c-1.192-.425-2.193-1.839-2.193-2.536V14.9A14.917 14.917 0 00102.142 0H87.864A14.917 14.917 0 0072.96 14.9v8.752c0 .665-1 2.078-2.192 2.497a74.757 74.757 0 00-7.326 3.067 3.465 3.465 0 01-1.451.285 2.87 2.87 0 01-1.813-.5l-6.223-6.218a14.891 14.891 0 00-21.07 0L22.787 32.88a14.92 14.92 0 000 21.079l6.217 6.217c.469.47.754 2.149.216 3.264a71.542 71.542 0 00-3.061 7.326c-.425 1.185-1.838 2.193-2.535 2.193h-8.72A14.923 14.923 0 000 87.838v14.279a14.918 14.918 0 0014.899 14.906h8.758c.633 0 2.078 1.001 2.496 2.193a72.341 72.341 0 003.068 7.32c.538 1.115.253 2.801-.216 3.264l-6.223 6.223a14.912 14.912 0 000 21.079l10.095 10.095a14.909 14.909 0 0021.071 0l6.223-6.223a2.885 2.885 0 011.819-.507c.497-.008.99.091 1.445.291a72.123 72.123 0 007.364 3.087c1.19.425 2.192 1.838 2.192 2.503v8.752A14.92 14.92 0 0087.896 190h14.278a14.915 14.915 0 0014.886-14.9v-8.752c0-.665 1.001-2.078 2.192-2.497a73.585 73.585 0 007.313-3.067 3.423 3.423 0 011.445-.285 2.937 2.937 0 011.819.5l6.223 6.224a14.89 14.89 0 0021.071 0l10.095-10.096a14.917 14.917 0 000-21.079l-6.217-6.217c-.469-.469-.754-2.148-.215-3.264a73.63 73.63 0 003.061-7.332zM124.03 95a29.029 29.029 0 01-49.558 20.529 29.03 29.03 0 01-6.293-31.64A29.03 29.03 0 0195 65.969 29.06 29.06 0 01124.03 95z" fill="#E8EDEF" fill-opacity=".6"/></symbol><symbol id="b48-10" viewBox="0 0 67 88"><path d="M60.787 10.049L33.494.085 6.476 9.912C3.027 11.622 0 12.566 0 15.817V32.17a62.667 62.667 0 008.901 32.513 55.849 55.849 0 0024.867 22.403c11.042-3.66 19.289-13.425 24.33-21.774a62.594 62.594 0 008.9-32.513V18.114c0-4.657-2.425-6.943-6.21-8.065z" fill="#012F58"/><path d="M14.88 47.085l-5.76-16.8h3.48l4.32 12.96h.48l4.32-12.96h3.48l-5.76 16.8h-4.56zm12.232 0v-16.8h7.56c1.584 0 2.856.512 3.816 1.536.976 1.024 1.464 2.392 1.464 4.104 0 1.712-.488 3.08-1.464 4.104-.96 1.024-2.232 1.536-3.816 1.536h-4.44v5.52h-3.12zm3.12-8.52h4.32c.688 0 1.24-.232 1.656-.696.416-.464.624-1.112.624-1.944 0-.832-.208-1.48-.624-1.944-.416-.464-.968-.696-1.656-.696h-4.32v5.28zm12.49 8.52v-16.8h4.2l6.12 11.64h.48v-11.64h3.12v16.8h-4.2l-6.12-11.64h-.48v11.64h-3.12z" fill="#fff"/></symbol><symbol id="b48-14" viewBox="0 0 43 31"><path d="M5.02 11.105a5.675 5.675 0 01-.77-2.93 5.915 5.915 0 016.055-5.785h.25C11.205.98 12.96-.025 15.015 0c2.31 0 4.215 1.34 4.58 3.045a8.964 8.964 0 011.225-.07 8.864 8.864 0 013.705.835 4.705 4.705 0 018.27.5 6.5 6.5 0 013.46-.94 6.23 6.23 0 016.28 6.17 6 6 0 01-2.395 4.7c.587.81.898 1.786.89 2.786-.035 2.69-2.375 4.845-5.235 4.814a10.364 10.364 0 01-1.535-.24c-2.24 3.595-8.53 1.905-8 1.27-7.105 8.355-14.795 7.31-15 7.235 3.03-.72 4.66-3.19 5.935-6.21a8 8 0 01-2.64.41 7.441 7.441 0 01-5.965-2.924 7.162 7.162 0 01-2.43.395c-3.435-.04-6.195-2.5-6.16-5.45.055-2.585 2.195-4.72 5.02-5.22z" fill="#3DDC84"/></symbol><symbol id="b48-16" viewBox="0 0 22 18"><path d="M20.765 3.8h-4.92v6.345a1.675 1.675 0 01-1.675 1.675H6.595v2.135a.96.96 0 00.96.96h7.44l3.11 2.595c.405.34.62.2.5-.31L18 14.93h2.785a.955.955 0 00.955-.96V4.755a.948.948 0 00-.975-.955z" fill="#0078D4"/><path d="M.96 11.1h1.465l-.605 2.275c-.085.32-.03.5.125.5a.64.64 0 00.36-.185l3.11-2.6h8.76a.954.954 0 00.96-.955V.955a.955.955 0 00-.96-.955H.96A.955.955 0 000 .955v9.19a.954.954 0 00.96.955z" fill="#0078D4"/></symbol><symbol id="b48-2" viewBox="0 0 326 277"><path d="M377.402 160.666h-19.246c-5.206 0-11.277-4.717-13.259-10.292a150.974 150.974 0 00-6.399-15.302c-2.561-5.296-1.619-12.88 2.059-16.565l13.705-13.697a24.635 24.635 0 000-34.804l-22.239-22.265a24.622 24.622 0 00-17.404-7.209 24.615 24.615 0 00-17.404 7.209l-13.698 13.697c-2.198 2.205-5.862 3.489-9.769 3.489a15.585 15.585 0 01-6.769-1.459 154.14 154.14 0 00-15.317-6.412c-5.583-1.982-10.293-8.052-10.293-13.258V24.617A24.646 24.646 0 00216.757 0h-31.486a24.649 24.649 0 00-24.612 24.617V43.86c0 5.205-4.717 11.276-10.293 13.258a153.896 153.896 0 00-15.31 6.398 15.802 15.802 0 01-6.755 1.451c-3.943 0-7.62-1.318-9.818-3.523l-13.67-13.704a24.621 24.621 0 00-34.815 0L47.745 69.978a24.605 24.605 0 00-5.338 26.82 24.594 24.594 0 005.338 7.984l13.698 13.698c3.684 3.684 4.627 11.275 2.093 16.578a151.895 151.895 0 00-6.392 15.288c-1.981 5.582-8.052 10.292-13.258 10.292H24.612A24.642 24.642 0 000 185.248v31.448a24.638 24.638 0 0024.612 24.61h19.239c5.206 0 11.284 4.71 13.259 10.285a152.412 152.412 0 006.399 15.295c2.56 5.296 1.612 12.887-2.094 16.579L47.738 297.19a24.635 24.635 0 000 34.804l22.26 22.265a24.62 24.62 0 0034.815 0l13.698-13.697c2.205-2.205 5.875-3.489 9.818-3.489 2.332-.027 4.64.469 6.755 1.452a152.627 152.627 0 0015.296 6.363c5.583 1.982 10.286 8.053 10.286 13.258v19.244A24.635 24.635 0 00185.271 402h31.451a24.646 24.646 0 0024.619-24.61v-19.244c0-5.205 4.71-11.276 10.286-13.258a153.75 153.75 0 0015.289-6.391 15.825 15.825 0 016.755-1.451c3.943 0 7.613 1.311 9.818 3.488l13.698 13.697a24.621 24.621 0 0034.815 0l22.239-22.258a24.65 24.65 0 000-34.811l-13.691-13.69c-3.678-3.678-4.627-11.269-2.059-16.572a151.807 151.807 0 006.392-15.302c1.975-5.582 8.046-10.285 13.259-10.285h19.246A24.642 24.642 0 00402 216.703v-31.42a24.644 24.644 0 00-24.598-24.617zm-104.268 40.337a72.123 72.123 0 01-44.53 66.637 72.132 72.132 0 01-94.247-94.238A72.132 72.132 0 01201 128.876a72.204 72.204 0 0172.134 72.127z" fill="#E8EDEF" fill-opacity=".6"/></symbol><symbol id="b48-3" viewBox="0 0 75 45"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.125.044C8.995.38 6.64 1.873 5.337 4.35c-.598 1.136-.94 2.324-1.129 3.925-.045.38-.054.884-.065 3.438l-.012 2.993H0v4.493h4.135V44.4h5.638V19.198h6.26l.048-.147c.262-.797 1.408-4.273 1.42-4.304.014-.035-.613-.042-3.856-.042H9.773v-2.623c0-1.466.014-2.807.032-3.04.18-2.355 1.165-3.695 3.008-4.087 1.137-.242 2.649-.094 4.121.405.223.075.426.145.452.156.04.017.145-.355.624-2.213.345-1.337.565-2.243.547-2.26C18.501.99 17.862.74 17.427.6c-.873-.28-1.81-.468-2.78-.558-.616-.057-1.978-.056-2.522.002zm12.872 1.523a3.932 3.932 0 00-1.65.572c-.263.17-.7.594-.887.86-.61.868-.8 1.983-.519 3.07.206.798.729 1.544 1.392 1.986 1.239.827 3.015.804 4.253-.054a3.476 3.476 0 001.453-2.192c.08-.386.087-1.022.016-1.419-.224-1.253-1.132-2.263-2.382-2.652a4.568 4.568 0 00-1.676-.171zm21.85 12.42l-.392.043c-1.72.19-3.45.964-5.153 2.308-.547.432-.928.77-1.587 1.407-.565.547-.585.562-.602.478-.023-.108-.615-3.48-.615-3.502 0-.009-1.07-.016-2.38-.016h-2.381V44.4H39.376V22.834l.462-.43c2.167-2.02 3.818-3.014 5.505-3.317.482-.087 1.51-.081 1.975.01a6.765 6.765 0 011.64.545c.127.063.241.103.255.089.049-.05 1.974-4.853 1.96-4.89-.025-.064-.71-.377-1.1-.502a8.033 8.033 0 00-2.553-.368c-.319.002-.622.01-.673.015zm14.754 0c-2.322.185-4.173.804-5.905 1.972a12.983 12.983 0 00-2.215 1.954c-2.586 2.915-3.934 7.281-3.765 12.2.244 7.127 3.694 12.314 9.41 14.148 1.055.339 2.243.572 3.555.698.567.055 2.684.055 3.274 0 2.574-.237 4.895-.865 6.978-1.886.56-.274 1.375-.736 1.362-.77-.004-.013-.408-.88-.898-1.927l-.89-1.905-.598.296c-2.15 1.062-4.093 1.586-6.288 1.693-2.494.122-4.733-.489-6.457-1.762-2.195-1.621-3.504-4.294-3.676-7.507l-.021-.392H75l-.018-1.531c-.018-1.544-.03-1.79-.149-2.855-.428-3.846-1.788-7.028-3.92-9.174-1.933-1.944-4.347-3.006-7.367-3.241a23.862 23.862 0 00-1.945-.011zM22.648 29.552V44.4H28.287V14.705H22.648v14.847zm40.3-11.153c.83.06 1.483.229 2.192.565 1.6.758 2.761 2.212 3.455 4.326.294.895.476 1.89.556 3.039l.02.285H55.466l.02-.408c.094-1.833.623-3.53 1.517-4.87.297-.444.484-.672.881-1.073 1.21-1.22 2.637-1.818 4.514-1.892.06-.002.307.01.549.028z" fill="url(#paint0_linear_1812_50025)"/></symbol><symbol id="b48-4" viewBox="0 0 33 31"><path d="M16.22 0C7.26 0 0 5.9 0 13.2c0 7.3 7.26 13.18 16.22 13.18.846 0 1.69-.053 2.53-.16 3.5 3.5 7.64 4.105 11.66 4.2v-.855c-2.17-1.065-4.055-3-4.055-5.215 0-.305.024-.609.07-.91 3.67-2.415 6-6.105 6-10.24C32.44 5.9 25.18 0 16.22 0z" fill="#0078D4"/><path d="M20.5 10.356l-.625.215-.66-1.87a3.796 3.796 0 00-7.17 2.5l.65 1.865-.68.235a.925.925 0 00-.515.9l2.47 7.115c.105.295.585.195.88.095l8.47-2.94c.3-.105.31-.18.21-.475l-2.47-7.115c-.12-.285-.28-.63-.56-.525zm-2.055.715l-4.305 1.5-.64-1.87a2.28 2.28 0 114.3-1.5l.645 1.87z" fill="#fff"/></symbol><symbol id="b48-6" viewBox="0 0 29 38"><path d="M29 13.92a5.711 5.711 0 01-5.691 5.737H5.69a5.74 5.74 0 01-.894-11.403 3.622 3.622 0 013.552-4.253 3.557 3.557 0 012.333.862C11.802 2.32 13.237 0 17.276 0c4.887 0 7.199 3.795 7.199 7.801V8.3A5.728 5.728 0 0129 13.92z" fill="#3DDC84"/><path d="M10.748 19.134h7.207l-3.601 4.018-3.606-4.018zM10.748 26.552h7.207l-3.601 4.018-3.606-4.018zM10.748 33.97h7.207l-3.601 4.018-3.606-4.018z" fill="#3DDC84"/></symbol><symbol id="b48-7" viewBox="0 0 91 40"><path d="M90.5 27.895a11.456 11.456 0 01-11.41 11.5h-35.3A11.5 11.5 0 0142 16.545a7.29 7.29 0 017.125-8.525 7.145 7.145 0 014.67 1.725C56.04 4.65 58.915 0 66.99 0c9.79 0 14.43 7.605 14.43 15.635 0 .335 0 .67-.035 1a11.5 11.5 0 019.115 11.26zM0 24.07v-8.75l4.875 4.375L0 24.07zM9 24.07v-8.75l4.874 4.375L9 24.07zM18 24.07v-8.75l4.875 4.375L18 24.07z" fill="#3DDC84"/></symbol></svg>';
$(function () {
    //clone review to all-review + random
    $(".js-horScroll-review-video>.swiper-wrapper>.review__card")
        .clone()
        .appendTo(".js-horScroll-review-all>.swiper-wrapper");
    $(".js-horScroll-review-yandex>.swiper-wrapper>.reviews__card")
        .clone()
        .appendTo(".js-horScroll-review-all>.swiper-wrapper");
    $(".js-horScroll-review-google>.swiper-wrapper>.reviews__card")
        .clone()
        .appendTo(".js-horScroll-review-all>.swiper-wrapper");
    jQuery.fn.shuffle = function () {
        var allElems = this.get();
        var getRandom = function (max) {
            return Math.floor(Math.random() * max);
        };
        var shuffled = jQuery.map(allElems, function () {
            var random = getRandom(allElems.length),
                randEl = jQuery(allElems[random]).clone(true)[0];
            allElems.splice(random, 1);
            return randEl;
        });
        this.each(function (i) {
            jQuery(this).replaceWith(jQuery(shuffled[i]));
        });
        return jQuery(shuffled);
    };
    jQuery(".js-horScroll-review-all>.swiper-wrapper .swiper-slide").shuffle();

    //button more
    $(".show-all").click(function (event) {
        event.preventDefault();
        if (!$(this).parents(".reviews__card").hasClass("reviews__card-open")) {
            $(this).parents(".reviews__card").addClass("reviews__card-open");
            $(this).text("свернуть");
            $(this)
                .parents(".show-all-container")
                .addClass("show-all-container-inline");
        } else {
            $(this).parents(".reviews__card").removeClass("reviews__card-open");
            $(this).text("...ещё");
            $(this)
                .parents(".show-all-container")
                .removeClass("show-all-container-inline");
        }
    });

    //button up
    const btnUp = {
        el: document.querySelector('.btn-up'),
        show() {
          this.el.classList.remove('btn-up__hide');
        },
        hide() {
          this.el.classList.add('btn-up__hide');
        },
        addEventListener() {
          window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            scrollY > 400 ? this.show() : this.hide();
          });
          document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
    }
    btnUp.addEventListener();
})

$(function () {
    document.getElementById("svg-icons").innerHTML = SVG_SPRITE;
    document.getElementById("svg-images").innerHTML = SVG_IMAGES_SPRITE;

    getInitialPageURLandReferrer()

    //start scrollTrack
    var block_show = null;
 
    function scrollTracking(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.quiz__container').offset().top;
        var eh = $('.quiz__container').outerHeight();
    
        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
            if (block_show == null || block_show == false) {
                $(".quiz__container").addClass("triger");
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                $(".quiz__container").removeClass("triger");
            }
            block_show = false;
        }
    }
    
    $(window).scroll(function(){
        if($(".quiz__container").length){scrollTracking();}
    });
        
    $(document).ready(function(){ 
        if($(".quiz__container").length){scrollTracking();}
    });
    //end scrollTrack

    function chatHiddenModalClose() {
        if($(".call-modal").hasClass("is-display")) {return;}
        if($(".quiz__container").hasClass("triger")) {return;}
        if($(".modal-close").hasClass("triger")) {return;}
        if($(".chat-hidden").hasClass("triger")) {return;}

        $(".chat-hidden").addClass("is-display");
        $(".chat-hidden").addClass("triger");

        $(document).on("mouseleave", function () {
            if (!$(".js-overlay").hasClass("is-display")) {
                $(".is-display").each(function () {
                    $(this).removeClass("is-display");
                });

                $(".is-open").each(function () {
                    $(this).removeClass("is-open");
                });

                $("#player-vt").attr("src", ``);
                $(".chat-hidden").removeClass("is-display");
                $(".js-overlay").addClass("is-display");
                $(".modal-close").addClass("is-display");
                $(".modal-close").addClass("triger");
                $(".chat-showed").removeClass("is-display");
                document.body.style.overflow = "hidden";
                $(this).unbind("mouseleave");
            }
        });
    }

    let chatHiddendTimer = setInterval(chatHiddenModalClose, 136000);
    clearInterval(chatHiddendTimer);
    myTimer1 = setInterval(chatHiddenModalClose, 136000);

    function chatShowed() {
        if($(".modal-close").hasClass("is-display")) {return;}
        if($(".js-feedback-thankyou").hasClass("is-display")) {return;}
        if($(".quiz__container").hasClass("triger")) {return;}
        if($(".call-modal").hasClass("is-display")) {return;}

        if(!$(".chat-showed").hasClass("triger")) {
            $(".js-overlay").addClass("is-display");
            $(".chat-showed").addClass("is-display");
            $(".chat-hidden").removeClass("is-display");
            document.body.style.overflow = "hidden";
            $(".chat-showed").addClass("triger");
            return;
        }
    }
    let chatShowedTimer = setInterval(chatShowed, 15000);
    if (!$('.is-display').length) {
        clearInterval(chatShowedTimer);
    }
    myTimer2 = setInterval(chatShowed, 15000);
    
    $(".chat-hidden__send, .chat-button").on("click", function () {
        $(".chat-hidden").removeClass("is-display");
        let sh = document.querySelector("#umnico-widget-wrapper").shadowRoot;
        sh.querySelector(".widget__preview-block").classList.add(
            "widget__preview-block--closed"
        );
        sh.querySelector(".widget__chat-preview").classList.add(
            "widget__chat-preview--open"
        );
    });

    $(".chat-hidden__close").on("click", function () {
        $(".chat-hidden").removeClass("is-display");
    });

    //start tabs-review
    $(".js-tab-trigger").click(function () {
        var id = $(this).attr("data-tab"),
            content = $('.js-tab-content[data-tab="' + id + '"]');
        btns = $('.review__btn[data-tab="' + id + '"]');
        scores = $('.review-all[data-tab="' + id + '"]');

        $(".js-tab-trigger.active").removeClass("active");
        $(this).addClass("active");

        $(".js-tab-content.active").removeClass("active");
        content.addClass("active");

        $(".review__btn.active").removeClass("active");
        btns.addClass("active");

        $(".review-all.active").removeClass("active");
        scores.addClass("active");
    });
    //end tabs-review

    $("#modal_close").on('submit', function(e) {
        e.stopPropagation();
        e.preventDefault();

        if (typeof ym === 'function') {
            ym(12923497, 'reachGoal', 'gift')
        }

        utm($(this))

        $.post(
            "amo/amo.php", // адрес обработчика
            $("#modal_close").serialize(), // отправляемые данные
        )
        .done(function(msg){
            console.log(msg)
            $(".is-display").each(function () {
                $(this).removeClass("is-display");
                document.body.style.overflow = "auto";
            });
            $(".js-overlay").addClass("is-display");
            $(".js-feedback-thankyou").addClass("is-display");
        })
        .fail(function(xhr, status, error) {
            console.log(xhr)
            console.log(status)
            console.log(error)
        });
    })

    $("#modal_consultation").on('submit', function(e) {
        e.stopPropagation();
        e.preventDefault();

        ym(12923497, 'reachGoal', 'consult-popup')

        utm($(this))

        $.post(
            "amo/amo.php", // адрес обработчика
            $("#modal_consultation").serialize(), // отправляемые данные
        )
        .done(function(msg){
            console.log(msg)
            $(".is-display").each(function () {
                $(this).removeClass("is-display");
                document.body.style.overflow = "auto";
            });
            $(".js-overlay").addClass("is-display");
            $(".js-feedback-thankyou").addClass("is-display");
        })
        .fail(function(xhr, status, error) {
            console.log(xhr)
            console.log(status)
            console.log(error)
        });
    })

    if (window.location.href.indexOf("thank-you") > -1) {
        $(".js-overlay").addClass("is-display");
        $(".js-feedback-thankyou").addClass("is-display");
        document.body.style.overflow = "hidden";
        //window.history.pushState({}, document.title, "/");
    }

    if (window.location.hash === "#quote") {
        feedbackModal();
        window.history.pushState({}, document.title, "/");
    }

    $("#quiz-project [type='submit']").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        let empty = false;

        $("#quiz-project .quiz-phone").each(function () {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#quiz-project').addClass("unactive");
        } else {
            $('#quiz-project').removeClass("unactive");
            showSlide("final");

            let type = document.querySelector(".quiz__result-type");
            let period = document.querySelector(".quiz__result-period");
            let description = document.querySelector(".quiz__result-description");
            let selected = [];
            $('#quiz-project input[type=checkbox]').each(function () {
                if ($(this).is(":checked")) {
                    selected.push($(this).val());
                }
            });
            let msg = document.querySelector(".quiz__result-msg");

            msg.value = 'Заявка с квиза Orbitsoft RU | Тип: ' + type.value + ' Период: ' + period.value + ' Описание: ' + description.value + ' Удобно через: ' + selected.toString()

            utm($(this))

            $.post(
              "amo/amo.php", // адрес обработчика
              $("#quiz-project").serialize(), // отправляемые данные
            )
              .done(function (msg) {
                  console.log(msg)
              })
              .fail(function (xhr, status, error) {
                  console.log(xhr)
                  console.log(status)
                  console.log(error)
              });
        }
    });

    $("#quiz-develop [type='submit']").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        let empty = false;

        $("#quiz-develop .quiz-phone").each(function () {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#quiz-develop').addClass("unactive");
        } else {
            $('#quiz-develop').removeClass("unactive");
            showSlide("final");

            let type = document.querySelector(".quiz__result-2-type");
            let rang = document.querySelector(".quiz__result-2-rang");
            let busyness = document.querySelector(".quiz__result-2-busyness");
            let number = document.querySelector(".quiz__result-2-number");
            let techs = document.querySelector(".quiz__result-2-techs");
            let selected = [];
            $('#quiz-develop input[type=checkbox]').each(function() {
               if ($(this).is(":checked")) {
                   selected.push($(this).val());
               }
            });
            let msg = document.querySelector(".quiz__result-2-msg");

            msg.value = 'Заявка с квиза Orbitsoft RU | Тип: ' + type.value + ' Уровень специалиста: ' + rang.value + ' Занятость: ' + busyness.value + ' Количество специалистов: ' + number.value + ' Технологии: ' + techs.value + ' Удобно через: ' + selected.toString()

            utm($(this))

            $.post(
                "amo/amo.php", // адрес обработчика
                $("#quiz-develop").serialize(), // отправляемые данные
            )
            .done(function(msg){
                console.log(msg)
            })
            .fail(function(xhr, status, error) {
                console.log(xhr)
                console.log(status)
                console.log(error)
            });

        }
    });

    $("#quiz-apps [type='submit']").click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        let empty = false;

        $("#quiz-apps .quiz-phone").each(function () {
            empty = $(this).val().length == 0;
        });

        if (empty) {
            $('#quiz-apps').addClass("unactive");
        } else {
            $('#quiz-apps').removeClass("unactive");
            showSlide("final");

            let sphere = document.querySelector(".quiz__result-sphere");
            let get = document.querySelector(".quiz__result-get");
            let platform = document.querySelector(".quiz__result-platform");
            let count = document.querySelector(".quiz__result-count");
            let type = document.querySelector(".quiz__result-type");
            let start = document.querySelector(".quiz__result-start");
            let selected = [];
            $('#quiz-apps input[type=checkbox]').each(function () {
                if ($(this).is(":checked")) {
                    selected.push($(this).val());
                }
            });
            let msg = document.querySelector(".quiz__result-2-msg");

            msg.value = 'Заявка с квиза mobile-apps Orbitsoft RU | Сфера приложения: ' + sphere.value + ' Что вы хотите получить?: ' + get.value + ' Патформу для приложения: ' + platform.value + ' Примерное количество уникальных экранов: ' + count.value + ' Тип дизайна приложения: ' + type.value + ' Запуск приложения: ' + start.value + ' Удобно через: ' + selected.toString()

            utm($(this))

            $.post(
              "amo/amo.php", // адрес обработчика
              $("#quiz-apps").serialize(), // отправляемые данные
            )
            .done(function (msg) {
                console.log(msg)
            })
            .fail(function (xhr, status, error) {
                console.log(xhr)
                console.log(status)
                console.log(error)
            });
        }
    });

    $(".feedback-form-seo").submit(function (e) {
        e.stopPropagation();
        e.preventDefault();

        let valid = true;

        let msg = $('.feedback-form-seo input[name="msg"]')
        let comment = $('.feedback-form-seo input[name="comment"]')
        msg.value = 'Заявка с фидбэк формы с футера Orbitsoft RU | ' + comment.val()

        $(".feedback-form-seo").find('input').each(
            function(index, value) {
                if (!valid) {
                    // break
                    return false;
                }
                if (value.type === 'submit') {
                    // skip
                    return true;
                }
                let $el = $(value);

                if ($el.hasClass('required') && $el.val().trim() === '') {
                    valid = false;
                    $(this).addClass('error');
                    return false;
                }
            }
        );

        utm($(this))

        if (valid) {
            $.post(
                "amo/amo.php", // адрес обработчика
                $(".feedback-form-seo").serialize(), // отправляемые данные
            )
            .done(function (msg) {
                console.log(msg)
                $(".js-overlay").addClass("is-display");
                $(".js-feedback-thankyou").addClass("is-display");
            })
            .fail(function (xhr, status, error) {
                console.log(xhr)
                console.log(status)
                console.log(error)
            });
        }
    });

    $("#feedback-form").submit(function (e) {
        e.stopPropagation();
        e.preventDefault();

        let valid = true;

        let msg = $('#feedback-form input[name="msg"]')
        let comment = $('#feedback-form input[name="comment"]')
        msg.value = 'Заявка с фидбэк формы с футера Orbitsoft RU | ' + comment.val()

        $("#feedback-form").find('input').each(
            function(index, value) {
                if (!valid) {
                    // break
                    return false;
                }
                if (value.type === 'submit') {
                    // skip
                    return true;
                }
                let $el = $(value);

                if ($el.hasClass('required') && $el.val().trim() === '') {
                    valid = false;
                    $(this).addClass('error');
                    return false;
                }
            }
        );

        utm($(this))

        if (valid) {
            $.post(
                "amo/amo.php", // адрес обработчика
                $("#feedback-form").serialize(), // отправляемые данные
            )
            .done(function (msg) {
                console.log(msg)
                $(".js-overlay").addClass("is-display");
                $(".js-feedback-thankyou").addClass("is-display");
            })
            .fail(function (xhr, status, error) {
                console.log(xhr)
                console.log(status)
                console.log(error)
            });
        }
    });

    $("#slider-form").submit(function (e) {
        e.stopPropagation();
        e.preventDefault();

       utm($(this))

        $.post(
            "amo/amo.php", // адрес обработчика
            $("#slider-form").serialize(), // отправляемые данные
        )
        .done(function (msg) {
            console.log(msg)
            $(".is-display").each(function () {
                $(this).removeClass("is-display");
                document.body.style.overflow = "auto";
            });
            $(".js-overlay").addClass("is-display");
            $(".js-feedback-thankyou").addClass("is-display");
        })
        .fail(function (xhr, status, error) {
            console.log(xhr)
            console.log(status)
            console.log(error)
        });
    });

    $("#call-form").submit(function (e) {
        e.stopPropagation();
        e.preventDefault();

        utm($(this))

        $.post(
            "amo/amo.php", // адрес обработчика
            $("#call-form").serialize(), // отправляемые данные
        )
        .done(function (msg) {
            console.log(msg)
            $(".is-display").each(function () {
                $(this).removeClass("is-display");
                document.body.style.overflow = "auto";
            });
            $(".js-overlay").addClass("is-display");
            $(".js-feedback-thankyou").addClass("is-display");
        })
        .fail(function (xhr, status, error) {
            console.log(xhr)
            console.log(status)
            console.log(error)
        });
    });

    scrollToElement();
    requestACallOpen();
    requestACallClose();
    toggleHeader();
    qrCodeOpen();
    qrCodeClose();
    toggleContent();

    openQuote();
    adProjectOpen();

    videoModalOpen();
    toggleFocus();
    exampleOpen();
    profitModalOpen();
    proposeModalOpen();
    stagesModalOpen();
    quoteOpen();
    feedbackOpen();
    feedbackNext();
    feedbackBack();
    quizSelected();

    $(".js-masonry").each(function () {
        $(this).masonry({
            itemSelector: ".js-masonry__item",
            horizontalOrder: true,
        });
    });

    const swiperFeedback = new Swiper(".js-horScroll-feedback", {
        slidesPerView: "1",
        navigation: {
            nextEl: ".slider-feedback__btn.swiper-button-next",
            prevEl: ".slider-feedback__btn.swiper-button-prev",
        },
    });

    const swiperClients = new Swiper(".js-horScroll-clients", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".clients__btn.swiper-button-next",
            prevEl: ".clients__btn.swiper-button-prev",
        },
    });

    const swiperServices = new Swiper(".js-horScroll-services", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".services__btn.swiper-button-next",
            prevEl: ".services__btn.swiper-button-prev",
        },
    });

    if (window.matchMedia("(max-width: 768px)").matches) {
        swiperServices.disable();
    }

    const swiperTeam = new Swiper(".js-horScroll-team", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".team__btn.swiper-button-next",
            prevEl: ".team__btn.swiper-button-prev",
        },
    });

    const swiperDevelopmentPrices = new Swiper(".js-horScroll-development-prices", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".development-prices__btn.swiper-button-next",
            prevEl: ".development-prices__btn.swiper-button-prev",
        },
    });

    const swiperDevelopmentPricesOne = new Swiper(".js-horScroll-development-prices-1", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".development-prices__btn-1.swiper-button-next",
            prevEl: ".development-prices__btn-1.swiper-button-prev",
        },
    });

    const swiperDevelopmentPricesTwo = new Swiper(".js-horScroll-development-prices-2", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".development-prices__btn-2.swiper-button-next",
            prevEl: ".development-prices__btn-2.swiper-button-prev",
        },
    });

    const swiperStages = new Swiper(".js-horScroll-stages", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".stages__btn.swiper-button-next",
            prevEl: ".stages__btn.swiper-button-prev",
        },
    });

    const swiperProjects = new Swiper(".js-horScroll-projects", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".projects__btn.swiper-button-next",
            prevEl: ".projects__btn.swiper-button-prev",
        },
    });

    const swiperAdProjects = new Swiper(".js-horScroll-ad-projects", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".ad-projects__btn.swiper-button-next",
            prevEl: ".ad-projects__btn.swiper-button-prev",
        },
    });

    const swiperTech = new Swiper(".js-horScroll-tech", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".tech__btn.swiper-button-next",
            prevEl: ".tech__btn.swiper-button-prev",
        },
    });

    const swiperPropose = new Swiper(".js-horScroll-propose", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".propose__btn.swiper-button-next",
            prevEl: ".propose__btn.swiper-button-prev",
        },
    });

    const swiperProducts = new Swiper(".js-horScroll-products", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".products__btn.swiper-button-next",
            prevEl: ".products__btn.swiper-button-prev",
        },
    });

    const swiperProducts1 = new Swiper(".js-horScroll-products-1", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".products__btn-1.swiper-button-next",
            prevEl: ".products__btn-1.swiper-button-prev",
        },
    });

    const swiperSuccess = new Swiper(".js-horScroll-success", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".success__btn.swiper-button-next",
            prevEl: ".success__btn.swiper-button-prev",
        },
    });

    const swiperReview = new Swiper(".js-horScroll-review", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".review-page-btn.swiper-button-next",
            prevEl: ".review-page-btn.swiper-button-prev",
        },
    });

    const swiperReviewAll = new Swiper(".js-horScroll-review-all", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".slider-btn-all.swiper-button-next",
            prevEl: ".slider-btn-all.swiper-button-prev",
        },
    });

    const swiperReviewVideo = new Swiper(".js-horScroll-review-video", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".slider-btn-video.swiper-button-next",
            prevEl: ".slider-btn-video.swiper-button-prev",
        },
    });

    const swiperReviewYandex = new Swiper(".js-horScroll-review-yandex", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".slider-btn-yandex.swiper-button-next",
            prevEl: ".slider-btn-yandex.swiper-button-prev",
        },
    });

    const swiperReviewGoogle = new Swiper(".js-horScroll-review-google", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".slider-btn-google.swiper-button-next",
            prevEl: ".slider-btn-google.swiper-button-prev",
        },
    });

    const swiperSupport = new Swiper(".js-horScroll-support", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".support__btn.swiper-button-next",
            prevEl: ".support__btn.swiper-button-prev",
        },
    });

    const swiperExamples = new Swiper(".js-horScroll-examples", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".examples__btn.swiper-button-next",
            prevEl: ".examples__btn.swiper-button-prev",
        },
    });

    const swiperPredictor = new Swiper(".js-horScroll-predictor", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".predictor__btn.swiper-button-next",
            prevEl: ".predictor__btn.swiper-button-prev",
        },
    });

    new Swiper(".js-horScroll-reviews1", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".reviews__btn1.swiper-button-next",
            prevEl: ".reviews__btn1.swiper-button-prev",
        },
    });
    new Swiper(".js-horScroll-reviews2", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".reviews__btn2.swiper-button-next",
            prevEl: ".reviews__btn2.swiper-button-prev",
        },
    });
    new Swiper(".js-horScroll-reviews3", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".reviews__btn3.swiper-button-next",
            prevEl: ".reviews__btn3.swiper-button-prev",
        },
    });
    new Swiper(".js-horScroll-reviews4", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".reviews__btn4.swiper-button-next",
            prevEl: ".reviews__btn4.swiper-button-prev",
        },
    });
    new Swiper(".js-horScroll-reviews5", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".reviews__btn5.swiper-button-next",
            prevEl: ".reviews__btn5.swiper-button-prev",
        },
    });

    let contentItems = document.querySelectorAll(".quiz__step-content-item");

    window.addEventListener("scroll", quizLoad);

    function quizLoad() {
        var element = document.querySelector(".quiz__container");
        var position = element.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            quizFirst();
            window.removeEventListener("scroll", quizLoad);
        }
    }

    let quizProject = document.querySelector(".js-quiz-project")

    if (quizProject) {
        quizProject.addEventListener("click", (e) => {
            window.removeEventListener("scroll", quizLoad);
            document
              .querySelector(
                '.quiz__step-content-item[data-next="project-2"]'
              )
              .click();
        });
    }

    let quizDevelop = document.querySelector(".js-quiz-develop")

    if (quizDevelop) {
        quizDevelop.addEventListener("click", (e) => {
            window.removeEventListener("scroll", quizLoad);
            document
              .querySelector(
                '.quiz__step-content-item[data-next="developer-2"]'
              )
              .click();
        });
    }

    function quizFirst() {
        if (document.querySelector('.quiz__step.active').getAttribute("data-question") === "101") {
            clearChat();
            publishAudio("audio4");
            changeAvatar(101);
        } else {
            clearChat();
            publishAudio("audio1");
            changeAvatar(1);
            writeMessage(
              `Здравствуйте! Я Александр, проектный менеджер в OrbitSoft. Нужна помощь в выборе подходящей опции  (формата работы)? Я записал для вас аудиосообщение. Прослушайте его.`
            );
        }
    }

    if (contentItems) {
        contentItems.forEach((item) => {
            item.addEventListener("click", (e) => {
                selectItem(e);
            });
        });
    }

    let modalBtn = document.querySelectorAll(".quiz__step-to-modal");
    modalBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let id = btn.getAttribute("data-next");
            document.querySelectorAll(".quiz__step").forEach((slide) => {
                if (
                    slide.getAttribute("data-step-id") === "project-3" &&
                    id === "project-4"
                ) {
                    slide.classList.add("modal-open");
                } else if (
                    slide.getAttribute("data-step-id") === "developer-3" &&
                    id === "developer-4"
                ) {
                    slide.classList.add("modal-open");
                } else if (
                    slide.getAttribute("data-step-id") === "106" &&
                    id === "apps"
                ) {
                    slide.classList.add("modal-open");
                }
            });
        });
    });

    let nextBtns = document.querySelectorAll(".quiz__step-next");
    if (nextBtns) {
        nextBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                showSlide(btn.getAttribute("data-next"));
                if (btn.getAttribute("data-next") === "project-2" || btn.getAttribute("data-next") === "project-3" || btn.getAttribute("data-next") === "project-4") {
                    changeProjectFromTo();
                }
                if (btn.getAttribute("data-next") === "developer-2" || btn.getAttribute("data-next") === "developer-3" || btn.getAttribute("data-next") === "developer-4") {
                    changeDeveloperFromTo();
                }
                if (btn.getAttribute("data-next") === "102" || btn.getAttribute("data-next") === "103" || btn.getAttribute("data-next") === "104" || btn.getAttribute("data-next") === "105" || btn.getAttribute("data-next") === "106" || btn.getAttribute("data-next") === "apps") {
                    makeOutputInfoApps();
                }
            });
        });
    }

    function backFunc(btn) {
        let id = btn.getAttribute("data-prev");
        let allSlides = document.querySelectorAll(".quiz__step");
        allSlides.forEach((slide) => {
            if (slide.getAttribute("data-step-id") === id) {
                slide.classList.add("active");
                slide
                    .querySelector(".quiz__step-next")
                    .classList.add("unactive");
                if (slide.getAttribute("data-question") === "1") {
                    let selected = document
                        .querySelector('.quiz__step.active[data-question="1"]')
                        .querySelectorAll(".active");
                    selected.forEach((el) => {
                        el.classList.remove("active");
                    });
                    quizFirst();
                } else if (slide.getAttribute("data-question") === "2") {
                    let selected = document
                        .querySelector('.quiz__step.active[data-question="2"]')
                        .querySelectorAll(".active");
                    selected.forEach((el) => {
                        el.classList.remove("active");
                    });
                    clearChat();
                } else if (slide.getAttribute("data-question") === "3") {
                    let selected = document
                        .querySelector('.quiz__step.active[data-question="3"]')
                        .querySelectorAll(".active");
                    selected.forEach((el) => {
                        el.classList.remove("active");
                    });
                    document.querySelectorAll(".modal-open").forEach((open) => {
                        open.classList.remove("modal-open");
                    });
                    clearChat();
                    writeMessage(
                        `Отлично! Осталось указать срок реализации и вы узнаете ориентировочную стоимость  проекта. Не уверены, в сроках? Оставьте контакты на 4 шаге и мы поможем вам определиться. `
                    );
                }
            } else {
                slide.classList.remove("active");
            }
        });
    }

    let backBtns = document.querySelectorAll(".quiz__step-back");

    if (backBtns) {
        backBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                backFunc(btn);
                if (btn.getAttribute("data-prev") === "project-2" || btn.getAttribute("data-prev") === "project-3") {
                    changeProjectFromTo();
                }
                if (btn.getAttribute("data-prev") === "developer-2" || btn.getAttribute("data-prev") === "developer-3") {
                    changeDeveloperFromTo();
                }
                if (btn.getAttribute("data-prev") === "101" || btn.getAttribute("data-prev") === "102" || btn.getAttribute("data-prev") === "103" || btn.getAttribute("data-prev") === "104" || btn.getAttribute("data-prev") === "105" || btn.getAttribute("data-prev") === "106") {
                    makeOutputInfoApps();
                }
            });
        });
    }

    let lineItems = document.querySelectorAll(".quiz__step-period-line-item");

    if (lineItems) {
        lineItems.forEach((item) => {
            item.addEventListener("click", () => {
                item.closest(".quiz__step")
                    .querySelector(".quiz__step-next")
                    .classList.remove("unactive");

                let relativeItems = item
                    .closest(".quiz__step-period-line")
                    .querySelectorAll(".quiz__step-period-line-item");
                relativeItems.forEach((relative) => {
                    relative.classList.remove("active");
                });
                item.classList.add("active");
            });
        });
    }

    let projects = document.querySelectorAll(".quiz__step-grid-item");

    if (projects) {
        projects.forEach((btn) => {
            btn.addEventListener("click", () => {
                clearChat();
                changeAvatar(btn.getAttribute("data-id"));
                changeProjectFromTo();
            });
        });
    }

    let radioItems = document.querySelectorAll(".quiz__step-person-radio-item");

    if (radioItems) {
        radioItems.forEach((item) => {
            item.addEventListener("click", () => {
                item.closest(".quiz__step")
                    .querySelector(".quiz__step-next")
                    .classList.remove("unactive");
                radioItems.forEach((radio) => radio.classList.remove("active"));
                item.classList.add("active");
            });
        });
    }

    let projectPeriods = document.querySelectorAll(".project-period");

    if (projectPeriods) {
        projectPeriods.forEach((btn) => {
            btn.addEventListener("click", () => {
                changeProjectFromTo();
            });
        });
    }

    let allDevsLines = document.querySelectorAll(
        ".developer-rang, .developer-num, .quiz__step-person-radio-item"
    );
    allDevsLines.forEach((item) => {
        item.addEventListener("click", changeDeveloperFromTo);
    });

    function changeDeveloperFromTo() {
        let price = 1;
        document.querySelectorAll(".developer-rang").forEach((item) => {
            if (item.classList.contains("active")) {
                price = +item.getAttribute("data-price");
            }
        });
        let minNum = 1;
        let maxNum = 1;
        document.querySelectorAll(".developer-num").forEach((item) => {
            if (item.classList.contains("active")) {
                minNum = +item.getAttribute("data-min");
                maxNum = +item.getAttribute("data-max");
            }
        });
        let minDays = 1;
        let maxDays = 1;
        document
            .querySelectorAll(".quiz__step-person-radio-item")
            .forEach((item) => {
                if (item.classList.contains("active")) {
                    minDays = +item.getAttribute("data-min");
                    maxDays = +item.getAttribute("data-max");
                }
            });
        // document.querySelector(".developer-form").innerHTML = triplets(price * minNum * minDays * 70) + "&nbsp;₽"
        // document.querySelector(".developer-to").innerHTML = triplets(price * maxDays * maxNum * 70) + "&nbsp;₽"
        makeOutputInfoDeveloper();
    }

    function changeProjectFromTo() {
        let price = 0;
        document.querySelectorAll(".quiz__step-grid-item").forEach((item) => {
            if (item.classList.contains("active")) {
                price = +item.getAttribute("data-price");
            }
        });
        let min, max;
        document.querySelectorAll(".project-period").forEach((item) => {
            if (item.classList.contains("active")) {
                min = +item.getAttribute("data-min");
                max = +item.getAttribute("data-max");
            }
        });
        // document.querySelector(".project-from").innerHTML = triplets(price * min * 70) + "&nbsp;₽"
        // document.querySelector(".project-to").innerHTML = triplets(price * max * 70) + "&nbsp;₽"
    }

    function firstMessage(next) {
        let proText = document.querySelector(".quiz__step-message-project");
        let devText = document.querySelector(".quiz__step-message-developer");

        if (
            !proText.classList.contains("active") &&
            !devText.classList.contains("active")
        ) {
            clearChat();
            publishAudio("audio2");
            writeMessage(
                "Здравствуйте! Я&nbsp;Александр, проектный менеджер в&nbsp;OrbitSoft. Заполните этот опрос, чтобы&nbsp;получить бесплатную оценку стоимости разработки или&nbsp;пообщайтесь со&nbsp;мной вживую."
            );
        }

        if (next == "project-2" && !proText.classList.contains("active")) {
            proText.classList.add("active");
            devText.classList.remove("active");
        } else if (
            next == "developer-2" &&
            !devText.classList.contains("active")
        ) {
            proText.classList.remove("active");
            devText.classList.add("active");
        }
    }

    function selectItem(e) {
        let curStep = e.target.closest(".quiz__step");
        let allItems = curStep.querySelectorAll(".quiz__step-content-item");
        let nextBtn = curStep.querySelector(".quiz__step-next");
        if (!e.currentTarget.classList.contains('quiz__step-multi-item')) {
            allItems.forEach((item) => {
                item.classList.remove("active");
            });
        }
        e.currentTarget.classList.toggle("active");
        if (e.currentTarget.getAttribute("data-next")) {
            nextBtn.setAttribute(
                "data-next",
                e.currentTarget.getAttribute("data-next")
            );
            let cur = e.currentTarget.getAttribute("data-next");

            firstMessage(cur);
        }

        if (e.currentTarget.getAttribute("data-question")) {
            clearChat();
            changeAvatar(e.currentTarget.getAttribute("data-question"))
        }

        nextBtn.classList.remove("unactive");
    }

    function showSlide(id) {
        let allSlides = document.querySelectorAll(".quiz__step");
        allSlides.forEach((slide) => {
            if (slide.getAttribute("data-step-id") == id) {
                slide.classList.add("active");
                if (slide.getAttribute("data-step-id") == "project-2") {
                    clearChat();
                    changeAvatar(2);
                } else if (slide.getAttribute("data-step-id") == "project-3") {
                    clearChat();
                    writeMessage(
                        `Отлично! Осталось указать срок реализации и вы узнаете ориентировочную стоимость  проекта. Не уверены, в сроках? Оставьте контакты на 4 шаге и мы поможем вам определиться. `
                    );
                } else if (slide.getAttribute("data-step-id") == "developer-2") {
                    clearChat();
                    changeAvatar(12);
                    clearChat();
                    writeMessage(
                        "Хотите привлечь опытного разработчика? Вы можете обсудить детали со мной. В нашем штате большое количество высококвалифицированных разработчиков и я буду рад обсудить с вами детали проекта, а также дать рекомендации для оптимального старта."
                    );
                } else if (slide.getAttribute("data-question") == "4") {
                    clearChat();
                    publishAudio("audio3");
                    writeMessage(
                        `Оставьте контакты, и&nbsp;вы&nbsp;получите индивидуальный расчёт вашего проекта. Не&nbsp;хотите ждать? Тогда&nbsp;напишите нашему менеджеру прямо сейчас.`
                    );
                } else if (slide.getAttribute("data-question") == "5") {
                    document.querySelectorAll(".modal-open").forEach((open) => {
                        open.classList.remove("modal-open");
                    });
                    clearChat();
                    writeMessage(
                        `Спасибо, ваша заявка принята. Если у вас остались вопросы, напишите мне.`
                    );
                } else {
                    clearChat();
                    changeAvatar(id)
                }
            } else {
                slide.classList.remove("active");
            }
        });
    }

    function changeAvatar(id) {
        let imagesFolder = "img/quiz-img/avatars/";
        let list = {
            1: ["alexander-project", "Александр", "Проектный менеджер"],
            2: [
                "alexander-mobile",
                "Александр",
                "Менеджер по мобильной разработке",
            ],
            3: [
                "dmitriy-commers",
                "Дмитрий",
                "Специалист проектов по электронной торговле",
            ],
            4: ["vladimir-ai", "Владимир", "Руководитель проектов по ИИ"],
            5: [
                "andrey-web",
                "Андрей",
                "Специалист проектов по web-разработке",
            ],
            6: ["nikolay-design", "Николай", "Специалист дизайн-направления"],
            7: ["evgeniy-po", "Евгений", "Руководитель разработки ПО"],
            8: [
                "mihail-blockchain",
                "Михаил",
                "Менеджер проектов по блокчейн технологиям",
            ],
            9: [
                "vladislav-bigdata",
                "Владислав",
                "Специалист по аналитике и Big Data ",
            ],
            10: ["stanislav-other", "Станислав", "Менеджер"],

            11: ["dmitriy-qa", "Дмитрий", " QA специалист"],
            12: ["evgeniy-developer", "Евгений", "Разработчик"],
            13: ["nikolay-devops", "Николай", "DevOps"],
            14: ["anton-design", "Антон", "UI/UX дизайнер"],

            101: ["alexander-project", "Александр", "Проектный менеджер"],
            1011: ["alexander-project", "Александр", "Проектный менеджер"],
            102: ["alexander-project", "Александр", "Проектный менеджер"],
            103: ["alexander-project", "Александр", "Проектный менеджер"],
            104: ["alexander-project", "Александр", "Проектный менеджер"],
            105: ["alexander-project", "Александр", "Проектный менеджер"],
            106: ["alexander-project", "Александр", "Проектный менеджер"],
        };

        let messages = {
            2: `Под какую платформу нужно разработать приложение: iOS, Android, кроссплатформенное? Я веду проекты по мобильной разработке в OrbitSoft и буду рад обсудить детали проекта. `,
            3: `Собираетесь разрабатывать интернет-магазин с нуля или на базе готовых платформ, таких как WordPress? Я специализируюсь на проектах по электронной торговле, давайте обсудим вашу задачу.`,
            4: `Я веду проекты, связанные с ИИ в OrbitSoft: мы разрабатываем умных чат-ботов, алгоритмы, анализирующие эффективность рекламы, работаем с нейросетями. Опишите вашу идею.`,
            5: `Нужно разработать сайт, web-сервис или браузерное расширение? Я специализируюсь на проектах по web-разработке в OrbitSoft и могу дать несколько рекомендаций для оптимального старта. `,
            6: `Хотите разработать пользовательский интерфейс для сайта или приложения? Я занимаюсь дизайн-направлением в OrbitSoft и могу посоветовать, на какие моменты обратить внимание. `,
            7: `На каком языке планируете разработку: C++, C#, Java, Python? Под Windows, Linux или macOS? Я специализируюсь на проектах, связанных с разработкой ПО, напишите мне для консультации.`,
            8: `Я веду в OrbitSoft проекты, связанные с технологией блокчейн, криптовалютами и NFT и буду рад обсудить подробнее вашу задачу. `,
            9: `Нужно построить систему обработки данных и использовать их для повышения эффективности бизнес-процессов? Я веду направление аналитики в OrbitSoft и с радостью отвечу на ваши вопросы.`,
            10: `Если проект не подходит ни под одно направление, алгоритм не сможет адекватно рассчитать бюджет на разработку. Напишите в чат, и мы обсудим детали проекта прямо сейчас. Или оставьте контакты на последнем шаге, и я позвоню вам позже.`,
            101: `Здравствуйте! Я&nbsp;Александр, менеджер по&nbsp;мобильной разработке. Заполните этот опрос, чтобы&nbsp;получить бесплатную оценку стоимости разработки или&nbsp;пообщайтесь со&nbsp;мной вживую. `,
            1011: `Для&nbsp;какой сферы вы&nbsp;хотите реализовать приложение? Выберите опцию, которая описывает это&nbsp;лучше всего. Не&nbsp;нашли подходящего варианта? Тогда&nbsp;выберите «Другое». `,
            102: `У&nbsp;вас&nbsp;уже есть&nbsp;приложение или&nbsp;нужна разработка с&nbsp;нуля? Нужны&nbsp;ли&nbsp;вам ТЗ&nbsp;и&nbsp;дизайн? Выберите, какую задачу вы&nbsp;хотите решить. `,
            103: `Под&nbsp;какую платформу нужно разработать приложение: iOS, Android, Windows, кроссплатформенное? Я&nbsp;веду проекты по&nbsp;мобильной разработке в&nbsp;OrbitSoft и&nbsp;буду рад&nbsp;обсудить детали проекта. `,
            104: `Приложения, содержащие до&nbsp;10&nbsp;экранов&nbsp;— обычно это&nbsp;простые приложения&nbsp;— как&nbsp;правило, программы, созданные для&nbsp;выполнения одной или&nbsp;нескольких несложных задач. Чем&nbsp;больше уникальных экранов будет в&nbsp;Вашем приложении, тем&nbsp;больше функций и&nbsp;текущих процессов оно&nbsp;будет выполнять. `,
            105: `Какой дизайн вам&nbsp;необходим? Мы&nbsp;разработаем UX / UI мобильного приложения, дизайн-макеты и&nbsp;кликабельный прототип, исходя из&nbsp;ваших пожеланий, или&nbsp;можем предложить стандартные элементы. `,
            106: `У&nbsp;нас&nbsp;есть&nbsp;большой опыт запуска приложений, выберите, какие дополнительные услуги вам&nbsp;понадобятся, и&nbsp;мы&nbsp;с&nbsp;радостью вам&nbsp;поможем. Не&nbsp;знаете что&nbsp;выбрать&nbsp;— выберите «Другое» или&nbsp;напишите в&nbsp;чат&nbsp;и&nbsp;я&nbsp;вас проконсультирую. `,
        };

        if (messages[id]) {
            writeMessage(messages[id]);
        }

        document
            .querySelector(".quiz__chat-top-img")
            .setAttribute("src", imagesFolder + list[id][0] + ".png");
        document
            .querySelector(".quiz__chat-middle-message-img")
            .setAttribute("src", imagesFolder + list[id][0] + ".png");
        document.querySelectorAll(".name").forEach((item) => {
            item.innerHTML = list[id][1];
        });
        document.querySelector(".quiz__chat-top-status").innerHTML =
            list[id][2];
    }

    function publishAudio(audio) {
        let container = document.querySelector(
            ".quiz__chat-middle-message-body"
        );
        document
            .querySelector(".quiz__chat-middle-message-img")
            .classList.add("show");
        document
            .querySelector(".quiz__chat-middle-message")
            .classList.add("writting");

        setTimeout(() => {
            let message = document.createElement("div");
            message.classList.add("quiz__chat-middle-message-audio");
            message.classList.add(audio);
            message.innerHTML =
                `<svg class="quiz__chat-middle-message-audio-play"><use xlink:href="#play_circle"></use></svg><svg class="quiz__chat-middle-message-audio-line"><use xlink:href="#audio"></use></svg><div class="quiz__chat-audio-box"><svg class="quiz__chat-middle-message-audio-line-active"><use xlink:href="#audio"></use></svg></div><audio class="quiz__chat-audio" type="hidden"><source src="audio/` +
                audio +
                `.ogg" type="audio/ogg; codecs=vorbis"><source src="audio/` +
                audio +
                `.mp3" type="audio/mpeg"></audio>`;
            container.appendChild(message);
            playAudio();
        }, 600);
    }

    function playAudio() {
        document
            .querySelector(".quiz__chat-middle-message-audio-play")
            .addEventListener("click", () => {
                if (
                    !document
                        .querySelector(".quiz__chat-middle-message-audio")
                        .classList.contains("pause") &&
                    document
                        .querySelector(".quiz__chat-middle-message-audio")
                        .classList.contains("playing")
                ) {
                    document
                        .querySelector(".quiz__chat-audio")
                        .play()
                        .then((_) => {
                            document.querySelector(".quiz__chat-audio").pause();
                            document
                                .querySelector(
                                    ".quiz__chat-middle-message-audio-play use"
                                )
                                .setAttributeNS(
                                    "http://www.w3.org/1999/xlink",
                                    "xlink:href",
                                    "#play_circle"
                                );
                            document
                                .querySelector(
                                    ".quiz__chat-middle-message-audio"
                                )
                                .classList.add("pause");
                        })
                        .catch((error) => {});
                } else {
                    document.querySelector(".quiz__chat-audio").play();
                    document
                        .querySelector(".quiz__chat-middle-message-audio")
                        .classList.add("playing");
                    document
                        .querySelector(".quiz__chat-middle-message-audio")
                        .classList.remove("pause");
                    document
                        .querySelector(
                            ".quiz__chat-middle-message-audio-play use"
                        )
                        .setAttributeNS(
                            "http://www.w3.org/1999/xlink",
                            "xlink:href",
                            "#pause-button"
                        );
                    document
                        .querySelector(".quiz__chat-audio")
                        .addEventListener("ended", (event) => {
                            document
                                .querySelector(
                                    ".quiz__chat-middle-message-audio"
                                )
                                .classList.remove("playing");
                            document
                                .querySelector(
                                    ".quiz__chat-middle-message-audio-play use"
                                )
                                .setAttributeNS(
                                    "http://www.w3.org/1999/xlink",
                                    "xlink:href",
                                    "#play_circle"
                                );
                        });
                }
            });
    }

    function clearChat() {
        let messages = document.querySelectorAll(
            ".quiz__chat-middle-message-item, .quiz__chat-middle-message-audio"
        );

        document
            .querySelector(".quiz__chat-middle-message-img")
            .classList.remove("show");

        messages.forEach((item) => {
            item.remove();
        });
    }

    function writeMessage(msg) {
        let container = document.querySelector(
            ".quiz__chat-middle-message-body"
        );
        document
            .querySelector(".quiz__chat-middle-message-img")
            .classList.add("show");
        document
            .querySelector(".quiz__chat-middle-message")
            .classList.add("writting");
        setTimeout(() => {
            let message = document.createElement("div");
            message.classList.add("quiz__chat-middle-message-item");
            message.innerHTML = msg;
            container.appendChild(message);
            document
                .querySelector(".quiz__chat-middle-message")
                .classList.remove("writting");
        }, 600);
    }

    document.addEventListener("click", (e) => {
        document
            .querySelectorAll(".quiz__step-person-group")
            .forEach((item) => {
                if (item.classList.contains("active")) {
                    if (
                        !(
                            e.target.classList.contains(
                                "quiz__step-person-group-content-item"
                            ) ||
                            e.target.classList.contains(
                                "quiz__step-person-group-content"
                            ) ||
                            e.target.classList.contains(
                                "quiz__step-person-group-top"
                            )
                        )
                    ) {
                        closeGroup();
                    }
                }
            });
    });

    let personGroups = document.querySelectorAll(
        ".quiz__step-person-group-top"
    );

    if (personGroups) {
        personGroups.forEach((item) => {
            item.addEventListener("click", () => {
                if (
                    item
                        .closest(".quiz__step-person-group")
                        .classList.contains("active")
                ) {
                    closeGroup();
                } else {
                    document
                        .querySelectorAll(".quiz__step-person-group")
                        .forEach((groups) => groups.classList.remove("active"));
                    item.closest(".quiz__step-person-group").classList.add(
                        "active"
                    );
                }
            });
        });
    }

    function closeGroup() {
        document
            .querySelector(".quiz__step-person-group.show.active")
            .classList.remove("active");
    }

    let groupItems = document.querySelectorAll(
        ".quiz__step-person-group-content-item, .quiz__step-person-list-item"
    );

    if (groupItems) {
        groupItems.forEach((item) => {
            item.addEventListener("click", () => {
                item.classList.toggle("active");
                makeOutputInfoDeveloper();
            });
        });
    }

    let personItems = document.querySelectorAll(".quiz__step-person-item");

    if (personItems) {
        personItems.forEach((item) => {
            if (!item.classList.contains("quiz__step-simple")) {
                item.addEventListener("click", () => {
                    let allElems = document.querySelectorAll(
                      ".quiz__step-person-group, .quiz__step-person-list"
                    );
                    curId = item.getAttribute("data-id");

                    clearChat();
                    changeAvatar(curId);

                    let curMessage = `Хотите привлечь ${item.getAttribute(
                      "data-message"
                    )}? Вы&nbsp;можете обсудить детали со&nbsp;мной. В нашем штате большое количество высококвалифицированных специалистов и&nbsp;я буду рад&nbsp;обсудить с&nbsp;вами детали проекта, а&nbsp;также дать рекомендации для&nbsp;оптимального старта.`;

                    clearChat();
                    writeMessage(curMessage);

                    allElems.forEach((elem) => {
                        if (elem.getAttribute("data-person-id") == curId) {
                            elem.classList.add("show");
                        } else {
                            elem.classList.remove("show");
                        }
                    });
                });
            }
        });
    }

    let qnaItems = document.querySelectorAll(".quiz__qna-list-item");

    if (qnaItems) {
        qnaItems.forEach((qna) => {
            qna.addEventListener("click", () => {
                qnaItems.forEach((qna) => {
                    qna.classList.remove("active");
                });
                qna.classList.toggle("active");
            });
        });
    }

    function makeOutputInfoProject() {
        let type = document.querySelector(".quiz__result-type");
        let period = document.querySelector(".quiz__result-period");
        let description = document.querySelector(".quiz__result-description");

        let curType = document.querySelector(".quiz__step-grid-item.active");
        let curPeriod = document.querySelector(".project-period.active");
        let curDesc = document.querySelector(
            ".quiz__step-description-input"
        ).value;

        if (curType) {
            type.value = curType.getAttribute("data-value");
        }
        if (curPeriod) {
            period.value = curPeriod.getAttribute("data-value");
        }
        description.value = curDesc;
    }

    let projectChangers = document.querySelectorAll(
        ".project-period, .quiz__step-grid-item"
    );

    if (projectChangers) {
        projectChangers.forEach((item) => {
            item.addEventListener("click", makeOutputInfoProject);
        });
    }
    document
        .querySelector(".quiz__step-description-input")
        .addEventListener("blur", makeOutputInfoProject);

    document
        .querySelector(".quiz__step-refresh")
        .addEventListener("click", () => {
            let allActive = document
                .querySelector(".quiz")
                .querySelectorAll(".active");

            allActive.forEach((element) => {
                element.classList.remove("active");
            });

            let formProject = document.getElementById("quiz-project")
            if (formProject) {
                formProject.reset();
                $(".quiz__step-next[data-next=project-2], .quiz__step-next[data-next=project-3], .quiz__step-next[data-next=project-4], .quiz__step-next[data-next=final]").addClass("unactive");
            }
            let formDevelop = document.getElementById("quiz-develop")
            if (formDevelop) {
                formDevelop.reset();
                $(".quiz__step-next[data-next=developer-2], .quiz__step-next[data-next=developer-3], .quiz__step-next[data-next=developer-4], .quiz__step-next[data-next=final]").addClass("unactive");
            }
            let formApps = document.getElementById("quiz-apps")
            if (formApps) {
                formApps.reset();
                $(".quiz__step-next[data-next=102], .quiz__step-next[data-next=103], .quiz__step-next[data-next=104], .quiz__step-next[data-next=105], .quiz__step-next[data-next=106], .quiz__step-next[data-next=apps], .quiz__step-next[data-next=final]").addClass("unactive");
            }
            showSlide(1);
            clearChat();
            changeAvatar(1);
            clearChat();

            
        });

    function makeOutputInfoDeveloper() {
        let type = document.querySelector(".quiz__result-2-type");
        let rang = document.querySelector(".quiz__result-2-rang");
        let number = document.querySelector(".quiz__result-2-number");
        let busyness = document.querySelector(".quiz__result-2-busyness");
        let techs = document.querySelector(".quiz__result-2-techs");

        let curType = document.querySelector(".quiz__step-person-item.active")

        if (curType) {
            type.value = curType.innerHTML.trim();
        }
        let curRang = document.querySelector(".developer-rang.active")
        if (curRang) {
            rang.value = curRang.getAttribute("data-value");
        }
        let curNumber = document.querySelector(".developer-num.active")
        if (curNumber) {
            number.value = curNumber.getAttribute("data-value");
        }
        let curBusy = document.querySelector(".quiz__step-person-radio-item.active")
        if (curBusy) {
            busyness.value = curBusy.getAttribute("data-value");
        }
        techs.value = takeOutTechs();
    }

    function takeOutTechs() {
        let activeGroups = document.querySelectorAll(
            ".quiz__step-person-group.show, .quiz__step-person-list.show"
        );
        let res = [];

        for (let i = 0; i < activeGroups.length; i++) {
            let cur = activeGroups[i];
            let curList = cur.querySelectorAll(".active");
            if (!curList) continue;
            let curTitle = cur.getAttribute("data-title");
            let curArr = [];
            curList.forEach((item) => {
                curArr.push(item.innerHTML);
            });
            res.push(`${curTitle}: ${curArr.join(", ")}`);
        }

        return res.join("; ");
    }

    function makeOutputInfoApps() {
        let sphere = document.querySelector(".quiz__result-sphere");
        let get = document.querySelector(".quiz__result-get");
        let platform = document.querySelector(".quiz__result-platform");
        let count = document.querySelector(".quiz__result-count");
        let type = document.querySelector(".quiz__result-type");
        let start = document.querySelector(".quiz__result-start");

        let curSphere = document.querySelector(".quiz__step-four-grid.active")
        let curCount = document.querySelector(".quiz__count").querySelector(".active")
        let curType = document.querySelector(".quiz__type").querySelector(".active")

        if (curSphere) {
            sphere.value = curSphere.getAttribute("data-value");
        }
        get.value = takeOutGet();
        platform.value = takeOutPlatform();
        if (curCount) {
            count.value = curCount.getAttribute("data-value");
        }
        if (curType) {
            type.value = curType.getAttribute("data-value");
        }
        start.value = takeOutStart();
    }

    function takeOutGet() {
        let cur = document.querySelector('.quiz__get')
        let res = [];
        let curList = cur.querySelectorAll(".active");
        let curArr = [];
        if (curList) {
            curList.forEach((item) => {
                curArr.push(item.getAttribute("data-value"));
            });
            res.push(`${curArr.join(", ")}`);

            return res.join("; ");
        }
    }

    function takeOutPlatform() {
        let cur = document.querySelector('.quiz__platform')
        let res = [];
        let curList = cur.querySelectorAll(".active");
        let curArr = [];
        if (curList) {
            curList.forEach((item) => {
                curArr.push(item.getAttribute("data-value"));
            });
            res.push(`${curArr.join(", ")}`);

            return res.join("; ");
        }
    }

    function takeOutStart() {
        let cur = document.querySelector('.quiz__start')
        let res = [];
        let curList = cur.querySelectorAll(".active");
        let curArr = [];
        if (curList) {
            curList.forEach((item) => {
                curArr.push(item.getAttribute("data-value"));
            });
            curArr.push(cur.querySelector('.quiz__step-short-input').value)
            res.push(`${curArr.join(", ")}`);

            return res.join("; ");
        }
    }

    function triplets(str) {
        // \u202f — неразрывный узкий пробел
        return str
            .toString()
            .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1\u202f");
    }
});


function getInitialPageURLandReferrer() {
    const pageURL = window.location.href;
    const referrer = document.referrer;

    const url = new URL(pageURL);
    const utm_source = url.searchParams.get('utm_source');
    const utm_medium = url.searchParams.get('utm_medium');
    const utm_campaign = url.searchParams.get('utm_campaign');
    const utm_term = url.searchParams.get('utm_term');
    const utm_content = url.searchParams.get('utm_content');

    if (localStorage.referrerURL === 'null' || typeof localStorage.referrerURL === 'undefined') {
        localStorage.setItem('referrerURL', referrer);
    }

    if (localStorage.initialURL === 'null' || typeof localStorage.initialURL === 'undefined') {
        localStorage.setItem('initialURL', pageURL);
    }

    if (localStorage.utm_source === 'null' || typeof localStorage.utm_source === 'undefined') {
        localStorage.setItem('utm_source', utm_source);
    }

    if (localStorage.utm_medium === 'null' || typeof localStorage.utm_medium === 'undefined') {
        localStorage.setItem('utm_medium', utm_medium);
    }

    if (localStorage.utm_campaign === 'null' || typeof localStorage.utm_campaign === 'undefined') {
        localStorage.setItem('utm_campaign', utm_campaign);
    }

    if (localStorage.utm_term === 'null' || typeof localStorage.utm_term === 'undefined') {
        localStorage.setItem('utm_term', utm_term);
    }

    if (localStorage.utm_content === 'null' || typeof localStorage.utm_content === 'undefined') {
        localStorage.setItem('utm_content', utm_content);
    }
}

function utm($this) {
    $this.find('input.js-utm_source:hidden').val(localStorage.utm_source);
    $this.find('input.js-utm_medium:hidden').val(localStorage.utm_medium);
    $this.find('input.js-utm_campaign:hidden').val(localStorage.utm_campaign);
    $this.find('input.js-utm_term:hidden').val(localStorage.utm_term);
    $this.find('input.js-utm_content:hidden').val(localStorage.utm_content);
    $this.find('input.js-utm_referrer:hidden').val(localStorage.utm_referrer);
    $this.find('input.js-_ym_uid:hidden').val(localStorage._ym_uid);
    $this.find('input.js-yclid:hidden').val(localStorage.yclid);
}

function scrollToElement() {
    let elements = $(".js-scroll-to");
    let page = $("html, body");
    let animationTime = 600;
    let activeClass = "is-active";

    elements.on("click", function (e) {
        e.preventDefault();

        $(".js-header").removeClass("is-open");
        $(".js-menu-button").removeClass("is-open");
        let el = $(this);
        let targetSelector = el.attr("href");
        let target = $(targetSelector);
        let targetPosigion = target.offset().top;
        let isPageNoScrolled = false;
        let scrollFrommTop = $(window).scrollTop();

        elements.removeClass(activeClass);
        el.addClass(activeClass);

        if (scrollFrommTop === 0) {
            isPageNoScrolled = true;
        }

        if (target.offset().top > 0) {
            page.clearQueue().animate(
                {
                    scrollTop: targetPosigion - 88,
                },
                animationTime,
                "easeInOutExpo",
                function () {
                    if (isPageNoScrolled) {
                        // for scroll a little more after click when panel is not scrolled and it without css top rule
                        page.clearQueue().animate(
                            { scrollTop: targetPosigion },
                            300
                        );
                    }
                }
            );
        } else {
            page.clearQueue().animate(
                {
                    scrollTop: 0,
                },
                animationTime,
                "easeInOutExpo"
            );
        }
    });
}

function toggleClassForToTop() {
    let viewport = window;
    let viewportH = $("header").height();

    checkIfScrolled();

    viewport.addEventListener("scroll", function () {
        checkIfScrolled();
    });

    function checkIfScrolled() {
        let scrollFromTop =
            window.pageYOffset || document.documentElement.scrollTop;
        let targetBlock = document.getElementsByTagName("body");
        let scrolledState = "is-to-top";

        if (scrollFromTop > viewportH) {
            targetBlock[0].classList.add(scrolledState);
        } else {
            targetBlock[0].classList.remove(scrolledState);
        }
    }
}

function TrackTag(code, rdtcode, custom) {
    // console.log(code, rdtcode, custom);
    if (!!window.lintrk) {
        window.lintrk("track", { conversion_id: code });
    }
    if (!!rdtcode) {
        if (rdtcode === "Custom") {
            rdt("track", "Custom", { customEventName: custom });
        } else {
            rdt("track", rdtcode);
        }
    }
    UI(code, rdtcode, custom);
}

function openQuote() {
    $(".js-open-quote").on("click", function () {
        $(".quote").toggleClass("open");
    });
}

function openServiceDescription() {
    $(".js-open-service-description").on("click", function () {
        $(".service-description__text").toggleClass("open");
        if($(".service-description__text").hasClass("open")){
            $(".js-open-service-description > p").text("скрыть");
        } else {
            $(".js-open-service-description > p").text("Читать полностью");
        }
    });
}

openServiceDescription();

function toggleFocus() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        $(".js-remove-focus").on({
            click: function () {
                let tar = $(this);

                if (tar.hasClass("services__item")) {
                    $("#services-modal .services__item").empty();
                    tar.find(".services__card")
                        .clone()
                        .appendTo("#services-modal .services__item");
                    $("#services-modal").addClass("is-display");
                } else if (tar.hasClass("team__card")) {
                    $("#team-modal .team__card").empty().html(tar.html());
                    $("#team-modal").addClass("is-display");
                }

                $(".js-overlay").addClass("is-display");
                document.body.style.overflow = "hidden";
                qrCodeClose();
            },
        });
    } else {
        $(".js-remove-focus").on({
            click: function (e) {
                $(".open").each(function () {
                    $(this).removeClass("open");
                });
                if ($(this).hasClass("open")) {
                    $(this).removeClass("open");
                } else {
                    $(this).addClass("open");
                }
                $(".js__close").on({
                    click: function (e) {
                        $(".open").each(function () {
                            $(this).removeClass("open");
                        });
                        e.stopPropagation();
                    },
                });
            },
        });
    }
}

function quizSelected() {
    $(".quiz__step-person-group").click(function (e) {
        if ($(e.target).hasClass("quiz__step-person-group-content-item")) {
            if ($(e.target).hasClass("active")) {
                $(e.target)
                    .clone()
                    .addClass("quiz-selected")
                    .removeClass("quiz__step-person-group-content-item")
                    .appendTo($(this).find(".quiz__step-person-selected"));
                if (
                    $(this).find(".quiz__step-person-selected").children()
                        .length > 3
                ) {
                    $(this)
                        .find(".quiz__step-person-selected")
                        .addClass("full");
                }
            } else {
                $(this)
                    .find(".quiz__step-person-selected")
                    .find('[data-person="' + $(e.target).data("person") + '"]')
                    .remove();
                if (
                    $(this).find(".quiz__step-person-selected").children()
                        .length < 4
                ) {
                    $(this)
                        .find(".quiz__step-person-selected")
                        .removeClass("full");
                }
            }
        } else if ($(e.target).hasClass("quiz-selected")) {
            $(this)
                .find(".quiz__step-person-group-content")
                .find('[data-person="' + $(e.target).data("person") + '"]')
                .removeClass("active");
            $(e.target).remove();
            if (
                $(this).find(".quiz__step-person-selected").children().length <
                4
            ) {
                $(this).find(".quiz__step-person-selected").removeClass("full");
            }
        }
    });
}

function adProjectOpen() {
    $(".ad-projects__more").on("click", function () {
        let url = $(this).attr("data-link");

        if ($(url).length) {
            $(".js-overlay").addClass("is-display");
            $(url).addClass("is-display");
            document.body.style.overflow = "hidden";
        }
    });
}

function feedbackModal() {
    $(".js-overlay").addClass("is-display");
    $(".js-slider-feedback").addClass("is-display");
    document.body.style.overflow = "hidden";
}
function feedbackOpen() {
    $(".js-expert-review").on("click", function () {
        feedbackModal();
    });
}

function feedbackNext() {
    $(".slider-feedback__next").on("click", function () {
        let count = $(".slider-feedback__item.swiper-slide-active").data(
            "count"
        );
        $("#feedback-step-2").addClass("visible");
        $("#feedback-step-1").removeClass("visible");
    });
}

function feedbackBack() {
    $(".slider-feedback__back").on("click", function () {
        $("#feedback-step-1").addClass("visible");
        $("#feedback-step-2").removeClass("visible");
    });
}

function quoteOpen() {
    $(".quote__btn").on("click", function () {
        $(".js-overlay").addClass("is-display");
        $(".quote__modal").addClass("is-display");
        document.body.style.overflow = "hidden";
    });
}

function exampleOpen() {
    $(".examples__more").on("click", function () {
        let url = $(this).data("href");

        $(url).addClass("is-display");
    });
}

function profitModalOpen() {
    $(".profit__card").on("click", function () {
        let profitId = $(this).attr("data-profitid");

        if ($(profitId).length) {
            $(".js-overlay").addClass("is-display");
            $(profitId).addClass("is-display");
            document.body.style.overflow = "hidden";
        }
    });
}

function proposeModalOpen() {
    $(".propose__card").on("click", function () {
        let proposeId = $(this).attr("data-proposeid");

        if ($(proposeId).length) {
            $(".js-overlay").addClass("is-display");
            $(proposeId).addClass("is-display");
            document.body.style.overflow = "hidden";
        }
    });
}

function stagesModalOpen() {
    $(".stages__item").on("click", function () {
        let stagesId = $(this).attr("data-stagesid");

        if ($(stagesId).length) {
            $(".js-overlay").addClass("is-display");
            $(stagesId).addClass("is-display");
            document.body.style.overflow = "hidden";
        }
    });
}

function videoModalOpen() {
    $(".review__card").on("click", function () {
        let videoId = $(this).data("videoid");

        $("#player-vt").attr("src", `https://www.youtube.com/embed/` + videoId);

        $(".js-overlay").addClass("is-display");
        $(".js-review-modal").addClass("is-display");
        document.body.style.overflow = "hidden";
    });
}

function requestACallOpen() {
    $(".js-request-button").on("click", function () {
        TrackTag(8428329, "Lead");

        $(".js-overlay").addClass("is-display");
        $(".js-request-call-form").addClass("is-display");
        document.body.style.overflow = "hidden";
    });
}

function requestACallClose() {
    $(".js-request-call-form").on("click", function () {
        $(".js-request-call-form").removeClass("is-display");
        $(".js-overlay").removeClass("is-display");

        document.body.style.overflow = "auto";
    });
}

function toggleHeader() {
    $(".js-menu-button").on("click", function () {
        if ($(this).hasClass("is-open")) {
            $(this).removeClass("is-open");
            $(".js-header").removeClass("is-open");
        } else {
            $(this).addClass("is-open");
            $(".js-header").addClass("is-open");
        }
    });
}

if($(window).width() >= 1025){
    $("#menuItem1").hover(function() {
        $('#menuSubItem2').hide();
        $('#menuSubItem3').hide();
        $('#menuSubItem1').css("display", "flex");
    });

    $("#menuItem2").hover(function() {
        $('#menuSubItem1').hide();
        $('#menuSubItem3').hide();
        $('#menuSubItem2').css("display", "flex");
    });
    
    $("#menuItem3").hover(function() {
        $('#menuSubItem1').hide();
        $('#menuSubItem2').hide();
        $('#menuSubItem3').css("display", "flex");
    });
}


function CallModalOpen() {
    $(".header__item_btn").on("click", function () {
        $(".js-overlay").addClass("is-display");
        $("#call-modal").addClass("is-display");
        document.body.style.overflow = "hidden";
        $("#call-modal").addClass("triger");
    });
}
CallModalOpen();
function CallModalClose() {
    $(".call-modal__close").on("click", function () {
        $(".js-overlay").removeClass("is-display");
        $("#call-modal").removeClass("is-display");
        document.body.style.overflow = "initial";
    });
}
CallModalClose();

//End Call-modal

function qrCodeOpen() {
    $(".js-open-qr-mobile").on("click", function () {
        $(".js-overlay").addClass("is-display");
        $(".js-qr-fixed").addClass("is-display");

        document.body.style.overflow = "hidden";
    });
}

function qrCodeClose() {
    $(".js-overlay, .js-qr-fixed, .js-close-modal").on("click", function () {
        $(".is-display").each(function () {
            $(this).removeClass("is-display");
        });

        $(".is-open").each(function () {
            $(this).removeClass("is-open");
        });

        $("#player-vt").attr("src", ``);

        document.body.style.overflow = "auto";
    });
}

function toggleContent() {
    $(".js-toggle").on("click", function () {
        if ($(this).hasClass("is-open")) {
            $(".js-toggle")
                .removeClass("is-open")
                .next(".js-content")
                .slideUp(300);
        } else {
            $(".js-toggle")
                .removeClass("is-open")
                .next(".js-content")
                .slideUp(300);
            $(this).toggleClass("is-open");
            $(this).next(".js-content").slideToggle(300);
        }
    });
}
/**
 * Swiper 8.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 15, 2022
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function C(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function T(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const T=a.grid&&a.grid.rows>1&&e.grid;let $;T&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(T&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),C%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),T&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||d([])).each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1);const v=-o[g];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((e,t)=>{d(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/n.length)*n.length;o.push(n.eq(e)[0]),l.unshift(n.eq(n.length-e-1)[0])}for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function L(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;const m=!!l.noSwipingClass&&""!==l.noSwipingClass,f=e.composedPath?e.composedPath():e.path;m&&p.target&&p.target.shadowRoot&&f&&(h=d(f[0]));const g=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(v?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(g,h[0]):h.closest(g)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const w=o.currentX,b=o.currentY,x=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,y=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(x&&(w<=y||w>=i.innerWidth-y)){if("prevent"!==x)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=w,o.startY=b,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function O(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function I(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let N=!1;function B(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=L.bind(e),e.onTouchMove=O.bind(e),e.onTouchEnd=I.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!N&&(t.addEventListener("touchstart",B),N=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function j(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const q={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=i[t]&&i[t].enabled,a=o[t]&&o[t].enabled;s&&!a&&e[t].disable(),!s&&a&&e[t].enable()}));const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},_={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=C({userAgent:t.userAgent}),r.browser=T(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:j(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,_,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children?s.children(i()):d(s).children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(_,e)}static get extendedDefaults(){return _}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function Q(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function J(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.each((e=>{s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(q).forEach((e=>{Object.keys(q[e]).forEach((t=>{V.prototype[t]=q[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],C=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?C.push(t):(t>c&&C.push(t),t<d&&E.push(t)));C.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?h():(p(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const h=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),l()},disable:h,update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{!1===t.params.pagination.enabled?f():(h(),u(),p())})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const f=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),m()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),u(),p()},disable:f,render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el;if(!o)return;const d=o[0],c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!d)return;const u="on"===e?"addEventListener":"removeEventListener";l.touch?(d[u](a.start,x,c),d[u](a.move,y,c),d[u](a.end,E,p)):(d[u](i.start,x,c),n[u](i.move,y,c),n[u](i.end,E,p))}function T(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el)),i.addClass(t.isHorizontal()?a.horizontalClass:a.verticalClass);let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){const e=t.params.scrollbar,s=t.scrollbar.$el;s&&s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?S():(T(),v(),g())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()}));const S=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),$()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:S,updateSize:v,setTranslate:g,init:T,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function C(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function T(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,C,T,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),C=-y,T=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>C&&(h=C),g<E&&(g=E),g>T&&(g=T)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():T(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function L(){l&&(l=!1,k("off"))}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&O()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:O,disable:I,in:T,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=Math.ceil(c),s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+t;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),a("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=()=>{t.a11y.clicked=!0},b=()=>{t.a11y.clicked=!1},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},y=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),e.slideRole&&o(d(t.slides),e.slideRole);const s=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;e.slideLabelMessage&&t.slides.each(((a,i)=>{const r=d(a),n=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):i;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,s))}))},E=()=>{const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;let d,u;o=r,a.attr("id",o),function(e,t){e.attr("aria-live",t)}(a,l),y(),t.navigation&&t.navigation.$nextEl&&(d=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(u=t.navigation.$prevEl),d&&d.length&&v(d,r,e.nextSlideMessage),u&&u.length&&v(u,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",x,!0),t.$el.on("pointerdown",w,!0),t.$el.on("pointerup",b,!0)};a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&E()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&y()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",x,!0),t.$el.off("pointerdown",w,!0),t.$el.off("pointerup",b,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){if(!s.size)return s.autoplay.running=!1,void(s.autoplay.paused=!1);const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.removeClass(r),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);else for(let e=0;e<i;e+=1)s.slides.eq(t.realIndex+e).addClass(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){let i,r,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();i=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,r=t.activeIndex>t.previousIndex?"next":"prev"}else i=t.realIndex,r=i>t.previousIndex?"next":"prev";l&&(i+="next"===r?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(i)<0&&(s.params.centeredSlides?i=i>o?i-Math.floor(a/2)+1:i+Math.floor(a/2)-1:i>o&&s.params.slidesPerGroup,s.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:Q.bind(t),removeSlide:J.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
//# sourceMappingURL=swiper-bundle.min.js.map