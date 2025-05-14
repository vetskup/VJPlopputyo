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
      description: 'Kurssilla opetellaan, miten tuotantojärjestelmät- ja prosessit toimivat...',
      category: 'Tuotantotalous',
      relevantPrograms: ['tuotantotalous'] // IDs from studyProgramList
    },
    {
      id: 'tuot2',
      title: 'Operaatioiden johtaminen',
      description: 'sa dlkfj aldfkjalsdfk alsdkfj flaksjf lakjfd lakjs dflaksj lakjfd...',
      category: 'Tuotantotalous',
      relevantPrograms: ['tuotantotalous']
    },
    {
      id: 'tuot3',
      title: 'Strategia ja kansainvälinen liiketoiminta',
      description: 'Opitaan strategisen ajattelun perusteet ja kansainvälisen liiketoiminnan haasteet.',
      category: 'Tuotantotalous',
      relevantPrograms: ['tuotantotalous', 'informaatioverkostot']
    },
  
    // Ohjelmointi
    {
      id: 'ohj1001',
      title: 'Ohjelmointi 1',
      description: 'Tämä kurssi lähtee ohjelmoinnin alkeista ja siinä pääset itse...',
      category: 'Ohjelmointi',
      relevantPrograms: ['tietotekniikka', 'informaatioverkostot', 'matematiikkaSysteemitieteet']
    },
    {
      id: 'ohj2001',
      title: 'Verkkojulkaisemisen perusteet',
      description: 'Pääset tekemään itse omat verkkosivusi HTML, CSS ja JavaScript-tekniikoilla.',
      category: 'Ohjelmointi',
      relevantPrograms: ['tietotekniikka', 'informaatioverkostot']
    },
    {
      id: 'ohj3001',
      title: 'Tietorakenteet ja algoritmit',
      description: 'Syvennytään tehokkaisiin tapoihin tallentaa ja käsitellä dataa.',
      category: 'Ohjelmointi',
      relevantPrograms: ['tietotekniikka', 'matematiikkaSysteemitieteet']
    },
    
    // Teknillinen Psykologia
    {
      id: 'tekpsy1001',
      title: 'Johdatus teknilliseen psykologiaan',
      description: 'Ihmisen ja teknologian vuorovaikutuksen perusteet.',
      category: 'Teknillinen psykologia',
      relevantPrograms: ['teknillinenPsykologia', 'informaatioverkostot']
    },
    {
      id: 'tekpsy2001',
      title: 'Kognitiivinen ergonomia',
      description: 'Miten suunnitella järjestelmiä ihmisen tiedonkäsittelyn ehdoilla.',
      category: 'Teknillinen psykologia',
      relevantPrograms: ['teknillinenPsykologia']
    },
  
    // Informaatioverkostot
    {
      id: 'info1001',
      title: 'Informaatioverkostojen perusteet',
      description: 'Yhteiskunnan digitalisaatio ja sen vaikutukset.',
      category: 'Informaatioverkostot',
      relevantPrograms: ['informaatioverkostot', 'tietotekniikka']
    },
    {
      id: 'info2001',
      title: 'Käyttäjäkeskeinen suunnittelu',
      description: 'Palveluiden ja tuotteiden suunnittelu käyttäjien tarpeista lähtien.',
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
      id: 'matsys1001',
      title: 'Differentiaali- ja integraalilaskenta 1',
      description: 'Matemaattisen analyysin perusteet.',
      category: 'Matematiikka ja systeemitieteet',
      relevantPrograms: ['matematiikkaSysteemitieteet', 'teknillinenFysiikka', 'tietotekniikka', 'tuotantotalous']
    },
    {
      id: 'matsys2001',
      title: 'Systeemiajattelu ja mallintaminen',
      description: 'Monimutkaisten järjestelmien ymmärtäminen ja mallintaminen.',
      category: 'Matematiikka ja systeemitieteet',
      relevantPrograms: ['matematiikkaSysteemitieteet', 'tuotantotalous', 'informaatioverkostot']
    },
  
    // Teknillinen Fysiikka
    {
      id: 'tekfys1001',
      title: 'Mekaniikan perusteet',
      description: 'Klassisen mekaniikan peruslait ja sovellukset.',
      category: 'Teknillinen fysiikka',
      relevantPrograms: ['teknillinenFysiikka', 'matematiikkaSysteemitieteet']
    },
    {
      id: 'tekfys2001',
      title: 'Termodynamiikka',
      description: 'Energia, lämpö ja entropia fysiikan näkökulmasta.',
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