'use strict';

/**
 * scheduling router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::scheduling.scheduling');
