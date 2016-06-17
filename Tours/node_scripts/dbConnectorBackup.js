var db_connector=function(){
	this.mongo = require('mongodb');
	var ObjectId = require('mongodb').ObjectID;
	this.assert = require('assert');
	this.url = 'mongodb://localhost:27017/toursDB';

	console.log('db_connector initialized');

	db_connector.prototype.getTours=function(languageID,callback){
		try{
			this.mongo.connect(this.url,function(err,db){
					var toursCollection=db.collection('toursTable');
					toursCollection.find({'languageID': languageID}).sort({'effDate':-1}).toArray(function(err,docs){
						
						console.log(docs.length);
						callback(docs);
					});
				});
		}catch(err){
			console.dir(err);
			callback(undefined);
		}
	}

	db_connector.prototype.getNameForGalery=function(galeryID,languageID,callback){
		try{
				this.mongo.connect(this.url,function(err,db){
				var mycollection=db.collection('toursTable');
				mycollection.find({'galeryID':galeryID,'languageID':languageID}).toArray(function(err,docs){
				//mycollection.distinct('galeryID',{'galeryID':ObjectId(galeryID),'languageID':ObjectId(languageID)},function(err,docs){
					//console.dir(docs)
					callback(docs);
				});
			})
			}catch(err){
				console.dir(err)
				callback(undefined);
			}
	}
	db_connector.prototype.getGaleryForMe=function(callback){
		try{
				this.mongo.connect(this.url,function(err,db){
				var mycollection=db.collection('galeryTable');
				mycollection.find({'mainImageFlag':'Y'}).toArray(function(err,docs){
				
				//mycollection.distinct("galeryImageURL",function(err,docs){
					//console.dir(docs);
					callback(docs);
				})
					
				//});
			})
		}catch(err){
			console.dir(err);
			callback(undefined);
		}
	}

	db_connector.prototype.getToursForMain=function(languageID,callback){
		try{
			this.mongo.connect(this.url,function(err,db){
					var toursCollection=db.collection('toursTable');
					toursCollection.find({'languageID': languageID,'MainPageFlag':'Y'}).sort({'effDate':-1}).limit(6).toArray(function(err,docs){
						//console.dir(docs);
						callback(docs);
					});
				});
		}catch(err){
			console.dir(err);
			callback(err);
		}
	}
	db_connector.prototype.getTourForDetail=function(tourID,languageID,callback){
		try{
			this.mongo.connect(this.url,function(err,db){
					var toursCollection=db.collection('toursTable');
					toursCollection.find({'tourID': tourID,'languageID':languageID}).toArray(function(err,docs){
						
						var arr=[];
						arr.push(docs[0])
						callback(arr);
					});
				});
		}catch(err){
			console.dir(err);
			callback(undefined)
		}
	}
	db_connector.prototype.getGaleryHeader=function(galeryID,callback){
		try{
			this.mongo.connect(this.url,function(err,db){
					var galeryCollection=db.collection('galeryTable');
					galeryCollection.find({'galeryID': galeryID,'mainImageFlag':'Y'}).toArray(function(err,docs){
						console.dir(docs);
						callback(docs);
					});
				});
		}catch(err){
			console.dir(err);
			callback(undefined);
		}
	}
	db_connector.prototype.getGalery=function(galeryID,callback){
		//console.log(galeryID);
		try{
			this.mongo.connect(this.url,function(err,db){
					var galeryCollection=db.collection('galeryTable');
					galeryCollection.find({'galeryID': galeryID}).toArray(function(err,docs){
						//console.dir(docs);
						callback(docs);
					});
				});
		}catch(err){
			console.dir(err);
			callback(undefined);
		}
	}
	db_connector.prototype.getRaces=function(languageID,callback){
		try{
			this.mongo.connect(this.url,function(err,db){
			var racesCollection=db.collection('raceTable');
			racesCollection.find({'languageID': languageID}).toArray(function(err,docs){
					callback(docs);

				});
			});
		}catch(err){
			console.dir(err);
			callback(undefined);
		}
	}
	db_connector.prototype.getRacesForMain=function(languageID,callback){
		try{
			this.mongo.connect(this.url,function(err,db){
			var racesCollection=db.collection('raceTable');
			racesCollection.find({'languageID': languageID}).sort({'eddDate':-1}).limit(2).toArray(function(err,docs){
					callback(docs);

				});
			});
		}catch(err){
			console.dir(err);
			callback(undefined);
		}
	}
	
	db_connector.prototype.getLanguageID=function(language,callback){
		try{
			this.mongo.connect(this.url,function(err,db){
			var languageCollection=db.collection('languageTable');
			languageCollection.find({'language':language}).toArray(function(err,docs){
				
					console.log('language ID was found ....'+docs[0]._id.toString());
					callback(docs[0]._id.toString());
				});
			});
		}catch(err){
			console.dir(err);
			callback(undefined);
		}
	}
}





/*
mongo.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  var ucxoTable=db.collection('ucxotable');
  ucxoTable.find({}).toArray(function(err,docs){
  	console.dir(docs);
  });
  });

*/




module.exports.db_connector=db_connector



