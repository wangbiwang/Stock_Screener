import fs from 'fs'
import { getNowDate } from './utils.js'
;(async function () {
    let column_headers = [
        [
            '起始资金100W，分3个仓位，命股票取前三个，不足三个，单仓买33.3%，自动止损条件低于开盘价3%卖出，当日持有票涨幅大于7%次日继续持有',
        ],
        ['Type'],
    ]
    let column_bodys = [
        ['上交易日买入今天亏损3%的Code'], //0    [600123]
        ['当日股票卖出'], //1                   [600123]
        ['当日卖出股票涨幅'], //2
        ['卖出收益(元)'], //3                [1220]

        ['上交易日买入今天盈利7%的Code'], //4
        ['选股策略当日命中'], //5
        ['当日买入前可用资金'], //6
        ['当日可买入股票数量'], //7
        ['当日买入股票'], //8
        ['当日买入单价'], //9
        ['当日买入股数'], //10

        ['当日收盘持有股票Code'], //11
        ['当日收盘持有股票Code+市值'], //12  [{code:市值},{code:市值}]
        ['当日收盘股票总市值(元)'], //13
        ['当日收盘可用金额(元)'], //14

        ['当日收盘总收益(元)'], //15
    ]

    let datasss = [
        20230202, 20230203
        // , 20230206, 20230207, 20230208, 20230209, 20230210, 20230213, 20230214, 20230215, 20230216,
        // 20230217, 20230220, 20230221, 20230222, 20230223, 20230224, 20230227, 20230228, 20230301, 20230302, 20230303,
        // 20230306, 20230307, 20230308, 20230309, 20230310, 20230313, 20230314, 20230315, 20230316, 20230317,
    ]


        for (let i = 0; i < datasss.length; i++) {
            column_headers[1].push(datasss[i])
            const hitCodeData = await handleCode(null, datasss[i])

            let aree = hitCodeData.map((el) => {
                el = el.code
                return el
            })
            column_bodys[5].push(aree)
            console.log('1',aree)
            //先处理卖出,查找上一交易日收盘持有股票信息
            if (column_bodys[11].length > 1 && column_bodys[11][i - 1].length > 0) {
                console.log(1111112)
                const oldCodeData = await JSON.parse(fs.readFileSync(`./public/THS/${datasss[i - 1]}.json`, 'utf8'))
                const newCodeData = await JSON.parse(fs.readFileSync(`./public/THS/${datasss[i]}.json`, 'utf8'))
                let oldcode = column_bodys[11][i - 1]
                oldcode.forEach((el) => {
                    let o = oldCodeData.filter((e) => e.code == el)
                    let n = newCodeData.filter((e) => e.code == el)
                    let n_z = n[`涨跌幅:前复权[${datasss[i]}]`]
                    if (n_z > 0.7) {
                        column_bodys[4][i] ? column_bodys[4][i].push(n.code) : (column_bodys[4][i] = [n.code])
                    }
                    if (n_z < -0.3) {
                        column_bodys[0][i] ? column_bodys[0][i].push(n.code) : (column_bodys[0][i] = [n.code])
                    }
                    column_bodys[1][i] ? column_bodys[1][i].push(n.code) : (column_bodys[1][i] = [n.code])
                    column_bodys[2][i] ? column_bodys[2][i].push(n_z) : (column_bodys[2][i] = [n_z])

                    //算收益价格
                    let p = column_bodys[12][i - 1][el] * (1 + n_z) - column_bodys[12][i - 1][el]
                    column_bodys[3][i] ? column_bodys[3][i].push(p) : (column_bodys[3][i] = [p])
                })
                function sum(arr) {
                    return arr.reduce(function (prev, curr, idx, arr) {
                        return prev + curr
                    })
                }
                column_bodys[6][i] = sum(column_bodys[3][i]) + column_bodys[14][i - 1]
                column_bodys[14][i] = column_bodys[6][i]
                let arr = [...new Set(column_bodys[4][i].concat(column_bodys[5][i]))]
                column_bodys[7][i] = Math.min(arr.length, 3)
                for (let j = 0; arr.length < 3; j++) {
                    const el = arr[j]
                    if (!el) return
                    column_bodys[8][i] ? column_bodys[8][i].push(el) : (column_bodys[8][i] = [el])
                    column_bodys[9][i]
                        ? column_bodys[9][i].push(n[`收盘价:不复权[${datasss[i]}]`])
                        : (column_bodys[9][i] = [n[`收盘价:不复权[${datasss[i]}]`]])
                    if (el in column_bodys[4][i]) {
                        let n = newCodeData.filter((e) => e.code == el)
                        let n_z = n[`涨跌幅:前复权[${datasss[i]}]`]

                        let codenum = (column_bodys[12][i - 1][el] * (1 + n_z)) / n[`收盘价:不复权[${datasss[i]}]`]
                        column_bodys[10][i] ? column_bodys[10][i].push(codenum) : (column_bodys[10][i] = [codenum])
                        column_bodys[14][i] = column_bodys[14][i] - column_bodys[12][i - 1][el] * (1 + n_z)
                    } else {
                        let tolp = Math.floor(column_bodys[6][i] * 0.333)
                        let codess
                        if (tolp < column_bodys[14][i]) {
                            codess = Math.floor(tolp / column_bodys[9][i][j] / 100) * 100
                        } else {
                            codess = Math.floor(column_bodys[14][i] / 100) * 100
                        }
                        column_bodys[10][i] ? column_bodys[10][i].push(codess) : (column_bodys[10][i] = [codess])
                        column_bodys[14][i] = column_bodys[14][i] - column_bodys[10][i][j] * column_bodys[9][i][j]
                    }
                    let obj = {}
                    obj[column_bodys[8][i][j]] = column_bodys[9][i][j] * column_bodys[10][i][j]
                    column_bodys[12][i] ? column_bodys[12][i].push(obj) : (column_bodys[12][i] = [obj])
                }

                column_bodys[11][i] = column_bodys[8][i]
                let sum_sz = 0
                let sum_sz_obj = column_bodys[12][i]
                for (var key in sum_sz_obj) {
                    sum_sz = sum_sz + sum_sz_obj[key]
                }
                column_bodys[13][i] = sum_sz
                column_bodys[15][i] = column_bodys[13][i] + column_bodys[14][i]
            } else {
                console.log(2)
                column_bodys[0].push([])
                column_bodys[1].push([])
                column_bodys[2].push([])
                column_bodys[3].push([])
                column_bodys[4].push([])
                console.log(3)
                if (column_bodys[14][i - 1]) {
                    column_bodys[6][i] = column_bodys[14][i - 1]
                } else {
                    column_bodys[6][i] ? column_bodys[6][i] : (column_bodys[6][i] = 1000000)
                }
                column_bodys[14][i] = column_bodys[6][i]
                let arr = [...new Set(column_bodys[5][i])]
                column_bodys[7][i] = Math.min(arr.length, 3)
                console.log(3.5,column_bodys[5])
                for (let j = 0; arr.length < 3; j++) {
                    const el = arr[j]
                    console.log(99)
                    if (!el) return
                    column_bodys[8][i] ? column_bodys[8][i].push(el) : (column_bodys[8][i] = [el])
                    column_bodys[9][i]
                        ? column_bodys[9][i].push(n[`收盘价:不复权[${datasss[i]}]`])
                        : (column_bodys[9][i] = [n[`收盘价:不复权[${datasss[i]}]`]])

                    let tolp = Math.floor(column_bodys[6][i] * 0.333)
                    let codess
                    if (tolp < column_bodys[14][i]) {
                        codess = Math.floor(tolp / column_bodys[9][i][j] / 100) * 100
                    } else {
                        codess = Math.floor(column_bodys[14][i] / 100) * 100
                    }
                    column_bodys[10][i] ? column_bodys[10][i].push(codess) : (column_bodys[10][i] = [codess])
                    column_bodys[14][i] = column_bodys[14][i] - column_bodys[10][i][j] * column_bodys[9][i][j]

                    let obj = {}
                    obj[column_bodys[8][i][j]] = column_bodys[9][i][j] * column_bodys[10][i][j]
                    column_bodys[12][i] ? column_bodys[12][i].push(obj) : (column_bodys[12][i] = [obj])
                }
                column_bodys[11][i] = column_bodys[8][i]
                let sum_sz = 0
                let sum_sz_obj = column_bodys[12][i]
                for (var key in sum_sz_obj) {
                    sum_sz = sum_sz + sum_sz_obj[key]
                }
                column_bodys[13][i] = sum_sz
                column_bodys[15][i] = column_bodys[13][i] + column_bodys[14][i]
                console.log(4, column_headers)
            }
        }
        console.log(5, column_headers)
        let file_name = `./回测日期范围[${datasss[0]}-${datasss[datasss.length - 1]}]-操作时间[${getNowDate()}].csv`
        let file_data = String(column_headers.concat(column_bodys).filter((el) => el.push('\n')))
            .toString()
            .replace(/\n,/g, '\n')
        console.log(6)
        fs.writeFile(file_name, file_data, (err) => err)
})()

async function handleCode(array, d = 20230202) {
    array = await JSON.parse(fs.readFileSync(`./public/THS/${d}.json`, 'utf8'))
    let ans = []
    console.log('zong', array.length)
    for (let i = 0; i < array.length; i++) {
        const el = array[i]
        const tactics1 = //策略-1
            el['股票简称'].indexOf('ST') === -1 && //筛除ST股
            el['股票代码'].substring(0, 3) != '688' && //筛除科创版
            el['股票代码'].substring(0, 1) != '3' && //筛除创业版
            el[`个股热度排名[${d}]`] < 100 &&
            Number(el[`涨跌幅:前复权[${d}]`]) > 1 && // 涨幅大于(%)
            Number(el[`涨跌幅:前复权[${d}]`]) < 9 && // 涨幅小于(%)
            Number(el[`换手率[${d}]`]) > 1 && //换手大于(%)
            Number(el[`换手率[${d}]`]) < 40 && //换手小于(%)
            Number(el['最新价']) > 2 && //当前价格
            Number(el['最新价']) < 250 && //当前价格
            Number(el[`资金流向[${d}]`]) > 5000000 && //资金净流入
            Number(el[`资金流向[${d}]`]) /
                (Math.abs(Number(el[`资金流入inner[${d}]`])) + Math.abs(Number(el[`资金流出inner[${d}]`]))) >
                0.1 && //净流入资金占所有资金的比重
            Number(el[`dde大单净额[${d}]`]) > 1000000 && //dde大单净额资金净流入
            Number(el[`dde大单净额[${d}]`]) / Number(el[`资金流向[${d}]`]) > 0.3 //净流入大单占比

        if (tactics1) ans.push(el)
    }
    // ans.sort((a, b) => a[`个股热度排名[${d}]`] - b[`个股热度排名[${d}]`])
    console.log('选出', ans.length)
    return ans
}
// {
//     "股票代码": "300565.SZ",
//     "股票简称": "科信技术",
//     "换手率[20230202]": "6.151507",
//     "成交额[20230202]": "2.82335231E8",
//     "个股热度排名[20230202]": 897,
//     "总市值[20230202]": 5093920000,
//     "资金流向[20230202]": -39716567.400000006,
//     "dde大单净额[20230202]": -8192649.2,
//     "a股市值(不含限售股)[20230202]": 4611269488.15,
//     "所属同花顺行业": "通信-通信设备-通信网络设备及器件",
//     "成交量[20230202]": "1.1582793E7",
//     "资金流入inner[20230202]": 121309332.6,
//     "资金流出inner[20230202]": 161025900,
//     "dde大单买入金额[20230202]": 74408764.8,
//     "dde大单卖出金额[20230202]": 82601414,
//     "涨跌幅:前复权[20230202]": "-0.32560033",
//     "涨跌[20230202]": "-0.08",
//     "振幅[20230202]": "1.953601",
//     "最新价": "19.70",
//     "最新涨跌幅": "0.051",
//     "market_code": "33",
//     "code": "300565"
// }
