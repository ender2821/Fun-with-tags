// establish variables

const addButton = document.getElementById('addTag');
const deleteButton = document.querySelector('deleteTag')
const input = document.getElementById('tagName');
const tags = document.querySelector('.tags');
let storedData = [];
// render tags
function generateTags() {  
  if (storedData === undefined || storedData.length == 0) {
    console.log(tags);
    let html = '<p>Add Some Tags!<p>';
    tags.innerHTML = html;
  } else {
    storedData.sort();
    let html = '';
    for (i = 0; i < storedData.length; i++) { 
      html += '<li class="tag">' + storedData[i] + '' + "</li>";
    }
    tags.innerHTML = html;
    localStorage.setItem("storedData", JSON.stringify(storedData));
  }
}

// add user submitted items to array

function submitTag(e) {
  tagValue = input.value;
  storedData.push(tagValue);
  input.value = '';
  generateTags();
}

addButton.addEventListener('click', submitTag);
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    submitTag();
  }
});

// remove tags from array

function deleteTag(e) {
  console.log('click');
  console.log(this);
}

document.querySelector('body').addEventListener('click', function(e) {
  if (event.target.tagName.toLowerCase() === 'li') {
    const index = storedData.indexOf(event.target.innerHTML);
    if (index !== -1) {
        storedData.splice(index, 1);
    }
    generateTags();
  }
});

// persist data with local storage. 

function locateData() {
  let parsedData = JSON.parse(localStorage.getItem("storedData"))
  if (parsedData != undefined && parsedData != null) {
    storedData = parsedData
  } 
}
// run js

locateData();
generateTags()
