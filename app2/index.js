const express= require('express');
const app= express();
app.get('/', (req, res)=>{
    res.end('<h1>Hello Another App</h1>');
});

const PORT= process.env.PORT|| 3003;
app.listen(PORT, ()=>{ console.log('Listining on PORT-', PORT) });