export default function (profile) {
    return {
        type: 'FB_LOGIN',
        payload: profile,
    }
}
