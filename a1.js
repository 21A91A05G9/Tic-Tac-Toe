board=['','','','','','','','','']

var c=0;
function win(ch){
    
    if((board[0]==board[1] && board[1]==board[2] && board[0]!='' && board[1]!='' && board[2]!='') || 
    (board[3]==board[4] && board[4]==board[5] && board[3]!='' && board[4]!='' && board[5]!='') ||
     (board[6]==board[7] && board[7]==board[8] && board[6]!='' && board[7]!='' && board[8]!='') || 
    (board[0]==board[4] && board[4]==board[8] && board[0]!='' && board[4]!='' && board[8]!='') || 
    (board[2]==board[4] && board[4]==board[6] && board[2]!='' && board[4]!='' && board[6]!='') ||
    (board[0]==board[3] && board[3]==board[6] && board[0]!='' && board[3]!='' && board[6]!='') || 
    (board[1]==board[4] && board[4]==board[7] && board[1]!='' && board[4]!='' && board[7]!='') ||
     (board[1]==board[4] && board[4]==board[7] && board[2]!='' && board[5]!='' && board[8]!='')){
        return 1;
    }
    return 0;
}
function move(x){
    console.log(x,f)
    // if(f==0){
        var ch;
        var ind=document.getElementById(x)
        console.log(ind)
        console.log(ind)
        if(c==0 && board[x]=='') { ind.innerHTML="<img src='images/x.jpg' height=96px width:96px>"; c=1; board[x]='x'
        
    }
        else if(c==1 && board[x]==''){ ind.innerHTML="<img src='images/o.jpg' height=96px width:96px>"; c=0; board[x]='o'
        
    }
    if(c==1) ch='x'
    else ch='o'
    if(win(ch)==1){
        window.alert("Hurray "+ch+" won the game....!")
        window.open("player.html","_self")
        return;
    }
    // }
    
}
