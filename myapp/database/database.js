const mongoose = require('mongoose')

mongoose.set('useFindAndModify',false)

mongoose.connect('mongodb://localhost:27017/crudnodejs',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>{ console.log('DB is conected')})
.catch(err => console.log('error en la conexion ',err))