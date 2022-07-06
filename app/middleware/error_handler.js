module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        ctx.body = {
          msg: 'fail',
          data: '404 错误',
        };
      }
    } catch (error) {
      // 记录一条错误日志
      app.emit('error', error, ctx);
      ctx.status = error.status;
      ctx.body = {
        msg: 'fail',
        data: error.message,
      };
    }
  };
};
