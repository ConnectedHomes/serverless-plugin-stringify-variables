const stringifyVariables = serverless => {
    const { environment } = serverless.service.provider;
    Object.keys(environment).forEach(varName => {
        if (typeof environment[varName] !== 'string') {
            environment[varName] = JSON.stringify(environment[varName]);
        }
    });
};

module.exports = class StringifyVariablesPlugin {
    constructor(serverless, options) {
        this.hooks = {
            'before:deploy:functions': stringifyVariables.bind(null, serverless),
            'package:createDeploymentArtifacts': stringifyVariables.bind(null, serverless),
            'before:deploy:function:packageFunction': stringifyVariables.bind(null, serverless),
            'before:invoke:local:invoke': stringifyVariables.bind(null, serverless),
            'before:invoke:local:loadEnvVars': stringifyVariables.bind(null, serverless)
        };
    }
};
