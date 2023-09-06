import reducer from "./reduxStore/reducer.js"
import * as action from "./reduxStore/actions.js"


const DEFAULT_STATE = {
    user:{},
    todos:[]
}

describe("contect reducer",()=>{

    it('sucessfully add new todo',()=>{
        expect(reducer(DEFAULT_STATE, action.todoAction("do this"))).toMatchSnapshot()
    })
    it('sucessfully update user object',()=>{
        expect(reducer(DEFAULT_STATE, action.userAction({token: "otARealToken"}))).toMatchSnapshot()
    })

})