var selectedRow=null;
//show alerts
function showAlert(message, className){
    const div= document.createElement("div");
    div.className=`alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container=document.querySelector(".container");
    const main=document.querySelector(".main");
    container.insertBefore(div,main);
    
    setTimeout(()=>document.querySelector(".alert").remove(),3000);

}

//clear all fields
function clearFields(){
    document.querySelector("#numeProdus").value = "";
    document.querySelector("#pretProdus").value = "";
    document.querySelector("#cantitateProdus").value = "";
}

//add data

document.querySelector("#produs-form").addEventListener("submit",(e)=>{
    e.preventDefault();

    //get form values
    const numeProdus=document.querySelector("#numeProdus").value;
    const pretProdus=document.querySelector("#pretProdus").value;
    const cantitateProdus=document.querySelector("#cantitateProdus").value;
    const dataLimitaProdus=document.querySelector("#dataLimitaProdus").value;

    //validate
    if(numeProdus =="" || pretProdus =="" || cantitateProdus =="" || dataLimitaProdus==""){
        showAlert("Umpleti toate campurile","danger");
    }
    else{
        if(selectedRow == null){
            const list =document.querySelector("#produse-lista");
            const row =document.createElement("tr");
                
            row.innerHTML=`
                <td>${numeProdus}</td>
                <td>${pretProdus}</td>
                <td>${cantitateProdus}</td>
                <td>${dataLimitaProdus}</td>
                <td>  
                <a href="#" class="btn btn-warning btn-sm Editati">Editati</a>
                <a href="#" class="btn btn-danger btn-sm Stergeti">Stergeti</a></td>
            `;
            list.appendChild(row);
            selectedRow=null;
            showAlert("Produs adaugat","success")
        }
        else{
            selectedRow.children[0].textContent=numeProdus;
            selectedRow.children[1].textContent=pretProdus;
            selectedRow.children[2].textContent=cantitateProdus;
            selectedRow.children[3].textContent=dataLimitaProdus;

            selectedRow=null;  
            showAlert("Produs editat","info"); 
        }

        clearFields();
    }
});

//Editati date 
let target;
document.querySelector("#produse-lista").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("Editati")){
        selectedRow=target.parentElement.parentElement;
        document.querySelector("#numeProdus").value=selectedRow.children[0].textContent;
        document.querySelector("#pretProdus").value=selectedRow.children[1].textContent;
        document.querySelector("#cantitateProdus").value=selectedRow.children[2].textContent;
        document.querySelector("#dataLimitaProdus").value=selectedRow.children[3].textContent;
    }
});

//Stergeti date

document.querySelector("#produse-lista").addEventListener("click",(e)=>{
      target=e.target;
    if(target.classList.contains("Stergeti")){
        target.parentElement.parentElement.remove();
        showAlert("Produs sters", "danger")
    }
});