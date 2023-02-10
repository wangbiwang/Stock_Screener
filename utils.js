// module.exports.deleteFolderRecursive = (path) => {
//     const fs = require('fs')
//     const Path = require('path')
//     if (fs.existsSync(path)) {
//         fs.readdirSync(path).forEach((file, index) => {
//             const curPath = Path.join(path, file)
//             if (fs.lstatSync(curPath).isDirectory()) {
//                 // recurse
//                 deleteFolderRecursive(curPath)
//             } else {
//                 // delete file
//                 fs.unlinkSync(curPath)
//             }
//         })
//         fs.rmdirSync(path)
//     }
// }
module.exports.getCode = async (a, b, datastr) => {
    const axios = require('axios')
    let res = await axios({
        method: 'get',
        url: 'https://qt.gtimg.cn/q=' + datastr.substring(a * 9, b * 9),
        responseType: 'arraybuffer', // 关键步骤
        responseEncoding: 'utf8',
    })
    let utf8decoder = new TextDecoder('GBK') // 关键步骤
    return utf8decoder.decode(res.data)
}
module.exports.getDate = async () => {
    const axios = require('axios')
    let res = await axios({
        method: 'get',
        url: 'https://qt.gtimg.cn/q=sz000858,sh600519,sh601398',
        responseType: 'arraybuffer', // 关键步骤
        responseEncoding: 'utf8',
    })
    let utf8decoder = new TextDecoder('GBK') // 关键步骤
    let arr = utf8decoder.decode(res.data).split('\n')
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i].split('=')[1]
        if (e) {
            let earr = e.split('~')
            ans.push(earr[30].substring(0, 8))
        }
    }
    const d = {}
    ans.forEach((k) => (!d[k] ? (d[k] = 1) : d[k]++))
    return Object.keys(d).sort((a, b) => d[b] - d[a])[0]
}

// module.exports.getDate = () => {
//     let nowDate = new Date()
//     let year = nowDate.getFullYear()
//     let month = nowDate.getMonth() + 1 < 10 ? '0' + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1
//     let day = nowDate.getDate() < 10 ? '0' + nowDate.getDate() : nowDate.getDate()
//     let dateStr = year + month + day
//     return dateStr
// }
// 格式化日对象
module.exports.getNowDate = () => {
    var date = new Date()
    var sign2 = '-'
    var year = date.getFullYear() // 年
    var month = date.getMonth() + 1 // 月
    var day = date.getDate() // 日
    var hour = date.getHours() // 时
    var minutes = date.getMinutes() // 分
    var seconds = date.getSeconds() //秒
    var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
    var week = weekArr[date.getDay()]
    // 给一位数的数据前面加 “0”
    if (month >= 1 && month <= 9) {
        month = '0' + month
    }
    if (day >= 0 && day <= 9) {
        day = '0' + day
    }
    if (hour >= 0 && hour <= 9) {
        hour = '0' + hour
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = '0' + minutes
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = '0' + seconds
    }
    return year + '-' + month + '-' + day + ' ' + hour + sign2 + minutes + sign2 + seconds
}
