const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'assus laptop d34', price: 36000 },
    { name: 'apple smart watch', price: 2500 },
    { name: 'bashundhara binding paper', price: 100 },
    { name: 'lg smart phone', price: 22000 },
    { name: 'old granny land phone', price: 1000 },
];

function searchProduct(products, searchText) {
    const matched =[];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }

    }
    return matched;
}
const matched = searchProduct(products, 'phone');
console.log(matched);
