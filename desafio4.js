const fs = require('fs');

class Container {
    constructor (archiveNeame){
        this.archiveName = archiveNeame;
        this.productSave =[]
    };

   generateNewId(){
        let idIndex = Math.floor(Math.random() * 9999) +1;
        if (Object.keys(this.productSave).includes(idIndex) == idIndex) {
            idIndex = generateNewId();
        };
        return idIndex;
    }
    
    save(item){
        
        this.productSave.push(item);
        item.id = this.generateNewId();
        
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

container1.save({item:'azucar',price:150});

container1.save({item:'fideos',price:80});

container1.save({item:'gaseosa',price:110});

// container1.getAll();

// container1.deleteById(2);

// container1.getAll();

// container1.deleteById(3);

// container1.getAll();

// container1.deleteAll();

// container1.getAll();