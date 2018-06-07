module.exports = {
    apps: [
        {
            name: 'app',
            script: './bin/server.js',
            args: "--env=production",
            env_production: {
                NODE_ENV: 'production'
            }
        }

    ]
};