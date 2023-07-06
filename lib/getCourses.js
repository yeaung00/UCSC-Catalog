const axios = require('axios');
const cheerio = require('cheerio');

async function getCourses(courseLink) {
  const { data } = await axios.get(`https://ucsc.smartcatalogiq.com${courseLink.toLowerCase()}`);
  
  const $ = cheerio.load(data);

  const courses = $('.courselist .course-name').get().map((el) => {
    const course = {
      name: $(el).children('a').text(),
      link: $(el).children('a').attr('href')
    }
    return course;
  })

  return courses;
}

module.exports = getCourses;