var hsText = [];
var hs = [10,9,8,7,6,5,4,3,2,1];
var ref;
demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#666699";
        addChangeStateEventListeners();
        
        ref = new Firebase('https://phaserdemo-e64f8-default-rtdb.firebaseio.com/');
        
        for(var i =1; i<11; i++){
            game.add.text(500,20 + (i *90), i + '.',{fontSize:'40px'}).anchor.setTo(1,0);
        }
        
        for(var i=0;i<10;i++){
            hsText[i] = game.add.text(500,20 + ((i+1) *90), hs[i],{fontSize:'40px'});
        }
        
        var updateHSText = this.updateHSText;
        ref.on('value',function(snapshot){
            console.log(this);
            updateHSText(snapshot.val(),hs);
        });
    },
    updateHSText: function(hs){
        for(var i=0 ; i<10;i++){
            hsText[i].text = hs[i];
        }
    }
    
};