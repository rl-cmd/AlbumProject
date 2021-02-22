function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
export const actionsUser = new Proxy(
    {},
    {
        get: function (target, prop) {
            debugger
            if (target[prop] === undefined) {
                console.log(convertActionNameToType(prop));

                return function (args) {
                    console.log(args)
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    }
                }
            }
            else
                return target[prop];
        }
    }

)