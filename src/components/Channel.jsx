import React from 'react'

const Channel = ({title}) => {
  return (
    <div id="manageTeamChannel" class="tab-pane fade">
    <ul class="ul_select">
        <li>
            <p class="prop-text team_select_title">팀</p>
            <select class="input_wide team_select" onchange="getTeamInChannels()"></select>
        </li>
        <li>
            <p class="prop-text channel_select_title">채널</p>
            <select class="input_wide channel_select" onchange="setDetailChannel()"></select>
        </li>
        <li>
            <p class="prop-text create_channel_subject_title">채널이름</p>
            <input type="text" class="input_wide create_channel_subject" placeholder="채널 이름을 지정하세요."/>
        </li>
        <li>
            <p class="prop-text create_channel_content_title">설명</p>
            <input type="text" class="input_wide create_channel_content" placeholder="내용를 입력하세요."/>
        </li>
    </ul>

</div>
  )
}

export default Channel