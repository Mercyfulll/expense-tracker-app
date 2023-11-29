export default function expenseTracker(db){
    async function getAllFromCategory(){
        return await db.manyOrNone(`SELECT * FROM category`);
    } 

    //Add expenses to database in a table expense  
    async function addExpense(expense,amount,categoryId){
        await db.none(`INSERT INTO expense (expense, amount, total, category_id) VALUES ($1, $2, $2, $3)`, [expense, amount, categoryId]);
    }
    
    async function allExpenses(){
        return await db.manyOrNone(`SELECT * FROM expense`);
    }

    async function expensesForCategory(categotyId){
        return await db.manyOrNone(`SELECT * FROM expense WHERE category_id = $1`,[categotyId])
    }

    return{
        getAllFromCategory,
        addExpense,
        allExpenses,
        expensesForCategory
    }
}