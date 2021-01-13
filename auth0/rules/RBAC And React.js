function (user, context, callback) {
  user.app_metadata = user.app_metadata || {};

  if (user.email === 'kuldeep.sharma2@globallogic.com') {
    user.app_metadata.role = 'admin';
  } else {
    user.app_metadata.role = 'writer';
  }

  auth0.users.updateAppMetadata(user.user_id, user.app_metadata)
    .then(() => {
      context.idToken['https://rbac-tutorial-app/role'] = user.app_metadata.role;
      callback(null, user, context);
    })
    .catch((err) => {
      callback(err);
    });
}