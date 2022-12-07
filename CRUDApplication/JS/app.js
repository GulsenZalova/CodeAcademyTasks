let companyName = document.querySelector(".companyName")
let contactName = document.querySelector(".contactName")
let contactTitle = document.querySelector(".contactTitle")
let companyId=document.querySelector(".companyId")
let submitBTN = document.querySelector(".submitBTN")
let tableList = document.querySelector(".table-list")
let form=document.querySelector(".form")
let inputs=document.querySelectorAll(".formControl")

function getData() {
    fetch("https://northwind.vercel.app/api/suppliers")
        .then(res => res.json())
        .then((infos) => displayData(infos))
        .catch((err) => console.log(err))
}
function displayData(infos) {
let newData = ""
infos.forEach(element=>{
    newData += `
    <tr id="${element.id}" >
    <td class="companyid">${element.id}</td>
    <td class="companyname">${element.companyName}</td>
    <td class="contactname">${element.contactName}</td>
    <td class="contacttitle">${element.contactTitle}</td>
    <td><button class="deleteBTN">Delete</button></td>
    <td><button class="updateBTN">Update</button></td>
    </tr>
    `
})
    tableList.innerHTML=newData
}

form.addEventListener("submit",function(e){
    e.preventDefault()
    inputs.forEach(input=>{
        if(input.value==""){
        console.log("Məlumat Daxil edin")
        }else{
            if(submitBTN.classList.contains("add-button")){
                fetch("https://northwind.vercel.app/api/suppliers",{
                    method:"POST",
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        companyName:companyName.value,
                        contactName:contactName.value,
                        contactTitle:contactTitle.value
                    })
                })
                .then(res=>res.json())
                .then(data=>getData())
            }else if(submitBTN.classList.contains("update-button")){
                let id=companyId.value
                fetch(`https://northwind.vercel.app/api/suppliers/${id}`,{
                    method:"PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        companyName:companyName.value,
                        contactName:contactName.value,
                        contactTitle:contactTitle.value
                    })
                })
                .then(res=>res.json())
                .then((data)=>getData())   
                submitBTN.classList.replace("update-button","add-button")
                submitBTN.value="Add" 
            }
        }
    })

    clearInputs()
})

tableList.addEventListener("click",function(e){
    if(e.target.classList.contains("deleteBTN")){
        let id=e.target.parentElement.parentElement.id
        deleteData(id)
    }
    if(e.target.classList.contains("updateBTN")){
        let parent=e.target.parentElement.parentElement
        let companyNameInfo=parent.querySelector(".companyname").textContent
        let contactNameInfo=parent.querySelector(".contactname").textContent
        let contacttitleInfo=parent.querySelector(".contacttitle").textContent
        let companyIdInfo=parent.id
        console.log(companyIdInfo)
        updateData(companyNameInfo,contactNameInfo,contacttitleInfo,companyIdInfo)
    }
})


function deleteData(id){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
fetch(`https://northwind.vercel.app/api/suppliers/${id}`,{
    method:"DELETE"
}).then(res=>res.json())
.then(data=>getData())
}

function updateData(companyNameInfo,contactNameInfo,contacttitleInfo,companyIdInfo){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    companyName.value=companyNameInfo
    contactName.value=contactNameInfo
    contactTitle.value=contacttitleInfo
    companyId.value=companyIdInfo
    submitBTN.classList.replace("add-button","update-button")
    submitBTN.value="Update"
}

function clearInputs(){
    inputs.forEach((input)=>{
        input.value=""
    })
}

getData()