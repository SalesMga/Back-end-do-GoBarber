// esse arquivo fará conexao banco de dados e carregar os models.
import Sequelize from 'sequelize';
import User from '../app/models/User';
import File from '../app/models/File';
import mongoose from 'mongoose';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class DataBase {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection)),
      models
      .map(model => model.associate && model.associate(this.connection.models));
  }
  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}
export default new DataBase();
