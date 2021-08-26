const Items_Data=[
    {
         itemName:'Select Item',
         price:0
    },
    {
        itemName:'Pizza',
        price: 200
   },
   
   {
    itemName:'Burger',
    price: 150
},

{
    itemName:'French Fries',
    price: 80
},
{
    itemName:'Momos',
    price: 50
}

    
];

let itemscontainer = document.getElementById("items");
let quantitycontainer = document.getElementById("quantity");
// let input= document.getElementById("input")
// console.log(itemscontainer);
let addbuttoncontainer=document.getElementById("display")
function  checkforAddbutton(){
    if(itemscontainer.value!=0){
        //    addbuttoncontainer.style.display="block";
        // debugger;
        addbuttoncontainer.classList.add('active')
        addbuttoncontainer.classList.remove('inactive');
    }
    else{
        // addbuttoncontainer.style.display="none";
        addbuttoncontainer.classList.add('inactive')
        addbuttoncontainer.classList.remove('active')
    }
}

function populateItem(){
    let elem =''
    Items_Data.forEach((item)=>{
       elem =elem +`<option value= "${item.price}">${item.itemName}</option>`
    });
    itemscontainer.innerHTML=elem;
}
function addToCart(){
    // console.log("clicked");
    //1.pull the item name fron the select box which has been selected
    //2.get the quantity from quantity box
    //3.console log inputs


    // to get the indexvalue of seleted food item:we use "selectedIndex"
    let selectedItemIndex = itemscontainer.selectedIndex;
    let selecteditemName= itemscontainer[selectedItemIndex].text;
    
    // 1point ends here
    let selectedquantity = quantitycontainer.value
    console.log(selectedquantity);

} 