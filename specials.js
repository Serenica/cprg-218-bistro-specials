const currentDate = new Date();
console.log(currentDate); 
let currentDay = currentDate.getDay();
console.log(currentDay); /*counts from 0-6, Sunday is 0, Saturday is 6*/
if(currentDay==0){
    special_name.innerHTML = "$9 Deluxe Burger & Fries"
    special_image.src = "images/sunday.jpg"
    special_description.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side."
}
if(currentDay==1){
    special_name.innerHTML = "$12 Chicken Penne Alfredo"
    special_image.src = "images/monday.jpg"
    special_description.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top.  Side Caesar Salad included."
}
if(currentDay==2){
    special_name.innerHTML = "$10 Any Small Pizza"
    special_image.src = "images/tuesday.jpg"
    special_description.innerHTML = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust."
}
if(currentDay==3){
    special_name.innerHTML = "35¢ Chicken Wings"
    special_image.src = "images/wednesday.jpg"
    special_description.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that."
}
if(currentDay==4){
    special_name.innerHTML = "$9 Fish and Chips"
    special_image.src = "images/thursday.jpg"
    special_description.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!"
}
if(currentDay==5){
    special_name.innerHTML = "Half Price Cocktails All Day"
    special_image.src = "images/friday.jpg"
    special_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price."
}
if(currentDay==6){
    special_name.innerHTML = "$10 Jumbo Greek Salad"
    special_image.src = "images/saturday.jpg"
    special_description.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it.  Get a full sized Greek Salad at a great price."
}

