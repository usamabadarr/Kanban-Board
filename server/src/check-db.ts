import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_URL || '', {
  dialect: 'postgres',
  dialectOptions: {
    decimalNumbers: true,
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
})();
