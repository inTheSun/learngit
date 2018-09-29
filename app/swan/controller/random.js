const RandExp = require('randexp');
const bankCardMath = require('../static/js/card2bank');
exports.index = async function () {
    await this.bindDefault();
    const randomLimit = 20;
    const allBanks = bankCardMath.bankcardList.map(bank => {
        return bank.bankName
    });
    var bank = this.query.bank || "",
        bankCardType = this.query.bankCardType || "DC";
    let cardList = [];
    for (let i = 0; i < randomLimit; i++) {
        var name = getName(),
            idcard = getIdNo(),
            bankCard = getSingalCard(bank, bankCardType);
        //把生成的银行卡推入数组

        cardList.push({
            name,
            idcard,
            bankName: bankCard.bankName,
            card: bankCard.card,
            cardType: bankCard.cardType
        });
    }

    await this.render('tool/card', {
        allBanks: allBanks,
        randomCardList: cardList,
    });
}
const cardTypeMap = {
    DC: "储蓄卡",
    CC: "信用卡",
    SCC: "准贷记卡",
    PC: "预付费卡"
};

function getSingalCard(bankIndex, type) {
    let bankList = bankCardMath.bankcardList;
    if (!bankIndex) {
        bankIndex = getRandomIndex(bankList.length);
    } else {
        if (typeof bankIndex !== "number") {
            bankIndex = Number(bankIndex) || 1;
        }
        bankIndex = bankIndex - 1;
    }
    let curBank = bankList[bankIndex],
        matchPatterns = curBank.patterns;

    // 如果存在type则筛选出符合类别银行卡
    if (type != "ALL") matchPatterns = curBank.patterns.filter(item => {
        return item.cardType == type;
    });
    if (!matchPatterns.length) {
        return {
            bankName: curBank.bankName,
            card: "不存在该类别的银行卡",
            cardType: ""
        };
    }
    let randomPatternIndex = getRandomIndex(matchPatterns.length),
        finalPattern = matchPatterns[randomPatternIndex];
    const finalRandomCard = new RandExp(finalPattern.reg).gen();
    return {
        bankName: curBank.bankName,
        card: finalRandomCard,
        cardType: cardTypeMap[finalPattern.cardType]
    }
}

function getRandomIndex(len) {
    return Math.floor(Math.random() * len);
}

function getIdNo() {
    var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4",
        "2"
    ]; // 加权因子
    var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]; // 校验码
    var address = "420101"; // 住址
    var birthday = "19810101"; // 生日
    var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(
        Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11)];
    var id_no_String = address + birthday + s + lastNumber;

    return id_no_String;
}

// 生成随机姓名
function getName() {
    var familyNames = new Array("赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋", "沈", "韩", "杨",
        "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏", "陶", "姜", "戚", "谢", "邹", "喻",
        "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方",
        "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺", "倪", "汤", "滕", "殷", "罗", "毕",
        "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余", "元", "卜", "顾", "孟", "平", "黄",
        "和", "穆", "萧", "尹");
    var givenNames = new Array("子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", "昊轩", "易轩", "益辰",
        "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
        "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰",
        "淳美", "泽惠", "伟洋", "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", "子辰", "佳琪", "紫轩", "瑞辰",
        "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", "佳钰",
        "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊",
        "天昊", "萌萌", "若萌");

    var i = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    var familyName = familyNames[i];

    var j = parseInt(10 * Math.random()) * 10 + parseInt(10 * Math.random());
    var givenName = givenNames[i];

    var name = familyName + givenName;
    return name;
}