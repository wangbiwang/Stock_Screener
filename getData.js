;(async function () {
    const fs = require('fs')
    const { deleteFolderRecursive, getCode, getDate } = require('./utils')
    let date = await getDate()
    let main_files = `./Stock_Data/${date}`
    // if (fs.existsSync(main_files)) deleteFolderRecursive(main_files) // 判断是否存在文件夹,存在就删除
    if (fs.existsSync(main_files)) fs.rmdirSync(main_files, { recursive: true }) // 判断是否存在文件夹,存在就删除
    fs.mkdirSync(main_files) //然后再创建
    async function run_sh() {
        // let files = main_files + `/sh`
        // fs.mkdirSync(files) //创建子文件夹
        const datastr = fs.readFileSync('./Raw_Data/sh_1998.txt', 'utf8') //读取源数据
        //远程获取本地写入数据
        let res1 = await getCode(0, 700, datastr)
        // fs.writeFile(files + `/0-700.txt`, res1, (err) => err)
        let res2 = await getCode(700, 1400, datastr)
        // fs.writeFile(files + `/700-1400.txt`, res2, (err) => err)
        let res3 = await getCode(1400, 1998, datastr)
        // fs.writeFile(files + `/1400-1998.txt`, res3, (err) => err)
        return res1 + res2 + res3
    }
    async function run_sz() {
        // let files = main_files + `/sz`
        // fs.mkdirSync(files) //创建子文件夹
        const datastr = fs.readFileSync('./Raw_Data/sz_1406.txt', 'utf8') //读取源数据
        //远程获取本地写入数据
        let res1 = await getCode(0, 700, datastr)
        // fs.writeFile(files + `/0-700.txt`, res1, (err) => err)
        let res2 = await getCode(700, 1400, datastr)
        // fs.writeFile(files + `/700-1406.txt`, res2, (err) => err)
        // let res3 = await getCode(1400, 1998, datastr)
        // fs.writeFile(files + `/1200-1998.txt`, res3, (err) => err)
        return res1 + res2
    }
    async function run_szKC() {
        // let files = main_files + `/szKC`
        // fs.mkdirSync(files) //创建子文件夹
        const datastr = fs.readFileSync('./Raw_Data/szKC_1109.txt', 'utf8') //读取源数据
        //远程获取本地写入数据
        let res1 = await getCode(0, 700, datastr)
        // fs.writeFile(files + `/0-700.txt`, res1, (err) => err)
        let res2 = await getCode(700, 1109, datastr)
        // fs.writeFile(files + `/700-1109.txt`, res2, (err) => err)
        // let res3 = await getCode(1400, 1998, datastr)
        // fs.writeFile(files + `/1200-1998.txt`, res3, (err) => err)
        return res1 + res2
    }

    str = (await run_sh()) + (await run_sz()) + (await run_szKC())
    let meta_data = str.split('\n')
    let data = str.split('\n')
    for (let i = 0; i < data.length; i++) {
        let e = data[i].split('=')[1]
        if (e) {
            let earr = e.split('~')
            data[i] = {
                _code: data[i].split('=')[0].split('_')[1],
                code: earr[2], //股票代码
                name: earr[1], //股票名
                price: earr[3], //当前价格
                rate: earr[32], //振幅
                vot: earr[37], //成交额（万）
                st: earr[38], //换手率
                market_val: earr[45], //市值(亿)
            }
        }
    }
    meta_data.pop()
    data.pop()
    fs.writeFile(main_files + '/meta_data.json', JSON.stringify(meta_data), (err) => err)
    fs.writeFile(main_files + '/data.json', JSON.stringify(data), (err) => err)
})()
