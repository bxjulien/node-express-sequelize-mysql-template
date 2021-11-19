module.exports = (db) => {
    return Promise.all([
        db.Role.create({
            id: 1,
            name: "user"
        }),
        db.Role.create({
            id: 2,
            name: "admin"
        })
    ])
}