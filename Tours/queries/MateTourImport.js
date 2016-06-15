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
a=new ObjectId()
a1=new ObjectId()
a2=new ObjectId()
a3=new ObjectId()
a4=new ObjectId()
a5=new ObjectId()
a6=new ObjectId()
a7=new ObjectId()
a8=new ObjectId()
a9=new ObjectId()
a10=new ObjectId()
a11=new ObjectId()
a12=new ObjectId()
a13=new ObjectId()
a14=new ObjectId()
a15=new ObjectId()

galeryID=new ObjectId()
raceID=new ObjectId()
//____________________________________MTSKHETA____________________________________________________________
db.toursTable.insert({	
'tourID':a,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/mcxeta_mtavari.jpg',
'descriptionImageURL':'images/website/mcxeta_description.jpg',
'tourName':'მცხეთა',
'aboutPlaceShort':'მცხეთა ერთ-ერთი უძველესი ქალაქია საქართველოში.მცხეთის ისტორიული ძეგლები იუნესკოს მსოფლიო კულტურული მემკვიდრეობის ნუსხაშია შეტანილი: ჯვრის მონასტერი,სვეტიცხოველის ტაძარი, სამთავრო, შიო მღვიმის და ზედაზენის  სამონასტრო კომპლექსი.',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილის-მცხეთა--თბილისი</p><h6>ტურის სახეობა: </h6><p> ტური,კულტურული, საეკლესიო</p><h6>კვება: </h6><p> არა</p><h6>განთავსება: </h6><p> არა</p><h6>ტურის ხანგრძლივობა: </h6><p> 1 დღე</p><h6>მანძილი: </h6><p> 30კმ</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'ერთ დღიანი ტური, მცხეთის მონახულება',
'tourDetailLong':'<p>1. ჯვრის მონასტერი </p><p>2. სვეტიცხოველი</p><p>3. სამთავრო</p><p>4. შიო მღვიმის სამონასტრო კომპლექსი</p><p>5. ზედაზენის  სამონასტრო კომპლექსი</p>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/mcxeta_mtavari.jpg',
'descriptionImageURL':'images/website/mcxeta_description.jpg',
'tourName':'Mtskheta',
'aboutPlaceShort':'Mtskheta is one of oldest cities of Georgia (in Kartli province of Eastern Georgia), near Tbilisi. Mtskheta was a capital of the Georgian Kingdom  of Iberia during the 3rd century BC - 5th century AD. Here Georgians accepted Christianity in 317 and Mtskheta still remains the headquarters of the Georgian Orthodox and Apostolic Church.In Mtskheta we shall see: the unique church Jvari Monastery,Svetitskhoveli Cathedral,Samtavro,Shiomghvime and Zedazeni Monasteries.',
'tourDetailShort':'<h6>Routes: </h6><p> Tbilisi-Mtsketa-Tbilisi</p><h6>Tour Type: </h6><p> cultural,Monastery</p><h6>Food: </h6><p> No</p><h6>Placement: </h6><p> No</p><h6>Duration: </h6><p> One Day</p><h6>Distance: </h6><p> 30 KM</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'One day tour in Mtsketa',
'tourDetailLong':'<p>1 Jvari Monastery</p><p>2 Svetitskhoveli Cathedral</p><p>3 Samtavro</p><p>4 Shiomghvime</p><p>5 Zedazeni</p>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/mcxeta_mtavari.jpg',
'descriptionImageURL':'images/website/mcxeta_description.jpg',
'tourName':'Мцхета',
'aboutPlaceShort':'Мцхета - один из самых старых городов Грузии  (в области Картли Восточной Грузии), 24 километрах от Тбилиси. Основан во 2-й половине 1 тысячелетия до н. э. До конца V века н. э. — столица Картлийского царства. Здесь располагаются остатки укреплённых резиденций, городских кварталов, могильники, а также комплекс монастыря Самтавро (главный храм XI века) и кафедральный собор Светицховели. Близ Мцхеты находится древнейший в стране монастырский храм Джвари (VI век). Святое место для православных грузин которым связано история хитона Иисуса христа, принятие христианство государственной религией Мцхета и на сей день остается главным местом грузинской Ортодоксальной и Апостольской Церкви.',
'tourDetailShort':'<h6>Маршруты: </h6><p> Тбилиси  - Мцхета -Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> нет</p><h6>размещение: </h6><p> нет</p><h6>продолжительность: </h6><p> один день</p><h6>расстояние: </h6><p> 30 км</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Однодневный тур в  Мцхета',
'tourDetailLong':'<p>1 Джвари </p><p>2 Светицховели</p><p>3 Самтавро</p><p>4 Шио-Мгвимский монастырь</p><p>5 Зедазнийский монастырь</p>',
'tourDetailLongHeaderName':'Oписание тура',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})
//_______________________________________SVANETI_______________________________________________________
db.toursTable.insert({	
'tourID':a1,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/svaneti_galery10.jpg',
'descriptionImageURL':'images/website/svaneti_galery6.jpg',
'tourName':'სვანეთი',
'aboutPlaceShort':'სვანეთი მაღალმთიანი რეგიონია რომელიც მდებარეობს საქართველოს ჩრდილო დასავლეთში. სტუმრები, რომლებმაც სვანეთი მოინახულეს ერთხმად აღნიშნავენ, რომ სვანეთი არის მუზეუმი ღია ცის ქვეშ. სვანეთი იყოფა ორ ნაწილად, ზემო სვანეთი და ქვემო სვანეთი. ზემო სვანეთის ადმინისტრაიული ცენტრი არის ქალაქი მესტია, რომელიც ზღვის დონიდან არის 1500 მ. სიმაღლეზე. ზემო სვანეთი ცნობილია თავისი არქიტექტურით. აქ თქვენ შეხვდებით უნიკალურ სვანურ კოშკებს და უძველეს ეკლესიებს.',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილისი-ზუგდიდი-მესტია-უშგული - თბილისი</p><h6>ტურის სახეობა: </h6><p> კულტურული</p><h6>კვება: </h6><p> ორჯერადი კვება</p><h6>განთავსება: </h6><p> დაბინავება ოჯახურ სასტუმროში</p><h6>ტურის ხანგრძლივობა: </h6><p> 2 ღამე / 3 დღე</p><h6>მანძილი: </h6><p> 550კმ</p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'3 დღიანი ტური სვანეთში',
'tourDetailLong':'<ul><dt><p>1 დღე:</p></dt><dd><p>1 დადიანების სასახლე</p></dd><dd><p>2 ენგურის წყალსაცავი</p></dd><dd><p>3. მესტია</p></dd><dd><p>4. ლატალი</p></dd><dd><p>5 მესტიის ეთნოგრაფიული მუზეუმი,</p></dd><dd><p>6,ხერგიანების მუზეუმი</p></dd><dt><p>მე-2 დღე</p></dt><dd><p>1.უშგული</p></dd><dd><p>2.სიყვარულის კოშკი</p></dd><dd><p>3.თამარ მეფის საზამთრო და საზაფხულო კოშკები</p></dd><dd><p>4.ლამარიას ციხე-კოშკი.</p></dd><dd><p>5.მუზეუმი</p></dd><dt><p>მე-3 დღე</p></dt><dd><p>1.ჰაწვალის მთა</p></dd><dd><p>2.ქორულდის  ტბა</p></dd><dd><p>3.ჩახის ტბა</p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a1,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/svaneti_galery10.jpg',
'descriptionImageURL':'images/website/svaneti_galery6.jpg',
'tourName':'Svaneti',
'aboutPlaceShort':'Svaneti is high mountain region on the north west side of Georgia. The guests, who visited the region, unanimously note, that the Svaneti is an open-air museum. Svaneti is divided into two parts, the upper Svaneti and a lower Svaneti. Town Mestia is the administrative center of the upper Svaneti, which is located on 1500 m. From the level of sea. Upper Svaneti known for its architecture. Here you can meet the unique Svanetian towers and ancient churches.',
'tourDetailShort':'<h6>Routes: </h6><p> Tbilisi - Zugdidi - Mestia - Ushguli - Tbilisi</p><h6>Tour Type: </h6><p> cultural</p><h6>Food: </h6><p> two meals a day </p><h6>Placement: </h6><p> Overnight in a Family hotel for two nights</p><h6>Duration: </h6><p> 2 nights / 3 days</p><h6>Distance: </h6><p> 550 KM</p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'3-Day tour in Svaneti',
'tourDetailLong':'<ul><dt><p>Day 1</p></dt><dd><p>1.Dadiani Museum in Zugdidi.</p></dd><dd><p>2.  Enguri reservoir;</p></dd><dd><p>3 Mestia</p></dd><dd><p>4.  Latali</p></dd><dd><p>5. Ethnographic Museum</p></dd><dd><p>6. Khergiani Museum</p></dd><dt><p>Day 2</p></dt><dd><p>1.Ushguli</p></dd><dd><p>2. Tower of Love</p></dd><dd><p>3. Tamar&quots winter and summer towers</p></dd><dd><p>4.Lamaria tower</p></dd><dt><p>Day 3</p></dd><dt><p>1.Khatsvali</p></dd><dd><p>2.Qoruldi lake </p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a1,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/svaneti_galery10.jpg',
'descriptionImageURL':'images/website/svaneti_galery6.jpg',
'tourName':'Сванети',
'aboutPlaceShort':'Сванети горний краи каторый находится в северно-западноий грузии. Люди посетившие сванети часто називают его музейм под откритим небом. Сванети делят на две Верхную и Нижную часть. Административним центром верхной сванети является город (п.г.т.) местя который находится 1500 метров над уровнем моря. Верхняя Сванетия известна своими архитектурными сокровищами. здесь вы увидите средневековие церкви и укрепления Местийского района каторые били включени в список Всемирного наследия ЮНЕСКО.',
'tourDetailShort':'<h6>Маршруты: </h6><p> Тбилиси – Зугдиди – Местиа – Ушгули – Тбилиси</p><h6>Тип тура: </h6><p> культурный</p><h6>питание: </h6><p> Двухразовое питание</p><h6>размещение: </h6><p> Остановка в семейном отеле на 2 ночь</p><h6>продолжительность: </h6><p> 2 ночи/ 3 дня</p><h6>расстояние: </h6><p> 550 км</p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Трехдневный  тур по Сванети',
'tourDetailLong':'<ul><dt><p>День 1:</p></dt><dd><p>1.Дворец Дадиани в Зугдиди</p></dd><dd><p>2.водохранилище Ингури</p></dd><dd><p>3.Местия</p></dd><dd><p>4.Латали</p></dd><dd><p>5 музей Местии</p></dd><dd><p>6. музей имени Хергиани.</p></dd><dt><p>День 2</p></dt><dd><p>1.Ушгули</p></dd><dd><p>2. Башню Любви</p></dd><dd><p>3. зимние и летние башни царицы Тамары,</p></dd><dd><p>4.Замковая башня Ламариа.</p></dd><dt><p>День 3</p></dt><dd><p>1.Хацвали</p></dd><dd><p>2.озера корульди</p></dd><dd><p>3.озера chaxis</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//__________________________________SAMCXE_JAVAKHETI________________________________________________
db.toursTable.insert({	
'tourID':a2,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/samcxe_main.jpg',
'descriptionImageURL':'images/website/samcxe_desc.jpg',
'tourName':'სამცხე-ჯავახეთი',
'aboutPlaceShort':'სამცხე-ჯავახეთი საქართვლოს უძველესი კუთხეა. ამ ტერიტორიაზე მრავალი არქეოლოგიური ძეგლია. შეიძლება ითქვას, რომ სამცხე-ჯავახეთის მიწა-წყალი მრავალ საიდუმლოს ინახავს და მისი ვრცელი ტერიტორიების არქეოლოგიური კვლევა გრძელდება. მიუხედავად ამისა, სამცხე-ჯავახეთი მდიდარია სანახაობებითი. თქვენ ამაში აუცილებლად დარწმუნდებით მას შემდეგ, რაც ესტუმრებით ამ კუთხეს.აქაური სამზარეულო მთელს საქართველოშია განთქმული თავისი უნიკალურობით. ასევე აქ გვაქვს ღვინის ისეთი სახეობები, რომლებიც ძალზე დიდ იშვიათობას წარმოადგენს და გვხვდება მხოლოდ ამ კუთხეში.',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილისი-ბორჯომი-ახალციხე-აბასთუმანი-ვარძია-თბილისი</p><h6>ტურის სახეობა: </h6><p> კულტურულ ,შემეცნებითი</p><h6>კვება: </h6><p> ორჯერადი კვება</p><h6>განთავსება: </h6><p> დაბინავება  სასტუმროში</p><h6>ტურის ხანგრძლივობა: </h6><p> 2 ღამე / 3 დღე</p><h6>მანძილი: </h6><p> 250 კმ</p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'3 დღიანი ტური სამცხე-ჯავახეთში',
'tourDetailLong':'<ul><dt><p>პირველი დღე</p></dt><dd><p>1.ბორჯომი</p></dd><dd><p>2,ტიმოთესუბნის ღვთისმშობლის სახელობის მონასტერი</p></dd><dd><p>3.ბაკურიანი</p></dd><dd><p>4.სადგერის მონასტერი </p></dd><dd><p>5.სერაფიმ საროვსკის ეკლესია</p></dd><dd><p>6.ექსკურსია ბორჯომის პარკში</p></dd><dd><p>7.დაბინავება  ბორჯომში</p></dd><dt><p>მე-2 დღე</p></dt><dd><p>1.მწვანე მონასტერი</p></dd><dd><p>2.რაბათის ციხე</p></dd><dd><p>3.საფარას მონასტერი</p></dd><dd><p>4.ჭულევის მონასტერი</p></dd><dd><p>5 ზარზმას მონასტერი</p></dd><dd><p>6.აბასთუმნის ასტროფიზიკური ობსერვატორი</p></dd><dd><p>7. დაბინავება ახალციხეში</p></dd><dt><p>მე-3 დღე</p></dt><dd><p>1.ვარძიის კომპლექსი</p></dd><dd><p>2.ფარავანის ტბა</p></dd><dd><p>3. წალკა</p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a2,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/samcxe_main.jpg',
'descriptionImageURL':'images/website/samcxe_desc.jpg',
'tourName':'SAMTSKHE-JAVAKHETI',
'aboutPlaceShort':'Samtskhe-Javakheti – one of the oldest part of Georgia. On its territory there is a huge number of archeological monuments. We can say that this land is full of mysteries and puzzles, many of which are not discovered yet. You will be able to taste the local cuisine which is unusual and varied, even for residents of Georgian other parts. Here is producing unique wines. Our tour will introduce this beautiful place with the cultural and historical diversity of Samtskhe-Javakheti.',
'tourDetailShort':'<h6>Routes: </h6><p> Tbilisi- Borjomi - Akhaltsikhe - Abastumani - Vardzia - Tsalka - Tbilisi</p><h6>Tour Type: </h6><p> cultural,Monastery</p><h6>Food: </h6><p> two meals a day </p><h6>Placement: </h6><p> Overnight in a  hotel for two nights</p><h6>Duration: </h6><p> 2 nights / 3 days</p><h6>Distance: </h6><p> 250 KM</p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'3-Day tour in SAMTSKHE-JAVAKHETI',
'tourDetailLong':'<ul><dt><p>Day 1</p></dt><dd><p>1. Borjomi </p></dd><dd><p>2.Timotesubani Virgin Mary Monastery (Tsaghvery)</p></dd><dd><p>3. Bakuriani</p></dd><dd><p>4. TabatskuriSadgeri monastery</p></dd><dd><p>5. Church of Seraphim Sarov</p></dd><dd><p>6.Borjomi park</p></dd><dd><p>7.Night in Borjomi</p></dd><dt><p>Day 2</p></dt><dd><p>1.Mtsvane monastery</p></dd><dd><p>2. Rabati Complex</p></dd><dd><p>3.Sapara Monastery</p></dd><dd><p>4.Chulevi Monastery</p></dd><dd><p>5.Zarzma Monastery</p></dd><dd><p>6.Abastumani Astrophysical Observatory</p></dd><dd><p>7.Night in Akhaltsikhe</p></dd><dt><p>Day 3</p></dt><dd><p>1.Vardzia Cave Monastery</p></dd><dd><p>2.Paravany Lake</p></dd><dd><p>3. Tsalka</p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a2,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/samcxe_main.jpg',
'descriptionImageURL':'images/website/samcxe_desc.jpg',
'tourName':'САМЦХЕ-ДЖАВАХЕТИ',
'aboutPlaceShort':'Самцхе-Джавахети – древнейший край Грузии. На его территории расположено огромное количество археологических памятников. Можно сказать, что эта земля полна тайн и загадок, многие из которых еще предстоит открыть. И Вы в этом непременно убедитесь!  Вкусовая гамма местной кухни необычна и разнообразна даже для жителей других частей Грузии.Здесь производят уникальные сорта вин, которые не поддаются воспроизведению на другой почве.Наш тур поможет Вам познакомиться со всем культурно-историческим многообразием Самцхе-Джавахети. ',
'tourDetailShort':'<h6>Маршруты: </h6><p> Тбилиси - Бакуриани - Боржоми - Ахалцихе - Вардзиа - Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> Двухразовое питание</p><h6>размещение: </h6><p> Остановка в  отеле на 2 ночь</p><h6>продолжительность: </h6><p> 2 ночи/ 3 дня</p><h6>расстояние: </h6><p> 250 км</p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Трехдневный  тур по Самцхе-Джавахети',
'tourDetailLong':'<ul><dt><p>День 1</p></dt><dd><p>1. Боржоми</p></dd><dd><p>2.Тимотесубани Храм Пресвятой Богородицы(Цагвери)</p></dd><dd><p>3. Бауриани</p></dd><dd><p>6. Церковь Серафима Саровского</p></dd><dd><p>7. Парк Боржоми</p></dd><dd><p>8. Ночь в Боржоми</p></dd><dt><p>День 2</p></dt><dd><p>1.Зеленый монастырь</p></dd><dd><p>2. Комплекс Рабат</p></dd><dd><p>4.Монастырь Сафара</p></dd><dd><p>5. Монастырь Чулеви</p></dd><dd><p>6. Зарзма Монастырь</p></dd><dd><p>7. Абастумани</p></dd><dd><p>8.Абастуманская астрофизическая обсерватория</p></dd><dd><p>9.Ночь в Ахалцихе</p></dd><dt><p>День 3</p></dt><dd><p>1.Пещерный монастырь Вардзия</p></dd><dd><p>2.Озеро Паравани</p></dd><dd><p>3. Цалка</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//________________________________________yazbegi__________________________________________________

db.toursTable.insert({	
'tourID':a3,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/yazbegiMain.jpg',
'descriptionImageURL':'images/website/yazbegiDesc.jpg',
'tourName':'ყაზბეგი',
'aboutPlaceShort':'საქართველო - მთიანი ქვეყანაა, მყინვარწვერი კი საქართველოს ერთ-ერთი გამორჩეულად ლამაზი მთა. მცხეთა-მთიანეთის მხარე ძალზე პოპულარულია როგორც საქართველოში, ისე მთელს მსოფლიოში. ყაზბეგის რეგიონი კი მისი მარგალიტია, გამომდინარე ულამაზესი ბუნებიდან, ტრადიციებიდან და კულტურული ღირსშესანიშნაობებიდან. აქაური მთის ჰაერი საოცრად სუფთაა, ხოლო თოვლის ნახვა სტუმრებს ალპური მთის კალთებზე ცხელ ზაფხულშიც შეუძლიათ.',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> ანანური- გუდაური-  სტეფანწმინდა - დარიალი-თბილისი</p><h6>ტურის სახეობა: </h6><p> ტური,კულტურული, საეკლესიო</p><h6>კვება: </h6><p> არა</p><h6>განთავსება: </h6><p> არა</p><h6>ტურის ხანგრძლივობა: </h6><p> 1 დღე</p><h6>მანძილი: </h6><p> 180 კმ</p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'ყაზბეგის ტური',
'tourDetailLong':'<p>1 ანანურის კომპლექსი.</p><p>2 გუდაური</p><p>3. ვეძა - მჟავე წყლები </p><p>4. გერგეთის სამება;</p><p>5. პატრიარქის სახლი</p><p>6. დარიალის ხეობა</p><p>7.სნოს ციხე</p>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a3,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/yazbegiMain.jpg',
'descriptionImageURL':'images/website/yazbegiDesc.jpg',
'tourName':'Kazbeghi',
'aboutPlaceShort':'Georgia is a Caucasian country, therefore mountains are, essentially, everywhere.  Kazbeghi, though, is an exceptionally beautiful mountainous region, the best well-known for both Georgians and foreigners which deeply love mountain landscapes. This area is famous for its beautiful nature, but also because of its traditions and enticing cultural venues. Joining our Kazbeghi tour you’ll enjoy the incredible sights of the Caucasian panorama.',
'tourDetailShort':'<h6>Routes: </h6><p> Tbilisi- Borjomi - tbilisi-Ananuri - Gudauri -  Stephantsminda -Darial – Sno-tbilisi</p><h6>Tour Type: </h6><p> cultural,Monastery</p><h6>Food: </h6><p> No </p><h6>Placement: </h6><p> No </p><h6>Duration: </h6><p> One Day</p><h6>Distance: </h6><p> 180 KM</p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'One day tour in Kazbeghi',
'tourDetailLong':'<p>1 Ananuri complex</p><p>2 gudauri</p><p>3 Vedza, acidic waters</p><p>4 Gergeti Trinity</p><p>5 Patriarchate residence</p><p>6 Darial Gorge</p><p>7 sno</p>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a3,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/yazbegiMain.jpg',
'descriptionImageURL':'images/website/yazbegiDesc.jpg',
'tourName':'Казбеги',
'aboutPlaceShort':'Грузия – горная страна, и Казбеги – одна из красивейших наших гор. Мцхета-Тианетский край  благодаря своей прекрасной природе, традициям и памятникам культуры пользуется популярностью как у местных жителей, так и у туристов из разных стран мира. Здешний воздух необыкновенно чистый и свежий, вы почувствуете это  едва выйдя из машины.',
'tourDetailShort':'<h6>Маршруты: </h6><p> Тбилиси-  Ананури- Гудаури- Стефанцминда-Дарьял -Сно-Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> нет</p><h6>размещение: </h6><p> нет</p><h6>продолжительность: </h6><p> один день</p><h6>расстояние: </h6><p> 180 км</p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Однодневный тур в Казбеги ',
'tourDetailLong':'<p>1 Крепости Ананури</p><p>2 Гудаури</p><p>3 Источники минеральных вод</p><p>4 Троица Гергети</p><p>5 Резиденция Патриарха</p><p>6 Дарьял</p><p>7 Сно</p>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//___________________________________tusheti_______________________________________
db.toursTable.insert({	
'tourID':a4,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/tushetiMain.jpg',
'descriptionImageURL':'images/website/tushetiDesc.jpg',
'tourName':'თუშეთი',
'aboutPlaceShort':'თუშეთი საქართველოს ულამაზესი კუთხე – თუშეთი, საქართველოს ჩრდილო-აღმოსავლეთ ნაწილში, აღმოსავლეთ კავკასიონზე მდებარეობს. მისი ფართობი 896 კვადრატული კილომეტრია.უშეთს აღმოსავლეთიდან დაღესტანი, ჩრდილოეთიდან ჩეჩნეთი, დასავლეთით ხევსურეთი, სამხრეთით კი კახეთი ესაზღვრება.თუშეთი ოთხ ძირითად თემად იყოფა. პირიქითა, გომეწრის, წოვათას თემი და  ჩაღმის თემი. თუშეთის ადმინისტრაციული ცენტრი – ომალო ჩაღმის თემს მიეკუთვნება',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილისი - ალვანი - ომალო - შენაქო - დიკლო - დართლო - ფარსმა - დოჭუ -თბილისი</p><h6>ტურის სახეობა: </h6><p> კულტურულ ,შემეცნებითი</p><h6>კვება: </h6><p> ორჯერადი კვება</p><h6>განთავსება: </h6><p> დაბინავება ოჯახურ სასტუმროში</p><h6>ტურის ხანგრძლივობა: </h6><p> 2 ღამე / 3 დღე</p><h6>მანძილი: </h6><p> </p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'3 დღიანი ტური თუშეთში',
'tourDetailLong':'<ul><dt><p>1 დღე</p></dt><dd><p>1.ქვემო ალვანი</p></dd><dd><p>2.აბანოს უღელტეხილი</p></dd><dd><p>3.ომალო </p></dd><dd><p>4.შენაქო</p></dd><dd><p>5.დიკლო</p></dd><dt><p>2.დღე</p></dt><dd><p>1.დართლო</p></dd><dd><p>2.კვავლო</p></dd><dd><p>3.ფარსმა </p></dd><dd><p>4.გირევი</p></dd><dt><p>3 დღე</p></dt><dd><p>1.დოჭუ</p></dd><dd><p>2.ვარბოსელი</p></dd><dd><p>3.ილიურთა</p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a4,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/tushetiMain.jpg',
'descriptionImageURL':'images/website/tushetiDesc.jpg',
'tourName':'Tusheti',
'aboutPlaceShort':'The most beautiful nook of Georgia – Tusheti – is located in northeastern Georgia, on the northern slopes of the Greater Caucasus Mountains.  Its area makes up of 896 square kilometers at a height of 1650-4493 above-sea level. n the east Tusheti borders Daghestan, in the north there is Chechnya, in the west there is Khevsureti and in the south is situated Kakheti.Tusheti is devided into four main Sociaties: Pirikita, Gometsri, Tsova and Chagma. The administrative centre of Tusheti – Omalo – concernes to the Chagmi Sociaty. ',
'tourDetailShort':'<h6>Routes: </h6><p> tbilisi-alvani-omalo-shenako-diklo-dartlo-pharsma-Dochu-tbilisi</p><h6>Tour Type: </h6><p> cultural,Monastery</p><h6>Food: </h6><p> two meals a day  </p><h6>Placement: </h6><p> Overnight in a Family hotel for two nights</p><h6>Duration: </h6><p>  2 nights / 3 days</p><h6>Distance: </h6><p> </p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'3 day tour in Tusheti',
'tourDetailLong':'<ul><dt><p>1 Day</p></dt><dd><p>1 Alvani </p></dd><dd><p>2 Abano Pass</p></dd><dd><p>3 omalo</p></dd><dd><p>4 shenako</p></dd><dd><p>5.diklo</p></dd><dt><p>2 day</p></dt><dd><p>1 dartlo</p></dd><dd><p>2 kvavlo</p></dd><dd><p>3 pharsma</p></dd><dd><p>4 girev</p></dd><dt><p>3 day</p></dt><dd><p>1 dochu</p></dd><dd><p>2 jvarboseli</p></dd><dd><p>3 iliurta</p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a4,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/tushetiMain.jpg',
'descriptionImageURL':'images/website/tushetiDesc.jpg',
'tourName':'Тушети',
'aboutPlaceShort':'расивейший уголок Грузии – Тушети – находится в северо-восточной части Грузии, на восточном Кавказском Хребте. Площадь Тушети составляет 896 квадратных километров. Она расположена на высоте 1650-4493 метров над уровнем моря,На востоке Тушети граничит в Дагестаном, с севера – с Чечней, на западе находится Хевсурети, а на юге расположена Кахети.Тушети делится на четыре основных Общества: Пирикита, Гомецри, Цова и Чагма. Административный центр Тушети – Омало – относится к Обществу Чагма. ',
'tourDetailShort':'<h6>Маршруты: </h6><p>Тбилиси-Алвани-Омало-Дикло-фарсма-Дочу -Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> Двухразовое питание</p><h6>размещение: </h6><p> Остановка в  отеле на 2 ночь</p><h6>продолжительность: </h6><p> 2 ночи/ 3 дня</p><h6>расстояние: </h6><p> </p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Трехдневный  тур по Тушети',
'tourDetailLong':'<ul><dt><p>День 1:</p></dt><dd><p>1 Алвани</p></dd><dd><p>2 Абано перевал</p></dd><dd><p>3 Омало</p></dd><dd><p>4 Дикло</p></dd><dd><p>5 шенако</p></dd><dt><p>День  2:</p></dt><dd><p>1 дартло</p></dd><dd><p>2 Квавло</p></dd><dd><p>3 фарсма</p></dd><dd><p>4 гиреви</p></dd><dt><p>День 3:</p></dt><dd><p>1 Дочу </p></dd><dd><p>2 Джварбосели</p></dd><dd><p>3 Илиурта</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//___________________________________________kaxeti_____________________________________

db.toursTable.insert({	
'tourID':a5,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/kakhetiMain.jpg',
'descriptionImageURL':'images/website/kakhetiDesc.jpg',
'tourName':'კახეთი',
'aboutPlaceShort':'კახეთი საქართველოს ერთ-ერთი უმშვენიერესი და მრავალფეროვანი მხარეა.კახეთი აღმოსავლეთ საქართველოს საზღვრისპირა რეგიონს წარმოადგენს.მას ჩრდილოეთიდან რუსეთის ფედერაცია ესაზღვრება, აღმოსავლეთიდან და სამხრეთიდან აზერბაიჯანი.ვინც კახეთში ერთხელ მაინც ყოფილა, მისთვის ეს მხარე მუდამ კარგ ღვინოსთან და გულღია მასპინძლობასთან ასოცირდება, რადგან კახეთი მევენახეობა-მეღვინეობით განთქმული მხარეა. აქ მრავალი ჯიშის ვაზი ხარობს და შესაბამისად მრავალფეროვანი მაღალხარისხიანი ღვინოებიც მზადდება.',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილისი-დავით გარეჯის მონასტერი-სიღნაღი-ბოდბე-თბილისი</p><h6>ტურის სახეობა: </h6><p> კულტურულ ,საეკლესიო</p><h6>კვება: </h6><p> არა</p><h6>განთავსება: </h6><p> არა</p><h6>ტურის ხანგრძლივობა: </h6><p> 1 დღე</p><h6>მანძილი: </h6><p> </p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'1 დღიანი  ტური კახეთში',
'tourDetailLong':'<p>1 დავით გარეჯის მონასტერი</p><p>2 სიღნაღი</p><p>3 ბოდბე</p><p>4 ღვინის დეგუსტაცია</p>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a5,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/kakhetiMain.jpg',
'descriptionImageURL':'images/website/kakhetiDesc.jpg',
'tourName':'Kakheti',
'aboutPlaceShort':'Kakheti is one of the most beautiful and diverse lands in Georgia.kakheti is a region along the eastern boundary of Georgia. It is bordered by the Russian Federation from the North and Azerbaijan from the East and South.Whoever has traveled to Kakheti even once in his life will always associate this province with good wine and welcoming hospitality – Kakheti is a land famous for viticulture and winemaking. Farmers grow many kinds of grapes here and are skilled at producing a wide variety of high-quality wines.',
'tourDetailShort':'<h6>Routes: </h6><p> tbilisi-David Gareja-Bodbe--tbilisi</p><h6>Tour Type: </h6><p> cultural,Monastery</p><h6>Food: </h6><p> no</p><h6>Placement: </h6><p> no</p><h6>Duration: </h6><p>  one day </p><h6>Distance: </h6><p> </p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'1-Day tour in Kakheti ',
'tourDetailLong':'<p>1 David Gareja</p><p>2 Bodbe</p><p>3 Sighnaghi</p><p>4 Wine tasting</p>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a5,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/kakhetiMain.jpg',
'descriptionImageURL':'images/website/kakhetiDesc.jpg',
'tourName':'Кахетия',
'aboutPlaceShort':'Кахетия является одним из самых красивых и отличающихся мест в Грузии. Кахетия- это регион расположенный вдоль восточной границы. Он граничит с Российской Федерацией с Севера и с Азербайджаном с Востока и Юга. Любой кто посещал Кахетию хотя бы раз в жизни будет ассоциировать его с хорошим вином и гостеприимством . Кахетия - это земля знаменитая виноградством и виноделием.Фермеры растят здесь множество сортов винограда, которые используются специалистами в производстве широкого разнообразия вина высшего качества.',
'tourDetailShort':'<h6>Маршруты: </h6><p>Тбилиси - Давид-Гареджи - Бодбе- Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> нет</p><h6>размещение: </h6><p> нет</p><h6>продолжительность: </h6><p> 1 дня</p><h6>расстояние: </h6><p> </p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Однодневный тур в Кахетии',
'tourDetailLong':'<p>1. Давид Гареджа</p><p>2. Бодбе</p><p>3. Сигнаги</p><p>4. Дегустация вина</p>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})
//___________________________kakheti 2 dgiani____________________________________________
db.toursTable.insert({	
'tourID':a6,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/kaxeti/kaxeti14.jpg',
'descriptionImageURL':'images/website/kaxeti/kaxeti12.jpg',
'tourName':'კახეთი',
'aboutPlaceShort':'კახეთი საქართველოს ერთ-ერთი უმშვენიერესი და მრავალფეროვანი მხარეა.კახეთი აღმოსავლეთ საქართველოს საზღვრისპირა რეგიონს წარმოადგენს.მას ჩრდილოეთიდან რუსეთის ფედერაცია ესაზღვრება, აღმოსავლეთიდან და სამხრეთიდან აზერბაიჯანი.ვინც კახეთში ერთხელ მაინც ყოფილა, მისთვის ეს მხარე მუდამ კარგ ღვინოსთან და გულღია მასპინძლობასთან ასოცირდება, რადგან კახეთი მევენახეობა-მეღვინეობით განთქმული მხარეა. აქ მრავალი ჯიშის ვაზი ხარობს და შესაბამისად მრავალფეროვანი მაღალხარისხიანი ღვინოებიც მზადდება.',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილისი-წინანდალი-ყვარელი-თბილისი</p><h6>ტურის სახეობა: </h6><p> კულტურულi ,საეკლესიო</p><h6>კვება: </h6><p> ორჯერადი კვება</p><h6>განთავსება: </h6><p> დაბინავება სასტუმროში</p><h6>ტურის ხანგრძლივობა: </h6><p> 1 დღე და 2 ღამე</p><h6>მანძილი: </h6><p> </p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'2 დღიანი ტური კახეთში',
'tourDetailLong':'<ul><dt><p>1 დღე</p></dt><dd><p>1.წინანდალი</p></dd><dd><p>2.ძველი შუამთა</p></dd><dd><p>3.ახალი შუამთა</p></dd><dd><p>4. იყალთო</p></dd><dd><p>5.დაბინავება სასტუმროში</p></dd><dt><p>2 დღე</p></dt><dd><p>6.გრემი</p></dd><dd><p>7.ნეკრესი</p></dd><dd><p>8.ალავერდი</p></dd><dd><p>9.ყვარლის ტბა</p></dd><dd><p>10.ღვინის დეგუსტაცია</p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a6,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/kaxeti/kaxeti14.jpg',
'descriptionImageURL':'images/website/kaxeti/kaxeti12.jpg',
'tourName':'Kakheti',
'aboutPlaceShort':'Kakheti is one of the most beautiful and diverse lands in Georgia.kakheti is a region along the eastern boundary of Georgia. It is bordered by the Russian Federation from the North and Azerbaijan from the East and South.Whoever has traveled to Kakheti even once in his life will always associate this province with good wine and welcoming hospitality – Kakheti is a land famous for viticulture and winemaking. Farmers grow many kinds of grapes here and are skilled at producing a wide variety of high-quality wines.',
'tourDetailShort':'<h6>Routes: </h6><p> tbilisi-Tsinandali-Kvareli-tbilisi</p><h6>Tour Type: </h6><p> cultural,Monastery</p><h6>Food: </h6><p> two meals a day </p><h6>Placement: </h6><p> Overnight in a hotel for one night</p><h6>Duration: </h6><p>  1 night , 2 days </p><h6>Distance: </h6><p> </p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'2-Day tour in Kakheti ',
'tourDetailLong':'<ul><dt><p>1 day</p></dt><dd><p>1 Tsinandali</p></dd><dd><p>2 Old Shuamta</p></dd><dd><p>3 new shuamta</p></dd><dd><p>4 Ikalto</p></dd><dd><p>5 Overnight.</p></dd><dt><p>2 day</p></dt><dd><p>1 Gremi </p></dd><dd><p>2 Nekresi</p></dd><dd><p>3 alaverdi</p></dd><dd><p>4 Kvareli Lake</p></dd><dd><p>5 Wine tasting</p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a6,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/kaxeti/kaxeti14.jpg',
'descriptionImageURL':'images/website/kaxeti/kaxeti12.jpg',
'tourName':'Кахетия',
'aboutPlaceShort':'Кахетия является одним из самых красивых и отличающихся мест в Грузии. Кахетия- это регион расположенный вдоль восточной границы. Он граничит с Российской Федерацией с Севера и с Азербайджаном с Востока и Юга. Любой кто посещал Кахетию хотя бы раз в жизни будет ассоциировать его с хорошим вином и гостеприимством . Кахетия - это земля знаменитая виноградством и виноделием.Фермеры растят здесь множество сортов винограда, которые используются специалистами в производстве широкого разнообразия вина высшего качества.',
'tourDetailShort':'<h6>Маршруты: </h6><p>Тбилиси-Цинандали-Кварели-Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> Двухразовое питание</p><h6>размещение: </h6><p> Остановка в  отеле на 1 ночь</p><h6>продолжительность: </h6><p> 1 ночи, 2 дня</p><h6>расстояние: </h6><p> </p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Двухдневный тур по Кахетии',
'tourDetailLong':'<ul><dt><p>День 1</p></dt><dd><p>1.Цинандали</p></dd><dd><p>2. Старая Шуамта</p></dd><dd><p>3. Новая Шуамта</p></dd><dd><p>4. Икалто</p></dd><dd><p>5. Ночевка в госнице</p></dd><dt><p>День 2</p></dt><dd><p>1 Греми</p></dd><dd><p>2. Некреси</p></dd><dd><p>3. Алаверди</p></dd><dd><p>4. Озеро Кварели</p></dd><dd><p>5. Дегустация вина</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


//_______________________________GORI___________________________________________________
db.toursTable.insert({	
'tourID':a7,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/goriMain.jpg',
'descriptionImageURL':'images/website/goriDesc.jpg',
'tourName':'გორი',
'aboutPlaceShort':'გორი ერთ-ერთი უძველესი ქალაქია საქართველოში. სახელწოდება წარმოდგება ქალაქში აღმართული კლდოვანი გორაკისაგან, რომელზეც გაშენებულია ძველი ციხესიმაგრე.(გორის ციხე). გორის მთავარ ღირსშესანიშნაობათა შორისაა გორის ციხე, ისტორიულ-ეთნოგრაფიული მუზეუმი და ი. სტალინის სახლ-მუზეუმი. უფლისციხე, ატენის სიონი.',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილის-კასპი-ქარელი-გორი-თბილისი</p><h6>ტურის სახეობა: </h6><p> კულტურულi ,საეკლესიო</p><h6>კვება: </h6><p> არა</p><h6>განთავსება: </h6><p> არა</p><h6>ტურის ხანგრძლივობა: </h6><p> 1 დღე</p><h6>მანძილი: </h6><p> </p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'1 დღიანი ტური გორი',
'tourDetailLong':'<p>1. სამთავისის მონასტერი</p><p>2. ყინწვისის მონასტერი</p><p>3.სტალინის სახლ-მუზეუმი</p><p>4.უფლისციხე</p><p>5. ატენის სიონი</p>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a7,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/goriMain.jpg',
'descriptionImageURL':'images/website/goriDesc.jpg',
'tourName':'Gori',
'aboutPlaceShort':'Gori is one of the oldest cities of Georgia. The name comes from Georgian gora, that is, ‘a hill’ located in the city. Gori houses several historical and cultural landmarks, including the Gori Fortress, which is built on a cliffy hill overlooking the central part of the modern city, the historic-ethnographic museum, and the museum of Joseph Stalin. ',
'tourDetailShort':'<h6>Routes: </h6><p> Tbilisi-Kaspi-Qareli-Gori-tbilisi</p><h6>Tour Type: </h6><p> cultural,Monastery</p><h6>Food: </h6><p> No </p><h6>Placement: </h6><p> No</p><h6>Duration: </h6><p>  1  day </p><h6>Distance: </h6><p> </p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'one day tour in Gori',
'tourDetailLong':'<p>1 samtavisi Monastery</p><p>2 yinwvisi blue Monastery</p><p>3 Joseph Stalin Museum</p><p>4 Uplistsikhe</p><p>5 Ateni Sioni Church</p>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a7,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/goriMain.jpg',
'descriptionImageURL':'images/website/goriDesc.jpg',
'tourName':'Гори',
'aboutPlaceShort':'Гори один из древнейших городов Грузии. Среди главных достопримечательностей Гори можно выделить горийскую крепость, возвышающуюся на горе в самом центре города, историко-этнографический музей и дом-музей Сталина. Рядом с Гори так-же есть пещерный монастырь Уплисцихе и церковь Атенский Сион.',
'tourDetailShort':'<h6>Маршруты: </h6><p>Тбилиси-  Каспий  -Карели- Гори -Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> нет</p><h6>размещение: </h6><p> нет</p><h6>продолжительность: </h6><p> один день</p><h6>расстояние: </h6><p> </p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Однодневный тур в  Гори',
'tourDetailLong':'<p>1 Монастырь Самтависи</p><p>2 Синий Монастырь Кинцвиси</p><p>3 Музей Иосифа Сталина в Гори</p><p>4 Уплисцихе</p><p>5 Атени Сиони</p>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//_______________________________________xevsureti______________________________________
db.toursTable.insert({	
'tourID':a8,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/.jpg',
'descriptionImageURL':'images/website/xevsuretiDetail.jpg',
'tourName':'ხევსურეთი',
'aboutPlaceShort':'ხევსურეთი საქართველოს ისტორიულ-გეოგრაფიული მხარეა. იგი მდებარეობს აღმოსავლეთ საქართველოს მთიანეთში, კავკასიონის ქედის ჩრდილოეთ და სამხრეთ კალთებზე. კავკასიონის ქედი მას ორ ნაწილად ჰყოფს — პირიქითა და პირაქეთა ხევსურეთად. პირიქითა ხევსურეთი შედგება სამი ხეობისაგან: მიღმახევის, შატილის და არხოტის, პირაქეთა ხევსურეთი — არაგვის ხეობისაგან.',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილისი - ბარისახო - გუდანი  - დათვიჯვრის უღელტეხილი - ლებაისკარი -კისტანი - შატილი -მუცო-არდოტი-თბილისი</p><h6>ტურის სახეობა: </h6><p> ეკო ტური,კულტურულ ,შემეცნებითი</p><h6>კვება: </h6><p> ორჯერადი კვება</p><h6>განთავსება: </h6><p> დაბინავება ოჯახურ სასტუმროში</p><h6>ტურის ხანგრძლივობა: </h6><p> 1 ღამე , 2 დღე</p><h6>მანძილი: </h6><p> </p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'2 დღიანი ტური ხევსურეთი',
'tourDetailLong':'<ul><dt><p>1 დღე</p></dt><dd><p>1.ბარისახო</p></dd><dd><p>2.გუდანი</p></dd><dd><p>3.დათვიჯვრის უღელტეხილი </p></dd><dd><p>4 .ლებაისკარი</p></dd><dd><p>5.შატილი</p></dd><dd><p>6.დაბინავება ოჯახურ სასტუმროში</p></dd><dt><p>მე-2 დღე</p></dt><dd><p>1.ანატორის აკლდამები</p></dd><dd><p>2. მუცო</p></dd><dd><p>3.არდოტი </p></dd><dd><p>4. კორშა </p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a8,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/.jpg',
'descriptionImageURL':'images/website/xevsuretiDetail.jpg',
'tourName':'KHEVSURETI',
'aboutPlaceShort':'KHEVSURETI the historical geographical area. It is located in the eastern mountainous region of the Caucasus mountain range in the northern and southern slopes. The Caucasus mountain range divides into two parts - and Reversed Khevsureti. Khevsureti consists of three gorges: Migkhevi, Shatili, Arkhoti piraketa Khevsureti - Aragvi gorge.',
'tourDetailShort':'<h6>Routes: </h6><p> Tbilisi - Barisakho - gudani  - Datvisjvari pass- lebaiskari -kistani - shatili -muco-Ardoti-Tbilisi </p><h6>Tour Type: </h6><p> eco tour,cultural,Monastery</p><h6>Food: </h6><p> two meals a day  </p><h6>Placement: </h6><p> Overnight in a Family hotel for one nights</p><h6>Duration: </h6><p> 1 nights , 2 days</p><h6>Distance: </h6><p> </p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'2-Day tour in KHEVSURETI',
'tourDetailLong':'<ul><dt><p>Day 1</p></dt><dd><p>1.Barisakho</p></dd><dd><p>2.gudani</p></dd><dd><p>3.Datvisjvari pass</p></dd><dd><p>4 .lebaiskari</p></dd><dd><p>5.Shatili</p></dd><dd><p>6.nigiht in Shatili</p></dd><dt><p>Day 2</p></dt><dd><p>1.Anatori tomb</p></dd><dd><p>2. Mutso</p></dd><dd><p>3.Ardoti</p></dd><dd><p>4. korsha</p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a8,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/.jpg',
'descriptionImageURL':'images/website/xevsuretiDetail.jpg',
'tourName':'Хевсурети',
'aboutPlaceShort':'Хевсурети исторический географический район. Он расположен в восточной части горного региона Кавказского хребта в северных и южных склонах. Кавказский хребет разделяется на две части - и обращенно Хевсурети. Хевсурети состоит из трех ущелий: Migkhevi, Шатили, Архоти piraketa Хевсурети - Арагви ущелью.',
'tourDetailShort':'<h6>Маршруты: </h6><p>Тбилиси - Барисахо - Перевал Датвис Джвари - Лебаискари - Шатили - . Муцо - Ардоти-Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> Двухразовое питание</p><h6>размещение: </h6><p> Остановка в семейном отеле на1 ночь</p><h6>продолжительность: </h6><p> 1 ночи, 2 дня</p><h6>расстояние: </h6><p> </p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Двухдневный тур по Хевсурети',
'tourDetailLong':'<ul><dt><p>День 1:</p></dt><dd><p>1.Барисахо</p></dd><dd><p>2.Гудани</p></dd><dd><p>3.Перевал Датвис Джвари</p></dd><dd><p>4 .Лебаискари</p></dd><dd><p>5.Шатили</p></dd><dd><p>6. Ночевка в семейном отеле</p></dd><dt><p>День 2</p></dt><dd><p>1.Склепы Анатори</p></dd><dd><p>2. Муцо</p></dd><dd><p>3.Ардоти</p></dd><dd><p>4. Корша</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})

//_____________________________________IMERETI___________________________________________

db.toursTable.insert({	
'tourID':a9,
'languageID':geoID,
'effDate':new Date(),
'mainImageURL':'images/website/.jpg',
'descriptionImageURL':'images/website/imeretiDesc.jpg',
'tourName':'იმერეთი',
'aboutPlaceShort':'იმერეთი დასავლეთ საქართველოს ერთ-ერთი ისტორიულ-გეოგრაფიული მხარეა, მისი მთავარი ქალაქია ქუთაისი. იმერეთი შემოსაზღვრულია ჩრდილოეთიდან ლიხის ქედით, დასავლეთით მას მდინარე ცხენისწყალი ესაზღვრება, მისგან ჩრდილოეთით კავკასიონის ქედი, ხოლო სამხრეთით ფერსათის ანუ მესხეთის მთები მდებარეობს. იმერეთის დაბლობის ლანდშაფტები კოლხური მცენარეულობითაა დაფარული. იმერეთის ტყეები მდიდარია ცხოველებითა და ფრინველებით. იმერეთი ორ ნაწილად იყოფა - ზემო და ქვემო იმერეთი. ადმინისტრაციული ცენტრი - ქუთაისი. ',
'tourDetailShort':'<h6>მარშრუტი: </h6><p> თბილისი -საჩხერე- ქუთაისი - თბილისი</p><h6>ტურის სახეობა: </h6><p> ეკო ტური,კულტურულ ,შემეცნებითი</p><h6>კვება: </h6><p> ორჯერადი კვება</p><h6>განთავსება: </h6><p> დაბინავება  სასტუმროში</p><h6>ტურის ხანგრძლივობა: </h6><p> 1 ღამე , 2 დღე</p><h6>მანძილი: </h6><p> </p><h6>სატრანსპორტო საშუალება: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>ფასი: </h6><p> </p>',
'tourDetailShortHeaderName':'2 დღიანი ტური იმერეთში',
'tourDetailLong':'<ul><dt><p>1 დღე</p></dt><dd><p>1. კაცხის სვეტი</p></dd><dd><p>2.გელათის მონასტერი</p></dd><dd><p>3.მოწამეთა მონასტერი</p></dd><dd><p>4.სათაფლის მღვიმე</p></dd><dd><p>5.დაბინავება ოჯახურ სასტუმროში</p></dd><dt><p>მე-2 დღე</p></dt><dd><p>1ბაგრატის ტაძარი</p></dd><dd><p>.ვანის ნაქალაქევი</p></dd><dd><p>3. ბაღდათი</p></dd><dd><p>4.ღვინის დეგუსტაცია</p></dd><dd><p>5.იარაღის მუზეუმი </p></dd></ul>',
'tourDetailLongHeaderName':'ტურის დეტალური აღწერა',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a9,
'languageID':engID,
'effDate':new Date(),
'mainImageURL':'images/website/.jpg',
'descriptionImageURL':'images/website/imeretiDesc.jpg',
'tourName':'Imereti',
'aboutPlaceShort':'  Imereti in western Georgia is one of the historical and geographical area, the main city of Kutaisi. Imereti Likhi Range to the north, it is bordered to the west it is bordered by the river Tskhenistskali, the Caucasus mountain range to the north, while the south of the Meskhetian Persati Mountains located. Imereti lowland landscapes Colchis mtsenareulobitaa covered. Imereti forests are rich in animals and birds. Imereti is divided into two parts - upper and lower Imereti. The administrative center - Kutaisi.',
'tourDetailShort':'<h6>Routes: </h6><p> Tbilisi -Sachkhere- Kutaisi - Tbilisi </p><h6>Tour Type: </h6><p> eco tour,cultural,Monastery</p><h6>Food: </h6><p> two meals a day  </p><h6>Placement: </h6><p> Overnight in a  hotel for one nights</p><h6>Duration: </h6><p> 1 nights , 2 days</p><h6>Distance: </h6><p> </p><h6>Transport: </h6><p>  Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>Price: </h6><p> </p>',
'tourDetailShortHeaderName':'2 day Tour imereti',
'tourDetailLong':'<ul><dt><p>1 დღე</p></dt><dd><p>1. კაცხის სვეტი</p></dd><dd><p>2.გელათის მონასტერი</p></dd><dd><p>3.მოწამეთა მონასტერი</p></dd><dd><p>4.სათაფლის მღვიმე</p></dd><dd><p>5.დაბინავება ოჯახურ სასტუმროში</p></dd><dt><p>მე-2 დღე</p></dt><dd><p>1ბაგრატის ტაძარი</p></dd><dd><p>.ვანის ნაქალაქევი</p></dd><dd><p>3. ბაღდათი</p></dd><dd><p>4.ღვინის დეგუსტაცია</p></dd><dd><p>5.იარაღის მუზეუმი </p></dd></ul>',
'tourDetailLongHeaderName':'Tour Details',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})


db.toursTable.insert({	
'tourID':a9,
'languageID':rusID,
'effDate':new Date(),
'mainImageURL':'images/website/.jpg',
'descriptionImageURL':'images/website/imeretiDesc.jpg',
'tourName':'Имерети',
'aboutPlaceShort':'Имеретинский в Западной Грузии является одним из историко-географической области, главный город Кутаиси. Имеретия Ликхи Range на север, она граничит на западе она граничит с рекой Цхенисцкали, Кавказский хребет на север, в то время как к югу от месхетинцев Persati гор расположен. Имеретинская низменность ландшафты Колхида mtsenareulobitaa покрыты. Имеретинки леса богаты животных и птиц. Имеретия делится на две части - верхнюю и нижнюю Имеретии. Административный центр - Кутаиси. ',
'tourDetailShort':'<h6>Маршруты: </h6><p>Тбилиси -Сачхере -Кутаиси-Тбилиси</p><h6>Тип тура: </h6><p> культурный,церковь</p><h6>питание: </h6><p> Двухразовое питание</p><h6>размещение: </h6><p> Остановка в  отеле на1 ночь</p><h6>продолжительность: </h6><p> 1 ночи, 2 дня</p><h6>расстояние: </h6><p> </p><h6>Транспорт: </h6><p> Mitsubishi delica (4x4) , nissan xterra (4x4)</p><h6>цена: </h6><p> </p>',
'tourDetailShortHeaderName':'Двухдневный тур в Имерети',
'tourDetailLong':'<ul><dt><p>День 1</p></dt><dd><p>1. Столп Кацхи</p></dd><dd><p>2.Монастырь Гелати и Гелатская академия</p></dd><dd><p>3.Монастырь Моцамета</p></dd><dd><p>4. Сатаплия</p></dd><dd><p>5 Ночь в семейном отеле</p></dd><dt><p>День 2:</p></dt><dd><p>1.Храм Баграта</p></dd><dd><p>2.Нокалакеви Вани</p></dd><dd><p>3. Багдад</p></dd><dd><p>4. Дегустация вина</p></dd><dd><p>5. Музей старого оружия</p></dd></ul>',
'tourDetailLongHeaderName':'Oписание тура:',
'tourPrice':'150',
'tourPriceCurrency':'GEL',
'MainPageFlag':'Y',
'galeryID':galeryID,
})





//_______________________________________________________________________________________
raceID=new ObjectId()
db.raceTable.insert({
	'raceID':raceID,
	'languageID':engID,
	'effDate':new Date(),
	'raceName':'Gudauri',
	'raceDescription':'Travel 25 GEL',
	'imageURL':'images/website/gudauri.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':geoID,
	'effDate':new Date(),
	'raceName':'გუდაური',
	'raceDescription':'მგზავრობა 25 ლარი',
	'imageURL':'images/website/gudauri.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':rusID,
	'effDate':new Date(),
	'raceName':'Гудаури',
	'raceDescription':'Поездка 25 лари',
	'imageURL':'images/website/gudauri.jpg'
})


raceID=new ObjectId()
db.raceTable.insert({
	'raceID':raceID,
	'languageID':engID,
	'effDate':new Date(),
	'raceName':'BAKURIANI',
	'raceDescription':'Travel 25 GEL',
	'imageURL':'images/website/bakuriani.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':geoID,
	'effDate':new Date(),
	'raceName':'ბაკურიანი',
	'raceDescription':'მგზავრობა 25 ლარი',
	'imageURL':'images/website/bakuriani.jpg'
})
db.raceTable.insert({
	'raceID':raceID,
	'languageID':rusID,
	'effDate':new Date(),
	'raceName':'БАКУРИАНИ',
	'raceDescription':'Поездка 25 лари',
	'imageURL':'images/website/bakuriani.jpg'
})

//___________________________________________________________________________________________________

