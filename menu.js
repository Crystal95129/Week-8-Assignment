//Create the code for class Model for a car dealership with car's model name and the year of making. 

class Model {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    describe(){
        return `${this.name} was made in ${this.year}.`;
    }
}  //When calling up the method (describe), it will display the details of the car. 


//Create another class called Dealership, and set array to contain multiple cars information. 
class Dealership {
    constructor(name){
        this.name = name;
        this.models = [];
    }

//Create addCar method to check if the the model being created is a real instance or error message will pop up.  
    addCar(model){
        if (model instanceof Model){
            this.models.push(model);
        }else{
            throw new Error (`You can only add an instance of Model. Argument is not a Model: ${model}`);
        }
    }

    describe(){
        return `${this.name} has ${this.models.length} cars.`;
    }
}//when calling up method (describe), it will tell us how many cars the selected dealership has. 



//Create the Menu class that drives the application and selections.
class Menu{
    constructor(){
        this.dealerships = [];
        this.selectedDealership = null;
    }

//The start menu.
    start(){
        let selection = this.showMainMenuOptions();
        while (selection !=0) {
            switch(selection){
                case '1':
                    this.createDealership();
                    break;
                case '2':
                    this.viewDealership();
                    break;
                case '3':
                    this.deleteDealership();
                    break;
                case '4':
                    this.displayDealerships();
                    break;
                default:
                    selection = 0;            
            }
            selection = this.showMainMenuOptions();
        }
        alert("See You Next Time!");
    }//Give menu different selection items, like create, view, delete, display, and exit function. 


    //Created Main Menu selections in words (string). 
    showMainMenuOptions(){
        return prompt(`
            0) Exit
            1) Create New Dealership 
            2) View Dealership
            3) Delete Dealership
            4) Display All the Dealerships
            `);
    }


    //Created submenu (Dealership) selections in words (string). 
    showDealershipMenuOptions(dealershipInfo){
        return prompt(`
            0) Back
            1) Add Model
            2) Delete Model
            ---------------------
            ${dealershipInfo}
            `);
    }           

//Created display dealership function. 
    displayDealerships(){
        let dealershipString = '';
        for (let i = 0; i < this.dealerships.length; i++){
            dealershipString += i + ') ' + this.dealerships[i].name + '\n';
        }
        alert(dealershipString);
    }

//Created create dealership function.
    createDealership(){
        let name = prompt('Enter name for new dealership:');
        this.dealerships.push(new Dealership(name));
    }

//Created view dealership function.
    viewDealership(){
        let index = prompt('Enter the index of the dealership you wish to view:');
        if(index > -1 && index < this.dealerships.length){
            this.selectedDealership = this.dealerships[index];
            let description = 'Dealership Name: ' + this.selectedDealership.name + '\n';

            for(let i = 0; i < this.selectedDealership.models.length; i++){
                description += i + ') ' + this.selectedDealership.models[i].name + ' - ' + this.selectedDealership.models[i].year + '\n';
            }


            //Included submenu for add, delete model, and back to the previous menu functions. 
            let selection = this.showDealershipMenuOptions(description);
            switch (selection){
                case '1':
                    this.addModel();
                    break;
                case '2':
                    this.deleteModel();
                    break;

            }
        }
    }


    //Created delete dealership function.
    deleteDealership(){
        let index = prompt('Enter the index of the dealership you wish to delete:');
        if(index > -1 && index < this.dealership.length){
            this.dealerships.splice(index, 1);
        }
    }

//Created add model option for the sub dealership menu. 
    addModel(){
        let name = prompt('Enter name for new model:');
        let year = prompt('Enter the year for new model:');
        this.selectedDealership.models.push(new Model(name, year));
    }

//Created delete model option for the sub dealership menu. 
    deleteModel(){
        let index = prompt('Enter the index of the model you wish to delete:');
        if(index > -1 && index < this.selectedDealership.models.length){
            this.selectedDealership.models.splice(index, 1);
        }
    }
}

//Created a user instance of the menu with the start() point. 
let menu = new Menu();
menu.start();