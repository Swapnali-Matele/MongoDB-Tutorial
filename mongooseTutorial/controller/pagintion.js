const mongodb = require('mongodb');
const database = require('../Pagination');

// const getdetails = async (req, res) => {
//     const{page} = req.query
//     const condition = database.collection('finance_quotes').find().limit(5).skip((page - 1)*limit).hasNext()
//     if(condition){
//      return (()=>"All data consumed")

//     }else{
//         const data = await database.collection('finance_quotes').find().limit(5).skip((page - 1)*limit).toArray((err, result)=>{
//         if (err) throw err;
//         console.log(err)
//         console.log(result.length)
//         result.send(result)
//         data.save()
//     })
//     console.log(data)
//     page++;
//     getdetails()
// }
// }

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': 'd1de5b782fmsh42fc9a3363de012p169536jsn3cb41ce5d8c4',
// 		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
//         'size': 50,
//         'offset': 0
// 	},

//     body: '[{"operator":"or","operands":[{"operator":"EQ","operands":["exchange","NAS"]},{"operator":"EQ","operands":["exchange","NYQ"]}]}]'
// };

// const getPost = async (req, res) =>{

//     if(){

//     }else{
//     try{

//      await fetch("https://yh-finance.p.rapidapi.com/screeners/list?quoteType=MUTUALFUND&sortField=fundnetassets&region=US&size=50&offset=0&sortType=DESC",options)_
//         .then( actualData => {
//             //console.log(actualData);
//             const finance = actualData.finance
//             //console.log(finance.result[0].quotes[1]['quoteType']);
//             const finalFinanceData = finance.result[0]

//             for (let i =0; i< finalFinanceData.quotes.length; i++){
                    
        
//                     const quotes = new quoteFinanceSchema({
//                         fullExchangeName:finalFinanceData.quotes[i]['fullExchangeName'],
//                         quoteType:finalFinanceData.quotes[i]['quoteType'],
//                         market:finalFinanceData.quotes[i]['market'],
//                         region:finalFinanceData.quotes[i]['region'],
//                         currency:finalFinanceData.quotes[i]['currency'],
//                         longName: finalFinanceData.quotes[i]['longName']
//                     })
                    
//                     quotes.save();
//                     console.log(quotes);

//         }
//         //res.status(200).json({status: 200, data:{ }, message: "Quotes saved in database"})
//     })
//     .catch(err => {
//             console.log(err);
//         });
    

//     }catch(err){
//         console.log(err)
//     }
//     }
// }




module.exports = {
    getDetails
}