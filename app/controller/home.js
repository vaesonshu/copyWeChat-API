'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.throw(500, '抛出异常');
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
