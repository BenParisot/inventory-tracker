const inventoryTableNode = document.getElementById('inventory');

const newItem = {
    name: 'apple',
    description: 'a delicious fruit',
    amount: 12
};

const itemList = [];

const item = {
    name: newItem.name,
    description: newItem.description,
    amount: newItem.amount
};

itemList.push(item);

console.log(item);

for(let index = 0; index < itemList.length; index++) {
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