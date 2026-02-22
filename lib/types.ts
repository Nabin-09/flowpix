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

export interface WorkflowNode extends Node{
    data : NodeData;
}

export interface WorkflowEdge extends Edge {

}

export interface WorkflowState{
    nodes : WorkflowNode[];
    edges : WorkflowEdge[];
    addNode : (node : WorkflowNode)=> void;
    updateNode : (id : string , data : Partial<NodeData>)=> void;
}