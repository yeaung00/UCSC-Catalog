const getCourses = require('../lib/getCourses');
const subjectsRouter = require('express').Router()

subjectsRouter.get('/', async (req, res) => {
  // res.setHeader('Cache-Control', 's-max-age=86400, stale-while-revalidate');
  res.set('Cache-Control', 'public, max-age=86400');
  res.json(req.subjects);
});

subjectsRouter.get('/:subjectName/courses', async (req, res) => {
  const subject = (req.subjects).filter((subject) => subject.name === req.params.subjectName)[0];
  const link = subject.link;
  const courses = await getCourses(link);

  res.set('Cache-Control', 'public, max-age=86400');
  res.json(courses);
})

module.exports = subjectsRouter;