//add lüdde integation
// :)
const Discord = require("Discord.js");

module.exports = {
    name: 'downloads',
    cooldown: 5,
    aliases: ['dl', 'download'],
    description: 'Prints all available Files.',

    execute(message) {
        const http = require("http");

        http.get('http://xj4kuswsas2jjggi.myfritz.net:8080/downloadtext', (res) => {
            let string = '';

            res.on('data', (chunk) => {
                string += chunk;
            });

            res.on('end', () => {
                var data = JSON.parse(string);

                const downloadEmbed = new Discord.MessageEmbed();
                downloadEmbed.setColor("#6e3684");
                downloadEmbed.setTitle("Downloadpage");
                downloadEmbed.setURL("http://xj4kuswsas2jjggi.myfritz.net:8080/download/");
                downloadEmbed.setDescription("Eine Liste aller dämonischen Dateien.");


                for (let i = 0; i < data.length - 1; i++) {
                    downloadEmbed.addField("Benutzer: ", data[i]["name"]);
                    for (let j = 0; j < data[i]["files"].length - 1; j++) {
                        downloadEmbed.addField(" " + data[i]["files"][j]["file"] + ": ", data[i]["files"][j]["url"]);
                    }
                }



                downloadEmbed.setTimestamp();
                downloadEmbed.setFooter("Die Erreichbarkeit der Website wird nicht gewährleistet.");

                console.log(downloadEmbed);

                //message.channel.send(JSON.stringify(data, null, 2));
                message.channel.send(downloadEmbed || 'none');
        





            });

        });
    }
}
