class Ninja {
    constructor(nombre){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(`Hello, my name is ${this.nombre}`);
    }

    showStats(){
        console.log("Name: "+ this.nombre +"\n"+
                        "Health: "+ this.salud +"\n"+
                        "Speed: "+ this.velocidad +"\n"+
                        "Streght: "+ this.fuerza +"\n");
    }

    drinkSake(){
        console.log("My health is now "+ this.salud);
    }

}


const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();