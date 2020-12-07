
// mockData, note it is different from the real database version, which is forward compatible 
// in case i want to add different users and images.
const MockDb = () => {
    const data = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Ryparken',
            latitude: '55.71871022389743',
            longitude: '12.560155647953252'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Rigshospitalet',
            latitude: '55.69639060473213',
            longitude: '12.565332308175954'
            
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title:  'O\'et i \'Copenhagen\'',
            latitude: '55.67455793495955',
            longitude: '12.545400351238186'
        },
        {
            id: '44494a0f-3da1-471f-bd96-145571e29d72',
            title: 'Kløvermarken',
            latitude: '55.67168400704065',
            longitude: '12.615768342842813'
        },
        {
            id: '55594a0f-3da1-471f-bd96-145571e29d72',
            title: 'Valby Park',
            latitude: '55.64109172958615',
            longitude: '12.51920790044096'
        },
        {
            id: '66694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Amager Fælled',
            latitude: '55.65075887830824',
            longitude: '12.577681554404677'
        },
        {
            id: '77764a0f-3da1-471f-bd96-145571e29d72',
            title: 'Sydhavnstippen',
            latitude: '55.636844503286284',
            longitude: '12.53482800431064'
        },
        {
            id: '88864a0f-3da1-471f-bd96-145571e29d72',
            title: 'Hvidovre',
            latitude: '55.65794804173217',
            longitude: '12.474750451800901'
        },
        {
            id: '99964a0f-3da1-471f-bd96-145571e29d72',
            title: 'Hjem',
            latitude: '55.65643336692315',
            longitude: '12.552530072326903'
        },
        {
            id: '10101064a0f-3da1-471f-bd96-145571e29d72',
            title: 'Nyhavn',
            latitude: '55.67939794186424',
            longitude: '12.590991486769752'
        },
        {
            id: '111114a0f-3da1-471f-bd96-145571e29d72',
            title: 'Test',
            latitude: '55.6770823603679',
            longitude: '12.5348444025099'
        },
        {
            id: '1212124a0f-3da1-471f-bd96-145571e29d72',
            title: 'Islands Brygge',
            latitude: '55.66223164765597',
            longitude: '12.575315488500394'
        },
        {
            id: '13134a0f-3da1-471f-bd96-145571e29d72',
            title: 'Rødovre',
            latitude: '55.68018926608923',
            longitude: '12.453110484236277'
        },
        {
            id: 'randomMarker-3da1-471f-bd96-145571e29d72',
            title: 'newMarkerFromDb',
            latitude: '0.913606352984264',
            longitude: '0.521295312221477'
        },
    ];

    return data
}

export default MockDb;