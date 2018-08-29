// establish variables

const button = document.getElementById('addTag');
const input = document.getElementById('tagName');
const tags = document.querySelector('.tags');
const tagsData = [];

// generate array

function generateTags() {
  if (tagsData === undefined || tagsData.length == 0) {
    console.log(tags);
    const html = '<p>Add Some Tags!<p>';
    tags.innerHTML = html;
  } else {
    tags.innerHTML = 'some tags exist';
    tagsData.sort();
    
  }
}

// add user submitted items to array

function submit(e) {
  tagValue = input.value;
  tagsData.push(tagValue);
  generateTags();
}

button.addEventListener('click', submit);
// update array in DOM

// add remove button to tags

// remove tags from DOM 

// run function

generateTags();

// pesist data with local storage. 