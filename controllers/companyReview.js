const CompanyReview = require('../models/companyReview');

exports.getCompanyReviews = async (req,res,next)=>{
    const company = req.params.id;
    try{
        let reviews = await  CompanyReview.findAll({where :{companyName : company}});
        res.json(reviews)
    }
    catch(error){
        console.log(error);
    }   
}
exports.postCompanyReview = async (req,res,next)=>{
    const data = req.body;
    try{
      let response = await CompanyReview.create(data);
       res.json('success');
    }
    catch(error){
        console.log(error)
    }
}
