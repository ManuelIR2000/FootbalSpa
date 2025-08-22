export default {
    home: {
        path: '/',
        controller: 'homeController'
    },
    pl: {
        path: '/pl',
        controller: 'plController'
    },
    ln:{
        path:`/ln`,
        controller:`lnController`
    },
    scp:{
        path:`/sporting`,
        controller:`sportingController`
    },
    matches:{
        path:`/matches`,
        controller:`matchesController`
    },
    currentPath: {
        path: '',
        controller: ''
    }
};
