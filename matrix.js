let matrix = (number) => {
    for(i = 0; i<= number; i++){
        var s = '';
        for(j= 0; j<= i; j++){ 
           s += "x"+ " ";
           // console.log("x")
        }
        console.log(s + "\n")
    }
}

matrix(5)
