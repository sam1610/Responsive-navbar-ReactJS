export const getVideo = async (identityId) => {
    try {
        const image =
            await Storage.get("Video.mp4", {
                level: "protected",
                identityId: identityId,
                download: true,
                cacheControl: "no-cache",
            })
        return URL.createObjectURL(image["Body"] as Blob);
    } catch (err) {
        console.error("Error getting Video: ", err)
    }
};