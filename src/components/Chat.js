import React from 'react'
import styled from 'styled-components';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';

function Chat() {
    return (
        <Container>
            <ChatHeader>
                <ChatContent>
                    <Title>
                        # Clever  <StarBorderIcon/>
                    </Title>
                    <Description>
                        Company-wide announcements and work-based matters
                    </Description>
                </ChatContent>
                <DetailLink>
                    <DetailLabel>
                        Details
                    </DetailLabel>
                    <InfoIcon/>
                </DetailLink>
            </ChatHeader>
            <hr/>
        </Container>
    )
}

export default Chat

const Container=styled.div`

`

const ChatHeader = styled.div`
    width:100%;
    height:50px;
    display:flex;
    align-item:center;
    padding-top:16px;
`

const ChatContent =styled.div`
    padding-left:16px;
`

const DetailLink = styled.div`
    display:flex; 
    align-items:center; 
    padding-right:16px;
    position:absolute;
    right:0;
    justify-content: space-between;
`

const Title=styled.div`
    display:flex;
    align-items: center;
    padding-bottom:6px;

`

const Description=styled.div`

`
const DetailLabel=styled.div`

`