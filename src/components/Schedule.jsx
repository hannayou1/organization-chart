import React from 'react'

const Schedule = ({title }) => {
  return (
	<div id="schedule" class="tab-pane fade">
		<ul class="ul_select">
			<li>
				<p class="prop-text schedule_subject_title">제목</p>
				<input type="text" class="input_wide schedule_subject" id="tbEventTitle" placeholder="제목을 입력하세요."/>
			</li>
			<li>
				<p class="prop-text schedule_content_title">내용</p>
				<textarea class="input_textarea schedule_content" id="taEventDesc" placeholder="내용를 입력하세요." style={{height:"200px"}}></textarea>
			</li>
		</ul>
		<div class="btn_group btn_group_last">
			<button class="btn_blue2 btn_send btn_schdule">예약</button>
    	</div>
	</div>
  )
}

export default Schedule