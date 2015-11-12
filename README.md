# Receptek - 1. beadandó - Alkalmazások fejlesztése
  Megvalósítás: Szerveroldali technológiák segítségével

## I. Követelményanalízis
  - Funkcionális elvárások:
      Felhasználóként szeretném elmenteni a receptjeimet, és később visszanézni őket. (Receptek felvitele és listázása)
  - Nem funkcionális követelmények:
      Felhasználóbarát kinézet, egyszerű és egyértelmű navigáció.
      Biztonságos működés - jelszóval védett tartalom.
  - Szerepkörök:
      
      Vendég: Csak a főoldal érhető el számára, lehetősége van regisztrálni.

      Felhasználó: Bejelentkezhet a felhasználónevével és jelszavával, ezután láthatóvá válnak a feltöltött receptjei.
  - Használati eset diagram:
      ![haszn_eset](https://cloud.githubusercontent.com/assets/14230720/11021275/576fcb1e-863c-11e5-9733-21bfd4ca0aa6.png)

  - Receptfelvételi folyamat pontos menete:
      
      ![act_diagram](https://cloud.githubusercontent.com/assets/14230720/11021339/b27b0eb8-863e-11e5-95ff-02f2550565f1.png)


## II. Tervezés
  1. Architektúra terv:
    * Oldaltérkép:
        - Publikus: Főoldal, Bejelentkezés, Regisztráció
        - Felhasználói: Főoldal, Bejelentkezés, Kilépés, Receptlista, Új receptek felvitele

    * Végpontok:
        - GET /: főoldal
        - GET /login: bejelentkezés
        - GET /login/signup: regisztráció
        - GET /recipes/list: receptlista
        - GET /recipes/new: új recept felvitele
        - GET /logout: kilépés
        - GET /recipes/edit:id : {id} azonosítójú recept szerkesztése
        
        - POST /login: bejelentkezési adatok elküldése
        - POST /login/signup: regisztrációs adatok elküldése
        
        - POST /recipes/new: új recept felvitele, adatok elküldése
        - POST /recipes/edit:id : {id} azonosítójú recept szerkesztésének elmentése
        
  2. Felhasználóifelület-modell:
    * Oldalvázlatok:
        
      ![uj_recept](https://cloud.githubusercontent.com/assets/14230720/11021511/701e471a-8643-11e5-9e9b-2fb3175bfde9.jpg)
      
    * Designterv:
      
      ![designterv](https://cloud.githubusercontent.com/assets/14230720/11021527/f43e914e-8643-11e5-8009-264e80ebf2e0.png)

      ![designterv2](https://cloud.githubusercontent.com/assets/14230720/11021583/3a4a88a8-8646-11e5-84c6-4996a4db4fd9.png)

  3. Osztálymodell:
    * Adatmodell:
  
      ![adatmodell](https://cloud.githubusercontent.com/assets/14230720/11125257/3d39dfca-8969-11e5-8a5f-49c42f442915.png)

    * Adatbázisterv:
    
      ![adatbterv](https://cloud.githubusercontent.com/assets/14230720/11021559/343a4328-8645-11e5-9ea8-bf73eb9a36fd.png)
    
## III. Implementáció
  - Fejlesztői környezet bemutatása:
      - Fejlesztői környezet gyanánt a Cloud9 webes IDE-t használjuk. Ez a c9.io weboldalról érhető el, rendelkeznünk kell           hozzá egy github felhasználói fiókkal. Belépés után egy demo projekt rendelkezésünkre is áll, amin keresztül                 megismerkedhetünk a felülettel.
        
  - Könyvtárstruktúrában lévő mappák funkiójának bemutatása:
      - config: waterline tároló-és keresőmotor konfigurációja.
      - controllers: főoldalon, bejelentkező oldalon és a receptlista oldalon történő navigációk; interakciók definiálása.
      - models: felhasználó és recept modellek definiálása.
      - node_modules: telepített modulok helye
      - public: stíluskönyvtárak helye
      - test: felhasználói és "zombi" tesztek definiálása. Teszteljük, hogy lehet-e létrehozni, keresni, módosítani egy adott         felhasználót, és hibát dob-e, ha rossz attribútumokat adunk meg, és igazzal vagy hamissal tér-e vissza a jó/rossz            jelszó megadása esetén. A zombi tesztnél egy felhasználói folyamaton megyünk végig: rálépünk a főoldalra,                    bejelentkezünk, rálépünk az 'új recept felvitelé'-re, ellenőrizzük, hogy jók-e a megadott űrlap adatok, és hogy              látjuk-e a receptlista oldalon az új receptünket.
      - views: a főoldal kinézetét és elrendezését állítjuk be.
          - login: bejelentkezési és regisztrációs felület kinézete és elrendezése.
          - recipes: receptlista és új recept felviteléhez szükséges űrlap oldal kinézete és elrendezése.
      - server.js: szerverfunkciók, kérések, válaszok implementálása.
  
## IV. Tesztelés
  - Tesztelési környezet bemutatása:
  
      Mocha, Chai tesztkörnyezet az adatmodell tesztelésekhez, Zombie.js a funkcionális tesztekhez.

  - Egységtesztek:
  - 
      usermodel.test.js: A felhasználói modell tesztelése. Teszteljük, hogy lehet-e létrehozni, keresni, módosítani egy adott         felhasználót, és hibát dob-e, ha rossz attribútumokat adunk meg, és igazzal vagy hamissal tér-e vissza a jó/rossz            jelszó megadása esetén.

  - Funkcionális felületi tesztek:
    
      zombie.test.js: Egy felhasználói interakció tesztelése. Főoldalra való navigálás, onnan a bejelentkezési oldalra való        lépés. Annak ellenőrzése, hogy sikerült-e belépni a megfelelő felhasználói névvel és jelszóval. Az új recept felvitele       oldalra navigálás, a form elemek ellenőrzése, hibadobás rossz/kihagyott elemek esetén. A mentés gomb megnyomása után a        receptlista oldalra való visszanavigálás.

  - Tesztesetek felsorolása: egységteszt a felhasználók adatmodellre, funkcionális teszt egy felhasználói folyamatra.
  
## V. Felhasználói dokumentáció
  - A program használata:
  
      Cloud9 keretrendszeren belül: Indítsuk el a 'Run' gombbal az applikációnkat, ekkor a konzol felületen megjelennek az         információk, többek között az, hogy milyen címen érhetjük el. Arra kattintva nyithatjuk meg az app főoldalát.

      A jobb felső sarokban a Bejelentkezés gombra kattintva adhatjuk meg a felhasználói nevünket és jelszavunkat a                belépéshez, vagy ha még nincs fiókunk, akkor a bejelentkezési oldal alján található Regisztráció gombra kattintva            tehetjük ezt meg.
      
      Ha beléptünk, rögtön a receptlista oldalra érkezünk, ahol áttekinthetjük eddigi feltöltéseinket. Az Új recept felvitele       gombra való kattintással egy űrlapon keresztül adhatjuk meg legújabb receptünk címét és leírását. Ha kitöltöttük a           kötelező mezőket, a mentés vagy mégse gombbal elmenthetjük vagy elvethetjük azt, amit eddig beírtunk.
      
      Ha nincs több teendőnk, akkor a jobb felső sarokban lévő Kilépés gombbal újra a főoldalra navigálhatunk.
  
