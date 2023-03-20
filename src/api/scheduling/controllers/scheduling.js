'use strict';

/**
 *  scheduling controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::scheduling.scheduling');
