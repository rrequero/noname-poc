import Noname from 'noname';

const nonameApp = new Noname();
nonameApp.init([async (ctx, next) => {
    // console.log('Middleware general');
    await next();
}]);



nonameApp.listen(3000, () => {
    // console.log(`Listen in port: ${process.env.PORT}`);
});
