const yesilAlanSchema = require("../models/yesilAlan");
const data = require("./yesilAlanData.js");

const getYesilAlan = async (id) => {
  var obje= yesilAlanSchema.findById(id);
  return obje;
}

const getYesilAlanList = async () => {
  var obje= yesilAlanSchema.find().then(result=>{
    if(result){
      return result.map((element)=>{return {type:"Feature",properties:{...element._doc},geometry:{type:"Point",cordinates:[element.LONGITUDE,element.LATITUDE]}}});
    }
  }).catch( err => { return err;  });
  return obje;
}

const bulkInsertYesilAlan = async () => {

  for(let i =0 ; i < data.length ; i++) {
    
    var record = {
      _id: data[i][0],
      NAME: data[i][1],
      LONGITUDE:data[i][2],
      LATITUDE: data[i][3],
      NEIGHBORHOOD_NAME: data[i][4],
      COUNTY_NAME: data[i][5],
    };
    console.log(record);
    try {
      const res = await yesilAlanSchema.create(record);
      
      
    } catch (error) {
      console.error(error);
      
      return error;
    }
  }
  return true;
  

  
};

module.exports = { bulkInsertYesilAlan,getYesilAlan,getYesilAlanList};

