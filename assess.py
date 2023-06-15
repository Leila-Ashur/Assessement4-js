# **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.

# Sudo Code
# This quesstion wants me to have my input as `Story`, `StoryTeller`, and `` so that i will
# able to know its what kind of story  and what to translate
# it also wants me to to come up with a software where i will model so as to translate 
# them into diferent languages so that it can be understand the output is supposed to
# be the recorded stories which are translated into different  languages
class Ancestarl_Storeies:
    def __init__(self,Story, StoryTeller ) :
        self.story=Story
        self.storyTeller=StoryTeller
    def predic_translator(self,) :
        if "story1 ==short and teaches people to pray, and is narrated to <=10 yearold people":
            return"The story will be transalated to English Kiswahili"
        elif "story2 ==Long and teaches people to work hard, and is narrated to =>11 yearold people":
            return "The story will be transalated to English"
        else: return "It will remain in the language its narrated"
        ancestor=Ancestarl_Storeies(self.Prayer,self.Priest)
        predict_translator
        
        



# 4**African Music Festival:** You're in charge of organizing a Pan-African music
# festival. Many artists from different countries, each with their own musical style
# and instruments, are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# how you might use inheritance if there are different types of performances or
# stages.

#5Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values. 

# The question wants my input to be the attributes which is the name,quantity and price. Of a particular product
# The output should be the total value of the multiple objects of the product added added
# The process is creating a class where it  has 3 attributes name,price,quantity. then we have the methods to
#  caxlculate our toatal value
class Product:
    def __init__(self,name,quantity,price):
        self.name=name
        self.price=price
        self.quantity=quantity
    def total_value(self,) :
        total= self.price*self.quantity
        return total
    product=Product (self,cloth,1,1000)
    product.total_value(5,5000)
    
        
        
        
           
        
           
        