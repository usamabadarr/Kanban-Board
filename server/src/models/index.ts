import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { UserFactory } from './user.js';
import { TicketFactory } from './ticket.js';

dotenv.config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL, {
      logging: console.log, 
      dialectOptions: {
        decimalNumbers: true,
      },
    })
  : new Sequelize(
      process.env.DB_NAME || '', 
      process.env.DB_USER || '', 
      process.env.DB_PASSWORD || '',
      {
        host: '127.0.0.1', 
        port: 5432, 
        dialect: 'postgres',
        logging: console.log, 
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

const User = UserFactory(sequelize);
const Ticket = TicketFactory(sequelize);

User.hasMany(Ticket, { foreignKey: 'assignedUserId' });
Ticket.belongsTo(User, { foreignKey: 'assignedUserId', as: 'assignedUser' });

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export { sequelize, User, Ticket };
