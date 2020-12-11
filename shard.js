const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./index.js', { token: 'Token' });

manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn(35, 9000);