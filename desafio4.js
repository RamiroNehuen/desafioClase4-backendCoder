const fs = require('fs');

class Container {
    constructor (archiveNeame){
        this.archiveName = archiveNeame;
        this.productSave =[]
    };

    save(id, title, price){
        
        this.productSave.push({
            id: id,
            title: title,
            price: price,
        })
        
        const productsText = JSON.stringify(this.productSave);

        fs.promises.writeFile(`./${this.archiveName}`, productsText)
    };

    getById(givenId){
        const productById = this.productSave.find(product => product.id === givenId)
        console.log(productById)
    };

    getAll(){
        console.log(this.productSave);
    };

    deleteById(givenId){
        this.productSave = this.productSave.filter(product => {
            return product.id != givenId});
        
        const productsText = JSON.stringify(this.productSave);

        fs.promises.writeFile(`./${this.archiveName}`, productsText)

    };

    deleteAll(){
        this.productSave = [];
        
        const productsText = JSON.stringify(this.productSave);

        fs.promises.writeFile(`./${this.archiveName}`, productsText)
    };
}
const container1 = new Container ('first-archive-products.txt');

container1.save(2,'azucar',150);

container1.save(3,'fideos',80);

container1.save(4,'gaseosa',110);

container1.getAll();

container1.deleteById(2);

container1.getAll();

container1.deleteById(3);

container1.getAll();

container1.deleteAll();

container1.getAll();