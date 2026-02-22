import {Node , Edge} from 'reactflow'


export type Nodetype = 
     'webhook'
    | 'schedule'
    | 'aiTextGenerator'
    | 'aiAnalyzer'


export interface NodeData{
    label : string;
    type : Nodetype;
    config?: Record<string , any>;
    output?: any;
    isExecuting?: boolean;
    error?: string;
}

export interface workFlowNode extends Node{
    data : NodeData;
}