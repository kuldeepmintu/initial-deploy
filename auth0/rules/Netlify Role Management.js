async function netlifyRoleManagement(user, context, callback) {
  const ManagementClient = require('auth0@2.30.0').ManagementClient;

  const namespace = 'https://csp.accesscorp/';
  
  
  const assignedRoles = (context.authorization || {}).roles || [];
  const defaultRoleName = configuration.DEFAULT_ROLE_NAME;
  const defaultRoleId = configuration.DEFAULT_ROLE_ID;

	context.accessToken[namespace + 'user_authorization'] = {
    roles: assignedRoles
  };

  context.idToken[namespace + '/roles'] = assignedRoles;
  return callback(null, user, context);
}