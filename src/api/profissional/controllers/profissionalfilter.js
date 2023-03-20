'use strict';

/**
 *  profissional controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::profissional.profissional', ()=>({
//     async index(ctx, next) {
//         // called by GET /hello
//        // ctx.body = 'Hello World!'; // we could also send a JSON
//       // ctx.send({msg1:"this hello route!"})
     
//       }
// }));
// module.exports = createCoreController('api::profissional.profissional', ({strapi})=>({
//     async index(ctx, next) {
//         const entry = await strapi.db.query('api::profissional.profissional').findOne({
//             select: ['nome'],
//             where: { nome: 'Fagner Fagundes' },
          
//           });
//     }
// }));

module.exports = {
    async index(ctx, next) {
      let newArticle = ctx.request.body
      if(newArticle.tel !== 0){

      }
    //   const entries = await strapi.db.query('api::profissional.profissional').findMany({
    //     where: {
    //       nome: {            
    //           $contains: 'Fagner Fagundes'            
    //       }
    //     },
      
    //   });
      
      ctx.body = entries;
    }
  };