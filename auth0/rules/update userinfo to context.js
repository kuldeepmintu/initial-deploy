function (user, context, callback) {
  var namespace = 'https://csp.accesscorp/';
  
  console.log("*************user**************************");
  console.log(user);
  console.log("---------------user------------------------");
  context.accessToken[namespace + 'user_authorization'] = {
    roles: user.roles,
    permissions: user.permissions
  };
  console.log("***************************************");
  console.log(context.authorization);
  console.log("---------------------------------------");
  return callback(null, user, context);
}