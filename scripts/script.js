let itemsContainerElement = document.querySelector('.items-container');
// let item = {
//     item_image: 'images/7.jpg',
//     rating: {
//         stars: 4.5,
//         noOfReviews: 1400,
//     },
//     company_name:'Nike',
//     item_name:'Nike Casual Shoes Wh',
//     current_price: 606,
//     original_price: 1045,
//     discount_percentage: 42,

// }
let innerHTML = ``;
items.forEach(item => {
    innerHTML += `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item pic">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}k
    </div>
    <div class="company-name">
        ${item.company}
    </div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag">Add To Cart</button>
</div>`
});
itemsContainerElement.innerHTML = innerHTML;