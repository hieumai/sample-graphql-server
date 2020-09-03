const { Program } = require('../models/index');

class FacultyGraphQLType {
    constructor(faculty) {
        this.faculty = faculty;
    }

    id = () => {
        return this.faculty.id;
    }

    name = () => {
        return this.faculty.name;
    }

    description = () => {
        return this.faculty.description;
    }

    programs = async () => {
        return Program.findAll({ where: { facultyId: this.faculty.id } });
    }

    program = async ({ programId }) => {
        return Program.findOne({ where: { id: programId, facultyId: this.faculty.id } });
    }
}

module.exports = FacultyGraphQLType;
