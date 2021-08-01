class Form{
    constructor(){}

    display(){
        var title=createElement("h1")
        title.html("NEED FOR SPEED")
        title.position(130, 0);

        var input=createInput("name")
        input.position(130, 160);

        var button = createButton("click here")
        button.position(250, 200);

        button.mousePressed(function(){
            button.hide()
            input.hide()

            playerCount=playerCount+1;
            var name=input.value();
            player.update(name)
            player.updateCount(playerCount)
            var greeting=createElement("h3")
            greeting.html("HELLO "+name)
            greeting.position(130, 160);
        })
    }
}