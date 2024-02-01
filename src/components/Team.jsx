import React from 'react'

const Team = ({title }) => {
  return (
	<div id="manageOwnedGroup" class="tab-pane fade">
		<ul class="ul_select">
			<li>
				<p class="prop-text group_select_title">팀</p>
				<div class="combobox-wrapper">
					<select class="input_wide group_select" onchange="onSetTeam();"><option value="">신규팀</option></select>
				</div>
			</li>
			<li>
				<p class="prop-text create_group_subject_title">팀이름</p>
				<input type="text" class="input_wide create_group_subject" placeholder="팀 이름을 지정하세요."/>
			</li>
			<li>
				<p class="prop-text create_group_content_title">설명</p>
				<input type="text" class="input_wide create_group_content" placeholder="내용를 입력하세요."/>
			</li>
		</ul>
		<div class="btn_group btn_group_last">
			<button class="btn_blue2 btn_create">생성</button>
    	</div>
	</div>
  )
}

export default Team