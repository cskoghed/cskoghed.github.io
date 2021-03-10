var table1 =
    {
        "cart" :
            [

            ],
        
        "amount" :
            [

            ]
    };

var table2 =
    {
        "cart" :
            [

            ],
        
        "amount" :
            [
                
            ]
    };

var table3 =
    {
        "cart" :
            [

            ],
        
        "amount" :
            [
                
            ]
    };

var table4 =
    {
        "cart" :
            [

            ],
        
        "amount" :
            {

            }
    };

var tables = {
    "table1": table1,
    "table2": table2,
    "table3": table3,
    "table4": table4
};

function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", $("#" + dragevent.target.id).data("item"));
}

const createOrderTable = (table, dropevent) => {
    const previousTable = table.cart;

    return {
        execute() {
            if ((namn in table1.amount)){
                table1.amount[namn] +=1;
            }else{
                table1.cart.push(beverage);
                table1.amount[namn] = 1;
            }
        },

        undo() {
            table.cart = previousTable1;
        }
    }
}

function drop(dropevent) {
    dropevent.preventDefault();

    var id = dropevent.target.id;

    let beverage = JSON.parse(dropevent.dataTransfer.getData("text"));
    // console.log(beverage.namn);
    // console.log(typeof(beverage));
    namn = beverage.namn
    switch(id){
        case "table1":
            console.log("1");
            createCommandManager(tables).doCommand(createOrderTable(table1, ));
            break;

        case "table2":
            createCommandManager(tables).doCommand(createOrderTable(table2));
            break;

        case "table3":
            createCommandManager(tables).doCommand(createOrderTable(table3));
            break;

        case "table4":
            createCommandManager(tables).doCommand(createOrderTable(table4));
            break;

        default:
            break;
    }
}

const createCommandManager = (target) => {
    let history = [null];
    let position = 0;

    return {
        doCommand(commandType) {
            if (position < history.length -1) {
                history = history.slice(0, position + 1)
            }

            if (commands[commandType]) {
                const concreteCommand = commands[commandType](target);
                history.push(concreteCommand);
                position += 1;

                concreteCommand.execute();
            }
        },

        undo() {
            if (position > 0) {
                history[position].undo();
                position -= 1;
            }
        },

        redo() {
            if(position < history.length -1) {
                position += 1;
                history[position].execute();
            }
        }
    }
}

/*
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
*/
