exports.index = async function () {
    await this.bindDefault();

    console.log(222);
    await this.render('shop', {
        title: 'Hello , Grace!'
    });
}