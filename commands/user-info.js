module.exports = {
    name: 'userinfo',
    description: 'Tells Username and ID',
    aliases: ['userinfo', 'ui', 'tellme'],
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
        console.log('Issued Userinfo Command')
    }

}