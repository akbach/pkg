'use strict';

module.exports = {
  pkgConfig: {
    patches: {
      'lib/win32.js': [
        'require(\'diskpart\')',
        'require(\'diskpart\', \'may-exclude\')'
      ]
    }
  }
};
