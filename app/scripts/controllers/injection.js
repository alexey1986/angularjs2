myApp.service('reduction', function(){
    var text = null;

    this.sliceText = function(data, size) {
        for(var i = 0; i < data.length; i++) {
            if(data[i].body!== undefined){
                if(data[i].body.length > size ){
                    text = data[i].body.slice(0, size);
                    data[i].sliceBody = text + " " +"...";
                } else {
                    data[i].sliceBody = data[i].body;
                }
            } else {
                if(data[i].text.length > size ){
                    text = data[i].text.slice(0, size);
                    data[i].sliceBody = text + " " +"...";
                } else {
                    data[i].sliceBody = data[i].text;
                }
            }
        }
    }
});