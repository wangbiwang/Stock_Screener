import fs from 'fs'
import { getCode, getDate } from './utils.js'
;(async function () {
    let date = await getDate()
    let main_files = `./public/Stock_Data/${date}`
    async function run() {
        const datastr = fs.readFileSync('./public/Stock_Data/rawCode_symbol.txt', 'utf8') //读取源数据
        return (
            (await getCode(0, 700, datastr)) +
            (await getCode(700, 1400, datastr)) +
            (await getCode(1400, 2100, datastr)) +
            (await getCode(2100, 2800, datastr)) +
            (await getCode(2800, 3500, datastr)) +
            (await getCode(3500, 4200, datastr)) +
            (await getCode(4200, 4513, datastr))
        )
    }
    let meta_data = (await run()).split('\n')
    meta_data.pop()
    fs.writeFile(main_files + '.json', JSON.stringify(meta_data), (err) => err)
    const dateCode = JSON.parse(fs.readFileSync('./public/Stock_Data/dateCode.json', 'utf8'))
    if (dateCode[dateCode.length - 1] != date) {
        dateCode.push(Number(date))
        fs.writeFile('./public/Stock_Data/dateCode.json', JSON.stringify(dateCode), (err) => err)
    }
})()
