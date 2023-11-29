import assert from 'assert';
import pgPromise from 'pg-promise';

const connectionString = process.env.DATABSE || 'postgres://crmqbido:l_5NI8cn3s3fJd2KZbkLiMbTXqx9V8_V@flora.db.elephantsql.com/crmqbido'

const db = pgp(connectionString)

describe ("The expense tracker", function() {

    beforeEach(async function() {

        await db.none(`delete from `);
        
        
    });

})