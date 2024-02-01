import React from 'react'

const Chatting = ({title }) => {
  return (
    <div id="sendMes" class="tab-pane fade active in">
    <ul class="ul_select">
        <li>
            <p class="prop-text chat_type_title">종류</p>
            <select class="input_wide" onchange="chatTypeChange(this);">
                <option value="chat">채팅</option>
                <option value="call">통화</option>
                <option value="video">영상통화</option>
            </select>
        </li>
        <li id="groupChatNameArea">
            <p class="prop-text chat_name_title">그룹채팅이름</p>
            <input type="text" class="input_wide chat_subject" placeholder="채팅 이름을 입력하세요.(옵션)" />
        </li>
    </ul>
    <div class="btn_group btn_group_last">
		<button class="btn_blue2 btn_send btn_msg_send">보내기</button>
		<button class="btn_line2 btn_cancel">취소</button>
    </div>
</div>
  )
}

export default Chatting