import fs from 'fs'
;(async function () {
    // handleCode(null)
    const run = async (buyTime = '14:30', sellTime) => {
        let kkt = 0,
            zzt = 0,
            sydzz = 0,
            syd = 0,
            sylz = new Map()

        // ['起始资金100W，分3个仓位，命股票取前三个，不足三个，单仓买33.3%'],
        let column_headers = [
            [
                '日期',
                '当日股票卖出', //1
                '选股策略当日命中', //2
                '当日股票买入', //3

                '当日收盘股票总市值(元)', //4
                '当日收盘可用金额(元)', //5
                '当日收盘总收益(元)', //6
            ],
        ]
        // ['20230202',[{code:600214,price:10.12,shares:3000}],[code,code,code],[{code:600214,price:10.12,shares:3000}],Number,Number,Number]
        let column_bodys = []

        let datasss = [
            20220321, 20220322, 20220323, 20220324, 20220325, 20220328, 20220329, 20220330, 20220331, 20220401,
            // 20220406, 20220407, 20220408, 20220411, 20220412, 20220413, 20220414, 20220415, 20220418, 20220419,
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
            // 20230316, 20230317, 20230320, 20230321,
        ]
        const Dates = datasss.slice(Math.floor(datasss.length * (9 / 12))) ///3
        // const Dates = datasss.slice(Math.floor(datasss.length*(3/12))) ///9
        for (let i = 0; i < Dates.length; i++) {
            const n = Dates[i] //当天
            const o = Dates[i - 1] //昨天
            const n_CodeData = await JSON.parse(fs.readFileSync(`./public/THS/${n}.json`, 'utf8'))
            //-----//
            let n_sell_code = []
            let n_hit_code = await handleCode(null, n)
            let n_buy_code = []

            let n_codeVal = 0
            let n_moneyVal = 0
            let n_totalVal = 0

            //卖出
            const o_t = column_bodys[i - 1] //昨天所有数据
            let n_kp //当日买入前可用资金
            if (o && o_t && o_t[3] && o_t[3].length > 0) {
                //昨日有仓，当天需要卖出
                n_kp = o_t[5]
                o_t[3].forEach((e) => {
                    const name = e.name
                    const code = e.code
                    const item = n_CodeData.filter((ee) => ee.code == code)[0] //当日数据
                    if (!item) {
                        console.log(`昨天数据热榜前100，今天跌出了爬取榜单条目1000，需要单独爬取${n},增加条目`)
                    }
                    sellTime = '10:10'
                    let price_0940 = item[`分时收盘价:不复权[${n} 09:40]`]
                    let price_0950 = item[`分时收盘价:不复权[${n} 09:50]`]
                    let price_1010 = item[`分时收盘价:不复权[${n} 10:10]`]
                    let price_1030 = item[`分时收盘价:不复权[${n} 10:30]`]
                    let price_1430 = item[`分时收盘价:不复权[${n} 14:30]`]
                    let price = item[`分时收盘价:不复权[${n} ${sellTime}]`]
                    const old_price = e.price
                    const price_kaipan = item[`开盘价:不复权[${n}]`]
                    
                    const Gzd = () => {
                        /*--固定止跌1%，自动卖出--*/
                        let fr3 = Math.floor((price / old_price - 1) * 10000) / 100
                        if (fr3 < -1) price = old_price * (1 - 0.01) //止跌1%
                        /*--固定止跌1%，自动卖出--*/
                    }
                    if (Number(price_0940) < Number(price_kaipan)) {
                        /*--09:40价格如果低于开盘价，自动卖出--*/
                        price = price_0940 //止跌
                        Gzd()
                    } else if (Number(price_0950) < Number(price_kaipan)) {
                        // /*--09:50价格如果低于开盘价，自动卖出--*/
                        price = price_0950 //止跌
                        Gzd()
                    } else if (Number(price_1010) < Number(price_kaipan)) {
                        // /*--10:10价格如果低于开盘价，自动卖出--*/
                        price = price_1010 //止跌
                        Gzd()
                    } else if (Number(price_1030) < Number(price_kaipan)) {
                        price = price_1030
                        Gzd()
                    }else if (Number(price_1030) > Number(price_kaipan) && Number(price_1030) / Number(price_kaipan) > 0.05) {
                        //涨幅大于5%卖出一半，继续持有一半
                        price = price_1030
                    }else{
                        price = price_1030
                    }

                    let  shares = e.shares
                    const oldMk = e.mk
                    // const mk = Math.floor(price * shares) //不含交易手续费
                    const mk = Math.floor(price * shares) * 0.99878
                    n_sell_code.push({ code, price, shares, mk, name })
                    n_kp = n_kp + mk

                    let psylz
                    if (mk - oldMk > 0) {
                        psylz = Math.floor((mk / oldMk - 1) * 10000) / 100 + '%'
                    } else {
                        psylz = '-1.01%'
                    }
                    sylz.set(psylz, sylz.get(psylz) ? sylz.get(psylz) + 1 : 1)
                })
                if (Number(n_kp) > Number(o_t[6])) {
                    sydzz++
                }
                syd++
            } else {
                n_sell_code = []
                if (o && o_t && o_t[5]) {
                    n_kp = o_t[5]
                } else {
                    n_kp = 10000
                }
            }

            // //买入
            n_hit_code.shift() //筛出命中的第一个
            // n_hit_code.shift() //筛出命中的第二个
            let selectCode = Math.min(n_hit_code.length, 1)
            // console.log('firstn_kp', n_kp)
            n_moneyVal = n_kp
            zzt++
            if (selectCode == 0) kkt++
            for (let j = 0; j < selectCode; j++) {
                const code = n_hit_code[j]
                const item = n_CodeData.filter((e) => e.code == code)[0] //当日数据
                const name = item['股票简称']
                let price
                price = item[`分时收盘价:不复权[${n} ${buyTime}]`] //14点30价格买入
                // const shares = Math.floor((n_kp * 0.33) / price / 100) * 100
                let cangwei = 0
                if (selectCode == 1) {
                    cangwei = 1
                } else if (selectCode == 2) {
                    cangwei = 0.5
                } else if (selectCode == 3) {
                    cangwei = 0.33
                } else if (selectCode == 4) {
                    cangwei = 0.25
                }
                const shares = Math.floor((n_kp * cangwei) / price / 100) * 100

                const mk = Math.floor(price * shares)
                n_codeVal = n_codeVal + mk
                n_moneyVal = n_moneyVal - mk
                n_buy_code.push({ code, price, shares, mk, name })
            }
            n_totalVal = n_codeVal + n_moneyVal
            column_bodys.push([n, n_sell_code, n_hit_code, n_buy_code, n_codeVal, n_moneyVal, n_totalVal])
        }

        let file_name = `./server/test/回测日期范围[${datasss[0]}-${datasss[datasss.length - 1]}].json`
        let file_data = JSON.stringify(column_headers.concat(column_bodys))
        fs.writeFile(file_name, file_data, (err) => err)
        let t_sy = column_bodys[column_bodys.length - 1][6]
        let t_gm = column_bodys[column_bodys.length - 1][3].map((e) => [
            e.name,
            e.code,
        ])
        return {
            买入时机: buyTime,
            卖出时机: sellTime,
            策略收益: t_sy,
            最近购买推荐: JSON.stringify(t_gm),
            空仓天数: kkt,
            总天数: zzt,
            空仓率: Math.floor((kkt / zzt) * 10000) / 100 + '%',
            收益为正的天数: sydzz,
            总交易天数: syd,
            收益成功率: Math.floor((sydzz / syd) * 10000) / 100 + '%',
            收益区间: sylz,
        }
    }

    console.log(await run())
    // console.log(await handleCode(null, 20230321))
    // let time = ['09:40', '09:50', '10:30', '14:30', '14:40']
    // let totl = []
    // for (let t = 0; t < time.length; t++) {
    //     const o = await run('14:30', time[t])
    //     totl.push(o)
    // }
    // console.log(totl)
})()

async function handleCode(array = [], d = 20230201, f = 0) {
    array = await JSON.parse(fs.readFileSync(`./public/THS/${d}.json`, 'utf8'))
    let ans = []

    for (let i = 0; i < array.length; i++) {
        const el = array[i]
        const tactics1 = //策略-1
            el['股票简称'].indexOf('ST') === -1 && //筛除ST股
            el['股票代码'].substring(0, 3) != '688' && //筛除科创版
            el['股票代码'].substring(0, 1) != '3' && //筛除创业版
            Number(el[`个股热度排名[${d}]`]) < 100 &&
            Number(el[`涨跌幅:前复权[${d}]`]) > 1 && // 涨幅大于(%)
            Number(el[`涨跌幅:前复权[${d}]`]) < 5 && // 涨幅小于(%)
            Number(el[`换手率[${d}]`]) > 1 && //换手大于(%)
            Number(el[`换手率[${d}]`]) < 20 && //换手小于(%)
            Number(el[`收盘价:不复权[${d}]`]) > 2 && //当前价格
            Number(el[`收盘价:不复权[${d}]`]) < 50 && //当前价格
            Number(el[`资金流向[${d}]`]) > 5000000 && //资金净流入
            Number(el[`资金流向[${d}]`]) /
                (Math.abs(Number(el[`资金流入inner[${d}]`])) + Math.abs(Number(el[`资金流出inner[${d}]`]))) >
                0.1 && //净流入资金占所有资金的比重
            Number(el[`dde大单净额[${d}]`]) > 1000000 && //dde大单净额资金净流入
            Number(el[`dde大单净额[${d}]`]) / Number(el[`资金流向[${d}]`]) > 0.1 //净流入大单占比

        if (tactics1) ans.push(el)
    }
    ans.sort((a, b) => a[`个股热度排名[${d}]`] - b[`个股热度排名[${d}]`])
    // console.log(
    //     `[${d}]总数${array.length}选出`,
    //     ans.map((e) => [e.code, e[`个股热度排名[${d}]`]])
    // )
    if (f) {
        return ans
    }
    return ans.map((e) => e.code)
}

// {
//     "股票代码": "300114.SZ",
//     "股票简称": "中航电测",
//     "换手率[20230202]": "0.224464",
//     "成交额[20230202]": "1.68408223E7",
//     "个股热度排名[20230202]": 1,
//     "资金流向[20230202]": -16840822.3,
//     "dde大单净额[20230202]": 12741262,
//     "涨跌幅:前复权[20230202]": "20.03780718",
//     "收盘价:不复权[20230202]": 12.7,
//     "分时收盘价:不复权[20230202 09:30]": "12.7",
//     "分时收盘价:不复权[20230202 09:40]": "12.7",
//     "分时收盘价:不复权[20230202 09:50]": "12.7",
//     "分时收盘价:不复权[20230202 10:10]": "12.7",
//     "分时收盘价:不复权[20230202 10:30]": "12.7",
//     "分时收盘价:不复权[20230202 14:30]": "12.7",
//     "分时收盘价:不复权[20230202 14:40]": "12.7",
//     "成交量[20230202]": "1326049",
//     "开盘价:不复权[20230202]": "12.7",
//     "最高价:不复权[20230202]": "12.7",
//     "最低价:不复权[20230202]": "12.7",
//     "资金流入inner[20230202]": 0,
//     "资金流出inner[20230202]": 16840822.3,
//     "分时开盘价:不复权[20230202 09:30]": "12.7",
//     "分时开盘价:不复权[20230202 09:40]": "12.7",
//     "最新价": "48.90",
//     "最新涨跌幅": "1.410",
//     "market_code": "33",
//     "code": "300114"
// }
