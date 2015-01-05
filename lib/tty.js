
var isatty = function(){
  return true;
};

 var isatty = isatty(1) && isatty(2);

 var useColors = isatty || (process.env.MOCHA_COLORS !== undefined);

/**
 * Default color map.
 */
colors = {
    'pass': 90
  , 'fail': 31
  , 'bright pass': 92
  , 'bright fail': 91
  , 'bright yellow': 93
  , 'pending': 36
  , 'suite': 0
  , 'error title': 0
  , 'error message': 31
  , 'error stack': 90
  , 'checkmark': 32
  , 'fast': 90
  , 'medium': 33
  , 'slow': 31
  , 'green': 32
  , 'light': 90
  , 'diff gutter': 90
  , 'diff added': 42
  , 'diff removed': 41
};

exports.color = function(type, str) {
  if (!useColors) return String(str);
  return '\u001b[' + colors[type] + 'm' + str + '\u001b[0m';
};