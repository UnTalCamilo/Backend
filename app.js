import express from 'express';
import routes  from './routes/routes.js';
import sequelize from './Database/database.js';


//json 


const app = express();
const port = 3000;

app.set('port', port);
app.use(express.json());

app.use(routes)

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(app.get('port'), () => {
            console.log(`Server on port ${app.get('port')}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
connection();