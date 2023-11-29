import assert from 'assert';
import pgPromise from 'pg-promise';
import expenseTracker from '../service/expensetracker.js';

var pgp = pgPromise()

const connectionString = process.env.DATABSE || 'postgres://crmqbido:l_5NI8cn3s3fJd2KZbkLiMbTXqx9V8_V@flora.db.elephantsql.com/crmqbido'

const db = pgp(connectionString)
const expense = expenseTracker(db)


describe ("The expense tracker", function() {

    beforeEach(async function() {

        await db.none(`delete from expense`);
        
        
    });
    it('It should return all data on the category table', async function(){
        const allCategory = await expense.getAllFromCategory()
        

        assert.deepEqual([
            {
              category_type: 'weekly',
              id: 1
            },
            {
              category_type: 'monthly',
              id: 2
            },
            {
              category_type: 'weekday',
              id: 3
            },
            {
              category_type: 'weekend',
              id: 4
            },
            {
              category_type: 'once-off',
              id: 5
            },
            {
              category_type: 'daily',
              id: 6
            }
        ],allCategory)

    })
    // it('It should be able to add expense', async function(){
    //     await expense.addExpense('FastFood',350,2)
    //     const allExpense = await expense.allExpenses()

    //     assert.deepEqual([{
    //           amount: '350',
    //           category_id: 2,
    //           expense: 'FastFood',
    //           id: 6,
    //           total: '350'
    //         }
    //       ]
    //       ,allExpense)
    // })

})