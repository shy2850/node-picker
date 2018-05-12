import { render, h } from 'preact'
import NodePicker from "./NodePicker"

declare var allUnivList

allUnivList.map(c => {
    c.id = c.id | 0
    c.children = c.provs ? c.provs.map(p => {
        p.children = p.univs
        return p
    }) : c.univs
    return c
})

const app = document.getElementById('app')
render(<NodePicker name="node" placeholder="点击选择节点" tree={allUnivList}/>, app)
