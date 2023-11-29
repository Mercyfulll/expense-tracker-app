export default function expenseTracker(db){
    async function getAllFromCategory(){
        return await db.manyOrNone(`SELECT * FROM category`)
    } 
    
    return{
        getAllFromCategory
    }
}