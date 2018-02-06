function myfunction(){
        x=document.getElementById("demo");  //查找元素
        x.innerHTML="Hello JavaScript";    //改变内容
    }
    function changeImage()
    {
        element=document.getElementById("myimg");
        if(element.src.match("bulboff"))
        {
            element.src="imgs/eg_bulbon.gif"
        }
        else
        {
            element.src="imgs/eg_bulboff.gif"
        }
    }
    function changeColor(){
        x=document.getElementById("myp");
        x.style.color="#ff0000";
    }
    function checknum(){
        x=document.getElementById("num");
        if(x.value==""||isNaN(x.value))
        {
            alert("not a number");
        }
        else{
            alert("ok");
        }
    }