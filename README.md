# node-picker
unlimited-deepth  node picker  
based on [preact](https://preactjs.com/)

see demos [https://shy2850.github.io/node-picker/](https://shy2850.github.io/node-picker/)

## useage
$ npm i node-picker
``` tsx
import { render, h } from 'preact'
import NodePicker, { PNode } from "node-picker"

const tree: PNode[] 
const app = document.getElementById('app')
render(<NodePicker name="node" tree={tree}/>, app)

```

## interface

``` ts
import { Component } from 'preact';
export interface PNode {
    id: number;
    name: string;
    children?: PNode[];
}
export interface NodePickerProps {
    name?: string;
    placeholder?: string;
    title?: string;
    tree: PNode[];
    isLastParent?: {
        (node: PNode): boolean;
    };
    onChange?: {
        (node: PNode): void;
    };
}
export interface NodePickerState {
    paths?: number[];
    node?: PNode;
    active: boolean;
    keywords?: string;
}
export default class  extends Component<NodePickerProps, NodePickerState> {
    isLastParent: (node: PNode) => boolean;
    init: (paths?: any[]) => void;
    componentWillReceiveProps(nextProps: any): void;
    state: NodePickerState;
    constructor(props: NodePickerProps);
    changeParent: (target: any, deepth: any) => void;
    toggleActive: () => void;
    onChange: (node: PNode) => void;
    changeKeywords: (e: any) => void;
    render(): JSX.Element;
}

```
