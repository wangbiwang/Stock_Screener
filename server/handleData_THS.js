import fs from 'fs'
import { getNowDate } from './utils.js'
;(async function () {
    // handleCode(null)
    const run = async (buyTime, sellTime) => {
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
            //  20230201, 20230202, 20230203,
             20230206, 20230207, 20230208, 20230209, 20230210,
             20230213, 20230214, 20230215, 20230216, 20230217,
             20230220, 20230221, 20230222, 20230223, 20230224, 
             20230227, 20230228, 20230301, 20230302, 20230303, 
             20230306, 20230307, 20230308, 20230309,20230310,
             20230313, 20230314, 20230315, 20230316, 20230317,
             20230320,
        ]
        const Dates = datasss
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
                    const name = e['股票简称']
                    const code = e.code
                    const item = n_CodeData.filter((ee) => ee.code == code)[0] //当日数据
                    let price = item[`分时收盘价:不复权[${n} ${sellTime}]`]
                    /*--固定止跌3%，自动卖出--*/
                    const old_price = e.price
                    let ff = Math.floor((price / old_price - 1) * 10000) / 100
                    if (ff < -3) price = old_price * (1 - 0.03) //止跌3%
                    /*--固定止跌3%，自动卖出--*/
                    const shares = e.shares
                    const mk = Math.floor(price * shares)
                    n_sell_code.push({ code, price, shares, mk, name })
                    n_kp = n_kp + mk
                })
            } else {
                n_sell_code = []
                if (o && o_t && o_t[5]) {
                    n_kp = o_t[5]
                } else {
                    n_kp = 1000000
                }
            }

            //买入
            let selectCode = Math.min(n_hit_code.length, 3)
            // console.log('firstn_kp', n_kp)
            n_moneyVal = n_kp
            for (let j = 0; j < selectCode; j++) {
                const code = n_hit_code[j]
                const item = n_CodeData.filter((e) => e.code == code)[0] //当日数据
                const name = item['股票简称']
                let price
                price = item[`分时收盘价:不复权[${n} ${buyTime}]`] //14点30价格买入
                const shares = Math.floor((n_kp * 0.33) / price / 100) * 100
                const mk = Math.floor(price * shares)
                n_codeVal = n_codeVal + mk
                n_moneyVal = n_moneyVal - mk
                n_buy_code.push({ code, price, shares, mk, name })
            }
            n_totalVal = n_codeVal + n_moneyVal
            column_bodys.push([n, n_sell_code, n_hit_code, n_buy_code, n_codeVal, n_moneyVal, n_totalVal])
        }

        // let file_name = `./回测日期范围[${datasss[0]}-${datasss[datasss.length - 1]}]-操作时间[${getNowDate()}].json`
        // let file_name = `./server/test/回测日期范围[${datasss[0]}-${
        //     datasss[datasss.length - 1]
        // }]-操作时间[${getNowDate()}].json`
        // let file_data = JSON.stringify(column_headers.concat(column_bodys))
        // fs.writeFile(file_name, file_data, (err) => err)
        return {
            买入时机: buyTime,
            卖出时机: sellTime,
            策略收益: column_bodys[column_bodys.length - 1][column_bodys[column_bodys.length - 1].length - 1],
        }
    }

    let time = ['09:40', '09:50', '10:30', '14:30', '14:40']
    let totl = []
    for (let t = 0; t < time.length; t++) {
        const o = await run('14:30', time[t])
        totl.push(o)
    }
    console.log(totl)
})()

async function handleCode(array = [], d = 20230201) {
    array = await JSON.parse(fs.readFileSync(`./public/THS/${d}.json`, 'utf8'))
    let ans = []

    for (let i = 0; i < array.length; i++) {
        const el = array[i]
        const tactics1 = //策略-1
            el['股票简称'].indexOf('ST') === -1 && //筛除ST股
            el['股票代码'].substring(0, 3) != '688' && //筛除科创版
            // el['股票代码'].substring(0, 1) != '3' && //筛除创业版
            Number(el[`个股热度排名[${d}]`]) < 100 &&
            Number(el[`涨跌幅:前复权[${d}]`]) > 1 && // 涨幅大于(%)
            Number(el[`涨跌幅:前复权[${d}]`]) < 9 && // 涨幅小于(%)
            Number(el[`换手率[${d}]`]) > 1 && //换手大于(%)
            Number(el[`换手率[${d}]`]) < 40 && //换手小于(%)
            Number(el[`收盘价:不复权[${d}]`]) > 2 && //当前价格
            Number(el[`收盘价:不复权[${d}]`]) < 250 && //当前价格
            Number(el[`资金流向[${d}]`]) > 5000000 && //资金净流入
            Number(el[`资金流向[${d}]`]) /
                (Math.abs(Number(el[`资金流入inner[${d}]`])) + Math.abs(Number(el[`资金流出inner[${d}]`]))) >
                0.1 && //净流入资金占所有资金的比重
            Number(el[`dde大单净额[${d}]`]) > 1000000 && //dde大单净额资金净流入
            Number(el[`dde大单净额[${d}]`]) / Number(el[`资金流向[${d}]`]) > 0.3 //净流入大单占比

        if (tactics1) ans.push(el)
    }
    ans.sort((a, b) => a[`个股热度排名[${d}]`] - b[`个股热度排名[${d}]`])
    // console.log(
    //     `[${d}]总数${array.length}选出`,
    //     ans.map((e) => [e.code, e[`个股热度排名[${d}]`]])
    // )
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
