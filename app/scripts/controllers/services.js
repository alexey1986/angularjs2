myApp.factory('requestSession', function($http){
    return {
        getSessions: function() {
            return $http.get('http://54.72.3.96:3000/posts');
        },
        deleteRequest: function(dataId) {
            return $http.delete('http://54.72.3.96:3000/posts/' + dataId);
        },
        update: function(data) {
            return $http.put('http://54.72.3.96:3000/posts/', data);
        }
    };
});


/*
myApp.factory('Posts', function ($resource) {
    return $resource('http://54.72.3.96:3000/posts/:id', {}, {
        update: {
            method: 'PUT'
        }
    });
});
*/