const formNode = document.getElementById('add-item');
const nameNode = document.getElementById('name');
const amountNode = document.getElementById('amount');
const descriptionNode = document.getElementById('description');

let itemList = [];

formNode.addEventListener('submit', function(event){
    event.preventDefault();
    const name = nameNode.value;
    const amount = amountNode.value;
    const description = descriptionNode.value;
    
    const newItem = {
        name: name,
        amount: amount,
        description: description
    };

    itemList.push(newItem);

    console.log(itemList);
});