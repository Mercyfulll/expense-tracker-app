export default function expenseTracker(db){
    async function getAllFromCategory(){
        return await db.manyOrNone(`SELECT * FROM category`)
    } 

    async function addExpense(expense,amount,total,categoryId){
         await db.none(`INSERT INTO expense (expense,amount,total,category_id) VALUES ($1,$2,$3,$4)`,[expense,amount,total,categoryId])
    }
    
    return{
        getAllFromCategory,
        addExpense
    }
}