import Redis from 'ioredis';
import util from 'util';

const redisClient = new Redis();

/*
function getRedis(key: string) {
    const syncRedisGet = util.promisify(redisClient.get).bind(redisClient);
    return syncRedisGet(key);
}

function setRedis(key: string, value: string) {
    const syncRedisSet = util.promisify(redisClient.set).bind(redisClient);
    return syncRedisSet(key, value);
}
*/

const redisGet = util.promisify(redisClient.get).bind(redisClient);
const redisSet = util.promisify(redisClient.set).bind(redisClient);

export { redisClient, redisGet, redisSet};