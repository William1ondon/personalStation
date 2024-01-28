import OSS from 'ali-oss';

const client = new OSS({
    // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: 'oss-cn-guangzhou',
    // 从环境变量中获取访问凭证。运行本代码示例之前，请确保已设置环境变量OSS_ACCESS_KEY_ID和OSS_ACCESS_KEY_SECRET。
    accessKeyId: 'LTAI5t6gb8THYbie8LaFqYuT',
    accessKeySecret: 'g9msWO01ouG9Abyhyspkp9Ck5Trn9u',
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
        },
        {
            timeout: 5000 // 可选参数，设置请求超时时间
        }
    );
    // console.log(result.objects[0].url);
}