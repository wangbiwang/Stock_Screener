//获取同花顺数据
import axios from 'axios'
import fs from 'fs'
import qs from 'qs'
import { v, getNowDate } from './utils.js'

const getCode = async (date, page = 1, limit = 100, all = []) => {
    // ${data_text(date)}
    const data_text = (date) =>
        String(date).substring(0, 4) + '年' + String(date).substring(4, 6) + '月' + String(date).substring(6, 8) + '日'

    let res = await axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: 'other_uid=Ths_iwencai_Xuangu_27ugi983lwwr9e7i6oouhjm87fdzivzr; cid=26f188c75410b6226c422507814cb2b41619059152; ComputerID=26f188c75410b6226c422507814cb2b41619059152; WafStatus=0; ta_random_userid=hdz69yle0h; wencai_pc_version=1; v=AxjKLJc7yO4xreRqwCzNUvX76U2vAXwZ3mZQBlIDYLEGoLZz-hFMGy51IJCh',
            'hexin-v': v(),
            Pragma: 'no-cache',
        },
        url: 'https://www.iwencai.com/gateway/urp/v7/landing/getDataList',
        data: {
            query: '换手率%；成交额；个股热度排名；资金流向；dde大单净额；涨跌幅:前复权；分时收盘价不复权9点30价格9点40价格9点50价格10点10价格10点30价格14点30价格14点40价格',
            urp_sort_way: 'asc',
            urp_sort_index: `个股热度排名[${date}]`,
            page: page,
            perpage: '100',
            condition: `[{"chunkedResult":"换手率%;_&_成交额;_&_个股热度排名;_&_资金流向;_&_dde大单净额;_&_涨跌幅:前复权;_&_分时收盘价不复权9点30价格9点40价格9点50价格10点10价格10点30价格14点30价格14点40价格","opName":"and","opProperty":"","sonSize":26,"relatedSize":0},{"indexName":"换手率","indexProperties":["nodate 1","交易日期 ${date}"],"source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","nodate":"1"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(%)","domain":"abs_股票领域","uiText":"换手率","sonSize":0,"queryText":"换手率","relatedSize":0,"tag":"换手率"},{"opName":"and","opProperty":"","sonSize":24,"relatedSize":0},{"indexName":"成交额","indexProperties":["nodate 1","交易日期 ${date}"],"source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","nodate":"1"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元|港元|美元|英镑)","domain":"abs_股票领域","uiText":"成交额","sonSize":0,"queryText":"成交额","relatedSize":0,"tag":"成交额"},{"opName":"and","opProperty":"","sonSize":22,"relatedSize":0},{"indexName":"个股热度排名","indexProperties":["nodate 1","交易日期 ${date}"],"source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","nodate":"1"},"reportType":"NATURAL_DAILY","dateType":"+区间","valueType":"_整型数值","domain":"abs_股票领域","uiText":"个股热度排名","sonSize":0,"queryText":"个股热度排名","relatedSize":0,"tag":"个股热度排名"},{"opName":"and","opProperty":"","sonSize":20,"relatedSize":0},{"indexName":"资金流向","indexProperties":["nodate 1","交易日期 ${date}"],"source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","nodate":"1"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元)","domain":"abs_股票领域","uiText":"资金流向","sonSize":0,"queryText":"资金流向","relatedSize":0,"tag":"资金流向"},{"opName":"and","opProperty":"","sonSize":18,"relatedSize":0},{"indexName":"dde大单净额","indexProperties":["nodate 1","交易日期 ${date}"],"source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","nodate":"1"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元)","domain":"abs_股票领域","uiText":"dde大单净额","sonSize":0,"queryText":"dde大单净额","relatedSize":0,"tag":"dde大单净额"},{"opName":"and","opProperty":"","sonSize":16,"relatedSize":0},{"indexName":"涨跌幅:前复权","indexProperties":["nodate 1","复权方式 前复权","交易日期 ${date}"],"source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","复权方式":"前复权","nodate":"1"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(%)","domain":"abs_股票领域","uiText":"前复权的涨跌幅","sonSize":0,"queryText":"前复权的涨跌幅","relatedSize":0,"tag":"涨跌幅:前复权"},{"opName":"and","opProperty":"","sonSize":14,"relatedSize":0},{"indexName":"收盘价:不复权","indexProperties":["nodate 1","交易日期 ${date}"],"source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","nodate":"1"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元)","domain":"abs_股票领域","uiText":"收盘价:不复权","sonSize":0,"queryText":"收盘价:不复权","relatedSize":0,"tag":"收盘价:不复权"},{"opName":"and","opProperty":"","sonSize":12,"relatedSize":0},{"dateText":"9点30","indexName":"分时收盘价:不复权","indexProperties":["区间偏移 [0,0]","交易时间 09:30","交易日期 ${date}"],"dateUnit":"日","source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","区间偏移":"[0,0]","交易时间":"09:30"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元|港元|美元|英镑)","domain":"abs_股票领域","uiText":"${data_text(
                date
            )}09点30分分时收盘价","sonSize":0,"queryText":"${data_text(
                date
            )}09点30分分时收盘价","relatedSize":0,"tag":"[9点30]收盘价:不复权"},{"opName":"and","opProperty":"","sonSize":10,"relatedSize":0},{"dateText":"9点40","indexName":"分时收盘价:不复权","indexProperties":["区间偏移 [0,0]","交易时间 09:40","交易日期 ${date}"],"dateUnit":"日","source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","区间偏移":"[0,0]","交易时间":"09:40"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元|港元|美元|英镑)","domain":"abs_股票领域","uiText":"${data_text(
                date
            )}09点40分分时收盘价","sonSize":0,"queryText":"${data_text(
                date
            )}09点40分分时收盘价","relatedSize":0,"tag":"[9点40]收盘价:不复权"},{"opName":"and","opProperty":"","sonSize":8,"relatedSize":0},{"dateText":"9点50","indexName":"分时收盘价:不复权","indexProperties":["区间偏移 [0,0]","交易时间 09:50","交易日期 ${date}"],"dateUnit":"日","source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","区间偏移":"[0,0]","交易时间":"09:50"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元|港元|美元|英镑)","domain":"abs_股票领域","uiText":"${data_text(
                date
            )}09点50分分时收盘价","sonSize":0,"queryText":"${data_text(
                date
            )}09点50分分时收盘价","relatedSize":0,"tag":"[9点50]收盘价:不复权"},{"opName":"and","opProperty":"","sonSize":6,"relatedSize":0},{"dateText":"10点10","indexName":"分时收盘价:不复权","indexProperties":["区间偏移 [0,0]","交易时间 10:10","交易日期 ${date}"],"dateUnit":"日","source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","区间偏移":"[0,0]","交易时间":"10:10"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元|港元|美元|英镑)","domain":"abs_股票领域","uiText":"${data_text(
                date
            )}10点10分分时收盘价","sonSize":0,"queryText":"${data_text(
                date
            )}10点10分分时收盘价","relatedSize":0,"tag":"[10点10]收盘价:不复权"},{"opName":"and","opProperty":"","sonSize":4,"relatedSize":0},{"dateText":"10点30","indexName":"分时收盘价:不复权","indexProperties":["区间偏移 [0,0]","交易时间 10:30","交易日期 ${date}"],"dateUnit":"日","source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","区间偏移":"[0,0]","交易时间":"10:30"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元|港元|美元|英镑)","domain":"abs_股票领域","uiText":"${data_text(
                date
            )}10点30分分时收盘价","sonSize":0,"queryText":"${data_text(
                date
            )}10点30分分时收盘价","relatedSize":0,"tag":"[10点30]收盘价:不复权"},{"opName":"and","opProperty":"","sonSize":2,"relatedSize":0},{"dateText":"14点30","indexName":"分时收盘价:不复权","indexProperties":["区间偏移 [0,0]","交易时间 14:30","交易日期 ${date}"],"dateUnit":"日","source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","区间偏移":"[0,0]","交易时间":"14:30"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元|港元|美元|英镑)","domain":"abs_股票领域","uiText":"${data_text(
                date
            )}14点30分分时收盘价","sonSize":0,"queryText":"${data_text(
                date
            )}14点30分分时收盘价","relatedSize":0,"tag":"[14点30]收盘价:不复权"},{"dateText":"14点40","indexName":"分时收盘价:不复权","indexProperties":["区间偏移 [0,0]","交易时间 14:40","交易日期 ${date}"],"dateUnit":"日","source":"new_parser","type":"index","indexPropertiesMap":{"交易日期":"${date}","区间偏移":"[0,0]","交易时间":"14:40"},"reportType":"TRADE_DAILY","dateType":"交易日期","valueType":"_浮点型数值(元|港元|美元|英镑)","domain":"abs_股票领域","uiText":"${data_text(
                date
            )}14点40分分时收盘价","sonSize":0,"queryText":"${data_text(
                date
            )}14点40分分时收盘价","relatedSize":0,"tag":"[14点40]收盘价:不复权"}]`,
            codelist: '',
            indexnamelimit: '',
            logid: '',
            ret: 'json_all',
            sessionid: '',
            source: 'Ths_iwencai_Xuangu',
            'date_range[0]': `${date}`,
            'date_range[1]': `${date}`,
            iwc_token: '',
            urp_use_sort: '1',
            user_id: 'Ths_iwencai_Xuangu_lkyx1x8eqnomedkdsugnskooqnbta4sm',
            'uuids[0]': '24087',
            query_type: 'stock',
            comp_id: '6623802',
            business_cat: 'soniu',
            uuid: '24087',
        },
        transformRequest: [
            function (e) {
                // 将请求数据转换成功 formdata 接收格式
                return qs.stringify(e)
            },
        ],
    })

    if (res.data.status_msg && res.data.status_msg === 'ok') {
        let c_data = res.data.answer.components[0].data
        // let totalPages = c_data.meta.extra.code_count ? Math.ceil(c_data.meta.extra.code_count / 100) : 0
        let totalPages = 11
        let datas = c_data.datas ? c_data.datas : []
        console.log(`[${date}]`, page, limit, all.length)
        if (totalPages === 0 && datas === []) {
            return console.log('1111111Error:', qs.stringify(c_data))
        }
        if (page >= totalPages) {
            return all
        }
        return await getCode(date, ++page, limit, all.concat(datas))
    } else {
        return new Error('网络错误！！！',res.data.status_msg)
    }
}
;(async function () {
    let datasss = [
        20230201, 20230202, 20230203, 20230206, 20230207, 20230208, 20230209, 20230210, 20230213, 20230214, 20230215,
        20230216, 20230217, 20230220, 20230221, 20230222, 20230223, 20230224, 20230227, 20230228, 20230301, 20230302,
        20230303, 20230306, 20230307, 20230308, 20230309, 20230310, 20230313, 20230314, 20230315, 20230316, 20230317,
        20230320,
    ]

    for (var i = 0; i < datasss.length; i++) {
        let k = i
        ;(function (time, date) {
            setTimeout(async function () {
                let main_files = `./public/THS/${date}`
                const d = await getCode(date)
                let map = new Map()
                d.forEach((el) => {
                    if (!map.has(el.code)) {
                        map.set(el.code, el)
                    }
                })
                let c = []
                for (let value of map.values()) {
                    c.push(value)
                }
                fs.writeFile(main_files + '.json', JSON.stringify(c), (err) => err)
                console.log(`${date}.json---已下载完成`)
            }, 1000 * time)
            //等待时间快速60-90秒，慢速5分钟
        })(k * 20, datasss[i])
    }
})()
