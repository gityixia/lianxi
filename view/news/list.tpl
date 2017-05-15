<div class="all news-list">
	<div class="all-content container-fluid">
		<h1>News List</h1>
		<div class="row title">
			<div class="col-lg-1 text-center">ID</div>
			<div class="col-lg-2">Title</div>
			<div class="col-lg-1">Author</div>
			<div class="col-lg-3">Time</div>
			<div class="col-lg-5">Content</div>
		</div>
		<div class="row list" ng-repeat="item in list">
			<div class="col-lg-1 text-center"><a ng-href="#/newsdetail/{{item.id}}">{{item.id}}</a></div>
			<div class="col-lg-2">{{item.title}}</div>
			<div class="col-lg-1">{{item.writer}}</div>
			<div class="col-lg-3">{{item.date | date : 'yyyy-MM-dd HH:mm:ss'}}</div>
			<div class="col-lg-5">{{item.content}}</div>
		</div>
		<div class="pull-right">
			<ul class="pagination">
				<li><a ng-href="#/newslist/{{num - 1 < 1 ? 1 : num - 1}}">前一页</a></li>
				<li><a ng-href="#/newslist/{{+num + 1}}">后一页</a></li>
			</ul>
		</div>
	</div>
</div>