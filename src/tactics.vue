<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import dateCode from '../public/Stock_Data/dateCode.json'
import axios from 'axios'
const newDate = dateCode.map((el) => {
    let y = String(el).substring(0, 4),
        m = String(el).substring(4, 6),
        d = String(el).substring(6, 8)
    return new Date(y, Number(m) - 1, d).getTime()
})
const select_group = reactive({
    select_date_day: [],
    select_date: '', //数据日期范围
    select_ST: true, //筛除ST股
    select_KC: true, //筛除科创板股
    price: [2, 15], //股票现价区间(元)
    market_capitalization: [30, 600], //市值区间(亿元)
    changepercent: [0, 3], //涨跌幅区间(%)
    turnover_rate: [1, 10], //换手率区间(%)
    turnover: [5000, 1000000], //成交额区间(万)
    e1: true,
    e2: true,
    e3: true,
    e4: false,
    e5: false,
})
const updateTime = ref('-')
const showData = ref([])
const disabledDate = (time) => {
    return newDate.indexOf(time.getTime()) == -1
}
const getSelectGroup = async () => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    showData.value = []
    showData.value = await handleDate({ ...select_group })
    loading.close()
    console.log(select_group, '---', await handleDate({ ...select_group }))
}
const select_date_change = () => {
    let arr = []
    newDate.forEach((el, i) => {
        if (el >= select_group.select_date[0] && el <= select_group.select_date[1]) {
            arr.push(formatDate(el))
        }
    })
    select_group.select_date_day = arr
}
onMounted(async () => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    select_group.select_date = [newDate[newDate.length - 3], newDate[newDate.length - 1]]
    select_group.select_date_day = [
        formatDate(newDate[newDate.length - 3]),
        formatDate(newDate[newDate.length - 2]),
        formatDate(newDate[newDate.length - 1]),
    ]
    showData.value = await handleDate({ ...select_group })
    loading.close()
})
const handleDateJson = (data) => {
    let arr = []
    for (let i = 0; i < data.length; i++) {
        let e = data[i].split('=')[1]
        if (e) {
            let earr = e.split('~')
            arr.push({
                _code: data[i].split('=')[0].split('_')[1],
                code: earr[2], //股票代码
                name: earr[1], //股票名
                price: earr[3], //当前价格
                rate: earr[32], //振幅
                vot: earr[37], //成交额（万）
                st: earr[38], //换手率
                market_val: earr[45], //市值(亿)
            })
        }
    }
    return arr
}
const handleCode = (array, obj) => {
    // debugger
    let ans = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const tactics1 = //策略-1
            (obj.select_ST ? element.name.indexOf('ST') === -1 : true) && //筛除ST股
            (obj.select_KC ? element.code < 688000 : true) && //筛除科创版
            element.rate > obj.changepercent[0] && // 涨幅大于(%)
            element.rate < obj.changepercent[1] && // 涨幅小于(%)
            element.st > obj.turnover_rate[0] && //换手大于(%)
            element.st < obj.turnover_rate[1] && //换手小于(%)
            element.vot > obj.turnover[0] && // 交易金额大于(万)
            element.vot < obj.turnover[1] && // 交易金额小于(万)
            element.market_val > obj.market_capitalization[0] && //总市值小于(亿)
            element.market_val < obj.market_capitalization[1] && //总市值小于(亿)
            element.price > obj.price[0] && //当前价格
            element.price < obj.price[1] //当前价格
        // debugger
        if (tactics1) ans.push(element)
    }
    return ans
}
const handleAllCode = async (obj) => {
    let ans = []
    let arr = obj.select_date_day
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i]
        const json = (await import(`../public/Stock_Data/${e}.json`)).default
        if (e == arr[arr.length - 1]) {
            let t = json[0].split('=')[1].split('~')[30]
            updateTime.value =
                t.substring(0, 4) +
                '-' +
                t.substring(4, 6) +
                '-' +
                t.substring(6, 8) +
                ' ' +
                t.substring(8, 10) +
                ':' +
                t.substring(10, 12)
        }
        const d = handleDateJson(json)
        const emt = handleCode(d, obj)
        ans.push(emt)
    }
    return ans
}
const handleDate = async (obj) => {
    let m = new Map(),
        ans = [],
        arr = await handleAllCode(obj)
    arr.forEach(async (e) => {
        e.forEach((el) => {
            let key = el.code,
                val = m.get(key)
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
                          el._code,
                      ]
                    : [1, { rate: [el.rate], st: [el.st], vot: [el.vot] }, el._code]
            )
        })
    })
    m.forEach((value, key) => (value[0] >= arr.length ? ans.push([key, value[1], value[2]]) : null))
    // 判断数组是从小到大排序
    function isContinuityArray(arr, n = arr.length) {
        if (n == 1) return true
        if (n == 2) return Number(arr[n - 1]) > Number(arr[n - 2])
        return isContinuityArray(arr, n - 1) && Number(arr[n - 1]) > Number(arr[n - 2])
    }
    /**
     * 额外条件1：振幅是递增趋势
     */
    if (obj.e1) ans = ans.filter((el) => isContinuityArray(el[1].rate))

    /**
     * 额外条件2：换手率是递增趋势
     */
    if (obj.e2) ans = ans.filter((el) => isContinuityArray(el[1].st))
    /**
     * 额外条件3：成交额是递增趋势
     */
    if (obj.e3) ans = ans.filter((el) => isContinuityArray(el[1].vot))
    /**
     * 额外条件4：最远一天的数据是负振幅,其他都是正振幅
     */
    if (obj.e4) {
        ans = ans.filter((el) => {
            let flag = true
            for (let i = 1; i < el[1].rate.length - 1; i++) {
                let e = el[1].rate[i]
                if (e < 0) {
                    flag = false
                    break
                }
            }
            return el[1].rate[0] < 0 && flag

            // let flag = true
            // for (let i = 0; i < el[1].rate.length - 1; i++) {
            //     let e = el[1].rate[i]
            //     if (e < 0) {
            //         flag = false
            //         break
            //     }
            // }
            // return el[1].rate[el[1].rate.length - 1] < 0 && flag
        })
    }

    /**
     * 额外条件5：放量策略，最远一天换手率低于1，之后的交易日换手率大于1
     */
    if (obj.e5) {
        ans = ans.filter((el) => {
            let flag = true
            for (let i = 1; i < el[1].st.length - 1; i++) {
                let e = el[1].st[i]
                if (e < 1) {
                    flag = false
                    break
                }
            }
            return el[1].st[0] < 1 && flag
            // let flag = true
            // for (let i = 0; i < el[1].st.length - 1; i++) {
            //     let e = el[1].st[i]
            //     if (e < 1) {
            //         flag = false
            //         break
            //     }
            // }
            // return el[1].st[el[1].rate.length - 1] < 1 && flag
        })
    }

    return ans
}
const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day
    return year + month + day
}
</script>

<template>
    <div class="page">
        <div
            style="
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                align-items: center;
                flex-wrap: nowrap;
                margin: 0.5rem 1rem;
            "
        >
            <div style="color: red">最近更新时间：{{ updateTime }}</div>
            <div>
                <el-button type="primary">
                    <router-link to="/ranking">进入排名页</router-link>
                </el-button>
            </div>
        </div>
        <el-card class="screening_condition">
            <div class="box">
                <div class="tit">基础筛选条件：</div>
                <div class="cont">
                    <div class="block">
                        <div class="block_title">数据日期范围：</div>
                        <el-date-picker
                            style="max-width: 300px"
                            v-model="select_group.select_date"
                            type="daterange"
                            @change="select_date_change"
                            :disabled-date="disabledDate"
                            start-placeholder="Start Date"
                            end-placeholder="End Date"
                            :default-value="[new Date(2023, 2, 2), new Date(2023, 2, 3)]"
                        />
                        <div style="margin-left: 0.5rem">已选{{ select_group.select_date_day.length }}天数据</div>
                    </div>
                    <div class="block">
                        <div class="block_title">筛除ST股:</div>
                        <el-switch v-model="select_group.select_ST" />
                    </div>
                    <div class="block">
                        <div class="block_title">筛除科创板股:</div>
                        <el-switch v-model="select_group.select_KC" />
                    </div>
                    <div class="block">
                        <div class="block_title">股票现价区间(元):</div>
                        <div style="display: inline-flex; align-items: center">
                            <el-input
                                type="number"
                                v-model.number="select_group.price[0]"
                                class="priceInput"
                            />-<el-input type="number" v-model.number="select_group.price[1]" class="priceInput" />
                        </div>
                    </div>
                    <div class="block">
                        <div class="block_title">市值区间(亿元):</div>
                        <div style="display: inline-flex; align-items: center">
                            <el-input
                                type="number"
                                v-model.number="select_group.market_capitalization[0]"
                                class="priceInput"
                            />-<el-input
                                type="number"
                                v-model.number="select_group.market_capitalization[1]"
                                class="priceInput"
                            />
                        </div>
                    </div>
                    <div class="block">
                        <div class="block_title">涨跌幅区间(%):</div>
                        <div style="display: inline-flex; align-items: center">
                            <el-input
                                type="number"
                                v-model.number="select_group.changepercent[0]"
                                class="priceInput"
                            />-<el-input
                                type="number"
                                v-model.number="select_group.changepercent[1]"
                                class="priceInput"
                            />
                        </div>
                    </div>
                    <div class="block">
                        <div class="block_title">换手率区间(%):</div>
                        <div style="display: inline-flex; align-items: center">
                            <el-input
                                type="number"
                                v-model.number="select_group.turnover_rate[0]"
                                class="priceInput"
                            />-<el-input
                                type="number"
                                v-model.number="select_group.turnover_rate[1]"
                                class="priceInput"
                            />
                        </div>
                    </div>
                    <div class="block">
                        <div class="block_title">成交额区间(万):</div>
                        <div style="display: inline-flex; align-items: center">
                            <el-input
                                type="number"
                                v-model.number="select_group.turnover[0]"
                                class="priceInput"
                            />-<el-input type="number" v-model.number="select_group.turnover[1]" class="priceInput" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="tit">
                    额外筛选条件：<span style="color: red">(调整额外筛选条件前,请先注意基础条件参数!)</span>
                </div>
                <div class="cont">
                    <div class="block">
                        <el-switch v-model="select_group.e1" />
                        <div class="text">额外条件1：振幅是递增趋势</div>
                    </div>
                    <div class="block">
                        <el-switch v-model="select_group.e2" />
                        <div class="text">额外条件2：换手是递增趋势</div>
                    </div>
                    <div class="block">
                        <el-switch v-model="select_group.e3" />
                        <div class="text">额外条件3：成交额是递增趋势</div>
                    </div>
                    <div class="block">
                        <el-switch v-model="select_group.e4" />
                        <div class="text">额外条件4：筛选数据组中，第一天的数据是负振幅,其它天数都是正振幅</div>
                    </div>
                    <div class="block">
                        <el-switch v-model="select_group.e5" />
                        <div class="text">额外条件5：放量策略，第一天换手率小于1，之后的交易日换手率大于1</div>
                    </div>
                </div>
            </div>
        </el-card>
        <div style="text-align: center">
            <el-button type="primary" @click="getSelectGroup">开始筛选</el-button>
        </div>
        <el-card class="Results_of_screening">
            <div>筛选结果：</div>
            <div v-if="showData.length == 0" class="cont">NOT DATA</div>
            <div v-else>
                <div style="margin: 10px">已筛选{{ showData.length }}只代码，点击下方代码查看详情</div>
                <div style="display: flex; flex-wrap: wrap">
                    <a
                        v-for="item in showData"
                        style="text-align: center; width: 70px"
                        target="_blank"
                        :href="`http://quote.eastmoney.com/concept/${item[2]}.html?from=classic#fschart-k`"
                        >{{ item[0] }}</a
                    >
                    <!-- <div v-for="item in showData" style="text-align: center; width: 60px">{{ item[0] }}</div> -->
                    <!-- <a
                        v-for="item in showData"
                        style="text-align: center; width: 70px"
                        target="_blank"
                        :href="'https://gushitong.baidu.com/stock/ab-' + item[0]"
                        >{{ item[0] }}</a
                    > -->

                    <!-- https://www.baidu.com/s?tn=68018901_17_oem_dg&ie=utf-8&wd=600617 -->
                </div>
            </div>
        </el-card>
    </div>
</template>

<style lang="scss">
.el-input__inner {
    text-align: center;
}
.page {
    overflow: scroll;
    .block {
        display: flex;
        height: 40px;
        align-items: center;
        border: 1px solid #333;
        margin: 5px;
        padding: 5px;
        .priceInput {
            width: 92px;
            margin: 5px;
        }
        .block_title {
            width: 8.5rem;
        }
        .text {
            padding-left: 8px;
        }
    }
    .screening_condition {
        margin: 0.7rem;
        .el-card__body {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            // width: calc(100% - 40px);
            padding: 1rem 0;
            .box {
                width: calc(50% - 1rem);
                min-width: 25rem;
                .tit {
                    padding: 0 5px;
                }
            }
        }
    }
    .Results_of_screening {
        margin: 0.7rem;
        .cont {
            min-height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>
