function contentCtrl($scope) {

    var _modal = $('#modal');

    $scope.showModal = function() {
        _modal.modal();
    };

    $scope.content = [
        {
            "author": "Alexey Poleshchuk",
            "title": "Post Title ",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil similique quibusdam, cumque! Illo rerum animi voluptas blanditiis tempore iure repellendus eligendi explicabo deserunt quam omnis, aliquid, officia culpa nemo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus veniam cum asperiores necessitatibus sed error aspernatur, odio vel praesentium omnis distinctio cumque enim atque perferendis dolores, saepe nesciunt! Nam, aliquid!",
            "image": "/img/img-01.jpg",
            "date": '2014.08 16:17'
        }
    ];

    $scope.getDate = function() {
        var currentDate = new Date(),
            hour = currentDate.getHours(),
            minute = currentDate.getMinutes();

        if (minute < 10){
            minute = "0" + minute
        }

        var dateTime = hour + ":" + minute;
        dateTime.toString();
        return dateTime;
    };

    $scope.addPost = function() {
        $scope.contentItem.date = $scope.getDate();
        $scope.content.push($scope.contentItem);
        $scope.contentItem = '';
        _modal.modal('hide');
    }
}

