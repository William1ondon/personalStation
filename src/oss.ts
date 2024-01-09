import OSS from 'ali-oss';

const client = new OSS({
    // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: 'oss-cn-guangzhou',
    // 从环境变量中获取访问凭证。运行本代码示例之前，请确保已设置环境变量OSS_ACCESS_KEY_ID和OSS_ACCESS_KEY_SECRET。
    accessKeyId: 'LTAI5tPJWm92JW8mZgd5cZyW',
    accessKeySecret: 'fvT5tBKv46JC86zulnKPWZevWDwP7Q',
    // yourbucketname填写存储空间名称。
    bucket: 'test-william-web'
});

export async function getBuffer() {
    try {
        const result = await client.get('img/test/b.jpg');
        console.log(result.content);
    } catch (e) {
        console.log(e);
    }
}

export async function list() {
    // 不带任何参数，默认最多返回100个文件。
    const result = await client.list(
        {
            // 列举10个文件。
            "max-keys": 10,
            // 列举文件名中包含前缀foo/的文件。
            prefix: 'img/test/'
        }
    );
    console.log(result.objects[0].url);
}