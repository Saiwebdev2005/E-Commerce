
let data = [
    {"id":1,"image":"/assets/ClotheImage/T-shirt.jpg","title":"T-Shirt","description":"","gender":"Male", "price":"399"},
    {"id":2,"image":"/assets/ClotheImage/jeans.jpg","title":"Jeans","description":"","gender":"Women", "price":"799"},
    {"id":3,"image":"/assets/ClotheImage/jacket.jpg","title":"Jackets","description":"","gender":"Male", "price":"999"},
    {"id":4,"image":"/assets/ClotheImage/sweater.jpg","title":"Sweater","description":"","gender":"Male", "price":"499"},
    {"id":5,"image":"/assets/ClotheImage/shirt.jpg","title":"Shirt","description":"","gender":"Male", "price":"599"},
    {"id":6,"image":"/assets/ClotheImage/shorts.jpg","title":"Shorts","description":"","gender":"Male", "price":"399"},
    {"id":7,"image":"/assets/ClotheImage/skirt.jpg","title":"Skirt","description":"","gender":"Women", "price":"599"},
    {"id":8,"image":"/assets/ClotheImage/hoodie.jpg","title":"Hoodie","description":"","gender":"Women", "price":"899"},
    {"id":9,"image":"/assets/ClotheImage/sweater.jpg","title":"Sweater","description":"","gender":"Male", "price":"599"},
    {"id":10,"image":"/assets/ClotheImage/shirt.jpg","title":"Shirt","description":"","gender":"Male", "price":"699"},
    {"id":11,"image":"/assets/ClotheImage/shorts.jpg","title":"Shorts","description":"","gender":"Male", "price":"499"},
    {"id":12,"image":"/assets/ClotheImage/T-shirt.jpg","title":"T-Shirt","description":"","gender":"Male", "price":"899"},
    {"id":13,"image":"/assets/ClotheImage/jeans.jpg","title":"Jeans","description":"","gender":"Women", "price":"499"},
    {"id":14,"image":"/assets/ClotheImage/jacket.jpg","title":"Jackets","description":"","gender":"Male", "price":"899"},
    {"id":15,"image":"/assets/ClotheImage/skirt.jpg","title":"Skirt","description":"","gender":"Women", "price":"699"},
    {"id":16,"image":"/assets/ClotheImage/hoodie.jpg","title":"Hoodie","description":"","gender":"Women", "price":"499"},
    {"id":17,"image":"/assets/ClotheImage/sweater.jpg","title":"Sweater","description":"","gender":"Male", "price":"699"},
    {"id":18,"image":"/assets/ClotheImage/shirt.jpg","title":"Shirt","description":"","gender":"Male", "price":"549"},
    {"id":19,"image":"/assets/ClotheImage/shirt.jpg","title":"Shirt","description":"","gender":"Male", "price":"699"},
    {"id":20,"image":"/assets/ClotheImage/shorts.jpg","title":"Shorts","description":"","gender":"Male", "price":"559"},
    {"id":21,"image":"/assets/ClotheImage/skirt.jpg","title":"Skirt","description":"","gender":"Women", "price":"549"},
    {"id":22,"image":"/assets/ClotheImage/hoodie.jpg","title":"Hoodie","description":"","gender":"Women", "price":"899"},
]
  

let clothNames = ["T-Shirt", "Jeans", "Jacket", "Sweater", "Shirt", "Shorts", "Skirt", "Hoodie"];


// Modify the title and description for an e-commerce store
data = data.map((item, index) => {
    let clothName = clothNames[index % clothNames.length]; // Cycle through cloth names
    item.title = clothName;
    item.description = `This ${clothName} is a must-have for your wardrobe. It's stylish and comfortable.`;
    return item;
});

export default data;