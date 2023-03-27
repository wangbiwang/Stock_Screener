import fs from 'fs'
;(async function () {
    // const run = async (BTDate) => {
    //     let ANSData = [
    //         [
    //             '日期',
    //             '当日股票卖出', //1
    //             '选股策略当日命中', //2
    //             '当日股票买入', //3

    //             '当日收盘股票详情', //4
    //             '当日收盘股票总市值(元)', //5
    //             '当日收盘可用金额(元)', //6
    //             '当日收盘总收益(元)', //7
    //         ],
    //     ]
    //     // ['20230202',[{code:600214,price:10.12,shares:3000}],[code,code,code],[{code:600214,price:10.12,shares:3000}],Number,Number,Number]
    //     let _ANSb = []

    //     const selectCode = (_ANSb) => {}
    //     const sell = (_ANSb) => {
    //         //卖出
    //         const o_t = _ANSb[i - 1] //昨天所有数据
    //         let n_kp //当日买入前可用资金
    //         if (o && o_t && o_t[3] && o_t[3].length > 0) {
    //             //昨日有仓，当天需要卖出
    //             n_kp = o_t[5]
    //             o_t[3].forEach((e) => {
    //                 const name = e.name
    //                 const code = e.code
    //                 const item = n_CodeData.filter((ee) => ee.code == code)[0] //当日数据
    //                 if (!item) {
    //                     console.log(`昨天数据热榜前100，今天跌出了爬取榜单条目1000，需要单独爬取${n},增加条目`)
    //                 }
    //                 sellTime = '10:10'

    //                 let price_1430 = item[`分时收盘价:不复权[${n} 14:30]`]

    //                 const Gzd = () => {
    //                     /*--固定止跌1%，自动卖出--*/
    //                     let fr3 = Math.floor((price / old_price - 1) * 10000) / 100
    //                     if (fr3 < -2) price = old_price * (1 - 0.02) //止跌1%
    //                     /*--固定止跌1%，自动卖出--*/
    //                 }

    //                 let shares = e.shares
    //                 const oldMk = e.mk
    //                 // const mk = Math.floor(price * shares) //不含交易手续费
    //                 const mk = Math.floor(price * shares) * 0.99878
    //                 n_sell_code.push({ code, price, shares, mk, name })
    //                 n_kp = n_kp + mk

    //                 let psylz
    //                 if (mk - oldMk > 0) {
    //                     psylz = Math.floor((mk / oldMk - 1) * 10000) / 100 + '%'
    //                 } else {
    //                     psylz = '-1.01%'
    //                 }
    //                 sylz.set(psylz, sylz.get(psylz) ? sylz.get(psylz) + 1 : 1)
    //             })
    //             if (Number(n_kp) > Number(o_t[6])) {
    //                 sydzz++
    //             }
    //             syd++
    //         } else {
    //             n_sell_code = []
    //             if (o && o_t && o_t[5]) {
    //                 n_kp = o_t[5]
    //             } else {
    //                 n_kp = 10000
    //             }
    //         }
    //     }
    //     const buy = () => {
    //         // //买入
    //         n_hit_code.shift() //筛出命中的第一个
    //         // n_hit_code.shift() //筛出命中的第二个
    //         let selectCode = Math.min(n_hit_code.length, 1)
    //         // console.log('firstn_kp', n_kp)
    //         n_moneyVal = n_kp
    //         zzt++
    //         if (selectCode == 0) kkt++
    //         for (let j = 0; j < selectCode; j++) {
    //             const code = n_hit_code[j]
    //             const item = n_CodeData.filter((e) => e.code == code)[0] //当日数据
    //             const name = item['股票简称']
    //             let price
    //             price = item[`分时收盘价:不复权[${n} ${buyTime}]`] //14点30价格买入
    //             // const shares = Math.floor((n_kp * 0.33) / price / 100) * 100
    //             let cangwei = 0
    //             if (selectCode == 1) {
    //                 cangwei = 1
    //             } else if (selectCode == 2) {
    //                 cangwei = 0.5
    //             } else if (selectCode == 3) {
    //                 cangwei = 0.33
    //             } else if (selectCode == 4) {
    //                 cangwei = 0.25
    //             }
    //             const shares = Math.floor((n_kp * cangwei) / price / 100) * 100

    //             const mk = Math.floor(price * shares)
    //             n_codeVal = n_codeVal + mk
    //             n_moneyVal = n_moneyVal - mk
    //             n_buy_code.push({ code, price, shares, mk, name })
    //         }
    //     }

    //     for (let i = 0; i < BTDate.length; i++) {
    //         const n = BTDate[i] //当天日期
    //         const n_CodeData = await JSON.parse(fs.readFileSync(`./public/THS/${n}.json`, 'utf8'))
    //         const o = BTDate[i - 1] //昨天日期
    //         const o_CodeData = _ANSb[i - 1][1] //昨天
    //         //-----//
    //         const n_c = {
    //             sell_code: [],
    //             hit_code: [],
    //             buy_code: [],
    //             total_code: [],
    //             codeVal: 0,
    //             moneyVal: 0,
    //             totalVal: 0,
    //         }
    //         if (o && o_CodeData && o_CodeData['total_code'].length > 0) {
    //             //昨日有仓，当天需要卖出
    //             n_c['total_code']=o_CodeData['total_code']
    //             o_CodeData['total_code'].forEach((oldData) => {
    //                 let  oldData = { name, code, price, shares, mk }
    //                 let newData = n_CodeData.filter((ee) => ee.code == code)[0] //当日数据
    //                 if (!newData) console.log(`条目不够用，需要单独爬取${n},增加条目`)
    //                 let closePrice = item[`分时收盘价:不复权[${n} 14:30]`]
    //                 let lowPrice = item[`区间最低价:不复权[${n}]`]
    //                 if (lowPrice / price < 0.98) {
    //                     n_c.sell_code.push({ name, code, price, shares, mk })
    //                 }

    //                 const Gzd = () => {
    //                     /*--固定止跌1%，自动卖出--*/
    //                     let fr3 = Math.floor((price / old_price - 1) * 10000) / 100
    //                     if (fr3 < -2) price = old_price * (1 - 0.02) //止跌1%
    //                     /*--固定止跌1%，自动卖出--*/
    //                 }

    //                 let shares = e.shares
    //                 const oldMk = e.mk
    //                 // const mk = Math.floor(price * shares) //不含交易手续费
    //                 const mk = Math.floor(price * shares) * 0.99878
    //                 n_sell_code.push({ code, price, shares, mk, name })
    //                 n_kp = n_kp + mk

    //                 let psylz
    //                 if (mk - oldMk > 0) {
    //                     psylz = Math.floor((mk / oldMk - 1) * 10000) / 100 + '%'
    //                 } else {
    //                     psylz = '-1.01%'
    //                 }
    //                 sylz.set(psylz, sylz.get(psylz) ? sylz.get(psylz) + 1 : 1)
    //             })
    //             if (Number(n_kp) > Number(o_t[6])) {
    //                 sydzz++
    //             }
    //             syd++
    //         } else {
    //             n_sell_code = []
    //             if (o && o_t && o_t[5]) {
    //                 n_kp = o_t[5]
    //             } else {
    //                 n_kp = 10000
    //             }
    //         }

    //         _ANSb.push([n, n_c])
    //     }

    //     const file_name = `./server/test/回测日期范围[${BTDate[0]}-${BTDate[BTDate.length - 1]}].json`
    //     const file_data = JSON.stringify(ANSData.concat(_ANSb))
    //     fs.writeFile(file_name, file_data, (err) => err)
    // }

    let BackTestDate = [
        //回测日期
        // 20220321, 20220322, 20220323, 20220324, 20220325, 20220328, 20220329, 20220330, 20220331, 20220401, 20220406,
        // 20220407, 20220408, 20220411, 20220412, 20220413, 20220414, 20220415, 20220418, 20220419,
        // 20220420, 20220421, 20220422, 20220425, 20220426, 20220427, 20220428, 20220429, 20220505, 20220506,
        // 20220509, 20220510, 20220511, 20220512, 20220513, 20220516, 20220517, 20220518, 20220519, 20220520,
        // 20220523, 20220524, 20220525, 20220526, 20220527, 20220530, 20220531, 20220601, 20220602, 20220606,
        // 20220607, 20220608, 20220609, 20220610, 20220613, 20220614, 20220615, 20220616, 20220617, 20220620,
        // 20220621, 20220622, 20220623, 20220624, 20220627, 20220628, 20220629, 20220630, 20220701, 20220704,
        // 20220705, 20220706, 20220707, 20220708, 20220711, 20220712, 20220713, 20220714, 20220715, 20220718,
        // 20220719, 20220720, 20220721, 20220722, 20220725, 20220726, 20220727, 20220728, 20220729, 20220801,
        // 20220802, 20220803, 20220804, 20220805, 20220808, 20220809, 20220810, 20220811, 20220812, 20220815,
        // 20220816, 20220817, 20220818, 20220819, 20220822, 20220823, 20220824, 20220825, 20220826, 20220829,
        // 20220830, 20220831, 20220901, 20220902, 20220905, 20220906, 20220907, 20220908, 20220909, 20220913,
        // 20220914, 20220915, 20220916, 20220919, 20220920, 20220921, 20220922, 20220923, 20220926, 20220927,
        // 20220928, 20220929, 20220930, 20221010, 20221011, 20221012, 20221013, 20221014, 20221017, 20221018,
        // 20221019, 20221020, 20221021, 20221024, 20221025, 20221026, 20221027, 20221028, 20221031, 20221101,
        // 20221102, 20221103, 20221104, 20221107, 20221108, 20221109, 20221110, 20221111, 20221114, 20221115,
        // 20221116, 20221117, 20221118, 20221121, 20221122, 20221123, 20221124, 20221125, 20221128, 20221129,
        // 20221130, 20221201, 20221202, 20221205, 20221206, 20221207, 20221208, 20221209, 20221212, 20221213,
        // 20221214, 20221215, 20221216, 20221219, 20221220, 20221221, 20221222, 20221223, 20221226, 20221227,
        // 20221228, 20221229, 20221230, 20230103, 20230104, 20230105, 20230106, 20230109, 20230110, 20230111,
        // 20230112, 20230113, 20230116, 20230117, 20230118, 20230119, 20230120, 20230130, 20230131, 20230201,
        // 20230202, 20230203, 20230206, 20230207, 20230208, 20230209, 20230210, 20230213, 20230214, 20230215,
        // 20230216, 20230217, 20230220, 20230221, 20230222, 20230223, 20230224, 20230227, 20230228, 20230301,
        // 20230302, 20230303, 20230306, 20230307, 20230308, 20230309, 20230310, 20230313, 20230314, 20230315,
        // 20230316, 20230317, 20230320, 
        20230321, 
        // 20230322,
    ]
    //  BackTestDate = BTDate.slice(Math.floor(BTDate.length * (9 / 12))) //3
    //  BackTestDate = BTDate.slice(Math.floor(BTDate.length * (3 / 12))) //9

    // console.log(await run(BackTestDate))
    console.log(await handleCode(null, 20230323, 1))
})()

async function handleCode(array = [], d = 20220901, f = 0) {
    array = await JSON.parse(fs.readFileSync(`./public/THS/${d}.json`, 'utf8'))
    let ans = []
    let _n = Number
    let dm = d + ' 14:30'
    console.log(dm)
    for (let i = 0; i < array.length; i++) {
        const el = array[i]

        const tactics1 = //策略-1
            _n(el[`个股热度排名[${d}]`]) < 100 &&
            _n(el[`分时涨跌幅:前复权[${dm}]`]) > 1 && // 涨幅大于(%)
            _n(el[`分时涨跌幅:前复权[${dm}]`]) < 5 && // 涨幅小于(%)
            _n(el[`分时换手率[${dm}]`]) > 1 && //换手大于(%)
            _n(el[`分时换手率[${dm}]`]) < 10 && //换手小于(%)
            _n(el[`分时收盘价:不复权[${dm}]`]) > 2 && //当前价格
            _n(el[`分时收盘价:不复权[${dm}]`]) < 50 && //当前价格
            _n(el[`分时资金流向[${dm}]`]) > 5000000 && //资金净流入
            _n(el[`分时dde大单流入[${dm}]`]) - _n(el[`分时dde大单流出[${dm}]`]) > 1000000 && //大单净流入
            _n(el[`分时资金流向[${dm}]`]) / (_n(el[`分时资金流入[${dm}]`]) + _n(el[`分时资金流出[${dm}]`])) > 0.1 &&
            _n(el[`分时资金流向[${dm}]`])/_n(el[`分时资金流入[${dm}]`])>0.2

            // (_n(el[`分时dde大单流入[${dm}]`]) - _n(el[`分时dde大单流出[${dm}]`])) / _n(el[`分时资金流向[${dm}]`]) >
            //     0.05 &&
            //     (_n(el[`分时dde大单流入[${dm}]`]) - _n(el[`分时dde大单流出[${dm}]`])) / _n(el[`分时资金流向[${dm}]`]) <
            //     1 &&
            // _n(el[`分时dde大单流入[${dm}]`]) / (_n(el[`分时dde大单流入[${dm}]`]) + _n(el[`分时dde大单流出[${dm}]`])) >
            //     0.1 &&

            el['股票简称'].indexOf('ST') == -1 && //筛除ST股
            el['股票代码'].substring(0, 3) != '688' && //筛除科创版
            el['股票代码'].substring(0, 1) != '3' //筛除创业版

        if (tactics1) ans.push(el)
    }
    ans.sort((a, b) => a[`个股热度排名[${d}]`] - b[`个股热度排名[${d}]`])
    if (f) return ans
    return ans.map((e) => e.code)
}

// {
//     "股票代码": "600056.SH",
//     "股票简称": "中国医药",
//     "个股热度排名[20220321]": 1,
//     "分时换手率[20220321 14:30]": "15.463838804839883",
//     "分时成交额[20220321 14:30]": "5.7643832E9",
//     "分时资金流向[20220321 14:30]": "-2.9509837E8",
//     "分时dde大单净额[20220321 14:30]": "-5.9277431E8",
//     "分时涨跌幅:前复权[20220321 14:30]": "9.440769693325318",
//     "分时收盘价:不复权[20220321 14:30]": "36.4",
//     "区间最低价:不复权[20220321]": 31.5,
//     "区间最低价:不复权日[20220321]": 20220321,
//     "分时资金流入[20220321 14:30]": "1.95503482E9",
//     "分时资金流出[20220321 14:30]": "2.25013319E9",
//     "分时开盘价:不复权[20220321 14:30]": "36.34",
//     "分时最高价:不复权[20220321 14:30]": "36.4",
//     "分时最低价:不复权[20220321 14:30]": "36.34",
//     "分时振幅[20220321 14:30]": "0.16510731975782927",
//     "分时成交量[20220321 14:30]": "1.6517053E8",
//     "分时dde大单流入[20220321 14:30]": "2.07736101E9",
//     "分时dde大单流出[20220321 14:30]": "2.67013532E9",
//     "分时dde大单净比[20220321 14:30]": -10.283395281562822,
//     "最新价": "14.20",
//     "最新涨跌幅": "0.141",
//     "market_code": "17",
//     "code": "600056"
// }
