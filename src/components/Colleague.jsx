import React from 'react'

const Colleague = ({title }) => {
  return (
    <div id="manageGroupMember" class="tab-pane fade" >
		<ul class="ul_select">
			<li>
				<p class="prop-text manageGroupMember_team_select_title">팀</p>
				<select class="input_wide manageGroupMember_team_select" onchange="getTeamInMembers();"></select>
			</li>
			<li>
				<p class="prop-text manageGroupMember_member_select_title">팀원</p>
				<div class="box_view_user">
					<div class="top_table team_top_table">
						<div class="pull-left">
							<input type="checkbox" style={{ display: 'none' }} id="teamMemberAddChk"/>
							<button class="btn_blue2 mr_5 btn_check_all" onclick="checkedAll('teamMemberAddChk', 'tbodyList-teamMemverList');">전체선택</button>
						</div>
						<div class="pull-right">
							<button class="btn_blue2 btn_user_add mr_5" onclick="onAddTeamMember();">추가</button>
							<button class="btn_line2 btn_delete" onclick="onRemoveTeamMember();">삭제</button>
						</div>
					</div>
					<div class="bottom_table team_bottom_table">
						<table class="table_design">
							{/* <colgroup>
								<col width="45">
								<col>
							</colgroup> */}
							<tbody id="tbodyList-teamMemverList"></tbody>
						</table>
					</div>
				</div>
			</li>
		</ul>
    </div>
  )
}

export default Colleague