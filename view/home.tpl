<div class="home">
	<div class="container-fluid include">
		<div class="time row clearfix">
			<h2 class="col-lg-9">Today is {{day | date : 'yyyy-MM-dd'}}</h2>
			<h2 class="col-lg-3">Now is {{time | date : 'HH:mm:ss'}}</h2>
		</div>
		<div class="chart row clearfix">
			<div class="frame-box">
				<h3>Browsers traffic percentage graph</h3>
				<div class="chart-2">
				</div>
			</div>
			<div class="frame-box">
				<h3>2016 Monthly Visits Statistics</h3>
				<div class="chart-1">
				</div>
			</div>
			<div class="frame-box comment">
				<h3>Recent Comments</h3>
				<span class="tick">{{data.comments.length}}</span>
				<ul id="ul">
					<li class="clearfix" ng-repeat="item in data.comments">
						<img ng-src="{{item.src}}">
						<div class="comment-text">
							<p>{{item.title}} - <strong>{{item.name}}
	</strong></p>
	<span>{{item.week}}</span>
	<p class="text">{{item.comment}}</p>

						</div>
					</li>
				</ul>
			</div>
			<div class="frame-box crowd">
				<h3>Most active articles' Categories</h3>
				<div class="content">
					<p>The most visited articles' categories</p>
					<table class="table table-hover">
						<tr>
							<th>Articles</th>
							<th>Visits</th>
						</tr>
						<tr ng-repeat="item in data.articles  | orderBy : 'Visits':true">
							<td>{{item.Articles}}</td>
							<td>{{item.Visits}}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>

	</div>
</div>