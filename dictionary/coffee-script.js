'use strict';

module.exports = {
  pkgConfig: {
    scripts: [
      'lib/coffee-script/*.js'
    ],
    patches: {
      'lib/coffee-script/grammar.js': [
        'require(\'jison\')',
        'require(\'jison\', \'may-exclude\')'
      ]
    }
  }
};
