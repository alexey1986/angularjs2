myApp.factory('requestSession', function($http){
    return {
        getSessions: function() {
            return $http.get('http://54.72.3.96:3000/posts');
        },
        deleteRequest: function(dataId) {
            return $http.delete('http://54.72.3.96:3000/posts/' + dataId);
        },
        addRequest: function(data) {
            return $http.post('http://54.72.3.96:3000/posts/', data);
        },
        updateRequest: function(id, data) {
            return $http.put('http://54.72.3.96:3000/posts/' + id, data);
        }
    };
});