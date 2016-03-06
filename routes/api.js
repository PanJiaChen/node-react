'use strict';

var transformMarkdown = require('../libs/index');

function api(router) {
  router.route('/docs/:name')
    .get(function (req, res, next) {
      let name = req.params.name;
      let markdownAsHTML = transformMarkdown(name);

      res.json({
        data: markdownAsHTML
      });
    });
};
module.exports = api;