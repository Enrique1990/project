
var palabras = new Array(11);
palabras[0] = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
palabras[1] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
palabras[2] = [0, 1, 1, 0, 0, 0, 1, 1, 1, 0];
palabras[3] = [0, 0, 1, 1, 0, 0, 1, 0, 1, 0];
palabras[4] = [0, 0, 0, 1, 1, 1, 1, 0, 1, 0];
palabras[5] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
palabras[6] = [0, 0, 1, 1, 1, 1, 0, 0, 1, 1];
palabras[7] = [1, 1, 1, 0, 0, 1, 0, 0, 0, 1];
palabras[8] = [1, 0, 0, 0, 0, 1, 1, 1, 1, 1];
palabras[9] = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
palabras[10] = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1];

var camino = new Array();
camino.push("0-0");
        var currentRow = 0;
        var currentCol = 0;

        function buildGrid() {
            var grid = "";
            grid += "<table border='1'>"

            for (var i = 0; i < 10; i++) {
                grid += "<tr>";
                for (var j = 0; j < 10; j++) {
                    grid += "<td";                 // <td style='background-color:#cc0000'>
                    if (i == currentRow && j == currentCol)
                        grid += " style='background-color: #cc0000' ";
                    grid += ">" + palabras[i][j] + "</td>";
                }
                grid += "</tr>";
            }

            grid += '</table>';
            grid+= '<button type= button onclick=go()>Press me</button>';
            
            grid += displayCoors();

            return grid;
        }

        
        var ultimaRow= -1;
        var ultimaCol= -1;
        

        function goUp() {
            console.log("up");
            console.log(ultimaRow);
            console.log(ultimaCol);
            if(currentRow != 0 && palabras[currentRow- 1][currentCol] && !(currentRow-1 == ultimaRow && currentCol == ultimaCol)){
                return true;
            }else{
               return false;
            }

        }
        function goDown() {
            console.log("down");
            console.log(ultimaRow);
            console.log(ultimaCol);
            if(currentRow !=palabras.length-1 && palabras[currentRow+ 1][currentCol] && !(currentRow+1 == ultimaRow && currentCol == ultimaCol)){
                return true;
            }else{
               return false;
            }
        }
        function goRight() {
            console.log("rigth");
            console.log(ultimaRow);
            console.log(ultimaCol);
            if(currentCol !=palabras.length-1 && palabras[currentRow][currentCol+1] && !(currentRow == ultimaRow && currentCol+1 == ultimaCol )){
                return true;
            }else{
               return false;
            }
        }
        function goLeft() {
            console.log("left");
            console.log(ultimaRow);
            console.log(ultimaCol);
            if(currentCol != 0 && palabras[currentRow][currentCol-1] && !(currentRow == ultimaRow && currentCol-1 == ultimaCol )){
                return true;
            }else{
               return false;
            }
        }
        function displayCoors() {
            
            var list = "";
            for (var k = 0; k < camino.length; k++) {
                list += camino[k] + "<br/>";
            }
            return list;
        }
        
        function inteligente(){
            console.log("soy inteligente");
            if(goDown() == true){
                ultimaRow= currentRow;
                ultimaCol= currentCol;
               currentRow= currentRow+ 1;
                camino.push(currentRow + '-' + currentCol);
                console.log(currentRow + '-' + currentCol);
            }else if (goUp() ==true){
                ultimaRow= currentRow;
                ultimaCol= currentCol;
                currentRow= currentRow- 1;
             camino.push(currentRow + '-' + currentCol);
             console.log(currentRow + '-' + currentCol);
          }else if(goLeft() == true){
            ultimaRow= currentRow;
            ultimaCol= currentCol;
              currentCol= currentCol-1;
               camino.push(currentRow + '-' + currentCol);
               console.log(currentRow + '-' + currentCol);
          }else if(goRight() == true){
            ultimaRow= currentRow;
            ultimaCol= currentCol;
              currentCol=currentCol+1;
               camino.push(currentRow + '-' + currentCol);
               console.log(currentRow + '-' + currentCol);
          }
        }
        
        
        //while (!(currentRow == 9 && currentCol == 9)) {
            function go (){
                var i=0;
            while(i++ < 50) {
            console.log("dando vueltas");
        
            inteligente();

            }
             console.log("casi al final");

        document.write(buildGrid());
        }
        document.write(buildGrid());