let data = [{"id":1,"image":"http://dummyimage.com/192x100.png/ff4444/ffffff","title":"Dimanche","description":"","gender":"Male"},
{"id":2,"image":"http://dummyimage.com/143x100.png/ff4444/ffffff","title":"Godden","description":"","gender":"Women"},
{"id":3,"image":"http://dummyimage.com/157x100.png/dddddd/000000","title":"Haslum","description":"","gender":"Male"},
{"id":4,"image":"http://dummyimage.com/202x100.png/cc0000/ffffff","title":"Limeburner","description":"","gender":"Male"},
{"id":5,"image":"http://dummyimage.com/143x100.png/dddddd/000000","title":"Durrett","description":"","gender":"Women"},
{"id":6,"image":"http://dummyimage.com/185x100.png/dddddd/000000","title":"Bagby","description":"","gender":"Women"},
{"id":7,"image":"http://dummyimage.com/224x100.png/dddddd/000000","title":"Linnit","description":"","gender":"Women"},
{"id":8,"image":"http://dummyimage.com/205x100.png/cc0000/ffffff","title":"Seppey","description":"","gender":"Women"},
{"id":9,"image":"http://dummyimage.com/184x100.png/dddddd/000000","title":"Outram","description":"","gender":"Genderfluid"},
{"id":10,"image":"http://dummyimage.com/186x100.png/5fa2dd/ffffff","title":"Capnerhurst","description":"","gender":"Women"},
{"id":11,"image":"http://dummyimage.com/230x100.png/dddddd/000000","title":"Mitchener","description":"","gender":"Male"},
{"id":12,"image":"http://dummyimage.com/125x100.png/cc0000/ffffff","title":"Ruffli","description":"","gender":"Male"},
{"id":13,"image":"http://dummyimage.com/102x100.png/5fa2dd/ffffff","title":"Daout","description":"","gender":"Polygender"},
{"id":14,"image":"http://dummyimage.com/167x100.png/ff4444/ffffff","title":"Lavrinov","description":"","gender":"Male"},
{"id":15,"image":"http://dummyimage.com/238x100.png/ff4444/ffffff","title":"Lavelle","description":"","gender":"Male"},
{"id":16,"image":"http://dummyimage.com/196x100.png/dddddd/000000","title":"Hawtry","description":"","gender":"Women"},
{"id":17,"image":"http://dummyimage.com/168x100.png/5fa2dd/ffffff","title":"Bridell","description":"","gender":"Genderqueer"},
{"id":18,"image":"http://dummyimage.com/142x100.png/dddddd/000000","title":"Kunc","description":"","gender":"Women"},
{"id":19,"image":"http://dummyimage.com/135x100.png/dddddd/000000","title":"Gethins","description":"","gender":"Male"},
{"id":20,"image":"http://dummyimage.com/112x100.png/dddddd/000000","title":"Brentnall","description":"","gender":"Women"},
{"id":21,"image":"http://dummyimage.com/110x100.png/5fa2dd/ffffff","title":"Gwyer","description":"","gender":"Women"},
{"id":22,"image":"http://dummyimage.com/153x100.png/ff4444/ffffff","title":"Simond","description":"","gender":"Male"},
{"id":23,"image":"http://dummyimage.com/229x100.png/ff4444/ffffff","title":"Cammish","description":"","gender":"Women"},
{"id":24,"image":"http://dummyimage.com/125x100.png/ff4444/ffffff","title":"Casol","description":"","gender":"Male"},
{"id":25,"image":"http://dummyimage.com/226x100.png/5fa2dd/ffffff","title":"Ashburne","description":"","gender":"Male"},
{"id":26,"image":"http://dummyimage.com/198x100.png/5fa2dd/ffffff","title":"Stean","description":"","gender":"Women"},
{"id":27,"image":"http://dummyimage.com/104x100.png/5fa2dd/ffffff","title":"Twinbourne","description":"","gender":"Women"},
{"id":28,"image":"http://dummyimage.com/100x100.png/dddddd/000000","title":"Rennels","description":"","gender":"Women"},
{"id":29,"image":"http://dummyimage.com/194x100.png/5fa2dd/ffffff","title":"Fahrenbacher","description":"","gender":"Women"},
{"id":30,"image":"http://dummyimage.com/110x100.png/cc0000/ffffff","title":"Borgesio","description":"","gender":"Women"}]

let clothNames = ["T-Shirt", "Jeans", "Jacket", "Sweater", "Shirt", "Shorts", "Skirt", "Dress", "Blouse", "Hoodie"];

// Modify the title and description for an e-commerce store
data = data.map((item, index) => {
    let clothName = clothNames[index % clothNames.length]; // Cycle through cloth names
    item.title = clothName;
    item.description = `This ${clothName} is a must-have for your wardrobe. It's stylish and comfortable.`;
    return item;
});

export default data;