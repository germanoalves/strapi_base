'use strict';

/**
 * teste-component service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teste-component.teste-component');
