import { render, h, Component, VNode } from 'preact'

// 基础节点 id 为自然数
export interface PNode {
    id?: number
    name: string
    children?: PNode[]
}

// 所有参数，基于input的扩展
export interface NodePickerProps {
    name?: string
    className?: string
    placeholder?: string
    title?: string
    style?: any
    tree: PNode[]
    // 判断到哪一级别展现选项，而不是继续联动下拉框
    isLastParent?: {
        (node: PNode): boolean
    }
    // 选中节点事件
    onChange?: {
        (node: PNode, paths: number[]): string
    }
}

// 组件内部使用的State
export interface NodePickerState {
    paths?: number[]
    name?: string
    active: boolean
    keywords?: string
}

export default class extends Component<NodePickerProps, NodePickerState> {

    isLastParent = (node: PNode): boolean => {
        return !node || !node.children || !node.children[0].children
    }
    defaultChange = (node: PNode, paths: number[]): string => {
        return node.name
    }

    init = (paths = []) => {
        const { isLastParent } = this
        const { tree = [] } = this.props

        let node: PNode = { name: '__root__', children: tree }
        let index = 0
        for(;index < paths.length; index++) {
            node = node.children[paths[index]]
        }
        while (!isLastParent(node)) {
            const n = paths[index] | 0
            node = node.children[n]
            paths.push(n)
            index++
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
    onPick = (node: PNode) => {
        const { onChange = this.defaultChange } = this.props
        const { paths } = this.state
        const name = onChange(node, paths)
        this.setState({
            name,
            active: false
        })
    }
    changeKeywords = (e) => {
        this.setState({
            keywords: e.target.value
        })
    }
    render () {
        const { tree = [], onChange, isLastParent, ...props } = this.props
        const { paths, name, active, keywords = '' } = this.state
        const { changeParent, onPick, toggleActive, changeKeywords } = this

        let children = tree
        return <span >
            <input type="text" {...props} value={name} onClick={toggleActive}/>
            <div className={`node-selector ${active ? 'is-active' : ''}`}>
                <div className="selector-inner">
                    <div className="buttons-panel">
                        {paths.map((index, i) => <select key={`${i}`} className="inline-block" onChange={(e) => changeParent(e.target, i)}>
                            {children.map((item, value) => {
                                const selected = value === index;
                                if (selected) {
                                    children = item.children
                                }
                                return <option value={value} selected={selected}>{item.name}</option>
                            })}
                        </select>)}
                        <input type="text" className="inline-block" placeholder="quick search" onInput={changeKeywords}/>
                    </div>
                    <div className="item-panel">
                        {children.map(n => n.name.indexOf(keywords) > -1 && <a href="javascript:;" onClick={() => onPick(n)}>{n.name}</a>)}
                    </div>
                    <a href="javascript:;" className="button-close" onClick={toggleActive}>&times;</a>
                </div>
            </div>
        </span>
    }
}