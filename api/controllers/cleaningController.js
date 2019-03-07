

exports.cleaningPrice = (req,res) => {

  let body = req.body;
  let result = {
    price: null,
    text: "price for cleaning"
  };

  if(body.size  < 50) result.price = 30;
  else if (body.size >=50 && body.size <= 70) result.price = 42;
  else result.text = 'There is no price for this size'

  if (result.price) {
    
    if(body.day.toLowerCase() == 'thursday' && result.price) result.price = (result.price * 0.9);

    if(body.day.toLowerCase() == 'saturday' && result.price) result.price = (result.price * 1.2);
  
    let time=body.time;
    let timeArray = time.split(" ");
    let numbersArray = timeArray[0].split(":");
    let timeInt = parseInt(numbersArray[0])*60 + parseInt(numbersArray[1])
  
    if(timeArray[1] == 'pm' && result.price) {
      if(timeInt >=120 && timeInt <= 360) result.price =  (result.price * 1.35);
    }
  
    Number((result.price).toFixed(2))
  }

 
  
  res.status(200).json(result)

}
