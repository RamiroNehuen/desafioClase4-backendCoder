const fs = require('fs');

class Container {
    constructor (fileName){
        this.fileName = fileName;
        this.productSave =[]
    };

   generateNewId(){
        let idIndex = Math.floor(Math.random() * 9999) +1;
        if (Object.keys(this.productSave).includes(idIndex) == idIndex) {
            idIndex = generateNewId();
        };
        return idIndex;
    }

    createFile(){
        const productsText = JSON.stringify(this.productSave)
        try { fs.promises.writeFile(`./${this.fileName}`, productsText)
            }
        catch (err) {
            console.log('No se pudo crear el archivo!')
        }
    };
    
    save(item){
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            this.productSave.push(item);
            item.id = this.generateNewId();
            const productsText = JSON.stringify(this.productSave);
            try { fs.promises.writeFile(`./${this.fileName}`, productsText)
            }
            catch (err) {
                console.log('No se pudo escribir el archivo!')
            }
        })
        .catch(err => {console.log('Error de Lectura', err)})
    };

    getById(givenId){
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            const productById = this.productSave.find(product => product.id === givenId)
            console.log(productById)
        })
        .catch(err => {console.log('Error de Lectura', err)})

        
    };

    getAll(){
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            console.log(this.productSave);
        })
        .catch(err => {console.log('Error de Lectura', err)})
    };

    deleteById(givenId){
        
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            this.productSave = this.productSave.filter(product => product.id != givenId);
            console.log(this.productSave);
            
            const productsText = JSON.stringify(this.productSave);

            try { fs.promises.writeFile(`./${this.fileName}`, productsText)
            }
            catch (err) {
                console.log('No se pudo escribir el archivo!')
            }
        })
        .catch(err => {console.log('Error de Lectura', err)})

    };

    deleteAll(){
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            this.productSave = [];
            console.log(this.productSave);
            
            const productsText = JSON.stringify(this.productSave);

            try { fs.promises.writeFile(`./${this.fileName}`, productsText)
            }
            catch (err) {
                console.log('No se pudo escribir el archivo!')
            }
        })
        .catch(err => {console.log('Error de Lectura', err)})
    };
}
const container1 = new Container ('first-file-products.txt');

 // container1.createFile();

// container1.save({item:'azucar',price:150});

// container1.save({item:'fideos',price:80});

 container1.save({item:'gaseosa',price:110});

// container1.getAll();

// container1.deleteById(4453);

// container1.getAll();

// container1.deleteById(3);

// container1.getAll();

// container1.deleteAll();

// container1.getAll();