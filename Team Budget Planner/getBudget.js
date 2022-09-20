function getBudget(){
    var obj=sessionStorage.getItem("obj");
    if(obj==null){
        document.getElementById("out").innerHTML="Budget not present"
    }else{
        let budgetData=JSON.parse(obj)
        for(let i=0;i<budgetData.length;i++){
            let pTag=document.createElement("p");
            let pTagValue=document.createTextNode("Client name is " +budgetData[i].clientName+", "+" Project name is "+ budgetData[i].projectName+" and"+" Budget is "+ budgetData[i].budget);
            pTag.appendChild(pTagValue);
            document.getElementById("result").appendChild(pTag);
        }
    }
}