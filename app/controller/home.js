'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const list = [{
      id: 123456,
    }];
    ctx.apiSuccess(list);
  }
}

module.exports = HomeController;
