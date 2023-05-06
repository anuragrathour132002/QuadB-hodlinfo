const axios = require('axios');
const stockSchema = require('../Schema/stockSchema')

const getStock = async function (req, res) {
   try {
let response= await axios.get('https://api.wazirx.com/api/v2/tickers')
    const stock = response.data;
    const top10stock = Object.values(stock).slice(0, 10);
    // Store the top 10 stocks in the database
    await stockSchema.deleteMany()
    let data = await stockSchema.create(top10stock)
    res.status(201).send(data)
    }
    
 catch (error) {
    res.status(500).send(error.message)
 }}


module.exports={getStock}