// establish variables

const addButton = document.getElementById('addTag');
const deleteButton = document.querySelector('deleteTag')
const input = document.getElementById('tagName');
const tags = document.querySelector('.tags');
let storedData = [];

// render tags

function generateTags() {  
  const setStorage = localStorage.setItem("storedData", JSON.stringify(storedData));
  if (storedData === undefined || storedData.length == 0) {
    let html = '<p>Add Some Tags!<p>';
    tags.innerHTML = html;
    setStorage;
  } else {
    storedData.sort();
    let html = '';
    for (i = 0; i < storedData.length; i++) { 
      html += '<li class="tag">' + storedData[i] + '' + "</li>";
    }
    tags.innerHTML = html;
    setStorage;
  }
}

// add user submitted items to array

function submitTag(e) {
  const tagValue = input.value.toLowerCase();
  if (storedData.indexOf(tagValue) > -1) {
    alert('This tag already exists');
    input.value = '';
    return
  } else if ( tagValue == '' ) {
    input.value = '';
    return
  } else if ( tagValue.match(/^\s+$/)) {
    input.value = '';
    return
  } else if ( tagValue.match(/[^A-Za-z0-9\s]+/)) {
    alert('No numbers or special characters allowed.');
    input.value = '';
    return
  }
  storedData.push(tagValue);
  input.value = '';
  generateTags();
}

addButton.addEventListener('click', submitTag);
input.addEventListener('keyup', function(event) {
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

// persist data with local storage

function locateData() {
  let parsedData = JSON.parse(localStorage.getItem("storedData"))
  if (parsedData != undefined && parsedData != null) {
    storedData = parsedData
  }
}

// run js

locateData();
generateTags();
