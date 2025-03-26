function drag(event) {
    event.dataTransfer.setData("item", event.target.id);
}

const slots = document.querySelectorAll('.slot');
slots.forEach(slot => {
    slot.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    slot.addEventListener('drop', (event) => {
        const itemId = event.dataTransfer.getData("item");
        const item = document.getElementById(itemId);
        event.target.appendChild(item);
        checkCrafting();
    });
});

function checkCrafting() {
    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');
    const slot4 = document.getElementById('slot4');
    const slot5 = document.getElementById('slot5');
    const slot6 = document.getElementById('slot6');
    const slot7 = document.getElementById('slot7');
    const slot8 = document.getElementById('slot8');
    const slot9 = document.getElementById('slot9');
    
    if (slot1.contains(document.getElementById('wood')) && 
        slot2.contains(document.getElementById('wood')) && 
        slot3.contains(document.getElementById('wood'))) {
            document.getElementById('craftedItem').innerHTML = '<img src="https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Stick_JE1_BE1.png/revision/latest/thumbnail/width/360/height/360?cb=20200128023441" alt="Planks"> <p>Crafted: Wood Planks</p>';
    } else {
        document.getElementById('craftedItem').innerHTML = '<p>No valid crafting recipe</p>';
    }
}

function resetGrid() {
    const allItems = document.querySelectorAll('.item');
    allItems.forEach(item => {
        item.parentElement.appendChild(item);
    });
    const allSlots = document.querySelectorAll('.slot');
    allSlots.forEach(slot => {
        slot.innerHTML = '';
    });
    document.getElementById('craftedItem').innerHTML = '';
}
