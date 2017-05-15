<div class="app-create  all">
	<div class="all-content container-fluid">
		<h1>New News</h1>
		<form class="form" name="news" ng-submit="goToCreateNews()">
			<div class="row">
				<div class="col-lg-2"><label for="news_title">Title：</label></div>
				<div class="col-lg-6"><input name="title" ng-model="data.title" required id="news_title" type="text" placeholder="Please input news title"></div>
				<div class="col-lg-4"><span ng-show="news.title.$dirty && news.title.$invalid" class="text-danger">Please input news title</span></div>
			</div>
			<div class="row">
				<div class="col-lg-2"><label for="news_writer">Author：</label></div>
				<div class="col-lg-6"><input name="writer" ng-model="data.writer" required id="news_writer" type="text" placeholder="lease input the news author"></div>
				<div class="col-lg-4"><span ng-show="news.writer.$dirty && news.writer.$invalid" class="text-danger">Please input the news author</span></div>
			</div>
			<div class="row">
				<div class="col-lg-2"><label for="news_content">Content：</label></div>
				<div class="col-lg-6"><textarea name="content" ng-model="data.content" required id="news_content" placeholder="please input the content"></textarea></div>
				<div class="col-lg-4"><span ng-show="news.content.$dirty && news.content.$invalid" class="text-danger">please input the content</span></div>
			</div>
			<div class="row">
				<div class="col-lg-10 col-lg-offset-2"><button ng-disabled="news.$invalid" type="submit" class="btn btn-success">Submit</button></div>
			</div>
		</form>
	</div>
</div>