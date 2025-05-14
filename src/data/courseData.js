export const studyProgramList = [
    { id: 'teknillinenPsykologia', name: 'Teknillinen psykologia' },
    { id: 'informaatioverkostot', name: 'Informaatioverkostot' },
    { id: 'tuotantotalous', name: 'Tuotantotalous' },
    { id: 'tietotekniikka', name: 'Tietotekniikka' },
    { id: 'matematiikkaSysteemitieteet', name: 'Matematiikka ja systeemitieteet' },
    { id: 'teknillinenFysiikka', name: 'Teknillinen fysiikka' },
  ];
  
  export const courses = [
    // Tuotantotalous
    {
      id: 'tuot1',
      title: 'Tuotantotalous 1',
      description: 'Kurssilla opetellaan, miten tuotantojärjestelmät- ja prosessit toimivat. Kurssin ryhmätyössä perustatte kuvitteellisen ravintolan Otaniemeen.',
      category: 'Tuotantotalous',
      relevantPrograms: ['tuotantotalous', 'informaatioverkostot']
    },
    {
      id: 'tuot2',
      title: 'Ryhmätoiminta ja organisointi',
      description: 'Opit yhteistyötaidoista, ryhmäprosesseista ja johtamistaidoista. Kurssilla tehdään paljon ryhmätyötä ja keskustellaan.',
      category: 'Tuotantotalous',
      relevantPrograms: ['tuotantotalous', 'informaatioverkostot']
    },
    {
      id: 'tuot3',
      title: 'Laskelmat liiketoiminnan päätösten tukena',
      description: 'Opit tekemään laskelmia, joiden avulla yrityksessä voidaan tehdä päätöksiä.',
      category: 'Tuotantotalous',
      relevantPrograms: ['tuotantotalous', 'informaatioverkostot']
    },
    {
        id: 'tuot4',
        title: 'Operaatioiden johtaminen',
        description: 'Opit suunnittelemaan tuotantojärjestelmiä ja ymmärrät, miten ne toimivat strategisella tasolla.',
        category: 'Tuotantotalous',
        relevantPrograms: ['tuotantotalous']
    },
  
    // tikki
    {
      id: 'tik1',
      title: 'Ohjelmointi 1',
      description: 'Tämä kurssi lähtee ohjelmoinnin alkeista ja siinä pääset itse koodaamaan oma Flappy Bug -pelin.',
      category: 'Ohjelmointi',
      relevantPrograms: ['tietotekniikka', 'informaatioverkostot', 'teknillinenPsykologia']
    },
    {
      id: 'tik2',
      title: 'Ohjelmointi 2',
      description: 'Opit ymmärtämään, miten tietokoneen logiikka toimii ja miten tietokonetta ohjelmoidaan.',
      category: 'Ohjelmointi',
      relevantPrograms: ['tietotekniikka', 'teknillinenPsykologia']
    },
    {
        id: 'tik3',
        title: 'Tietokannat',
        description: 'Ymmärrät, miten suurta määrrää tietoa hallitaan tietokannoissa.',
        category: 'Ohjelmointi',
        relevantPrograms: ['tietotekniikka', 'informaatioverkostot']
      },
    {
      id: 'tik4',
      title: 'Tietorakenteet ja algoritmit',
      description: 'Opit, miten algoritmit kuten hakualgoritmit toimivat. Opit tekemään tehokkaita algoritmejä.',
      category: 'Ohjelmointi',
      relevantPrograms: ['tietotekniikka', 'teknillinenPsykologia']
    },
    
    // Teknillinen Psykologia
    {
      id: 'tepsy1',
      title: 'Johdatus teknilliseen psykologiaan',
      description: 'Opit ihmisen ja teknologian vuorovaikutuksen peruskäsitteet.',
      category: 'Teknillinen psykologia',
      relevantPrograms: ['teknillinenPsykologia', 'informaatioverkostot']
    },
    {
      id: 'tepsy2',
      title: 'Teknillisen psykologian tutkimusmenetelmät',
      description: 'Suunnittelet pienen tutkimuksen kurssihenkilökunna avustuksella ja opit keskeiset tutkimusmenetelmät.',
      category: 'Teknillinen psykologia',
      relevantPrograms: ['teknillinenPsykologia']
    },
    {
        id: 'tepsy3',
        title: 'Kognitiivinen psykologia',
        description: 'Pääset tutustumaan ihmisen kognitiiviseen toimintaan, kuten havaitsemiseen, muistiin ja tarkkaavaisuuteen.',
        category: 'Teknillinen psykologia',
        relevantPrograms: ['teknillinenPsykologia']
    },
    {
        id: 'tepsy4',
        title: 'Sosiaalipsykologia',
        description: 'Perehdyt yksilöiden ja ryhmien välisiin vuorovaikutuksiin. Opit kuinka esimerkiksi normit ja asenteet vaikuttavat yksilön toimintaan.',
        category: 'Teknillinen psykologia',
        relevantPrograms: ['teknillinenPsykologia, informaatioverkostot']
    },
  
    // Informaatioverkostot
    {
      id: 'info1',
      title: 'Tieteen ja tiedon perusteet',
      description: 'Opit ymmärtämään, miten lunnontieteet, insinööritieteet ja yhteiskuntatieteet eroavat toisistaan ja miten ne lähestyvät samoja ongelmia eri näkökulmista.',
      category: 'Informaatioverkostot',
      relevantPrograms: ['informaatioverkostot', 'tietotekniikka']
    },
    {
      id: 'info2',
      title: 'Verkkojulkaisemisen perusteet',
      description: 'Opit koodaamaan hienoja ja käytettäviä nettisivuja ja lisäksi kurssilla koodataan omat portfoliosivut',
      category: 'Informaatioverkostot',
      relevantPrograms: ['informaatioverkostot']
    },
    {
        id: 'info3',
        title: 'Viestintä ja digitaalinen media',
        description: 'Toteutat ryhmässä viestintäkampanian ja opit perusasioita viestinnästä.',
        category: 'Informaatioverkostot',
        relevantPrograms: ['informaatioverkostot', 'teknillinenPsykologia', 'tietotekniikka']
    },
    {
        id: 'info4',
        title: 'Human-Computer Interaction',
        description: 'Opit, miten ihmisen ja tietokoneiden vuorovaoikutus toimii ja miten suunnitella käyttöliittymiä, joita on mukava käyttää',
        category: 'Informaatioverkostot',
        relevantPrograms: ['informaatioverkostot', 'teknillinenPsykologia', 'tietotekniikka']
    },
    
    // Tietotekniikka
    {
      id: 'tkt1001',
      title: 'Tietokonejärjestelmät',
      description: 'Tietokoneen toiminnan perusteet laitteiston ja ohjelmiston tasolla.',
      category: 'Tietotekniikka',
      relevantPrograms: ['tietotekniikka']
    },
    {
      id: 'tkt2001',
      title: 'Tietoliikenteen perusteet',
      description: 'Verkkojen toiminta ja protokollat.',
      category: 'Tietotekniikka',
      relevantPrograms: ['tietotekniikka', 'informaatioverkostot']
    },
  
    // Matematiikka ja systeemitieteet
    {
      id: 'mat1',
      title: 'Differentiaali- ja integraalilaskenta 1',
      description: 'Opit analysoimaan sarjojen ja lukujonojen supppenemista sekä soveltaa derivaatan ja integraalin laskumenetelmiä',
      category: 'Matematiikka ja systeemitieteet',
      relevantPrograms: ['matematiikkaSysteemitieteet', 'teknillinenFysiikka']
    },
    {
      id: 'mat2',
      title: 'Matriisilaskenta',
      description: 'Pääset harjoittelemaan lineaaristen yhtälöryhmiä matriisimudossa ja ratkaisemaan yhtälöitä esim. Gaussin eliminaatiolla',
      category: 'Matematiikka ja systeemitieteet',
      relevantPrograms: ['matematiikkaSysteemitieteet', 'teknillinenFysiikka']
    },
    {
        id: 'mat3',
        title: 'Differentiaali- ja integraalilaskenta 2',
        description: 'Syvennyt integraalien ja derivaattojen sovelluksiin kuten optimointiin, approksimointiin ja avaruusintegraaleihin',
        category: 'Matematiikka ja systeemitieteet',
        relevantPrograms: ['matematiikkaSysteemitieteet', 'teknillinenFysiikka']
    },
    {
        id: 'mat4',
        title: 'Dikreetin matematiikaan perusteet',
        description: 'Syvennyt matemaattiseen todistamiseen, joukko-oppiin ja kombinatoriikkaan.',
        category: 'Matematiikka ja systeemitieteet',
        relevantPrograms: ['matematiikkaSysteemitieteet', 'teknillinenFysiikka']
    },
  
    // Teknillinen Fysiikka
    {
      id: 'tefy1',
      title: 'Johdatus kokeelliseen fysiikkaan',
      description: 'Kurssilla opit käyttämään erilaisia laboratoriolaitteita, keräämään ja analysoimaan mittausdataa sekä ymmärtämään mittausvirheitä ja niiden vaikutuksia tuloksiin.',
      category: 'Teknillinen fysiikka',
      relevantPrograms: ['teknillinenFysiikka', 'matematiikkaSysteemitieteet']
    },
    {
      id: 'tefy2',
      title: 'Termodynamiikka',
      description: 'Kurssilla opit termodynamiikan keskeiset käsitteet ja pääsäännöt sekä niiden soveltamisen lämmön, työn ja entropian muutosten määrittämiseen.',
      category: 'Teknillinen fysiikka',
      relevantPrograms: ['teknillinenFysiikka', 'matematiikkaSysteemitieteet']
    },
    {
        id: 'tefy3',
        title: 'Sähkömagnetismi',
        description: 'Opit analysoimaan sähkö- ja magneettikenttiä sekä laskemaan niihin liittyviä ilmiöitä, kuten kenttiä, potentiaaleja, voimia ja induktioilmiöitä. ',
        category: 'Teknillinen fysiikka',
        relevantPrograms: ['teknillinenFysiikka', 'matematiikkaSysteemitieteet']
    },
    {
        id: 'tefy4',
        title: 'Kvanttimekaniikka',
        description: 'Kurssilla opit, miten kvanttimekaniikka kuvaa hiukkasten käyttäytymistä ja miten esimerkiksi aaltofunktio kertoo, missä hiukkanen todennäköisesti on.',
        category: 'Teknillinen fysiikka',
        relevantPrograms: ['teknillinenFysiikka']
    },
  ];
  
  export const getCoursesByCategory = () => {
    const categories = {};
    courses.forEach(course => {
      if (!categories[course.category]) {
        categories[course.category] = [];
      }
      categories[course.category].push(course);
    });
    return categories;
  };