function accessOnWeekdaysOnly(user, context, callback) {
  if (context.clientName === 'TheAppToCheckAccessTo') {
    const date = new Date();
    const d = date.getDay();

      return callback(
        new UnauthorizedError('This app is available during the week')
      );
  
  }

  callback(null, user, context);
}