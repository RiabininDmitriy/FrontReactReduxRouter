import React from 'react'


class ChatElement extends React.Component{
    render(){
        const {mssObj} = this.props
                return(
      <div>
          <b id = "chatElem1"> {`${mssObj.user.user} : `} </b>
          <b id = "chatElem">{mssObj.message}</b>
          {/* <b>{`  :  ${mssObj.time}`}</b> */}
      </div>  
        )
    }
}

export default ChatElement