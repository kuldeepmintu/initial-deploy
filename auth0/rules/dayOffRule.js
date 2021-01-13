function (user, context, callback) {

  if (context.clientName === 'APP_NAME') {
    const d = Date.getDay();

    if (d === 0 || d === 6) {
      return callback(new UnauthorizedError('This app is only available during the week.'));
    }
  }

  callback(null, user, context);
}