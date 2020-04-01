
import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {

  static init(sequelize) {
    super.init({
      date: Sequelize.DATE,
      caceled_tat: Sequelize.DATE,
    },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models){
    this.belongsTo(model.User, {foreignKey: 'user_id', as: 'user'});
    this.belongsTo(model.User, {foreignKey: 'provider_id', as: 'provider'});
  }
}

export default Appointment;
