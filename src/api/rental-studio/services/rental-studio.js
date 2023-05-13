'use strict';

/**
 * rental-studio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rental-studio.rental-studio');
