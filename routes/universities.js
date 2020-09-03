const express = require('express');
const router = express.Router();
const { University, Faculty, Program } = require('../models/index');

// Get all universities
router.get('/', function (req, res, next) {
    University.findAll()
        .then(universities => res.send(universities))
        .catch(error => next(error))
})

// Get all faculties by university id
router.get('/:universityId/faculties', function (req, res, next) {
    const { universityId } = req.params;
    if (!universityId) {
        res.send("Must provide university id");
        return;
    }
    Faculty.findAll({ where: { universityId } })
        .then(faculties => res.send(faculties))
        .catch(error => next(error))
})

// Get all programs by university id and faculty id
router.get('/:universityId/faculties/:facultyId/programs', function (req, res, next) {
    const { universityId, facultyId } = req.params;
    if (!universityId) {
        res.send("Must provide university id");
        return;
    }
    if (!facultyId) {
        res.send("Must provide university id");
        return;
    }
    Faculty.findOne({ where: { universityId, id: facultyId } })
        .then(faculty => Program.findAll({ where: { facultyId: faculty.id } }))
        .then(programs => res.send(programs))
        .catch(error => next(error))
})

module.exports = router