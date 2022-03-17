///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]



const summedPrice = cart.reduce(function addUp (sum, item) {
    const newSum = sum + item.price;
    return newSum
}, 0)  
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    cartTotal *= 1 + tax;
    cartTotal -= couponValue;
    return cartTotal;
}

console.log(calcFinalPrice(summedPrice, 2.75, .07));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Name- String, it's just a bunch of letters
    shipping- String, same reason as Name
    card number- Number, It's a bunch of numbers
    items- array, it's multiple items

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const menuItemOne =  {
    name: 'pizza',
    price: 8.99
}

const customer = {
    name: 'Jill',
    shipping: '12345 Nowhere Lane',
    cardInfo: 234864168,
    items: [
        {
            name: 'Dog Water Bowl',
            price: 4.99
        },
        {
            name: 'Dog bed',
            price: 79.99
        },
        {
            name: 'Dog food',
            price: 44.99
        },
    ]
}