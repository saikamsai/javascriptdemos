function addBudget(){
    var client=document.getElementById("clientName").value
    var project=document.getElementById("projectName").value
    var budgetValue=document.getElementById("budget").value;
    var obj=sessionStorage.getItem("obj");
    let bgt={clientName:client,projectName:project,budget:budgetValue};
    if(obj==null){
        budgetInfo=new Array();
        budgetInfo.push(bgt);
        sessionStorage.setItem("obj",JSON.stringify(budgetInfo));
    }else{
        obj=JSON.parse(obj)
        obj.push(bgt);
        sessionStorage.setItem("obj",JSON.stringify(obj));
    }
    document.getElementById("clientName").value=""
    document.getElementById("projectName").value=""
    document.getElementById("budget").value=""
    document.getElementById("out").innerHTML="Budget Added"
}