const axios = require('axios');
const fs = require('fs');

axios.get('https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts')
  .then(res => {
    fs.writeFileSync('products.json', JSON.stringify(res.data, null, 2));
    console.log('✅ Data saved to products.json');
  })
  .catch(err => console.error(err));
