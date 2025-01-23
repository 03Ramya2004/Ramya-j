var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.touppercase()
    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].queryselecter("p").textcontent
        if(production.touppercase().indexof(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})