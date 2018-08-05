exports.index = async function () {
    await this.bindDefault();

    await this.render('shop', {
        title: 'Hello , Grace!'
    });
}