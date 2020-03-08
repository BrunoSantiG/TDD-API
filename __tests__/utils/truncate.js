const { sequelize } = require("../../src/app/models");

//Funcao para apagar todos os dados do banco
module.exports = () => {
	//encapsular todas as promises da funcao dentro de uma unica promise
	return Promise.all(
		Object.keys(sequelize.models).map(key => {
			return sequelize.models[key].destroy({
				truncate: true,
				force: true
			});
		})
	);
};
