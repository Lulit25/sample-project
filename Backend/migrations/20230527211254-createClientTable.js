'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      additionalInfo: {
        type: Sequelize.JSONB,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
  },
};


//query to insert date to table
// INSERT INTO clients (id, age, name, gender, additionalInfo)
// VALUES
//     ('59761c23b30d971669fb42ff', 36, 'Dunlap Hubbard', 'male', '{"company": "CEDWARD", "email": "dunlaphubbard@cedward.com", "phone": "+1 (890) 543-2508", "address": "169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"}'),
//     ('59761c233d8d0f92a6b0570d', 24, 'Kirsten Sellers', 'female', '{"company": "EMERGENT", "email": "kirstensellers@emergent.com", "phone": "+1 (831) 564-2190", "address": "886 Gallatin Place, Fannett, Arkansas, 4656"}'),
//     ('59761c23fcb6254b1a06dad5', 30, 'Acosta Robbins', 'male', '{"company": "ORGANICA", "email": "acostarobbins@organica.com", "phone": "+1 (882) 441-3367", "address": "697 Linden Boulevard, Sattley, Idaho, 1035"}');