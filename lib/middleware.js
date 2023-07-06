const axios = require('axios');
const cheerio = require('cheerio');

async function getSubjects(req, _, next) {
  const { data } = await axios.get('https://ucsc.smartcatalogiq.com/en/current/general-catalog/courses/')
  const $ = cheerio.load(data)

  const subjects = $('.sc-child-item-links li').get().map((el) => {
    const subject = {
      name: $(el).children('a').text(),
      link: ($(el).children('a').attr('href')),
    }
    return subject
  })

  req.subjects = subjects;
  next();
}

module.exports = {
  getSubjects
}