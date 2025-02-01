// Array of objects with new data for each card
const products = [
    {
        name: "Fancy Mug", price: 250,
        color: "slate-50", textColor: "text-amber-900",
        priceColor: "text-amber-700"
    },

    {
        name: "Elegant Mug", price: 210,
        color: "slate-50", textColor: "text-stone-900",
        priceColor: "text-stone-800"
    },

    {
        name: "Stylish Mug", price: 230,
        color: "slate-50", textColor: "text-amber-900",
        priceColor: "text-amber-700"
    },
    {
        name: "Chic Mug", price: 220,
        color: "slate-50", textColor: "text-stone-900", priceColor: "text-stone-800"
    },
    {
        name: "Classic Mug", price: 240,
        color: "slate-50", textColor: "text-amber-900",
        priceColor: "text-amber-700"
    },

    {
        name: "Sophisticated Mug", price: 215,
        color:  "slate-50" , textColor: "text-stone-900",
        priceColor: "text-stone-800"
    },
    {
        name: "Modern Mug", price: 225,
        color:  "slate-50", textColor: "text-amber-900",
        priceColor: "text-amber-700"
    },
    {
        name: "Trendy Mug", price: 200,
        color:  "slate-50", textColor: "text-stone-900",
        priceColor: "text-stone-800"
    },
    {
        name: "Home Mug", price: 260,
        color: "slate-50", textColor: "text-amber-900",
        priceColor: "text-amber-700"
    }
];

// Function to update the cards
function updateCards() {
    const container = document.getElementById('product-cards');

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = `rounded-xl p-8 w-[320px] shadow-lg bg-${product.color}`;

        const img = document.createElement('img');
        img.src = `./imgs/img-${index + 1}.jpg`;
        img.alt = `${index + 1}`;
        img.className = 'w-[290px] h-[300px] rounded-lg';

        const title = document.createElement('h3');
        title.className = `text-xl font-bold mt-3 ${product.textColor}`;
        title.innerHTML = `🤎 ${product.name}`;

        const price = document.createElement('span');
        price.className = `text-lg font-bold ${product.priceColor}`;
        price.innerHTML = `${product.price}<sub>$</sub>`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        container.appendChild(card);
    });
}

// Call the function to update the cards
updateCards();
