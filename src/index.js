const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    
     //configurar a variável de ambiente de acordo com ele, se de teste, produção ou   homologação, verificar porta e host//
    const server = Hapi.server({  
        port: 3000,
        host: 'localhost'
    });

    server.route(routes);


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

