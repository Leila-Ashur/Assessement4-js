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

class Story {
    constructor(title,storyLength, moralLesson, ageGroup) {
      this.title=title
      this.storyLength = storyLength;
      this.moralLesson = moralLesson;
      this.ageGroup = ageGroup;
    }
     display_story(){
      return `The story ${this.title} is an interesting one for ${this.ageGroup}`
     }
    
  }
  
class Storyteller {
    constructor(name, language) {
      this.name = name;
      this.language = language;
    }
  
    tellStory() {
      console.log(`${this.name} tells a story in ${this.language}:`);
    }
  }
  
class Translator extends Storyteller {
    constructor(name, language,  language2) {
      super(name, language);
      this.language2 = language2;
    }

    translateStory() {
      console.log(`${this.name} translates a story from ${this.language} to ${this. language2}:`);
     
    }
  }
  const story = new Story("Micky Mouse",900, "Hardwork pays", "children");
  console.log(story)
  console.log(story.display_story())
  
  const storyteller = new Storyteller("Mercy", "Spanish");
  storyteller.tellStory();
  
  const translator = new Translator("Maria", "Spanish", "French");
  translator.translateStory();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    

// Create a LibraryCatalog class that handles the cataloging and management of
// books in a library. Implement methods to add new books, search for books by
// title or author, keep track of available copies, and display book details.

class LibraryCatalog{
   constructor(title,author){
    this.title=title
    this.author=author

   }
   addNewBook(){

   }
   searchBook(){}
}