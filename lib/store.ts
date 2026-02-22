import {create} from 'zustand'
import {  WorkflowState } from './types'

export const useWorkflowStore = create<WorkflowState>((set , get)=>{
    nodes: [],
    edges : [],

    updateNode : (id : string , data : Partial<WorkflowNode['data']>)=>{
        set((state)=>({
            nodes : state.nodes.map((node)=>
                node.id == id ? {...node , data : {...node.data , ...data}} : node  
        )      
        }));
    }

    deleteNode : (id : string)=>{
        set((state)=>{
            nodes : state.nodes.filter((node)=>node.id !== id),
            edges : state.edges.filter((edge)=>edge.source !== id),
            
        })
    }
})