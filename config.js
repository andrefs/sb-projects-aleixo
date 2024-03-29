exports.config = {
    project:{
        title         : 'Botões Bruno Aleixo',
        description   : 'As melhores frases de Bruno Aleixo!',
        url           : 'http://aleixo.botoes.co',
        external_link : 'http://www.facebook.com/brunoaleixo',
        facebook: {
            id: '1016048086'
        },
        google: {
            id: 'UA-64953131-1'
        },
        author: 'andré santos, david oliveira, joão ferreira',
        publisher: 'botoes.co'
    },
    partials: {
        footer: '<a href="mailto:andrefs@andrefs.com">andré santos, david oliveira, joão ferreira <i class="fa fa-envelope"></i></a> , baseado em <a href="http://www.facebook.com/brunoaleixo">bruno aleixo <i class="fa fa-external-link"></i></a>'
    },
    manifest : {
        version: 'v1',
        filePath: './',
        fileName: 'manifest.json'
    },
    sourcesPath       : './sources',
    soundsPath        : './sounds',
    tmpPath           : './tmp',
    defaultClipMargin : '2',
    soundEditCommand  : 'audacity',
    toplinks: [
        {
            link: 'http://bussaco.botoes.co',
            title: 'Bussaco'
        },{
            link: 'http://renato.botoes.co',
            title: 'Renato'
        },{
            link: 'http://senhorpe.botoes.co',
            title: 'Senhor Pé'
        },{
            link: 'http://beatriz.botoes.co',
            title: 'Beatriz'
        }
    ]
};
