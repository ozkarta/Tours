db.languageTable.drop()
db.toursTable.drop()
db.galeryTable.drop()
db.raceTable.drop()


var engID=new ObjectId()
var geoID=new ObjectId()
var rusID=new ObjectId()

var a=new ObjectId()
var galeryID=new ObjectId()
var raceID=new ObjectId()

db.languageTable.insert({'_id':engID,'language':'English'})
db.languageTable.insert({'_id':geoID,'language':'ქართული'})
db.languageTable.insert({'_id':rusID,'language':'русский'})


//_______________________________ტურები
//   English
db.toursTable.insert({
'tourID':a,
'languageID':engID,
'effDate':new Date(),
'mainImageIRL':'images/website/svaneti1.jpg',
'descriptionImageURL':'images/website/svaneti2.jpg',
'tourName':'Svaneti',
'tourDescriptionShort':'Short Description',
'tourDescriptionLong':'Long Description',
'aboutPlaceShort':'About place short',
'aboutPlaceLong':'About Place Long',
'tourDetailShort':'Tour Detail Short',
'tourDetailShortHeaderName':'Tour Detail Short Name',
'tourDetailLong':'Tour Detail Long',
'tourDetailLongHeaderName':'Tour Detail Long Name',
'galeryID':galeryID
})

//   georgian
db.toursTable.insert({
'tourID':a,
'languageID':geoID,
'effDate':new Date(),
'mainImageIRL':'images/website/svaneti1.jpg',
'descriptionImageURL':'images/website/svaneti2.jpg',
'tourName':'სვანეთი',
'tourDescriptionShort':'მოკლე აღწერა',
'tourDescriptionLong':'გრძელი აღწერა',
'aboutPlaceShort':'ტურის შესახებ მოკლედ',
'aboutPlaceLong':'ტურის შესახებ გრძლად',
'tourDetailShort':'ტურიდ დეტალები მოკლედ',
'tourDetailShortHeaderName':'ტურის დეტალების სათაური მოკლედ',
'tourDetailLong':'ტურის დეტალები გრძლად',
'tourDetailLongHeaderName':'ტურის დეტალების სახელი გრძლად',
'galeryID':galeryID
})

//   russian
db.toursTable.insert({
'tourID':a,
'languageID':rusID,
'effDate':new Date(),
'mainImageIRL':'images/website/svaneti1.jpg',
'descriptionImageURL':'images/website/svaneti2.jpg',
'tourName':'Svaneti русский',
'tourDescriptionShort':'Short Description русский',
'tourDescriptionLong':'Long Description русский',
'aboutPlaceShort':'About place short русский',
'aboutPlaceLong':'About Place Long русский',
'tourDetailShort':'Tour Detail Short русский',
'tourDetailShortHeaderName':'Tour Detail Short Name русский',
'tourDetailLong':'Tour Detail Long русский',
'tourDetailLongHeaderName':'Tour Detail Long Name русский',
'galeryID':galeryID
})
//___________________galery

db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery1.jpg',
	'mainImageFlag':'Y'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery2.jpg',
	'mainImageFlag':'N'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery3.jpg',
	'mainImageFlag':'N'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery4.jpg',
	'mainImageFlag':'N'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery5.jpg',
	'mainImageFlag':'N'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery6.jpg',
	'mainImageFlag':'N'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery7.jpg',
	'mainImageFlag':'N'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery8.jpg',
	'mainImageFlag':'N'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery9.jpg',
	'mainImageFlag':'N'
})
db.galeryTable.insert({
	'galeryID':galeryID,
	'effDate':new Date(),
	'galeryImageURL':'images/website/svaneti_galery10.jpg',
	'mainImageFlag':'N'
})



//___________________რეისები
raceID=new ObjectId()
db.raceTable.insert({
	'raceID':raceID,
	'languageID':engID,
	'effDate':new Date(),
	'raceName':'Tchiatura',
	'raceDescription':'Race  to chiatura starts everyday at 12pm',
	'imageURL':'images/website/chiatura.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':geoID,
	'effDate':new Date(),
	'raceName':'ჭიათურა',
	'raceDescription':'რეისი გადის ყოველ დღე 12 pm  ზე',
	'imageURL':'images/website/chiatura.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':rusID,
	'effDate':new Date(),
	'raceName':'chiatura rus',
	'raceDescription':'race description rus',
	'imageURL':'images/website/chiatura.jpg'
})


raceID=new ObjectId()
db.raceTable.insert({
	'raceID':raceID,
	'languageID':engID,
	'effDate':new Date(),
	'raceName':'BidzoMarchenali',
	'raceDescription':'everyday 24/7',
	'imageURL':'images/website/bidzina.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':geoID,
	'effDate':new Date(),
	'raceName':'ბიძო-მარჩენალი',
	'raceDescription':'ბიძოს ბაითის ნახვა   შეგეძლებათ  ყოველ დღე,  ყოველ სრულ საათზე.შესვენებების გარეშე',
	'imageURL':'images/website/bidzina.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':rusID,
	'effDate':new Date(),
	'raceName':'იდინახუი',
	'raceDescription':'შოთაზეყლე',
	'imageURL':'images/website/bidzina.jpg'
})






