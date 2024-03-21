# Moderntech 2. Csoportos JS Beadandó
## Kiinduló oldal
A kiinduló oldal egy jelszóellenőrző. A felhasználó beír valamilyen jelszót, és ezt követően egy gombot megnyomva az oldal kijelzi, mennyire biztonságos az adott jelszó.

Kiinduló fileok githubon: [https://bit.ly/mtech-thor](https://bit.ly/mtech-thor)

A szabályokat a `passwordRules` tömbben gyűjtjük. Minden szabály egy objektum a következő attribútumokkal:
- `author` : Ki készítette ezt a szabályt
- `title` : A szabály címe
- `description` : A szabály leírása
- `severity` : `error` vagy `warning`, attól függően, hogy az adott feltételnek kötelező megfelelni, vagy csak ajánlott.
- `penalty` : A büntetőpontok mértéke, ha az adott szabálynak nem felel meg a jelszó. A jelszó erőssége egy egész pont a [0,10] intervallumban. 10-ről indul, és minden nem teljesített feltétel levon ebből. A `penalty` nem feltétlen egész szám, hiszen azok a tizedesek is fel tudnak ám halmozódni összeadásnál.
- `isInDanger` : Egy függvény, ami paraméterül megkapja a jelszót, és visszaadja eredményül, hogy veszélyes-e a jelszó ebben a tekintetben (`true`, vagyis a jelszó rossz), vagy biztonságos (`false`, vagyis a jelszóval nincs hiba, már amennyire ezt a szabályt érdekli).

A feladatotok ilyen szabályokat gyártani.

## Beadás
A csapat minden tagja töltsön fel valamit:
- Egy valaki a teljes megoldást (részletek lentebb)
- A többiek egy-egy txt filet, aminek a neve a csapattagok neptun kódja (pl.: `ABC123-QWERTZ-J1K2L3.txt`)

Teljes megoldás:
- Ha egyszerre adjátok be az 1. és a 2. kört is az első határidőre, akkor elég az egészet egybe bezippelni és feltölteni.
- Ha a második kört a későbbi határidőre adjátok be, akkor töltsétek fel az első határidőig bezippelve az 1. kör megoldását, majd ugyanaz az ember írja felül a beadott munkát egy új zippel, amikor beadja a 2. kört a későbbi határidőre.

Határidók:
- 1.Kör: április 11. 23:59
- 2.Kör: április 15. 23:59

## 1. Kör: Erősen specifikált feladatok (max 6 pont)
A munkát úgy osztjátok fel egymás közt, ahogy csak szeretnétek. A cél, hogy mindenki kb ugyanannyit dolgozzon, de ti érzitek, kinek mennyire van energiája/ideje.

### Szabályok
Annyit csináltok meg belőle, amennyit szeretnétek. Legfeljebb 6 pont szerezhető.

|Pont|Feladat|`severity`|`penalty`|
|-|-|-|-|
|0,5|Tartalmazzon számot|error|5|
|0,5|Legyen benne nagybetű is és kisbetű is|error|5|
|0,5|Legyen legalább 8 karakter hosszú|error|5|
|0,5|Ne szerepeljen benne a `jelszo` kifejezés (se kisbetűkkel, se nagybetűkkel, se az elején, se a közepén, se sehogy)|error|8|
|0,5|A jelszó ne kezdődjön és végződjön whitespace karakterrel (nem nyomtatható karakter)|warning|2|
|1|Legyen benne speciális karakter (`!"#$%&'()*+,-./:;<=>?@[]\^_{}~` ezek valamelyike)|warning|5|
|1|Ne tartalmazzon keresztnevet(csak ebből a limitált lisából: `Gergő, Péter, Áron, Rezső, Lilla, Dalma, Bálint, Laura, Károly, Míra`; se nagybetűsen, se kisbetűsen, se sehogy)|warning|3|
|1|A jelszóban a számjegyek összege ne legyen 5-tel osztható|warning|1|
|2|Annyi hibapontot adjunk, amennyiszer kettő karakterrel rövidebb a jelszó, mint 16 karakter - tehát, ha a jelszó `Almafa123`, ami 9 karakter, akkor 3.5 hibapontot adunk, mert: `(16-9)/2`. Ha hosszabb, akkor legyen fordítva elszámolva (tehát növekszik a jelszó erőssége)!|warning|?|
|2|A jelszó ne tartalmazzon egymás után növekvő számjegyeket, pl `alma4567fa`|warning|3|
|2|Bárhogy is változtatjuk a betűket számokká, a jelszóban ne szerepeljen se a `password`, se a `jelszo` szó, például: `passw0rd`, `pa55word`, `paS5W0rd`, `p4ssword`, `j31szo`, `JEL52O`. A betűmegfeleltetések: `o/O : 0`, `l/L : 1`, `z/Z : 2`, `e/E : 3`, `a/A : 4`, `s/S : 5`  |warning|3|

*Fun fact, egyébként a komplexitási követelmények kifejezetten ellenjavaltak alkalmazásokban az amerikai technológiai hivatal (NIST) irányelvei szerint: Complexity requirements — like requiring special characters, numbers or uppercase letters — should not be used. Részletek: [https://blog.netwrix.com/2022/11/14/nist-password-guidelines/](https://blog.netwrix.com/2022/11/14/nist-password-guidelines/)*

### Segítség
Népszerű stringfüggvények a kisbetűssé és nagybetűssé alakító függvények.
```JS
'aLmA'.toLowerCase() // 'alma'
'aLmA'.toUpperCase() // 'ALMA'
```

Gyakran előfordul a körbevágó függvény, ami leszedi a string széleiről a szóközöket és egyéb hasonló karaktereket.
```JS
'   alma      '.trim() // 'alma'
```

Egy másik kedvelt string függvény az `includes`.
```JS
'alma'.includes('a') // true
```

Ha megírnánk az `includes`-t tömbfüggvénnyel, kicsit változtatni kell, mert a stringek nem tömbök, de azzá alakíthatóak.
```JS
'alma'.some(char => char == 'a') // hiba
Array.from('alma').some(char => char == 'a') // true
```

Karakterek indexét is lehet vizsgálni tömbökben. (Az alábbi például azt nézi meg, hogy a szövegben csak páratlan helyen állhat `Z` betű, egytől indexelve indexelve)
```JS
Array.from('abcZabc').every((char, index) => char != 'Z' || (index+1)%2 == 1) // false
```

Nem javaslom, hogy reguláris kifejezést használjatok, mert bonyolult tud lenni, de ha valaki beleöli az energiát, hogy megismerje, nagyon sok feladat megoldható velük igazán egyszerűen.
Resource-ok:
- [http://vbence.web.elte.hu/regex_leiras.html](http://vbence.web.elte.hu/regex_leiras.html)
- [https://regexr.com/](https://regexr.com/)
- [https://people.inf.elte.hu/csa/regkif.htm](https://people.inf.elte.hu/csa/regkif.htm)
```JS
let regex = /[0-9]pingvin/ // javascriptben két perjel / közé kell tenni a reguláris kifejezést

regex.test('alma') // false
regex.test('pingvin') // false

regex.test('5pingvin') // true
regex.test('8pingvin') // true
regex.test('16pingvin') // true

regex.test('pingvin5') // false
regex.test('5-pingvin') // false
```

## 2. Kör: Szabadabban értelmezhető feladatok (max 4 pont)
Ezeket a feladatokat szabadabban értelmezhetitek. Módosítsátok hozzá nyugodtan a HTML-t, CSS-t, JavaScriptet ahol szeretnétek. Célszerű szétszedni, hogy mindenki másik funkciót valósít meg, de csinálhatjátok közösen összeülve is. (Itt vannak persze olyan dolgok, amik el fognak felejtődni, ha bezárod az oldalt, ez nem baj, nem kell vele törődni, csak addig kell megjegyezve lenniük, amíg meg van nyitva.)
- 1 pont: Ha rányomunk a `Check` gombra, az adott jelszó és a pontértéke kerüljön bele egy listába az errorok/warningok alá (tehát visszanézhetjük, miket írogattunk be eddig).
- 1 pont: Ne csak akkor ellenőrizzük a jelszó erősségét, ha valaki megnyomja a check gombot, hanem bármilyen új inputra a jelszó mezőben (tehát gombnyomásonként)
- 1 pont: A kielégített szabályokat a warning/error listában tűntessük fel valamilyen zöld színű kártyában.
- 2 pont: Legyen egy `x` gomb a warningokon (de az errorokon ne), amivel kikapcsolhatjuk az adott warningot (tehát innentől kezdve azt nem ellenőrzi az oldal, nem számít a pontokba, nem is írja ki, nem jelenik meg).
- 2 pont: A karikák tudjanak fél pontot is kijelezni (ezt egy külön CSS osztállyal érdemes megoldani, amiben egy éles határú gradiens van, de bármilyen kreatív megoldás is megfelelő)
- 2 pont: A jelszó mező kezdetben legyen inaktív. Egy start gombot megnyomva a felhasználónak csak 5 másodperce legyen jelszót megadni, utána váljon újra inaktívvá a jelszó mező.