import { create } from 'zustand'

const useStore = create((set) => ({
    sT:'',
    headTop:'',
    ss:(st)=>set({sT:st}),
    head:(st)=>set({headTop:st}),
}))
export default useStore