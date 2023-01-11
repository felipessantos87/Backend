class Traveler{
    constructor(name){
        this.name = name;
        this.food = 1;
        this.isHealthy = true
    }
    hunt(){
        this.food +=2 
    }
    eat(){
        if(this.food == 0){
            this.isHealthy = false;
            return `Traveler não tem comida, ficará doente por nao conseguir se alimentar!`
        }
        else{
            this.food -= 1;
            return `Traveler continua saudavel e possui ${this.food} de comida restante!`
        }
    }
}
class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = []
    }

    getAvailableSeatCount(){
        let assentosVagos = this.capacity - this.passengers.length
        return assentosVagos
    }

    join(passageiro){

        if(this.getAvailableSeatCount() > 0){
            this.passengers.push(passageiro)
        }
    }
    
    shouldQuarantine(){
        for(let i = 0; i < this.passengers.length; i++){
            if(this.passengers[i].isHealthy !== true){
                return true
            }
        }
        return false
    }

    totalFood(){
        let valorComida = 0
        for(let i = 0; i < this.passengers.length; i++){
            valorComida += this.passengers[i].food
        }
        return valorComida
    }
}


// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);