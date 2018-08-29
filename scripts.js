// establish variables

const addButton = document.getElementById('addTag');
const deleteButton = document.querySelector('deleteTag')
const input = document.getElementById('tagName');
const tags = document.querySelector('.tags');
const tagsData = [];

// render tags

function generateTags() {
  if (tagsData === undefined || tagsData.length == 0) {
    console.log(tags);
    let html = '<p>Add Some Tags!<p>';
    tags.innerHTML = html;
  } else {
    tagsData.sort();
    let html = '';
    for (i = 0; i < tagsData.length; i++) { 
      html += '<li class="tag">' + tagsData[i] + '' + "</li>";
    }
    tags.innerHTML = html;
  }
}

// add user submitted items to array

function submitTag(e) {
  tagValue = input.value;
  tagsData.push(tagValue);
  input.value = '';
  generateTags();
}

addButton.addEventListener('click', submitTag);
input.addEventListener("keyup", function(event) {
  event.preventDefault();
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
    console.log(event.target.innerHTML)
    const index = tagsData.indexOf(event.target.innerHTML);
    if (index !== -1) {
        tagsData.splice(index, 1);
    }
    generateTags();
  }
});

// run function

generateTags();

// persist data with local storage. 