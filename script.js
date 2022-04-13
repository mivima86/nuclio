
const productListData = [{id: 0,
    name: 'Sony Pulse 3D',
    image: './img/headphones.jpg',
    price: 89.95,
    description: 'Juega cómodamente con unos auriculares inalámbricos optimizados para el audio 3D de las consolas PS5. Incluye carga por USB Type-C y doble micrófono con cancelación de ruido para que puedas conversar con claridad cristalina.',
 }];

const addProductToHtml = (product) => {
   
    const productListHtml = document.getElementById("productColId");
    const productHtml = 
       '<div class="card">'+
        '<div class="contentCard">'+
       `<img src="${product.image}" width="150" height="150" />` +
        `<p>${product.name}</p>` +
        `<h3>${product.price}€</h3>`+
        `<p>${product.description}</p>`+
        '</div>' + 
         '</div>';

    const prodDom = document.createElement("div");
    prodDom.innerHTML = productHtml;
    productListHtml.appendChild(prodDom); 
};
productListData.map((product) => addProductToHtml(product));