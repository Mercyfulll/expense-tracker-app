export default function routes(expense){

    // Home route
    async function home(req,res){
        // Getting all data from pre-populated table cateory
        const category = await expense.getAllFromCategory()

       
        
        //Rendering home page and taking the object we get from SQL to the template 
        res.render('index', {category,expenditure}) 
    }


    // A route that will add expenses 
    async function addExpense(req,res){

        // Getting values from the fron-end as string from JSON via body parser
        const descriptionOfExpense = req.body.description
        const amountOfExpense = req.body.amount
        const idOfCategory = req.body.category
        if(idOfCategory === ''){
            req.flash('error','Please choose a valid category')
        }else{
        await expense.addExpense(descriptionOfExpense,amountOfExpense,idOfCategory)
        
        }
        res.render('index',{message: 'Added successful'})
    }

    //route to display all expenses on the expense handlebar
    async function expenditure(req,res){

         // Get all expenditure
         const expenditure = await expense.allExpenses()
         console.log(expenditure)

        res.render('expense',{expenditure})
    }
    return{
        home,
        addExpense,
        expenditure
    
    }
}