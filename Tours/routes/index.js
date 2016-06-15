var express = require('express');
var router = express.Router();
var user=require('../node_scripts/user');
var screener=require('../node_scripts/screener');
var db_Connector=require('../node_scripts/db_connector');
var db=new db_Connector.db_connector();
var async =  require ('async');
var nodeMailer=require('nodemailer');

var tripMailBodyHTML='<!DOCTYPE html><html><head><style>table, th, td {    border: 1px solid black;    border-collapse: collapse;}th, td {    padding: 5px;    text-align: left;    }</style></head><body><h2>Trip Booking Request</h2><table style="width:100%">  <tr>    <th>სახელი</th>    <th>გვარი</th>    <th>დაბადების თარიღი</th>    <th>ID</th>    <th>ტელეფონი</th>    <th colspan="2">მეილი</th>  </tr>  <tr>    <td>@fname@</td>    <td>@lname@</td>    <td>@bdate@</td>    <td>@id@</td>    <td>@phone@</td>    <td>@mail@</td>  </tr></table><br/><br/><br/><br/><br/><br/><h2>Trip Information</h2><table style="width:100%">  <tr>    <th>რეისის ID</th>    <th>რეისის სახელი</th>    <th>დასაჯავშნი ადგილების რაოდენობა</th>  </tr>  <tr>    <td>@raceID@</td>    <td>@raceName@</td>        <td>@quantity@</td>      </tr></table></body></html>';


var tourMailBodyHTML='<!DOCTYPE html><html><head><style>table, th, td {    border: 1px solid black;    border-collapse: collapse;}th, td {    padding: 5px;    text-align: left;    }</style></head><body><h2>Tour Booking Request</h2><table style="width:100%">  <tr>    <th>სახელი</th>    <th>გვარი</th>    <th>დაბადების თარიღი</th>    <th>ID</th>    <th>ტელეფონი</th>    <th colspan="2">მეილი</th>      </tr>  <tr>    <td>@fname@</td>    <td>@lname@</td>    <td>@bdate@</td>    <td>@id@</td>    <td>@phone@</td>    <td>@mail@</td>  </tr></table><br/><br/><br/><br/><br/><br/><h2>Tour Information</h2><table style="width:100%">  <tr>    <th>ტურის ID</th>    <th>ტურის სახელი</th>    <th>დასაჯავშნი ადგილების რაოდენობა</th>  </tr>  <tr>    <td>@tourID@</td>    <td>@tourName@</td>     <td>@quantity@</td>     </tr></table></body></html>';


var initializeSession =function(req,callback){
//console.log(req.url);
//console.dir(req.query.language);


	if (req.session.user===undefined){
		var newUser=new user.user();		
		if(req.query.language!=='' & req.query.language!==undefined){
			newUser.defaultLanguage=req.query.language;			
		}
		db.getLanguageID(newUser.defaultLanguage,function(langId){
				newUser.defaultLanguageID=langId;
				newUser.screener=new screener.screener();
				newUser.screener.init();
				req.session.user=newUser;
				callback();
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
				req.session.user.defaultLanguageID=langId;
				callback();
			});
	}
}

var indexPreLoad=function(req,callback){
	console.log('index preload was invoked');
	req.session.user.screener.tours=[];
	db.getToursForMain(req.session.user.defaultLanguageID,function(result){
		//console.dir(result);
	/*	for (itemNum in result){
			//console.dir(result[itemNum]);
			//console.log('_________________________________')
			console.log('requesting Tours For Main')
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

			db.getGaleryHeader(galeryID,function(galeryHeader){
				console.dir(galeryHeader);
				if(galeryHeader[0]!==undefined){
					//var galeryID=galeryHeader[0]._id.toString();
					var effDateGalery=galeryHeader[0].effDate;
					var galeryImageURL=galeryHeader[0].galeryImageURL;

					var galery=new screener.galeryItem(galeryID,effDateGalery,galeryImageURL);
					req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,galery));
					//console.dir(req.session.user.screener.tours);

					req.session.user.screener.races=[];
					db.getRacesForMain(req.session.user.defaultLanguageID,function(result){
						//console.dir(result);
						console.log('requesting Races For Main')
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
						callback();
					})
				}else{
					req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,undefined));
					
					callback();
				}
				
			})
		}
	*/

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
				console.dir(galeryHeader);
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
						console.log('requesting Races For Main')
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
						callback();
					})
		//callback();
	});	
	});
}
var tourPreLoad=function(req,callback){
	req.session.user.screener.tours=[];
	db.getTours(req.session.user.defaultLanguageID,function(result){
	/*	for (itemNum in result){
			//console.dir(result[itemNum]);
			//console.log('_________________________________')

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

			db.getGaleryHeader(galeryID,function(galeryHeader){
				//var galeryID=galeryHeader[0]._id.toString();
				if(galeryHeader[0]!==undefined){
					var effDateGalery=galeryHeader[0].effDate;
					var galeryImageURL=galeryHeader[0].galeryImageURL;

					var galery=new screener.galeryItem(galeryID,effDateGalery,galeryImageURL);
					req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,galery));
					//console.dir(req.session.user.screener.tours);
					callback();
				}else{
					req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,undefined));
					callback();
				}
				
			})
		}
		*/

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
			callback();
		});
	});
}
var tripsPreLoad=function(req,callback){
	req.session.user.screener.races=[];
	db.getRaces(req.session.user.defaultLanguageID,function(result){
		//console.dir(result);
		
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
		callback();
	})
}
var galeryPreLoad=function(req,callback){
	
}
var aboutPreLoad=function(req,callback){
	
}
var contactPreLoad=function(req,callback){
	
}
var tourDetailPreLoad=function(req,callback){

		console.log(req.query.tourId);
		console.log('languageID is __ '+req.session.user.defaultLanguageID);
		req.session.user.screener.tourDetailID=req.query.tourId;
		req.session.user.screener.tours=[];
		db.getTourForDetail(req.query.tourId,req.session.user.defaultLanguageID,function(result){
			for (itemNum in result){
				console.dir(result[itemNum]);
				console.log('_________________________________')

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

				db.getGaleryHeader(galeryID,function(galeryHeader){
					if(galeryHeader[0]!==undefined){
						//var galeryID=galeryHeader[0]._id.toString();
					var effDateGalery=galeryHeader[0].effDate;
						var galeryImageURL=galeryHeader[0].galeryImageURL;

						var galery=new screener.galeryItem(galeryID,effDateGalery,galeryImageURL);
						req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,galery));
						//console.dir(req.session.user.screener.tours);
						callback();
					}else{
						req.session.user.screener.tours.push(new screener.tourItem(Id,effdate,mainImageURL,descriptionImageURL,tourName,tourDescriptionShort,tourDescriptionLong,aboutPlaceShort,aboutPlaceLong,tourDetailShort,tourDetailShortHeaderName,tourDetailLong,tourDetailLongHeaderName,undefined));
						//console.dir(req.session.user.screener.tours);
						callback();
					}
					
				})
			}
			
		});
		
}
var galeryDetailPreLoad=function(req,callback){
	var galeryID=req.query.galeryID;
	console.log('galery ID is '+galeryID);
	db.getGalery(galeryID,function(result){
		console.dir(result);
		req.session.user.screener.galery=[];

		result.forEach(function(item){
			req.session.user.screener.galery.push(new screener.galeryItem(item.galeryID,item.effDate,item.galeryImageURL));
		});
		callback();
	});
}


var bookTripPreLoad=function(req,callback){
	var  fName=req.body.fname;

	var  lName=req.body.lname;

	var  birthDate=req.body.bdate;
	var  idNumber=req.body.idNumber;
	var  mail=req.body.mail;
	var  phoneNumber=req.body.cellNumber;
	var quantity=req.body.quantity;
	var raceID=req.body.raceID;
	var raceName=req.body.raceName;

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
	        console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
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
	        console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
}

/* GET home page. */
router.get('/', function(req, res, next) {
	initializeSession(req,function(){
		console.log('index  was  requested by GET');
		console.log(req.connection.remoteAddress);
		indexPreLoad(req,function(){
			res.render('index', {locals:{'user':req.session.user}});
		})
  		
	});
	
});

router.get('/tours', function(req, res, next) {
	initializeSession(req,function(){
		console.log('Tours  was  requested by GET');
		console.log(req.connection.remoteAddress);
		tourPreLoad(req,function(){
			res.render('tours',{locals:{'user':req.session.user}});
		})
  		
	});
	
});

router.get('/trips', function(req, res, next) {
	initializeSession(req,function(){
		console.log('trips  was  requested by GET');
		console.log(req.connection.remoteAddress);

		tripsPreLoad(req,function(){
			res.render('trips',{locals:{'user':req.session.user}});
		});
	});
	
  
});

router.get('/galery', function(req, res, next) {
	initializeSession(req,function(){
		console.log('galery  was  requested by GET');
		console.log(req.connection.remoteAddress);
  		res.render('galery', {locals:{'user':req.session.user}});
	});
	
});

router.get('/about', function(req, res, next) {
	initializeSession(req,function(){
		console.log('about  was  requested by GET');
		console.log(req.connection.remoteAddress);
  		res.render('about', {locals:{'user':req.session.user}});
	});
	
});

router.get('/contact', function(req, res, next) {
	initializeSession(req,function(){
		console.log('contact  was  requested by GET');
		console.log(req.connection.remoteAddress);
  		res.render('contact',{locals:{'user':req.session.user}});
	});
	
});
router.get('/tourDetails', function(req, res, next) {
	initializeSession(req,function(){
		console.log('tourDetail  was  requested by GET');
		console.log(req.connection.remoteAddress);
		tourDetailPreLoad(req,function(){
			res.render('tourDetails',{locals:{'user':req.session.user}});
		});
  		
	});
	
});
router.get('/galeryDetail', function(req, res, next) {
	initializeSession(req,function(){
		console.log('galeryDetail  was  requested by GET');
		console.log(req.connection.remoteAddress);
		galeryDetailPreLoad(req,function(){
			res.render('galeryDetail',{locals:{'user':req.session.user}});
		});
  		
	});
	
});
//_______________POSTS_________________________
router.post('/bookTrip',function(req,res,next){
	initializeSession(req,function(){
		console.log('____________________MAILER_START________________________________')

		bookTripPreLoad(req,function(){
			console.log('____________________MAILER_END________________________________')
		});
	});
});

router.post('/bookTour',function(req,res,next){
	initializeSession(req,function(){
		console.log('____________________MAILER_START________________________________')

		bookTourPreLoad(req,function(){
			console.log('____________________MAILER_END________________________________')
		});
	});
});

module.exports = router;
