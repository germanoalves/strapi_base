//'use strict';
//
///**
// * profissional router.
// */
//
//const { createCoreRouter } = require('@strapi/strapi').factories;


module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/profissional/filter',
        handler: 'profissionalfilter.index',
        config: {
          auth: false,
        },
      },
    ],
  };