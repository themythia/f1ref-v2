const driverPics = (driverCode) => {
  switch (driverCode) {
    case 'HAM':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/image.img.1024.medium.jpg/1641811370907.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/lewis-hamilton/_jcr_content/helmet.img.png',
      };
    case 'BOT':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/image.img.1024.medium.jpg/1642509398940.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/valtteri-bottas/_jcr_content/helmet.img.png',
      };
    case 'VER':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image.img.1024.medium.jpg/1641831947723.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/helmet.img.png',
      };
    case 'PER':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/image.img.1024.medium.jpg/1641816390679.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/sergio-perez/_jcr_content/helmet.img.png',
      };
    case 'NOR':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/image.img.1024.medium.jpg/1641814916987.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/lando-norris/_jcr_content/helmet.img.png',
      };
    case 'RIC':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/image.img.1024.medium.jpg/1641818137208.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/daniel-ricciardo/_jcr_content/helmet.img.png',
      };
    case 'STR':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/image.img.1024.medium.jpg/1641828817373.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/lance-stroll/_jcr_content/helmet.img.png',
      };
    case 'VET':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/image.img.1024.medium.jpg/1641834155385.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/sebastian-vettel/_jcr_content/helmet.img.png',
      };
    case 'OCO':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/image.img.1024.medium.jpg/1641815774959.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/esteban-ocon/_jcr_content/helmet.img.png',
      };
    case 'ALO':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/fernando-alonso/_jcr_content/image.img.1024.medium.jpg/1641808424475.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/fernando-alonso/_jcr_content/helmet.img.png',
      };
    case 'LEC':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1024.medium.jpg/1641812697450.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/helmet.img.png',
      };
    case 'SAI':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/image.img.1024.medium.jpg/1641824288547.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/carlos-sainz/_jcr_content/helmet.img.png',
      };
    case 'GAS':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1024.medium.jpg/1641809819782.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/helmet.img.png',
      };
    case 'TSU':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/yuki-tsunoda/_jcr_content/image.img.1024.medium.jpg/1641829679198.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/yuki-tsunoda/_jcr_content/helmet.img.png',
      };
    case 'RAI':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/K/KIMRAI01_Kimi_R%C3%A4ikk%C3%B6nen/kimrai01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/tbc-tbc/_jcr_content/image.img.1024.medium.jpg/1646671958388.jpg',
        helmet: '',
      };
    case 'GIO':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/A/ANTGIO01_Antonio_Giovinazzi/antgio01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/tbc-tbc/_jcr_content/image.img.1024.medium.jpg/1646671958388.jpg',
        helmet: '',
      };
    case 'MSC':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/M/MICSCH02_Mick_Schumacher/micsch02.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/mick-schumacher/_jcr_content/image.img.1024.medium.jpg/1641824836549.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/mick-schumacher/_jcr_content/helmet.img.png',
      };
    case 'MAZ':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/N/NIKMAZ01_Nikita_Mazepin/nikmaz01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/tbc-tbc/_jcr_content/image.img.1024.medium.jpg/1646671958388.jpg',
        helmet: '',
      };
    case 'RUS':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/image.img.1024.medium.jpg/1642509449527.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/george-russell/_jcr_content/helmet.img.png',
      };
    case 'LAT':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/N/NICLAF01_Nicholas_Latifi/niclaf01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/nicholas-latifi/_jcr_content/image.img.1024.medium.jpg/1641812317302.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/nicholas-latifi/_jcr_content/helmet.img.png',
      };
    case 'KUB':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/R/ROBKUB01_Robert_Kubica/robkub01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/tbc-tbc/_jcr_content/image.img.1024.medium.jpg/1646671958388.jpg',
        helmet: '',
      };
    case 'ALB':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/image.img.1024.medium.jpg/1641904783108.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/alexander-albon/_jcr_content/helmet.img.png',
      };
    case 'ZHO':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/guanyu-zhou/_jcr_content/image.img.1024.medium.jpg/1646716397846.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/guanyu-zhou/_jcr_content/helmet.img.png',
      };
    case 'HUL':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png',
        big: 'https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png',
        helmet: '',
      };
    case 'MAG':
      return {
        profile:
          'https://www.formula1.com/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png',
        big: 'https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/image.img.1024.medium.jpg/1647447969295.jpg',
        helmet:
          'https://www.formula1.com/content/fom-website/en/drivers/kevin-magnussen/_jcr_content/helmet.img.png',
      };
    case 'DEV':
      return {
        profile:
          'https://assets-prd.formulae.cloud/-/media/images/championship/drivers/nyck-de-vries/s8/devries-3-4.png',
        big: 'https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/ItalianGP/Pre-race/be29e431-9032-cb82-c761-03e8f554dd04.jpg',
        helmet: '',
      };
    default:
      return null;
  }
};
export default driverPics;
