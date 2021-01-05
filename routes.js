'use strict';

module.exports = () => {
    const contl = require('./controller');

    // route access domain
    app.route('/').get(contl.index);
};