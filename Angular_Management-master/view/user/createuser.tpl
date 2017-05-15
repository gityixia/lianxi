<div class="app-create all">
	<div class="all-content container-fluid">
		<h1>New User</h1>
	<form name="user" class="form" ng-submit="goToCreateUser()" >
		<div class="row">
			<div class="col-lg-2">
				<label for="user_name">UserName：</label>
			</div>
			<div class="col-lg-4">
				<input name="username" ng-model="data.username" id="user_name" ng-maxlength="12" ng-minlength="6" ng-required="true" type="text" placeholder="Input your username">
			</div>
			<div class="col-lg-6">
				<span ng-show="user.username.$dirty && user.username.$invalid" class="text-danger">Please input username in 6-12 length</span>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<label for="pass_word">Password：</label>
			</div>
			<div class="col-lg-4">
				<input name="password" ng-model="data.password" id="pass_word" ng-required="true" type="password" placeholder="Iput your password">
			</div>
			<div class="col-lg-6">
				<span ng-show="user.password.$dirty && user.password.$invalid" class="text-danger">The password is must be input</span>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<label for="tel">PhoneNum：</label>
			</div>
			<div class="col-lg-4">
				<input name="tel" ng-model="data.tel" id="tel" type="text" ng-pattern="/^1\d{10}$/" placeholder="Input your phone number">
			</div>
			<div class="col-lg-6">
				<span ng-show="user.tel.$invalid" class="text-danger">The number must be starting with 1 and the length is 11</span>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<label>Gender：</label>
			</div>
			<div class="col-lg-4">
				<label class="choose">man<input name="sex" ng-model="data.sex" value="man" type="radio" ng-checked="true"></label>
				<label class="choose">woman<input name="sex" ng-model="data.sex" value="woman" type="radio"></label>
			</div>
			<div class="col-lg-6">
				<!-- <span class="text-danger" ng-show="user.sex.$pristine ">Must choose your gender</span> -->
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<label for="intro">Introduction：</label>
			</div>
			<div class="col-lg-4">
				<textarea name="intro" ng-model="data.intro" id="intro" placeholder="Input your introduction,and the max-length is 400" ng-maxlength="400"></textarea>
			</div>
			<div class="col-lg-6">
				<span ng-show="user.intro.$invalid" class="text-danger"></span>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-10 col-lg-offset-2">
				<button ng-disabled="user.$invalid" type="submit" class="btn btn-success">Submit</button>
			</div>
		</div>
	</form>
	</div>
</div>