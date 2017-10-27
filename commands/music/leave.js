const { Command } = require('discord.js-commando');

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            aliases: [],
            group: 'music',
            memberName: 'leave',
            description: 'BOT Leaves voice channel',
            examples: ['leave'],
            guildOnly: true,
        });

    }

    /**
     *
     * @param msg
     * @returns {Promise.<Message|Message[]>}
     */
    async run(msg) {
        try {
            let guild = msg.guild;

            if (!guild.voiceConnection) return (await msg.send('I am not in any voice channel at the moment.')).delete(12000);
            else {
                (await msg.say(`Leaving Voice Channel - \`${guild.voiceConnection.channel.name}\``)).delete(12000);
                guild.voiceConnection.channel.leave()
            }
        } catch (e) {
            console.log(e);
            return msg.say('Something went horribly wrong! Please try again later.')
        }
    }

};