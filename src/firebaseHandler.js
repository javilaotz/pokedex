import firebase from './firebase'

const setData = (params) => {
    const   collection = params && params.collection,
            data = params && params.data,
            callback = params && params.callback
    
    const db = firebase.firestore()

    db.collection(collection).doc('new').set(data).then(()=> callback())
}


const fetchData = (params) => {
    const   collection = params && params.collection,
            orderBy = params && params.orderBy,
            limit = params && params.limit,
            setter = params && params.setter

    const dbObject = (db) => {
        let dbObj = db.collection(collection)
        if (orderBy && limit) {
            return dbObj.orderBy(orderBy).limit(limit)
        }
        if(orderBy && !limit){
            return dbObj.orderBy(orderBy) 
        }
        if(limit && !orderBy){
            return dbObj.limit(limit)  
        }
    }

    const fetchData = async() => {
        const db = firebase.firestore()
        const data = await dbObject(db).get()
        setter(data.docs.map(doc => doc.data()))
        }
    
    fetchData() 
}

export {setData, fetchData}