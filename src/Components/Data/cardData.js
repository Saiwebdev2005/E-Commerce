
let data = [
    {"id":1,"image":"http://dummyimage.com/192x100.png/ff4444/ffffff","title":"Dimanche","description":"","gender":"Male", "price":""},
    {"id":2,"image":"http://dummyimage.com/143x100.png/ff4444/ffffff","title":"Godden","description":"","gender":"Women", "price":""},
    {"id":3,"image":"http://dummyimage.com/157x100.png/dddddd/000000","title":"Haslum","description":"","gender":"Male", "price":""},
    {"id":4,"image":"http://dummyimage.com/202x100.png/cc0000/ffffff","title":"Limeburner","description":"","gender":"Male", "price":""},
    {"id":5,"image":"http://dummyimage.com/143x100.png/dddddd/000000","title":"Durrett","description":"","gender":"Women", "price":""},
    {"id":6,"image":"http://dummyimage.com/185x100.png/dddddd/000000","title":"Bagby","description":"","gender":"Women", "price":""},
    {"id":7,"image":"http://dummyimage.com/224x100.png/dddddd/000000","title":"Linnit","description":"","gender":"Women", "price":""},
    {"id":8,"image":"http://dummyimage.com/205x100.png/cc0000/ffffff","title":"Seppey","description":"","gender":"Women", "price":""},
    {"id":9,"image":"http://dummyimage.com/184x100.png/dddddd/000000","title":"Outram","description":"","gender":"Genderfluid", "price":""},
    {"id":10,"image":"http://dummyimage.com/186x100.png/5fa2dd/ffffff","title":"Capnerhurst","description":"","gender":"Women", "price":""},
    {"id":11,"image":"http://dummyimage.com/230x100.png/dddddd/000000","title":"Mitchener","description":"","gender":"Male", "price":""},
    {"id":12,"image":"http://dummyimage.com/125x100.png/cc0000/ffffff","title":"Ruffli","description":"","gender":"Male", "price":""},
    {"id":13,"image":"http://dummyimage.com/102x100.png/5fa2dd/ffffff","title":"Daout","description":"","gender":"Polygender", "price":""},
    {"id":14,"image":"http://dummyimage.com/167x100.png/ff4444/ffffff","title":"Lavrinov","description":"","gender":"Male", "price":""},
    {"id":15,"image":"http://dummyimage.com/238x100.png/ff4444/ffffff","title":"Lavelle","description":"","gender":"Male", "price":""},
    {"id":16,"image":"http://dummyimage.com/196x100.png/dddddd/000000","title":"Hawtry","description":"","gender":"Women", "price":""},
    {"id":17,"image":"http://dummyimage.com/168x100.png/5fa2dd/ffffff","title":"Bridell","description":"","gender":"Genderqueer", "price":""},
    {"id":18,"image":"http://dummyimage.com/142x100.png/dddddd/000000","title":"Kunc","description":"","gender":"Women", "price":""},
    {"id":19,"image":"http://dummyimage.com/135x100.png/dddddd/000000","title":"Gethins","description":"","gender":"Male", "price":""},
    {"id":20,"image":"http://dummyimage.com/112x100.png/dddddd/000000","title":"Brentnall","description":"","gender":"Women", "price":""},
    {"id":21,"image":"http://dummyimage.com/110x100.png/5fa2dd/ffffff","title":"Gwyer","description":"","gender":"Women", "price":""},
    {"id":22,"image":"http://dummyimage.com/153x100.png/ff4444/ffffff","title":"Simond","description":"","gender":"Male", "price":""},
    {"id":23,"image":"http://dummyimage.com/229x100.png/ff4444/ffffff","title":"Cammish","description":"","gender":"Women", "price":""},
    {"id":24,"image":"http://dummyimage.com/125x100.png/ff4444/ffffff","title":"Casol","description":"","gender":"Male", "price":""},
    {"id":25,"image":"http://dummyimage.com/226x100.png/5fa2dd/ffffff","title":"Ashburne","description":"","gender":"Male", "price":""},
    {"id":26,"image":"http://dummyimage.com/198x100.png/5fa2dd/ffffff","title":"Stean","description":"","gender":"Women", "price":""},
    {"id":27,"image":"http://dummyimage.com/104x100.png/5fa2dd/ffffff","title":"Twinbourne","description":"","gender":"Women", "price":""},
    {"id":28,"image":"http://dummyimage.com/100x100.png/dddddd/000000","title":"Rennels","description":"","gender":"Women", "price":""},
    {"id":29,"image":"http://dummyimage.com/194x100.png/5fa2dd/ffffff","title":"Fahrenbacher","description":"","gender":"Women", "price":""},
    {"id":30,"image":"http://dummyimage.com/110x100.png/cc0000/ffffff","title":"Borgesio","description":"","gender":"Women", "price":""}
  ];
  

let clothNames = ["T-Shirt", "Jeans", "Jacket", "Sweater", "Shirt", "Shorts", "Skirt", "Hoodie"];

data.forEach(item => {
    item.price = {value: Math.floor(Math.random() * (999 - 399 + 1)) + 399};
});

// Modify the title and description for an e-commerce store
data = data.map((item, index) => {
    let clothName = clothNames[index % clothNames.length]; // Cycle through cloth names
    item.title = clothName;
    item.description = `This ${clothName} is a must-have for your wardrobe. It's stylish and comfortable.`;
    return item;
});

export default data;