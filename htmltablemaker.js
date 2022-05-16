"use strict";
module.exports = {
        makeTable: function(arr, tableStyle = `* {padding:7px;} td:nth-child(odd) {
        background-color: rgb(193, 230, 215);} td { border:  1px solid black;}
    `)
        {
                const keys = Object.keys(arr[0])
                console.log(keys)
                const style = `<style>${tableStyle}</style>`
                let table = []
                tableStyle ? table.push(style) : null
                table.push(`<table>`)
                let firstRow = [`<tr  style="font-weight:bold;">`]
                keys.forEach((el) =>
                {
                        firstRow.push(`<td>${el}</td>`)
                })
                firstRow.push('</tr>')
                firstRow = firstRow.join(',').replace(/[,]+/g, '').toUpperCase()
                table.push(firstRow.bold())
                //table = table.join(',').replace(/[,]+/g,'')
                let rows = []
                arr.forEach(element =>
                {
                        let row = ['<tr>']
                        for (const [key, value] of Object.entries(element))
                        {
                                let isEmailAdsress = false
                                let str = value
                                for (let i = 0; i < str.length; i++)
                                {
                                        if (str[i] == '@')
                                        {
                                                isEmailAdsress = true
                                                console.log('malpa')
                                        }
                                }
                                console.log(isEmailAdsress)
                                if (isEmailAdsress === true)
                                {
                                        console.log(value)
                                        row.push(`<td><address><a href="mailto:${value}">${value}</a><address></td>`);
                                }
                                else
                                {
                                        row.push(`<td>${value}</td>`);
                                }
                        }
                        row.push(`</tr>`)
                        //console.log(row)
                        row = row.join(',').replace(/[,]+/g, '')
                        rows.push(row)
                });
                rows = rows.join(',').replace(/[,]+/g, '')
                table.push(rows)
                table.push(`</table>`)
                table = table.join(',').replace(/[,]+/g, '')
                //console.log(table)
                return table
        }
}
