module.exportss = {
    name: 'argsinfo',
    description: 'Lists all Arguments and highlights the first one',

    args: true,
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }

        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    }
}