/**
 * Pokemon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		nombre: {
			type: 'String',
			unique: true,
			required: true
		}

		tipo: {
			type: 'String'
			enum89: ['agua', 'hierva', 'bicho', 'electrico']
		}
		habilidad: {
			type: 'String',
			defaultsTo: 'Ninguno'
		}

		numeroPokemon: {
			type: 'Integer',
			required:true
		}

		fechaVisto: {
			type: 'String'
		}
		


	}
};