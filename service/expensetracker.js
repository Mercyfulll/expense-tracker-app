export default function expenseTracker(db){

    //Query for returning whole data on the category table to be rendered as option on drop down menu front end  
    async function getAllFromCategory(){
        return await db.manyOrNone(`SELECT * FROM category`);
    } 

    //Add expenses to database in a table expense  
    async function addExpense(expense,amount,categoryId){
        await db.none(`INSERT INTO expense (expense, amount, total, category_id) VALUES ($1, $2, $2, $3)`, [expense, amount, categoryId]);
    }
    
    //Get all data that must be rendered on all expense screen by selecting certain columns and joining tables
    async function allExpenses(){
        return await db.manyOrNone(`
        SELECT expense.expense, category.category_type, expense.total
        FROM expense
        JOIN category ON category.id = expense.category_id;`);
    }
    // Filter by category 
    async function expensesForCategory(categoryId){
        
        return await db.manyOrNone(`SELECT * FROM expense WHERE category_id = $1`,[categoryId])
    }
    async function deleteExpense(expenseId){
        await db.none(`DELETE FROM expense WHERE expense.id = $1`,[expenseId])
    }
    async function allExpenses(){
        return await db.manyOrNone(`SELECT * FROM expense`)
    } 
    
    async function groupCategories(){
        return db.oneOrNone(`SELECT DISTINCT category.category_type
        FROM expense
        JOIN category ON category.id = expense.category_id; `)
    }
    return{
        getAllFromCategory,
        addExpense,
        allExpenses,
        expensesForCategory,
        // totalForCategory,
        deleteExpense,
        groupCategories
    }
}