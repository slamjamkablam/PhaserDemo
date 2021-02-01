demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.state.backgroundColor = "#ff0000";
        console.log('state1');
        
        addChangeStateEventListeners();
    
    },
    update: function(){}
    
};
