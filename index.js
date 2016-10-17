'use strict'

var Koa = require('koa')
var sha1 = require('sha1')
var config = {
    wechat: {
        appID: 'wx1d4fb4342b55ba47',
        appSecret: '16bccc0daabb60ac0e34bd6c99575bb9',
        token: 'yuxizhe'
    }
}

var app = new Koa()

app.use(function*(next) {
    console.log(this.query)
    var token = config.wechat.token
    var signature = this.query.signature
})

app.listen(3000)
