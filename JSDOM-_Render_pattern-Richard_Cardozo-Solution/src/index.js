/*
 The `books` array contains the list of books in the shopping cart.
 DO NOT EDIT THIS ARRAY
*/
window.books = [
  {
    title: "PROLOG Programming for Artificial Intelligence",
    authors: ["Ivan Bratko"],
    description:
      "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
    price: 89.29,
    rating: 4.5,
    quantity: 1,
  },
  {
    title: "Elements of the Theory of Computation",
    authors: ["Harry Lewis", "Christos H. Papadimitriou"],
    description:
      "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
    price: 182.65,
    rating: 4.7,
    quantity: 2,
  },
  {
    title: "The Silmarillion",
    authors: ["J.R.R. Tolkien"],
    description:
      "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
    price: 14.85,
    rating: 5,
    quantity: 1,
  },
  {
    title: "An Introduction to the Analysis of Algorithms",
    authors: ["Sedgewick Robert", "Flajolet Philippe"],
    description: "Methods and models for mathematically analyzing algorithms.",
    price: 51.19,
    rating: 4.2,
    quantity: 10,
  },
  {
    title: "The Art of Computer Programming, Volumes 1-4",
    authors: ["Donald E. Knuth"],
    description:
      "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
    price: 189.98,
    rating: 5,
    quantity: 2,
  },
];

///////////////////////////////
// WRITE YOUR SOLUTION BELOW //
///////////////////////////////

/*
 Create and return the HTML to render a single book.
 The `book` parameter is an object representing a single book. 
*/
function renderBook(book) {
  const {title, authors, description, price, rating, quantity} = book

  const content = `
  <section class=books>
    <div class="book">
      <div class="details">
        <div class="title">
          ${title}
          <span class="rating">${rating}</span>
        </div>
        <div class="authors">by ${authors}</div>
        <div class="description">
          ${description}
        </div>
        <button class="removeBtn">Remove from cart</button>
      </div>
      <div class="quantity">${quantity} @ ${price}</div>
      <div class="price">${quantity * price}</div>
    </div>
  </section>
  `  
  return content
}

/*
  Calculate and return the total price of all items in the cart.
 */
function calculateTotal() {
  let total = 0
  books.forEach((book) =>{ total += book.price * book.quantity })
  return total; 
}


/*
  Render the array of books and the cart total and insert them on the DOM.
  The books should be rendered in the `section` with id "cartItems".
  The total should be rendered in the `section` with id "cartTotal".
*/
function render() {
  
  const cartItem = document.querySelector("#cartItems"); 
  cartItem.innerHTML = "";

  const content = books.map(renderBook).join("")
  if(content === "") {cartItem.innerText = "Nothing in cart"}
  else {cartItem.innerHTML = content}
  
  const totalRender = document.querySelector("#cartTotal > .total-price");
  totalRender.innerHTML = "";  
  
  const getContent = calculateTotal()
  if(getContent === 0) {totalRender.innerText = "$0"; }
  else{ totalRender.innerText = `$${getContent}`; } 
}

/*
  Sort the `books` array by price in ascending order, then call `render()`.
*/
const sortCart = (priceA, priceB) => {
  const priceACost = parseFloat(priceA.price)
  const priceBCost = parseFloat(priceB.price)

  return priceACost - priceBCost
}

function sortByPrice() {
    books.sort(sortCart)
    render()    
}

/*
  Perform all startup tasks here. Use this function to attach the required event listeners
  then call `render()`.
*/
function main() {
  const main = document.querySelector("main")
  main.addEventListener("click", sortByPrice) 
    
  render()
}

window.addEventListener("DOMContentLoaded", main);

/////////////////////////////////
// DO NOT EDIT BELOW THIS LINE //
/////////////////////////////////
window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;
