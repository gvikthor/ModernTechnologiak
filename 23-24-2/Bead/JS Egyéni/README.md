# Moderntech 2. Egyéni JS Beadandó
## Kiinduló oldal
Az elkészítendő oldal egy egyszemélyes gyűjtögetős játék. A feladat szövegébe cicagyűjtögetésről írtam, de tetszés szerint átalakíthatod törpékkel arany gyűjtögetésre, fehérvérsejtekkel betolakodó evésre, Timothée Chalamet-vel Fremen toborzásra; vagy bármi másra, amit ki tudsz találni.

Kiinduló file-ok nincsenek, azonban segítségként bármi használható GitHubról (is): [https://bit.ly/mtech-thor](https://bit.ly/mtech-thor)

A megoldáshoz HTML-t, CSS-t és JavaScriptet használj, egyéb megkötés nincs - tehát csinálhatod canvas vagy táblázatos megoldással, nézet+modellel vagy spagetti kóddal (vagy épp bárhogy máshogy, ahogy eszedbe jut). Viszont érdemes előtte megtervezni és átgondolni, mit szeretnél. Akár papírra rajzold fel, hogy milyen események történhetnek, azok milyen hatással lehetnek a játék állapotára, mi változik ilyenkor stb.

## Beadás
Egy darab ZIP filet tölts fel Canvasre, ami tartalmazza a HTML, CSS és JS fileokat, **plusz** a `readme.txt` file-t is.

Határidő **május 13. 23:59**

Readme file:
- Ez egy egyszerű file, amiben be tudod jelölni, hogy szerinted mi van kész, mibe kezdtél bele és ér pontot szerinted, mihez nem nyúltál.
- Azért segítség neked is, mert ha egy funkciót elkezdtél, de nem veszem észre, akkor ebben feltűnik, hogy keressem, így sokkal valószínűbb, hogy minden részpontot megkapsz, ami csak járhat.
- Ha valami készen van, `x` jelet tegyél mellé, ha csak belekezdtél, de nem sikerült befejezni (még hibát produkál, vagy bizonyos esetekben nem működik), `.` jelet.
Például:
```
Kovács Gergő - R1K2T3
[x] 2 pont - Főmenü
[x] 3 pont - Szín kiválasztása
[.] 2 pont - Ecsetvastagság kiválasztása
[ ] 4 pont - AI integrálása az alkalmazásba
```

Üres:
```
[ ] 1 pont - Kezdőlap: A kezdőoldal megjelenik, a játékról valamilyen rövid leírás olvasható.
[ ] 2 pont - Kezdőlap: Egy gomb megnyomására eltűnik a leírás és megjelenik a játéktér.
[ ] 2 pont - Kezdőlap: Egy input mezőben megadhatunk egy játékos nevet, ami a játék során megjelenik alamilyen köszönésben, címben, vagy egyéb látható helyen (például: Peti pontjai: 5)

[ ] 1 pont - Játéktér: Megjelenik egy szöveg, ami kiírja, hogy eddig 0 másodperc telt el, és 0 pontot gyűjtött a játékos.
[ ] 2 pont - Játéktér: Megjelenik egy (15x15 mezőből álló) játéktábla, aminek minden mezője alapértelmezett típusú (például: erdő, szőnyeg).
[ ] 2 pont - Játéktér: Megjelennek akadály típusú (nem alapértelmezett típusú) mezők is (például: víz, bútorok)
[ ] 1 pont - Játéktér: Megjelenik a játékos bábuja a játéktér közepén.
[ ] 3 pont - Játéktér: A nyilakat, és/vagy a `wasd` billentyűket használva a játékos bábujával lehessen lépkedni.
[ ] 3 pont - Játéktér: A játékos ne tudjon kilépni a pályáról.
[ ] 3 pont - Játéktér: A játékos ne léphessen akadály típusú mezőre.

[ ] 4 pont - Játékmenet: Bizonyos időközönként egy újabb cica megjelenik egy-egy véletlenszerű mezőn. Nem jelenhet meg cica foglalt mezőn, vagy nem alapértelmezett típusú mezőn.
[ ] 3 pont - Játékmenet: Ha a játékos rálép egy cicára, az a cica tűnjön el.
[ ] 3 pont - Játékmenet: Ha a játékos rálép egy cicára, növeljük a pontjait.
[ ] 2 pont - Játékmenet: Számold az eltelt másodperceket.
[ ] 3 pont - Játékmenet: Lehessen szüneteltetni a játékot. Ilyenkor ne teljen az idő, ne lehessen lépni és ne kerüljenek le új cicák.

[ ] 3 pont - Extra: A kezdőoldalon paraméterekkel (input mezőkkel) lehessen megadni a tábla méretét, a cicák spawn gyakoriságát, egy cica összegyűjtésének pontértékét.
[ ] 2 pont - Extra: A játéktáblán egyszerre legfeljebb 3 macska lehessen lent.
[ ] ½ pont - Extra: Ez is megadható a kezdőoldalon paraméterként.
[ ] 3 pont - Extra: Az időnek 60 másodperc legyen a felső határa, amit, ha elérünk, a játéknak vége. Eddig az időpontig össze kell gyűjteni 10 pontot. Ha ez sikerül, a játékos nyert, egyébként veszített.
[ ] ½ pont - Extra: Ezek is megadhatók a kezdőoldalon paraméterként.
[ ] 4 pont - Extra: A pálya felépítését (alap- és akadály mezők kiosztása) a kezdőoldalon lehessen megadni, például egy szövegmezővel, vagy táblázattal.
[ ] 4 pont - Extra: Különböző típusú cicák spawnolnak más-más pontértékkel: a házimacska 1 pont, a tigris 2 pont, az oroszlán 3 pont.
[ ] 1 pont - Extra: A cicák típusa és pontértéke a kezdőoldalon megadható, pl. táblázatosan.
[ ] 4 pont - Extra: Legyen egy harmadik mezőtípus, a lassító (például: sivatag, szétszórt lego). Erre rá tud lépni a játékos, de ha rálép, 2 másodpercig nem tud semerre tovább mozogni. A beragadási idő eltelését tized másodpercenként jelezzük egy külön helyen (vagy a mezőn közvetlenül, bár ez bonyolultabb).
[ ] ½ pont - Extra: Ennek az időtartamnak a hossza is megadható a kezdőoldalon paraméterként.
```

## Alap feladatok (35 pont)
Ezekből minimum 14-et kötelező elérni. Amíg az nincs meg, az extra feladatokból pont nem szerezhető! Érdemes elolvasni az extra feladatokat is, hogy előre tudj velük tervezni esetleg (például dinamikus játéktábla méret).

### Kezdőlap (5 pont)
- 1 pont: A kezdőoldal megjelenik, a játékról valamilyen rövid leírás olvasható.
- 2 pont: Egy gomb megnyomására eltűnik a leírás és megjelenik a játéktér.
- 2 pont: Egy input mezőben megadhatunk egy játékos nevet, ami a játék során megjelenik alamilyen köszönésben, címben, vagy egyéb látható helyen (például: Peti pontjai: 5)

### Játéktér (15 pont)
- 1 pont: Megjelenik egy szöveg, ami kiírja, hogy eddig 0 másodperc telt el, és 0 pontot gyűjtött a játékos.
- 2 pont: Megjelenik egy (15x15 mezőből álló) játéktábla, aminek minden mezője alapértelmezett típusú (például: erdő, szőnyeg).
- 2 pont: Megjelennek akadály típusú (nem alapértelmezett típusú) mezők is (például: víz, bútorok)
    - *Ez egyelőre lehet beégetve egy tömbben például.*
- 1 pont: Megjelenik a játékos bábuja a játéktér közepén.
- 3 pont: A nyilakat, és/vagy a `wasd` billentyűket használva a játékos bábujával lehessen lépkedni.
- 3 pont: A játékos ne tudjon kilépni a pályáról.
- 3 pont: A játékos ne léphessen akadály típusú mezőre.

### Játékmenet (15 pont)
- 4 pont: Bizonyos időközönként egy újabb cica megjelenik egy-egy véletlenszerű mezőn. Nem jelenhet meg cica foglalt mezőn, vagy nem alapértelmezett típusú mezőn.
    - *Tipp: Feleslegesen bonyolult, ha előbb szűröd, melyik mezőkre lehet cicát rakni, és utána abból sorsolsz véletlent. Egyszerűbb, ha csak az egész táblán random, és ha oda nem lehet lerakni, akkor most nem kerül le cica, na bumm. Így egyre lassabban kerülnek le új macskák a statisztika működése miatt, hiszen egyre több mező lesz foglalt, de ez még jó is nekünk.*
- 3 pont: Ha a játékos rálép egy cicára, az a cica tűnjön el.
- 3 pont: Ha a játékos rálép egy cicára, növeljük a pontjait.
- 2 pont: Számold az eltelt másodperceket.
- 3 pont: Lehessen szüneteltetni a játékot. Ilyenkor ne teljen az idő, ne lehessen lépni és ne kerüljenek le új cicák.

## Extra feladatok (max 10 pont)
Legfeljebb 10 pont szerezhető az extra feladatokból, még akkor is, ha az alap feladatokkal nem szereztél 35 pontot - tehát, ha van 18 alap pontod, és megcsinálsz 15 pontnyi feladatot az extra feladatokból, akkor nem 33 pontod lesz, hanem 28. (Ez azért van így, hogy az alapok széleskörű megértését jobban ösztönözzük, mint a specifikusan mélyebb, de szűkebb tudást. Ettől függetlenül persze nagyon örülünk, ha többet is meg tudsz csinálni, mert nagyon sokat lehet ezekből tanulni.)
- 3 pont: A kezdőoldalon paraméterekkel (input mezőkkel) lehessen megadni a tábla méretét, a cicák spawn gyakoriságát, egy cica összegyűjtésének pontértékét.
- 2 pont: A játéktáblán egyszerre legfeljebb 3 macska lehessen lent.
    - *+0.5 pont: Ez is megadható a kezdőoldalon paraméterként.*
- 3 pont: Az időnek 60 másodperc legyen a felső határa, amit, ha elérünk, a játéknak vége. Eddig az időpontig össze kell gyűjteni 10 pontot. Ha ez sikerül, a játékos nyert, egyébként veszített.
    - *+0.5 pont: Ezek is megadhatók a kezdőoldalon paraméterként.*
- 4 pont: A pálya felépítését (alap- és akadály mezők kiosztása) a kezdőoldalon lehessen megadni, például egy szövegmezővel, vagy táblázattal.
- 4 pont: Különböző típusú cicák spawnolnak más-más pontértékkel: a házimacska 1 pont, a tigris 2 pont, az oroszlán 3 pont.
    - *+1 pont: A cicák típusa és pontértéke a kezdőoldalon megadható, pl. táblázatosan.*
- 4 pont: Legyen egy harmadik mezőtípus, a lassító (például: sivatag, szétszórt lego). Erre rá tud lépni a játékos, de ha rálép, 2 másodpercig nem tud semerre tovább mozogni. A beragadási idő eltelését tized másodpercenként jelezzük egy külön helyen (vagy a mezőn közvetlenül, bár ez bonyolultabb).
    - *+0.5 pont: Ennek az időtartamnak a hossza is megadható a kezdőoldalon paraméterként.*