<div class="login">
	<div class="login-form">
		<div class="ico">
			<img src="img/login/close.png">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="pic">
			<img src="img/login/avtar.png">
		</div>
		<form name="form" ng-submit="intoHome()">
			<div class="form-group">
				<label for="usr"><img src="img/login/adm.png"></label><input id="usr" ng-model="data.username" type="text" name="username" placeholder="UserName" ng-required="true">
				<p class="note" ng-show="form.username.$dirty && form.username.$invalid">Please input your username</p>
			</div>
			<div class="form-group">
				<label for="psw"><img src="img/login/key.png"></label><input id="psw" ng-model="data.password" type="password" name="password" placeholder="PassWord" ng-required="true">
				<p class="note" ng-show="form.password.$dirty && form.password.$invalid">Please input your password</p>
			</div>
			<div class="but">
				<button  ng-disabled="form.$invalid" ng-click="clickBtn($event)">Login</button>
			</div>
		</form>
	</div>
</div>