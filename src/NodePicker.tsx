import { render, h, Component, VNode } from 'preact'

// 基础节点 id 为自然数
export interface PNode {
    id: number
    name: string
    children?: PNode[]
}

// 所有参数，基于input的扩展
export interface NodePickerProps {
    name?: string
    placeholder?: string
    title?: string
    tree: PNode[]
    // 判断到哪一集展现列表，而不是继续联动下拉框
    isLastParent?: {
        (node: PNode): boolean
    }
    // 选中节点事件
    onChange?: {
        (node: PNode): void
    }
}

// 组件内部使用的State
export interface NodePickerState {
    paths?: number[]
    node?: PNode
    active: boolean
    keywords?: string
}

export default class extends Component<NodePickerProps, NodePickerState> {

    isLastParent = (node: PNode): boolean => {
        return !node || !node.children || !node.children[0].children
    }

    init = (paths = []) => {
        const { isLastParent } = this
        const { tree = [] } = this.props

        let node: PNode = { id: -1, name: '__root__', children: tree }
        let index = 0
        for(;index < paths.length; index++) {
            node = node.children[paths[index]]
        }
        while (!isLastParent(node)) {
            node = node.children[paths[index++] | 0]
            paths.push(node.id)
        }
        this.setState({
            paths
        })
    }

    componentWillReceiveProps (nextProps) {
        this.props = nextProps
        this.init()
    }
    
    state: NodePickerState
    constructor(props: NodePickerProps) {
        super(props)
        if (props.isLastParent) {
            this.isLastParent = props.isLastParent
        }
        this.state = {
            active: false
        }
        this.init()
    }

    changeParent = (target, deepth) => {
        let { paths = [] } = this.state
        this.init(paths.slice(0, deepth).concat(target.value | 0))
    }

    toggleActive = () => {
        const { active } = this.state
        this.setState({
            active: !active
        })
    }
    onChange = (node: PNode) => {
        const { onChange } = this.props
        onChange && onChange(node)
        this.setState({
            node,
            active: false
        })
    }
    changeKeywords = (e) => {
        this.setState({
            keywords: e.target.value
        })
    }
    render () {
        const { name, title, placeholder, tree = [] } = this.props
        const { paths, node, active, keywords = '' } = this.state
        const { changeParent, onChange, toggleActive, changeKeywords } = this

        let children = tree
        return <span >
            <input type="text" readOnly name={name} title={title} placeholder={placeholder} value={node && node.name} onClick={toggleActive}/>
            <div className={`node-selector ${active ? 'is-active' : ''}`}>
                <div className="selector-inner">
                    <div className="buttons-panel">
                        {paths.map((id, i) => <select className="inline-block" onChange={(e) => changeParent(e.target, i)}>
                            {children.map(item => {
                                const selected = item.id === id;
                                if (selected) {
                                    children = item.children
                                }
                                return <option value={item.id} selected={selected}>{item.name}</option>
                            })}
                        </select>)}
                        <input type="text" className="inline-block" placeholder="quick search" onInput={changeKeywords}/>
                    </div>
                    <div className="item-panel">
                        {children.map(n => n.name.indexOf(keywords) > -1 && <a href="javascript:;" onClick={() => onChange(n)}>{n.name}</a>)}
                    </div>
                    <a href="javascript:;" className="button-close" onClick={toggleActive}>&times;</a>
                </div>
            </div>
        </span>
    }
}