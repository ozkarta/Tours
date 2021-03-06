var express = require('express');
var router = express.Router();
var user=require('../node_scripts/user');
var screener=require('../node_scripts/screener');
var dbConnectorBackup=require('../node_scripts/dbConnectorBackup');
var db=new dbConnectorBackup.db_connector();
var async =  require ('async');
var nodeMailer=require('nodemailer');

var tripMailBodyHTML='<!DOCTYPE html><html><head><style>table, th, td {    border: 1px solid black;    border-collapse: collapse;}th, td {    padding: 5px;    text-align: left;    }</style></head><body><h2>Trip Booking Request</h2><table style="width:100%">  <tr>    <th>სახელი</th>    <th>გვარი</th>    <th>დაბადების თარიღი</th>    <th>ID</th>    <th>ტელეფონი</th>    <th colspan="2">მეილი</th>  </tr>  <tr>    <td>@fname@</td>    <td>@lname@</td>    <td>@bdate@</td>    <td>@id@</td>    <td>@phone@</td>    <td>@mail@</td>  </tr></table><br/><br/><br/><br/><br/><br/><h2>Trip Information</h2><table style="width:100%">  <tr>    <th>რეისის ID</th>    <th>რეისის სახელი</th>    <th>დასაჯავშნი ადგილების რაოდენობა</th>  </tr>  <tr>    <td>@raceID@</td>    <td>@raceName@</td>        <td>@quantity@</td>      </tr></table></body></html>';


var tourMailBodyHTML='<!DOCTYPE html><html><head><style>table, th, td {    border: 1px solid black;    border-collapse: collapse;}th, td {    padding: 5px;    text-align: left;    }</style></head><body><h2>Tour Booking Request</h2><table style="width:100%">  <tr>    <th>სახელი</th>    <th>გვარი</th>    <th>დაბადების თარიღი</th>    <th>ID</th>    <th>ტელეფონი</th>    <th colspan="2">მეილი</th>      </tr>  <tr>    <td>@fname@</td>    <td>@lname@</td>    <td>@bdate@</td>    <td>@id@</td>    <td>@phone@</td>    <td>@mail@</td>  </tr></table><br/><br/><br/><br/><br/><br/><h2>Tour Information</h2><table style="width:100%">  <tr>    <th>ტურის ID</th>    <th>ტურის სახელი</th>    <th>დასაჯავშნი ადგილების რაოდენობა</th>  </tr>  <tr>    <td>@tourID@</td>    <td>@tourName@</td>     <td>@quantity@</td>     </tr></table></body></html>';


var initializeSession =function(req,callback){


	if (req.session.user===undefined){
		var newUser=new user.user();		
		if(req.query.language!=='' & req.query.language!==undefined){
			newUser.defaultLanguage=req.query.language;	
			//console.log('default language is  set from URL ... ');		
		}
		//console.log(newUser.defaultLanguage);
		db.getLanguageID(newUser.defaultLanguage,function(langId){
				if(langId!==undefined){
					newUser.defaultLanguageID=langId;
					newUser.screener=new screener.screener();
					newUser.screener.init();
					req.session.user=newUser;
					callback(true);
				}else{
					callback(false)
				}
			});
		
	}else{
		if(req.query.language!=='' & req.query.language!==undefined){
			req.session.user.defaultLanguage=req.query.language;			
		}
		req.session.user.screener.tourDetailID='';
		if(req.query.tourId!=='' & req.query.tourId!==undefined){
			req.session.user.screener.tourDetailID=req.query.tourId;			
		}
		db.getLanguageID(req.session.user.defaultLanguage,function(langId){
				if(langId!==undefined){
					req.session.user.defaultLanguageID=langId;
					callback(true);
				}else{
					callback(false);
				}
			});
	}
}

var indexPreLoad=function(req,callback){
	//console.log('index preload was invoked');
	req.session.user.screener.tours=[];
	db.getToursForMain(req.session.user.defaultLanguageID,function(result){
	if(result!==undefined){
		async.forEach(result,function(item,callback1){
		//console.dir(itemNum);
			
			var Id=item.tourID.toString();
			var effdate=item.effDate;
			var mainImageURL=item.mainImageURL
			var descriptionImageURL=item.descriptionImageURL
			var tourName=item.tourName;
			var tourDescriptionShort=item.tourDescriptionShort;
			var tourDescriptionLong=item.tourDescriptionLong;
			var aboutPlaceShort=item.aboutPlaceShort;
			var aboutPlaceLong=item.aboutPlaceLong;
			var tourDetailShort=item.tourDetailShort;
			var tourDetailShortHeaderName=item.tourDetailShortHeaderName;
			var tourDetailLong=item.tourDetailLong;
			var tourDetailLongHeaderName=item.tourDetailLongHeaderName;
			var price=item.tourPrice;
			var priceCurrency=item.tourPriceCurrency;
			var galeryID=item.galeryID.toString();

			db.getGaleryHeader(galeryID,function(galeryHeader){
				//console.dir(galeryHeader);
				if(galeryHeader[0]!==undefined){
					//var galeryID=galeryHeader[0]._id.toString();
					var effDateGalery=galeryHeader[0].effDate;
					var galeryImageURL=galeryHeader[0].galeryImageURL;

					var galery=new screener.galeryItem(galeryID,effDateGalery,galeryImageURL);
					req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,price,priceCurrency,galery));
					//console.dir(req.session.user.screener.tours);

					callback1();
				}else{
					req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,price,priceCurrency,undefined));
					
					callback1();
				}
				
			})
		
			},function(err){
				req.session.user.screener.races=[];
							db.getRacesForMain(req.session.user.defaultLanguageID,function(result){
								//console.dir(result);
								//console.log('requesting Races For Main')
								for(race in result){
									//console.dir(result[race]);
									var raceId=result[race]._id.toString();
									var effdate=result[race].effDate;
									var raceName=result[race].raceName;
									var raceDescription=result[race].raceDescription
									var imageURL=result[race].imageURL;
									req.session.user.screener.races.push(new screener.raceItem(raceId,effdate,imageURL,raceName,raceDescription));
								}
								callback(true);
							})
			});	
	}else{
		callback(false);
	}	
	
	});
}
var tourPreLoad=function(req,callback){
	req.session.user.screener.tours=[];
	db.getTours(req.session.user.defaultLanguageID,function(result){
		if(result!==undefined){
			async.forEach(result,function(item,callback1){

			var Id=item.tourID.toString();
			var effdate=item.effDate;
			var mainImageURL=item.mainImageURL
			var descriptionImageURL=item.descriptionImageURL
			var tourName=item.tourName;
			var tourDescriptionShort=item.tourDescriptionShort;
			var tourDescriptionLong=item.tourDescriptionLong;
			var aboutPlaceShort=item.aboutPlaceShort;
			var aboutPlaceLong=item.aboutPlaceLong;
			var tourDetailShort=item.tourDetailShort;
			var tourDetailShortHeaderName=item.tourDetailShortHeaderName;
			var tourDetailLong=item.tourDetailLong;
			var tourDetailLongHeaderName=item.tourDetailLongHeaderName;
			var price=item.tourPrice;
			var priceCurrency=item.tourPriceCurrency;			
			var galeryID=item.galeryID.toString();

			db.getGaleryHeader(galeryID,function(galeryHeader){
				//var galeryID=galeryHeader[0]._id.toString();
				if(galeryHeader[0]!==undefined){
					//console.log('!!!!!!!!!!ar dhedis galereis gasaketeblad');
					var effDateGalery=galeryHeader[0].effDate;
					var galeryImageURL=galeryHeader[0].galeryImageURL;

					var galery=new screener.galeryItem(galeryID,effDateGalery,galeryImageURL);
					req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,price,priceCurrency,galery));
					//console.log('______________________________________________')
					//console.dir(req.session.user.screener.tours);
					callback1();
				}else{
					//console.log('!!!!!!!!!!shevida');
					
					req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,price,priceCurrency,undefined));
					callback1();
				}
				
			})
		
		},function(err){
			callback(true);
		});
		}else{
			callback(false);
		}
		
	});
}
var tripsPreLoad=function(req,callback){
	req.session.user.screener.races=[];
	db.getRaces(req.session.user.defaultLanguageID,function(result){
		//console.dir(result);
		
		if(result!==undefined){
			for(race in result){
			//console.dir(result[race]);
			var raceId=result[race]._id.toString();
			var effdate=result[race].effDate;
			var raceName=result[race].raceName;
			var raceDescription=result[race].raceDescription
			var imageURL=result[race].imageURL;
			req.session.user.screener.races.push(new screener.raceItem(raceId,effdate,imageURL,raceName,raceDescription));
		}
		//console.dir(req.session.user.screener.races);
		callback(true);
	}else{
		callback(false);
	}
	});
}
var galeryPreLoad=function(req,callback){

	var myArray=[];
	var helperArray=[];
	db.getGaleryForMe(function(docs){
		//helperArray.push(docs[0]);
		if(docs!==undefined){
			async.forEach(docs,function(item,callback1){
			//console.dir(item);
			
			db.getNameForGalery(item.galeryID.toString(),req.session.user.defaultLanguageID,function(docs2){
				//console.dir(docs2.toString());
				//console.log(helperArray.length);
				var called=false;
				for(i =0;i< helperArray.length;i++){
					//console.log(helperArray[i].galeryID+' VS '+item.galeryID)
					if(helperArray[i].galeryID.toString()==item.galeryID.toString()){
						console.log('fin')
						called=true;
						callback1();
					}
				}
				if(called===false){
					//console.log('doing the job');
					if(docs2[0].tourName!==undefined){
							myArray.push(new screener.mainGaleryItem(item.galeryID.toString(),docs2[0].tourName,item.galeryImageURL));
					}
					helperArray.push(item);
					//console.log(helperArray.length)
					callback1();
				}
				
			});
			
		},function(err){
			req.session.user.screener.mainGalery=myArray;
			//console.dir(myArray);
			callback(true);
		})
		}else{
			callback(false);
		}

	})
}
var aboutPreLoad=function(req,callback){

}
var contactPreLoad=function(req,callback){
	
}
var tourDetailPreLoad=function(req,callback){

		//console.log(req.query.tourId);
		//console.log('languageID is __ '+req.session.user.defaultLanguageID);
		req.session.user.screener.tourDetailID=req.query.tourId;
		req.session.user.screener.tours=[];
		db.getTourForDetail(req.query.tourId,req.session.user.defaultLanguageID,function(result){
			if(result!==undefined){
				for (itemNum in result){
					if(result[itemNum]!==undefined){
						var Id=result[itemNum].tourID.toString();
						var effdate=result[itemNum].effDate;
						var mainImageURL=result[itemNum].mainImageURL
						var descriptionImageURL=result[itemNum].descriptionImageURL
						var tourName=result[itemNum].tourName;
						var tourDescriptionShort=result[itemNum].tourDescriptionShort;
						var tourDescriptionLong=result[itemNum].tourDescriptionLong;
						var aboutPlaceShort=result[itemNum].aboutPlaceShort;
						var aboutPlaceLong=result[itemNum].aboutPlaceLong;
						var tourDetailShort=result[itemNum].tourDetailShort;
						var tourDetailShortHeaderName=result[itemNum].tourDetailShortHeaderName;
						var tourDetailLong=result[itemNum].tourDetailLong;
						var tourDetailLongHeaderName=result[itemNum].tourDetailLongHeaderName;
						var galeryID=result[itemNum].galeryID.toString();
						var price=result[itemNum].price;
						var priceCurrency=result[itemNum].priceCurrency;
						db.getGaleryHeader(galeryID,function(galeryHeader){
							if(galeryHeader[0]!==undefined){
								//var galeryID=galeryHeader[0]._id.toString();
							var effDateGalery=galeryHeader[0].effDate;
								var galeryImageURL=galeryHeader[0].galeryImageURL;

								var galery=new screener.galeryItem(galeryID,effDateGalery,galeryImageURL);
								req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,price,priceCurrency,galery));
								//console.dir(req.session.user.screener.tours);
								//console.log('______________________________________________')
								//console.dir(req.session.user.screener.tours);
								callback(true);
							}else{
								req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,price,priceCurrency,undefined));
								//console.dir(req.session.user.screener.tours);
								callback(true);
							}
							
						})
					}else{
						callback(false);
					}
				
				
			}
			}else{
				callback(false);
			}
			
		});
		
}
var galeryDetailPreLoad=function(req,callback){
	var galeryID=req.query.galeryID;
	//console.log('galery ID is '+galeryID);
	db.getGalery(galeryID,function(result){
		if(result!==undefined && result.length!==0){
			//console.dir(result);
			req.session.user.screener.galery=[];

			result.forEach(function(item){
				req.session.user.screener.galery.push(new screener.galeryItem(item.galeryID,item.effDate,item.galeryImageURL));
			});
			callback(true);
		}else{
			callback(false);
		}
	});
}


var bookTripPreLoad=function(req,callback){

	var myJSON=req.body;
	//console.dir(myJSON);
	var  fName=myJSON.fname;
	var  lName=myJSON.lname;
	var  birthDate=myJSON.bdate;
	var  idNumber=myJSON.idNumber;
	var  mail=myJSON.mail;
	var  phoneNumber=myJSON.cellNumber;
	var quantity=myJSON.quantity;
	var raceID=myJSON.raceID;
	var raceName=myJSON.raceName;

	var mailBody=tripMailBodyHTML
	mailBody=mailBody.replace('@fname@',fName);
	mailBody=mailBody.replace('@lname@',lName);
	mailBody=mailBody.replace('@bdate@',birthDate);
	mailBody=mailBody.replace('@id@',idNumber);
	mailBody=mailBody.replace('@phone@',phoneNumber);
	mailBody=mailBody.replace('@mail@',mail);

	mailBody=mailBody.replace('@raceID@',raceID);
	mailBody=mailBody.replace('@raceName@',raceName);

	mailBody=mailBody.replace('@quantity@',quantity);
	//____________________MAILER________________________________
	var serverMail='matetoursmailserver%40gmail.com';
	var serverMailPassword='12qwert12';

	var mailOptions = {
	    from: '"Mate Tours Server" <'+serverMail+'>', // sender address 
	    to: 'ozbegi1@gmail.com,matetourgeorgia@gmail.com', // list of receivers 
	    subject: 'Trip Booking Request: '+raceName, // Subject line 
	    text: 'modi idi naxui', // plaintext body 
	    html: mailBody// html body 
	};
	var smtpConfig = 'smtps://'+serverMail+':'+serverMailPassword+'@smtp.gmail.com';

	var transporter = nodeMailer.createTransport(smtpConfig);

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        callback('-1');
	    }else{
	    	callback('1');
		}
	});
}
var bookTourPreLoad=function(req,callback){
	var  fName=req.body.fname;

	var  lName=req.body.lname;

	var  birthDate=req.body.bdate;
	var  idNumber=req.body.idNumber;
	var  mail=req.body.mail;
	var  phoneNumber=req.body.cellNumber;
	var quantity=req.body.quantity;
	var tourID=req.body.tourID;
	var tourName=req.body.tourName;

	var mailBody=tourMailBodyHTML
	mailBody=mailBody.replace('@fname@',fName);
	mailBody=mailBody.replace('@lname@',lName);
	mailBody=mailBody.replace('@bdate@',birthDate);
	mailBody=mailBody.replace('@id@',idNumber);
	mailBody=mailBody.replace('@phone@',phoneNumber);
	mailBody=mailBody.replace('@mail@',mail);

	mailBody=mailBody.replace('@tourID@',tourID);
	mailBody=mailBody.replace('@tourName@',tourName);
	mailBody=mailBody.replace('@quantity@',quantity);

	//____________________MAILER________________________________
	var serverMail='matetoursmailserver%40gmail.com';
	var serverMailPassword='12qwert12';

	var mailOptions = {
	    from: '"Mate Tours Server" <'+serverMail+'>', // sender address 
	    to: 'ozbegi1@gmail.com,matetourgeorgia@gmail.com', // list of receivers 
	    subject: 'Tour Booking Request: '+tourName, // Subject line 
	    text: 'modi idi naxui', // plaintext body 
	    html: mailBody// html body 
	};
	var smtpConfig = 'smtps://'+serverMail+':'+serverMailPassword+'@smtp.gmail.com';

	var transporter = nodeMailer.createTransport(smtpConfig);

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        callback('-1');
	    }else{
	    	callback('1');
	    }
	    
	});
}

/* GET home page. */
router.get('/', function(req, res, next) {
	initializeSession(req,function(){
		//console.log('index  was  requested by GET');
		//console.log(req.connection.remoteAddress);
		indexPreLoad(req,function(errFree){
			if(errFree){
				res.render('index', {locals:{'user':req.session.user}});
			}else{
				res.render('error',{'error': {
						      message: 'The page you requested Does Not exist any more ',
						      error: '!!!!'
						    }});
			}
		})
  		
	});
	
});

router.get('/tours', function(req, res, next) {
	initializeSession(req,function(){
		//console.log('Tours  was  requested by GET');
		//console.log(req.connection.remoteAddress);
		tourPreLoad(req,function(errFree){
			if(errFree){
				res.render('tours',{locals:{'user':req.session.user}});
			}else{
				res.render('error',{'error': {
						      message: 'The page you requested Does Not exist any more ',
						      error: '!!!!'
						    }});
			}
		})
  		
	});
	
});

router.get('/trips', function(req, res, next) {
	initializeSession(req,function(){
		//console.log('trips  was  requested by GET');
		//console.log(req.connection.remoteAddress);

		tripsPreLoad(req,function(errFree){
			if(errFree){
				res.render('trips',{locals:{'user':req.session.user}});
			}else{
					res.render('error',{'error': {
						      message: 'The page you requested Does Not exist any more ',
						      error: '!!!!'
						    }});
			}
		});
	});
	
  
});

router.get('/galery', function(req, res, next) {
	initializeSession(req,function(){
		galeryPreLoad(req,function(errFree){
				if(errFree){
					//console.log('galery  was  requested by GET');
					//console.log(req.connection.remoteAddress);
			  		res.render('galery', {locals:{'user':req.session.user}});
				}else{
					res.render('error',{'error': {
						      message: 'The page you requested Does Not exist any more ',
						      error: '!!!!'
						    }});
				}
			})
	});
	
});

router.get('/about', function(req, res, next) {
	initializeSession(req,function(){
		//console.log('about  was  requested by GET');
		//console.log(req.connection.remoteAddress);
  		res.render('about', {locals:{'user':req.session.user}});
	});
	
});

router.get('/contact', function(req, res, next) {
	initializeSession(req,function(){
		//console.log('contact  was  requested by GET');
		//console.log(req.connection.remoteAddress);
  		res.render('contact',{locals:{'user':req.session.user}});
	});
	
});
router.get('/tourDetails', function(req, res, next) {
	initializeSession(req,function(){
		//console.log('tourDetail  was  requested by GET');
		//console.log(req.connection.remoteAddress);
		if(req.query.tourId!==undefined ){
				tourDetailPreLoad(req,function(errFree){
				if(errFree){
					res.render('tourDetails',{locals:{'user':req.session.user}});
				}else{
					res.render('error',{'error': {
						      message: 'The page you requested Does Not exist any more ',
						      error: '!!!!'
						    }});
				}
				
			});
		}else{
			res.render('error',{'error': {
						      message: 'The page you requested Does Not exist any more ',
						      error: '!!!!'
						    }});
		}
		
  		
	});
	
});
router.get('/galeryDetail', function(req, res, next) {
	initializeSession(req,function(){
		//console.log('galeryDetail  was  requested by GET');
		//console.log(req.connection.remoteAddress);
		// galeryDetailPreLoad(req,function(){
		// 	res.render('galeryDetail',{locals:{'user':req.session.user}});
		// });

		if(req.query.galeryID!==undefined ){
				galeryDetailPreLoad(req,function(errFree){
					//console.log(errFree);
					if(errFree){
						res.render('galeryDetail',{locals:{'user':req.session.user}});
					}else{
						res.render('error',{'error': {
						      message: 'The page you requested Does Not exist any more ',
						      error: '!!!!'
						    }});
					}
			});
		}else{
			res.render('error',{'error': {
						      message: 'The page you requested Does Not exist any more ',
						      error: '!!!!'
						    }});
		}
		
  		
	});
	
});
//_______________POSTS_________________________
router.post('/bookTrip',function(req,res,next){
	initializeSession(req,function(){
		//console.log('____________________MAILER_START________________________________')

		bookTripPreLoad(req,function(status){
			if(status==='-1'){
				res.send({'status':'-1'})
			}else{
				res.send({'status':'1'})
			}
			//console.log('____________________MAILER_END________________________________')
		});
	});
});

router.post('/bookTour',function(req,res,next){
	initializeSession(req,function(){
		//console.log('____________________MAILER_START________________________________')

		bookTourPreLoad(req,function(status){
			if(status==='-1'){
				res.send({'status':'-1'})
			}else{
				res.send({'status':'1'})
			}
			//console.log('____________________MAILER_END________________________________')
		});
	});
});

module.exports = router;
