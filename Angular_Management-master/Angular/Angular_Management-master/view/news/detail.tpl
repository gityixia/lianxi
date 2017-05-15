<div class="app-news-detail all">
	<div class="all-content container-fluid">
		<h1>News Details</h1>
		<div class="row list text-right">
			<div class="col-lg-2">新闻标题：</div>
			<div class="col-lg-10 text-left">{{data.title}}</div>
		</div>
		<div class="row list text-right">
			<div class="col-lg-2">新闻作者：</div>
			<div class="col-lg-10 text-left">{{data.writer}}</div>
		</div>
		<div class="row list text-right">
			<div class="col-lg-2">发布时间：</div>
			<div class="col-lg-10 text-left">{{data.date | date : 'yyyy-MM-dd HH:mm:ss'}}</div>
		</div>
		<div class="row list text-right">
			<div class="col-lg-2">新闻内容：</div>
			<div class="col-lg-10 text-left">{{data.content}}</div>
		</div>
	</div>
</div>