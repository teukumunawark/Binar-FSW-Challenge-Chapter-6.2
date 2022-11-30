require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());


// app.use('/api/auth', authRoute);

// app.use('/api', carRoute);


app.listen(process.env.PORT, () => {
  console.log(`Server berhasil berjalan di port http://localhost:${process.env.PORT}`);
});