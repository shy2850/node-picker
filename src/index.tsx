import { render, h } from 'preact'
import NodePicker, { PNode } from "./NodePicker"

declare var Area
declare var allUnivList

allUnivList.map(c => {
    c.id = c.id | 0
    c.children = c.provs ? c.provs.map(p => {
        p.children = p.univs
        return p
    }) : c.univs
    return c
})

const AreaList = (function loop (area) {
    return Object.keys(area).map(k => {
        const [name, id] = k.split('_')
        return id ? {
            id: parseInt(id, 10) + 1,
            name,
            children: loop(area[k])
        } : {
            id: parseInt(area[k], 10) + 1,
            name: k
        }
    })
})(Area['亚洲_1']['中国_156'])

console.log(AreaList)
console.log(allUnivList)
const app = document.getElementById('app')
render(<div>
    <NodePicker name="node-area" placeholder="点击选择地区" tree={AreaList} onChange={(node, paths) => {
        let next = AreaList
        return paths.map((i) => {
            let res = next[i]
            next = next[i].children
            return res
        }).concat(node).map(({name}) => name).join('-')
    }} style={{width: 200}}/>
    <NodePicker name="node-school" placeholder="点击选择学校" tree={allUnivList} />
</div>, app)
