import { Sequelize, DataTypes, Model } from 'sequelize';

class User extends Model {
  public id!: number;
  public name!: string;
}

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
});

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

(async () => {
  await sequelize.sync({ force: true });

  for (let i = 0; i < 10; i++) {
    await User.create({ name: `User${i}` });
  }

  const users = await User.findAll();
  console.log('All users:', JSON.stringify(users, null, 2));
})();