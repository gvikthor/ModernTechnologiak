# Moderntech 2. PHP Beadandó
## Kiinduló oldal
Az órán nézett filmes oldal adja a kiinduló logikát, azonban átalakíthatod, hogy a neked tetsző témában működjön - a lényeg, hogy a funkciók jelen legyenek.

Segítségként bármi használható GitHubról (is): [https://bit.ly/mtech-thor](https://bit.ly/mtech-thor)

## Beadás
Egy darab ZIP filet tölts fel Canvasre, ami tartalmazza a HTML, CSS és JS fileokat, **plusz** a `readme.txt` file-t is.

Határidő **július 1. 23:59**

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
[ ] 2 pont - Filmek: Listázódik az összes tárolt film egy táblázatban. Cím, megjelenés éve, rendező.
[ ] 3 pont - Filmek: Egy film címére kattintva meg tudjuk nyitni a részletező oldalát, ahol az összes adat megjelenik. Cím, megjelenés éve, rendező, színészek, leírás, kép.
[ ] 4 pont - Filmek: A részletező oldalon legyen lehetőség szerkeszteni a filmet.
[ ] 3 pont - Filmek: Egy oldalon, vagy a főoldalon lehet új filmet hozzáadni.
[ ] 2 pont - Filmek: A részletező oldalon egy kuka gombbal törölni lehet a filmet.

[ ] 3 pont - Felhasználókezelés: Felhasználónév, jelszó és "jelszó megint" megadásával lehet regisztrálni.
[ ] ½ pont - Felhasználókezelés: A két jelszó egyezik.
[ ] ½ pont - Felhasználókezelés: A jelszó erősségét vizsgálod: Minimum 12 karakter.
[ ] 1 pont - Felhasználókezelés: A jelszó erősségét vizsgálod: Van benne kisbetű és nagybetű.
[ ] 1 pont - Felhasználókezelés: Sikeres regisztráció után legyünk automatikusan bejelentkeztetve az új felhasználóval.
[ ] 2 pont - Felhasználókezelés: Felhasználónév és jelszó megadásával be lehet jelentkezni.
[ ] 1 pont - Felhasználókezelés: Ki lehet jelentkezni.

[ ] 1 pont - Jogosultságok: Minden felhasználónak van egy jogköre: normál, moderátor, admin
[ ] 3 pont - Jogosultságok: Filmet szerkeszteni, hozzáadni és törölni csak ejelentkezett moderátor és admin tud.
[ ] 2 pont - Jogosultságok: Az admin nézhesse meg a felhasználók listáját.
[ ] 3 pont - Jogosultságok: Az admin állíthassa át a felhasználók jogkörét.

[ ] 3 pont - Hibaüzenetek: Mindenhol, ahol a felhasználó űrlapot tölt ki, legyenek korrekt hibaüzenetek.

[ ] 3 pont - Extra: A filmeknek legyenek címkéi (pl. scifi, dráma, fantasy), akár több is, amik jelenjenek meg a listában és a részletező oldalon is.
[ ] 4 pont - Extra: Legyen a főoldalon keresőmező, amivel szűrhetünk címre, rendezőre, évtartományra (címkére).
[ ] 5 pont - Extra: A filmeknek legyen értékelése (1-től 10-ig), és a bejelentkezett felhasználók értékelhessék a filmeket.
[ ] 6 pont - Extra: A filmekhez lehessen kommenteket írni. A kommenteken látszódjon, ki írta és mikor.
[ ] 4 pont - Extra: Legyenek prémium filmek és prémium jogkörű felhasználók. A prémium filmeket csak a prémium felhasználók látják (+mod és admin értelemszerűen). A részletező oldalukat is csak prémium felhasználó nyithassa meg. Kommentelés és értékelés, ha megcsináltad, szintén legyen korlátozva.
```

## Alap feladatok (35 pont)
Ezekből minimum 14-et kötelező elérni. Amíg az nincs meg, az extra feladatokból pont nem szerezhető! Érdemes elolvasni az extra feladatokat is, hogy előre tudj velük tervezni esetleg.

### Filmek (14 pont)
- 2 pont: Listázódik az összes tárolt film egy táblázatban.
    - Cím, megjelenés éve, rendező.
- 3 pont: Egy film címére kattintva meg tudjuk nyitni a részletező oldalát, ahol az összes adat megjelenik.
    - Cím, megjelenés éve, rendező, színészek, leírás, kép.
- 4 pont: A részletező oldalon legyen lehetőség szerkeszteni a filmet.
    - Lehet közvetlen az oldal alján egy űrlap.
    - Vagy lehet egy gomb, ami egy szerkesztő oldalra irányít.
    - Lehet minden tulajdonság mellett egy ceruza ikon, amivel az a tulajdonság szerkeszthető (ehhez JS is kelleni fog, kicsit bonyolult, mert fetch kell hozzá).
    - Vagy bármi értelmes szerkesztési mód, ami eszedbe jut.
- 3 pont: Egy oldalon, vagy a főoldalon lehet új filmet hozzáadni.
- 2 pont: A részletező oldalon egy kuka gombbal törölni lehet a filmet.

### Felhasználókezelés (9 pont)
- 3 pont: Felhasználónév, jelszó és "jelszó megint" megadásával lehet regisztrálni.
- 0.5 pont: A két jelszó egyezik.
- 0.5 pont: A jelszó erősségét vizsgálod: Minimum 12 karakter.
- 1 pont: A jelszó erősségét vizsgálod: Van benne kisbetű és nagybetű.
- 1 pont: Sikeres regisztráció után legyünk automatikusan bejelentkeztetve az új felhasználóval.
- 2 pont: Felhasználónév és jelszó megadásával be lehet jelentkezni.
- 1 pont: Ki lehet jelentkezni.

### Jogosultságok (9 pont)
- 1 pont: Minden felhasználónak van egy jogköre: normál, moderátor, admin
- 3 pont: Filmet szerkeszteni, hozzáadni és törölni csak ejelentkezett moderátor és admin tud.
- 2 pont: Az admin nézhesse meg a felhasználók listáját.
- 3 pont: Az admin állíthassa át a felhasználók jogkörét.

### Hibaüzenetek (3 pont)
- 3 pont: Mindenhol, ahol a felhasználó űrlapot tölt ki, legyenek korrekt hibaüzenetek.

## Extra feladatok (max 10 pont)
Legfeljebb 10 pont szerezhető az extra feladatokból, még akkor is, ha az alap feladatokkal nem szereztél 35 pontot - tehát, ha van 18 alap pontod, és megcsinálsz 15 pontnyi feladatot az extra feladatokból, akkor nem 33 pontod lesz, hanem 28. (Ez azért van így, hogy az alapok széleskörű megértését jobban ösztönözzük, mint a specifikusan mélyebb, de szűkebb tudást. Ettől függetlenül persze nagyon örülünk, ha többet is meg tudsz csinálni, mert nagyon sokat lehet ezekből tanulni.)
- 3 pont: A filmeknek legyenek címkéi (pl. scifi, dráma, fantasy), akár több is, amik jelenjenek meg a listában és a részletező oldalon is.
- 4 pont: Legyen a főoldalon keresőmező, amivel szűrhetünk címre, rendezőre, évtartományra (címkére).
- 5 pont: A filmeknek legyen értékelése (1-től 10-ig), és a bejelentkezett felhasználók értékelhessék a filmeket.
    - Egy felhasználónak egy filmhez csak egy értékelése tartozhat, de szerkesztheti azt.
- 6 pont: A filmekhez lehessen kommenteket írni. A kommenteken látszódjon, ki írta és mikor.
    - Date segítség: [https://www.php.net/manual/en/function.date.php](https://www.php.net/manual/en/function.date.php)
- 4 pont: Legyenek prémium filmek és prémium jogkörű felhasználók. A prémium filmeket csak a prémium felhasználók látják (+mod és admin értelemszerűen). A részletező oldalukat is csak prémium felhasználó nyithassa meg. Kommentelés és értékelés, ha megcsináltad, szintén legyen korlátozva.