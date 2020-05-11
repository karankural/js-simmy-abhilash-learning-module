
function Pattern(){
    var i, j,p;
    for(i=0; i<5; i++)
    {
        p='';
        for(j=0;j<=i;j++)
            { 
             p=p+('*'+' ');     
            }   
        console.log(p);  
    }  
}
Pattern();


