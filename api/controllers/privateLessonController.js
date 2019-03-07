

exports.lessonPrice = (req,res) => {
  let body =req.body;
  let result = {
    price: null,
    text: "price for lesson"
  };

  if(body.lessonLength == 30) {
    if(body.pack) result.price = 80;
    else result.price = 20;
  }
  else if (body.lessonLength == 60) result.price = 35;
  else result.text = "There is no price for this time length";

  if(result.price) {
    
    let time=body.time;
    let timeArray = time.split(" ");
    let numbersArray = timeArray[0].split(":");
    let timeInt = parseInt(numbersArray[0])*60 + parseInt(numbersArray[1]);
  
    if(timeArray[1] == 'pm') {
      if(timeInt >= 120 && timeInt <= 360) result.price =  Number((result.price * 1.25).toFixed(2));
    }
  }

 
  res.status(200).json(result)

}
