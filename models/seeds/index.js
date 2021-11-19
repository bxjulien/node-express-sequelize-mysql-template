const 
    RoleSeed = require('./role.seed'), 
    ExampleSeed = require('./example.seed');

module.exports = function (db) {
    return Promise.all([
        RoleSeed(db),
        ExampleSeed(db),
    ]).then(() => {
        // More seeds that require IDs from the seeds above
    }).then(() => {
        console.log('\n Database Seeds Inserted ( ◠﹏◠ ) \n');
    }).catch(() => {
        console.log('\n Database Seeds Error (⊙.☉)7 \n');
    })
}