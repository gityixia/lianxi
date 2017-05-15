<div class="user-list container-fluid">
    <div class="page-path">
        <p><a href="#">Home</a>&nbsp;/&nbsp;<a href="#">Page</a>&nbsp;/&nbsp;<span>Users</span></p>
    </div>
    <div class="title-nav container-fluid clearfix">
        <h1>Users</h1>
        <div class="btn-group .btn-group-lg niu" role="group" aria-label="">
            <button type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-download" aria-hidden="true"></span> Eport
            </button>
            <button type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> Mail
            </button>
            <button type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Setting
            </button>
        </div>
    </div>
    <div class="panel panel-default panel-bg clearfix">
        <div class="panel-heading clearfix panel-bg-1">
            <div class="head-title ">
                <span class="glyphicon glyphicon-user"></span> Employees
            </div>
            <!-- Button trigger modal -->
            <button type="button" class="model btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
               <span class="glyphicon glyphicon-film"></span> Save
            </button>
            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel"></h4>
                        </div>
                        <div class="modal-body bg-danger">
                        Are you sure to save the changes before?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel-body">
            <div class="col-lg-6">
                <div class="input-group">
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <input type="text" class="form-control" aria-label="...">
                </div>
            </div>
            <div class="col-lg-6">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for...">
                    <span class="input-group-btn">
		       			<button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
		      		</span>
                </div>
            </div>
        </div>
        <table class="table">
            <tr class="tou">
                <th>User</th>
                <th>Group</th>
                <th>Registed</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            <tr ng-repeat="item in list">
                <td>{{item.User}}</td>
                <td>{{item.Group}}</td>
                <td>{{item.Registered}}</td>
                <td>
					<span ng-class="{'label label-success' : item.Status === 'Active','label label-default': item.Status === 'Leave','label label-primary':item.Status === 'Coming'}">{{item.Status}}</span>
                </td>
                <td>
                	<div class="dropdown">
					  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					    Action
					    <span class="caret"></span>
					  </button>
					  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
					    <li><a href="#"><span class="glyphicon glyphicon-envelope"></span> Email</a></li>
					    <li><a href="#"><span class="glyphicon glyphicon-pencil"></span> Edit</a></li>
					    <li><a href="#"><span class="glyphicon glyphicon-trash"></span> Delete</a></li>
					  </ul>
					</div>
                </td>

            </tr>
        </table>
		<nav aria-label="..." class="pull-right page-nav">
		  <ul class="pagination">
		    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
		    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
		    <li><a href="#">2</a></li>
		    <li><a href="#">3</a></li>
		    <li><a href="#">4</a></li>
		    <li><a href="#">5</a></li>
		    <li>
		      <a href="#" aria-label="Next">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		  </ul>
</nav>
    </div>
 
</div>
