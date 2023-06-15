fun main(){
    var cloth=Product("Dress",3,1000)
    cloth.price
    cloth.totalValue(10000,5)
    println(cloth)




}



// 5. Create a class called Product with attributes for name, price, and quantity.
//Implement a method to calculate the total value of the product (price * quantity).
//Create multiple objects of the Product class and calculate their total values.

//sudo
//The question wants my input to be the attributes which is the name,quantity and price. Of a particular product
//The output should be the total value of the multiple objects of the product added added
//The process is creating a class where it  has 3 attributes name,price,quantity. then we have the methods to
// caxlculate our toatal value
class Product(var name:String,var quantity:Int,var price:Int){
    fun totalValue(price: Int,quantity: Int) :Int{
        var total=price*quantity
       return total

    }




}
//**Wildlife Preservation:** You're a wildlife conservationist working on a
//program to track different species in a national park. Each species has its own
//characteristics and behaviors, such as its diet, typical lifespan, migration
//patterns, etc. Some species might be predators, others prey. You'll need to
//create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//these classes might relate to each other through inheritance.

//sudo
//i think the input will be the characteristics and behaviors,  because with that it can be able to
// inherit and its common in all species the out put will betracking different species and predators
//patterns,

 open class WildlifePreservation(var  characteristic:String,var behaviors:String ){
     fun species( diet:String, typicallifespan :String, migrationpattern:String){
         println("the one with $typicallifespan andmigrate in $migrationpattern and also likes to eat $diet will be ")

     }

}