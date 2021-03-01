var table_1 = 
    {
        "cart" : 
            [

            ]
    };

var table_2 = 
    {
        "cart" : 
            [

            ]
    };

var table_3 = 
    {
        "cart" : 
            [

            ]
    };

var table_4 = 
    {
        "cart" : 
            [

            ]
    };


function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", $("#" + dragevent.target.id).data("item"));
}

function drop(dropevent) {
    dropevent.preventDefault();
    
    var id = dropevent.target.id;
    switch(id){
        case "table1":
            table_1.cart.push(JSON.parse(dropevent.dataTransfer.getData("text")));
            break;
            
        case "table2":
            table_2.cart.push(JSON.parse(dropevent.dataTransfer.getData("text")));
            break;
            
        case "table3":
            table_3.cart.push(JSON.parse(dropevent.dataTransfer.getData("text")));
            break;
            
        case "table4":
            table_4.cart.push(JSON.parse(dropevent.dataTransfer.getData("text")));
            break;
            
        default:
            break;
    }
}
                    


//Make list of beverages
window.onload = beverageList;
function beverageList() {
    var listDiv = document.getElementById('list');
    var ul=document.createElement('ul');
    
    listDiv.appendChild(ul);
    
    //List items
    for (var i = 0; i < Object.keys(DB1.sprits).length; ++i) {
        
        var li= document.createElement('li');
        li.setAttribute("ondragstart", "drag(event)");
        li.setAttribute("draggable", "true");
        li.setAttribute("id", i);
        
        //List properties of item
        var innerUl = document.createElement('ul');
        var name = document.createElement('li');
        var price = document.createElement('li');
        name.append(DB1.sprits[i].namn);   
        price.append(DB1.sprits[i].prisinklmoms);
        innerUl.appendChild(name); 
        innerUl.appendChild(price); 
        li.appendChild(innerUl);
        ul.appendChild(li);
        $("#" + i).data("item", JSON.stringify(DB1.sprits[i]));
    }
}
                        
                        