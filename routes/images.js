const router = require('express').Router();
const axios = require('axios').default;

// TODO: export to a config file
const fetchImages = () => new Promise((resolve, reject) => {
  axios.get('https://api.jonathanczyzyk.com/api/v1/images/small', {
    headers: {
      'x-api-key': 'api-key-66a92ef7-a9a5-463e-8761-53b030e8c9df'
    } 
  }).then(res => {
    resolve(res);
  });
})

// TODO: Assumptions
router.get('/', async (req,res,next) => {
  const index = parseInt(req.query.index);
  const interval = parseInt(req.query.interval);
  const images = await fetchImages();
  
  res.send({ body: images.data.filter((item, arrIndex) => arrIndex >= index && arrIndex < (index + interval)) })
});


module.exports = router;
