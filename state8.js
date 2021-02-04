var text;

demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){
    },
    create: function(){
        game.stage.backgroundColor = "#669900";
        addChangeStateEventListeners();
        
        text = "abcedfghijklmnopqrstuvwxyz abcedfghijklmnopqrstuvwxyz abcedfghijklmnopqrstuvwxyz abcedfghijklmnopqrstuvwxyz ";
        
        this.spellOutText(100,100,1000,text,30, 40, "#ffffff");
    },
    spellOutText: function(x,y,width, text, fontSize, speed, fill, font){
        var sentence = game.add.text(x,y, '', {fontSize:fontSize + 'px', fill:fill, font:font});
        var currentLine = game.add.text(10,10, '', {fontSize:fontSize + 'px', font:font});
        currentLine.alpha =0;
        var loop = game.time.events.loop(speed, addChar);
        
        var index =0;
        
        
        function addChar(){
            sentence.text += text[index];
            currentLine.text += text[index];
            
            if (currentLine.width >width && text[index]== ' '){
                sentence.text += '\n';
                currentLine.text = '';
                
                }
            if(index >= text.length-1){
                game.time.events.remove(loop);
                console.log('stop');
            }
                
            index++;
        }
    }
    
};