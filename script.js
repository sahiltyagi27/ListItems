let changeHeading = document.getElementById('change-heading');
let addItem = document.getElementById('add');
remove();
up();
down();

/** An event listener to change heading of the document
*   when the change heading button is clicked 
*/
changeHeading.addEventListener('click', () => {
    let heading = document.getElementById('main-heading');
    let newHeading = prompt('Enter new heading');
    heading.textContent = newHeading;
});


/**An event listener to add item to the  list*/
addItem.addEventListener('click', () => {
    let a = createItem();
    document.getElementById('tableBody').appendChild(a);
    remove();
    up();
    down();
});

/** A function to remove the item from list when the
 *  remove button adjacent to the list item is clicked
 */

function remove() {
    let removeItem = document.querySelectorAll('.remove');
    for (let i = 0; i < removeItem.length; i++) {
        removeItem[i].addEventListener('click', () => {
            let a = removeItem[i].parentNode.parentNode;
            let tbody = document.getElementById('tableBody');
            tbody.removeChild(a);
        });
    }
}

/** A function to move the list item upwards in the list 
 * when an Up button adjacent to the list item is clicked
 */

function up() {
    let up = document.querySelectorAll('.up');
    for (let i = 0; i < up.length; i++) {
        up[i].addEventListener('click', () => {
            let prevNode = up[i].parentNode.parentNode.previousElementSibling;
            let parentNode = up[i].parentNode.parentNode.parentNode;
            let newNode = up[i].parentNode.parentNode;
            if (prevNode) {
                parentNode.insertBefore(newNode, prevNode);
            }
        });
    }
}

function down() {
    let down = document.querySelectorAll('.down');
    for (let i = 0; i < down.length; i++) {
        down[i].addEventListener('click',()=>{
            let nextNode = down[i].parentNode.parentNode.nextElementSibling;
            let parentNode = down[i].parentNode.parentNode.parentNode;
            let newNode = down[i].parentNode.parentNode;
            if(nextNode){
                parentNode.insertBefore(nextNode,newNode);
            }
        });
    }
}

/** Function to create a list item and then send it to the add item */

function createItem(){
    let listItem = prompt('What do you want to add to list?');
    let a = document.createElement('tr');
    let b = document.createElement('td');
    let c = document.createElement('td');
    let d = document.createElement('td');
    let e = document.createElement('td');
    let removeButton = document.createElement('button');
    let upButton = document.createElement('button');
    let downButton = document.createElement('button');
    upButton.className = 'btn btn-primary up';
    upButton.textContent = 'Up';
    downButton.className = 'btn btn-success down';
    downButton.textContent = 'Down';
    removeButton.className = 'btn btn-danger remove';
    removeButton.textContent = 'Remove'
    c.appendChild(upButton);
    d.appendChild(removeButton);
    e.appendChild(downButton)
    b.textContent = listItem;
    a.appendChild(b);
    a.appendChild(c);
    a.appendChild(e);
    a.appendChild(d);
    return a;
};