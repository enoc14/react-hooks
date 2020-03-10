import React, { useContext } from 'react'
import {UserContext, ChannelContext} from '../../App'

const ContextA = () => ( <ContextB /> )
const ContextB = () => ( <ContextC /> )

const ContextC = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {/* render props */}
            {/* <UserContext.Consumer>
                {user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => `User ${user}, channel ${channel}`
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}

            {/* useContext */}
            User {user}, channel {channel}
        </div>
    )
}
export default ContextA

