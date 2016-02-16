module.exports = {

  target: {
    src: 'source/_patterns/00-atoms/00-meta/_0{0-head,1-foot}.mustache', // point to your HTML file.
    fileTypes: {
      mustache: {
        block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
        detect: {
          js: /<script.*src=['"]([^'"]+)/gi,
          css: /<link.*href=['"]([^'"]+)/gi
        },
        replace: {
          // since we inject 5 levels deep to a partial that compiles to a place that is 4 levels deep, we need to remove 1 `../`
          js: function (filePath) {
            filePath = filePath.replace('../', '');
            return '<script src="' + filePath + '"></script>';
          },
          css: function (filePath) {
            filePath = filePath.replace('../', '');
            return '<link rel="stylesheet" href="' + filePath + '" />';
          }
        }
      }
    }
  }

};
