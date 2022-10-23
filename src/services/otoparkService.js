const otoparkSchema = require('./../models/otopark');
const data = require("./otoparkData.js");
const bulkInsertOtopark = async () => {
  for(let i =0 ; i < data.length ; i++) {
    
    var record = {
      _id: data[i][0],
      PARK_NAME: data[i][1],
      LOCATION_NAME:data[i][2],
      PARK_TYPE_ID: data[i][3],
      PARK_TYPE_DESC: data[i][4],
      CAPACITY_OF_PARK: data[i][5],
      WORKING_TIME: data[i][6],
      COUNTY_NAME: data[i][7],
      LONGITUDE: data[i][8],
      LATITUDE: data[i][9],
    };
    console.log(record);
    try {
      const res = await otoparkSchema.create(record);
      
      
    } catch (error) {
      console.error(error);
      
      return error;
      // handle the error
    }
  }
  return true;
}

const getOtopark = async (id) => {
  var obje= otoparkSchema.findById(id);
  return obje;
}

const getOtoparkList = async () => {
  var obje= otoparkSchema.find().then(result=>{
    if(result){
      return result.map((element)=>{return {type:"Feature",properties:{...element._doc},geometry:{type:"Point",cordinates:[element.LONGITUDE,element.LATITUDE]}}});
    }
  }).catch( err => { return err;  });
  return obje;
}
  
module.exports = {bulkInsertOtopark,getOtopark,getOtoparkList};