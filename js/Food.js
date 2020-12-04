class Food{
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image= loadImage("images/Milk.png"); 

    }


    updateFoodStock(foodStock){
        this.foodStock=foodStock;
    }

    getFoodStock(){
        return this.foodStock
    }

    deductFood(){
     if (this.foodStock>0) {
         this.foodStock+= -1;
     }
    }

    getfedTime(lastFed){
    this.lastFed=lastFed;
    }

    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if (this.foodStock!=0) {
            for (let index = 0; index < this.foodStock; index++){ 
               if (index%10==0) {
                   x=80;
                   y+=50
               }
                image(this.image,x,y,50,50);
            x+=30;
            }
        }

       
    }

    bedroom(){
        background(bedroom,500,250);
    }
    garden(){
        background(garden,500,250);
    }
    washroom(){
        background(washroom,500,250);
    }
}