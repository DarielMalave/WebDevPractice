const data_source = [
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
	"Item 8",
	"Item 9",
	"Item 10",
	"Item 11",
	"Item 12",
	"Item 13",
	"Item 14",
	"Item 15",
	"Item 16",
	"Item 17",
	"Item 18",
	"Item 19",
	"Item 20",
	"Item 21",
	"Item 22"
];

const data_container = document.getElementById('list');
const pagination_bar = document.getElementById('pagination');

let current_page = 1;
let rows_per_page = 5;
let number_of_pages = Math.ceil(data_source.length / rows_per_page);

function displayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  // this is done because array indexes start at zero
  page --;

  // start acts as an offset
  let start = rows_per_page * page;
  // end simply adds the offset to how many rows are in a page
  let end = start + rows_per_page;
  // carve out the specific items needed from data source
  let paginatedItems = items.slice(start, end);
  // iterate through spliced data source and display the data
  // in a wrapper containter
  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let item_element = document.createElement('div');
    item_element.classList.add('item');
    item_element.innerText = item;

    wrapper.appendChild(item_element);
  }
}

function nextButton(pagination_bar) {
  let button = document.createElement('button');
  button.innerText = "Next Page";
  pagination_bar.appendChild(button);

  button.addEventListener('click', function() {
    let current_page = document.getElementById('current_page_counter');
    // this conditional is to make sure paginated results do not go out of bounds
    if (0 <= current_page.value && current_page.value < number_of_pages) {
      current_page.value ++;
      displayList(data_source, data_container, rows_per_page, current_page.value);
    }
  });
}

function previousButton(pagination_bar) {
  let button = document.createElement('button');
  button.innerText = "Previous Page";
  pagination_bar.appendChild(button);

  button.addEventListener('click', function() {
    let current_page = document.getElementById('current_page_counter');
    // this conditional is to make sure paginated results do not go out of bounds
    if (1 < current_page.value && current_page.value <= number_of_pages) {
      current_page.value --;
      displayList(data_source, data_container, rows_per_page, current_page.value);
    }
  });
}

displayList(data_source, data_container, rows_per_page, current_page);
previousButton(pagination_bar);
nextButton(pagination_bar);