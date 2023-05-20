//INIZIO CREAZIONE DEL BOT
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});

//Interazioni
client.on('interactionCreate', async (interaction) =>{
    if (!interaction.isCommand()) return;

//Assegnazione comando /ping e risposta del bot
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong');
        interaction.editReply('Pong...');
    }
});

client.on('messageCreate', async (message) => {
    if(!client.application?.owner) {
        await client.application?.fetch();

    } else {
        console.log('niente fetch')
    }
    if(message.content  == '!registra' && message.author.id === client.application?.owner.id) {

        const data = [
            {
                name: 'ping',
                description: 'Risponde con pong!',
            },
            {
                name: 'ping',
                description: 'Risponde con pong!',
            }
        ];
        
        //REGISTRA UN COMANDO GLOBALE
        const comando = client.application?.commands.set(data); 
        //console.log(command);

        //REGISTRA UN COMANDO GUILD, nel campo get devi aggiungere l'id del tuo server discord
        //const comando = client.guilds.cache.get(Ids)?.commands.create(data); 
        console.log(await comando);
    } else {
        console.log('fail')
        console.log(client.application?.owner.id);
        console.log(message.content);
    }
});

client.login('TOKEN');

//FINE CREAZIONE DEL BOT

