
const express = require('express');
const router = express.Router();
const Course = require('../models/aulaModel');
const Lesson = require('../models/cursoModel');

router.get('/', async (req, res) => {
    try {
        const courses = await Course.findAll(
            {
                attributes: ['titulo'] // Especifique as colunas que você deseja buscar
            }
        );
        const lessons = await Lesson.findAll(
            {
                attributes: ['titulo'] // Especifique as colunas que você deseja buscar
            }
        );
        res.render('config', { courses, lessons });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error loading data.');
    }
});

module.exports = router;
