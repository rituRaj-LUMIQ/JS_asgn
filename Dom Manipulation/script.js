document.getElementById('addRowBtn').addEventListener('click', function() {
    var table = document.getElementById('dataTable');
    var newRow = table.insertRow(-1);
    var nameCell = newRow.insertCell(0);
    var ageCell = newRow.insertCell(1);
    var actionCell = newRow.insertCell(2);
    nameCell.innerHTML = 'New Person';
    ageCell.innerHTML = '25';
    actionCell.innerHTML = '<button style="margin:auto" class="deleteRowBtn button-87">Delete</button>';
});

// Add event listener to dynamically added "Delete Row" buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteRowBtn')) {
        var row = event.target.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
});

// Add event listener to "Add Element" button
document.getElementById('addElementBtn').addEventListener('click', function() {
    var newElement = document.createElement('p');
    newElement.innerHTML = 'new element added after the click';
    document.body.appendChild(newElement);
});

// Add event listener to "Delete Element" button
document.getElementById('deleteElementBtn').addEventListener('click', function() {
    var lastElement = document.querySelector('p:last-child');
    if (lastElement) {
        lastElement.parentNode.removeChild(lastElement);
    }
});


// Add event listener to "Change CSS" button
document.getElementById('changeCSSBtn').addEventListener('click', function() {
    var paragraphs = document.querySelectorAll('p');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    // document.body.style.backgroundColor=`rgb${},${},${}`
    paragraphs.forEach(function(paragraph) {
        paragraph.style.color = 'blue';
        paragraph.style.fontWeight = 'bold';
    });
});