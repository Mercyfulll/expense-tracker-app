export default function routes(expense){

    // Home route
    async function home(req,res){
        // Getting all data from pre-populated table cateory
        const category = await expense.getAllFromCategory()

        // Get all expenditure
        const expenditure = await expense.allExpenses()
        console.log(expenditure)
        
        //Rendering home page and taking the object we get from SQL to the template 
        res.render('index', {category,expenditure}) 
    }


    // A route that will add expenses 
    async function addExpense(req,res){

        // Getting values from the fron-end as string from JSON via body parser
        const descriptionOfExpense = req.body.description
        const amountOfExpense = req.body.amount
        const idOfCategory = req.body.category
 
        await expense.addExpense(descriptionOfExpense,amountOfExpense,idOfCategory)
        res.render('index',{message: 'Added successful'})

    }

  
    return{
        home,
        addExpense,
    
    }
}