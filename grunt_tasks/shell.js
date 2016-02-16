module.exports = function (grunt, config) {
  return {

    patternlab: {
      command: [
        'php core/builder.php -gp',
        'rsync -r --delete ' + config.imagesDir + '/* public/images'
      ].join('&&')
    },

    patternlab_sync: {
      command: [
        'rsync -r --delete ' + config.sassDir + '* ' + config.themeDest + 'sass/1_pattern_lab',
        'rsync -r --delete ' + config.jsDir + '* ' + config.themeDest + 'js/pattern_lab',
        'rsync -r --exclude "sample" ' + config.imagesDir + '* ' + config.themeDest + 'images/'
      ].join('&&')
    },

    doppelganger: {
      command: [
        'rsync -r --delete ' + config.doppelgangerTemp + 'css/* ' + config.doppelgangerDir + 'css/',
        'rsync -r --delete ' + config.doppelgangerTemp + 'js/* ' + config.doppelgangerDir + 'js/',
        'rsync -r --delete --exclude "sample" ' + config.imagesDir + '* ' + config.doppelgangerDir + 'images/'
      ].join('&&')
    }

  }
};