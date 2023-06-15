// Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.
class Product{
    constructor(name,price,quantity){
        this.name=name
        this.price=price
        this.quantity=quantity
    }
    totalValue(){
       let total= this.price*this.quantity
       console.log(total);



    }
}

//  **Ancestral Stories:** In many African cultures, the art of storytelling is passed
//  down from generation to generation. Imagine you're creating an application that
//  records these oral stories and translates them into different languages. The
//  stories vary by length, moral lessons, and the age group they are intended for.
//  Think about how you would model `Story`, `StoryTeller`, and `Translator`
//  objects, and how inheritance might come into play if there are different types of
//  stories or storytellers.

//  Sudo Code
//  This quesstion wants me to have my input as  length, moral lessons, and the age group`, and `` so that i will
//  able to know its what kind of story  and what to translate
//  it also wants me to to come up with a software where i will model so as to translate 
//  them into diferent languages so that it can be understand the output is supposed to
//  be the recorded stories which are translated into different  languages
class AncestralStories{
    constructor( length, morallessons, agegroup){
        this.length=length
        this.morallessons=morallessons
        this.agegroup=agegroup

    }
    translate(){
        if( "story1 ==short and teaches people to pray, and is narrated to <=10 yearold people"){
            return"The story will be transalated to English Kiswahili" 
        }
       
    else if ("story2 ==Long and teaches people to work hard, and is narrated to =>11 yearold people"){
        return "The story will be transalated to English"
    }
      
     else {  return "It will remain in the language its narrated"
    }
     
    console.log(this.translate);
    }
    
}