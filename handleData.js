;(async function () {
    const fs = require('fs')
    const { getNowDate, getDate } = require('./utils')
    function readData(date) {
        let file = './Stock_Data/' + date
        let array = JSON.parse(fs.readFileSync(file + '/data.json', 'utf8'))
        return handleCode(array)
    }
    let m = new Map(),
        ans = []
    function map_storage(...arr) {
        arr.forEach((e, i) => {
            e.forEach((el) => {
                let key = el.code,
                    val = m.get(key)
                // m.set(key, val ? [val[0] + 1, val[1].concat(el.rate)] : [1, [el.rate]])
                m.set(
                    key,
                    val
                        ? [
                              val[0] + 1,
                              {
                                  rate: val[1].rate.concat(el.rate),
                                  st: val[1].st.concat(el.st),
                                  vot: val[1].vot.concat(el.vot),
                              },
                          ]
                        : [1, { rate: [el.rate], st: [el.st], vot: [el.vot] }]
                )
            })
        })
        m.forEach((value, key) => (value[0] >= arr.length ? ans.push([key, value[1]]) : null))
    }
    map_storage(readData(20230210),readData(20230209),readData(20230208),readData(20230207))

    /**
     * 额外条件1：振幅是递增趋势
     */
    // ans = ans.filter((el) => isContinuityArray(el[1].rate))

    /**
     * 额外条件2：换手率是递增趋势
     */
    // ans = ans.filter((el) => isContinuityArray(el[1].st))
    /**
     * 额外条件3：成交额是递增趋势
     */
    // ans = ans.filter((el) => isContinuityArray(el[1].vot))
    /**
     * 额外条件4：最远一天的数据是负振幅,其他都是正振幅
     */
    ans = ans.filter((el) => {
        let flag = true
        for (let i = 0; i < el[1].rate.length - 1; i++) {
            let e = el[1].rate[i]
            if (e < 0) {
                flag = false
                break
            }
        }
        return el[1].rate[el[1].rate.length - 1] < 0 && flag
    })
    /**
     * 额外条件5：放量策略，最远一天换手率低于1，之后的交易日换手率大于1
     */
    // ans = ans.filter((el) => {
    //     let flag = true
    //     for (let i = 0; i < el[1].st.length - 1; i++) {
    //         let e = el[1].st[i]
    //         if (e < 2) {
    //             flag = false
    //             break
    //         }
    //     }
    //     return el[1].st[el[1].rate.length - 1] < 1 && flag
    // })

    console.log('最终选出数量：', ans.length, '\n', ans)
    if (ans.length > 0) {
        ans.sort((a, b) => Number(a) - Number(b))
        let date = await getDate()
        let main_files = `./selectData/${date}`
        if (!fs.existsSync(main_files)) fs.mkdirSync(main_files) // 判断是否存在文件夹,不存在就创建
        fs.writeFile(`${main_files}/${getNowDate()}.json`, JSON.stringify(ans), (err) => err)
    }
})()
// 判断数组是从大到小排序
function isContinuityArray(arr, n = arr.length) {
    if (n == 1) return true
    if (n == 2) return Number(arr[n - 1]) < Number(arr[n - 2])
    return isContinuityArray(arr, n - 1) && Number(arr[n - 1]) < Number(arr[n - 2])
}
function handleCode(array) {
    let ans = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const tactics1 = //策略-1
            element.name.indexOf('ST') === -1 && //筛除ST股
            element.code < 688000 && //筛除科创版
            // element.code > 600000 && //
            // element.code < 300000 && //

            element.rate > -1 && // 涨幅大于(%)
            element.rate < 3 && // 涨幅小于(%)
            element.st > 1 && //换手大于(%)
            element.st < 10 && //换手小于(%)
            element.vot > 5000 && // 交易金额大于(万)
            // element.vot < 20000 && // 交易金额小于(万)
            element.market_val > 30 && //总市值小于(亿)
            element.market_val < 700 && //总市值小于(亿)
            element.price > 2 && //当前价格
            element.price < 20 //当前价格
        // ------------------
        // const tactics2 = //策略-2
        //     element.name.indexOf('ST') === -1 && //筛除ST股
        //     element.code < 688000 && //筛除科创版
        //     // element.code > 600000 && //
        //     // element.code < 300000 && //

        //     element.rate > -1 && // 涨幅大于(%)
        //     element.rate < 0 && // 涨幅小于(%)
        //     element.st > 1 && //换手大于(%)
        //     element.st < 10 && //换手小于(%)
        //     element.vot > 5000 && // 交易金额大于(万)
        //     // element.vot < 20000 && // 交易金额小于(万)
        //     element.market_val < 300 && //总市值小于(亿)
        //     element.price < 20 //当前价格
        // ------------------

        if (tactics1) ans.push(element)
    }
    console.log('选出数量：', ans.length)
    return ans
}

// 0: 未知，可能是在腾讯数据库中的主键
// 1: 名字
// 2: 代码
// 3: 当前价格
// 4: 昨收
// 5: 今开
// 6: 成交量（手）
// 7: 外盘
// 8: 内盘
// 9: 买一
// 10: 买一量（手）
// 11-18: 买二 买五
// 19: 卖一
// 20: 卖一量
// 21-28: 卖二 卖五
// 29: 最近逐笔成交
// 30: 时间
// 31: 涨跌
// 32: 涨跌%
// 33: 最高
// 34: 最低
// 35: 价格/成交量（手）/成交额
// 36: 成交量（手）
// 37: 成交额（万）
// 38: 换手率
// 39: 市盈率
// 40:
// 41: 最高
// 42: 最低
// 43: 振幅
// 44: 流通市值
// 45: 总市值
// 46: 市净率
// 47: 涨停价
// 48: 跌停价
