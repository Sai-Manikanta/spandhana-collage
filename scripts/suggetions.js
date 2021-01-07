auth.onAuthStateChanged(function(user){
    var $suggetionForm = $('#suggetion-form');
    if(user) {
        $suggetionForm.on('submit', function(e){
            e.preventDefault();
            var userName = $('#name').val();
            var userSuggetion = $('#suggetion-box').val();
                if(userSuggetion.length > 50) {
                    var info = {
                      name: userName,
                      suggetion: userSuggetion
                    }
                    database.collection('suggetions').add(info).then(function(){
                        $suggetionForm.hide();
                        $('#feedback').text('Sucessfully Sended');
                    });
                } else {
                    window.alert("Enter More than 50 Characters to Send");
                }
        });
        
    } else {
        $suggetionForm.on('submit', function(e){
            e.preventDefault();
            window.alert("Plese login to your Account or Take an account to send text");
        });
    }
});
