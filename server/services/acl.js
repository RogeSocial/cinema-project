import accessList from "../access-list.json" assert {type: 'json'}

export default function (request, response, next) {

    if (!request.path.split('/')[1].includes('rest')) {
        return next() // this acl only protects the routes under /api
    }

    // we may have user roles from the db, OR the anonymous role from here
    let user = request.session?.user || {roles: ['anonymous']}
    // and anyone has the wildcard role
    user.roles.push('*')

    for (let entry of accessList) {
        // am I on this route?
        if (request.path === entry.route || (entry.route.includes('*') && request.path.includes(entry.route.split('*')[0]))) {
            // do I have any of the roles in this route object
            for (let role of entry.roles) {
                if (user.roles.includes(role["role"])) {
                    // is the method I'm using registered in this route object?
                    if (role.methods.includes(request.method)) {
                        return next() // success, we have access!
                    }
                }
            }
        }
    }

    // if user has no access
    return response.status(403).json({error: "no access"})
}
