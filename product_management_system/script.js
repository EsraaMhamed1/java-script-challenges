'use strict';

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

let mood = 'create';
let temp ;

// get total 
function getTotal(){
    if(price.value != ''){
        let result = (+price.value) + (+taxes.value) + (+ads.value)
         -discount.value;
        total.innerHTML=result; 
        total.style.background='#040'
    }else{
        total.innerHTML=0;
        total.style.background='#a00d02'
    }
}



// create product 

let dataProduct;

if(localStorage.product!=null){
    dataProduct=JSON.parse(localStorage.product);
}
else{
    dataProduct=[];
}

submit.onclick=function(){
    let newProduct = {
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }

    // count 
    if(mood==='create')
    {
        if(newProduct.count > 1){
            for(let i=0;i<newProduct.count;i++)
            {
                dataProduct.push(newProduct);
            }
    
        }else{
            dataProduct.push(newProduct);
        }

    }else{
        dataProduct[temp]= newProduct;
        mood = 'create';
        submit.innerHTML ='Create';
        count.style.display='block'
    }
    

    
    // save in localstorage
    localStorage.setItem('product',JSON.stringify(dataProduct));
    clearInputs();
    showData();
}


// clear inputs 
function clearInputs(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML=0;
    count.value='';
    category.value='';
}

// read 
function showData(){
    getTotal();
    let table = '';
    for(let i=0;i<dataProduct.length;i++){
        table +=`
        <tr>
        <td>${i}</td>
        <td>${dataProduct[i].title}</td>
        <td>${dataProduct[i].price}</td>
        <td>${dataProduct[i].taxes}</td>
        <td>${dataProduct[i].ads}</td>
        <td>${dataProduct[i].discount}</td>
        <td>${dataProduct[i].total}</td>
        <td>${dataProduct[i].category}</td>
        <td><button onclick="deleteProduct(${i})" id="delete">Delete</button></td>
        <td><button onclick="updateProduct(${i})" id="update">update</button></td>
        
        <tr>
        `
    }
    document.getElementById('tbody').innerHTML=table;


    // delete all 
    let btnDeleteAll = document.getElementById('deleteAll');
    if(dataProduct.length >0 ){
        btnDeleteAll.innerHTML=`
        <button onclick='deleteAll()'>delete All (${dataProduct.length}) </button>
        `;
    }else{
        btnDeleteAll.innerHTML=``;
    }
}
showData();

// delet 
function deleteProduct(i){
    dataProduct.splice(i,1);
    localStorage.setItem('product',JSON.stringify(dataProduct));
    showData();
}

function deleteAll (){
    localStorage.clear();
    dataProduct.splice(0);
    showData();

    
}



// update 
function updateProduct(i){
    title.value = dataProduct[i].title;
    price.value = dataProduct[i].price;
    taxes.value = dataProduct[i].taxes;
    ads.value = dataProduct[i].ads;
    discount.value = dataProduct[i].discount;
    category.value = dataProduct[i].category;
  
    getTotal();
    count.style.display='none';
    submit.innerHTML='Update';
    mood='Update';
    temp = i;
    scroll({
        top: 0,
        behavior: 'smooth',
    });
    
}

// search

let searchMood = 'title';

function getSearchMood(id){
    let search = document.getElementById('search');

    if(id=='searchTitle'){
        searchMood ='title';
    }else{
        searchMood ='category';
    }

    search.placeholder='Search By '+ searchMood ;
    search.focus();
    search.value='';
    showData();

}

function searchData (value){
    let table = '';

    if(searchMood =='title'){
        for(let i=0; i<dataProduct.length;i++){
            if(dataProduct[i].title.includes(value.toLowerCase())){
                table +=`
                   <tr>
                       <td>${i}</td>
                       <td>${dataProduct[i].title}</td>
                       <td>${dataProduct[i].price}</td>
                        <td>${dataProduct[i].taxes}</td>
                        <td>${dataProduct[i].ads}</td>
                        <td>${dataProduct[i].discount}</td>
                        <td>${dataProduct[i].total}</td>
                        <td>${dataProduct[i].category}</td>
                       <td><button onclick="deleteProduct(${i})" id="delete">Delete</button></td>
                       <td><button onclick="updateProduct(${i})" id="update">update</button></td>
        
                    <tr>
             `;
        }
    }

 }else{
    for(let i=0; i<dataProduct.length;i++){
        if(dataProduct[i].category.includes(value.toLowerCase())){
            table +=`
               <tr>
                   <td>${i}</td>
                   <td>${dataProduct[i].title}</td>
                   <td>${dataProduct[i].price}</td>
                    <td>${dataProduct[i].taxes}</td>
                    <td>${dataProduct[i].ads}</td>
                    <td>${dataProduct[i].discount}</td>
                    <td>${dataProduct[i].total}</td>
                    <td>${dataProduct[i].category}</td>
                   <td><button onclick="deleteProduct(${i})" id="delete">Delete</button></td>
                   <td><button onclick="updateProduct(${i})" id="update">update</button></td>
    
                <tr>
         `;
        }
    }
 }

 document.getElementById('tbody').innerHTML= table;
}


 


