'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Programs', [
            {
                id: 1,
                name: 'Vietnamese Literature',
                description: 'Vietnamese Literature program introduces learners to the deep history of Vietnamese culture',
                facultyId: 1
            },
            {
                id: 2,
                name: 'Eastern Literature',
                description: 'Students interested in eastern cultures like Korean, Japanese or Chinese might find this program interesting',
                facultyId: 1
            },
            {
                id: 3,
                name: 'Electronics Engineering',
                description: 'This program is to develop and maintain an academic environment of best quality for higher education in the field of Electrical-Electronics Engineering',
                facultyId: 2
            },
            {
                id: 4,
                name: 'Telecommunications Engineering',
                description: 'The program is an engineering discipline centered on electrical and computer engineering which seeks to support and enhance telecommunication systems',
                facultyId: 2
            },
            {
                id: 5,
                name: 'Software Engineer',
                description: 'Provide trainings for students that want to become a software engineer, 1 of the top demanding professions',
                facultyId: 3
            },
            {
                id: 6,
                name: 'Computer Science',
                description: 'Intended for students that prefer working on researching, experiments developing new technologies in the computer science field',
                facultyId: 3
            },
            {
                id: 7,
                name: 'Applied Mathematics',
                description: 'Applied Mathematics courses provide the tools for formulating and analyzing mathematical models in a broad range of disciplines',
                facultyId: 4
            },
            {
                id: 8,
                name: 'Computational Mathematics',
                description: 'With computational mathematics, you can harness the power of computers to generate and run mathematical models – analyzing data for quantitative, real-world solutions',
                facultyId: 4
            },
            {
                id: 9,
                name: 'Economics & Management',
                description: 'The Economics and Management undergraduate degree programme examines issues central to the world we live in: namely how the economy and organisations function, and how resources are allocated and coordinated to achieve the organisation’s objectives',
                facultyId: 5
            },
            {
                id: 10,
                name: 'History & Economics',
                description: 'The History and Economics course integrates these two subjects to form a coherent and intellectually stimulating programme',
                facultyId: 5
            }
        ], {
            ignoreDuplicates: true
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Programs', null, {});
    }
};
