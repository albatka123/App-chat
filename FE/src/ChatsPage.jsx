import{PrettyChatWindow} from'react-chat-engine-pretty'

const ChatsPage = (props) =>{
    return(
        <div style={{height: '100vh'}}>
            <PrettyChatWindow 
                projectId='8165951c-d680-4f8d-968b-f008aa4ea5a4'
                username={props.user.username}
                secret={props.user.secret}
                style={{height:'100%'}} 
                />
        </div>
    )
}
export default ChatsPage