import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: 'dcymmbpiz',
    api_key: '525836879677987',
    api_secret: 'UsGgdTzYjKYK4fT5-7reBlfm1UQ',
});
export const uploadToCloud = async ({
    files,
    bucketFileName,
    media,
}: {
    files: Array<any>;
    bucketFileName: String;
    media?: Array<any>;
}) => {
    const promises = [];
    for (const [index, value] of files.entries()) {
        const { file } = value;
        const { createReadStream } = await file;
        const stream = createReadStream();
        const uploadPromise = new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: `${bucketFileName}`,
                    public_id: media[index].fileName,
                    resource_type: 'auto',
                },
                (error, result) => {
                    console.log('🚀 ~ file: utils.ts:39 ~ uploadStream ~ result:', result);
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                },
            );

            stream.pipe(uploadStream);
        });

        promises.push(uploadPromise);
    }

    return Promise.allSettled(promises);
};
export const deleteMedia = async ({
    bucketFileName,
    media,
}: {
    bucketFileName: String;
    media?: Array<any>;
}) => {
    for (let index = 0; index < media.length; index++) {
        const { fileName } = media[index];
        const deleteResult = await cloudinary.uploader.destroy(`${bucketFileName}/${fileName}`);
        console.log('🚀 ~ file: utils.ts:62 ~ deleteResult:', deleteResult);
    }
};
