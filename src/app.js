
const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = "Task"

mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log("error has occured")
    }
    console.log("All Perfect")

    const db = res1.db(dbname)

    //////////////////
    //// insertOne 
   //// first document

    db.collection('users').insertOne({
        name: "Mohamed",
        age: 26
    }, (error, data) => {
        if (error) {
            console.log('Unable to isert Data')
        }
        console.log(data.insertedId)
    })
    
     ////////////////
    //// insertOne 
   //// second document

    db.collection('users').insertOne({
        name: "Yousef",
        age: 20
    }, (error, data) => {
        if (error) {
            console.log('Unable to isert Data')
    }
        console.log(data.insertedId)
})

    //////////////////////////////////////////////
    /// insertMany 10 documents
    
    db.collection('users').insertMany(
        [{
            name: "Osama",
            age: 27
        },
        {
            name: "Ahmed",
            age: 24,
        },
        {
            name: "Ibrahim",
            age: 27
        },
        {
            name: "Ali",
            age: 24
        },
        {
            name: "Hassan",
            age: 27
        },
        {
            name: "Fahmy",
            age: 27
        },
        {
            name: "Mahmoud",
            age: 22
        },
        {
            name: "Nada",
            age: 27
        },
        {
            name: "Aya",
            age : 30
        },
        {
            name: "Fathy",
            age : 29
        }], (error, data) => {
            if (error) {
                console.log('unable to isert data')
            }
            console.log(data.insertedCount)
        }
    )

    /////////////////////
    /// find match 27y

    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        if (error) {
            console.log('unable to find')
        }
        console.log(users)
    })

    /////////////////////
    //// how many match 27y

        db.collection('users').find({ age: 27 }).count((error, users) => {
            if (error) {
                console.log('unable to find')
            }
            console.log(users)
        })
    
    ///////////////////////
    //// find first 3 match 27y

    db.collection('users').find({ age: 27 }).limit(3).toArray((error, users) => {
        if (error) {
            console.log('unable to find')
        }
        console.log(users)
    })
    
    //////////////////////////////////////
    
    //// update the first document with 27y

    db.collection('users').updateOne({ _id: mongodb.ObjectId("66b27f953292a54317fd45b3") }, {
        $set: { name : "Ragab" },
        $inc: {age : 4}
    }).then ((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
    
    ///////////////////////////////////////////
    //////////////////////////////////////////
    //// update the second document with 27y

    db.collection('users').updateOne({ _id: mongodb.ObjectId("66b27f953292a54317fd45b5") }, {
        $set: { name : "Shihab" },
        $inc: {age : 4}
    }).then ((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
    
    ///////////////////////////////////////////
    /////////////////////////////////////////
    //// update the third document with 27y

    db.collection('users').updateOne({ _id: mongodb.ObjectId("66b27f953292a54317fd45b7") }, {
        $set: { name : "Salah" },
        $inc: {age : 4}
    }).then ((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
    
    ///////////////////////////////////////////
     ///////////////////////////////////////
    //// update the 4th document with 27y

    db.collection('users').updateOne({ _id: mongodb.ObjectId("66b27f953292a54317fd45b8") }, {
        $set: { name : "Ramy" },
        $inc: {age : 4}
    }).then ((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })
    
    ///////////////////////////////////////////
    //// updateMany for all inc 10y

    db.collection('users').updateMany({}, {
        $inc: {age :10}
    })
        .then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })

    // /////////////////////////////////////////////
    //// deleteMany everydocument with 41y

    db.collection('users').deleteMany({age : 41 })
    .then((data1) => { console.log(data1.deletedCount) })
    .catch((error) => { console.log(error) })

    ////////////////////////

})