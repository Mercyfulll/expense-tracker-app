export default function routes(){
    async function home(req,res){

        const category = await db.manyOrNone(`SELECT * FROM category`)
        
    
        res.render('index', {category}) 
    }
    return{

    }
}