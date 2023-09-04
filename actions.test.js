import * as actions from "./reduxStore/actions"




describe('should return an action',()=>{
    it('should return an action', () => {
        expect(actions.userAction({userId:"12345609"})).toMatchSnapshot()
      })
    
      it('should handle empty object',()=>{
        expect(actions.userAction({})).toMatchSnapshot()
      })

      it('should handle empty name',()=>{
        expect(actions.userAction({name:""})).toMatchSnapshot()
      })
})

test('should return an action', () => {
  expect(actions.todoAction("do this")).toMatchSnapshot()
})

describe('login user returns action', ()=>{

    const mocLogin = async (email,password)=> {
            
        if(email === "username" && password === "password"){
            return "thisisatesttoken"
        }else{
            throw new Error("credentials incorrect")
        }
    }

    it('dispatches LOG_IN_SENT',    async()=>{

        const mockDispatch = jest.fn()

        await actions.loginUser("","")(mockDispatch)
       console.log(mockDispatch.mock.calls)
        expect(mockDispatch.mock.calls[0][0]).toEqual({type: actions.LOG_IN_SENT})
    } )


   

    it('dispatches LOG_IN_FULFILLED',async()=>{

        const mockDispatch = jest.fn()
       

        await actions.loginUser("username","password",mocLogin)(mockDispatch)

        console.log(mockDispatch.mock.calls)

        expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.LOG_IN_FULFILLED, payload:{token:"thisisatesttoken"}})
        expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
    })

    it('dispatches LOG_IN_REJECTED',async()=>{

        const mockDispatch = jest.fn()
      

        await actions.loginUser("","",mocLogin)(mockDispatch)

        console.log(mockDispatch.mock.calls)

        expect(mockDispatch.mock.calls[1][0]).toEqual({type: actions.LOG_IN_REJECTED, payload:{errMsg:"credentials incorrect"}})
        expect(mockDispatch.mock.calls[1]).toMatchSnapshot()
    })


    
    
})



