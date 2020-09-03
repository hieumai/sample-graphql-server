const { Faculty } = require('../models/index');
const FacultyGraphQLType = require('./faculty');

class UniversityGraphQLType {
    constructor(university) {
        this.university = university;
    }

    id = () => {
        return this.university.id;
    }

    name = () => {
        return this.university.name;
    }

    description = () => {
        return this.university.description;
    }

    address = () => {
        return this.university.address;
    }

    phoneNumber = () => {
        return this.university.phoneNumber;
    }

    faculties = async () => {
        const faculties = await Faculty.findAll({ where: { universityId: this.university.id } });
        return faculties.map(faculty => new FacultyGraphQLType(faculty))
    }

    faculty = async ({ facultyId }) => {
        const faculty = await Faculty.findOne({ where: { id: facultyId, universityId: this.university.id } });
        if (faculty) {
            return new FacultyGraphQLType(faculty);
        }
        return null;
    }
}

module.exports = UniversityGraphQLType;
