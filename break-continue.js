const products = [
    { name: 'samsung s3 phone', price: 12000 },
    { name: 'assus laptop d34', price: 36000 },
    { name: 'apple smart watch', price: 2500 },
    { name: 'bashundhara binding paper', price: 100 },
    { name: 'lg smart phone', price: 22000 },
    { name: 'old granny land phone', price: 1000 },
];

// for(const product of products){
//     if(product.price<10000){
//         break;
//     }
//     console.log(product);
// }

for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);

}