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

router.get('/', async (req,res,next) => {
  const images = await fetchImages();
  res.send({ body: images.data })
});


module.exports = router;
