const list_items = [
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

const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;

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

function setupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  // round up to include leftover items from data source
  let page_count = Math.ceil(items.length / rows_per_page);
  // create pagination buttons and append them to wrapper
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
}

// create individual button elements so that setupPagination()
// can combine buttons for the paginaton bar
function paginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;

  if (current_page == page) {
    button.classList.add('active');
  }

  // add event listeners to make buttons clickable
  button.addEventListener('click', function() {
    current_page = page;
    displayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector('.pagenumbers button.active');
    current_btn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
}

displayList(list_items, list_element, rows, current_page);
setupPagination(list_items, pagination_element, rows);