export const AndroidBridge = {
    getStatus: () => JSON.parse(AndroidInterface.getStatus()),
    requestUiUpdate: () => AndroidInterface.requestUiUpdate(),
    audioPlay: () => AndroidInterface.audioPlay(),
    audioStop: () => AndroidInterface.audioStop(),
    setSleepTimer: (time) => AndroidInterface.setSleepTimer(time),
    getAuthToken: () => AndroidInterface.getAuthToken(),
    setAuthToken: (token) => AndroidInterface.setAuthToken(token),
    getAudioQuality: () => AndroidInterface.getAudioQuality(),
    setAudioQuality: (lowQuality) => AndroidInterface.setAudioQuality(lowQuality),
    toggleFullscreen: () => AndroidInterface.toggleFullscreen(),
    openDrawer: () => AndroidInterface.openDrawer(),
    showToast: (msg) => AndroidInterface.showToast(msg),
    getUserAgent: () => AndroidInterface.getUserAgent(),
    getAppVersion: () => AndroidInterface.getVersion(),
    setBackground: (background) => AndroidInterface.setBackground(background),
    setReaction: (score) => AndroidInterface.setReaction(score),
    getReaction: () => JSON.parse(AndroidInterface.getReaction())
}
