'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Faculties', [
            {
                id: 1,
                name: 'Faculty of Literature',
                description: 'Faculty of Literature is the best place to study literature in HCM',
                universityId: 1
            },
            {
                id: 2,
                name: 'Faculty of Electrical Engineering',
                description: 'Faculty of Electrical Engineering is the top destination for electronic engineer training in Vietnam',
                universityId: 1
            },
            {
                id: 3,
                name: 'Faculty of IT',
                description: 'Faculty of IT provide high quality IT programs',
                universityId: 2
            },
            {
                id: 4,
                name: 'Faculty of Mathematics and Statistics',
                description: 'Faculty of Mathematical contains top notch Mathematical courses',
                universityId: 2
            },
            {
                id: 5,
                name: 'Faculty of Economics',
                description: 'Faculty of Economics preparing qualified economists with broad university education',
                universityId: 3
            }
        ], {
            ignoreDuplicates: true
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Faculties', null, {});
    }
};
