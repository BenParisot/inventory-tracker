const inventoryTableNode = document.getElementById('inventory');

const itemListJSON = window.localStorage.getItem('item-list');
const itemList = JSON.parse(itemListJSON);




for(let index = 0; index < itemList.length; index++) {
    const newItem = itemList[index];
    const item = {
        name: newItem.name,
        description: newItem.description,
        amount: newItem.amount
    };
    
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const descriptionCell = document.createElement('td');
    const amountCell = document.createElement('td');

    nameCell.textContent = item.name;
    descriptionCell.textContent = item.description;
    amountCell.textContent = item.amount;

    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(amountCell);

    console.log(row);


    inventoryTableNode.appendChild(row);


}