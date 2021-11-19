module.exports = (db) => {
    return Promise.all([
        db.Example.create({
            title: "Example Title 1",
            description: "Example description 1",
            isActive: true
        }),
        db.Example.create({
            title: "Example Title 2",
            description: "Example description 2",
            isActive: true
        }),
        db.Example.create({
            title: "Example Title 3",
            description: "Example description 3",
            isActive: false
        })
    ])
}