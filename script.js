var x = document.getElementById("task");
var y = document.getElementById("click");
var u = document.querySelector("ul");
var taskCount = 0;
y.addEventListener('click', createElemOnClick);
x.addEventListener("keypress", createElemOnPress);

function createElemOnPress()
{
    if(x.value.length > 0 && event.keyCode == 13)
    {
        
        var li = document.createElement("li");
        li.id = (++taskCount);
        var inn = li.appendChild(document.createElement("INPUT"));
        inn.setAttribute("type" , "checkbox");
        inn.onchange= tick;
        li.appendChild(inn);
        li.appendChild(document.createTextNode(x.value));
        u.appendChild(li);
        x.value = "";
        
    }
}
function createElemOnClick()
{
    if(x.value.length > 0)
    {
        
        var li = document.createElement("li");
        li.id = (++taskCount);
        var inn = li.appendChild(document.createElement("INPUT"));
        inn.setAttribute("type" , "checkbox");
        inn.onchange= tick;
        li.appendChild(inn);
        li.appendChild(document.createTextNode(x.value));
        u.appendChild(li);
        x.value = "";
        
    }
    
}
function tick()
{
    var task = document.getElementById(this.parentNode.id);
	if (this.checked)
    {
    	task.style.textDecoration = 'line-through';
    }
    else
    {
    	task.style.textDecoration = 'none';
    }
 
}
