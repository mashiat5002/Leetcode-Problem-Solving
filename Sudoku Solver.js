const board= [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];


var columns_Groups={};
var rows_Groups={};
for(var i=0;i<9;i++){
   columns_Groups[i]=[];
   rows_Groups[i]=[];
}
  
for(var i=0;i<9;i++){
    for(j=0;j<9;j++){
       

        if(columns_Groups[j].includes(board[i][j]) && board[i][j]!="."){
            return false;
        }
            columns_Groups[j].push(board[i][j]);

            if(rows_Groups[j].includes(board[j][i]) && board[j][i]!="."){
                return false;
            }

            rows_Groups[j].push(board[j][i]);

    }
}
var box={};
for(var i=0;i<9;i++)
 box[i]=[];


for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
        
        if(i>=0 && i<3 && j>=0 && j<3){
            if(box[0].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[0].push(board[i][j])
        }
        else if(i>=3 && i<6 && j>=0 && j<3){
            if(box[1].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[1].push(board[i][j])
        }
        else if(i>=6 && i<9 && j>=0 && j<3){
            if(box[2].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[2].push(board[i][j])
        }
        else if(i>=0 && i<3 && j>=3 && j<6){
            if(box[3].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[3].push(board[i][j])
        }
        else if(i>=3 && i<6 && j>=3 && j<6){
            if(box[4].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[4].push(board[i][j])
        }
        else if(i>=6 && i<9 && j>=3 && j<6){
            if(box[5].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[5].push(board[i][j])
        }
        else if(i>=0 && i<3 && j>=6 && j<9){
            if(box[6].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[6].push(board[i][j])
        }
        else if(i>=3 && i<6 && j>=6 && j<9){
            if(box[7].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[7].push(board[i][j])
        }
        else if(i>=6 && i<9 && j>=6 && j<9){
            if(box[8].includes(board[i][j]) && board[i][j]!=".")
                return false;
            box[8].push(board[i][j])
        }
    }
}



console.log(rows_Groups[0].includes("4"))












// var board_col= new Array(9)
// for (var i = 0; i < 9; i++) {
//     board_col[i] = new Array(9).fill(".");  
// }

   


// for(var i=0;i<9;i++){
//     for(var j=0;j<9;j++){
//         board_col[i][j]= board[j][i];
//     }
// }
