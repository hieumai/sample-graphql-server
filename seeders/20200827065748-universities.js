'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Universities', [
            {
                id: 1,
                name: 'University A',
                description: 'University A was established in 1930 in Vietnam',
                address: '123 Cong Hoa',
                phoneNumber: '090811111'
            },
            {
                id: 2,
                name: 'University B',
                description: 'University B is among the top universities in Vietnam',
                address: '2 Tan Vien',
                phoneNumber: '0933222222'
            },
            {
                id: 3,
                name: 'University C',
                description: 'University C, although newly established, has already gained famed through top notch facilities',
                address: '123 Cong Hoa',
                phoneNumber: '090811111'
            },
        ], {
            ignoreDuplicates: true
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Universities', null, {});
    }
};
