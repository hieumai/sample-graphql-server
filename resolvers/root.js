const { University } = require('../models/index');
const UniversityGraphQLType = require('./university');

const root = {
    universities: async () => {
        const universities = await University.findAll();
        return universities.map(university => new UniversityGraphQLType(university));
    },
    university: async ({ universityId }) => {
        const university = await University.findOne({ where: { id: universityId }});
        if (university) {
            return new UniversityGraphQLType(university);
        }
        return null;
    }
}

module.exports = root;