
var allShips = [];

function generateShips(){

    var min = 0;
    var max = 10;

    var shipSizes = [5, 4, 3, 3, 2, 2, 2];


    for(var shipId=0; shipId<7; shipId++){

        var positionX = Math.floor(Math.random() * (max - min)) + min;
        var positionY = Math.floor(Math.random() * (max - min)) + min;


        var shipSize = shipSizes[shipId];
        // 0=arriba, 1=dereche, 2=abajo, 3=izquierda
        var direction = Math.floor(Math.random()*4);

        var shipPosition = []; 
        
        // up direction
        if(direction==0){
            
            for(var shipCell=0; shipCell<shipSize; shipCell++){
                shipPosition.push(positionX.toString()+'-'+(positionY-shipCell).toString());
            }
            
            // rigth direction
        } else if(direction==1){
            
            for(var shipCell=0; shipCell<shipSize; shipCell++){
                shipPosition.push((positionX+shipCell).toString()+'-'+positionY.toString());
            }
            
            // down direction
        } else if(direction==2){
            
            for(var shipCell=0; shipCell<shipSize; shipCell++){
                shipPosition.push(positionX.toString()+'-'+(positionY-shipCell).toString());
                
            }
            
            // left direction
        } else if(direction==3){
            
            for(var shipCell=0; shipCell<shipSize; shipCell++){
                shipPosition.push((positionX-shipCell).toString()+'-'+positionY.toString());
                
            }
        }
        
        allShips.push(shipPosition);
    }
    
    console.log(allShips);
    
    for(index=0; index<allShips.length; index++){
        for(subIndex=0; subIndex<allShips[index]; subIndex++){
            console.log(allShips[index][subIndex]);
        
        }
        
        
        
        console.log('----------------');
        
        
    }
    alert("Barcos generados!!")
    
}


window.onclick=e=> {
    
    var damaged = false;
    for(var index=0; index<allShips.length; index++){
        for(var subIndex=0; subIndex<allShips[index].length; subIndex++) {
            if(e.target.id == allShips[index][subIndex]){
                damaged = true;
                document.getElementById(allShips[index][subIndex].target.id).style.backgroundColor = "red";
                alert("tocado")

            }
        }
    }

    if(damaged == false){
        document.getElementById(e.target.id).style.backgroundColor = "blue";
        alert("agua")
    }

}