const appConfig = {
    port: process.env.PORT,
    timeZone: process.env.TIME_ZONE,
    secret: process.env.SECRET,
    expireInSession: process.env.EXPIRE_IN_SESSION,
};

export default appConfig;
