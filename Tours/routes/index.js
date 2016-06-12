var express = require('express');
var router = express.Router();
var user=require('../node_scripts/user');
var screener=require('../node_scripts/screener');
var db_Connector=require('../node_scripts/db_connector');
var db=new db_Connector.db_connector();
var async =  require ('async');

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

module.exports = router;