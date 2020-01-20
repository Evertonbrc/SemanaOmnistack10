const axios = require('axios');
const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/parseStringAsArray');

// 5 funcoes do controller:
// index (mostra lista), show (mostrar único), store (criar), uptade (alterar), destroy (deletar)

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },
    async store(request, response) {
        const { github_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            
            const { name = login, bio, avatar_url } = apiResponse.data;


            
            const techsArray = ParseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
            
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            if (dev.name == null){
                dev.name = github_username;
            }

            return response.json(dev);      
        }
    },

    //Exercício opcional: Criar métodos UPDATE e DESTROY
    async update(){
        // Atualizar Nome, avatar, bio, localização e tecnologias
        // Não atualizar o gitgub_username
    },

    async destroy(){

    },


};