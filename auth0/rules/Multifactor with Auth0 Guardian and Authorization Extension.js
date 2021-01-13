function guardianMultifactorAuthorization(user, context, callback) {
  if (
    !user.app_metadata ||
    !user.app_metadata.authorization ||
    !Array.isArray(user.app_metadata.authorization.groups)
  ) {
    return callback(null, user, context);
  }

  const groups = user.app_metadata.authorization.groups;
  const GROUPS_WITH_MFA = {
    // Add groups that need MFA here
    // Example
    admins: true
  };

  const needsMFA = !!groups.find(function (group) {
    return GROUPS_WITH_MFA[group];
  });

  if (needsMFA) {
    context.multifactor = {
      // required
      provider: 'guardian', //required

      // optional, defaults to true. Set to false to force Guardian authentication every time.
      // See https://auth0.com/docs/multifactor-authentication/custom#change-the-frequency-of-authentication-requests for details
      allowRememberBrowser: false
    };
  }

  callback(null, user, context);
}